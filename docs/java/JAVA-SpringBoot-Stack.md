# SpringBoot技术栈

## 相关配置

### spring.servlet.multipart

`spring.servlet.multipart.max-file-size`

单个文件上传大小限制，如果上传的单个文件超过 50MB，会抛出 MaxUploadSizeExceededException 异常，默认值是 1MB

`spring.servlet.multipart.max-request-size`

请求大小限制，包括所有文件和表单数据的总和，默认值是 10MB

```java
@PostMapping("/upload")
public String handleFileUpload(@RequestParam("files") MultipartFile[] files) {
    // 可以一次上传多个文件
    // 每个文件最大 max-file-size
    // 所有文件总大小不超过 max-request-size
}
```

`spring.servlet.multipart.enabled`

启用文件上传功能（默认为 true）

`spring.servlet.multipart.file-size-threshold`

文件写入磁盘的阈值（默认 0B）

`spring.servlet.multipart.location`

文件上传临时目录

## ResponseBodyAdvice

> ResponseBodyAdvice 是对 Controller 返回的内容在 HttpMessageConverter 进行类型转换之前拦截，进行相应的处理操作后，再将结果返回给客户端。那这样就可以把统一包装的工作放到这个类里面。

```java
public interface ResponseBodyAdvice<T> {
    boolean supports(MethodParameter returnType, Class<? extends HttpMessageConverter<?>> converterType);

    @Nullable
    T beforeBodyWrite(@Nullable T body, MethodParameter returnType, MediaType selectedContentType, Class<? extends HttpMessageConverter<?>> selectedConverterType, ServerHttpRequest request, ServerHttpResponse response);
}
```

- supports：判断是否要交给 beforeBodyWrite 方法执行
- beforeBodyWrite：对 response 进行具体的处理

## spring-boot-redis

### 启动命令

```sql
-- 启动
redis-server.exe redis.windows.conf
-- 安装为服务
redis-server --service-install redis.windows.conf
-- 启动服务
redis-server --service-start 
-- 停止服务
redis-server --service-stop
-- 卸载服务
redis-server --service-uninstall
```

### 依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-redis</artifactId>
	<version>2.1.3.RELEASE</version>
</dependency>
```

### 文件配置

```yml
spring:
  redis:
    database: 13
    host: r-bp1nlprt5p3vckecl4pd.redis.rds.aliyuncs.com
    password: 'hayes:Hh2050401938'
    port: 6379
    lettuce:
      pool:
        max-active: 50   #最大连接数据库连接数,设 0 为没有限制
        max-idle: 50     #最大等待连接中的数量,设 0 为没有限制
        max-wait: -1ms  #最大建立连接等待时间。如果超过此时间将接到异常。设为-1表示无限制。
        min-idle: 0     #最小等待连接中的数量,设 0 为没有限制
