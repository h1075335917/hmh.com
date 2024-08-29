# 工具-IDEA技巧

### 插件


> 常用插件


```sql

-- 代码规范

Alibaba Java Coding Guidelines

CheckStyle-IDEA

QAPlug, QAPlug-Checkstyle, QAPlug-FindBugs, QAPlug-PMD

-- 快速从代码跳转到mapper

MybatisX

Free MyBatis plugin

-- 简化实体类

lombok

-- 翻译

Translation

-- 日志筛选

Grep Console

-- 查看maven的依赖树,解决依赖冲突

Maven Helper

-- 热部署

JRebel and XRebel

-- 热部署mybatis xml

JRebel mybatisPlus extension

-- 右侧缩略图

CodeGlance

-- 生成实体类的set,快捷ALT+Enter

GenerateAllSetter

-- 优化括号显示

Rainbow Brackets

HighlightBracketPair

-- 代码中显示代码提交记录

GitToolBox

-- 对字符串的一些便利操作

String Manipulation

CamelCase

-- 接口工具

Apifox Helper

Apipost Helper V2

-- Json转Java 类，新建一个类，选中类名，右键

GsonFormat

-- Java转Json，选中类名，右键

POJO to JSON

-- 生成Arthas命令，选中类或方法右键点击 Arthas Command 即可生成

Arthas Idea

-- 生成时序图

SequenceDiagram

-- 字节码查看器

jclasslib Bytecode Viewer

-- 流程图，用例图

PlantUML Integration

-- 生成正则表达式

any-rule

-- 提交出规范的 Git Commit

Git Commit Message Helper

-- 字节码

jclasslib Bytecode Viewer

-- 查看excel

ExcelReader

```


```

0.Tabnine AI Code Completion

Codota AI Autocomplete for Java and JavaScript --- 代码提示

3. IntelliJ IDEA Help --- idea离线文档

√6. Vue.js -- 支持打开vue项目

7. WeChat Mini Program Support -- 支持微信小程序或QQ小程序项目

8. WeChat weapp Support -- 支持微信app项目

9. AceJump -- 代替鼠标

12. EasyCode -- 生成MyBatis增删改查的工具

https://gitee.com/makejava/EasyCode/wikis/pages?sort_id=725164&doc_id=166248

13. Iedis -- 类似RedisDesktopManager

14. mybatisCodeHelprPro -- Mybatis代码提示

15. BackgroundImagePlus -- 背景

18 ideaVim -- 模拟Vim的操作方式

√20. GsonFormatPlus -- 将Json转成字符串,快捷ALT+S / ALT+Insert

√21. Codota -- 代码提示,方法使用提示

22. Properties to YAML Converter -- 加properties文件转成yaml文件,右击文件

23. Material Theme UI -- 图标样式变化

24. activate-power-mode -- 敲代码震动效果

√27. Key Promoter X -- 显示对应的快捷键

√28. VisualVM Launcher -- 监控运行jar

29. sonarlint -- 检查代码不合理的地方

√30. .ignore -- 忽略一些提交的文件

31. Chinese (Simplified) Language Pack -- 中文语言包

32. CheckStyle-IDEA -- 自定义代码检查

33. Docker -- 集成docker

34. IDE Features Trainer -- idea基础学习

35. Database Navigator -- 连接操作数据库

√38. easy-javadoc -- 快速生成javadoc注释在(ctrl+\)

√39. javadoc -- 快速生成javadoc注释在(alt+insert)

√40. Mybatis Log Plugin -- 日志拼接成SQL

41. jclasslib -- 字节码查看神器

42. SequenceDiagram -- 一键生成时序图

43. Squaretest -- 生成测试用例

44. TestMe -- 生成测试用例

45. IDE Features Trainer -- IDEA工具学习

46. JPA Buddy -- JPA简化操作工具

√47. Visual Studio Code Dark Plus Theme -- vscode加深主题

√48. MarkDown -- md文件支持

√49. Node.js -- 支持node.js

51. Atom Material Icons -- 好看的图标

52. IntelliVue -- Vue功能增强

54. Python -- Python支持

    Python Community Edition -- Python社区版

55. PHP -- PHP支持

    PHP Annotations -- PHP注释

56. Database Navigator -- 数据库操作支持

57. Ini -- ini文件支持

58. EduTools -- 其它语言的教育学习

59. PlantUML Integration -- PlantUML图表工具集成

60. MapStruct Support -- MapStruct工具支持

√61. Statictic -- 统计代码行数

62. CSV Editor -- CSV编辑器

63. .env files support -- .env文件支持

64. AWS Toolkit -- 亚马逊云上传协议工具

65. Big Data Tools -- 连接Hdfs（云管理）

66. Bito -- ChatGPT插件

67. aiXcoder Code Completer -- 代码补全工具

68. easy javadoc -- 快速生成注释(ctrl+\ | ctrl+shift+\)

69. Easy Code -- 数据库表生成类

```


