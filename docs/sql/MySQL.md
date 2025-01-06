---
sidebar_position: 1
---

# MySQL

## MySQL不同系统的区别

### 默认Linux下区分大小写，Windows下不区分大小写

问题：项目在本地测试阶段没有问题，当使用sit环境测试时系统始终运行不起来，查看日志报错找不到表，当时很奇怪，这些表在数据库中是存在的，而且本地测试也没有问题，后来找到了答案，是因为mysql在windows下是不区分大小写的，而linux下是区分大小写的。

解决：修改linux的mysql的lower_case_table_names参数，为0时区分大小写，为1时不区分大小写。

```sql
show variables like 'lower%';

-- lower_case_file_system是一个只读参数，无法被修改，这个参数是用来告诉你在当前的系统平台下，是否对文件名大小写敏感。
-- lower_case_table_names为0时为大小写敏感，为1时为大小写不敏感。
```

```shell
vim /etc/my.cnf
```

在这个文件中的[mysqld]的后面加 `lower_case_table_names=1`，然后重启mysql服务 `service mysql restart`。

MySQL在Linux下数据库名、表名、列名、别名大小写规则是这样的
- 数据库名与表名是严格区分大小写的；
- 表的别名是严格区分大小写的；
- 列名与列的别名在所有的情况下均是忽略大小写的；
- 变量名也是严格区分大小写的；

## 不同引擎下的写操作

### InnoDB 存储引擎

InnoDB 是 MySQL 的默认存储引擎，并且支持行级锁定和多版本并发控制 (MVCC)。这意味着：

- **行级锁**：`UPDATE` 操作只会锁住被修改的行，而不是整个表。这样可以提高并发性能，因为其他不冲突的读取和写入操作仍然可以继续。
  
- **非锁定读取**：在大多数事务隔离级别下，读取操作不会被阻塞。这是因为 InnoDB 使用 MVCC 提供快照读取功能，允许事务读取数据的旧版本，而不会干扰正在进行的写入操作。

- **间隙锁、临键锁**：为了防止幻读现象，InnoDB 在某些情况下可能会应用更广泛的锁，例如间隙锁或临键锁。这些锁可以在一定程度上限制并发性，但在大多数情况下，它们的影响是可以接受的。

- **事务隔离级别**：
  - **READ UNCOMMITTED**：允许脏读，即可以看到未提交的更改。这种隔离级别下的 `UPDATE` 对查询几乎没有影响。
  - **READ COMMITTED**：只能看到已提交的更改。`UPDATE` 操作不会阻塞大多数读取操作。
  - **REPEATABLE READ**（默认）：保证在同一事务中多次读取同一数据的结果一致。`UPDATE` 操作可能会影响后续的读取操作，尤其是在涉及相同行的情况下。
  - **SERIALIZABLE**：最严格的隔离级别，所有读取都是锁定读取，`UPDATE` 会显著影响并发查询。

### MyISAM 存储引擎

MyISAM 使用表级锁定，这意味着：

- **表级锁**：任何对表的 `UPDATE` 操作都会锁定整个表，阻止其他会话对该表的读写操作，直到当前事务完成。这会导致较高的锁争用，降低并发性能。

- **非事务安全**：MyISAM 不支持事务，因此没有 MVCC 或回滚功能。一旦开始修改，直到修改完成之前，其他查询会被阻塞。

### 查询与更新的交互

当 `UPDATE` 语句正在执行时：

- **对于 InnoDB**：如果查询不涉及正在更新的行，则几乎不受影响；如果查询尝试读取正在更新的行，在大多数隔离级别下它会等待更新完成或者读取该行的旧版本（取决于隔离级别）。
  
- **对于 MyISAM**：所有查询都会被阻塞，直到 `UPDATE` 完成并释放表锁。

### 最佳实践

