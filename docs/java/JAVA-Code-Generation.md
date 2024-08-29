# JAVA-代码生成

### mybatis-generator

```xml
<!-- mybatis代码生成插件 -->
<plugin>
    <groupId>org.mybatis.generator</groupId>
    <artifactId>mybatis-generator-maven-plugin</artifactId>
    <version>1.3.2</version>
    <configuration>
        <!--配置文件的位置-->
        <configurationFile>src/main/resources/config/generatorConfig.xml</configurationFile>
        <verbose>true</verbose>
        <overwrite>true</overwrite>
    </configuration>
    <executions>
        <execution>
            <id>Generate MyBatis Artifacts</id>
            <goals>
                <goal>generate</goal>
            </goals>
        </execution>
    </executions>
    <dependencies>
        <dependency>
            <groupId>org.mybatis.generator</groupId>
            <artifactId>mybatis-generator-core</artifactId>
            <version>1.3.2</version>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>${mysql.version}</version>
        </dependency>
    </dependencies>
</plugin>
```

#### 配置文件头

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
```

#### 根节点

```xml
<generatorConfiguration>
	<!-- 具体配置内容 -->
</generatorConfiguration>  
```

#### 子元素

包含以下子元素（有严格的顺序）：

```sql
-- <properties> (0个或1个)
1、用来指定外部的属性元素
2、这个属性可以通过resource或者url来指定属性文件的位置，这两个属性只能使用其中一个来指定，同时出现会报错。
resource：指定classpath下的属性文件，例如com/myproject/generatorConfig.properties
url：可以指定文件系统上的特定位置，例如file:///C:/myfolder/generatorConfig.properties
```

```sql
-- <classPathEntry> (0个或多个)
1、这个元素的作用是将MBG运行时需要用到的jar包(或zip格式)添加到classpath下。
2、最常见的用法是，当classpath下面没有JDBC驱动的时候，我们通常通过这个属性指定驱动的路径，例如：
<classPathEntry location="E:\mysql\mysql-connector-java-5.1.29.jar"/>

建议:由于该参数使用了绝对路径，因此不利用在不同电脑上通用，因此建议最好把需要的jar包放到项目的classpath下，避免每个人都得单独配置路径。
```

```sql
-- <context> (1个或多个)
1、用于指定生成一组对象的环境。例如指定要连接的数据库，要生成对象的类型和要处理的数据库中的表。运行MBG的时候还可以指定要运行的<context>
2、该元素只有一个必选属性id，用来唯一确定一个<context>元素，该id属性可以在运行MBG的使用
3、此外还有几个可选属性：
①defaultModelType：这个属性很重要，这个属性定义了MBG如何生成实体类。
这个属性有以下可选值：		
    conditional:这是默认值,这个模型和下面的hierarchical类似，除了如果那个单独的类将只包含一个字段，将不会生成一个单独的类。 因此,如果一个表的主键只有一个字段,那么不会为该字段生成单独的实体类,会将该字段合并到基本实体类中。
    flat:该模型为每一张表只生成一个实体类。这个实体类包含表中的所有字段。这种模型最简单（推荐）
    hierarchical:如果表有主键,那么该模型会产生一个单独的主键实体类,如果表还有BLOB字段， 则会为表生成一个包含所有BLOB字段的单独的实体类,然后为所有其他的字段生成一个单独的实体类。 MBG会在所有生成的实体类之间维护一个继承关系。
②targetRuntime:此属性用于指定生成的代码的运行时环境。该属性支持以下可选值：
一般情况下使用默认值即可，有关这些值的具体作用以及区别请查看中文文档的详细内容。
    MyBatis3:这是默认值
    MyBatis3Simple：可以避免在后面的<table>中逐个进行配置(推荐)
    Ibatis2Java2
    Ibatis2Java5 
