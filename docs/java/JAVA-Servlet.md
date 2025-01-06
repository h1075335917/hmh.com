# Servlet

## DispatcherServlet

### 配置文件位置

```xml title="web.xml"
<servlet>
    <!--
      定义 servlet 的名称为 "dispatcher"，
      这个名称默认决定了 Spring 配置文件的位置：[servlet-name]-servlet.xml
      在这里，Spring 会自动寻找 dispatcher-servlet.xml
    -->
    <servlet-name>dispatcher</servlet-name>
    <!--
      指定使用 Spring MVC 的核心分发器 servlet
      DispatcherServlet 是 Spring MVC 的核心组件
      负责将所有请求分发到相应的处理器（Controller）
    -->
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <!--
      值为 3 表示这个 servlet 在容器启动时的加载顺序；数字越小，启动优先级越高
      如果值小于 0 或者没有指定，则只有在第一次请求时才会加载
      这里的 3 表示这个 servlet 会在容器启动时就初始化，但优先级相对较低
    -->
    <load-on-startup>3</load-on-startup>
</servlet>
```

如果要指定自定义的配置文件位置，可以添加

```xml
<init-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>/WEB-INF/spring/dispatcher-servlet.xml</param-value>
</init-param>
```

### 配置详情

```xml title="dispatcher-servlet.xml"
<!-- 
    启用 Spring MVC 注解支持，支持 @Controller, @RequestMapping 等注解
    自动注册处理器映射和适配器，自动注册以下组件：
    - RequestMappingHandlerMapping
    - RequestMappingHandlerAdapter
    - ExceptionHandlerExceptionResolver
-->
<mvc:annotation-driven/>

<!--
    静态资源处理，允许直接访问指定目录下的静态文件
    将 /static/** 的请求映射到 /static/ 目录下的资源
-->
<mvc:resources mapping="/js/**" location="/WEB-INF/js/" />
<mvc:resources mapping="/css/**" location="/WEB-INF/css/" />
<mvc:resources mapping="/fonts/**" location="/WEB-INF/fonts/" />
<mvc:resources mapping="/plugins/**" location="/WEB-INF/plugins/" />
<mvc:resources mapping="/images/**" location="/WEB-INF/images/" />
<mvc:resources mapping="/file/**" location="/WEB-INF/file/" />

<!-- 
    视图解析器配置
    支持内容协商，根据请求的 URL 后缀或参数来决定返回的视图类型
    支持多种视图类型，如 HTML、JSON、XML 等
-->
<bean class="org.springframework.web.servlet.view.ContentNegotiatingViewResolver">
    <!-- 内容协商管理器 -->
    <property name="contentNegotiationManager">
        <bean class="org.springframework.web.accept.ContentNegotiationManagerFactoryBean">
            <!-- 是否使用扩展名 -->
            <property name="favorPathExtension" value="false"/>
            <!-- 是否使用参数 -->
            <property name="favorParameter" value="true"/>
            <!-- 参数名 -->
            <property name="parameterName" value="format"/>
            <!-- 默认内容类型 -->
            <property name="defaultContentType" value="text/html"/>
            <!-- 支持的媒体类型 -->
            <property name="mediaTypes">
                <map>
                    <entry key="html" value="text/html"/>
                    <entry key="json" value="application/json"/>
                    <entry key="xml" value="application/xml"/>
                </map>
            </property>
        </bean>
    </property>
    
    <!-- 
        视图解析器列表 
        支持多种视图解析器，如 InternalResourceViewResolver 等
    -->
    <property name="viewResolvers">
        <list>
            <!-- 
                内部资源视图解析器，处理视图名到实际视图页面的映射
                支持 JSP 视图，将视图名映射到 JSP 文件
                prefix 和 suffix 用于构建完整的视图路径
            -->
            <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
                <property name="prefix" value="/WEB-INF/views/"/>
                <property name="suffix" value=".jsp"/>
            </bean>
        </list>
    </property>
</bean>

<!-- 
    控制器扫描 
    指定要扫描的包，Spring 会自动扫描该包下的所有 @Controller 注解的类
    并将其注册为 Spring 管理的 Bean
-->
<context:component-scan base-package="com.your.package"/>

<!-- 
    拦截器配置 ，可以在请求处理前后执行自定义逻辑
    指定要拦截的 URL 路径，并指定拦截器类
    拦截器类需要实现 HandlerInterceptor 接口
-->
<mvc:interceptors>
    <mvc:interceptor>
        <mvc:mapping path="/**"/>
        <bean class="com.your.package.YourInterceptor"/>
    </mvc:interceptor>
</mvc:interceptors>
```