### 快捷键


```sql

ctrl+alt+m -- 提取方法

ctrl+r -- 局部替换

ctrl+alt+t -- 包裹代码

ctrl+shift+r -- 全局替换

ctrl+shift+u -- 转大小写

ctrl+shift+v -- 从历史粘贴

alt+↑/↓ -- 上/下一个方法


-- 多选行快捷

双击Ctrl+↑/↓ -- 向上/下克隆插入符号

Alt+Shift+G -- 将插入符号添加到选择中的每一行

Alt+J -- 选择单位下次出现的位置

Alt+Shift+J --取消最后一次选择

Ctrl+Alt+Shift+J -- 选择所有出现的位置


Ctrl + Tab -- 切换活动文件

Ctrl + E -- 最近的文件


-- 折叠代码

Ctrl + - -- 折叠当前代码块

Ctrl + + -- 展开当前代码块

Ctrl + Shift + - -- 折叠所有代码块

Ctrl + Shift + + -- 展开所有代码块

```


### idea免安装配置


```sql

-- idea免安装版配置 /bin/idea.properties

-- 默认配置存储路径

C:\\${user}\AppData\Roaming\JetBrains


idea.config.path=D:/hayes/Idea2021.3.2/hayes/config


idea.system.path=D:/hayes/Idea2021.3.2/hayes/system


idea.plugins.path=${idea.config.path}/plugins


idea.log.path=${idea.system.path}/log

```


### 常用设置


```sql

√1.使用滚轮调节字体大小：Settings | Editor | General 下的 Change font size with Command + Mouse Wheel

2.自动导包 ：Settings | Editor | General | Auto Import

3.开启连字 ：Settings | Editor | Font 下的 Enable Ligatures

4.配置注释 ：Settings | Editor | File adn Code Templates 下的  Class 和  Enum 的模板

/**

 * 

 * @author hmh

 * @date ${YEAR}/${MONTH}/${DAY} ${HOUR}:${MINUTE}

 **/

public class ${NAME} {

}

5.显示方法分割线 ：Settings | Editor | General | Appearance 下的 Show method separators

```


### generated.http


```sql

-- 请求头和请求参数空一行

POST http://localhost:9992/order/generateOrder

Content-Type: application/json


{


}

```


### Idea开启SQL提示


```sql

1、Database连接数据库

2、setting --> SQL Dialects

修改为MYSQL 并 添加 Path

```


### too long设置


```sql

总是显示too long报错问题

.idea下的workspace.xml

<component name="PropertiesComponent">中添加

<property name="dynamic.classpath" value="true" />

```


### 取消检查设置


> IDEA的代码分析包含两个部分，Syntax(语法分析)和Inspections(语言修改建议)，这两个功能在修改和查看大文件时是最占CPU的。Syntax部分是不能全局关闭的，但Inspections是可以的


> 关闭Inspections

>

> > 在Perferences -> Inspections,点Copy，复制一份，名称任意。然后点击下面工具栏中的Reset to empty。保存。

>

> 优化Syntax

>

> > 对行数特别多的个别文件，还可以禁用Syntax来提高速度，在编辑器状态栏中，右上角或右击滚动条，可以看到有3个级别，选None就关闭了所有提示和分析了，这个只能对单个文件逐个设置。


### QAPlug


> 代码检测功能：QAPlug,  QAPlug-Checkstyle,  QAPlug-FindBugs,  QAPlug-PMD

>

> 检测结果：

>

> > Efficiency 效率

> >

> > Maintainability 可维护性

> >

> > Reliability 可靠性

> >

> > Usability 可用性


#### Efficiency效率


##### WMI_WRONG_MAP_ITERATOR


> [!note]

>

> **Map遍历时，需要获取value，entrySet比keySet更高效！**


> This method accesses the value of a Map entry, using a key that was retrieved from a keySet iterator. It is more efficient to use an iterator on the entrySet of the map, to avoid the Map.get(key) lookup.


```java

//此方法使用从keySet迭代器检索到的键来访问Map条目的值。在映射的entrySet上使用迭代器更有效，以避免map.get（key）查找。

```


##### SBSC_USE_STRINGBUFFER_CONCATENATION


> [!note]

>

> **循环中使用StringBuffer/StringBuilder比+连接性能更好**


> The method seems to be building a String using concatenation in a loop. In each iteration, the String is converted to a StringBuffer/StringBuilder, appended to, and converted back to a String. This can lead to a cost quadratic in the number of iterations, as the growing string is recopied in each iteration.

>

