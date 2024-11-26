# Elasticsearch

## 部署

```sql
https://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-17-3
1、启动
	./bin/elasticsearch.bat
2、访问
	localhost:9200
3、安装成windows服务
	elasticsearch-service.bat install
    /*
        install: 安装Elasticsearch服务
        remove: 删除已安装的Elasticsearch服务（如果启动则停止服务）
        start: 启动Elasticsearch服务（如果已安装）
        stop: 停止服务（如果启动）
        manager:启动GUI来管理已安装的服务
    */
4、关闭服务
    netstat -ano | findstr 9200
    taskkill -pid 25776 -f
4、安装Elasticsearch-head
	安装grunt环境 npm install -g grunt-cli
5、启动
	npm install
6、安装kibana
7、重置密码
elasticsearch-reset-password -i -u elastic

8、
索引：index，相当于数据库中的database
类型：type相当于数据库中的table
主键：id相当于数据库中记录的主键，是唯一的
文档：document 相当于一条数据
```

```sql
v是用来要求在结果中返回表头
-- 查看集群的健康状况
http://localhost:9200/_cat
-- 查看ES集群的master主节点状态
http://10.0.8.47:9200/_cat/nodes?v
-- 查看Elasticsearch健康状态
http://localhost:9200/_cat/health?v
```

## 索引操作

```sql
-- 查看所有索引
GET /_cat/indices?v

-- 创建一个名为 customer 的索引。pretty要求返回一个漂亮的json 结果
PUT /customer?pretty

-- 查看索引customer
GET /customer

-- 删除索引customer
DELETE /customer
```

## 类型操作

```sql
-- 查看文档的类型
GET /customer/_mapping
```

## 文档操作

```sql
-- 添加文档
PUT /customer/_doc/1
{
  "name": "John Doe"
}

-- 查看customer主键为1的文档
GET /customer/_doc/1

-- 修改文档
POST /customer/_doc/1/_update
{
  "doc": { "name": "Jane Doe" }
}

-- 删除文档
DELETE /customer/_doc/1

-- 文档做批量操作
POST /customer/_doc/_bulk
{"index":{"_id":"1"}}
{"name": "John Doe" }
{"index":{"_id":"2"}}
{"name": "Jane Doe" }
```

## 数据搜索

```sql
-- 测试数据地址:
https://github.com/macrozheng/mall-learning/blob/master/document/json/accounts.json
```

## 简单搜索

```sql
-- 搜索全部(默认分页10)
GET /bank/_search
{
  "query": { "match_all": {} }
}

-- 分页搜索：from表示偏移量，从0开始，size表示每页显示的数量
GET /customer/_search
{
  "query": { "match_all": {} },
  "from": 0,
  "size": 10
}

-- 搜索排序：使用sort表示，例如按balance字段降序排列
GET /customer/_search
{
  "query": { "match_all": {} },
  "sort": { "balance": { "order": "desc" } }
}

-- 搜索并返回指定字段内容，使用_source表示，例如只返回account_number和balance两个字段内容
GET /customer/_search
{
  "query": { "match_all": {} },
  "_source": ["account_number", "balance"]
}
```

## 条件搜索

```sql
-- 条件搜索：使用match表示匹配条件，例如搜索出account_number为20的文档
GET /customer/_search
{
  "query": {
    "match": {
      "account_number": 20
    }
  }
}

-- 文本类型字段的条件搜索，例如搜索address字段中包含mill的文档，对于数值类型match操作使用的是精确匹配，对于文本类型使用的是模糊匹配
GET /customer/_search
{
  "query": {
    "match": {
      "address": "mill"
    }
  },
  "_source": [
    "address",
    "account_number"
  ]
}

-- 短语匹配搜索，使用match_phrase表示，例如搜索address字段中同时包含mill和lane的文档
GET /customer/_search
{
  "query": {
    "match_phrase": {
      "address": "mill lane"
    }
  }
}
```

## 组合搜索

```sql
-- 组合搜索，使用bool来进行组合，must表示同时满足，例如搜索address字段中同时包含mill和lane的文档
GET /customer/_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "address": "mill" } },
        { "match": { "address": "lane" } }
      ]
    }
  }
}

-- 组合搜索，should表示满足其中任意一个，搜索address字段中包含mill或者lane的文档
GET /customer/_search
{
  "query": {
    "bool": {
      "should": [
        { "match": { "address": "mill" } },
        { "match": { "address": "lane" } }
      ]
    }
  }
}

-- 组合搜索，must_not表示同时不满足，例如搜索address字段中不包含mill且不包含lane的文档
GET /customer/_search
{
  "query": {
    "bool": {
      "must_not": [
        { "match": { "address": "mill" } },
        { "match": { "address": "lane" } }
      ]
    }
  }
}

-- 组合搜索，组合must和must_not，例如搜索age字段等于40且state字段不包含ID的文档
GET /customer/_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "age": "40" } }
      ],
      "must_not": [
        { "match": { "state": "ID" } }
      ]
    }
  }
}
```

