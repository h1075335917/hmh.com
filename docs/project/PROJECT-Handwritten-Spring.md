# 项目-手写Spring

手写Spring


https://liaoxuefeng.com/books/summerframework/introduction/index.html


---


### Spring设计目标


- context模块：实现ApplicationContext容器与Bean的管理。

- aop模块：实现AOP功能。

- jdbc模块：实现JdbcTemplate，以及声明式事务管理。

- web模块：实现Web MVC和REST API。

- boot模块：实现一个简化版的“Spring Boot”，用于打包运行。


---


### 实现IoC容器


#### 设计目标


Spring的IoC容器分为两类：BeanFactory和ApplicationContext。前者总是延迟创建Bean，而后者则在启动时初始化所有Bean。实际使用时，99%都采用ApplicationContext，因此，Summer Framework仅实现ApplicationContext，不支持BeanFactory。


早期的Spring容器采用XML来配置Bean，后期又加入了自动扫描包的功能，即通过`<context:component-scan base-package="org.example"/>`的配置。再后来，又加入了Annotation配置，并通过`@ComponentScan`注解实现自动扫描。如果使用Spring Boot，则99%都采用`@ComponentScan`注解方式配置，因此，Summer Framework也仅实现Annotation配置+`@ComponentScan`扫描方式完成容器的配置。


此外，Summer Framework仅支持Singleton类型的Bean，不支持Prototype类型的Bean，因为实际使用中，99%都采用Singleton。依赖注入则与Spring保持一致，支持构造方法、Setter方法与字段注入。支持`@Configuration`和`BeanPostProcessor`。至于Spring的其他功能，例如，层级容器、MessageSource、一个Bean允许多个名字等功能，一概不支持！


下表列出了Spring Framework和Summer Framework在IoC容器方面的异同：


| 功能     | Spring Framework                                             | Summer Framework               |

| -------- | ------------------------------------------------------------ | ------------------------------ |