> Better performance can be obtained by using a StringBuffer (or StringBuilder in Java 1.5) explicitly.


```java

//此方法在循环中使用+来连接String。在每次迭代中，字符串都会转换为StringBuffer/StringBuilder，附加到字符串，然后再转换回字符串。这可能会导致迭代次数的成本二次型，因为在每次迭代中将不断增长的字符串重新复制。

//显式使用StringBuffer（或Java 1.5中的StringBuilder）可以获得更好的性能。

```


##### DM_STRING_CTOR


> [!note]

>

> **new String()会浪费内存，直接使用参数String即可**


> Using the java.lang.String(String) constructor wastes memory because the object so constructed will be functionally indistinguishable from the String passed as a parameter.  Just use the argument String directly.


```java

//使用java.lang.String（String）构造函数会浪费内存，因为这样构造的对象在功能上与作为参数传递的String无法区分。直接使用参数String即可。

```


##### DM_NUMBER_CTOR


> [!note]

>

> **new Long()浪费性能，使用autoboxing和valueOf方法即可**


> Using new Integer(int) is guaranteed to always result in a new object whereas Integer.valueOf(int) allows caching of values to be done by the compiler, class library, or JVM. Using of cached values avoids object allocation and the code will be faster.

> Values between -128 and 127 are guaranteed to have corresponding cached instances and using valueOf is approximately 3.5 times faster than using constructor. For values outside the constant range the performance of both styles is the same.

> Unless the class must be compatible with JVMs predating Java 1.5, use either autoboxing or the valueOf() method when creating instances of Long, Integer, Short, Character, and Byte.


```java

//使用new Integer（int）可以保证总是产生一个新对象，而Integer.valueOf（int）允许编译器、类库或JVM缓存值。使用缓存值可以避免对象分配，并且代码会更快。

//-128到127之间的值保证具有相应的缓存实例，使用valueOf的速度大约是使用构造函数的3.5倍。对于常量范围之外的值，两种样式的性能相同。

//除非该类必须与Java 1.5之前的JVM兼容，否则在创建Long、Integer、Short、Character和Byte的实例时，请使用autoboxing（自动装箱）或valueOf方法。

```


##### UPM_UNCALLED_PRIVATE_METHOD


> [!note]

>

> **删除没有使用的私有方法**


> This private method is never called. Although it is possible that the method will be invoked through reflection, it is more likely that the method is never used, and should be removed.


```java

//从未调用此私有方法。尽管该方法可能会通过反射调用，但更有可能的是，该方法从未使用过，因此应该删除。

```


##### SIC_INNER_SHOULD_BE_STATIC


> [!note]

>

> **内部类应该是静态的**


> This class is an inner class, but does not use its embedded reference to the object which created it.  This reference makes the instances of the class larger, and may keep the reference to the creator object alive longer than necessary.  If possible, the class should be made static.


```java

//这个类是一个内部类，但不使用它对创建它的对象的嵌入引用。这个引用使类的实例更大，并可能使对创建者对象的引用保持更长的生存时间。如果可能的话，类应该是静态的。

```


##### URF_UNREAD_FIELD


> [!note]

>

> **删除没有使用的字段**


> This field is never read.  Consider removing it from the class.


```java

//此字段从不被读取。考虑将其从类中删除。

```


#### Maintainability可维护性


##### AM_CREATES_EMPTY_ZIP_FILE_ENTRY


> [!note]

>

> **不要写入空的ZipFile**


> The code calls putNextEntry(), immediately followed by a call to closeEntry(). This results in an empty ZipFile entry. The contents of the entry should be written to the ZipFile between the calls to putNextEntry() and closeEntry().


```java

//该代码调用putNextEntry，然后立即调用closeEntry。这将导致ZipFile条目为空。应在调用putNextEntry和closeEntry之间将条目的内容写入ZipFile。

//bad code

ZipOutputStream zos = new OutputStream();

zos.putNextEntry(new ZipEntry(name + "/"));

zos.closeEntry();

```


##### RV_RETURN_VALUE_IGNORED_BAD_PRACTICE


> [!note]

>

> **检查返回值，并进行返回值异常处理**


> This method returns a value that is not checked. The return value should be checked since it can indicate an unusual or unexpected function execution. For example, the File.delete() method returns false if the file could not be successfully deleted (rather than throwing an Exception). If you don't check the result, you won't notice if the method invocation signals unexpected behavior by returning an atypical return value.


```java

//此方法返回一个未检查的值。应该检查返回值，因为它可能指示异常或意外的函数执行。例如，如果无法成功删除文件（而不是引发异常），则File.delete（）方法返回false。如果不检查结果，则不会注意到方法调用是否通过返回非典型返回值来发出意外行为的信号。

//bad code

file.mkdirs();

```