## 过滤搜索

```sql
-- 搜索过滤，使用filter来表示，例如过滤出balance字段在20000~30000的文档
GET /customer/_search
{
  "query": {
    "bool": {
      "must": { "match_all": {} },
      "filter": {
        "range": {
          "balance": {
            "gte": 20000,
            "lte": 30000
          }
        }
      }
    }
  }
}
```

## 搜索聚合

```sql
-- 对搜索结果进行聚合，使用aggs来表示，类似于MySql中的group by，例如对state字段进行聚合，统计出相同state的文档数量
GET /customer/_search
{
  "size": 0,
  "aggs": {
    "group_by_state": {
      "terms": {
        "field": "state.keyword"
      }
    }
  }
}

-- 嵌套聚合，例如对state字段进行聚合，统计出相同state的文档数量，再统计出balance的平均值
GET /customer/_search
{
  "size": 0,
  "aggs": {
    "group_by_state": {
      "terms": {
        "field": "state.keyword"
      },
      "aggs": {
        "average_balance": {
          "avg": {
            "field": "balance"
          }
        }
      }
    }
  }
}

-- 对聚合搜索的结果进行排序，例如按balance的平均值降序排列
GET /customer/_search
{
  "size": 0,
  "aggs": {
    "group_by_state": {
      "terms": {
        "field": "state.keyword",
        "order": {
          "average_balance": "desc"
        }
      },
      "aggs": {
        "average_balance": {
          "avg": {
            "field": "balance"
          }
        }
      }
    }
  }
}

-- 按字段值的范围进行分段聚合，例如分段范围为age字段的[20,30] [30,40] [40,50]，之后按gender统计文档个数和balance的平均值
GET /customer/_search
{
  "size": 0,
  "aggs": {
    "group_by_age": {
      "range": {
        "field": "age",
        "ranges": [
          {
            "from": 20,
            "to": 30
          },
          {
            "from": 30,
            "to": 40
          },
          {
            "from": 40,
            "to": 50
          }
        ]
      },
      "aggs": {
        "group_by_gender": {
          "terms": {
            "field": "gender.keyword"
          },
          "aggs": {
            "average_balance": {
              "avg": {
                "field": "balance"
              }
            }
          }
        }
      }
    }
  }
}
```

## SpringBoot集成

```sql
-- 常用注解
-- @Document
注解作用在类上，标记实体类为文档对象，指定实体类与索引对应关系。常用配置项有：
indexName：索引名称
type: 索引类型，默认为空
shards: 主分片数量，默认5
replicas：复制分片数量，默认1
createIndex：创建索引，默认为true
-- @Id
指定文档ID，加上这个注解，文档的_id会与我们的数据ID是一致的，否则在不给定默认值的情况下，es会自动创建
-- @Field
指定普通属性，标明这个是文档中的一个字段
常用的配置项有：
type： 对应Elasticsearch中属性类型。默认自动检测。使用FiledType枚举可以快速获取
index：是否创建倒排索引，一般不需要分词的属性不需要创建索引
analyzer：指定索引类型
store：是否进行存储，默认不进行存储
```

### IK分词器

```sql
https://github.com/medcl/elasticsearch-analysis-ik/release

-- 下载后解压到Elasticsearch的plugins目录下

elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v6.2.2/elasticsearch-analysis-ik-6.2.2.zip
```

###  Kibana

```sql
https://www.elastic.co/cn/downloads/past-releases/kibana-7-17-3

http://127.0.0.1:5601
```

### filebeat

```yaml
https://www.elastic.co/cn/downloads/past-releases/filebeat-7-17-3

# 修改配置filebeat.yml
filebeat.inputs:
- type: log
  enabled: true
  paths:
    - /home/elastic/test_logs/*.log  
  #不以[开头的行都合并到上一行的末尾
  multiline.pattern: ^\[
  multiline.negate: true
  multiline.match: after
  
output.logstash:
  hosts: ["localhost:5044"]

# 启动
./filebeat -e -c filebeat.yml
```

### Logstash

```sql
-- 操作文档
https://www.macrozheng.com/mall/reference/mall_elk_advance.html
-- 下载地址
https://www.elastic.co/cn/downloads/past-releases/logstash-7-17-3

将Logstash的配置文件logstash.conf拷贝到安装目录的bin目录下，配置文件地址：https://github.com/macrozheng/mall/blob/master/document/elk/logstash.conf

Logstash需要安装json_lines插件
logstash-plugin install logstash-codec-json_lines

运行bin目录下的logstash.bat，启动Logstash服务，启动命令如下
logstash -f logstash.conf

kibana中查看收集的日志
1、Management --> kibana - index Patterns
2、输入mall-* --> Next step
3、选择@timestamp --> Create index pattern
4、在Discover中查看
```