- **尽量使用 InnoDB**：由于其行级锁定和 MVCC 支持，InnoDB 通常提供更好的并发性能和可靠性。
- **优化查询和索引**：确保你的查询和 `UPDATE` 语句尽可能高效，减少锁定时间。良好的索引设计可以帮助缩小锁定范围，提升性能。
- **调整事务隔离级别**：根据应用程序的需求选择合适的隔离级别。较低的隔离级别（如 `READ COMMITTED`）可以在不影响一致性的情况下提高并发性能。
- **分批更新**：对于大批量的 `UPDATE` 操作，考虑将其分成多个小批次来执行，以减少长时间持有锁的可能性。

## 笛卡尔积

> 在SQL中，笛卡尔积（Cartesian Product）是指两个或多个表的每一行与另一个表的每一行进行组合的结果。当没有为连接操作指定适当的条件时，就可能导致笛卡尔积。


![X x Y](https://wikimedia.org/api/rest_v1/media/math/render/svg/b511477a8bb079f00e37db2d8205df2787a648ad)


>  eg：

>

>  如果集合𝑋是13个元素的点数集合`{𝐴,𝐾,𝑄,𝐽,10,9,8,7,6,5,4,3,2}`，

>

>  而集合𝑌是4个元素的花色集合`{♠, ♥, ♦, ♣}`，

>

>  则这两个集合的笛卡儿积是有52个元素的标准扑克牌的集合`{(𝐴,♠),(𝐾,♠),...,(2,♠),...,(𝐴,♣),...,(3,♣),(2,♣)}`。


### 笛卡尔积产生的原因


- **未使用JOIN条件**：当查询中涉及两个或多个表，但没有指定连接条件时，[数据库](https://cloud.baidu.com/solution/database.html)系统会默认执行笛卡尔积操作。


- **错误的JOIN条件**：有时[开发者](https://cloud.baidu.com/product/xly.html)可能错误地指定了JOIN条件，导致原本不相关的行被错误地连接在一起。


- **隐式转换**：在某些情况下，数据库系统可能会自动执行隐式转换，导致笛卡尔积的产生。


### 笛卡尔积的影响


- **性能问题**：笛卡尔积会产生大量不必要的数据，导致查询性能下降。

- **数据冗余**：返回的结果集可能包含重复的行，导致数据冗余。

- **逻辑错误**：开发者可能没有意识到笛卡尔积的存在，导致查询结果不符合预期。


### 应对策略


- **明确指定JOIN条件**：在使用JOIN操作时，应始终明确指定连接条件，避免产生笛卡尔积。

- **检查查询逻辑**：在编写复杂查询时，要仔细检查连接和过滤条件，确保它们是正确的。

- **使用EXPLAIN计划**：利用数据库的EXPLAIN计划功能，可以查看查询的执行计划，从而发现潜在的笛卡尔积问题。例如，在MySQL中，可以使用`EXPLAIN SELECT ...`来查看查询的执行计划。

- **优化数据库设计**：合理设计数据库表结构，确保相关数据表通过合适的键进行关联，这样可以降低因笛卡尔积导致的问题。

- **限制结果集**：使用`LIMIT`子句限制返回的数据量，以减少不必要的计算和[数据传输](https://cloud.baidu.com/product/dts.html)。

- **定期审查查询性能**：定期审查和分析数据库查询性能，及时发现和解决潜在的笛卡尔积问题。

- **提高代码审查质量**：进行严格的代码审查，确保SQL查询逻辑正确，防止产生不必要的笛卡尔积。

- **使用数据库工具**：利用数据库管理工具和IDE提供的代码提示、语法高亮等功能，提高编写查询语句的准确性和效率。

- **培训与[文档](https://cloud.baidu.com/product/doc.html)**：组织数据库相关培训，提高开发人员对笛卡尔积的认识；同时编写和维护数据库操作文档，确保团队成员遵循最佳实践。

- 测试与验证：在开发过程中进行充分测试，验证查询结果的正确性；同时在实际应用中持续监控数据库性能指标，以便及时发现和处理问题。


## 常用语句


### 表结构操作


```sql

-- 登录mysql

mysql -h host -u user -p database1

password

-- 查询版本号和当前时间

SELECT VERSION(), CURRENT_DATE;

-- 展示所有数据库

SHOW DATABASES;

-- 切换/使用数据库

use database1;

-- 创建数据库

create database test1;

-- 展示数据库所有表

show tables;

-- 创建表

create table test1 (id varchar(32),name varchar(32),age int(3),sex int(1),birth datetime);

-- 删除表

drop table test1;

-- 查询表结构

DESCRIBE test1;


-- 表中插入字段并设置备注

alter table `sys_depart` ADD `name` varchar(32) DEFAULT NULL COMMENT '测试b'

-- 插入字段

alter table sys_cwzd ADD COLUMN name varchar(50)

-- 修改字段

alter table emp modify ename varchar(20)

-- 删除表字段

alter table emp drop column age

-- 字段改名

alter table emp change age age1 int(4)

-- 修改表名

alter table emp rename emp1

-- 设置备注

comment on column 表名.字段名 is '备注名'

-- 修改字段默认值

alter TABLE 表名 ALTER COLUMN 字段名 set default 默认值

-- 删除约束

ALTER TABLE `sys_depart` MODIFY `b` varchar(32) DEFAULT NULL COMMENT '测试b';

```


### GROUP BY


```sql

-- 按project_id分组，查询create_time最大的一条数据。加limit才会先排序（派生类问题）

SELECT * FROM ( SELECT * FROM `pms_conference_info` ORDER BY create_time DESC LIMIT 100000000 ) AS pci GROUP BY pci.project_id

-- 或者(但是似乎要影响性能)

SELECT * FROM ( SELECT * FROM `pms_conference_info` having 1 ORDER BY create_time DESC) AS pci GROUP BY pci.project_id

```


### concat


```sql

-- 字符串连接

concat(str1,str2,...)

-- 1-2

select CONCAT(1,'-','2') 

```


### FIND_IN_SET


```sql

-- 类似于 id in('1','2','3')

select * from table where FIND_IN_SET(id, '1,2,3')

```


### UUID


```sql

-- mysql UUID

REPLACE(UUID(),'-','')

```


### IF


```sql

-- IF表达式

如果 expr1 是TRUE,则 IF()的返回值为expr2; 否则返回值则为expr3

if(sva=1,"男","女")


-- IFNULL(expr1,expr2)

假如expr1 不为 NULL,则 IFNULL()的返回值为expr1;否则其返回值为expr2

IFNULL(1,0) = 1 ; IFNULL(NULL,10) = 10


-- IF ELSE做为流程控制语句使用

-- 当IF中条件search_condition成立时，执行THEN后的statement_list语句，否则判断ELSEIF中的条件

IF search_condition THEN   

    statement_list    

[ELSEIF search_condition THEN]    

    statement_list ...    

[ELSE   

    statement_list]    

END IF

```


### UNION


> [!TIP]

>

> UNION一定记得要把两边对应的字段，按顺序一一对应上，不然数据会错乱


```sql

-- UNION操作符

从 "Websites" 和 "apps" 表中选取所有不同的country（只有不同的值）

SELECT country FROM Websites

UNION

SELECT country FROM apps

ORDER BY country;


-- UNION ALL

从 "Websites" 和 "apps" 表中选取所有的country（也有重复的值）

SELECT country FROM Websites

UNION ALL

SELECT country FROM apps

ORDER BY country;


-- 带有 WHERE 的 SQL UNION ALL

从 "Websites" 和 "apps" 表中选取所有的中国(CN)的数据（也有重复的值）

SELECT country, name FROM Websites

WHERE country='CN'

UNION ALL

SELECT country, app_name FROM apps

WHERE country='CN'

ORDER BY country;

```


### PAD


```sql

-- 前面补零

LPAD(str,len,padstr)

-- 结果为 00000001

select LPAD(‘1’, 8, 0)


-- 后面补零

RPAD(str,len,padstr)

-- 结果为10000000

select RPAD(‘1’, 8, 0)

```

### choose when otherwise


```mysql

-- choose标签是按顺序判断其内部when标签中的test条件出否成立，如果有一个成立，则 choose 结束。

-- 当 choose 中所有 when 的条件都不满则时，则执行otherwise 中的sql。

-- 类似于Java 的 switch 语句，choose 为 switch，when 为 case，otherwise 则为 default。

< choose > 

	< WHEN test = "condition.messageType != null and condition.messageType != ''" > 

			AND a.message_type = #{condition.messageType}

	</ WHEN > 

	< otherwise > 

		AND a.message_type IN 

		< foreach collection = "condition.messageTypes" item = "businessType" OPEN = "(" SEPARATOR = "," CLOSE = ")" > 

			#{businessType}

		</ foreach > 

	</ otherwise > 

</ choose > 

```


### EXISTS


```mysql

-- EXISTS执行顺序：

-- 1、首先执行一次外部查询，并缓存结果集，如 SELECT * FROM A

-- 2、遍历外部查询结果集的每一行记录R，代入子查询中作为条件进行查询，如 SELECT 1 FROM B WHERE B.id = A.id

-- 3、如果子查询有返回结果，则EXISTS子句返回TRUE，这一行R可作为外部查询的结果行，否则不能作为结果

-- EXISTS为true保留外查询结果，否则不保留外查询结果

SELECT * FROM A WHERE EXISTS (SELECT 1 FROM B WHERE B.id = A.id); 

```


### ＜![CDATA[ ]]


```mysql

-- ＜![CDATA[ ]]＞

-- 术语CDATA指的是不应由XML解析器进行解析的文本数据（Unparsed Character Data）

-- 由于XML文件对于元素为"<"和"&"是非法的，不符合规则。

-- "<"的产生错误，是因为解析器会把该字符解释为新元素的开始。

-- "&"的产生错误，是因为解析器会把该字符解释为字符实体的开始。

-- mapper文件中写sql语句时，遇到特殊字符时，如：< 等，建议使用<![CDATA[ ... ]]>，将包裹的内容不被解析器解析

select area, operator from ip_address where INET_ATON(#{ip}) > ip_start_num 

and INET_ATON(#{ip})  <![CDATA[ < ]]>  ip_end_num

```


### substring


```mysql

-- substring(string, position, length)

第一个参数string指的是需要截取的原字符串。

第二个参数position指的是从哪个位置开始截取子字符串，若position为负数则从右往左开始数位置。

第三个参数length指的是需要截取的字符串长度，如果不写，则默认截取从position开始到最后一位的所有字符。

例：substring(‘pandas’, length(pandas)-2, 2) 的结果为 ‘da’.


-- substring(string from position for length)

是一种更加规范的写法，参数含义同上所述。

同样，这里的 for length可以不写，默认从position开始截取到最后一个字符。

例：substring(‘pandas’ from 4 for 2) 的结果为 ‘da’.

```


### any_value


```mysql

-- any_value()

-- 解决：抑制ONLY_FULL_GROUP_BY值被拒绝，any_value()会选择被分到同一组的数据里第一条数据的指定列值作为返回数据。

-- 报错：Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'area.id' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by

-- 原因：MySQL5.7之后，sql_mode中ONLY_FULL_GROUP_BY模式默认设置为打开状态。ONLY_FULL_GROUP_BY的语义就是确定select target list中的所有列的值都是明确语义，简单的说来，在此模式下，target list中的值要么是来自于聚合函数（sum、avg、max等）的结果，要么是来自于group by list中的表达式的值。

```


### round


```mysql

-- round函数用于数据的四舍五入，它有两种形式：

-- 1、round(x,d)  ，x指要处理的数，d是指保留几位小数.这里有个值得注意的地方是，d可以是负数，这时是指定小数点左边的d位整数位为0,同时小数位均为0；

-- 如round(112.3,-1)=110

-- round(112.3,0)=112

-- 2、round(x)  ,其实就是round(x,0),也就是默认d为0；

```


### case when then else end


```mysql

-- case when then else end

-- case具有两种格式。简单case函数和case搜索函数。

    -- 简单case函数

    case sex

      when '1' then '男'

      when '2' then '女’

      else '其他' end

    -- case搜索函数

    case when sex = '1' then '男'

         when sex = '2' then '女'

         else '其他' end

```

### COALESCE

https://dev.mysql.com/doc/refman/5.7/en/comparison-operators.html#function_coalesce


> 返回列表中第一个为空数值

```mysql

SELECT COALESCE(NULL,1); -- 1

SELECT COALESCE(NULL,NULL,NULL); -- NULL

```

### date_format


```sql

date_format(ii.issue_expire_date, '%Y%m%d')

```

### DATEDIFF


```mysql

-- DATEDIFF函数用于返回两个日期的天数

-- DATEDIFF(date1,date2)

-- date1: 比较日期1 

-- date2: 比较日期2

-- DATEDIFF函数返回date1 - date2的计算结果，date1和date2两个参数需是有效的日期或日期时间值;如果参数传递的是日期时间值，DATEDIFF函数仅将日期部分用于计算，并忽略时间部分(只有值的日期部分参与计算)

-- 1

SELECT DATEDIFF('2022-04-30','2022-04-29');

-- 0

SELECT DATEDIFF('2022-04-30','2022-04-30');

-- -1

SELECT DATEDIFF('2022-04-29','2022-04-30');

-- 0

SELECT DATEDIFF('2022-04-30','2022-04-30 14:00:00');

-- 1

SELECT DATEDIFF('2022-04-30 13:00:00','2022-04-29 14:00:00');

-- 10

SELECT DATEDIFF('2017-06-25 09:34:21', '2017-06-15');

```


### TIMESTAMPDIFF


```mysql

-- TIMESTAMPDIFF函数用于计算两个日期的时间差

-- TIMESTAMPDIFF(unit,datetime_expr1,datetime_expr2)

-- unit: 日期比较返回的时间差单位，常用可选值如下:

    SECOND：秒

    MINUTE：分钟

    HOUR：小时

    DAY：天

    WEEK：星期

    MONTH：月

    QUARTER：季度

    YEAR：年

-- datetime_expr1: 要比较的日期1

-- datetime_expr2: 要比较的日期2

-- TIMESTAMPDIFF函数返回datetime_expr2 - datetime_expr1的结果

-- 其中datetime_expr1和datetime_expr2可以是DATE或DATETIME类型值

-- 相差：25秒

SELECT TIMESTAMPDIFF(SECOND,'2022-04-23 14:57:00','2022-04-23 14:57:25');

-- 相差：5分钟

SELECT TIMESTAMPDIFF(MINUTE,'2022-04-23 15:00:00','2022-04-23 15:05:00');

-- 相差：5小时

SELECT TIMESTAMPDIFF(HOUR,'2022-04-23 11:20:00', '2022-04-23 16:20:00');

-- 相差：2天

SELECT TIMESTAMPDIFF(DAY,'2022-04-23 11:20:00', '2022-04-25 11:20:00');

-- 相差：1星期

SELECT TIMESTAMPDIFF(WEEK,'2022-04-23 11:20:00', '2022-04-30 11:20:00');

-- 相差：1月

SELECT TIMESTAMPDIFF(MONTH,'2022-04-23 11:20:00', '2022-05-30 11:20:00');

-- 相差：1季度

SELECT TIMESTAMPDIFF(QUARTER,'2022-04-23 11:20:00', '2022-07-23 11:20:00');

-- 相差：1年

SELECT TIMESTAMPDIFF(YEAR,'2022-04-23 11:20:00', '2023-04-23 11:20:00');

```


### day()  last_day()


```mysql

-- day(date) : 获取日

SELECT DAY('2018-01-15'); -- 15


-- last_day() : 获取最后一天

select LAST_DAY('2018-02-03'); -- 2018-02-28


-- day(last_day())： 获取某年某月的最后一天

SELECT DAY(LAST_DAY('2018-02-03')); --28


-- 加一个月

select ADDDATE(current_date,INTERVAL '1' MONTH)


-- 提取日期的年/月/日

select YEAR (CURDATE()),MONTH(CURDATE()),DAYOFMONTH(CURDATE())


-- 日期加一天/一个月

select DATE_ADD(CURDATE(),INTERVAL 1 DAY/INTERVAL 1 MOUTH)

```


### CAST


```mysql

-- CAST函数用于将值从一种数据类型转换为表达式中指定的另一种数据类型

CAST(value AS datatype)

-- AS关键字用于分隔两个参数，在AS之前value的是要处理的数据，在AS之后datatype的是要转换的数据类型

DATE		将value转换成'YYYY-MM-DD'格式

DATETIME	将value转换成'YYYY-MM-DD HH：MM：SS'格式

TIME		将value转换成'HH：MM：SS'格式

CHAR		将value转换成CHAR(固定长度的字符串)格式

SIGNED		将value转换成INT(有符号的整数)格式

UNSIGNED	将value转换成INT(无符号的整数)格式

DECIMAL		将value转换成FLOAT(浮点数)格式 

BINARY		将value转换成二进制格式


-- DECIMAL(数值精度，小数点保留长度)

-- DECIMAL(10,2)可以存储最多具有8位整数和2位小数的数字

-- 9.50

SELECT CAST('9.5' AS DECIMAL(10,2));

-- 99999999.99

SELECT CAST('1234567890.123' AS DECIMAL(10,2));

-- 220.232

SELECT CAST('220.23211231' AS DECIMAL(10, 3));

-- 220.232

SELECT CAST(220.23211231 AS DECIMAL(10, 3));


-- String转double，并保留2位

select convert('111.11',decimal(10,2))

select cast("111.11" as decimal(10,2))

-- 保留小数位数2位

select FORMAT("",2)

```


### INSTR


```mysql

-- INSTR(str,substr)，获取substr在str第一次出现的位置，如果没有找到则返回0

SELECT INSTR('111222','2') -- 4

```


### PERIOD_DIFF


```mysql

-- PERIOD_DIFF()函数返回两个时间相差的月份数,前一个时间减后一个时间

-- PERIOD_DIFF(period1, period2)

SELECT PERIOD_DIFF(201710, 201703); -- 7

```

### MOD


```sql

-- 取模

select MOD(MONTH(CURDATE()), 12)

```


### RIGHT


```sql

-- 取右/左4位

select RIGHT(value,4)/left(value,4)

```


### REGEXP


```sql

-- 正则表达式

REGEXP()/NOT REGEXP/RLIKE/NOT RLIKE

```


### 窗口函数（8.0版本前）


#### DENSE_RANK

https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_dense-rank

> 排名

#### ROW_NUMBER

https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_row-number

> 行号

使用 ROW_NUMBER() 窗口函数为每个 project_id 按 create_time 降序排列的记录分配一个行号。在外部查询中，只选择行号为 1 的记录，即每个 project_id 的最新记录。

```sql
SELECT
    project_id,
    actual_trade_time,
    create_time
FROM (
    SELECT
        project_id,
        actual_trade_time,
        create_time,
        ROW_NUMBER() OVER (PARTITION BY project_id ORDER BY create_time DESC) as rn
    FROM pms_invest_finance_apply
    WHERE approval_status = '1'
) subquery
WHERE rn = 1;
```

## 其它语句


```mysql

-- 删除30天前的数据

DELETE FROM ly_p12_multiple_log WHERE open_time < date_sub(curdate(),INTERVAL 30 DAY)

	
-- 获取某天的每个小时的数据

SELECT HOUR( e.open_time ) AS HOUR,count( * ) AS Count 

FROM ly_p12_multiple e WHERE e.open_time between '2021-07-15 00' and '2021-07-16 00' 

GROUP BY HOUR ( e.open_time ) ORDER BY HOUR ( e.open_time )


-- 某字段去重

delete from `sys_depart` where id not in (select t.max_id from (select max(id) as max_id from `sys_depart` t group by org_code) as t);


-- 去重

distinct


-- 查询最大值

select MAX(value);

select * from a wher a.value = (select MAX(value));

select * from a order by desc limit 1;

-- 按组查询最大值

SELECT value1,MAX(value) FROM a GROUP BY a.value1

```


### binlog


```mysql

-- binlog

-- 获取binlog文件列表

show binary logs;

-- 每当我们停止或重启服务器时，服务器会把日志文件记入下一个日志文件，MySQL会在重启时生成一个新的日志文件，文件序号递增。

-- 如果日志文件超过max_binlog_size（默认值1G）系统变量配置的上限时，也会生成新的日志文件（在这里需要注意的是，如果你正使用大的事务，二进制日志还会超过max_binlog_size，不会生成新的日志文件，事务全写入一个二进制日志中,这种情况主要是为了保证事务的完整性）

-- 日志被刷新时，新生成一个日志文件flush logs;

show binlog events in 'mysql-bin.000898';

show binlog events;

```


### 索引


```mysql

-- 新建索引

    -- 1.添加primary key(主键索引)

    alter   table  表名   add  primary   key(`字段名`);

    -- 2.添加unique(唯一索引)

    alter  table  表名  add  unique(列名);

    -- 3.添加index(普通索引)

    alter  table  表名  add  index  index_name(`字段名`);

    -- 4.添加fulltext(全文索引)

    alter  table  表名  add  fulltext (`字段名`);

    -- 5.添加多列索引

    alter  table  表名  add  index  index_name (`字段名1`，`字段名2`.......);

-- 删除索引

	DROP INDEX <索引名> ON <表名>

```


### 存储过程


```mysql

##创建存储过程

create procedure update_user_times()

begin

update sv_common_user set times_supplement = '5',surplus_times_supplement = '5';

end;

##创建任务

create event if not exists udpate_user 

ON SCHEDULE

EVERY 1 day

STARTS concat('2022-09-01',' 00:00:00')

on completion PRESERVE

do call update_user_times();

## event_scheduler查询是否开启event

show variables like '%sche%';

## 如果没开启，则执行语句开启

set global event_scheduler=1;

#关闭事件任务

alter event udpate_user ON COMPLETION PRESERVE DISABLE;

#开启事件任务

alter event udpate_user ON COMPLETION PRESERVE ENABLE;

#删除事件

drop event udpate_user;

#删除存储过程

DROP PROCEDURE update_user_times;

#查询事件信息

select EVENT_NAME,EVENT_DEFINITION,STARTS,STATUS from information_schema.`EVENTS`

```


### 数据权限


```sql

-- 授予操作权限(将test数据库中所有表的select和insert权限授予test用户)

grant select,insert on test.* to 'test'@'localhost' identified by '123'


-- 查看账号权限

show grants for 'test'@'localhost'


-- 收回操作权限

revoke insert on test.* from 'test'@'localhost'


-- 授予所有数据库的所有权限

grant all privileges on *.* to 'test'@'localhost'


-- 授予所有数据库的所有权限(包括grant)

grant all privileges on *.* to 'test'@'localhost' with grant option


-- 授予SUPER PROCESS FILE权限（系统权限不能指定数据库）

grant super,process,file on *.* to 'test'@'localhost'


-- 只授予登录权限

grant usage on *.* to 'test'@'localhost'

```


### 账号


```sql

-- 删除账号

drop user 'test'@'localhost'


-- 修改自己的密码

set password = password('123')


-- 管理员修改他人密码

set password for 'test'@'localhost' = password('123')

```


### 字符集


```sql

-- 查看字符集

show variables like 'character%'


-- 创建数据库时指定字符集

create database test2 character set utf8

```


## 批量插入


```sql

-- 经过项目实践发现,当表的列数较多（20+）,以及一次性插入的行数较多（5000+）,插入的耗时十分漫长 

<insert id="batchInsert" parameterType="java.util.List">

    insert into USER (id, name) values

    <foreach collection="list" item="model" index="index" separator=","> 

        (#{model.id}, #{model.name})

    </foreach>

</insert>


-- 该代码方式，将传统的

INSERT INTO `table1` (`field1`, `field2`) VALUES ("data1", "data2");

INSERT INTO `table1` (`field1`, `field2`) VALUES ("data1", "data2");

-- 转化成

INSERT INTO `table1` (`field1`, `field2`) 

VALUES ("data1", "data2"),

("data1", "data2");


-- 耗时长原因

默认执行器类型为Simple，会为每个语句创建一个新的预处理语句，也就是创建一个PreparedStatement对象。在我们的项目中，会不停地使用批量插入这个方法，而因为MyBatis对于含有<foreach>的语句，无法采用缓存，那么在每次调用方法时，都会重新解析sql语句。

```


```sql

-- 替换方案

http://www.mybatis.org/mybatis-dynamic-sql/docs/insert.html（Batch Insert Support）


-- 代码示例

SqlSession session = sqlSessionFactory.openSession(ExecutorType.BATCH);

try {

    SimpleTableMapper mapper = session.getMapper(SimpleTableMapper.class);

    List<SimpleTableRecord> records = getRecordsToInsert(); // not shown

    BatchInsert<SimpleTableRecord> batchInsert = insert(records)

            .into(simpleTable)

            .map(id).toProperty("id")

            .map(firstName).toProperty("firstName")

            .map(lastName).toProperty("lastName")

            .map(birthDate).toProperty("birthDate")

            .map(employed).toProperty("employed")

            .map(occupation).toProperty("occupation")

            .build()

            .render(RenderingStrategy.MYBATIS3);

    batchInsert.insertStatements().stream().forEach(mapper::insert);

    session.commit();

} finally {

    session.close();

}


-- 原理

基本思想是将MyBatis session的executor type设为 Batch，然后多次执行插入语句。就类似于JDBC的下面语句一样。

Connection connection = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/mydb?useUnicode=true&characterEncoding=UTF-8&useServerPrepStmts=false&rewriteBatchedStatements=true","root","root");

connection.setAutoCommit(false);

PreparedStatement ps = connection.prepareStatement(

        "insert into tb_user (name) values(?)");

for (int i = 0; i < stuNum; i++) {

    ps.setString(1,name);

    ps.addBatch();

}

ps.executeBatch();

connection.commit();

connection.close();

```


## 时间字段


```sql

YEAR		YYYY				1901 ~ 2155										   1 个字节

TIME		HH:MM:SS			-838:59:59 ~ 838:59:59								3 个字节

DATE		YYYY-MM-DD			1000-01-01 ~ 9999-12-3								3 个字节

DATETIME	YYYY-MM-DD HH:MM:SS	 1000-01-01 00:00:00 ~ 9999-12-31 23:59:59			   8 个字节

TIMESTAMP	YYYY-MM-DD HH:MM:SS	 1980-01-01 00:00:01 UTC ~ 2040-01-19 03:14:07 UTC		4 个字节

```


## 回表


---


## LeetCode


### 第二高的薪水

https://leetcode.cn/problems/second-highest-salary/

> 没有第二高的数据的情况，怎么去返回NUll


```mysql

select (select distinct salary from Employee order by salary desc limit 1 offset 1 ) as SecondHighestSalary;

```


### 第N高的薪水

https://leetcode.cn/problems/nth-highest-salary/description/

```mysql

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT

BEGIN

  set N = N -1;

  RETURN (

      # Write your MySQL query statement below.

       select (select distinct salary from Employee order by salary desc limit 1 offset N)

  );

END

```


### 分数排名

https://leetcode.cn/problems/rank-scores/

> 使用子查询

```mysql

select a.score, (select count(distinct score) from Scores where score >= a.score) as 'rank' from Scores a order by a.score DESC

```

> 使用[DENSE_RANK](#DENSE_RANK)（推荐）

```mysql

SELECT S.score, DENSE_RANK() OVER (ORDER BY S.score DESC) AS 'rank' FROM Scores S;

```

> 使用INNER JOIN

```mysql

SELECT  S.score, COUNT(DISTINCT T.score) AS 'rank' FROM Scores S

INNER JOIN Scores T ON S.score <= T.score

GROUP BY S.id, S.score ORDER BY S.score DESC;

```