```

### 配置类

```java
package com.lingyun.middleware.redis;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectMapper.DefaultTyping;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.cache.RedisCacheWriter;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import javax.annotation.Resource;
import java.lang.reflect.Method;
import java.time.Duration;
import java.util.Arrays;
import static java.util.Collections.singletonMap;
@Configuration
@CacheConfig
public class RedisConfig extends CachingConfigurerSupport {
	@Resource
	private LettuceConnectionFactory lettuceConnectionFactory;
	/**
	 * @description 自定义的缓存key的生成策略 若想使用这个key
	 *              只需要讲注解上keyGenerator的值设置为keyGenerator即可</br>
	 * @return 自定义策略生成的key
	 */
	@Override
	@Bean
	public KeyGenerator keyGenerator() {
		return new KeyGenerator() {
			@Override
			public Object generate(Object target, Method method, Object... params) {
				StringBuilder sb = new StringBuilder();
				sb.append(target.getClass().getName());
				sb.append(method.getDeclaringClass().getName());
				Arrays.stream(params).map(Object::toString).forEach(sb::append);
				return sb.toString();
			}
		};
	}
	/**
	 * RedisTemplate配置
	 */
	@Bean
	public RedisTemplate<String, Object> redisTemplate(LettuceConnectionFactory lettuceConnectionFactory) {
		// 设置序列化
		Jackson2JsonRedisSerializer<Object> jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer<Object>(Object.class);
		ObjectMapper om = new ObjectMapper();
		om.setVisibility(PropertyAccessor.ALL, Visibility.ANY);
		om.enableDefaultTyping(DefaultTyping.NON_FINAL);
		jackson2JsonRedisSerializer.setObjectMapper(om);
		// 配置redisTemplate
		RedisTemplate<String, Object> redisTemplate = new RedisTemplate<String, Object>();
		redisTemplate.setConnectionFactory(lettuceConnectionFactory);
		RedisSerializer<?> stringSerializer = new StringRedisSerializer();
		redisTemplate.setKeySerializer(stringSerializer);// key序列化
		redisTemplate.setValueSerializer(jackson2JsonRedisSerializer);// value序列化
		redisTemplate.setHashKeySerializer(stringSerializer);// Hash key序列化
		redisTemplate.setHashValueSerializer(jackson2JsonRedisSerializer);// Hash value序列化
		redisTemplate.afterPropertiesSet();
		return redisTemplate;
	}
	/**
	 * 缓存配置管理器
	 */
	@Bean
	public CacheManager cacheManager(LettuceConnectionFactory factory) {
		// 以锁写入的方式创建RedisCacheWriter对象
		RedisCacheWriter writer = RedisCacheWriter.lockingRedisCacheWriter(factory);
		// 创建默认缓存配置对象
		/* 默认配置，设置缓存有效期 1小时*/
		RedisCacheConfiguration defaultCacheConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
		/* 配置test的超时时间为120s*/
		RedisCacheManager cacheManager = RedisCacheManager.builder(RedisCacheWriter.lockingRedisCacheWriter(lettuceConnectionFactory)).cacheDefaults(defaultCacheConfig)
				.withInitialCacheConfigurations(singletonMap("test", RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofMinutes(120)).disableCachingNullValues()))
				.transactionAware().build();
		return cacheManager;
	}
	@Bean
	RedisMessageListenerContainer container(RedisConnectionFactory connectionFactory) {

		RedisMessageListenerContainer container = new RedisMessageListenerContainer();
		container.setConnectionFactory(connectionFactory);
		// container.addMessageListener(new RedisExpiredListener(), new
		// PatternTopic("__keyevent@0__:expired"));
		return container;
	}
}
```

```java
/**
 * Redis配置类
 * Created by macro on 2020/3/2.
 */
@EnableCaching
@Configuration
public class RedisConfig extends CachingConfigurerSupport {

    /**
     * redis数据库自定义key
     */
    public  static final String REDIS_KEY_DATABASE="mall";

    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
        RedisSerializer<Object> serializer = redisSerializer();
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setValueSerializer(serializer);
        redisTemplate.setHashKeySerializer(new StringRedisSerializer());
        redisTemplate.setHashValueSerializer(serializer);
        redisTemplate.afterPropertiesSet();
        return redisTemplate;
    }

    @Bean
    public RedisSerializer<Object> redisSerializer() {
        //创建JSON序列化器
        Jackson2JsonRedisSerializer<Object> serializer = new Jackson2JsonRedisSerializer<>(Object.class);
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        objectMapper.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
        serializer.setObjectMapper(objectMapper);
        return serializer;
    }

    @Bean
    public RedisCacheManager redisCacheManager(RedisConnectionFactory redisConnectionFactory) {
        RedisCacheWriter redisCacheWriter = RedisCacheWriter.nonLockingRedisCacheWriter(redisConnectionFactory);
        //设置Redis缓存有效期为1天
        RedisCacheConfiguration redisCacheConfiguration = RedisCacheConfiguration.defaultCacheConfig()
                .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(redisSerializer())).entryTtl(Duration.ofDays(1));
        return new RedisCacheManager(redisCacheWriter, redisCacheConfiguration);
    }

}
```

### 过期监听

```sql
-- 存在延迟
Redis过期事件的发布不是指key到了过期时间就发布，而是key到了过期时间被清除之后才会发布事件。
-- Redis过期key的两种清除策略：
惰性清除。当这个key过期之后，访问时，这个Key才会被清除
定时清除。后台会定期检查一部分key，如果有key过期了，就会被清除

所以即使key到了过期时间，Redis也不一定会发送key过期事件，这就到导致虽然延迟任务到了延迟时间也可能获取不到延迟任务。

-- 丢消息太频繁
Redis实现的发布订阅模式，消息是没有持久化机制，当消息发布到某个channel之后，如果没有客户端订阅这个channel，那么这个消息就丢了，并不会像MQ一样进行持久化，等有消费者订阅的时候再给消费者消费。
所以说，假设服务重启期间，某个生产者或者是Redis本身发布了一条消息到某个channel，由于服务重启，没有监听这个channel，那么这个消息自然就丢了。

-- 消息消费只有广播模式
Redis的发布订阅模式消息消费只有广播模式一种。
所谓的广播模式就是多个消费者订阅同一个channel，那么每个消费者都能消费到发布到这个channel的所有消息。

