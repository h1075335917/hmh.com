# JAVA-Hutool

### 错误记录


### Failed to start component [Connector[HTTP/1.1-8888]]


端口占用


### connect reset


原因: http请求连接，发送请求到服务端 , 请求端还没获取到数据 , 服务端就离开连接 , 请求端就会报这个错


### java.io.IOException: DerInputStream.getLength(): lengthTag=111, too big.


这个插件的作用是在maven编译打包项目的时候忽略指定后缀的文件，秘钥如果不忽略就会被编译，编译后就会出问题


```xml

<build>

    <plugins>

        <plugin>

            <groupId>org.apache.maven.plugins</groupId>

            <artifactId>maven-resources-plugin</artifactId>

            <configuration><encoding>UTF-8</encoding>

                <!-- 过滤后缀为pem、pfx的证书文件 -->

                <nonFilteredFileExtensions>

                    <nonFilteredFileExtension>p12</nonFilteredFileExtension>

                    <nonFilteredFileExtension>cer</nonFilteredFileExtension>

                    <nonFilteredFileExtension>pem</nonFilteredFileExtension>

                    <nonFilteredFileExtension>pfx</nonFilteredFileExtension>

                </nonFilteredFileExtensions>

            </configuration>

        </plugin>

    </plugins>

</build>

```


### Shorten command line | Invalid bound statement (not found)


- none(默认):不缩短JVM参数，直接把所有classpath作为JVM参数穿进去

- JAR manifest：把所有classpath写入到临时的claapath.jar包中的manifest文件中，在manifest文件的Class-Path属性中指定所有的classpath。然后JVM参数中指定classpath参数为claapath.jar所在的绝对路径

- classpath file：把所有的classpath写入到临时的文本文件中，然后把classpath设置到idea自定义的URLClassLoader中，然后使用自定义的URLClassLoader加载程序入口，反射调用main方法。main方法所在的类的ClassLoader就是idea自定义的URLClassLoader


### $ref


实体转化为json字符串后出现了$ref字样的东西，这是因为在传输的数据中出现相同的对象时，fastjson默认开启引用检测将相同的对象写成引用的形式.引用是通过"$ref"来表示的：


- "$ref":".."	上一级

- "$ref":"@"	当前对象，也就是自引用

- "$ref":"$"	根对象

- "$ref":"$.children.0"	基于路径的引用，相当于 root.getChildren().get(0)


重复引用的解决方法：


1. 单个关闭 JSON.toJSONString(object, SerializerFeature.DisableCircularReferenceDetect);

2. 全局配置关闭 

   JSON.DEFAULT_GENERATE_FEATURE |= SerializerFeature.DisableCircularReferenceDetect.getMask();


### failed to load elasticsearch nodes


failed to load elasticsearch nodes : org.elasticsearch.client.transport.NoNodeAvailableException: None of the configured nodes are available: `[{#transport#-1}{127.0.0.1}{127.0.0.1:9200}] [localhost-startStop-1]`


使用的SpringData版本与ElasticSearch版本不匹配导致的，ElasticSearch7需要使用SpringData ElasticSearch4以上版本


### NoClassDefFoundError: org/apache/commons/pool2/impl/GenericObjectPoolConfig


问题：没有线程池

解决：添加commons-pool2依赖


### gateway访问出现503


原因：nacos兼容feign，feign集成ribbon，默认实现负载均衡；但是nacos不兼容springcloud gateway自带的ribbon


解决：


```xml

<dependency>

    <groupId>org.springframework.cloud</groupId>

    <artifactId>spring-cloud-starter-openfeign</artifactId>

</dependency>

<dependency>

    <groupId>org.springframework.cloud</groupId>

    <artifactId>spring-cloud-loadbalancer</artifactId>

</dependency>

```


### springcloud-nacos报错org.apache.http.impl.client.HttpClientBuilder类找不到问题


原因：http版本不兼容（springboot和nacos都有http依赖）


解决：父工程中显示声明 httpclient 的版本


```xml

<properties>

   <httpclient.version>4.5</httpclient.version>

</properties>

<dependencyManagement>

   <dependencies>

       <dependency>

           <groupId>org.apache.httpcomponents</groupId>

           <artifactId>httpclient</artifactId>

           <version>${httpclient.version}</version>

       </dependency>

   </dependencies>

</dependencyManagement>

```


### cloud2021，解决其它模块依赖，获取不到bootstrap配置问题


```xml

<dependency>

    <groupId>org.springframework.cloud</groupId>

    <artifactId>spring-cloud-starter-bootstrap</artifactId>

</dependency>

```


### Invalid host: lb://hmh_cloud_system


原因：服务名称中的下划线，源码中无法解析，所以微服务的服务名不建议添加带下划线


解决：lb://hmh_cloud_system 改成 lb://hmh-cloud-system


### Failed to start bean 'documentationPluginsBootstrapper'


原因：


1. 没加配置

2. spring-boot版本与Swagger2不兼容


解决：或   第二种：@EnableWebMvc


```yaml

spring:

 mvc:

  pathmatch:

   matching-strategy: ant_path_matcher

```


### 'org.springframework.security.oauth2.jwt.ReactiveJwtDecoder' that could not be found.


添加配置：


```yaml

spring

 security:

  oauth2:

   resourceserver:

    jwt:

     jwk-set-uri: 'http://localhost:9992/rsa/publicKey' #公钥获取地址

```