### 示例

#### annotation-driven示例

```xml title="dispatcher-servlet.xml"
<!-- 
    启用注解驱动的 Spring MVC 
    validator：指定验证器
    - 指定自定义的验证器
    - 用于表单验证、数据校验等
    - 通常配合 @Valid 注解使用
    
    conversion-service：指定类型转换服务
    - 用于处理请求参数到 Java 对象的转换
-->
<mvc:annotation-driven
    validator="validator"
    conversion-service="conversion-service">
    <!-- 
        配置消息转换器 
        register-defaults="true" 表示注册默认的转换器
        自定义 StringHttpMessageConverter 设置 UTF-8 编码
    -->
    <mvc:message-converters register-defaults="true">
        <!-- 配置 String 消息转换器 -->
        <bean class="org.springframework.http.converter.StringHttpMessageConverter">
            <!-- 设置字符编码为 UTF-8 -->
            <constructor-arg value="UTF-8" />
        </bean>
    </mvc:message-converters>
</mvc:annotation-driven>

<bean id="conversion-service" class="org.springframework.format.support.FormattingConversionServiceFactoryBean" />
```

message-converters示例

```java
@RestController
public class ApiController {
    @GetMapping("/api/data")
    public String getData() {
        // 返回的字符串会使用 UTF-8 编码
        return "中文数据";
    }
}
```

#### LocalValidatorFactoryBean示例

```xml title="dispatcher-servlet.xml"
<bean id="validator" class="org.springframework.validation.beanvalidation.LocalValidatorFactoryBean">
    <!-- 指定使用 Hibernate Validator 实现 -->
    <property name="providerClass" value="org.hibernate.validator.HibernateValidator"/>
    <!-- 指定验证消息源 -->
    <property name="validationMessageSource" ref="validatemessageSource"/>
</bean>

<bean id="validatemessageSource" class="org.springframework.context.support.ReloadableResourceBundleMessageSource">
    <!-- 指定消息文件的基础名：对于消息文件 validatemessages.properties -->
    <property name="basename" value="classpath:validatemessages" />
    <!-- 指定消息文件的编码 -->
    <property name="fileEncodings" value="utf-8" />
    <!-- 指定消息文件的缓存时间（秒） -->
    <property name="cacheSeconds" value="120" />
</bean>
```

1. LocalValidatorFactoryBean：
- 整合 JSR-303 验证规范
- 支持 Hibernate Validator 的扩展注解
- 可以使用外部化的验证消息

2. FormattingConversionServiceFactoryBean：
- 提供类型转换服务
- 支持日期、数字等格式化
- 可以注册自定义转换器

3. ReloadableResourceBundleMessageSource：
- 可重新加载的资源包消息源
- 支持 UTF-8 编码的消息文件
- 提供消息缓存机制

#### validatemessages.properties

```properties title="validatemessages.properties"
user.name.notnull=用户名不能为空
user.age.min=年龄必须大于等于{value}岁
```

```java
@Controller
public class UserController {
    
    @PostMapping("/user")
    public String addUser(@Valid @RequestBody User user, BindingResult result) {
        if (result.hasErrors()) {
            // 获取验证错误信息
            List<String> errors = result.getAllErrors().stream()
                .map(ObjectError::getDefaultMessage)
                .collect(Collectors.toList());
            return "error";
        }
        
        return "success";
    }
}

// 实体类
public class User {
    @NotNull(message = "{user.name.notnull}")
    private String name;
    
    @Min(value = 18, message = "{user.age.min}")
    private int age;
    
    @Past(message = "{user.birthDate.past}")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birthDate;
}
```

#### interceptors示例

```xml title="dispatcher-servlet.xml"
<mvc:interceptors>
    <!-- 如果不定义 mvc:mapping path 将拦截所有的URL请求 -->
    <bean class="com.doitlite.cms.web.auth.AuthInterceptor"></bean>
</mvc:interceptors>
```