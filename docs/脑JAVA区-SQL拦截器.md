### Executor query 方法

```java
<E> List<E> query(
      MappedStatement ms, 
      Object parameter, 
      RowBounds rowBounds, 
      ResultHandler resultHandler, 
      CacheKey cacheKey, 
      BoundSql boundSql) throws SQLException;

<E> List<E> query(
      MappedStatement ms, 
      Object parameter, 
      RowBounds rowBounds, 
      ResultHandler resultHandler) throws SQLException;
```

### 拦截器配置和调用顺序

> 拦截不同对象

```sql
-- mybatis拦截器可以拦截如下4中类型
Executor：sql的内部执行器
ParameterHandler：拦截参数的处理
StatementHandler：拦截sql的构建
ResultSetHandler：拦截结果的处理

如：
StatementHandler 属于 Executor 执行过程中的一个子过程。
所以这两种不同类别的插件在配置时，一定是先执行 Executor 的拦截器，然后才会轮到 StatementHandler。
所以这种情况下配置拦截器的顺序就不重要了，在 MyBatis 逻辑上就已经控制了先后顺序。
```

> 拦截同一种对象的同一个方法

```sql
如：如下几个拦截器，都是拦截的 Executor 的 query 方法
<plugins>
    <plugin interceptor="com.github.pagehelper.ExecutorQueryInterceptor1"/>
    <plugin interceptor="com.github.pagehelper.ExecutorQueryInterceptor2"/>
    <plugin interceptor="com.github.pagehelper.ExecutorQueryInterceptor3"/>
</plugins>

-- 执行顺序（ 3>2>1>Executor>1>2>3）
Interceptor3 前置处理
Interceptor2 前置处理
Interceptor1 前置处理  
Object result = executor.query(4个参数方法);     
Interceptor1 后续处理   
Interceptor2 后续处理  
Interceptor3 后续处理   
return result;
```



### 分页插件 5.0 

> 顺序打乱-执行6参query方法

```java
//拦截器直接替代了原有 Executor 的部分逻辑，直接去调用了 6 个参数的方法，因而导致 4 个参数的后续方法被跳过了
//但是由于这里的 executor 是代理对象 所以 6 个参数的 query 方法可以被代理了，这就扰乱执行顺序
@Intercepts(@Signature(type = Executor.class, method = "query", args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class}))
public class QueryInterceptor implements Interceptor {
    @Override
    public Object intercept(Invocation invocation) throws Throwable {
        Object[] args = invocation.getArgs();
        MappedStatement ms = (MappedStatement) args[0];
        Object parameterObject = args[1];
        RowBounds rowBounds = (RowBounds) args[2];
        ResultHandler resultHandler = (ResultHandler) args[3];
        Executor executor = (Executor) invocation.getTarget();
        BoundSql boundSql = ms.getBoundSql(parameterObject);
        //可以对参数做各种处理
        CacheKey cacheKey = executor.createCacheKey(ms, parameterObject, rowBounds, boundSql);
        return executor.query(ms, parameterObject, rowBounds, resultHandler, cacheKey, boundSql);
    }
    @Override
    public Object plugin(Object target) {
        return Plugin.wrap(target, this);
    }

    @Override
    public void setProperties(Properties properties) {
    }
}
```



### 拦截 query 方法的规范

```java
//QueryInterceptor 的逻辑就是进去的是 4 个参数的方法，出去的是 6 个参数的方法。这种处理方法不仅仅不方便和一般的 Excutor 拦截器搭配使用， 当出现两个以上类似 QueryInterceptor 的插件时，由于接口变了，类似 QueryInterceptor 插件也无法连贯的执行下去。 因而有必要解决这个问题。解决的办法就是使用统一的规范。经过规范后 QueryInterceptor 如下：
@Intercepts(
    {
        @Signature(type = Executor.class, method = "query", args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class}),
        @Signature(type = Executor.class, method = "query", args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class, CacheKey.class, BoundSql.class}),
    }
)
public class QueryInterceptor implements Interceptor {
    @Override
    public Object intercept(Invocation invocation) throws Throwable {
        Object[] args = invocation.getArgs();
        MappedStatement ms = (MappedStatement) args[0];
        Object parameter = args[1];
        RowBounds rowBounds = (RowBounds) args[2];
        ResultHandler resultHandler = (ResultHandler) args[3];
        Executor executor = (Executor) invocation.getTarget();
        CacheKey cacheKey;
        BoundSql boundSql;
        //由于逻辑关系，只会进入一次
        if(args.length == 4){
            //4 个参数时
            boundSql = ms.getBoundSql(parameter);
            cacheKey = executor.createCacheKey(ms, parameter, rowBounds, boundSql);
        } else {
            //6 个参数时
            cacheKey = (CacheKey) args[4];
            boundSql = (BoundSql) args[5];
        }
        //TODO 自己要进行的各种处理
        //注：下面的方法可以根据自己的逻辑调用多次，在分页插件中，count 和 page 各调用了一次
        return executor.query(ms, parameter, rowBounds, resultHandler, cacheKey, boundSql);
    }
    @Override
    public Object plugin(Object target) {
        return Plugin.wrap(target, this);
    }
    @Override
    public void setProperties(Properties properties) {
    }
}
```



### 注意

```
1. 拦截query问题
当配置了mybatisplus插件，它会拦截query4，6参，最后整体调用6参方法，所以，拦截器只需要拦截6参即可
```

