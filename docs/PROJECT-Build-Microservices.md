### 一、使用技术

```
1. spring-cloud
2. jdk1.8
3. maven管理
4. redis缓存
5. mysql数据库
6. mongodb数据库
7. nacos注册中心和服务中心
8. RocketMQ消息中间件
```

### 二、搭建

```
1. new module --> archetypes:maven-archetype-quickstart
```

```
2. 模块引用spring-boot-starter-parent
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.6.3</version>
</parent>
```

```xml
作用：
1. 依赖版本管理<dependencyManagement>
spring-boot-starter-parent的依赖管理功能依托于spring-boot-dependencies
2. 属性配置(指定jdk版本及编码等)
    <properties>
        <java.version>1.8</java.version>
        <resource.delimiter>@</resource.delimiter>
        <maven.compiler.source>${java.version}</maven.compiler.source>
        <maven.compiler.target>${java.version}</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    </properties>
3. 资源过滤
spring-boot-starter-parent 指定了编译资源文件时将 **/application*.properties、**/application*.yml 和 **/application*.yaml 中的 maven 占位符替换为具体的属性值
    <resources>
          <resource>
            <directory>${basedir}/src/main/resources</directory>
            <filtering>true</filtering>
            <includes>
              <include>**/application*.yml</include>
              <include>**/application*.yaml</include>
              <include>**/application*.properties</include>
            </includes>
          </resource>
          <resource>
            <directory>${basedir}/src/main/resources</directory>
            <excludes>
              <exclude>**/application*.yml</exclude>
              <exclude>**/application*.yaml</exclude>
              <exclude>**/application*.properties</exclude>
            </excludes>
          </resource>
    </resources>
4. 插件配置
对于 maven-compiler-plugin，spring-boot-starter-parent 主要配置了parameters 参数，以便将方法参数名写入class文件
对于 spring-boot-maven-plugin 插件，spring-boot-starter-parent 为其配置了 repackage 目标。spring-boot-maven-plugin 插件 repackage 目标默认绑定 maven 声明周期中的 package 阶段，这样当打包后这个插件就会进一步将所有依赖的 jar 包以及当前项目的代码打包到一个 jar 包中，从而支持 jar -jar 启动 Spring Boot 项目。
spring-boot-starter-parent 指定 spring-boot-maven-plugin 插件目标后，当我们的项目指定了 parent 为 spring-boot-starter-parent 后，就可以省略插件目标配置了。
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
5. 依赖版本升级
对于 spring-boot-starter-parent 而言，我们可以直接在 properties 中指定依赖的版本。以前段时间暴露出来的 log4j 2 漏洞为例，为了升级 log4j 2 版本号，我们可以在自己的项目中进行如下配置。
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.2.7.RELEASE</version>
    </parent>
    <properties>
        <log4j2.version>2.17.2</log4j2.version>
    </properties>
对于 spring-boot-dependencies，如果要进行依赖升级，配置属性是不行的，需要在 spring-boot-dependencies 前面加上要升级的依赖的坐标。
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.apache.logging.log4j</groupId>
                <artifactId>log4j-to-slf4j</artifactId>
                <version>2.17.2</version>
            </dependency>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>2.2.7.RELEASE</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
如果要升级的依赖不是spring-boot-starter-parent或spring-boot-dependencies管理的依赖，还可以直接把它加到 dependencies 标签下，这样依据最短路径原则，我们直接配置的依赖会覆盖间接引入的依赖
    <dependencies>
        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-core</artifactId>
            <version>2.17.2</version>
        </dependency>
    </dependencies>
```

### Nacos-Spring-Cloud

```
配置中心：
1. 依赖
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
    <version>${latest.version}</version>
</dependency>
2. 在 bootstrap.properties 中配置 Nacos server 的地址和应用名
spring.cloud.nacos.config.server-addr=127.0.0.1:8848
spring.application.name=example
3. 在 Nacos Spring Cloud 中，dataId 的完整格式如下：
${prefix}-${spring.profiles.active}.${file-extension}
prefix 默认为spring.application.name值，也可以通过配置项spring.cloud.nacos.config.prefix来配置。
spring.profiles.active 即为当前环境对应的profile
file-exetension为配置内容的数据格式，可以通过配置项spring.cloud.nacos.config.file-extension 来配置。目前只支持properties和yaml 类型
4. 通过 Spring Cloud 原生注解 @RefreshScope 实现配置自动更新
```

```ya
注册中心：
1. 依赖
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
    <version>${latest.version}</version>
</dependency>
2. 在 application.properties 中配置 Nacos server 的地址
server.port=8070
spring.application.name=service-provider
spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848
3. 通过 Spring Cloud 原生注解 @EnableDiscoveryClient 开启服务注册发现功能
4. 通过 Spring Cloud 原生注解 @EnableDiscoveryClient 开启服务注册发现功能。给 RestTemplate 实例添加 @LoadBalanced 注解，开启 @LoadBalanced 与 Ribbon 的集成
```