```

#### context子元素

MBG配置中的其他几个元素，基本上都是context的子元素，这些子元素（有严格的配置顺序）包括：

```sql
-- 什么是分割符
假设在Mysql数据库中有一个表名为user info，中间是一个空格，这种情况下如果写出select * from user info这样的语句，肯定是要报错的，在Mysql中的时候我们一般会写成如下的样子:
select * from `user info`
这里的使用的反单引号(`)就是分隔符，分隔符可以用于表名或者列名。
```

```sql
-- <property> (0个或多个)
-- <property>支持的属性
1、autoDelimitKeywords：当表名或者字段名为SQL关键字的时候，设置该属性为true，MBG会自动给表名或字段名添加分隔符
2、beginningDelimiter、endingDelimiter：由于beginningDelimiter和endingDelimiter的默认值为双引号，在Mysql中不能这么写，所以还要将这两个默认值改为反单引号(`)，配置如下：
<property name="beginningDelimiter" value="`"/>
<property name="endingDelimiter" value="`"/>  
3、javaFileEncoding：设置要使用的Java文件的编码，默认使用当前平台的编码，只有当生产的编码需要特殊指定时才需要使用，一般用不到
4、javaFormatter、xmlFormatter：如果你想使用模板来定制生成的java文件和xml文件的样式，你可以通过指定这两个属性的值来实现。
```

```sql
-- <plugin> (0个或多个)
-- 用来定义一个插件。插件用于扩展或修改通过MyBatis Generator (MBG)代码生成器生成的代码
```

```sql
-- <commentGenerator> (0个或1个)
-- MBG生成的代码中可以包含注释信息，具体就是生成表或字段的备注信息
一般情况下由于MBG生成的注释信息没有任何价值，而且有时间戳的情况下每次生成的注释都不一样，使用版本控制的时候每次都会提交，因而一般情况下我们都会屏蔽注释信息，可以如下配置：
<commentGenerator>
  	<property name="suppressAllComments" value="true"/>
  	<property name="suppressDate" value="true"/>
</commentGenerator>
```

```sql
-- <jdbcConnection> (1个)
-- 用于指定数据库连接信息，该元素必选，并且只能有一个
该元素有两个必选属性:
driverClass:访问数据库的JDBC驱动程序的完全限定类名
connectionURL:访问数据库的JDBC连接URL
该元素还有两个可选属性:
userId:访问数据库的用户ID
password:访问数据库的密码
```

```sql
-- <javaTypeResolver> (0个或1个)
-- 这个元素的配置用来指定JDBC类型和Java类型如何转换。
type：提供了默认的实现DEFAULT，一般情况下使用默认即可，需要特殊处理的情况可以通过其他元素配置来解决，不建议修改该属性。
forceBigDecimals：该属性可以控制是否强制DECIMAL和NUMERIC类型的字段转换为Java类型的BigDecimal,默认值为false，一般不需要配置。
默认情况下的转换规则为：
1、如果精度>0或者长度>18，就会使用java.math.BigDecimal
2、如果精度=0并且10<=长度<=18，就会使用java.lang.Long
3、如果精度=0并且5<=长度<=9，就会使用java.lang.Integer
4、如果精度=0并且长度<5，就会使用java.lang.Short
如果设置为true，那么一定会使用java.math.BigDecimal，配置示例如下：
<javaTypeResolver >
  	<property name="forceBigDecimals" value="true" />
</javaTypeResolver>
```

```sql
-- <javaModelGenerator> (1个)
用来控制生成的实体类，根据<context>中配置的defaultModelType，一个表可能会对应生成多个不同的实体类。一个表对应多个类实际上并不方便，所以前面也推荐使用flat，这种情况下一个表对应一个实体类。
该元素只有两个属性，都是必选的：
1、targetPackage:生成实体类存放的包名，一般就是放在该包下。还会受到其他配置的影响
2、targetProject:指定目标项目路径，使用的是文件系统的绝对路径。
3、constructorBased:该属性只对MyBatis3有效，如果true就会使用构造方法入参，如果false就会使用setter方式。默认为false。
4、enableSubPackages:如果true，MBG会根据catalog和schema来生成子包。如果false就会直接用targetPackage属性。默认为false。
5、immutable:该属性用来配置实体类属性是否可变，如果设置为true，那么constructorBased不管设置成什么，都会使用构造方法入参，并且不会生成setter方法。如果为false，实体类属性就可以改变。默认为false。
6、rootClass:设置所有实体类的基类。如果设置，需要使用类的全限定名称。并且如果MBG能够加载rootClass，那么MBG不会覆盖和父类中完全匹配的属性。
7、trimStrings:是否对数据库查询结果进行trim操作，如果设置为true就会生成类似这样
public void setUsername(String username) {this.username = username == null ? null : username.trim();}的setter方法。默认值为false。
<javaModelGenerator targetPackage="test.model" targetProject="E:\MyProject\src\main\java">
  	<property name="enableSubPackages" value="true" />
  	<property name="trimStrings" value="true" />
