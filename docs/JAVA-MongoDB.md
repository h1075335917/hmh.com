# JAVA-MongoDB

```sql
-- 下载MongoDB安装包，选择Windows社区版安装，下载地址：
https://www.mongodb.com/download-center/community

-- 取消MongoDB Compass的安装选项（不取消安装极慢），需要可自行安装

-- 双击mongo.exe可以运行MongoDB自带客户端，操作MongoDB

-- 如果需要移除MongoDB服务，只需使用管理员权限运行cmd工具，并输入如下命令
sc.exe delete MongoDB
```

```sql
-- 下载地址
https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.2.21-signed.msi
-- 创建文件
在安装路径下创建data\db和data\log两个文件夹
-- 在安装路径下创建mongod.cfg配置文件
systemLog:
    destination: file
    path: D:\developer\env\MongoDB\data\log\mongod.log
storage:
    dbPath: D:\developer\env\MongoDB\data\db
-- 安装为服务（运行命令需要用管理员权限）
D:\developer\env\MongoDB\bin\mongod.exe --config "D:\developer\env\MongoDB\mongod.cfg" --install

-- 客户端
studio 3T for MongoDB
```

```sql
-- 常用注解
@Document:标示映射到Mongodb文档上的领域对象
@Id:标示某个域为ID域
@Indexed:标示某个字段为Mongodb的索引字段
```

```sql
SQL概念		MongoDB概念		解释/说明
database		database		数据库
table			collection		数据库表/集合
row				document		数据记录行/文档
column			field			数据字段/域
index			index			索引
primary key		primary key		主键,MongoDB自动将_id字段设置为主键
```

#### 数据库操作

```sql
-- 展示数据库
show dbs
-- 切换数据库(创建数据库)
use test
-- 删除数据库
db.dropDatabase()
-- 插入表数据（新增第一条数据时会创建数据库）
db.article.insert({name:"MongoDB 教程"})
-- 查询表
db.getCollection("article").find({})
```

####  集合操作

```sql
-- 创建集合
db.createCollection("article")
-- 展示集合
show collections
-- 删除集合
db.article.drop()
```

#### 文档操作

```sql
-- 插入文档
db.article.insert({
    title: 'MongoDB 教程', 
    description: 'MongoDB 是一个 Nosql 数据库',
    by: 'Andy',
    url: 'https://www.mongodb.com/',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})

-- 更新文档
db.collection.update(
   <query>,
   <update>,
   {
     multi: <boolean>
   }
)
# query：修改的查询条件，类似于SQL中的WHERE部分
# update：更新属性的操作符，类似与SQL中的SET部分
# multi：设置为true时会更新所有符合条件的文档，默认为false只更新找到的第一条
如：db.article.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}},{multi:true})

-- 使用save更新文档（将ObjectId为5e9943661379a112845e4056的文档的title改为MongoDB 教程）
db.article.save({
    "_id" : ObjectId("5e9943661379a112845e4056"),
    "title" : "MongoDB 教程",
    "description" : "MongoDB 是一个 Nosql 数据库",
    "by" : "Andy",
    "url" : "https://www.mongodb.com/",
    "tags" : [ 
        "mongodb", 
        "database", 
        "NoSQL"
    ],
    "likes" : 100.0
})

-- 删除文档
db.collection.remove(
   <query>,
   {
     justOne: <boolean>
   }
)
# query：删除的查询条件，类似于SQL中的WHERE部分
# justOne：设置为true只删除一条记录，默认为false删除所有记录
如：db.article.remove({'title':'MongoDB 教程'})

-- 查询文档
db.collection.find(query, projection)
# query：查询条件，类似于SQL中的WHERE部分
# projection：可选，使用投影操作符指定返回的键

0、条件操作符
等于			{<key>:<value>}
小于			{<key>:{$lt:<value>}
小于或等于	  {<key>:{$lte:<value>}}
大于			{<key>:{$gt:<value>}}
大于或等于	  {<key>:{$gte:<value>}}
不等于		    {<key>:{$ne:<value>}}

1、查询article集合中的所有文档
db.article.find()

2、条件查询，查询title为MongoDB 教程的所有文档
db.article.find({'title':'MongoDB 教程'})

3、条件查询，查询likes大于50的所有文档
db.article.find({'likes':{$gt:50}})

4、条件查询，查询title为MongoDB 教程并且by为Andy的所有文档
db.article.find({'title':'MongoDB 教程','by':'Andy'})

5、条件查询，查询title为Redis 教程或MongoDB 教程的所有文档
db.article.find({$or:[{"title":"Redis 教程"},{"title": "MongoDB 教程"}]})

6、查询likes大于50，并且title为Redis 教程或者"MongoDB 教程的所有文档
db.article.find({"likes": {$gt:50}, $or: [{"title": "Redis 教程"},{"title": "MongoDB 教程"}]})
```

#### 其他操作

```sql
-- Limit与Skip操作
1、只查询article集合中的2条数据
db.article.find().limit(2)

2、从第二条开始，查询article集合中的2条数据
db.article.find().limit(2).skip(1)

-- 排序（1为升序，-1为降序）
1、按article集合中文档的likes字段降序排列
db.article.find().sort({likes:-1})

-- 索引
db.collection.createIndex(keys, options)
# background：建索引过程会阻塞其它数据库操作，设置为true表示后台创建，默认为false
# unique：设置为true表示创建唯一索引
# name：指定索引名称，如果没有指定会自动生成

1、给title和description字段创建索引，1表示升序索引，-1表示降序索引，指定以后台方式创建
db.article.createIndex({"title":1,"description":-1}, {background: true})

2、查看article集合中已经创建的索引
db.article.getIndexes()

-- 聚合
$sum	计算总和
$avg	计算平均值
$min	计算最小值
$max	计算最大值
1、根据by字段聚合文档并计算文档数量，类似与SQL中的count()函数
db.article.aggregate([{$group : {_id : "$by", sum_count : {$sum : 1}}}])

2、根据by字段聚合文档并计算likes字段的平局值，类似与SQL中的avg()语句
db.article.aggregate([{$group : {_id : "$by", avg_likes : {$avg : "$likes"}}}])
```

#### 正则表达式

```sql
-- MongoDB使用$regex操作符来设置匹配字符串的正则表达式，可以用来模糊查询，类似于SQL中的like操作
1、查询title中包含教程的文档
db.article.find({title:{$regex:"教程"}})

2、不区分大小写的模糊查询，使用$options操作符
db.article.find({title:{$regex:"mongodb",$options:"$i"}})
```