#### Reliability可靠性


##### EQ_OVERRIDING_EQUALS_NOT_SYMMETRIC


> [!note]

>

> 如果继承了父类，使用@Data还需要重写@EqualsAndHashCode(callSuper = true)。

>

> 不加该注解的影响：子类对象属性值一致，但其继承的父类对象属性值不一致，在比较的时候会出现比较结果不对的情况。注解的作用就是将其父类属性也进行比较。


> This class defines an equals method that overrides an equals method in a superclass. Both equals methods methods use instanceof in the determination of whether two objects are equal. This is fraught with peril, since it is important that the equals method is symmetrical (in other words, a.equals(b) == b.equals(a)). If B is a subtype of A, and A's equals method checks that the argument is an instanceof A, and B's equals method checks that the argument is an instanceof B, it is quite likely that the equivalence relation defined by these methods is not symmetric.


```java

//此类定义了一个equals方法，该方法重写超类中的equals方法。两个equals方法都使用instanceof来确定两个对象是否相等。这充满了危险，因为重要的是，equals方法是对称的（换句话说，a.equals（b）==b.equals（a））。如果B是a的子类型，并且a的equals方法检查参数是a的实例，而B的equals法检查参数是B的实例，则这些方法定义的等价关系很可能不是对称的。

```


##### NP_NULL_ON_SOME_PATH_EXCEPTION


> [!note]

>

> **未判空，可能出现空指针异常**


> A reference value which is null on some exception control path is dereferenced here.  This may lead to a NullPointerException when the code is executed.  Note that because FindBugs currently does not prune infeasible exception paths, this may be a false warning.

> Also note that FindBugs considers the default case of a switch statement to be an exception path, since the default case is often infeasible.


```java

//在某些异常控制路径上为null的引用值在此处被取消引用。这可能会在执行代码时导致NullPointerException。请注意，由于FindBugs当前不修剪不可行的异常路径，这可能是一个错误警告。

//还要注意，FindBugs将switch语句的默认情况视为异常路径，因为默认情况通常是不可行的。

```


##### RpC_REPEATED_CONDITIONAL_TEST


> [!note]

>

> **多余重复的判断**


> The code contains a conditional test is performed twice, one right after the other (e.g., x == 0 || x == 0). Perhaps the second occurrence is intended to be something else (e.g., x == 0 || y == 0).


```java

//该代码包含一个条件测试，执行两次，一次紧接着另一次（例如，x==0 ||x==0）。也许第二次出现是为了其他事情（例如，x==0||y==0）。

```


##### MS_SHOULD_BE_FINAL


> [!note]

>

> **将静态字段设置成final**


> A mutable static field could be changed by malicious code or by accident from another package. The field could be made final to avoid this vulnerability.


```java

//可变静态字段可能会被恶意代码更改，或者意外地从另一个包更改。可以将字段设置为最终字段以避免此漏洞。

```


##### EI_EXPOSE_REP2


##### EI_EXPOSE_REP


> [!note]

>

> **针对实体类的对象的get/set，使用对象的副本更好**


> This code stores a reference to an externally mutable object into the internal representation of the object.  If instances are accessed by untrusted code, and unchecked changes to the mutable object would compromise security or other important properties, you will need to do something different. Storing a copy of the object is better approach in many situations.


```java

//此代码将对外部可变对象的引用存储到对象的内部表示中。如果实例被不受信任的代码访问，并且对可变对象的未经检查的更改会危及安全性或其他重要属性，则需要采取不同的措施。在许多情况下，存储对象的副本是更好的方法。

//bad code

public Date getGmtCreate() {

    return gmtCreate;

}

public void setGmtCreate(Date gmtCreate) {

    this.gmtCreate = gmtCreate;

}

//better code

public Date getGmtCreate() {

    if (this.gmtCreate != null) {

        return new Date(this.gmtCreate.getTime());

    } else {

        return null;

    }

}

public void setGmtCreate(Date gmtCreate) {

    if (gmtCreate != null) {

        this.gmtCreate = (Date) gmtCreate.clone();

    } else {

        this.gmtCreate = null;

    }

}

```


#### Usability可用性


##### IM_BAD_CHECK_FOR_ODD


> [!note]

>

> **奇偶判断，需要考虑负数**


> The code uses x % 2 == 1 to check to see if a value is odd, but this won't work for negative numbers (e.g., (-5) % 2 == -1). If this code is intending to check for oddness, consider using x & 1 == 1, or x % 2 != 0.


```java

//该代码使用x%2==1来检查值是否为奇数，但这不适用于负数（例如，（-5）%2==-1）。如果此代码打算检查异常情况，请考虑使用x&1==1或x%2！=0.

//bad code

size % 2 == 1

//better code

size & 1 == 1 或 size % 2 != 0

```