</javaModelGenerator>
```

```sql
-- <sqlMapGenerator> (0个或1个)
如果targetRuntime目标是iBATIS2，该元素必须配置一个。
如果targetRuntime目标是MyBatis3，只有当<javaClientGenerator>需要XML时，该元素必须配置一个。 如果没有配置 <javaClientGenerator>，则使用以下的规则：
   如果指定了一个<sqlMapGenerator>，那么MBG将只生成XML的SQL映射文件和实体类。
   如果没有指定<sqlMapGenerator>，那么MBG将只生成实体类。
该元素只有两个属性（和前面提过的<javaModelGenerator>的属性含义一样），都是必选的。
targetPackage:生成实体类存放的包名，一般就是放在该包下。实际还会受到其他配置的影响(<table>中会提到)。
targetProject:指定目标项目路径，使用的是文件系统的绝对路径。
该元素支持<property>子元素，只有一个可以配置的属性：
enableSubPackages:如果true，MBG会根据catalog和schema来生成子包。如果false就会直接用targetPackage属性。默认为false。
<sqlMapGenerator targetPackage="test.xml"  targetProject="E:\MyProject\src\main\resources">
  	<property name="enableSubPackages" value="true" />
</sqlMapGenerator>
```

```sql
-- <javaClientGenerator> (0个或1个)
-- 如果不配置该元素，就不会生成Mapper接口
该元素有3个必选属性：
type:该属性用于选择一个预定义的客户端代码（可以理解为Mapper接口）生成器，用户可以自定义实现，需要继承org.mybatis.generator.codegen.AbstractJavaClientGenerator类，必选有一个默认的构造方法。 该属性提供了以下预定的代码生成器，首先根据<context>的targetRuntime分成三类：
  MyBatis3:
    ANNOTATEDMAPPER:基于注解的Mapper接口，不会有对应的XML映射文件
    MIXEDMAPPER:XML和注解的混合形式，(上面这种情况中的)SqlProvider注解方法会被XML替代。
    XMLMAPPER:所有的方法都在XML中，接口调用依赖XML文件。
  MyBatis3Simple:
    ANNOTATEDMAPPER:基于注解的Mapper接口，不会有对应的XML映射文件
    XMLMAPPER:所有的方法都在XML中，接口调用依赖XML文件。
  Ibatis2Java2或Ibatis2Java5:
    IBATIS:生成的对象符合iBATIS的DAO框架（不建议使用）。
    GENERIC-CI:生成的对象将只依赖于SqlMapClient，通过构造方法注入。
    GENERIC-SI:生成的对象将只依赖于SqlMapClient，通过setter方法注入。
    SPRING:生成的对象符合Spring的DAO接口
targetPackage:生成实体类存放的包名，一般就是放在该包下。实际还会受到其他配置的影响
targetProject:指定目标项目路径，使用的是文件系统的绝对路径。
该元素还有一个可选属性：
implementationPackage:如果指定了该属性，实现类就会生成在这个包中。
该元素支持<property>子元素设置的属性：
  enableSubPackages
  exampleMethodVisibility
  methodNameCalculator
  rootInterface: 用于指定一个所有生成的接口都继承的父接口。 这个值可以通过<table>配置的rootInterface属性覆盖。这个属性对于通用Mapper来说，可以让生成的所有接口都继承该接口
  useLegacyBuilder
<javaClientGenerator type="XMLMAPPER" targetPackage="test.dao"
			  targetProject="E:\MyProject\src\main\java"/>