-- 接收到所有key的某个事件
这个不属于Redis发布订阅模式的问题，而是Redis本身事件通知的问题。
当监听了__keyevent@<db>__:expired的channel，那么所有的Redis的key只要发生了过期事件都会被通知给消费者，不管这个key是不是消费者想接收到的。
所以如果你只想消费某一类消息的key，那么还得自行加一些标记，比如消息的key加个前缀，消费的时候判断一下带前缀的key就是需要消费的任务。
```

```java
@Component
@Log4j2
public class RedisKeyExpirationListener extends KeyExpirationEventMessageListener {
	public RedisKeyExpirationListener(RedisMessageListenerContainer listenerContainer) {
		super(listenerContainer);
	}
	@Override
	public void onMessage(Message message, byte[] pattern) {
		//获取过期的key
		String expireKey = message.toString();
		log.info("监听到过期key：{}",expireKey);
	}
}
```

### 缓存注解

```sql
@EnableCaching：启用缓存

-- 注：在Service生效。Controller层不生效
@Cacheable：
获取缓存，缓存不存在则执行方法获取数据并把数据存入缓存
使用该注解的方法当缓存存在时，会从缓存中获取数据而不执行方法，当缓存不存在时，会执行方法并把返回结果存入缓存中。一般使用在查询方法上，可以设置如下属性：
value：缓存名称（必填），指定缓存的命名空间；
key：用于设置在命名空间中的缓存key值，可以使用SpEL表达式定义；
unless：条件符合则不缓存；
condition：条件符合则缓存。

@CachePut：
使用该注解的方法每次执行时都会把返回结果存入缓存中。一般使用在新增方法上，可以设置如下属性：
value：缓存名称（必填），指定缓存的命名空间；
key：用于设置在命名空间中的缓存key值，可以使用SpEL表达式定义；
unless：条件符合则不缓存；
condition：条件符合则缓存。

@CacheEvict：
使用该注解的方法执行时会清空指定的缓存。一般使用在更新或删除方法上，可以设置如下属性：
value：缓存名称（必填），指定缓存的命名空间；
key：用于设置在命名空间中的缓存key值，可以使用SpEL表达式定义；
condition：条件符合则缓存。
```

### Redis连接池

```xml
<!-- 
由于SpringBoot 2.x中默认并没有使用Redis连接池，所以需要在pom.xml中添加commons-pool2的依赖
-->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-pool2</artifactId>
    <version>2.10.0</version>
</dependency>
```

## spring-retry

```xml
<dependency>
  <groupId>org.springframework.retry</groupId>
  <artifactId>spring-retry</artifactId>
</dependency>
<dependency>
  <groupId>org.aspectj</groupId>
  <artifactId>aspectjweaver</artifactId>
</dependency>
```

```java
1.启动类上加启用注解 -- 开启重试机制
@EnableRetry 
2.demo
```

```java
private final static Logger logger = LoggerFactory.getLogger(RetryService.class);
private final int totalNum = 100000;
/**
 * @Retryable的参数说明： •value：抛出指定异常才会重试
 * •include：和value一样，默认为空，当exclude也为空时，默认所以异常
 * •exclude：指定不处理的异常
 * •maxAttempts：最大重试次数，默认3次
 * •backoff：重试等待策略，默认使用@Backoff，@Backoff的value默认为1000L，我们设置为2000L；multiplier（指定延迟倍数）默认为0，表示固定暂停1秒后进行重试，如果把multiplier设置为1.5，则第一次重试为2秒，第二次为3秒，第三次为4.5秒。
 */