##### DMI_HARDCODED_ABSOLUTE_FILENAME


> [!note]

>

> **文件路径不建议使用硬编码**


> This code constructs a File object using a hard coded to an absolute pathname (e.g., new File("/home/dannyc/workspace/j2ee/src/share/com/sun/enterprise/deployment");


```java

//此代码使用硬编码到绝对路径名的文件对象（例如，new File（“/home/dannyc/workspace/j2ee/src/share/com/sun/enterprise/deployment”）；

```


##### DLS_DEAD_LOCAL_STORE


> [!note]

>

> **删除不使用的局部变量**


> This instruction assigns a value to a local variable, but the value is not read or used in any subsequent instruction. Often, this indicates an error, because the value computed is never used.

> Note that Sun's javac compiler often generates dead stores for final local variables. Because FindBugs is a bytecode-based tool, there is no easy way to eliminate these false positives.


```java

//此指令为局部变量赋值，但该值不会在任何后续指令中读取或使用。通常，这表明存在错误，因为从未使用计算出的值。

//请注意，Sun的javac编译器经常为最终的局部变量生成死存储。因为FindBugs是一个基于字节码的工具，所以没有简单的方法来消除这些误报。

```


##### REC_CATCH_EXCEPTION


> [!note]

>

> **try..catch，打印正确的异常**


> This method uses a try-catch block that catches Exception objects, but Exception is not thrown within the try block, and RuntimeException is not explicitly caught. It is a common bug pattern to say try \{ ... } catch (Exception e) \{ something } as a shorthand for catching a number of types of exception each of whose catch blocks is identical, but this construct also accidentally catches RuntimeException as well, masking potential bugs.


```java

//此方法使用一个捕获Exception对象的try-catch块，但Exception没有在try块内抛出，并且RuntimeException也没有显式捕获。一种常见的错误模式是说try｛…｝catch（Exception e）｛something｝，作为捕获多种类型的异常的简写，每个异常的catch块都是相同的，但这种构造也意外地捕获了RuntimeException，从而掩盖了潜在的错误。

//bad code

try {


} catch (Exception e) {

	throw new BusinessException("获取融担企业评分信息数据异常");

}

//better code

try {


} catch (Exception e) {

	throw new BusinessException(e);

}

```


##### DB_DUPLICATE_BRANCHES


> [!note]

>

> **相同的条件判断，执行了相同的逻辑**


> This method uses the same code to implement two branches of a conditional branch. Check to ensure that this isn't a coding mistake.


```java

//此方法使用相同的代码来实现条件分支的两个分支。检查以确保这不是编码错误。

```


##### RCN_REDUNDANT_NULLCHECK_OF_NONNULL_VALUE


> [!note]

>

> **冗余判空**


> This method contains a redundant check of a known non-null value against the constant null.


```java

//此方法包含对常量null的已知非null值的冗余检查

```


##### ST_WRITE_TO_STATIC_FROM_INSTANCE_METHOD


> [!note]

>

> **不直接使用静态成员变量，建议使用静态setter赋值**


> This instance method writes to a static field. This is tricky to get correct if multiple instances are being manipulated, and generally bad practice.


```java

//此实例方法写入静态字段。如果多个实例被操纵，这很难纠正，而且通常是糟糕的做法。

//常见于常量类，直接通过类名.常量名获取的方式违背了封装的原则，findbugs不提倡使用，而如果将常量改成静态成员变量，又因为spring不支持静态注入导致不能实现，解决方法是非静态的setter调用静态的setter方法给静态成员变量赋值。

//bad code

private static ApplicationContext applicationContext;

@Override

public void setApplicationContext(final ApplicationContext applicationContext) {

    SpringUtils.applicationContext = applicationContext;

}

//better code

private static ApplicationContext applicationContext;

@Override

public void setApplicationContext(final ApplicationContext applicationContext) {

    //改动1、用静态set方法给static field 赋值

    setApplicationContextStatic(applicationContext);

}

//改动2、静态set方法

public static void setApplicationContextStatic(final ApplicationContext applicationContext) {

    SpringUtils.applicationContext = applicationContext;

}

```






### IdeaVim插件使用


```sql

-- VIM 的命令模式（Command mode）

VIM 命令模式下，主要进行的操作有光标的移动，复制文本，删除文本，黏贴文本等。

通过ESC进入该模式。


-- 输入模式（Insert mode）

该模式下可进行正常的文本编辑。

可以通过如下方式进入，各有秒处，常用：i,I,a,A,o,O,s,S

i 是在光标所在的字符之前插入

I 是在光标所在行的行首插入

a 是在光标所在的字符之后插入

A 是在光标所在行的行尾插入

o 是光标所在行的下一行行首插入

O 是光标所在行的上一行行首插入

s 删除光标所在处的字符然后插入

S 删除光标所在行，在当前行的行首开始插入


-- 底线命令模式（Last line mode）

视觉上vim窗口最下面有一条输入框的模式，可以进行查找，替换操作。

通过：或 /进入该模式。

```


| **细分**             |                   |                                                              |

| -------------------- | ----------------- | ------------------------------------------------------------ |

| **纯移动形**         |                   |                                                              |

|                      | h                 | 向左                                                         |

|                      | j                 | 向下                                                         |

|                      | k                 | 向上                                                         |

|                      | l                 | 向右                                                         |

|                      | ctrl + f          | 屏幕『向下』移动一页                                         |

|                      | ctrl + b          | 屏幕『向上』移动一页                                         |

|                      | ^                 | 移动到该行的第一个字符                                       |

|                      | $                 | 移动到该行的最后一个字符                                     |

|                      | zz                | 将光标处文本移动到屏幕中央                                   |

|                      | G                 | 移动到这个档案的最后一行                                     |

|                      | nG                | 移动到这个档案的第 n 行                                      |

|                      | gg                | 移动到这个档案的第一行                                       |

|                      | n                 | 光标向下移动 n 行                                            |

| **搜索形跳转**       |                   |                                                              |

|                      | fa                | 跳转至行内第一个匹配的字母，按`；`可继续跳转至下一个，fa a 代表跳到 a |

| **搜索替换**         |                   |                                                              |

| **底线模式下**       |                   |                                                              |

|                      | /word             | 向光标之下寻找一个名称为 word 的字符串                       |

|                      | n                 | 代表重复前一个搜寻的动作。跳转匹配下一个搜索结果             |

| **替换**             |                   |                                                              |

|                      | :%s/word1/word2/g | 寻找 word1 字符串，并将该字符串取代为 word2 <br/>%s 全文搜索<br/>g 代表全文替换 |

| **删除、复制、粘贴** |                   |                                                              |

| **删除**             |                   |                                                              |

|                      | x                 | 删除光标处字符                                               |

|                      | dd                | 删除整行                                                     |

|                      | ndd               | 删除光标所在的向下 n 行                                      |

| **复制**             |                   |                                                              |

|                      | yy                | 复制光标所在整行                                             |

|                      | nyy               | 复制光标所在的向下 n 行                                      |

| **粘贴**             |                   |                                                              |

|                      | p                 | 为将已复制的数据在光标下一行贴上                             |

|                      | P                 | 为将已复制的数据在光标上一行贴上                             |

| **其他**             |                   |                                                              |

|                      | u                 | 修改回退，回退到上一步修改                                   |

| **有用的组合**       |                   |                                                              |

|                      | yaw               | 复制一个单词                                                 |

|                      | daw               | 删除一个单词                                                 |

|                      | caw               | 剪切一个单词到粘贴板，可利用 p 进行粘贴                      |

|                      |                   |                                                              |


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/Vim%E5%B7%A5%E4%BD%9C%E6%A8%A1%E5%BC%8F.png" width="50%" />


### Setting


#### Appearance & Behavior 外观 & 行为


>#### Appearance 外观

>

>> Theme 主题

>

>> Sync with OS 与操作系统同步

>>

>> IntelliJ IDEA检测当前系统设置，并相应地使用默认的深色或浅色主题

>

>> Zoom 缩放（Alt + Shift + +/-）

>>

>> 使用此选择器可以放大和缩小整个IDE，同时增大或减小所有UI元素的大小

>

>>Use custom font 使用自定义字体

>>

>>指定要在IntelliJ IDEA UI中使用的自定义字体系列和大小

>

>> Accessibility 可访问性

>>

>> >Support screen readers 支持屏幕阅读器

>>

>> > Use contrast scrollbars 使用对比度滚动条

>> >

>> > 使编辑器滚动条更加明显

>>

>> >Adjust colors for red-green vision deficiency 调整红绿视觉缺陷的颜色

>> >

>> >调整UI颜色，以便更好地感知颜色，以防红盲和绿盲。

>

>>UI Options UI选项

>>

>>> Show tree indent guides 显示树缩进参考线

>>>

>>> 在树视图中显示标记缩进级别的垂直线

>>

>>> Use smaller indents in trees 在树上使用较小的缩进

>>>

>>> 减少工具窗口边框与树视图中的文本之间的间距

>>

>>> Enable mnemonics in menu 在菜单中启用助记符

>>>

>>> 在可按以执行菜单操作的热键下加下划线

>>

>>> Enable mnemonics in controls 在控件中启用助记符

>>>

>>> 为可以按下以使用对话框中的控件的热键加下划线

>>

>>> Smooth scrolling 平滑滚动

>>>

>>> 平滑地逐像素滚动UI，而不是逐行滚动

>>

>>> Drag-and-drop with Alt pressed only 仅在按下Alt键时拖放

>>>

>>> 避免意外移动文件、编辑器选项卡、工具窗口按钮和其他UI组件

>>

>>> Always show full path in window header 总是在窗口标题中显示完整路径

>>

>>> Display icons in menu items 在菜单项中显示图标

>>>

>>> 在主菜单和上下文菜单中的项目左侧显示图标

>>

>>> Background Image… 背景图像...

>>>

>>> 为IDE配置自定义背景图像


> Antialiasing 反走样

>

> > IDE / Editor

> >

> > > Subpixel 子像素

> > >

> > > 建议将此选项用于LCD显示器

> >

> > > Greyscale 灰度

> > >

> > > 建议非LCD显示器或垂直放置的显示器使用此选项

> >

> > > No antialiasing 无抗锯齿

> > >

> > > 此选项可用于高分辨率的显示，其中非抗锯齿字体呈现得更快，并且可能看起来更好


> Tool Windows 工具窗口

>

> > Show tool window bars 显示工具窗口栏

> >

> > 在主窗口的边缘周围显示工具窗口栏

>

> > Side-by-side layout on the left/right 左/右侧并排布局

> >

> > 在两列中显示附着到左/右侧上边缘和下边缘的工具窗口

>

> > Widescreen tool window layout 宽屏工具窗口布局

> >

> > 优化宽屏幕显示的工具窗口布局：通过限制水平工具窗口的宽度来最大化垂直工具窗口的高度

>

> > Remember size for each tool window 记住每个工具窗口的大小

> >

> > 当您重新打开或在工具窗口之间切换时，请记住每个工具窗口的宽度

>

> Presentation Mode 演示模式

>

> > Zoom 缩放（CTRL + `）


> #### New UI 新UI

>

> > Enable new UI 启用新UI

> >

> > > Compact mode 紧凑模式

> >

> > > show main menu in a separate toolbar 在单独的工具栏中显示主菜单


> #### Menus and Toolbars 菜单和工具栏

>

> > Add Actions… 添加操作...

> >

> > 打开“选择要添加的操作”对话框，在此可以选择操作并在必要时为其分配图标


> #### System Setting 系统设置

>

> > Confirm before exiting the IDE 退出IDE前确认

> >

> > 尝试关闭IntelliJ IDEA时显示一个确认对话框

>

> >When closing a tool window with a running process 关闭带有运行进程的工具窗口时

> >

> >> Terminate process 终止进程

> >>

> >> 完全停止进程

> >

> >> Disconnect 断开连接

> >>

> >> 保持进程运行，但断开与它的连接

> >

> >> Ask 询问

> >>

> >> 显示一个对话框，其中包含可供选择的操作

> >

> >Project 工程项目

> >

> >> Reopen projects on startup 启动时重新打开项目

> >>

> >> 打开上次关闭IntelliJ IDEA时打开的所有项目

> >

> >> Open project in 在打开项目时

> >>

> >> > New window 新窗口

> >> >

> >> > 在单独的窗口中打开每个项目

> >>

> >> > Current window 当前窗口

> >> >

> >> > 关闭当前项目并在同一窗口中打开新项目

> >>

> >> > Ask 询问

> >> >

> >> > 显示一个对话框，其中包含可供选择的操作

> >>

> >> Default project directory 默认项目目录

> >>

> >> 指定项目的默认位置。当您创建新项目或想要打开现有项目时，IntelliJ IDEA建议使用此目录

> >

> >Autosave 自动保存

> >

> >> Save files if the IDE is idle for 10 seconds 

> >>

> >> 定期保存所有修改过的文件

> >

> >>Save files when switching to a different application or a built-in terminal

> >>切换到不同的应用程序或内置终端时保存文件

> >

> >> Back up files before saving 保存前备份文件

> >>

> >> 保存前创建备份。如果保存成功，将删除备份。如果没有，从备份中还原原始内容

> >

> >> Synchronize external changes when switching to the IDE window or opening an editor tab

> >> 切换到IDE窗口或打开编辑器选项卡时同步外部更改


> > ##### Passwords 密码

> >

> > > In KeePass 关于KeePass

> > >

> > > > Database 数据库

> > > >

> > > > 指定密码数据库文件的位置 **c.kdbx** 

> > >

> > > > Protect master password using PGP key 使用PGP密钥保护主密码

> > > >

> > > > 使用PGP加密密码数据库的主密码

> >

> > ##### HTTP Proxy http代理

> >

> > > No proxy 无代理

> > >

> > > 直接连接，无需代理

> >

> > > Auto-detect proxy settings 自动检测代理设置

> > >

> > > > Automatic proxy configuration URL 自动代理配置URL

> > > >

> > > > 手动指定PAC文件的位置

> > >

> > > > Clear passwords 清除密码

> > > >

> > > > 清除指定代理的密码

> > >

> > > Manual proxy configuration 手动代理配置

> > >

> > > > HTTP / SOCKS  使用HTTP/SOCKS代理

> > >

> > > > Host name 指定代理主机名或IP地址

> > >

> > > > Port number 指定代理端口号

> > >

> > > > No proxy for 无代理

> > > >

> > > > 指定一个或多个禁用主机名或IP地址。使用星号表示任意数量字符，逗号分隔地址

> > >

> > > > Proxy authentication 代理身份验证

> > > >

> > > > 如果您的代理需要身份验证，请选中此复选框

> > >

> > > > Login 登录

> > > >

> > > > 指定用于连接到代理的用户

> > >

> > > > Password 密码

> > > >

> > > > 指定与用户关联的密码

> > >

> > > > Remember 记住密码

> >

> > > Check connection 检查连接

> > >

> > > 检查代理服务器设置，在窗口中输入URL检查通过指定代理服务器与代理服务器的连接

> >

> > ##### Data Sharing 数据共享

> >

> > > Send usage statistics 发送使用统计

> > >

> > > 允许JetBrains收集您在抢先体验中使用IntelliJ IDEA时最常用的功能和操作的统计信息

> >

> > ##### Date Formats 日期格式

> >

> > > Override system date and time format 覆盖系统日期和时间格式

> > >

> > > 手动指定日期和时间戳的格式

> >

> > > Use pretty formatting 使用漂亮的格式

> > >

> > > 对最近的日期，用相对日期和时间戳替换绝对数字日期和时间戳，如10分钟前、今天和昨天


> #### File Colors  文件颜色

>

> > Enable file colors 启用文件颜色

>

> > Use in editor tabs 在编辑器选项卡中使用

>

> > Use in project View 在项目查看中使用

>

> #### Scopes 范围


> #### Notifications 通知

>

> > Display balloon notifications 显示气球通知

> >

> > 启用IntelliJ的事件通知。通知通常在相应事件发生时出现在屏幕上的气球中示出

>

> > Enable system notifications 启用系统通知

>

> > Popup type 弹出方式

> >

> > > Balloon 气球

> > >

> > > 气球在屏幕上显示一小段时间，然后自动消失

> >

> > > Sticky balloon 粘滞气球

> > >

> > > 除非关闭，否则通知气球将停留在屏幕上

> >

> > > Tool window balloon 工具窗口气球

> > >

> > > 仅当相应的工具窗口打开时，才会显示通知气球

> >

> > > No popup 无弹出窗口

> > >

> > > 不显示相应事件组的通知

>

> > Show in tool window 在工具窗口中显示

>

> > Play sound 播放声音


> Quick Lists 快速列表


> Path Variables 路径变量

>

> > Ignored Variables 忽略的变量

> >

> > 列出应忽略的变量的名称。使用分号`;`分隔列表项




#### Editor


> #### General 一般

>

> > Mouse Control 鼠标控制

> >

> > > Change font size with Ctrl+Mouse Wheel

> > >

> > > 使用Ctrl+鼠标滚轮更改字体大小

> > >

> > > > Active edito 活动编辑器

> > > >

> > > > 关闭后会重置

> > >

> > > > All editors 所有编辑

> > > >

> > > > 不会重置

> >

> > > Move code fragments with drag-and-drop

> > >

> > > 通过拖放移动代码片段

> >

> > Soft Wraps 软包装

> >

> > >  Soft-wrap these files 把这些文件软包装起来

> > >

> > > 会将文件自动转行

> >

> > > Use the original line's indent for wrapped fragments

> > > 使用原始行的缩进来表示换行的片段




#### Advanced Settings


>Bookmarks 书签 - （ALT+2）管理书签

>

>>Shwo only line bookmarks in popup


>

>

>Compiler 编译器

>

>>Allow auto-make to start even if developed application is currently running

>>

>>即使开发的应用程序当前正在运行，也允许启动自动生成编译项目

>>

>>Return compilation with lower priority

>>

>>返回具有较低优先级的编译


>

>

>Debugger调试器

>

>> Maximum number of recent expressions

>>

>> 最近表达式的最大数量

>

>>Compare variables with clipboard

>>

>>将变量与剪贴板比较﻿（右击Debugger变量栏）

>

>> Set variable values

>>

>> 设置变量值（F2）

>

>>Evaluate expressions in a dedicated dialog

>>

>>在专用对话框中计算表达式（右击Evaluate expressions/ALT+F8）