```

```sql
-- <table> (1个或多个)
-- 该元素用来配置要通过内省的表。只有配置的才会生成实体类和其他文件。
一、该元素有一个必选属性：
tableName：指定要生成的表名，可以使用SQL通配符匹配多个表。
生成全部的表可以配置：<table tableName="%" />
-- ----------------------------------------------------------------------
二、该元素包含多个可选属性：
schema:数据库的schema,可以使用SQL通配符匹配。如果设置了该值，生成SQL的表名会变成如schema.tableName的形式。
catalog:数据库的catalog，如果设置了该值，生成SQL的表名会变成如catalog.tableName的形式。
alias:如果指定，这个值会用在生成的select查询SQL的表的别名和列名上。 列名会被别名为 alias_actualColumnName(别名_实际列名) 这种模式。
domainObjectName:生成对象的基本名称。如果没有指定，MBG会自动根据表名来生成名称。
enableXXX:XXX代表多种SQL方法，该属性用来指定是否生成对应的XXX语句。
selectByPrimaryKeyQueryId:DBA跟踪工具会用到，具体请看详细文档。
selectByExampleQueryId:DBA跟踪工具会用到，具体请看详细文档。
modelType:和<context>的defaultModelType含义一样，这里可以针对表进行配置，这里的配置会覆盖<context>的defaultModelType配置。
escapeWildcards:这个属性表示当查询列，是否对schema和表名中的SQL通配符 ('_' and '%') 进行转义。 对于某些驱动当schema或表名中包含SQL通配符时（例如，一个表名是MY_TABLE，有一些驱动需要将下划线进行转义）是必须的。默认值是false。
delimitIdentifiers:是否给标识符增加分隔符。默认false。当catalog,schema或tableName中包含空白时，默认为true。
delimitAllColumns:是否对所有列添加分隔符。默认false。
-- ----------------------------------------------------------------------
三、该元素包含多个可用的<property>子元素，可选属性为：
constructorBased:和<javaModelGenerator>中的属性含义一样。
ignoreQualifiersAtRuntime:生成的SQL中的表名将不会包含schema和catalog前缀。
immutable:和<javaModelGenerator>中的属性含义一样。
modelOnly:此属性用于配置是否为表只生成实体类。如果设置为true就不会有Mapper接口。如果配置了<sqlMapGenerator>，并且modelOnly为true，那么XML映射文件中只有实体对象的映射元素(<resultMap>)。如果为true还会覆盖属性中的enableXXX方法，将不会生成任何CRUD方法。
rootClass:和<javaModelGenerator>中的属性含义一样。
rootInterface:和<javaClientGenerator>中的属性含义一样。
runtimeCatalog:运行时的catalog，当生成表和运行环境的表的catalog不一样的时候可以使用该属性进行配置。
runtimeSchema:运行时的schema，当生成表和运行环境的表的schema不一样的时候可以使用该属性进行配置。
runtimeTableName:运行时的tableName，当生成表和运行环境的表的tableName不一样的时候可以使用该属性进行配置。
selectAllOrderByClause:该属性值会追加到selectAll方法后的SQL中，会直接跟order by拼接后添加到SQL末尾。
useActualColumnNames:如果设置为true,那么MBG会使用从数据库元数据获取的列名作为生成的实体对象的属性。 如果为false(默认值)，MGB将会尝试将返回的名称转换为驼峰形式。 在这两种情况下，可以通过 元素显示指定，在这种情况下将会忽略这个（useActualColumnNames）属性。
useColumnIndexes:如果是true,MBG生成resultMaps的时候会使用列的索引,而不是结果中列名的顺序。
useCompoundPropertyNames:如果是true,那么MBG生成属性名的时候会将列名和列备注接起来. 这对于那些通过第四代语言自动生成列(例如:FLD22237),但是备注包含有用信息(例如:"customer id")的数据库来说很有用. 在这种情况下,MBG会生成属性名FLD2237_CustomerId。
-- -------------------------------------------------------------------------------
```

#### table子元素

```sql
-- <generatedKey> (0个或1个)
-- 这个元素用来指定自动生成主键的属性（identity字段或者sequences序列）。如果指定这个元素，MBG在生成insert的SQL映射文件中插入一个<selectKey>元素。
这个元素包含下面两个必选属性：
column:生成列的列名。
sqlStatement:将返回新值的 SQL 语句。如果这是一个identity列，您可以使用其中一个预定义的的特殊值。预定义值如下：
  Cloudscape
  DB2
  DB2_MF
  Derby
  HSQLDB
  Informix
  MySql
  SqlServer
  SYBASE
  JDBC:这会配置MBG使用MyBatis3支持的JDBC标准的生成key来生成代码。 这是一个独立于数据库获取标识列中的值的方法。 重要: 只有当目标运行为MyBatis3时才会产生正确的代码。 如果与iBATIS2一起使用目标运行时会产生运行时错误的代码。