@Retryable(value = Exception.class, maxAttempts = 3, backoff = @Backoff(delay = 2000L, multiplier = 1.5))
public int retry(int num) {
    logger.info("减库存开始" + LocalTime.now());
    try {
        int i = 1 / 0;
    } catch (Exception e) {
        logger.error("illegal");
    }
    if (num <= 0) {
        throw new IllegalArgumentException("数量不对");
    }
    logger.info("减库存执行结束" + LocalTime.now());
    return totalNum - num;
}
@Recover
public void recover(Exception e) {
    logger.warn("减库存失败！！！" + LocalTime.now());
}
```

```
注意：
1、使用了@Retryable的方法不能在本类被调用，不然重试机制不会生效。也就是要标记为@Service，然后在其它类使用@Autowired注入或者@Bean去实例才能生效。
2 、要触发@Recover方法，那么在@Retryable方法上不能有返回值，只能是void才能生效。
3 、非幂等情况下慎用
4 、使用了@Retryable的方法里面不能使用try…catch包裹，要在方法上抛出异常，不然不会触发。
```

## SpringSecurity+JWT

```xml
<!--SpringSecurity依赖配置-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<!--JWT(Json Web Token)登录支持-->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.0</version>
</dependency>
```

### SpringSecurity

```sql
-- SpringSecurity是一个强大的可高度定制的认证和授权框架，对于Spring应用来说它是一套Web安全标准。SpringSecurity注重于为Java应用提供认证和授权功能，像所有的Spring项目一样，它对自定义需求具有强大的扩展性
```

```java
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled=true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UmsAdminService adminService;
    @Autowired
    private RestfulAccessDeniedHandler restfulAccessDeniedHandler;
    @Autowired
    private RestAuthenticationEntryPoint restAuthenticationEntryPoint;
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf()// 由于使用的是JWT，我们这里不需要csrf
                .disable()
                .sessionManagement()// 基于token，所以不需要session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, // 允许对于网站静态资源的无授权访问
                        "/",
                        "/*.html",
                        "/favicon.ico",
                        "/**/*.html",
                        "/**/*.css",
                        "/**/*.js",
                        "/swagger-resources/**",
                        "/v2/api-docs/**"
                )
                .permitAll()
                .antMatchers("/admin/login", "/admin/register")// 对登录注册要允许匿名访问
                .permitAll()
                .antMatchers(HttpMethod.OPTIONS)//跨域请求会先进行一次options请求
                .permitAll()
//                .antMatchers("/**")//测试时全部运行访问
//                .permitAll()
                .anyRequest()// 除上面外的所有请求全部需要鉴权认证
                .authenticated();
        // 禁用缓存
        httpSecurity.headers().cacheControl();
        // 添加JWT filter
        httpSecurity.addFilterBefore(jwtAuthenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class);
        //添加自定义未授权和未登录结果返回
        httpSecurity.exceptionHandling()
                .accessDeniedHandler(restfulAccessDeniedHandler)
                .authenticationEntryPoint(restAuthenticationEntryPoint);
    }
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService())
                .passwordEncoder(passwordEncoder());
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    public UserDetailsService userDetailsService() {
        //获取登录用户信息
        return username -> {
            UmsAdmin admin = adminService.getAdminByUsername(username);
            if (admin != null) {
                List<UmsPermission> permissionList = adminService.getPermissionList(admin.getId());
                return new AdminUserDetails(admin,permissionList);
            }
            throw new UsernameNotFoundException("用户名或密码错误");
        };
    }
    @Bean
    public JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter(){
        return new JwtAuthenticationTokenFilter();
    }
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
```

#### 方法说明

```sql
configure(HttpSecurity httpSecurity)：用于配置需要拦截的url路径、jwt过滤器及出异常后的处理器

configure(AuthenticationManagerBuilder auth)：用于配置UserDetailsService及PasswordEncoder

RestfulAccessDeniedHandler：当用户没有访问权限时的处理器，用于返回JSON格式的处理结果

RestAuthenticationEntryPoint：当未登录或token失效时，返回JSON格式的结果

UserDetailsService:SpringSecurity定义的核心接口，用于根据用户名获取用户信息，需要自行实现

UserDetails：SpringSecurity定义用于封装用户信息的类（主要是用户信息和权限），需要自行实现

PasswordEncoder：SpringSecurity定义的用于对密码进行编码及比对的接口，目前使用的是BCryptPasswordEncoder

JwtAuthenticationTokenFilter：在用户名和密码校验前添加的过滤器，如果有jwt的token，会自行根据token信息进行登录
```

#### 接口权限

```
给查询接口添加pms:brand:read权限
给修改接口添加pms:brand:update权限
给删除接口添加pms:brand:delete权限
给添加接口添加pms:brand:create权限
```

### JWT

```sql
-- JWT是JSON WEB TOKEN的缩写，它是基于 RFC 7519 标准定义的一种可以安全传输的的JSON对象，由于使用了数字签名，所以是可信任和安全的
```

#### JWT的组成

```sql
-- 解析地址
https://jwt.io/

-- JWT token的格式
header.payload.signature

-- header中用于存放签名的生成算法
{"alg": "HS512"}

-- payload中用于存放用户名、token的生成时间和过期时间
{"sub":"admin","created":1489079981393,"exp":1489684781}