| IoC容器  | 支持[BeanFactory和ApplicationContext](#BeanFactory和ApplicationContext) | 仅支持ApplicationContext       |

| 配置方式 | 支持XML与Annotation                                          | 仅支持Annotation               |

| 扫描方式 | 支持按包名扫描                                               | 支持按包名扫描                 |

| Bean类型 | 支持[Singleton和Prototype类型](#Singleton和Prototype类型)    | 仅支持Singleton                |

| Bean工厂 | 支持FactoryBean和@Bean注解                                   | 仅支持@Bean注解                |

| 定制Bean | 支持BeanPostProcessor                                        | 支持BeanPostProcessor          |

| 依赖注入 | 支持构造方法、Setter方法与字段                               | 支持构造方法、Setter方法与字段 |

| 多容器   | 支持父子容器                                                 | 不支持                         |


#### Annotation配置


从使用者的角度看，使用IoC容器时，需要定义一个入口配置，它通常长这样：


```java

@ComponentScan

public class AppConfig {

}

```


`AppConfig`只是一个配置类，它的目的是通过`@ComponentScan`来标识要扫描的Bean的包。如果没有明确写出包名，那么将基于`AppConfig`所在包进行扫描，如果明确写出了包名，则在指定的包下进行扫描：


- 在扫描过程中，凡是带有注解`@Component`的类，将被添加到IoC容器进行管理；


  ```java

  @Component

  public class Hello {

  }

  ```


- 我们用到的许多第三方组件也经常会纳入IoC容器管理。这些第三方组件是不可能带有`@Component`注解的，引入第三方Bean只能通过工厂模式，即在`@Configuration`工厂类中定义带`@Bean`的工厂方法：


  ```java

  @Configuration

  public class DbConfig {

      @Bean

      DataSource createDataSource(...) {

          return new HikariDataSource(...);

      }

      @Bean

      JdbcTemplate createJdbcTemplate(...) {

          return new JdbcTemplate(...);

      }

  }

  ```


#### 实现ResourceResolver


在编写IoC容器之前，我们首先要实现`@ComponentScan`，即解决“在指定包下扫描所有Class”的问题。


Java的ClassLoader机制可以在指定的Classpath中根据类名加载指定的Class，但遗憾的是，给出一个包名，例如，`org.example`，它并不能获取到该包下的所有Class，也不能获取子包。要在Classpath中扫描指定包名下的所有Class，包括子包，实际上是在Classpath中搜索所有文件，找出文件名匹配的`.class`文件。例如，Classpath中搜索的文件`org/example/Hello.class`就符合包名`org.example`，我们需要根据文件路径把它变为`org.example.Hello`，就相当于获得了类名。因此，搜索Class变成了搜索文件。


#### 实现PropertyResolver


Spring的注入分为`@Autowired`和`@Value`两种。对于`@Autowired`，涉及到Bean的依赖，而对于`@Value`，则仅仅是将对应的配置注入，不涉及Bean的依赖，相对比较简单。为了注入配置，我们用`PropertyResolver`保存所有配置项，对外提供查询功能。


实现`PropertyResolver`，它支持3种查询方式：


- 按配置的key查询，例如：`getProperty("app.title")`;

- 以`${abc.xyz}`形式的查询，例如，`getProperty("${app.title}")`，常用于`@Value("${app.title}")`注入；

- 带默认值的，以`${abc.xyz:defaultValue}`形式的查询，例如，`getProperty("${app.title:Summer}")`，常用于`@Value("${app.title:Summer}")`注入。


除了String类型外，@Value注入时，还允许`boolean`、`int`、`Long`等基本类型和包装类型。此外，Spring还支持`Date`、`Duration`等类型的注入。我们既要实现类型转换，又不能写死，否则，将来支持新的类型时就要改代码。


Spring Framework并不支持YAML配置，但Spring Boot支持。因为YAML配置比`.properties`要方便，所以我们把对YAML的支持也集成进来。


#### 创建BeanDefinition


在IoC容器中，每个Bean都有一个唯一的名字标识。Spring还允许为一个Bean定义多个名字，这里我们简化一下，一个Bean只允许一个名字。合理的方式是先定义`BeanDefinition`，它能从Annotation中提取到足够的信息，便于后续创建Bean、设置依赖、调用初始化方法等：


对于自己定义的带`@Component`注解的Bean，我们需要获取Class类型，获取构造方法来创建Bean，然后收集`@PostConstruct`和`@PreDestroy`标注的初始化与销毁的方法，以及其他信息，如`@Order`定义Bean的内部排序顺序，`@Primary`定义存在多个相同类型时返回哪个“主要”Bean。


扫描`@import`注解的Bean。


> [!warning]

>

> 看起来@Import似乎只有在启动类——也就是扫描类名时的configClass上标注才会被扫描到，并且就算扫描到类名也还需要被导入的类是被@Component标注的才会注册为bean。Spring中的@Import是支持在@Configuration这样的bean上使用@Import来导入类并且实例化的


#### 创建Bean实例


当我们拿到所有`BeanDefinition`之后，就可以开始创建Bean的实例了。Spring支持的4种依赖注入模式：


- 构造方法注入


  ```java

  @Component

  public class Hello {

      JdbcTemplate jdbcTemplate;

      public Hello(@Autowired JdbcTemplate jdbcTemplate) {

          this.jdbcTemplate = jdbcTemplate;

      }

  }

  ```


- 工厂方法注入


  ```java

  @Configuration

  public class AppConfig {

      @Bean

      Hello hello(@Autowired JdbcTemplate jdbcTemplate) {

          return new Hello(jdbcTemplate);

      }

  }

  ```


- Setter方法注入


  ```java

  @Component

  public class Hello {

      JdbcTemplate jdbcTemplate;

      @Autowired

      void setJdbcTemplate(JdbcTemplate jdbcTemplate) {

          this.jdbcTemplate = jdbcTemplate;

      }

  }

  ```


- 字段注入


  ```java

  @Component

  public class Hello {

      @Autowired

      JdbcTemplate jdbcTemplate;

  }

  ```


然而我们仔细分析，发现这4种注入方式实际上是有区别的。


区别就在于，前两种方式，即构造方法注入和工厂方法注入，Bean的创建与注入是一体的，我们无法把它们分成两个阶段，因为无法中断方法内部代码的执行。而后两种方式，即Setter方法注入和属性注入，Bean的创建与注入是可以分开的，即先创建Bean实例，再用反射调用方法或字段，完成注入。


我们再分析一下循环依赖的问题。循环依赖，即A、B互相依赖，或者A依赖B，B依赖C，C依赖A，形成了一个闭环。IoC容器对Bean进行管理，可以解决部分循环依赖问题，但不是所有循环依赖都能解决。


1. 我们先来看不能解决的循环依赖问题，假定下列代码定义的A、B两个Bean：


```java

class A {

    final B b;

    A(B b) { this.b = b; }

}


class B {

    final A a;

    B(A a) { this.a = a; }

}

```


这种通过构造方法注入依赖的两个Bean，如果存在循环依赖，是无解的，因为我们不用IoC，自己写Java代码也写不出正确创建两个Bean实例的代码。


因此，我们把构造方法注入和工厂方法注入的依赖称为强依赖，不能有强依赖的循环依赖，否则只能报错。


2. 后两种注入方式形成的依赖则是弱依赖，假定下列代码定义的A、B两个Bean：


```java

class A {

    B b;

}


class B {

    A a;

}

```


这种循环依赖则很容易解决，因为我们可以分两步，先分别实例化Bean，再注入依赖：


```java

// 第一步,实例化:

A a = new A();

B b = new B();

// 第二步,注入:

a.b = b;

b.a = a;

```


所以，对于IoC容器来说，创建Bean的过程分两步：


1. 创建Bean的实例，此时必须注入强依赖；

2. 对Bean实例进行Setter方法注入和字段注入。


第一步如果遇到循环依赖则直接报错，第二步则不需要关心有没有循环依赖。


---


#### 初始化Bean


依赖注入完成后，再循环一遍所有的`BeanDefinition`，对其调用`init`方法，完成最后一步初始化：


处理`@PreDestroy`方法更简单，在`ApplicationContext`关闭时遍历所有Bean，调用`destroy`方法即可。


如果A在构造方法创建时依赖了B的属性，而B的属性为字段注入，此时在A的构造方法里触发了空指针异常怎么办？


```java

@Componentpublic class A {    

    A(@Autowired B b){

        b.c.hello(); // BeanCreationException

    }

}

@Componentpublic class B {

    @Autowired    

    C c;

}

@Componentpublic class C {   

    public void hello(){       

        System.out.println("hello");   

    }

}

```


- 方式一：因为先处理强依赖，再处理弱依赖，所以你想初始化调用b.c.hello()只能挪到@PostConstruct里


  ```java

  @Component

  public class A {

      B b;

      A(@Autowired B b) { 

         this.b = b;

      }

      @PostConstruct

      void init() {

          b.c.hello();

      }

  }

  ```


- 方式二：使用构造方法注入：将B作为A的构造方法参数，而不是依赖于字段注入。这样可以确保在A对象实例化时，B的实例已经被正确传入。（全部强依赖）


---


#### 实现BeanPostProcessor


现在，我们已经完成了扫描Class名称、创建BeanDefinition、创建Bean实例、初始化Bean，理论上一个可用的IoC容器就已经就绪。


然而，`BeanPostProcessor`的出现改变了这一切。Spring允许用户自定义一种特殊的Bean，即实现了`BeanPostProcessor`接口，它有什么用呢？其实就是替换Bean。我们举个例子，下面的代码是基于Spring代码：


```java

@Configuration

@ComponentScan

public class AppConfig {

    public static void main(String[] args) {

        var ctx = new AnnotationConfigApplicationContext(AppConfig.class);

        // 可以获取到ZonedDateTime:

        ZonedDateTime dt = ctx.getBean(ZonedDateTime.class);

        System.out.println(dt);

        // 错误:NoSuchBeanDefinitionException:

        System.out.println(ctx.getBean(LocalDateTime.class));

    }

    // 创建LocalDateTime实例

    @Bean

    public LocalDateTime localDateTime() {

        return LocalDateTime.now();

    }

    // 实现一个BeanPostProcessor

    @Bean

    BeanPostProcessor replaceLocalDateTime() {

        return new BeanPostProcessor() {

            @Override

            public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {

                // 将LocalDateTime类型实例替换为ZonedDateTime类型实例:

                if (bean instanceof LocalDateTime) {

                    return ZonedDateTime.now();

                }

                return bean;

            }

        };

    }

}

```


运行可知，我们定义的`@Bean`类型明明是`LocalDateTime`类型，但却被另一个`BeanPostProcessor`替换成了`ZonedDateTime`，于是，调用`getBean(ZonedDateTime.class)`可以拿到替换后的Bean，调用`getBean(LocalDateTime.class)`会报错，提示找不到Bean，因为被`BeanPostProcessor`扔掉了。


可见，`BeanPostProcessor`是一种特殊Bean，它的作用是根据条件替换某些Bean。上述的例子中，`LocalDateTime`被替换为`ZonedDateTime`其实没啥意义，但实际应用中，把原始Bean替换为代理后的Bean是非常常见的，比如下面的基于Spring的代码：


```java

@Configuration

@ComponentScan

public class AppConfig {

    public static void main(String[] args) {

        var ctx = new AnnotationConfigApplicationContext(AppConfig.class);

        UserService u = ctx.getBean(UserService.class);

        System.out.println(u.getClass().getSimpleName()); // UserServiceProxy

        u.register("bob@example.com", "bob12345");

    }

    @Bean

    BeanPostProcessor createProxy() {

        return new BeanPostProcessor() {

            @Override

            public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {

                // 实现事务功能:

                if (bean instanceof UserService u) {

                    return new UserServiceProxy(u);

                }

                return bean;

            }

        };

    }

}

@Component

class UserService {

    public void register(String email, String password) {

        System.out.println("INSERT INTO ...");

    }

}

// 代理类:

class UserServiceProxy extends UserService {

    UserService target;


    public UserServiceProxy(UserService target) {

        this.target = target;

    }


    @Override

    public void register(String email, String password) {

        System.out.println("begin tx");

        target.register(email, password);

        System.out.println("commit tx");

    }

}

```


如果执行上述代码，打印出的Bean类型不是`UserService`，而是`UserServiceProxy`，因此，调用`register()`会打印出`begin tx`和`commit tx`，说明“事务”生效了。


迄今为止，创建Proxy似乎没有什么影响。让我们把代码再按实际情况扩展一下，`UserService`是用户编写的业务代码，需要注入`JdbcTemplate`：


```java

@Component

class UserService {

    @Autowired JdbcTemplate jdbcTemplate;

    
    public void register(String email, String password) {

        jdbcTemplate.update("INSERT INTO ...");

    }

}

```


而`PostBeanProcessor`一般由框架本身提供事务功能，所以它会动态创建一个`UserServiceProxy`：


```java

class UserServiceProxy extends UserService {

    UserService target;

    public UserServiceProxy(UserService target) {

        this.target = target;

    }

    @Override

    public void register(String email, String password) {

        System.out.println("begin tx");

        target.register(email, password);

        System.out.println("commit tx");

    }

}

```


调用用户注册的页面由`MvcController`控制，因此，将`UserService`注入到`MvcController`：


```java

@Controller

class MvcController {

    @Autowired UserService userService;

    @PostMapping("/register")

    void register() {

        userService.register(...);

    }

}

```


一开始，由IoC容器创建的Bean包括：


- JdbcTemplate

- UserService

- MvcController


接着，由于`BeanPostProcessor`的介入，原始的`UserService`被替换为`UserServiceProxy`：


- JdbcTemplate

- UserServiceProxy

- MvcController


那么问题来了：注意到`UserServiceProxy`是从`UserService`继承的，它也有一个`@Autowired JdbcTemplate`，那`JdbcTemplate`实例应注入到原始的`UserService`还是`UserServiceProxy`？


从业务逻辑出发，`JdbcTemplate`实例必须注入到原始的`UserService`，否则，代理类`UserServiceProxy`执行`target.register()`时，相当于对原始的`UserService`调用`register()`方法，如果`JdbcTemplate`没有注入，将直接报`NullPointerException`错误。


这时第二个问题又来了：`MvcController`需要注入的`UserService`，应该是原始的`UserService`还是`UserServiceProxy`？


还是从业务逻辑出发，`MvcController`需要注入的`UserService`必须是`UserServiceProxy`，否则，事务不起作用。


我们用图描述一下注入关系：


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/image-20240812164831094.png" alt="image-20240812164831094" width="50%" />


注意到上图的`UserService`已经脱离了IoC容器的管理，因为此时`UserService`对应的`BeanDefinition`中，存放的instance是`UserServiceProxy`。


可见，引入`BeanPostProcessor`可以实现Proxy机制，但也让依赖注入变得更加复杂。


但是我们仔细分析依赖关系，还是可以总结出两条原则：


1. 一个Bean如果被Proxy替换，则依赖它的Bean应注入Proxy，即上图的`MvcController`应注入`UserServiceProxy`；

2. 一个Bean如果被Proxy替换，如果要注入依赖，则应该注入到原始对象，即上图的`JdbcTemplate`应注入到原始的`UserService`。


---


### 实现AOP


AOP即Aspect Oriented Programming，面向切面编程，它本质上就是一个Proxy模式，只不过可以让IoC容器在运行时再组合起来，而不是事先自己用Proxy模式写死了。而实现Proxy模式的核心是拦截目标Bean的方法调用。


既然原理是方法拦截，那么AOP的实现方式不外乎以下几种：


1. 编译期：在编译时，由编译器把切面调用编译进字节码，这种方式需要定义新的关键字并扩展编译器，AspectJ就扩展了Java编译器，使用关键字aspect来实现织入；

2. 类加载器：在目标类被装载到JVM时，通过一个特殊的类加载器，对目标类的字节码重新“增强”；

3. 运行期：目标对象和切面都是普通Java类，通过JVM的动态代理功能或者第三方库实现运行期动态织入。


从复杂度看，最简单的是方案3，因为不涉及到任何JVM底层。


方案3又有两种实现方式：


1. 使用Java标准库的动态代理机制，不过仅支持对接口代理，无法对具体类实现代理；

2. 使用CGLIB或Javassist这些第三方库，通过动态生成字节码，可以对具体类实现代理。


那么Spring的实现方式是啥？Spring实际上内置了多种代理机制，如果一个Bean声明的类型是接口，那么Spring直接使用Java标准库实现对接口的代理，如果一个Bean声明的类型是Class，那么Spring就使用CGLIB动态生成字节码实现代理。


除了实现代理外，还得有一套机制让用户能定义代理。Spring又提供了多种方式：


1. 用AspectJ的语法来定义AOP，比如`execution(public * com.itranswarp.service.*.*(..))`；

2. 用注解来定义AOP，比如用`@Transactional`表示开启事务。


用表达式匹配，很容易漏掉或者打击面太大。用注解无疑是最简单的，因为这样被装配的Bean自己能清清楚楚地知道自己被安排了。因此，在Autumn Framework中，我们只支持Annotation模式的AOP机制，并且采用动态生成字节码的方式实现。


明确了需求，我们来看如何实现动态生成字节码。Spring采用的是CGLIB，因此我们去CGLIB首页看一下，不看不要紧，一看吓一跳：


> cglib is unmaintained ... migrating to something like ByteBuddy.


原来CGLIB已经不维护了，建议使用ByteBuddy。既然如此，我们就选择ByteBuddy实现AOP吧。


比较一下Spring Framework和Summer Framework对AOP的支持：


|                | Spring Framework | Summer Framework |

| -------------- | ---------------- | ---------------- |

| AspectJ方式    | 支持             | 不支持           |

| Annotation方式 | 支持             | 支持             |

| 代理接口       | 支持             | 不支持           |

| 代理类         | 支持             | 支持             |

| 实现机制       | CGLIB            | ByteBuddy        |


#### 实现ProxyResolver


为了实现AOP，我们先思考如何在IoC容器中实现一个动态代理。


在IoC容器中，实现动态代理需要用户提供两个Bean：


1. 原始Bean，即需要被代理的Bean；

2. 拦截器，即拦截了目标Bean的方法后，会自动调用拦截器实现代理功能。


拦截器需要定义接口，这里我们直接用Java标准库的`InvocationHandler`，免去了自定义接口。


假定我们已经从IoC容器中获取了原始Bean与实现了`InvocationHandler`的拦截器Bean，那么就可以编写一个`ProxyResolver`来实现AOP代理。


```java

public class ProxyResolver {

    // ByteBuddy实例:

    ByteBuddy byteBuddy = new ByteBuddy();


    // 传入原始Bean、拦截器，返回代理后的实例:

    public <T> T createProxy(T bean, InvocationHandler handler) {

        // 目标Bean的Class类型:

        Class<?> targetClass = bean.getClass();

        // 动态创建Proxy的Class:

        Class<?> proxyClass = this.byteBuddy

                // 子类用默认无参数构造方法:

                .subclass(targetClass, ConstructorStrategy.Default.DEFAULT_CONSTRUCTOR)

                // 拦截所有public方法:

                .method(ElementMatchers.isPublic()).intercept(InvocationHandlerAdapter.of(

                        // 新的拦截器实例:

                        new InvocationHandler() {

                            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {

                                // 将方法调用代理至原始Bean:

                                return handler.invoke(bean, method, args);

                            }

                        }))

                // 生成字节码:

                .make()

                // 加载字节码:

                .load(targetClass.getClassLoader()).getLoaded();

        // 创建Proxy实例:

        Object proxy;

        try {

            proxy = proxyClass.getConstructor().newInstance();

        } catch (RuntimeException e) {

            throw e;

        } catch (Exception e) {

            throw new RuntimeException(e);

        }

        return (T) proxy;

    }

}

```


注意`InvocationHandler`有两层：外层的`invoke()`传入的Object是Proxy实例，内层的`invoke()`将调用转发至原始Bean。


#### 实现Around


现在我们已经实现了ProxyResolver，下一步，实现完整的AOP就很容易了。


我们先从客户端代码入手，看看应当怎么装配AOP。


首先，客户端需要定义一个原始Bean，例如`OriginBean`，用`@Around`注解标注：


```java

@Component

@Around("aroundInvocationHandler")

public class OriginBean {

    @Value("${customer.name}")

    public String name;

    @Polite

    public String hello() {

        return "Hello, " + name + ".";

    }

    public String morning() {

        return "Morning, " + name + ".";

    }

} 

```


`@Around`注解的值`aroundInvocationHandler`指出应该按什么名字查找拦截器，因此，客户端应再定义一个`AroundInvocationHandler`：


```java

@Component

public class AroundInvocationHandler implements InvocationHandler {

    @Override

    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {

        // 拦截标记了@Polite的方法返回值:

        if (method.getAnnotation(Polite.class) != null) {

            String ret = (String) method.invoke(proxy, args);

            if (ret.endsWith(".")) {

                ret = ret.substring(0, ret.length() - 1) + "!";

            }

            return ret;

        }

        return method.invoke(proxy, args);

    }

}

```


有了原始Bean、拦截器，就可以在IoC容器中装配AOP：


```java

@Configuration

@ComponentScan

public class AroundApplication {

    @Bean

    AroundProxyBeanPostProcessor createAroundProxyBeanPostProcessor() {

        return new AroundProxyBeanPostProcessor();

    }

}

```


注意到装配AOP是通过`AroundProxyBeanPostProcessor`实现的，而这个类是由Framework提供，客户端并不需要自己实现。因此，我们需要开发一个`AroundProxyBeanPostProcessor`：


```java

public class AroundProxyBeanPostProcessor implements BeanPostProcessor {

    Map<String, Object> originBeans = new HashMap<>();

    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {

        Class<?> beanClass = bean.getClass();

        // 检测@Around注解:

        Around anno = beanClass.getAnnotation(Around.class);

        if (anno != null) {

            String handlerName;

            try {

                handlerName = (String) anno.annotationType().getMethod("value").invoke(anno);

            } catch (ReflectiveOperationException e) {

                throw new AopConfigException();

            }

            Object proxy = createProxy(beanClass, bean, handlerName);

            originBeans.put(beanName, bean);

            return proxy;

        } else {

            return bean;

        }

    }

    Object createProxy(Class<?> beanClass, Object bean, String handlerName) {

        ConfigurableApplicationContext ctx = (ConfigurableApplicationContext) ApplicationContextUtils.getRequiredApplicationContext();

        BeanDefinition def = ctx.findBeanDefinition(handlerName);

        if (def == null) {

            throw new AopConfigException();

        }

        Object handlerBean = def.getInstance();

        if (handlerBean == null) {

            handlerBean = ctx.createBeanAsEarlySingleton(def);

        }

        if (handlerBean instanceof InvocationHandler handler) {

            return ProxyResolver.getInstance().createProxy(bean, handler);

        } else {

            throw new AopConfigException();

        }

    }

    @Override

    public Object postProcessOnSetProperty(Object bean, String beanName) {

        Object origin = this.originBeans.get(beanName);

        return origin != null ? origin : bean;

    }

}

```


上述`AroundProxyBeanPostProcessor`的机制非常简单：检测每个Bean实例是否带有`@Around`注解，如果有，就根据注解的值查找Bean作为`InvocationHandler`，最后创建Proxy，返回前保存了原始Bean的引用，因为IoC容器在后续的注入阶段要把相关依赖和值注入到原始Bean。


总结一下，Autumn Framework提供的包括：


- `Around`注解；

- `AroundProxyBeanPostProcessor`实现AOP。


客户端代码需要提供的包括：


- 带`@Around`注解的原始Bean；

- 实现`InvocationHandler`的Bean，名字与`@Around`注解value保持一致。


#### 实现Before和After


我们再继续思考，Spring提供的AOP拦截器，有Around、Before和After等好几种。如何实现Before和After拦截？


实际上Around拦截本身就包含了Before和After拦截，我们没必要去修改`ProxyResolver`，只需要用Adapter模式提供两个拦截器模版，一个是`BeforeInvocationHandlerAdapter`：


```java

public abstract class BeforeInvocationHandlerAdapter implements InvocationHandler {

    public abstract void before(Object proxy, Method method, Object[] args);

    @Override

    public final Object invoke(Object proxy, Method method, Object[] args) throws Throwable {

        before(proxy, method, args);

        return method.invoke(proxy, args);

    }

}

```


客户端提供的`InvocationHandler`只需继承自`BeforeInvocationHandlerAdapter`，自然就需要覆写`before()`方法，实现了Before拦截。


After拦截也是一个拦截器模版：


```java

public abstract class AfterInvocationHandlerAdapter implements InvocationHandler {

    // after允许修改方法返回值:

    public abstract Object after(Object proxy, Object returnValue, Method method, Object[] args);


    @Override

    public final Object invoke(Object proxy, Method method, Object[] args) throws Throwable {

        Object ret = method.invoke(proxy, args);

        return after(proxy, ret, method, args);

    }

}

```


#### 扩展Annotation


截止目前，客户端只需要定义带有`@Around`注解的Bean，就能自动触发AOP。我们思考下Spring的事务机制，其实也是AOP拦截，不过它的注解是`@Transactional`。如果要扩展Annotation，即能自定义注解来启动AOP，怎么做？


假设我们后续编写了一个事务模块，提供注解`@Transactional`，那么，要启动AOP，就必须仿照`AroundProxyBeanPostProcessor`，提供一个`TransactionProxyBeanPostProcessor`，不过复制代码太麻烦了，我们可以改造一下`AroundProxyBeanPostProcessor`，用范型代码处理Annotation，先抽象出一个`AnnotationProxyBeanPostProcessor`：


```java

public abstract class AnnotationProxyBeanPostProcessor<A extends Annotation> implements BeanPostProcessor {


    Map<String, Object> originBeans = new HashMap<>();

    Class<A> annotationClass;


    public AnnotationProxyBeanPostProcessor() {

        this.annotationClass = getParameterizedType();

    }

    ...

}

```


实现`AroundProxyBeanPostProcessor`就一行定义：


```java

public class AroundProxyBeanPostProcessor extends AnnotationProxyBeanPostProcessor<Around> {

}

```


后续如果我们想实现`@Transactional`注解，只需定义：


```java

public class TransactionalProxyBeanPostProcessor extends AnnotationProxyBeanPostProcessor<Transactional> {

}

```


就能自动根据`@Transactional`启动AOP。



---


### 实现JDBC和事务


我们已经实现了IoC容器和AOP功能，在此基础上增加JDBC和事务的支持就比较容易了。


Spring对JDBC数据库的支持主要包括：


1. 提供了一个`JdbcTemplate`和`NamedParameterJdbcTemplate`模板类，可以方便地操作JDBC；

2. 支持流行的ORM框架，如Hibernate、JPA等；

3. 支持声明式事务，只需要通过简单的注解配置即可实现事务管理。


在Summer Framework中，我们准备提供一个`JdbcTemplate`模板，以及声明式事务的支持。对于ORM，反正手动集成也比较容易，就不管了。


|                            | Spring Framework | Summer Framework |

| -------------------------- | ---------------- | ---------------- |

| JdbcTemplate               | 支持             | 支持             |

| NamedParameterJdbcTemplate | 支持             | 不支持           |

| 转换SQL错误码              | 支持             | 不支持           |

| ORM                        | 支持             | 不支持           |

| 手动管理事务               | 支持             | 不支持           |

| 声明式事务                 | 支持             | 支持             |


#### 实现JdbcTemplate




#### 实现声明式事务


Spring提供的声明式事务管理能极大地降低应用程序的事务代码。如果使用基于Annotation配置的声明式事务，则一个与数据库操作相关的类只需加上`@Transactional`注解，就实现了事务支持，非常方便。


Spring的声明式事务支持JDBC本地事务和JTA分布式事务两种，事务传播模型除了最常用的`REQUIRED`，还包括Java EE定义的`SUPPORTS`、`REQUIRED_NEW`、`NESTED`等多种模式。Summer Framework出于简化目的，仅支持JDBC本地事务，事务传播模型仅支持最常用的`REQUIRED`，这样可以大大简化代码：


|                  | Spring Framework | Summer Framework |

| ---------------- | ---------------- | ---------------- |

| JDBC事务         | 支持             | 支持             |

| JTA事务          | 支持             | 不支持           |

| REQUIRED传播模式 | 支持             | 支持             |

| 其他传播模式     | 支持             | 不支持           |

| 设置隔离级别     | 支持             | 不支持           |




---


### 实现Web MVC


现在，我们已经实现了IoC容器、AOP、JdbcTemplate和声明式事务，离一个完整的框架只差一个Web MVC了。


我们先看看Spring的Web MVC主要提供了哪些组件和API支持：


1. 一个`DispatcherServlet`作为核心处理组件，接收所有URL请求，然后按MVC规则转发；

2. 基于`@Controller`注解的URL控制器，由应用程序提供，Spring负责解析规则；

3. 提供`ViewResolver`，将应用程序的Controller处理后的结果进行渲染，给浏览器返回页面；

4. 基于`@RestController`注解的REST处理机制，由应用程序提供，Spring负责将输入输出变为JSON格式；

5. 多种拦截器和异常处理器等。


Spring的Web MVC功能十分强大，涉及到的内容也非常广。相比之下，Summer Framework的Web MVC必然要聚焦在核心组件上：


|                     | Spring Framework | AUTUMN Framework |

| ------------------- | ---------------- | ---------------- |

| DispatcherServlet   | 支持             | 支持             |

| @Controller注解     | 支持             | 支持             |

| @RestController注解 | 支持             | 支持             |

| ViewResolver        | 支持             | 支持             |

| HandlerInterceptor  | 支持             | 不支持           |

| Exception Handler   | 支持             | 不支持           |

| CORS                | 支持             | 不支持           |

| 异步处理            | 支持             | 不支持           |

| WebSocket           | 支持             | 不支持           |


不过，Spring Framework的Web MVC模块对`Filter`支持有限，要想愉快地使用`Filter`，最好通过Spring Boot提供的`FilterRegistrationBean`，Autumn Framework为了便于应用程序开发自己的`Filter`，直接支持`FilterRegistrationBean`。


#### 实现启动器


在开发Web MVC模块之前，我们首先回顾下Java Web应用程序到底有几方参与。


首先，Java Web应用一般遵循Servlet标准，这个标准定义了应用程序可以按接口编写哪些组件：Servlet、Filter和Listener，也规定了一个服务器（如Tomcat、Jetty、JBoss等）应该提供什么样的服务，按什么顺序加载应用程序的组件，最后才能跑起来处理来自用户的HTTP请求。


Servlet规范定义的组件有3类：


1. Servlet：处理HTTP请求，然后输出响应；

2. Filter：对HTTP请求进行过滤，可以有多个Filter形成过滤器链，实现权限检查、限流、缓存等逻辑；

3. Listener：用来监听Web应用程序产生的事件，包括启动、停止、Session有修改等。


这些组件均由应用程序实现。


而服务器为一个应用程序提供一个“容器”，即Servlet Container，一个Server可以同时跑多个Container，不同的Container可以按URL、域名等区分，Container才是用来管理Servlet、Filter、Listener这些组件的：


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/image-20240815161223021.png" alt="image-20240815161223021" width="50%" />


另一个需要特别重要的问题是：组件由谁创建，由谁销毁。


在使用IoC容器时，注意到IoC容器也是一个Java类，IoC容器又管理着很多Bean，因此，创建顺序是：


1. 执行应用程序的入口方法`main()`；

2. 在`main()`方法中，创建IoC容器的实例；

3. IoC容器在它的内部创建各个Bean的实例。


现在，我们开发的是Web应用程序，它本身就是一堆组件，被Web服务器提供的Servlet“容器”管理，同时，又要加一个IoC容器，到底谁创建谁，谁管理谁，这个问题，必须要搞清楚。


首先，我们不能改变Servlet规范，所以，Servlet、Filter、Listener，以及IoC容器，都必须在Servlet容器内被管理：


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/image-20240815161331813.png" alt="image-20240815161331813" width="50%" />


所以我们要捋清楚这些组件的创建顺序，以及谁创建谁。


对于一个Web应用程序来说，启动时，应用程序本身只是一个`war`包，并没有`main()`方法，因此，启动时执行的是Server的`main()`方法。以Tomcat服务器为例：


1. 启动服务器，即执行Tomcat的`main()`方法；

2. Tomcat根据配置或自动检测到一个`xyz.war`包后，为这个`xyz.war`应用程序创建Servlet容器；

3. Tomcat继续查找`xyz.war`定义的Servlet、Filter和Listener组件，按顺序实例化每个组件（Listener最先被实例化，然后是Filter，最后是Servlet）；

4. 用户发送HTTP请求，Tomcat收到请求后，转发给Servlet容器，容器根据应用程序定义的映射，把请求发送个若干Filter和一个Servlet处理；

5. 处理期间产生的事件则由Servlet容器自动调用Listener。


其中，第3步实例化又有很多方式：


1. 通过在`web.xml`配置文件中定义，这也是早期Servlet规范唯一的配置方式；

2. 通过注解`@WebServlet`、`@WebFilter`和`@WebListener`定义，由Servlet容器自动扫描所有class后创建组件，这和我们用Annotation配置Bean，由IoC容器自动扫描创建Bean非常类似；

3. 先配置一个`Listener`，由Servlet容器创建`Listener`，然后，`Listener`自己调用相关接口，手动创建`Servlet`和`Filter`。


到底用哪种方式，取决于Web应用程序自己如何编写。对于使用Spring框架的Web应用程序来说，Servlet、Filter和Listener数量少，而且是固定的，应用程序自身编写的Controller数量不定，但由IoC容器管理，因此，采用方式3最合适。


具体来说，Tomcat启动一个基于Spring开发的Web应用程序时，按如下步骤初始化：


1. 为Web应用程序准备Servlet容器；

2. 根据配置实例化一个Spring提供的`Listener`；

   1. Spring提供的`Listener`在初始化时启动IoC容器；

   2. Spring提供的`Listener`在初始化时向Servlet容器注册Spring内置的一个`DispatcherServlet`。


当Tomcat把HTTP请求发送给Spring注册的`Servlet`后，因为它持有IoC容器的引用，就可以找到`Controller`实例，因此，可以把请求继续转发给对应的Controller，这样就完成了HTTP请求的处理。


另外注意到Web应用程序除了提供`Controller`外，并不必须与Servlet API打交道，因为被Spring提供的`DispatcherServlet`给隔离了。


所以，我们在开发Summer Framework的Web MVC模块时，应该以如下方式初始化：


1. 应用程序必须配置一个Summer Framework提供的Listener；

2. Tomcat完成Servlet容器的创建后，立刻根据配置创建Listener；

   1. Listener初始化时创建IoC容器；

   2. Listener继续创建DispatcherServlet实例，并向Servlet容器注册；

   3. DispatcherServlet初始化时获取到IoC容器中的Controller实例，因此可以根据URL调用不同Controller实例的不同处理方法。


我们先写一个只能输出Hello World的Servlet：


```java

public class DispatcherServlet extends HttpServlet {

    @Override

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        PrintWriter pw = resp.getWriter();

        pw.write("<h1>Hello, world!</h1>");

        pw.flush();

    }

}

```


紧接着，编写一个`ContextLoaderListener`，它实现了`ServletContextListener`接口，能监听Servlet容器的启动和销毁，在监听到初始化事件时，完成创建IoC容器和注册`DispatcherServlet`两个工作：


```java

public class ContextLoaderListener implements ServletContextListener {

    // Servlet容器启动时自动调用:

    @Override

    public void contextInitialized(ServletContextEvent sce) {

        // 创建IoC容器:

        var applicationContext = createApplicationContext(...);

        // 实例化DispatcherServlet:

        var dispatcherServlet = new DispatcherServlet();

        // 注册DispatcherServlet:

        var dispatcherReg = servletContext.addServlet("dispatcherServlet", dispatcherServlet);

        dispatcherReg.addMapping("/");

        dispatcherReg.setLoadOnStartup(0);

    }

}

```


这样，我们就完成了Web应用程序的初始化全部流程！


最后两个小问题：


1. 创建IoC容器时，需要的配置文件从哪读？这里我们采用Spring Boot的方式，默认从classpath的`application.yml`或`application.properties`读。

2. 需要的`@Configuration`配置类从哪获取？这是通过`web.xml`文件配置的：


```xml

<?xml version="1.0" encoding="UTF-8"?>

<web-app ...>

	<context-param>

        <!-- 固定名称 -->

		<param-name>configuration</param-name>

        <!-- 配置类的完整类名 -->

		<param-value>com.itranswarp.summer.webapp.WebAppConfig</param-value>

	</context-param>


	<listener>

		<listener-class>com.itranswarp.summer.web.ContextLoaderListener</listener-class>

	</listener>

</web-app>

```


在`ContextLoaderListener`的`contextInitialized()`方法内，先获取`ServletContext`引用，再通过`getInitParameter("configuration")`拿到完整类名，就可以顺利创建IoC容器了。


用Maven打包后，把生成的`xyz.war`改为`ROOT.war`，复制到Tomcat的`webapps`目录下，清除掉其他webapp，启动Tomcat，输入`http://localhost:8080`可看到输出`Hello, world!`。


这样我们就跑通了一个Web应用程序启动的全部流程。


#### 实现MVC


#### 开发Web应用




> [!tip]

>

> Servlet版本

>

> 要务必注意`servlet-api`的版本。4.0及之前的`servlet-api`由Oracle官方维护，引入的依赖项是`javax.servlet:javax.servlet-api`，编写代码时引入的包名为：

>

> ```java

> import javax.servlet.*;

> ```

>

> 而5.0及以后的`servlet-api`由Eclipse开源社区维护，引入的依赖项是`jakarta.servlet:jakarta.servlet-api`，编写代码时引入的包名为：

>

> ```java

> import jakarta.servlet.*;

> ```

>

> 教程采用最新的`jakarta.servlet:5.0.0`版本，但对于很多仅支持Servlet 4.0版本的框架来说，例如Spring 5，我们就只能使用`javax.servlet:4.0.0`版本，这一点针对不同项目要特别注意。

>

> 引入不同的Servlet API版本，编写代码时导入的相关API的包名是不同的。

>

> Tomcat版本

>

> 由于Servlet版本分为`<=4.0和>=5.0`两种，所以，要根据使用的Servlet版本选择正确的Tomcat版本。从[Tomcat版本页](https://tomcat.apache.org/whichversion.html)可知：

>

> - 使用`Servlet<=4.0`时，选择Tomcat 9.x或更低版本；

> - 使用`Servlet>=5.0`时，选择Tomcat 10.x或更高版本。


### 知识点


#### BeanFactory和ApplicationContext


在 Spring 框架中，`BeanFactory` 和 `ApplicationContext` 是两个非常重要的接口，它们都用于管理 Spring 容器中的 bean。但是它们有一些显著的区别，理解这些区别对于深入掌握 Spring 框架非常重要。


BeanFactory


作用：


`BeanFactory` 是 Spring 框架的核心接口，提供了最基本的 IoC (Inversion of Control) 容器功能。它用于管理和配置应用程序中的 bean，允许通过 bean 的 ID 获取实例。


特点：


- **延迟初始化（Lazy Initialization）**: `BeanFactory` 默认采用延迟初始化策略。它只在请求时才创建和初始化 bean。这意味着当你调用 `getBean()` 方法时，`BeanFactory` 才会初始化这个 bean。

- **轻量级**: `BeanFactory` 是一个非常轻量级的容器，适合资源受限的环境（如移动设备或小型应用）。

- **基本功能**: `BeanFactory` 提供了 Spring 容器的基本功能，如依赖注入、bean 生命周期管理等。


使用场景：


- `BeanFactory` 适用于需要手动控制 bean 初始化时机的场景，或者是在资源受限的环境中需要轻量级容器时使用。


示例：


```

java复制代码BeanFactory factory = new XmlBeanFactory(new FileSystemResource("beans.xml"));

MyBean myBean = (MyBean) factory.getBean("myBean");

```


ApplicationContext


作用：


`ApplicationContext` 是 `BeanFactory` 的子接口，提供了更高级的容器功能。除了 `BeanFactory` 提供的基本功能外，`ApplicationContext` 还增加了国际化（i18n）支持、事件传播、声明式机制、不同上下文环境的支持等。


特点：


- **预加载（Eager Initialization）**: 与 `BeanFactory` 的延迟初始化不同，`ApplicationContext` 在启动时会预先加载所有非懒加载的单例 bean。这通常在应用启动时就会初始化大部分的 bean。

- 高级特性ApplicationContext提供了许多 BeanFactory不具备的高级特性，例如：

  - **国际化**: 通过 `MessageSource` 接口提供国际化支持。

  - **事件处理**: 提供事件发布机制，允许 bean 之间通过事件机制进行通讯。

  - **自动 Bean 注册**: 自动检测并注册 `BeanPostProcessor`、`BeanFactoryPostProcessor`。

  - **多层次上下文**: 支持多种类型的上下文，如 Web 应用上下文（`WebApplicationContext`）。

- **内置集成**: `ApplicationContext` 更易于与 Spring 的 AOP、事务管理、JDBC 等功能集成。


使用场景：


- `ApplicationContext` 适用于大多数 Spring 应用场景，尤其是需要使用 Spring 的高级功能（如事件处理、国际化、AOP、事务管理）的场景。


常用实现：


- **`ClassPathXmlApplicationContext`**: 从类路径加载 XML 配置文件。

- **`FileSystemXmlApplicationContext`**: 从文件系统加载 XML 配置文件。

- **`AnnotationConfigApplicationContext`**: 基于 Java 注解的配置类。


示例：


```java

ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");

MyBean myBean = context.getBean(MyBean.class);

```


`BeanFactory` 与 `ApplicationContext` 的区别总结


- **初始化时机**: `BeanFactory` 采用懒加载策略，只有在获取 bean 时才初始化它们；而 `ApplicationContext` 在启动时就会预加载所有非懒加载的单例 bean。

- **高级功能**: `ApplicationContext` 提供了许多 `BeanFactory` 不具备的高级功能，如国际化支持、事件传播、声明式机制等。

- **使用场景**: 在大多数应用中，`ApplicationContext` 是首选，因为它提供了更丰富的功能和更强的集成能力。`BeanFactory` 通常只在需要轻量级容器或特定的性能优化场景中使用。


#### Singleton和Prototype类型


在 Spring 框架中，`Bean` 是容器中由 Spring 管理的一个对象。`Bean` 的生命周期和作用域是 Spring 容器中两个非常重要的概念。Spring 提供了多种作用域来管理 `Bean` 的生命周期，其中最常用的有 `Singleton` 和 `Prototype` 作用域。了解它们的区别以及使用场景，对于开发高效和可维护的 Spring 应用至关重要。


Singleton作用域


作用与特点


- **单例模式**: 在 `Singleton` 作用域下，Spring 容器对每个 `Bean` 定义创建一个且仅创建一个实例。这意味着，当你第一次请求一个 `Singleton` 类型的 `Bean` 时，Spring 会创建一个实例，并将该实例缓存起来，以后每次请求该 `Bean` 时，都会返回同一个实例。

- **默认作用域**: 如果你不显式地指定 `Bean` 的作用域，Spring 会默认将其设置为 `Singleton` 作用域。

- **全局共享**: `Singleton` 类型的 `Bean` 在整个 Spring 容器中全局共享，适合那些在应用程序中不变的、全局唯一的对象，比如服务类、数据访问对象（DAO）、配置类等。


使用场景


- 适用于全局共享、无状态的 `Bean`，如服务类、DAO 类、缓存管理器等。

- 当需要保证 `Bean` 实例的唯一性时，比如处理配置文件、管理连接池等。


示例


```java

@Configuration

public class AppConfig {

    @Bean

    public MyService myService() {

        return new MyService();

    }

}

```

在上面的例子中，`myService` 是一个 `Singleton` 类型的 `Bean`，无论多少次请求它，Spring 都会返回同一个实例。


Prototype作用域


作用与特点


- **原型模式**: 在 `Prototype` 作用域下，每次请求 `Bean` 时，Spring 容器都会创建一个新的实例。这意味着 `Prototype` 类型的 `Bean` 是多例的，每次调用都会得到一个新的对象。

- **非共享**: 与 `Singleton` 不同，`Prototype` 类型的 `Bean` 不会在 Spring 容器中缓存，适合那些状态依赖的、频繁变化的对象。

- **更短的生命周期**: `Prototype` 类型的 `Bean` 生命周期仅限于获取它的调用方，Spring 容器在创建该 `Bean` 实例后，不再管理其生命周期。


使用场景


- 适用于有状态的 `Bean`，或者你希望每次请求都获得不同实例的对象，比如每个用户会话的对象、任务处理对象等。

- 当 `Bean` 的状态依赖于输入参数或者外部条件时，使用 `Prototype` 可以保证每个请求得到一个独立的实例。


示例


```java

@Configuration

public class AppConfig {

    @Bean

    @Scope("prototype")

    public MyTask myTask() {

        return new MyTask();

    }

}

```

在这个例子中，每次请求 `myTask` 时，Spring 都会创建一个新的 `MyTask` 实例。


Singleton与Prototype的区别


- **实例数量**: `Singleton` 作用域的 `Bean` 在 Spring 容器中只有一个实例，`Prototype` 作用域的 `Bean` 每次请求都会创建一个新的实例。

- **生命周期**: `Singleton` 类型的 `Bean` 在 Spring 容器启动时创建并且在整个应用生命周期中都存在，而 `Prototype` 类型的 `Bean` 仅在调用时创建，Spring 不会对其进行管理或销毁。

- **状态管理**: `Singleton` 通常用于无状态的共享组件，而 `Prototype` 更适合有状态的组件。