```sql
-- filter：在Logback中有两种不同的过滤器，用来过滤日志输出
1、ThresholdFilter：临界值过滤器，过滤掉低于指定临界值的日志，比如下面的配置将过滤掉所有低于INFO级别的日志。
<filter class="ch.qos.logback.classic.filter.ThresholdFilter">
    <level>INFO</level>
</filter>

2、LevelFilter：级别过滤器，根据日志级别进行过滤，比如下面的配置将过滤掉所有非ERROR级别的日志。
<filter class="ch.qos.logback.classic.filter.LevelFilter">
    <level>ERROR</level>
    <onMatch>ACCEPT</onMatch>
    <onMismatch>DENY</onMismatch>
</filter>
```

```sql
-- appender: 用来控制日志的输出形式，主要有三种
1、ConsoleAppender：控制日志输出到控制台的形式，比如在console-appender.xml中定义的默认控制台输出。
<appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
	<encoder>
		<pattern>${CONSOLE_LOG_PATTERN}</pattern>
	</encoder>
</appender>
2、RollingFileAppender：控制日志输出到文件的形式，可以控制日志文件生成策略，比如文件名称格式、超过多大重新生成文件以及删除超过多少天的文件。
<!--ERROR日志输出到文件-->
<appender name="FILE_ERROR"
          class="ch.qos.logback.core.rolling.RollingFileAppender">
    <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
        <!--设置文件命名格式-->
        <fileNamePattern>${LOG_FILE_PATH}/error/${APP_NAME}-%d{yyyy-MM-dd}-%i.log</fileNamePattern>
        <!--设置日志文件大小，超过就重新生成文件，默认10M-->
        <maxFileSize>${LOG_FILE_MAX_SIZE:-10MB}</maxFileSize>
        <!--日志文件保留天数，默认30天-->
        <maxHistory>${LOG_FILE_MAX_HISTORY:-30}</maxHistory>
    </rollingPolicy>
</appender>
3、LogstashTcpSocketAppender：控制日志输出到Logstash的形式，可以用来配置Logstash的地址、访问策略以及日志的格式。
<!--ERROR日志输出到LogStash-->
<appender name="LOG_STASH_ERROR" class="net.logstash.logback.appender.LogstashTcpSocketAppender">
    <destination>${LOG_STASH_HOST}:4561</destination>
    <encoder charset="UTF-8" class="net.logstash.logback.encoder.LoggingEventCompositeJsonEncoder">
        <providers>
            <timestamp>
                <timeZone>Asia/Shanghai</timeZone>
            </timestamp>
            <!--自定义日志输出格式-->
            <pattern>
                <pattern>
                    {
                    "project": "mall-tiny",
                    "level": "%level",
                    "service": "${APP_NAME:-}",
                    "pid": "${PID:-}",
                    "thread": "%thread",
                    "class": "%logger",
                    "message": "%message",
                    "stack_trace": "%exception{20}"
                    }
                </pattern>
            </pattern>
        </providers>
    </encoder>
    <!--当有多个LogStash服务时，设置访问策略为轮询-->
    <connectionStrategy>
        <roundRobin>
            <connectionTTL>5 minutes</connectionTTL>
        </roundRobin>
    </connectionStrategy>
</appender>
```

```sql
-- logger: 只有配置到logger节点上的appender才会被使用，logger用于配置哪种条件下的日志被打印，root是一种特殊的appender，下面介绍下日志划分的条件。
调试日志：所有的DEBUG级别以上日志；
错误日志：所有的ERROR级别日志；
业务日志：com.macro.mall包下的所有DEBUG级别以上日志；
记录日志：com.macro.mall.tiny.component.WebLogAspect类下所有DEBUG级别以上日志，该类是统计接口访问信息的AOP切面类。
```

```sql
-- 控制框架输出日志: 还有一些使用框架内部的日志，DEBUG级别的日志对我们并没有啥用处，都可以设置为了INFO以上级别。
<!--控制框架输出日志-->
<logger name="org.slf4j" level="INFO"/>
<logger name="springfox" level="INFO"/>
<logger name="io.swagger" level="INFO"/>
<logger name="org.springframework" level="INFO"/>
<logger name="org.hibernate.validator" level="INFO"/>
```