### org.apache.ibatis.binding.BindingException: Invalid bound statement (not found)


解决：


- 将xml文件写到resource下


  ```xml

  <build>

      <resources>

          <resource>

              <directory>src/main/java</directory>

              <includes>

                  <include>**/*.xml</include>

              </includes>

              <filtering>false</filtering>

          </resource>

      </resources>

  </build>

  ```


- ```yaml

  mybatis-plus:

   mapper-locations:

    - classpath:xml/*.xml

    - classpath*:com/**/mapper/xml/*.xml

  ```


### Unable to make field private final java.lang.String java.io.File.path accessible: module java.base does not “opens java.io” to unnamed module


原因：jdk版本过高


### 配置文件@报错


原因：无法替换maven配置属性参数


解决：resources.filtering设置成true


### skywalking | gateway报错



解决：将optional-plugins目录下面的apm-spring-cloud-gateway-3.x-plugin-8.12.0.jar 和apm-spring-webflux-5.x-plugin-8.12.0.jar两个包拷贝到plugins目录下面去


### sql报错问题


```sql

-- 报错的语句

SELECT

	id,

	issue_id issueId,

	project_id,

	count( 1 ) sumReceiptsTerm,

	ifnull( sum( current_sum_interest ), 0 ) + ifnull( sum( receive_finance_amount ), 0 ) sumReceiveAmount,

	charge_plan_type chargePlanType 

FROM

	pms_issue_invest_charge_plan 

WHERE

	project_id = 1

	AND charge_plan_status = 3

GROUP BY

	charge_plan_type,

	issue_id

-- 报错原因

此错误与 SQL 模式有关ONLY_FULL_GROUP_BY，该模式对GROUP BY子句强制执行严格的规则。在此模式下，当您使用 时GROUP BY，SELECT子句中的所有列都必须是GROUP BY子句的一部分或与聚合函数一起使用。

在查询中，选择的列如id、issue_id、 和project_id不是GROUP BY子句的一部分，并且不与聚合函数一起使用

-- 解决方案一：GROUP BY在子句中包含非聚合列：您可以修改查询以在GROUP BY子句中包含所有非聚合列。例如：

SELECT

    id,

    issue_id issueId,

    project_id,

    count(1) sumReceiptsTerm,

    ifnull(sum(current_sum_interest), 0) + ifnull(sum(receive_finance_amount), 0) sumReceiveAmount,

    charge_plan_type chargePlanType

FROM

    pms_issue_invest_charge_plan

WHERE

    project_id = 1

    AND charge_plan_status = 3

GROUP BY

    id, issue_id, project_id, charge_plan_type;

-- 解决方案二：使用聚合函数：如果您不需要列出结果中的各个值，而是想对它们执行计算，则可以对所有列使用聚合函数。例如：

SELECT

    MAX(id) id,

    MAX(issue_id) issueId,

    MAX(project_id) project_id,

    COUNT(1) sumReceiptsTerm,

    IFNULL(SUM(current_sum_interest + receive_finance_amount), 0) sumReceiveAmount,

    charge_plan_type chargePlanType

FROM

    pms_issue_invest_charge_plan

WHERE

    project_id = 1

    AND charge_plan_status = 3

GROUP BY

    charge_plan_type;

-- 解决方案三：禁用ONLY_FULL_GROUP_BY模式：除非您有充分的理由这样做，否则不建议这样做，因为这可能会导致不可预测的结果。要禁用此模式，您可以修改 MySQL 配置。找到您的 MySQL 配置文件（通常名为my.cnf或my.ini）并添加或修改sql-mode设置：

[mysqld]

sql-mode=""

```


### idea一直在Update index


```sq;

-- 原因

idea缓存出现问题

-- 解决

File->Invalidate Caches...->Invalidate and Restart

```


### --enable- preview


```sql

-- 错误

预览 API,默认情况下 处于 禁用状态 请使用 --enable- preview 以启用预览 API

-- 原因

使用的api是预览功能

-- 解决

maven配置

```


```xml

<plugin>

    <groupId>org.apache.maven.plugins</groupId>

    <artifactId>maven-compiler-plugin</artifactId>

    <configuration>

        <compilerArgs>

            <compilerArg>--enable-preview</compilerArg>

        </compilerArgs>

    </configuration>

</plugin>

```


### 启动项目GC overhead limit exceeded


调整设置的编译内存。Compiler


### fastjson反序列化报错或者丢失字段


被反序列化的类需要一个无参构造函数。否则会去尝试使用带参构造，可能会丢失字段或报错。


### java.sql.SQLException: The server time zone value ‘???ú±ê×??±??‘ is unrecognized or...


无法识别或代表多个时区如果要利用时区支持，则必须配置服务器或[JDBC驱动](https://so.csdn.net/so/search?q=JDBC驱动&spm=1001.2101.3001.7020)程序（通过serverTimezone配置属性）以使用更具体的时区值。


解决方法：这是由于数据库和系统时区差异所造成的，在JDBC连接的URL后面加上serverTimezone = GMT即可解决问题，如果需要使用[GMT](https://so.csdn.net/so/search?q=GMT&spm=1001.2101.3001.7020) + 8时区，需要写成GMT％2B8，否则会被解析为空。再一个解决办法就是使用低版本的MySQL jdbc驱动：`serverTimezone = GMT";`