-- signature为以header和payload生成的签名，一旦header和payload被篡改，验证将失败
-- secret为加密算法的密钥
String signature = HMACSHA512(base64UrlEncode(header) + "." +base64UrlEncode(payload),secret)
```

#### JWT使用原理

```sql
1、用户调用登录接口，登录成功后获取到JWT的token
2、之后用户每次调用接口都在http的header中添加一个叫Authorization的头，值为JWT的token
3、后台程序通过对Authorization头中信息的解码及数字签名校验来获取其中的用户信息，从而实现认证和授权
```

## Hibernate Validator

```sql
-- Hibernate Validator是SpringBoot内置的校验框架，只要集成了SpringBoot就自动集成了它，我们可以通过在对象上面使用它提供的注解来完成参数校验
```

### 常用注解

```sql
@Null：被注释的属性必须为null；
@NotNull：被注释的属性不能为null；
@AssertTrue：被注释的属性必须为true；
@AssertFalse：被注释的属性必须为false；
@Min：被注释的属性必须大于等于其value值；
@Max：被注释的属性必须小于等于其value值；
@Size：被注释的属性必须在其min和max值之间；
@Pattern：被注释的属性必须符合其regexp所定义的正则表达式；
@NotBlank：被注释的字符串不能为空字符串；
@NotEmpty：被注释的属性不能为空；
@Email：被注释的属性必须符合邮箱格式
```

```xml
<!-- SpringBoot 2.3版本默认移除了校验功能，如果想要开启的话需要添加如下依赖 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

```sql
-- 实现校验
1、使用切面方式，需要 然后在添加品牌的接口中添加@Validated注解，并注入一个BindingResult参数
2、使用全局异常方式，在添加品牌的接口中添加@Validated注解
```

### 自定义注解

```java
/**
 * 首先自定义一个校验注解类FlagValidator
 * 然后添加@Constraint注解，使用它的validatedBy属性指定校验逻辑的具体实现类
 * 用户验证状态是否在指定范围内的注解
 */
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD,ElementType.PARAMETER})
@Constraint(validatedBy = FlagValidatorClass.class)
public @interface FlagValidator {
    String[] value() default {};

    String message() default "flag is not found";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
```

```java
/**
 * 状态标记校验器
 */
public class FlagValidatorClass implements ConstraintValidator<FlagValidator,Integer> {
    private String[] values;
    @Override
    public void initialize(FlagValidator flagValidator) {
        this.values = flagValidator.value();
    }

    @Override
    public boolean isValid(Integer value, ConstraintValidatorContext constraintValidatorContext) {
        boolean isValid = false;
        if(value==null){
            //当状态为空时使用默认值
            return true;
        }
        for(int i=0;i<values.length;i++){
            if(values[i].equals(String.valueOf(value))){
                isValid = true;
                break;
            }
        }
        return isValid;
    }
}
```

```java
public class PmsBrandParam {
    @ApiModelProperty(value = "是否进行显示")
    @FlagValidator(value = {"0","1"}, message = "显示状态不正确")
    private Integer showStatus;
}
```

## 全局异常处理

### 注解

```sql
@ControllerAdvice：类似于@Component注解，可以指定一个组件，这个组件主要用于增强@Controller注解修饰的类的功能，比如说进行全局异常处理

@ExceptionHandler：用来修饰全局异常处理的方法，可以指定异常的类型
```

### 使用实现

```java
//首先我们需要自定义一个异常类ApiException，当我们校验失败时抛出该异常
/** 
 * 自定义API异常
 * Created by macro on 2020/2/27.
 */
public class ApiException extends RuntimeException {
    private IErrorCode errorCode;

    public ApiException(IErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }

    public ApiException(String message) {
        super(message);
    }

    public ApiException(Throwable cause) {
        super(cause);
    }

    public ApiException(String message, Throwable cause) {
        super(message, cause);
    }

    public IErrorCode getErrorCode() {
        return errorCode;
    }
}
```

```java
//然后创建一个断言处理类Asserts，用于抛出各种ApiException
/**
 * 断言处理类，用于抛出各种API异常
 * Created by macro on 2020/2/27.
 */
public class Asserts {
    public static void fail(String message) {
        throw new ApiException(message);
    }

    public static void fail(IErrorCode errorCode) {
        throw new ApiException(errorCode);
    }
}
```

```java
//然后再创建我们的全局异常处理类GlobalExceptionHandler，用于处理全局异常，并返回封装好的CommonResult对象
/**
 * 全局异常处理
 * Created by macro on 2020/2/27.
 */
@ControllerAdvice
public class GlobalExceptionHandler {

    @ResponseBody
    @ExceptionHandler(value = ApiException.class)
    public CommonResult handle(ApiException e) {
        if (e.getErrorCode() != null) {
            return CommonResult.failed(e.getErrorCode());
        }
        return CommonResult.failed(e.getMessage());
    }
}
```