```json
# logstash.conf
# input：使用不同端口收集不同类型的日志，从4560~4563开启四个端口；
# filter：对于记录类型的日志，直接将JSON格式的message转化到source中去，便于搜索查看；
# output：按类型、时间自定义索引格式。
input {
  tcp {
    mode => "server"
    host => "0.0.0.0"
    port => 4560
    codec => json_lines
    type => "debug"
  }
  tcp {
    mode => "server"
    host => "0.0.0.0"
    port => 4561
    codec => json_lines
    type => "error"
  }
  tcp {
    mode => "server"
    host => "0.0.0.0"
    port => 4562
    codec => json_lines
    type => "business"
  }
  tcp {
    mode => "server"
    host => "0.0.0.0"
    port => 4563
    codec => json_lines
    type => "record"
  }
}
filter{
  if [type] == "record" {
    mutate {
      remove_field => "port"
      remove_field => "host"
      remove_field => "@version"
    }
    json {
      source => "message"
      remove_field => ["message"]
    }
  }
}
output {
  elasticsearch {
    hosts => "localhost:9200"
    index => "mall-%{type}-%{+YYYY.MM.dd}"
  }
}
```

### canal数据同步

```sql
-- canal主要用途是对MySQL数据库增量日志进行解析，提供增量数据的订阅和消费，简单说就是可以对MySQL的增量数据进行实时同步，支持同步到MySQL、Elasticsearch、HBase等数据存储中去。

-- canal会模拟MySQL主库和从库的交互协议，从而伪装成MySQL的从库，然后向MySQL主库发送dump协议，MySQL主库收到dump请求会向canal推送binlog，canal通过解析binlog将数据同步到其他存储中去。
```

```sql
https://github.com/alibaba/canal/releases
-- 三个组件
canal-server（canal-deploy）：可以直接监听MySQL的binlog，把自己伪装成MySQL的从库，只负责接收数据，并不做处理。
canal-adapter：相当于canal的客户端，会从canal-server中获取数据，然后对数据进行同步，可以同步到MySQL、Elasticsearch和HBase等存储中去。
canal-admin：为canal提供整体配置管理、节点运维等面向运维的功能，提供相对友好的WebUI操作界面，方便更多用户快速和安全的操作。
```

## 配置mysql

```sql
-- 由于canal是通过订阅MySQL的binlog来实现数据同步的，所以我们需要开启MySQL的binlog写入功能，并设置binlog-format为ROW模式，配置文件为/mydata/mysql/conf/my.cnf
```

## Lucene

```sql
-- Lucene是一套用于全文检索和搜索的开放原始码程序库，由Apache软件基金会支持和提供。Lucene提供了一个简单却强大的应用程序接口，能够做全文索引和搜索。Lucene被广泛应用作搜索应用的标准基础库
```

## 常用注解

```java
//标示映射到Elasticsearch文档上的领域对象
public @interface Document {
  //索引库名次，mysql中数据库的概念
	String indexName();
  //文档类型，mysql中表的概念
	String type() default "";
  //默认分片数
	short shards() default 5;
  //默认副本数量
	short replicas() default 1;
}

//表示是文档的id，文档可以认为是mysql中表行的概念
public @interface Id {
}

public @interface Field {
  //文档中字段的类型
	FieldType type() default FieldType.Auto;
  //是否建立倒排索引
	boolean index() default true;
  //是否进行存储
	boolean store() default false;
  //分词器名次
	String analyzer() default "";
}

//为文档自动指定元数据类型
public enum FieldType {
	Text,//会进行分词并建了索引的字符类型
	Integer,
	Long,
	Date,
	Float,
	Double,
	Boolean,
	Object,
	Auto,//自动判断字段类型
	Nested,//嵌套对象类型
	Ip,
	Attachment,
	Keyword//不会进行分词建立索引的类型
}
```

```sql
-- 继承ElasticsearchRepository接口可以获得常用的数据操作方法

-- 衍生查询
在接口中直接指定查询方法名称便可查询，无需进行实现，如商品表中有商品名称、标题和关键字，直接定义以下查询，就可以对这三个字段进行全文搜索。
Page<EsProduct> findByNameOrSubTitleOrKeywords(String name, String subTitle, String keywords, Pageable page);

-- 使用@Query注解可以用Elasticsearch的DSL语句进行查询
@Query("{"bool" : {"must" : {"field" : {"name" : "?0"}}}}")
Page<EsProduct> findByName(String name,Pageable pageable);

-- @Field
不需要中文分词的字段设置成@Field(type = FieldType.Keyword)类型
需要中文分词的设置成@Field(analyzer = "ik_max_word",type = FieldType.Text)类型。
```

## 版本兼容

https://www.elastic.co/cn/support/matrix?spm=a2c4g.11186623.0.0.312237875y8kxE#matrix_compatibility