-- -----------------------------------------------------------------------------
这个元素还包含两个可选属性：
identity:当设置为true时,该列会被标记为identity列， 并且<selectKey>元素会被插入在insert后面。 当设置为false时， <selectKey>会插入到insert之前（通常是序列）。重要: 即使您type属性指定为post，您仍然需要为identity列将该参数设置为true。 这将标志MBG从插入列表中删除该列。默认值是false。
type:type=post and identity=true的时候生成的<selectKey>中的order=AFTER,当type=pre的时候，identity只能为false，生成的<selectKey>中的order=BEFORE。可以这么理解，自动增长的列只有插入到数据库后才能得到ID，所以是AFTER,使用序列时，只有先获取序列之后，才能插入数据库，所以是BEFORE。
-- ----------------------------------------------------------------------
<table tableName="user login info" domainObjectName="UserLoginInfo">
  	<generatedKey column="id" sqlStatement="Mysql"/>
</table>
对应生成的结果：
<insert id="insert" parameterType="test.model.UserLoginInfo">
	<selectKey keyProperty="id" order="BEFORE" resultType="java.lang.Integer">
  		SELECT LAST_INSERT_ID()
	</selectKey>
	insert into `user login info` (Id, username, logindate, loginip)
	values (#{id,jdbcType=INTEGER}, #{username,jdbcType=VARCHAR}, #{logindate,jdbcType=TIMESTAMP}, #{loginip,jdbcType=VARCHAR})
</insert>
-- ----------------------------------------------------------------------
<table tableName="user login info" domainObjectName="UserLoginInfo">
  	<generatedKey column="id" sqlStatement="select SEQ_ID.nextval from dual"/>
</table>
对应生成的结果：
<insert id="insert" parameterType="test.model.UserLoginInfo">
  	<selectKey keyProperty="id" order="BEFORE" resultType="java.lang.Integer">
    	select SEQ_ID.nextval from dual
  	</selectKey>
  	insert into `user login info` (Id, username, logindate, loginip)
  	values (#{id,jdbcType=INTEGER}, #{username,jdbcType=VARCHAR}, #{logindate,jdbcType=TIMESTAMP},#{loginip,jdbcType=VARCHAR})
</insert>
-- ----------------------------------------------------------------------
<table tableName="user login info" domainObjectName="UserLoginInfo">
  	<generatedKey column="id" sqlStatement="JDBC"/>
</table>
对应生成的结果：
<insert id="insert" keyProperty="id" parameterType="test.model.UserLoginInfo" useGeneratedKeys="true">
    insert into user login info (username, logindate, loginip)
    values (#{username,jdbcType=VARCHAR}, #{logindate,jdbcType=TIMESTAMP}, #{loginip,jdbcType=VARCHAR})
</insert>
```

```sql
-- <columnRenamingRule> (0个或1个)
使用该元素可以在生成列之前，对列进行重命名。这对那些存在同一前缀的字段想在生成属性名时去除前缀的表非常有用。例如假设一个表包含以下的列：
CUST_BUSINESS_NAME
CUST_STREET_ADDRESS
CUST_CITY
CUST_STATE
生成的所有属性名中如果都包含CUST的前缀可能会让人不爽。这些前缀可以通过如下方式定义重命名规则:
<columnRenamingRule searchString="^CUST_" replaceString="" />
当<columnOverride>匹配一列时，元素（<columnRenamingRule>）会被忽略。<columnOverride>优先于重命名的规则。
该元素有一个必选属性：
searchString:定义将被替换的字符串的正则表达式
该元素有一个可选属性：
replaceString:这是一个用来替换搜索字符串列每一个匹配项的字符串。如果没有指定，就会使用空字符串。
```

```sql
-- <columnOverride> (0个或多个)
-- 该元素从将某些属性默认计算的值更改为指定的值。
该元素有一个必选属性:
column:要重写的列名。
-- ----------------------------------------------------------------------
该元素有多个可选属性：
1、property:要使用的Java属性的名称。如果没有指定，MBG会根据列名生成。 例如，如果一个表的一列名为STRT_DTE，MBG会根据<table>的useActualColumnNames属性生成STRT_DTE或strtDte。
2、javaType:该列属性值为完全限定的Java类型。如果需要，这可以覆盖由JavaTypeResolver计算出的类型。 对某些数据库来说，这是必要的用来处理**“奇怪的”**数据库类型（例如MySql的unsigned bigint类型需要映射为java.lang.Object)。
3、jdbcType:该列的JDBC类型(INTEGER, DECIMAL, NUMERIC, VARCHAR等等)。 如果需要，这可以覆盖由JavaTypeResolver计算出的类型。 对某些数据库来说，这是必要的用来处理怪异的JDBC驱动 (例如DB2的LONGVARCHAR类型需要为iBATIS 映射为VARCHAR)。
4、typeHandler:用户定义的需要用来处理这列的类型处理器。它必须是一个继承iBATIS的TypeHandler类或TypeHandlerCallback接口（该接口很容易继承）的全限定的类名。如果没有指定或者是空白，iBATIS会用默认的类型处理器来处理类型。重要:MBG不会校验这个类型处理器是否存在或者可用。 MGB只是简单的将这个值插入到生成的SQL映射的配置文件中。
5、delimitedColumnName:指定是否应在生成的SQL的列名称上增加分隔符。 如果列的名称中包含空格，MGB会自动添加分隔符， 所以这个重写只有当列名需要强制为一个合适的名字或者列名是数据库中的保留字时是必要的。
<table schema="DB2ADMIN" tableName="ALLTYPES" >
	<columnOverride column="LONG_VARCHAR_FIELD" javaType="java.lang.String" jdbcType="VARCHAR" />
</table>
```

```sql
-- <ignoreColumn> (0个或多个)
-- 该元素可以用来屏蔽不需要生成的列。
该元素有一个必选属性：
column:要忽略的列名。
-- ----------------------------------------------------------------------
该元素还有一个可选属性：
delimitedColumnName:匹配列名的时候是否区分大小写。如果为true则区分。默认值为false，不区分大小写。
```

#### 配置说明

```sql
对一些配置看法列出如下几点：
1、关于Example方法，Example方法虽然很强大，但是SQL不易管理，因此不建议使用。

2、取消Example方法的配置，通过<table>上的enablexxExample方法可以屏蔽，但是最好的方法是在<context>上设置targetRuntime="MyBatis3Simple"。

3、关于实体类的modelType，建议使用defaultModelType="flat"，只有一个对象的情况下管理毕竟方便，使用也简单。

4、关于注释<commentGenerator>，不管你是否要重写自己的注释生成器，有一点不能忘记，那就是注释中一定要保留@mbggenerated,MBG通过该字符串来判断代码是否为代码生成器生成的代码，有该标记的的代码在重新生成的时候会被删除，不会重复。不会在XML中出现重复元素。

5、使用MBG生成的代码时，建议尽可能不要去修改自动生成的代码，而且要生成带有@mbggenerated，这样才不会在每次重新生成代码的时候需要手动修改好多内容。

6、仍然是注释相关，在<commentGenerator>中，建议一定要保留suppressAllComments属性(使用默认值false)，一定要取消(设为true)时间戳suppressDate，避免重复提交SVN。

7、<jdbcConnection>建议将JDBC驱动放到项目的classpath下，而不是使用<classPathEntry>来引入jar包，主要考虑到所有开发人员的统一性。

8、当数据库字段使用CHAR时，建议在<javaModelGenerator>中设置<property name="trimStrings" value="true" />，可以自动去掉不必要的空格。

9、在<javaClientGenerator>中，建议设置type="XMLMAPPER",不建议使用注解或混合模式，比较代码和SQL完全分离易于维护。

10、建议尽可能在<table>中配置<generatedKey>，避免手工操作，以便于MBG重复执行代码生成。
```

#### 简单配置

```xml
<!--
  <table>这里用的通配符匹配全部的表，另外所有表都有自动增长的id字段。如果不是所有表的配置都一样，可以做针对性的配置。 
-->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">

<generatorConfiguration>
	<context id="MysqlContext" targetRuntime="MyBatis3Simple" defaultModelType="flat">
		<property name="beginningDelimiter" value="`"/>
		<property name="endingDelimiter" value="`"/>
		
		<commentGenerator>
			<property name="suppressDate" value="true"/>
		</commentGenerator>
		
		<jdbcConnection driverClass="com.mysql.jdbc.Driver"
					    connectionURL="jdbc:mysql://localhost:3306/test"
					    userId="root"
					    password="">
		</jdbcConnection>
		
		<javaModelGenerator targetPackage="test.model" targetProject="G:\MyProject\src\main\java">
			<property name="trimStrings" value="true" />
		</javaModelGenerator>
		
		<sqlMapGenerator targetPackage="test.xml"  targetProject="G:\MyProject\src\main\resources"/>
		
		<javaClientGenerator type="XMLMAPPER" targetPackage="test.dao"  targetProject="G:\MyProject\src\main\java"/>
		
		<table tableName="%">
			<generatedKey column="id" sqlStatement="Mysql"/>
		</table>
	</context>
</generatorConfiguration>
```