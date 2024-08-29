## [jEnv](https://github.com/jenv/jenv)


> 管理Java环境，不支持Windows


### [JEnv-for-Windows](https://github.com/FelixSelter/JEnv-for-Windows)


> 支持Windows

>

> [示例](https://mp.weixin.qq.com/s/GXOfJqBG0DNdEEy9DzXbSA)


## JDK


> Windows、Linux、MacOS 等操作系统都有相应的 JDK，只要安装好了 JDK 就有了 Java 的运行时环境，就可以把 Java 源代码编译为字节码，然后字节码又可以在不同的操作系统上运行了


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/five-05.png" alt="img" width="50%" />


### JDK发展史


[JDK下载地址](https://jdk.java.net/archive/)


#### 1.0


```sql

1995年5月23日，Java语言诞生；


-- 1996年1月，第一个JDK-JDK1.0诞生；

1996年4月，10个最主要的操作系统供应商申明将在其产品中嵌入Java技术；

1996年9月，约8.3万个网页应用了Java技术来制作；

```


#### 1.1


```sql

-- 1997年2月18日，JDK1.1发布；

1997年4月2日，JavaOne会议召开，参与者逾一万人，创当时全球同类会议纪录；

1997年9月，JavaDeveloperConnection社区成员超过十万；

1998年2月，JDK1.1被下载超过2,000,000次；

```


#### 1.2


```sql

-- 1998年12月8日，Java 2企业平台J2EE发布；

-- 1999年6月，SUN公司发布Java三个版本：标准版（J2SE）、企业版（J2EE）和微型版（J2ME）；

{

    1）改进集合框架，如新增HashMap替代旧的HashTable（常用）

    2）开始提供JIT(Just In Time)编译器;

}

```


#### 1.3


```sql

-- 2000年5月8日，JDK1.3发布；

2001年6月5日，Nokia宣布到2003年将出售1亿部支持Java的手机；

2001年9月24日，J2EE1.3发布；

{

	1）Dynamic Proxy: 加入了JDK动态代理（常用）

}

```


#### 1.4


```sql

-- 2002年2月26日，J2SE1.4发布，此后Java的计算能力有了大幅提升

{

	1）NIO: 在传统BIO的基础上引入了NIO（Non-Blocking IO）（常用）。

}

```


#### 5.0


```sql

-- 2004年9月30日，J2SE1.5发布，成为Java语言发展史上的又一里程碑。为了表示该版本的重要性，J2SE1.5更名为Java SE 5.0；有诸多重大新特性；代号：Tiger（里程碑版本）

{

    1）自动拆箱/装箱(Auto Inbox/Outbox)（常用）

    2）枚举(Enum)（常用）

    3）静态导入 (static import)

    4）可变参数列表 (var args)（常用）

    5）范型（Generic)（常用）

    6）增强for循环（for-each）（常用）

    7）注解（Annotation）（常用）

    8）协变返回类型：实际返回类型可以是要求返回类型的一个子类

    9）concurrent并发包（Doug leg）（常用）

}

```


#### 6.0


```sql

-- 2006年12月，SUN公司发布JDK6.0；代号: Mustang 此版本持续了5年之久才发布新版本，是最经典的版本。

2009年12月，SUN公司发布Java EE 6；

2010年4月，Oracle 收购 Sun。

2010年11月，由于甲骨文对Java社区的不友善，因此Apache扬言将退出JCP；

{

	1）Compiler API，可以实现动态编译Java源文件，如jsp编译引擎就是动态的，修改后无需重启服务器

	2）对脚本语言的支持：如js， ruby，groovy

}

```


#### [7](https://openjdk.org/projects/jdk7/)


```sql

-- 2011年7月28日，甲骨文发布Java SE 7；{

    特性一：一组小的改进{

        1）Switch支持String（常用）

        2）try … with … resource（常用）

        3）范型类型自动推断（常用）

        4）多重catch（常用）

        5）数字可用下划线分割

    }

    特性二：G1垃圾回收器（Grabage-First Collector）（常用）{

        新出的垃圾回收器，用来替代Concurrent Mark-Sweep Collector（CMS）。

        目标是减少 Full GC 带来的暂停次数，增加吞吐量。

    }

    特性三：concurrent包改进（常用）{

        Doug Lea在此版本引入了轻量级的fork/join框架来支持多核多线程的并发计算。

        此外，实现了 Phaser 类，它类似于 CyclicBarrier 和 CountDownLatch 但更灵活。

        最后，ThreadLocalRandom 类提供了线程安全的伪随机数生成器。

	}

	特性四：IO与网络的更新{

        NIO2 主要包括了 3 个方面的改进：

        新的文件系统 API 支持大量文件属性的访问、文件系统监控服务、平台相关的 API，

        如 DosFileAttributes 和 PosixFileAttributes 等，以及一个可插拔文件系统的 SPI。

        Socket和文件的异步IO。

        Socket channel 的功能完善，支持 binding、多播等。

	}

	特性五：JDBC更新(常用){

        支持JDBC4.1和Rowset 1.1

	}

}

```


#### [8](https://www.oracle.com/java/technologies/javase/8-whats-new.html)※


```sql

-- 2014年3月18日，甲骨文发表Java SE 8。（重大版本 - LTS）

```


[参考英文地址](https://github.com/winterbe/java8-tutorial) [参考中文说明](https://javaguide.cn/java/new-features/java8-tutorial-translate.html)


##### Interface


> interface 的设计初衷是面向抽象，提高扩展性

>

> 为了解决接口的修改与现有的实现不兼容的问题。新 interface 的方法可以用`default` 或 `static`修饰，这样就可以有方法体，实现类也不必重写此方法。

>

> 一个 interface 中可以有多个方法被它们修饰，这 2 个修饰符的区别主要也是普通方法和静态方法的区别

>

> > 1. `default`修饰的方法，是普通实例方法，可以用`this`调用，可以被子类继承、重写。

> > 2. `static`修饰的方法，使用上和一般类静态方法一样。但它不能被子类继承，只能用`Interface`调用。


> [!warning]

>

> 如果有一个类既实现了 `InterfaceNew` 接口又实现了 `InterfaceNew1`接口，它们都有`def()`，并且 `InterfaceNew` 接口和 `InterfaceNew1`接口没有继承关系的话，这时就必须重写`def()`。不然的话，编译的时候就会报错。


> 接口和抽象类有什么区别的

>

> > - 接口多实现，类单继承

> >

> > - 接口的方法是 public abstract 修饰，变量是 public static final 修饰。 abstract class 可以用其他修饰符

>

> interface 的方法是更像是一个扩展插件。而 abstract class 的方法是要继承的


##### 函数式接口


> functional interface 函数式接口：也称 SAM 接口，即 Single Abstract Method interfaces，有且只有一个抽象方法，但可以有多个非抽象方法的接口

>

> 在 java 8 中专门有一个包放函数式接口`java.util.function`，该包下的所有接口都有 `@FunctionalInterface` 注解，提供函数式编程。

>

> 在其他包中也有函数式接口，其中一些没有`@FunctionalInterface` 注解，但是只要符合函数式接口的定义就是函数式接口，与是否有`@FunctionalInterface`注解无关，注解只是在编译时起到强制规范定义的作用。其在 Lambda 表达式中有广泛的应用。


##### Lambda 表达式


##### Stream流


>java 新增了 `java.util.stream` 包，它和之前的流大同小异。之前接触最多的是资源流，比如`java.io.FileInputStream`，通过流把文件从一个地方输入到另一个地方，它只是内容搬运工，对文件内容不做任何*CRUD*。

>

>`Stream`依然不存储数据，不同的是它可以检索(Retrieve)和逻辑处理集合数据、包括筛选、排序、统计、计数等。可以想象成是 Sql 语句。


流类型


> 1. stream 串行流

> 2. parallelStream 并行流，可多线程执行


##### Optional


##### Date-Time API


> 这是对`java.util.Date`强有力的补充，解决了 Date 类的大部分痛点：

>

> 1. 非线程安全

> 2. 时区处理麻烦

> 3. 各种格式化、和时间计算繁琐

> 4. 设计有缺陷，Date 类同时包含日期和时间；还有一个 java.sql.Date，容易混淆。

>

> java.time 主要类

>

> 1. LocalDateTime.class  //日期+时间 format: yyyy-MM-ddTHH:mm:ss.SSS

> 2. LocalDate.class  //日期 format: yyyy-MM-dd

> 3. LocalTime.class  //时间 format: HH:mm:ss

>

> JDBC 和 java8

>

> 1. `Date` ---> `LocalDate`

> 2. `Time` ---> `LocalTime`

> 3. `Timestamp` ---> `LocalDateTime`


#### [9](https://openjdk.org/projects/jdk9/)


```sql

2017年9月21日，JDK9发布。从JDK9开始固定为每半年一个版本，更新内容相应缩减。

```


##### JShell


> JShell 是 Java 9 新增的一个实用工具。为 Java 提供了类似于 Python 的实时命令行交互工具。

>

> 在 JShell 中可以直接输入表达式并查看其执行结果。

>

```shell

> 

```


##### 模块化系统


> 模块系统是[Jigsaw Project](https://openjdk.java.net/projects/jigsaw/)的一部分，把模块化开发实践引入到了 Java 平台中，可以让我们的代码可重用性更好！

>

> **什么是模块系统？** 

>

> 简单来说，你可以将一个模块看作是一组唯一命名、可重用的包、资源和模块描述文件（`module-info.java`）。任意一个 jar 文件，只要加上一个模块描述文件（`module-info.java`），就可以升级为一个模块


![img](https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/module-structure.png)


> [!note]

>

> 在引入了模块系统之后，JDK 被重新组织成 94 个模块。Java 应用可以通过新增的 **[jlink](http://openjdk.java.net/jeps/282) 工具** (Jlink 是随 Java 9 一起发布的新命令行工具。它允许开发人员为基于模块的 Java 应用程序创建自己的轻量级、定制的 JRE)，创建出只包含所依赖的 JDK 模块的自定义运行时镜像。这样可以极大的减少 Java 运行时环境的大小。


我们可以通过 `exports` 关键词精准控制哪些类可以对外开放使用，哪些类只能内部使用。


```java

module my.module {

    //exports 公开指定包的所有公共成员

    exports com.my.package.name;

}


module my.module {

     //exports…to 限制访问的成员范围

    export com.my.package.name to com.specific.package;

}

```


文章


- [《Project Jigsaw: Module System Quick-Start Guide》](https://openjdk.java.net/projects/jigsaw/quick-start)

- [《Java 9 Modules: part 1》](https://stacktraceguru.com/java9/module-introduction)

- [Java 9 揭秘（2. 模块化系统）](http://www.cnblogs.com/IcanFixIt/p/6947763.html)


##### G1 成为默认垃圾回收器


> 在 Java 8 的时候，默认垃圾回收器是 Parallel Scavenge（新生代）+Parallel Old（老年代）。到了 Java 9, CMS 垃圾回收器被废弃了，**G1（Garbage-First Garbage Collector）** 成为了默认垃圾回收器。

>

> G1 还是在 Java 7 中被引入的，经过两个版本优异的表现成为成为默认垃圾回收器


##### 快速创建不可变集合


> 增加了`List.of()`、`Set.of()`、`Map.of()` 和 `Map.ofEntries()`等工厂方法来创建不可变集合（有点参考 Guava 的味道）


```java

List.of("Java", "C++");

Set.of("Java", "C++");

Map.of("Java", 1, "C++", 2);

```


> [!Warning]

>

> 使用 `of()` 创建的集合为不可变集合，不能进行添加、删除、替换、 排序等操作，不然会报 `java.lang.UnsupportedOperationException` 异常


##### String 存储结构优化


> Java 8 及之前的版本，`String` 一直是用 `char[]` 存储。在 Java 9 之后，`String` 的实现改用 `byte[]` 数组存储字符串，节省了空间。


```java

public final class String implements java.io.Serializable,Comparable<String>, CharSequence {

    // @Stable 注解表示变量最多被修改一次，称为“稳定的”。

    @Stable

    private final byte[] value;

}

```


##### 接口私有方法


> Java 9 允许在接口中使用私有方法。这样的话，接口的使用就更加灵活了，有点像是一个简化版的抽象类。


```java

public interface MyInterface {

    private void methodPrivate(){

    }

}

```


##### try-with-resources 增强


> 在 Java 9 之前，我们只能在 `try-with-resources` 块中声明变量

>

```java

> try (Scanner scanner = new Scanner(new File("testRead.txt"));

>     PrintWriter writer = new PrintWriter(new File("testWrite.txt"))) {

>     // omitted

> }

```

>

> 在 Java 9 之后，在 `try-with-resources` 语句中可以使用 `effectively-final` 变量

>

```java

> final Scanner scanner = new Scanner(new File("testRead.txt"));

> PrintWriter writer = new PrintWriter(new File("testWrite.txt"))

> try (scanner;writer) {

>     // omitted

> }

```

>

> **什么是 effectively-final 变量？** 

>

> 简单来说就是没有被 `final` 修饰但是值在初始化后从未更改的变量

>

> 正如上面的代码所演示的那样，即使 writer 变量没有被显示声明为 final，但它在第一次被赋值后就不会改变了，因此，它就是 effectively-final 变量


##### Stream & Optional 增强


> `Stream` 中增加了新的方法 `ofNullable()`、`dropWhile()`、`takeWhile()` 以及 `iterate()` 方法的重载方法。


> Java 9 中的 `ofNullable()` 方 法允许我们创建一个单元素的 `Stream`，可以包含一个非空元素，也可以创建一个空 `Stream`。 而在 Java 8 中则不可以创建空的 `Stream` 。


```java

Stream<String> stringStream = Stream.ofNullable("Java");

System.out.println(stringStream.count());// 1

Stream<String> nullStream = Stream.ofNullable(null);

System.out.println(nullStream.count());//0

```


> `takeWhile()` 方法可以从 `Stream` 中依次获取满足条件的元素，直到不满足条件为止结束获取


```java

List<Integer> integerList = List.of(11, 33, 66, 8, 9, 13);

integerList.stream().takeWhile(x -> x < 50).forEach(System.out::println);// 11 33

```


> `dropWhile()` 方法的效果和 `takeWhile()` 相反


```java

List<Integer> integerList2 = List.of(11, 33, 66, 8, 9, 13);

integerList2.stream().dropWhile(x -> x < 50).forEach(System.out::println);// 66 8 9 13

```


> `iterate()` 方法的新重载方法提供了一个 `Predicate` 参数 (判断条件)来决定什么时候结束迭代


```java

public static<T> Stream<T> iterate(final T seed, final UnaryOperator<T> f) {

}

// 新增加的重载方法

public static<T> Stream<T> iterate(T seed, Predicate<? super T> hasNext, UnaryOperator<T> next) {

}

```


```java

// 使用原始 iterate() 方法输出数字 1~10

Stream.iterate(1, i -> i + 1).limit(10).forEach(System.out::println);

// 使用新的 iterate() 重载方法输出数字 1~10

Stream.iterate(1, i -> i <= 10, i -> i + 1).forEach(System.out::println);

```


> `Optional` 类中新增了 `ifPresentOrElse()`、`or()` 和 `stream()` 等方法


> `ifPresentOrElse()` 方法接受两个参数 `Consumer` 和 `Runnable` ，如果 `Optional` 不为空调用 `Consumer` 参数，为空则调用 `Runnable` 参数


```java

public void ifPresentOrElse(Consumer<? super T> action, Runnable emptyAction)


Optional<Object> objectOptional = Optional.empty();

objectOptional.ifPresentOrElse(System.out::println, () -> System.out.println("Empty!!!"));// Empty!!!

```


> `or()` 方法接受一个 `Supplier` 参数 ，如果 `Optional` 为空则返回 `Supplier` 参数指定的 `Optional` 值


```java

public Optional<T> or(Supplier<? extends Optional<? extends T>> supplier)


Optional<Object> objectOptional = Optional.empty();

objectOptional.or(() -> Optional.of("java")).ifPresent(System.out::println);//java

```


##### 进程 API


> Java 9 增加了 `java.lang.ProcessHandle` 接口来实现对原生进程进行管理，尤其适合于管理长时间运行的进程。


```java

// 获取当前正在运行的 JVM 的进程

ProcessHandle currentProcess = ProcessHandle.current();

// 输出进程的 id

System.out.println(currentProcess.pid());

// 输出进程的信息

System.out.println(currentProcess.info());

```


##### [响应式流](https://www.cnblogs.com/IcanFixIt/p/7245377.html)


>Reactive Streams 

>

>在 Java 9 中的 `java.util.concurrent.Flow` 类中新增了反应式流规范的核心接口 。

>

>`Flow` 中包含了 `Flow.Publisher`、`Flow.Subscriber`、`Flow.Subscription` 和 `Flow.Processor` 等 4 个核心接口。Java 9 还提供了`SubmissionPublisher` 作为`Flow.Publisher` 的一个实现。


##### 变量句柄


> 变量句柄是一个变量或一组变量的引用，包括静态域，非静态域，数组元素和堆外数据结构中的组成部分等。

>

> 变量句柄的含义类似于已有的方法句柄 `MethodHandle` ，由 Java 类 `java.lang.invoke.VarHandle` 来表示，可以使用类 `java.lang.invoke.MethodHandles.Lookup` 中的静态工厂方法来创建 `VarHandle` 对象。

>

> `VarHandle` 的出现替代了 `java.util.concurrent.atomic` 和 `sun.misc.Unsafe` 的部分操作。并且提供了一系列标准的内存屏障操作，用于更加细粒度的控制内存排序。在安全性、可用性、性能上都要优于现有的 API。


##### JDK 9 其他


- **平台日志 API 改进**：Java 9 允许为 JDK 和应用配置同样的日志实现。新增了 `System.LoggerFinder` 用来管理 JDK 使 用的日志记录器实现。JVM 在运行时只有一个系统范围的 `LoggerFinder` 实例。我们可以通过添加自己的 `System.LoggerFinder` 实现来让 JDK 和应用使用 SLF4J 等其他日志记录框架。


- **`CompletableFuture`类增强**：新增了几个新的方法（`completeAsync` ，`orTimeout` 等）。


- **Nashorn 引擎的增强**：Nashorn 是从 Java8 开始引入的 JavaScript 引擎，Java9 对 Nashorn 做了些增强，实现了一些 ES6 的新特性（Java 11 中已经被弃用）。


- **I/O 流的新特性**：增加了新的方法来读取和复制 `InputStream` 中包含的数据。


- **改进应用的安全性能**：Java 9 新增了 4 个 SHA- 3 哈希算法，SHA3-224、SHA3-256、SHA3-384 和 SHA3-512。


- **改进方法句柄（Method Handle）**：方法句柄从 Java7 开始引入，Java9 在类`java.lang.invoke.MethodHandles` 中新增了更多的静态方法来创建不同类型的方法句柄。


#### [10](https://openjdk.org/projects/jdk/10/)


```sql

2018年3月21日，JDK10发布。

```


##### [局部变量类型推断(var)](https://zhuanlan.zhihu.com/p/34911982)


>由于太多 Java 开发者希望 Java 中引入局部变量推断，于是 Java 10 的时候它来了，也算是众望所归了！

>

>var 并不会改变 Java 是一门静态类型语言的事实，编译器负责推断出类型。

>

>Java 10 提供了 `var` 关键字声明局部变量：


```java

var id = 0;

var codefx = new URL("https://mp.weixin.qq.com/");

var list = new ArrayList<>();

var list = List.of(1, 2, 3);

var map = new HashMap<String, String>();

var p = Paths.of("src/test/java/Java9FeaturesTest.java");

var numbers = List.of("a", "b", "c");

for (var n : list)

    System.out.print(n+ " ");

```


> var 关键字只能用于带有构造器的局部变量和 for 循环中


```java

var count=null; //❌编译不通过，不能声明为 null

var r = () -> Math.random();//❌编译不通过,不能声明为 Lambda表达式

var array = {1,2,3};//❌编译不通过,不能声明数组

var arr = new int[]{1, 2, 3};//√

```


##### 垃圾回收器接口


> 在早期的 JDK 结构中，组成垃圾收集器 (GC) 实现的组件分散在代码库的各个部分。 Java 10 通过引入一套纯净的垃圾收集器接口来将不同垃圾收集器的源代码分隔开。


##### G1 并行 Full GC


> [ Java9 开始G1 就了默认的垃圾回收器](#G1 成为默认垃圾回收器)，G1 是以一种低延时的垃圾回收器来设计的，旨在避免进行 Full GC,但是 Java9 的 G1 的 FullGC 依然是使用单线程去完成标记清除算法,这可能会导致垃圾回收期在无法回收内存的时候触发 Full GC。

>

>为了最大限度地减少 Full GC 造成的应用停顿的影响，从 Java10 开始，G1 的 FullGC 改为并行的标记清除算法，同时会使用与年轻代回收和混合回收相同的并行工作线程数量，从而减少了 Full GC 的发生，以带来更好的性能提升、更大的吞吐量。


##### 集合增强


> `List`，`Set`，`Map` 提供了静态方法`copyOf()`返回入参集合的一个不可变拷贝。


```java

static <E> List<E> copyOf(Collection<? extends E> coll) {

    return ImmutableCollections.listCopy(coll);

}

```


> 并且，`java.util.stream.Collectors` 中新增了静态方法，用于将流中的元素收集为不可变的集合。


```java

var list = new ArrayList<>();

list.stream().collect(Collectors.toUnmodifiableList());

list.stream().collect(Collectors.toUnmodifiableSet());

```


> [!Warning]

>

> 使用 `copyOf()` 创建的集合为不可变集合，不能进行添加、删除、替换、 排序等操作，不然会报 `java.lang.UnsupportedOperationException` 异常。 IDEA 也会有相应的提示。


##### Optional 增强


> `Optional` 新增了`orElseThrow()`方法来在没有值时抛出指定的异常


```java

Optional.ofNullable(cache.getIfPresent(key))

        .orElseThrow(() -> new PrestoException(NOT_FOUND, "Missing entry found for key: " + key));

```


##### 应用程序类数据共享(扩展 CDS 功能)


>在 Java 5 中就已经引入了类数据共享机制 (Class Data Sharing，简称 CDS)，允许将一组类预处理为共享归档文件，以便在运行时能够进行内存映射以减少 Java 程序的启动时间，当多个 Java 虚拟机（JVM）共享相同的归档文件时，还可以减少动态内存的占用量，同时减少多个虚拟机在同一个物理或虚拟的机器上运行时的资源占用。

>

>CDS 在当时还是 Oracle JDK 的商业特性。

>

>Java 10 在现有的 CDS 功能基础上再次拓展，以允许应用类放置在共享存档中。CDS 特性在原来的 bootstrap 类基础之上，扩展加入了应用类的 CDS 为 (Application Class-Data Sharing，AppCDS) 支持，大大加大了 CDS 的适用范围。其原理为：在启动时记录加载类的过程，写入到文本文件中，再次启动时直接读取此启动文本并加载。设想如果应用环境没有大的变化，启动速度就会得到提升。


[实验性的基于Java的JIT编译器](https://www.infoq.cn/article/java-10-jit-compiler-graal)


>Graal 是一个基于 Java 语言编写的 JIT 编译器，是 JDK 9 中引入的实验性 Ahead-of-Time (AOT) 编译器的基础。

>

>Oracle 的 HotSpot VM 便附带两个用 C++ 实现的 JIT compiler：C1 及 C2。

>

>在 Java 10 (Linux/x64, macOS/x64) 中，默认情况下 HotSpot 仍使用 C2，但通过向 java 命令添加 `-XX:+UnlockExperimentalVMOptions -XX:+UseJVMCICompiler` 参数便可将 C2 替换成 Graal。


##### JDK 10 其他


- **线程-局部管控**：Java 10 中线程管控引入 JVM 安全点的概念，将允许在不运行全局 JVM 安全点的情况下实现线程回调，由线程本身或者 JVM 线程来执行，同时保持线程处于阻塞状态，这种方式使得停止单个线程变成可能，而不是只能启用或停止所有线程

- **备用存储装置上的堆分配**：Java 10 中将使得 JVM 能够使用适用于不同类型的存储机制的堆，在可选内存设备上进行堆内存分配


#### [11](https://openjdk.org/projects/jdk/11/)※


```sql

-- 2018年9月25日，JDK11发布。（长期维护版本 - LTS）

```


##### HTTP Client 标准化


>Java 11 对 Java 9 中引入并在 Java 10 中进行了更新的 Http Client API 进行了标准化，在前两个版本中进行孵化的同时，Http Client 几乎被完全重写，并且现在完全支持异步非阻塞。

>

>并且，Java 11 中，Http Client 的包名由 `jdk.incubator.http` 改为`java.net.http`，该 API 通过 `CompleteableFuture` 提供非阻塞请求和响应语义。使用起来也很简单，如下：


```java

var request = HttpRequest.newBuilder()

    .uri(URI.create("https://javastack.cn"))

    .GET()

    .build();

var client = HttpClient.newHttpClient();


// 同步

HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

System.out.println(response.body());


// 异步

client.sendAsync(request, HttpResponse.BodyHandlers.ofString())

    .thenApply(HttpResponse::body)

    .thenAccept(System.out::println);

```


##### String 增强


> Java 11 增加了一系列的字符串处理方法


```java

//判断字符串是否为空

" ".isBlank();//true

//去除字符串首尾空格

" Java ".strip();// "Java"

//去除字符串首部空格

" Java ".stripLeading();   // "Java "

//去除字符串尾部空格

" Java ".stripTrailing();  // " Java"

//重复字符串多少次

"Java".repeat(3);             // "JavaJavaJava"

//返回由行终止符分隔的字符串集合。

"A\nB\nC".lines().count();    // 3

"A\nB\nC".lines().collect(Collectors.toList());

```


##### Optional 增强


> 新增了`isEmpty()`方法来判断指定的 `Optional` 对象是否为空


```java

var op = Optional.empty();

System.out.println(op.isEmpty());//判断指定的 Optional 对象是否为空

```


##### [ZGC（预览）](https://tech.meituan.com/2020/08/06/new-zgc-practice-in-meituan.html)


> **ZGC 即 Z Garbage Collector**，是一个可伸缩的、低延迟的垃圾收集器。

>

> ZGC 主要为了满足如下目标进行设计：

>

> - GC 停顿时间不超过 10ms

> - 即能处理几百 MB 的小堆，也能处理几个 TB 的大堆

> - 应用吞吐能力不会下降超过 15%（与 G1 回收算法相比）

> - 方便在此基础上引入新的 GC 特性和利用 colored 针以及 Load barriers 优化奠定基础

> - 当前只支持 Linux/x64 位平台

>

> > [!Tip]

> >

> > ZGC 目前 **处在实验阶段**，只支持 Linux/x64 平台！

> >

> > 与 CMS 中的 ParNew 和 G1 类似，ZGC 也采用标记-复制算法，不过 ZGC 对该算法做了重大改进！

> >

> > 在 ZGC 中出现 Stop The World 的情况会更少！


##### Lambda 参数的局部变量语法


> 从 Java 10 开始，便引入了局部变量类型推断这一关键特性。类型推断允许使用关键字 var 作为局部变量的类型而不是实际类型，编译器根据分配给变量的值推断出类型。

>

> Java11 开始允许开发者在 Lambda 表达式中使用 var 进行参数声明。


```java

// 下面两者是等价的

Consumer<String> consumer = (var i) -> System.out.println(i);

Consumer<String> consumer = (String i) -> System.out.println(i);

```


##### 启动单文件源代码程序


>这意味着我们可以运行单一文件的 Java 源代码。此功能允许使用 Java 解释器直接执行 Java 源代码。源代码在内存中编译，然后由解释器执行，不需要在磁盘上生成 `.class` 文件了。唯一的约束在于所有相关的类必须定义在同一个 Java 文件中。

>

>对于 Java 初学者并希望尝试简单程序的人特别有用，并且能和 jshell 一起使用。一定能程度上增强了使用 Java 来写脚本程序的能力。


##### JDK 11 其他


- **新的垃圾回收器 Epsilon**：一个完全消极的 GC 实现，分配有限的内存资源，最大限度的降低内存占用和内存吞吐延迟时间


- **低开销的 Heap Profiling**：Java 11 中提供一种低开销的 Java 堆分配采样方法，能够得到堆分配的 Java 对象信息，并且能够通过 JVMTI 访问堆信息


- **TLS1.3 协议**：Java 11 中包含了传输层安全性（TLS）1.3 规范（RFC 8446）的实现，替换了之前版本中包含的 TLS，包括 TLS 1.2，同时还改进了其他 TLS 功能，例如 OCSP 装订扩展（RFC 6066，RFC 6961），以及会话散列和扩展主密钥扩展（RFC 7627），在安全性和性能方面也做了很多提升


- **飞行记录器(Java Flight Recorder)**：飞行记录器之前是商业版 JDK 的一项分析工具，但在 Java 11 中，其代码被包含到公开代码库中，这样所有人都能使用该功能了。


#### [12](https://openjdk.org/projects/jdk/12/)


```sql

2019年3月19日，JDK12发布。

```


##### String 增强


> Java 12 增加了两个的字符串处理方法，如以下所示


> `indent()` 方法可以实现字符串缩进


```java

String text = "Java";

// 缩进 4 格

text = text.indent(4);//    Java

text = text.indent(-10);//Java

```


> `transform()` 方法可以用来转变指定字符串


```java

String result = "foo".transform(input -> input + " bar");

System.out.println(result); // foo bar

```


##### Files 增强（文件比较）


> Java 12 添加了以下方法来比较两个文件：

>

> `mismatch()` 方法用于比较两个文件，并返回第一个不匹配字符的位置，如果文件相同则返回 -1L


```java

public static long mismatch(Path path, Path path2) throws IOException

```


> 示例


```java

Path filePath1 = Files.createTempFile("file1", ".txt");

Path filePath2 = Files.createTempFile("file2", ".txt");

Path filePath3 = Files.createTempFile("file3", ".txt");

Files.writeString(filePath1, "Java 12 Article");

Files.writeString(filePath2, "Java 12 Article");

Files.writeString(filePath3, "Java 13 Article");

//代码示例（两个文件内容相同的情况）：

long mismatch = Files.mismatch(filePath1, filePath2);

assertEquals(-1, mismatch);

//代码示例（两个文件内容不同的情况）：

long mismatch2 = Files.mismatch(filePath3, filePath2);

assertEquals(-1, mismatch2);

```


##### 数字格式化工具类


> `NumberFormat` 新增了对复杂的数字进行格式化的支持


```java

NumberFormat fmt = NumberFormat.getCompactNumberInstance(Locale.US, NumberFormat.Style.SHORT);

String result = fmt.format(1000);

System.out.println(result);//1k

```


##### Shenandoah GC


>Redhat 主导开发的 Pauseless GC 实现，主要目标是 99.9% 的暂停小于 10ms，暂停与堆大小无关等

>

>和 [Java11 开源的 ZGC 相比](#ZGC(可伸缩低延迟垃圾收集器))（需要升级到 JDK11 才能使用），Shenandoah GC 有稳定的 JDK8u 版本，在 Java8 占据主要市场份额的今天有更大的可落地性


##### G1 收集器优化


> Java12 为默认的垃圾收集器 G1 带来了两项更新：

>

> - **可中止的混合收集集合**：JEP344 的实现，为了达到用户提供的停顿时间目标，JEP 344 通过把要被回收的区域集（混合收集集合）拆分为强制和可选部分，使 G1 垃圾回收器能中止垃圾回收过程。 G1 可以中止可选部分的回收以达到停顿时间目标

> - **及时返回未使用的已分配内存**：JEP346 的实现，增强 G1 GC，以便在空闲时自动将 Java 堆内存返回给操作系统


##### 增强 Switch（预览）


> 传统的 `switch` 语法存在容易漏写 `break` 的问题，而且从代码整洁性层面来看，多个 break 本质也是一种重复。

>

> Java12 增强了 `switch` 表达式，使用类似 lambda 语法条件匹配成功后的执行块，不需要多写 break。


```java

int day = getRandom(1, 8);

switch (day) {

    case 1, 2, 3 -> System.out.println(6);

    case 4 -> System.out.println(7);

    case 5, 6 -> System.out.println(8);

    case 7 -> System.out.println(9);

}

```


##### instanceof 模式匹配（预览）


> `instanceof` 主要在类型强转前探测对象的具体类型。


```java

//之前的版本中，我们需要显示地对对象进行类型转换。

Object obj = "我是字符串";

if(obj instanceof String){

    String str = (String) obj;

    System.out.println(str);

}

//新版的 instanceof 可以在判断是否属于具体的类型同时完成转换。

if(obj instanceof String str){

    System.out.println(str);

}

```


#### [13](https://openjdk.org/projects/jdk/13/)


```sql

2019年9月17日，JDK13发布。

```


##### 增强 ZGC（二次预览）


> 释放未使用内存功能

>

> 在 [Java 11 中实验性引入的 ZGC](#ZGC(可伸缩低延迟垃圾收集器)) 在实际的使用中存在未能主动将未使用的内存释放给操作系统的问题。

>

> ZGC 堆由一组称为 ZPages 的堆区域组成。在 GC 周期中清空 ZPages 区域时，它们将被释放并返回到页面缓存 **ZPageCache** 中，此缓存中的 ZPages 按最近最少使用（LRU）的顺序，并按照大小进行组织。

>

> 在 Java 13 中，ZGC 将向操作系统返回被标识为长时间未使用的页面，这样它们将可以被其他进程重用。


##### SocketAPI 重构


>Java 13 将 Socket API 的底层进行了重写， `NioSocketImpl` 是对 `PlainSocketImpl` 的直接替代，它使用 `java.util.concurrent` 包下的锁而不是同步方法。如果要使用旧实现，请使用 `-Djdk.net.usePlainSocketImpl=true`

>

>并且，在 Java 13 中是默认使用新的 Socket 实现。


```java

public final class NioSocketImpl extends SocketImpl implements PlatformSocketImpl {

}

```


##### FileSystems


> > [!Note]

> >

> > 文件系统的工厂方法。 此类定义[`getDefault`](https://nowjava.com/docs/java-api-11/java.base/java/nio/file/FileSystems.html#getDefault())方法以获取默认文件系统和工厂方法以构造其他类型的文件系统。

> >

> > 第一次调用此类定义的任何方法都会导致加载默认值[`provider`](https://nowjava.com/docs/java-api-11/java.base/java/nio/file/spi/FileSystemProvider.html) 。 

> >

> > 由URI方案“file”标识的默认提供程序创建[`FileSystem`](https://nowjava.com/docs/java-api-11/java.base/java/nio/file/FileSystem.html) ，该提供程序提供对Java虚拟机可访问的文件系统的访问。 

> >

> > 如果加载或初始化默认提供程序的过程失败，则会引发未指定的错误。


> `FileSystems` 类中添加了以下三种新方法，以便更容易地使用将文件内容视为文件系统的文件系统提供程序：

>

> - `newFileSystem(Path)`

> - `newFileSystem(Path, Map<String, ?>)`

> - `newFileSystem(Path, Map<String, ?>, ClassLoader)`


##### 动态 CDS 存档


>Java 13 中对 [Java 10 中引入的应用程序类数据共享(AppCDS)](#应用程序类数据共享(扩展 CDS 功能))进行了进一步的简化、改进和扩展，即：**允许在 Java 应用程序执行结束时动态进行类归档**，具体能够被归档的类包括所有已被加载，但不属于默认基层 CDS 的应用程序类和引用类库中的类。

>

>这提高了应用程序类数据共享（[AppCDSopen](https://openjdk.java.net/jeps/310)）的可用性。无需用户进行试运行来为每个应用程序创建类列表。


```sh

java -XX:ArchiveClassesAtExit=my_app_cds.jsa -cp my_app.jar

java -XX:SharedArchiveFile=my_app_cds.jsa -cp my_app.jar

```


##### 文本块（预览）


> 解决 Java 定义多行字符串时只能通过换行转义或者换行连接符来变通支持的问题，引入**三重双引号**来定义多行文本。

>

> 支持两个 `"""` 符号中间的任何内容都会被解释为字符串的一部分，包括换行符。


```java

//未支持文本块之前的 SQL 写法：

String query = "SELECT `EMP_ID`, `LAST_NAME` FROM `EMPLOYEE_TB`\n" +

               "WHERE `CITY` = 'INDIANAPOLIS'\n" +

               "ORDER BY `EMP_ID`, `LAST_NAME`;\n";

//支持文本块之后的 SQL 写法：

String query = """

               SELECT `EMP_ID`, `LAST_NAME` FROM `EMPLOYEE_TB`

               WHERE `CITY` = 'INDIANAPOLIS'

               ORDER BY `EMP_ID`, `LAST_NAME`;

               """;

```


> 另外，`String` 类新增加了 3 个新的方法来操作文本块：

>

> - `formatted(Object... args)`：它类似于 `String` 的`format()`方法。添加它是为了支持文本块的格式设置。

> - `stripIndent()`：用于去除文本块中每一行开头和结尾的空格。

> - `translateEscapes()`：转义序列如 *“\\t”* 转换为 *“\t”*

>

> 由于文本块是一项预览功能，可以在未来版本中删除，因此这些新方法被标记为弃用。


```java

@Deprecated(forRemoval=true, since="13")

public String stripIndent() {

}

@Deprecated(forRemoval=true, since="13")

public String formatted(Object... args) {


}

@Deprecated(forRemoval=true, since="13")

public String translateEscapes() {

}

```


##### 增强 Switch（二次预览）


> 引入 yield 关键字到 Switch 中

>

> `yield`和 `return` 的区别在于：`return` 会直接跳出当前循环或者方法，而 `yield` 只会跳出当前 `Switch` 块，同时在使用 `yield` 时，需要有 `default` 条件


```java

 private static String descLanguage(String name) {

        return switch (name) {

            case "Java": yield "object-oriented, platform independent and secured";

            case "Ruby": yield "a programmer's best friend";

            default: yield name +" is a good language";

        };

 }

```


#### [14](https://openjdk.org/projects/jdk/14/)


```sql

2020年3月17日，JDK14发布。

```


##### 空指针异常精准提示


> 通过 JVM 参数中添加`-XX:+ShowCodeDetailsInExceptionMessages`，可以在空指针异常中获取更为详细的调用信息，更快的定位和解决问题。


```java

// 假设这段代码会发生空指针

a.b.c.i = 99; 


//jdk14之前

Exception in thread "main" java.lang.NullPointerException

    at NullPointerExample.main(NullPointerExample.java:5)


//jdk14之后

// 增加参数后提示的异常中很明确的告知了哪里为空导致

Exception in thread "main" java.lang.NullPointerException:

        Cannot read field 'c' because 'a.b' is null.

    at Prog.main(Prog.java:5)

```


##### switch增强（正式）


>[Java12 为 switch 表达式引入了类似 lambda 语法条件匹配成功后的执行块，不需要多写 break](#增强 Switch（预览）) 

>

>[Java13 提供了 `yield` 来在 block 中返回值](#增强 Switch（二次预览）)


##### record 关键字（预览）


>`record` 关键字可以简化 **数据类**（一个 Java 类一旦实例化就不能再修改）的定义方式，使用 `record` 代替 `class` 定义的类，只需要声明属性，就可以在获得属性的访问方法，以及 `toString()`，`hashCode()`, `equals()`方法。

>

>类似于使用 `class` 定义类，并打上了`@Getter,@ToString,@EqualsAndHashCode`注解。


```java

/**

 * 这个类具有两个特征

 * 1. 所有成员属性都是final

 * 2. 全部方法由构造方法，和两个成员属性访问器组成（共三个）

 * 那么这种类就很适合使用record来声明

 */

final class Rectangle implements Shape {

    final double length;

    final double width;


    public Rectangle(double length, double width) {

        this.length = length;

        this.width = width;

    }


    double length() { return length; }

    double width() { return width; }

}

/**

 * 1. 使用record声明的类会自动拥有上面类中的三个方法

 * 2. 在这基础上还附赠了equals()，hashCode()方法以及toString()方法

 * 3. toString方法中包括所有成员属性的字符串表示形式及其名称

 */

record Rectangle(float length, float width) { }

```


##### 文本块（二次预览）


> Java14 中，文本块依然是预览特性，不过，其引入了两个新的转义字符：

>

> - `\` : 表示行尾，不引入换行符

> - `\s`：表示单个空格


```java

String str2 = """

        凡心所向，素履所往， \

        生如逆旅，一苇以航。""";

System.out.println(str2);// 凡心所向，素履所往， 生如逆旅，一苇以航。

String text = """

        java

        c++\sphp

        """;

System.out.println(text);

//输出：

java

c++ php

```


##### instanceof 增强（二次预览）


> [instanceof 模式匹配（预览）](#instanceof 模式匹配（预览）)


##### JDK 14 其他


- 从 Java11 引入的 ZGC 作为继 G1 过后的下一代 GC 算法，从支持 Linux 平台到 Java14 开始支持 MacOS 和 Windows（个人感觉是终于可以在日常开发工具中先体验下 ZGC 的效果了，虽然其实 G1 也够用）


- 移除了 CMS(Concurrent Mark Sweep) 垃圾收集器（功成而退）


- 新增了 jpackage 工具，标配将应用打成 jar 包外，还支持不同平台的特性包，比如 linux 下的`deb`和`rpm`，window 平台下的`msi`和`exe`


#### [15](https://openjdk.org/projects/jdk/15/)


```sql

2020年9月15日，JDK15发布。

```


##### CharSequence


> `CharSequence` 接口添加了一个默认方法 `isEmpty()` 来判断字符序列为空，如果是则返回 true。


```java

public interface CharSequence {

  default boolean isEmpty() {

      return this.length() == 0;

  }

}

```


##### TreeMap


> `TreeMap` 新引入了下面这些方法：

>

> - `putIfAbsent(key, value)`：如果已有key，不put且返回key对应的值。否则put以后，返回value

> - `computeIfAbsent()`

> - `computeIfPresent()`

> - `compute()`

> - `merge()`


##### ZGC（正式）


>[Java11 的时候 ，ZGC 还在试验阶段](#ZGC（预览）)。

>

>[Java13 的时候，新增 释放未使用内存功能](#增强 ZGC（二次预览）)

>

>经过多个版本的迭代，不断的完善和修复问题，ZGC 在 Java 15 已经可以正式使用了！

>

>不过，默认的垃圾回收器依然是 G1。你可以通过下面的参数启动 ZGC：

>

>java -XX:+UseZGC className


##### EdDSA(数字签名算法)


>新加入了一个安全性和性能都更强的基于 Edwards-Curve Digital Signature Algorithm （EdDSA）实现的数字签名算法。

>

>虽然其性能优于现有的 ECDSA 实现，不过，它并不会完全取代 JDK 中现有的椭圆曲线数字签名算法( ECDSA)。

```java

KeyPairGenerator kpg = KeyPairGenerator.getInstance("Ed25519");

KeyPair kp = kpg.generateKeyPair();


byte[] msg = "test_string".getBytes(StandardCharsets.UTF_8);


Signature sig = Signature.getInstance("Ed25519");

sig.initSign(kp.getPrivate());

sig.update(msg);

byte[] s = sig.sign();


String encodedString = Base64.getEncoder().encodeToString(s);

System.out.println(encodedString);

```


##### 文本块（正式）


> [Java13，文本块（预览）](#文本块（预览）)

>

> [Java14，文本块（二次预览）](#文本块（二次预览）)


##### 隐藏类(Hidden Classes)


> 隐藏类是为框架（frameworks）所设计的，隐藏类不能直接被其他类的字节码使用，只能在运行时生成类并通过反射间接使用它们。


##### 密封类（预览）


>密封类（Sealed Classes）

>

>没有密封类之前，在 Java 中如果想让一个类不能被继承和修改，我们可以使用`final` 关键字对类进行修饰。不过，这种方式不太灵活，直接把一个类的继承和修改渠道给堵死了。

>

>密封类可以对继承或者实现它们的类进行限制，这样这个类就只能被指定的类继承。


```java

// 抽象类 Person 只允许 Employee 和 Manager 继承。

public abstract sealed class Person

    permits Employee, Manager {


    //...

}

```


> 另外，任何扩展密封类的类本身都必须声明为 `sealed`、`non-sealed` 或 `final`。


```java

public final class Employee extends Person {

}


public non-sealed class Manager extends Person {

}

```


> [!Warning]

>

> 如果允许扩展的子类和封闭类在同一个源代码文件里，封闭类可以不使用 permits 语句，Java 编译器将检索源文件，在编译期为封闭类添加上许可的子类！


##### instanceof 模式匹配（三次预览）


>Java 15 并没有对此特性进行调整，继续预览特性，主要用于接受更多的使用反馈。

>

>在未来的 Java 版本中，Java 的目标是继续完善 `instanceof` 模式匹配新特性。


##### JDK 15 其他


- **Nashorn JavaScript 引擎彻底移除**：Nashorn 从 Java8 开始引入的 JavaScript 引擎，Java9 对 Nashorn 做了些增强，实现了一些 ES6 的新特性。在 Java 11 中就已经被弃用，到了 Java 15 就彻底被删除了。


- **DatagramSocket API 重构**。


- **禁用和废弃偏向锁（Biased Locking）**：偏向锁的引入增加了 JVM 的复杂性大于其带来的性能提升。不过，你仍然可以使用 `-XX:+UseBiasedLocking` 启用偏向锁定，但它会提示这是一个已弃用的 API。


#### [16](https://openjdk.org/projects/jdk/16/)


```sql

2021年3月16日，JDK16发布。

```


##### 向量 API（第一次孵化）


>向量（Vector） API 最初由 [JEP 338](https://openjdk.java.net/jeps/338) 提出，并作为[孵化 API](http://openjdk.java.net/jeps/11)集成到 Java 16 中。

>

>第二轮孵化由 [JEP 414](https://openjdk.java.net/jeps/414) 提出并集成到 Java 17 中。

>

>第三轮孵化由 [JEP 417](https://openjdk.java.net/jeps/417) 提出并集成到 Java 18 中。

>

>第四轮由 [JEP 426](https://openjdk.java.net/jeps/426) 提出并集成到了 Java 19 中。


> 该孵化器 API 提供了一个 API 的初始迭代以表达一些向量计算，这些计算在运行时可靠地编译为支持的 CPU 架构上的最佳向量硬件指令，从而获得优于同等标量计算的性能，充分利用单指令多数据（SIMD）技术（大多数现代 CPU 上都可以使用的一种指令）。尽管 HotSpot 支持自动向量化，但是可转换的标量操作集有限且易受代码更改的影响。该 API 将使开发人员能够轻松地用 Java 编写可移植的高性能向量算法。


##### 启用 C++ 14 语言特性


>Java 16 允许在 JDK 的 C++ 源代码中使用 C++14 语言特性，并提供在 HotSpot 代码中可以使用哪些特性的具体指导。

>

>在 Java 15 中，JDK 中 C++ 代码使用的语言特性仅限于 C++98/03 语言标准。它要求更新各种平台编译器的最低可接受版本。


##### ZGC 并发线程堆栈处理


> Java16 将 ZGC 线程栈处理从安全点转移到一个并发阶段，甚至在大堆上也允许在毫秒内暂停 GC 安全点。消除 ZGC 垃圾收集器中最后一个延迟源可以极大地提高应用程序的性能和效率。


##### 弹性元空间


>自从引入了 Metaspace 以来，根据反馈，Metaspace 经常占用过多的堆外内存，从而导致内存浪费。弹性元空间这个特性可将未使用的 HotSpot 类元数据（即元空间，metaspace）内存更快速地返回到操作系统，从而减少元空间的占用空间。并且，这个提案还简化了元空间的代码以降低维护成本。


##### [对基于值的类发出警告](https://xie.infoq.cn/article/8304c894c4e38318d38ceb116)


>早在 Java9 版本时，Java 的设计者们就对 `@Deprecated` 注解进行了一次升级，增加了 `since` 和 `forRemoval` 等 2 个新元素：

>

>- since 元素用于指定标记了 `@Deprecated` 注解的 API 被弃用时的版本，

>- `forRemoval` 进一步明确了 API 标记 @Deprecated 注解时的语义，如果`forRemoval=true`时，则表示该 API 在未来版本中肯定会被删除，开发人员应该使用新的 API 进行替代，不再容易产生歧义（Java9 之前，标记 @Deprecated 注解的 API，语义上存在多种可能性，比如：存在使用风险、可能在未来存在兼容性错误、可能在未来版本中被删除，以及应该使用更好的替代方案等）。


>例子：

>

>仔细观察原始类型的包装类（比如：`java.lang.Integer`、`java.lang.Double`），不难发现，其构造函数上都已经标记有`@Deprecated(since="9", forRemoval = true)`注解，这就意味着其构造函数在将来会被删除，不应该在程序中继续使用诸如`new Integer();`这样的编码方式（建议使用`Integer a = 10;`或者`Integer.valueOf()`函数），如果继续使用，编译期将会产生'Integer(int)' is deprecated and marked for removal 告警。并且，值得注意的是，这些包装类型已经被指定为同 `java.util.Optional` 和 `java.time.LocalDateTime` 一样的值类型。


>其次，如果继续在 `synchronized` 同步块中使用值类型，将会在编译期和运行期产生警告，甚至是异常。在此大家需要注意，就算编译期和运行期没有产生警告和异常，也不建议在 `synchronized` 同步块中使用值类型，举个自增的例子：


```java

public void inc(Integer count) {

    for (int i = 0; i < 10; i++) {

        new Thread(() -> {

            synchronized (count) {

                count++;

            }

        }).start();

    }

}

```


>错误原因：在并发环境下，`Integer` 对象根本无法通过 `synchronized` 来保证线程安全，这是因为每次的`count++`操作，所产生的 `hashcode` 均不同，简而言之，每次加锁都锁在了不同的对象上。

>

>解决：因此，如果希望在实际的开发过程中保证其原子性，应该使用 `AtomicInteger`


##### 打包工具（正式）


> [在 Java 14 中，JEP 343 引入了打包工具](#JDK 14 其他)，命令是 `jpackage`。在 Java 15 中，继续孵化，现在在 Java 16 中，终于成为了正式功能。

>

> 关于这个打包工具的实际使用，可以看这个视频 [Playing with Java 16 jpackage](https://www.youtube.com/watch?v=KahYIVzRIkQ)


>- 这个打包工具允许打包自包含的 Java 应用程序。

>- 它支持原生打包格式，为最终用户提供自然的安装体验，这些格式包括 Windows 上的 msi 和 exe、macOS 上的 pkg 和 dmg，还有 Linux 上的 deb 和 rpm。

>- 它还允许在打包时指定启动时参数，并且可以从命令行直接调用，也可以通过 ToolProvider API 以编程方式调用。

>- 注意 jpackage 模块名称从 jdk.incubator.jpackage 更改为 jdk.jpackage。这将改善最终用户在安装应用程序时的体验，并简化了“应用商店”模型的部署。


##### 外部内存访问 API（第三次孵化）


> 引入外部内存访问 API 以允许 Java 程序安全有效地访问 Java 堆之外的外部内存。

>

> Java 14的时候，第一次孵化外部内存访问 API。

>

> Java 15 中进行了第二次孵化。


>引入外部内存访问 API 的目的如下：

>

>- 通用：单个 API 应该能够对各种外部内存（如本机内存、持久内存、堆内存等）进行操作。

>- 安全：无论操作何种内存，API 都不应该破坏 JVM 的安全性。

>- 控制：可以自由的选择如何释放内存（显式、隐式等）。

>- 可用：如果需要访问外部内存，API 应该是 `sun.misc.Unsafe`


##### instanceof 模式匹配（正式）


> [JDK 13，instanceof 模式匹配（预览）](#instanceof 模式匹配（预览）)

>

> [JDK 14，instanceof 增强（二次预览）](#instanceof 增强（二次预览）)

>

> [JDK 15，instanceof 模式匹配（三次预览）](#instanceof 模式匹配（三次预览）)

>

> JDK16，正式，模式变量不再隐式为 final，你可以对 `instanceof` 中的变量值进行修改。


##### 记录类型（正式）


> [JDK 14，record 关键字（预览）](#record 关键字（预览）)

>

> JDK 15，第二次预览，支持在局部方法和接口中使用 `record`。

>

> JDK 16，正式，非静态内部类可以定义非常量的静态成员。


```java

public class Outer {

  class Inner {

    static int age;

  }

}

```


> 在 JDK 16 之前，如果写上面这种代码，IDE 会提示你静态字段 age 不能在非静态的内部类中定义，除非它用一个常量表达式初始化。


##### 默认强封装 JDK 内部元素


>此特性会默认强封装 JDK 的所有内部元素，但关键内部 API（例如 `sun.misc.Unsafe`）除外。

>

>默认情况下，使用早期版本成功编译的访问 JDK 内部 API 的代码可能不再起作用。

>

>鼓励开发人员从使用内部元素迁移到使用标准 API 的方法上，以便他们及其用户都可以无缝升级到将来的 Java 版本。

>

>强封装由 JDK 9 的启动器选项–illegal-access 控制，到 JDK 15 默认改为 warning，从 JDK 16 开始默认为 deny。

>

>（目前）仍然可以使用单个命令行选项放宽对所有软件包的封装，将来只有使用–add-opens 打开特定的软件包才行。


##### JDK 16 其他


- JEP 380:Unix-Domain 套接字通道：Unix-domain 套接字一直是大多数 Unix 平台的一个特性，现在在 Windows 10 和 Windows Server 2019 也提供了支持。此特性为 java.nio.channels 包的套接字通道和服务器套接字通道 API 添加了 Unix-domain（AF_UNIX）套接字支持。它扩展了继承的通道机制以支持 Unix-domain 套接字通道和服务器套接字通道。Unix-domain 套接字用于同一主机上的进程间通信（IPC）。它们在很大程度上类似于 TCP/IP，区别在于套接字是通过文件系统路径名而不是 Internet 协议（IP）地址和端口号寻址的。对于本地进程间通信，Unix-domain 套接字比 TCP/IP 环回连接更安全、更有效

- JEP 389:外部链接器 API(孵化)： 该孵化器 API 提供了静态类型、纯 Java 访问原生代码的特性，该 API 将大大简化绑定原生库的原本复杂且容易出错的过程。Java 1.1 就已通过 Java 原生接口（JNI）支持了原生方法调用，但并不好用。Java 开发人员应该能够为特定任务绑定特定的原生库。它还提供了外来函数支持，而无需任何中间的 JNI 粘合代码。

- JEP 357:从 Mercurial 迁移到 Git：在此之前，OpenJDK 源代码是使用版本管理工具 Mercurial 进行管理，现在迁移到了 Git。

- JEP 369:迁移到 GitHub：和 JEP 357 从 Mercurial 迁移到 Git 的改变一致，在把版本管理迁移到 Git 之后，选择了在 GitHub 上托管 OpenJDK 社区的 Git 仓库。不过只对 JDK 11 以及更高版本 JDK 进行了迁移。

- JEP 386:移植 Alpine Linux：Alpine Linux 是一个独立的、非商业的 Linux 发行版，它十分的小，一个容器需要不超过 8MB 的空间，最小安装到磁盘只需要大约 130MB 存储空间，并且十分的简单，同时兼顾了安全性。此提案将 JDK 移植到了 Apline Linux，由于 Apline Linux 是基于 musl lib 的轻量级 Linux 发行版，因此其他 x64 和 AArch64 架构上使用 musl lib 的 Linux 发行版也适用。

- JEP 388:Windows/AArch64 移植：这些 JEP 的重点不是移植工作本身，而是将它们集成到 JDK 主线存储库中

- JEP 386 将 JDK 移植到 Alpine Linux 和其他使用 musl 作为 x64 上主要 C 库的发行版上。此外，JEP 388 将 JDK 移植到 Windows AArch64（ARM64）


#### [17](https://openjdk.org/projects/jdk/17/)※


```sql

-- 2021年9月， JDK17发布。（长期维护版本 - LTS）

```


##### 增强的伪随机数生成器


> JDK 17 之前，我们可以借助 `Random`、`ThreadLocalRandom`和`SplittableRandom`来生成随机数。不过，这 3 个类都各有缺陷，且缺少常见的伪随机算法支持


> Java 17 为伪随机数生成器 （pseudorandom number generator，PRNG，又称为确定性随机位生成器）增加了新的接口类型和实现，使得开发者更容易在应用程序中互换使用各种 PRNG 算法

>

> > `PRNG`用来生成接近于绝对随机数序列的数字序列。一般来说，PRNG 会依赖于一个初始值，也称为种子，来生成对应的伪随机数序列。只要种子确定了，PRNG 所生成的随机数就是完全确定的，因此其生成的随机数序列并不是真正随机的

>


```java

RandomGeneratorFactory<RandomGenerator> l128X256MixRandom = RandomGeneratorFactory.of("L128X256MixRandom");

// 使用时间戳作为随机数种子

RandomGenerator randomGenerator = l128X256MixRandom.create(System.currentTimeMillis());

// 生成随机数

randomGenerator.nextInt(10);

```


##### 弃用 Applet API 以进行删除


>Applet API 用于编写在 Web 浏览器端运行的 Java 小程序，很多年前就已经被淘汰了，已经没有理由使用了。

>

>Applet API 在 Java 9 时被标记弃用（[JEP 289](https://openjdk.java.net/jeps/289)），但不是为了删除。


##### switch 的类型匹配（预览）


> 正如 `instanceof` 一样， `switch` 也紧跟着增加了类型匹配自动转换功能。


```java

// Old code

static String formatter(Object o) {

    String formatted = "unknown";

    if (o instanceof Integer i) {

        formatted = String.format("int %d", i);

    } else if (o instanceof Long l) {

        formatted = String.format("long %d", l);

    } else if (o instanceof Double d) {

        formatted = String.format("double %f", d);

    } else if (o instanceof String s) {

        formatted = String.format("String %s", s);

    }

    return formatted;

}

// New code

static String formatterPatternSwitch(Object o) {

    return switch (o) {

        case Integer i -> String.format("int %d", i);

        case Long l    -> String.format("long %d", l);

        case Double d  -> String.format("double %f", d);

        case String s  -> String.format("String %s", s);

        default        -> o.toString();

    };

}

```


> 对于 `null` 值的判断也进行了优化。


```java

// Old code

static void testFooBar(String s) {

    if (s == null) {

        System.out.println("oops!");

        return;

    }

    switch (s) {

        case "Foo", "Bar" -> System.out.println("Great");

        default           -> System.out.println("Ok");

    }

}

// New code

static void testFooBar(String s) {

    switch (s) {

        case null         -> System.out.println("Oops");

        case "Foo", "Bar" -> System.out.println("Great");

        default           -> System.out.println("Ok");

    }

}

```


##### 删除远程方法RMI调用激活机制


> 删除远程方法调用 (RMI) 激活机制，同时保留 RMI 的其余部分。RMI 激活机制已过时且不再使用


##### 密封类（正式）


>密封类由 [JEP 360](https://openjdk.java.net/jeps/360) 提出预览，[集成到了 Java 15 中](#密封类（预览）)。

>

>在 JDK 16 中， 密封类得到了改进（更加严格的引用检查和密封类的继承关系），由 [JEP 397](https://openjdk.java.net/jeps/397) 提出了再次预览。


##### 删除实验性的 AOT 和 JIT 编译器


>在 Java 9 的 [JEP 295](https://openjdk.java.net/jeps/295) ,引入了实验性的提前 (AOT) 编译器，在启动虚拟机之前将 Java 类编译为本机代码。

>

>Java 17，删除实验性的提前 (AOT) 和即时 (JIT) 编译器，因为该编译器自推出以来很少使用，维护它所需的工作量很大。保留实验性的 Java 级 JVM 编译器接口 (JVMCI)，以便开发人员可以继续使用外部构建的编译器版本进行 JIT 编译。


##### 弃用安全管理器以进行删除


>弃用安全管理器以便在将来的版本中删除。

>

>安全管理器可追溯到 Java 1.0，多年来，它一直不是保护客户端 Java 代码的主要方法，也很少用于保护服务器端代码。为了推动 Java 向前发展，Java 17 弃用安全管理器，以便与旧版 Applet API ( [JEP 398](https://openjdk.java.net/jeps/398) ) 一起移除。


##### 外部函数和内存 API（孵化）


>Java 程序可以通过该 API 与 Java 运行时之外的代码和数据进行互操作。

>

>通过高效地调用外部函数（即 JVM 之外的代码）和安全地访问外部内存（即不受 JVM 管理的内存），该 API 使 Java 程序能够调用本机库并处理本机数据，而不会像 JNI 那样危险和脆弱。


>外部函数和内存 API 在 Java 17 中进行了第一轮孵化，由 [JEP 412](https://openjdk.java.net/jeps/412) 提出。第二轮孵化由[JEP 419](https://openjdk.org/jeps/419) 提出并集成到了 Java 18 中，预览由 [JEP 424](https://openjdk.org/jeps/424) 提出并集成到了 Java 19 中。


> 在没有外部函数和内存 API 之前：


- Java 通过 [`sun.misc.Unsafe`](https://hg.openjdk.java.net/jdk/jdk/file/tip/src/jdk.unsupported/share/classes/sun/misc/Unsafe.java) 提供一些执行低级别、不安全操作的方法（如直接访问系统内存资源、自主管理内存资源等），`Unsafe` 类让 Java 语言拥有了类似 C 语言指针一样操作内存空间的能力的同时，也增加了 Java 语言的不安全性，不正确使用 `Unsafe` 类会使得程序出错的概率变大。

- Java 1.1 就已通过 Java 原生接口（JNI）支持了原生方法调用，但并不好用。JNI 实现起来过于复杂，步骤繁琐（具体的步骤可以参考这篇文章：[Guide to JNI (Java Native Interface)](https://www.baeldung.com/jni) ），不受 JVM 的语言安全机制控制，影响 Java 语言的跨平台特性。并且，JNI 的性能也不行，因为 JNI 方法调用不能从许多常见的 JIT 优化(如内联)中受益。虽然[JNA](https://github.com/java-native-access/jna)、[JNR](https://github.com/jnr/jnr-ffi)和[JavaCPP](https://github.com/bytedeco/javacpp)等框架对 JNI 进行了改进，但效果还是不太理想。


> 引入外部函数和内存 API 就是为了解决 Java 访问外部函数和外部内存存在的一些痛点。

>

> Foreign Function & Memory API (FFM API) 定义了类和接口：


- 分配外部内存：`MemorySegment`、、`MemoryAddress`和`SegmentAllocator`）；

- 操作和访问结构化的外部内存：`MemoryLayout`, `VarHandle`；

- 控制外部内存的分配和释放：`MemorySession`；

- 调用外部函数：`Linker`、`FunctionDescriptor`和`SymbolLookup`。


> 下面是 FFM API 使用示例，这段代码获取了 C 库函数的 `radixsort` 方法句柄，然后使用它对 Java 数组中的四个字符串进行排序。


```java

// 1. 在C库路径上查找外部函数

Linker linker = Linker.nativeLinker();

SymbolLookup stdlib = linker.defaultLookup();

MethodHandle radixSort = linker.downcallHandle(

                             stdlib.lookup("radixsort"), ...);

// 2. 分配堆上内存以存储四个字符串

String[] javaStrings   = { "mouse", "cat", "dog", "car" };

// 3. 分配堆外内存以存储四个指针

SegmentAllocator allocator = implicitAllocator();

MemorySegment offHeap  = allocator.allocateArray(ValueLayout.ADDRESS, javaStrings.length);

// 4. 将字符串从堆上复制到堆外

for (int i = 0; i < javaStrings.length; i++) {

    // 在堆外分配一个字符串，然后存储指向它的指针

    MemorySegment cString = allocator.allocateUtf8String(javaStrings[i]);

    offHeap.setAtIndex(ValueLayout.ADDRESS, i, cString);

}

// 5. 通过调用外部函数对堆外数据进行排序

radixSort.invoke(offHeap, javaStrings.length, MemoryAddress.NULL, '\0');

// 6. 将(重新排序的)字符串从堆外复制到堆上

for (int i = 0; i < javaStrings.length; i++) {

    MemoryAddress cStringPtr = offHeap.getAtIndex(ValueLayout.ADDRESS, i);

    javaStrings[i] = cStringPtr.getUtf8String(0);

}

assert Arrays.equals(javaStrings, new String[] {"car", "cat", "dog", "mouse"});  // true

```


##### 虚拟线程（预览）


>








##### 向量 API（第二次孵化）


>[JDK 16 向量 API（第一次孵化）](#向量 API（第一次孵化）)


#### [18](https://openjdk.org/projects/jdk/18/)


```sql

2022年03月22日，JDK18发布。

```


##### 默认字符集为 UTF-8


>JDK 终于将 UTF-8 设置为默认字符集。

>

>在 Java 17 及更早版本中，默认字符集是在 Java 虚拟机运行时才确定的，取决于不同的操作系统、区域设置等因素，因此存在潜在的风险。

>

>就比如说你在 Mac 上运行正常的一段打印文字到控制台的 Java 程序到了 Windows 上就会出现乱码，如果你不手动更改字符集的话。


##### 简易的 Web 服务器


> Java 18 之后，你可以使用 `jwebserver` 命令启动一个简易的静态 Web 服务器。

>

> > [!Tip]

> >

> > 这个服务器不支持 CGI 和 Servlet，只限于静态文件


```sh

jwebserver

Binding to loopback by default. For all interfaces use "-b 0.0.0.0" or "-b ::".

Serving /cwd and subdirectories on 127.0.0.1 port 8000

URL: http://127.0.0.1:8000/

```


##### 优化 Java API 文档中的代码片段


> 在 Java 18 之前，如果我们想要在 Javadoc 中引入代码片段可以使用 `<pre>{@code ...}</pre>` 。


```java

//<pre>{@code ...}</pre> 这种方式生成的效果比较一般。

<pre>{@code

    lines of source code

}</pre>

```


> 在 Java 18 之后，可以通过 `@snippet` 标签来做这件事情。

>

> `@snippet` 这种方式生成的效果更好且使用起来更方便一些。


```java

/**

 * The following code shows how to use {@code Optional.isPresent}:

 * {@snippet :

 * if (v.isPresent()) {

 *     System.out.println("v: " + v.get());

 * }

 * }

 */

```


##### 使用方法句柄重新实现反射核心


>Java 18 改进了 `java.lang.reflect.Method`、`Constructor` 的实现逻辑，使之性能更好，速度更快。这项改动不会改动相关 API ，这意味着开发中不需要改动反射相关代码，就可以体验到性能更好反射。


##### 向量 API（第三次孵化）


> 向量计算由对向量的一系列操作组成。向量 API 用来表达向量计算，该计算可以在运行时可靠地编译为支持的 CPU 架构上的最佳向量指令，从而实现优于等效标量计算的性能。

>

> 向量 API 的目标是为用户提供简洁易用且与平台无关的表达范围广泛的向量计算。


> 这是对数组元素的简单标量计算：


```java

void scalarComputation(float[] a, float[] b, float[] c) {

   for (int i = 0; i < a.length; i++) {

        c[i] = (a[i] * a[i] + b[i] * b[i]) * -1.0f;

   }

}

```


> 这是使用 Vector API 进行的等效向量计算：


```java

static final VectorSpecies<Float> SPECIES = FloatVector.SPECIES_PREFERRED;

void vectorComputation(float[] a, float[] b, float[] c) {

    int i = 0;

    int upperBound = SPECIES.loopBound(a.length);

    for (; i < upperBound; i += SPECIES.length()) {

        // FloatVector va, vb, vc;

        var va = FloatVector.fromArray(SPECIES, a, i);

        var vb = FloatVector.fromArray(SPECIES, b, i);

        var vc = va.mul(va)

                   .add(vb.mul(vb))

                   .neg();

        vc.intoArray(c, i);

    }

    for (; i < a.length; i++) {

        c[i] = (a[i] * a[i] + b[i] * b[i]) * -1.0f;

    }

}

```


##### 互联网地址解析 SPI


> Java 18 定义了一个全新的 SPI（service-provider interface），用于主要名称和地址的解析，以便 `java.net.InetAddress` 可以使用平台之外的第三方解析器。


##### Foreign Function & Memory API（第二次孵化）


>[JDK 17，外部函数和内存 API（孵化）](#外部函数和内存 API（孵化）)


#### [19](https://openjdk.org/projects/jdk/19/)


```sql

2022年09月20日，JDK19发布。

```


##### 外部函数和内存 API（第三次孵化）


> [JDK 17，外部函数和内存 API（孵化）](#外部函数和内存 API（孵化）)

>

> [JDK 18，Foreign Function & Memory API（第二次孵化）](#Foreign Function & Memory API（第二次孵化）)


##### 虚拟线程（预览）


##### 向量 API（第四次孵化）


> [JDK 18，向量 API（第三次孵化）](#向量 API（第三次孵化）)


##### 结构化并发（孵化）


> JDK 19 引入了结构化并发，一种多线程编程方法，目的是为了通过结构化并发 API 来简化多线程编程，并不是为了取代`java.util.concurrent`，目前处于孵化器阶段。

>

> 结构化并发将不同线程中运行的多个任务视为单个工作单元，从而简化错误处理、提高可靠性并增强可观察性。也就是说，结构化并发保留了单线程代码的可读性、可维护性和可观察性。

>

> 结构化并发的基本 API 是[`StructuredTaskScope`](https://download.java.net/java/early_access/loom/docs/api/jdk.incubator.concurrent/jdk/incubator/concurrent/StructuredTaskScope.html)。`StructuredTaskScope` 支持将任务拆分为多个并发子任务，在它们自己的线程中执行，并且子任务必须在主任务继续之前完成。

>

> `StructuredTaskScope` 的基本用法如下：


```java

try (var scope = new StructuredTaskScope<Object>()) {

    // 使用fork方法派生线程来执行子任务

    Future<Integer> future1 = scope.fork(task1);

    Future<String> future2 = scope.fork(task2);

    // 等待线程完成

    scope.join();

    // 结果的处理可能包括处理或重新抛出异常

    ... process results/exceptions ...

} // close

```


> [!Note]

>

> 结构化并发非常适合虚拟线程，虚拟线程是 JDK 实现的轻量级线程。许多虚拟线程共享同一个操作系统线程，从而允许非常多的虚拟线程。


#### [20](https://openjdk.org/projects/jdk/20/)


```sql

2023年03月21日，JDK20发布。

```


##### 作用域值（第一次孵化）


> 作用域值（Scoped Values）它可以在线程内和线程间共享不可变的数据，优于线程局部变量，尤其是在使用大量虚拟线程时。

>

> 作用域值允许在大型程序中的组件之间安全有效地共享数据，而无需求助于方法参数。


```java

final static ScopedValue<...> V = new ScopedValue<>();

// In some method

ScopedValue.where(V, <value>)

           .run(() -> { ... V.get() ... call methods ... });

// In a method called directly or indirectly from the lambda expression

... V.get() ...

```


##### 记录模式（第二次预览）


##### switch 模式匹配（第四次预览）


##### 虚拟线程（第二次预览）


##### 结构化并发(第二次孵化)


##### 向量 API（第五次孵化）


#### [21](https://openjdk.org/projects/jdk/21/)※


```sql

-- 2023年09月19日发布，（长期维护版本 - LTS）

-- JDK 21 共有 15 个新特性

```


##### 字符串模板（预览版）


>String Templates 提供了一种更简洁、更直观的方式来动态构建字符串。通过使用占位符`${}`，我们可以将变量的值直接嵌入到字符串中，而不需要手动处理。在运行时，Java 编译器会将这些占位符替换为实际的变量值。并且，表达式支持局部变量、静态/非静态字段甚至方法、计算结果等特性


> Java 在没有 String Templates 之前，我们通常使用字符串拼接或格式化方法来构建字符串：


```java

//concatenation

message = "Greetings " + name + "!";

//String.format()

message = String.format("Greetings %s!", name);  //concatenation

//MessageFormat

message = new MessageFormat("Greetings {0}!").format(name);

//StringBuilder

message = new StringBuilder().append("Greetings ").append(name).append("!").toString();

```


> 这些方法或多或少都存在一些缺点，比如难以阅读、冗长、复杂。Java 使用 String Templates 进行字符串拼接，可以直接在字符串中嵌入表达式，而无需进行额外的处理：

>

> - `STR` 是模板处理器

> - `\{name}`为表达式，运行时，这些表达式将被相应的变量值替换


```java

String message = STR."Greetings \{name}!";

```


> Java 目前支持三种模板处理器：

>

> - STR：自动执行字符串插值，即将模板中的每个嵌入式表达式替换为其值（转换为字符串）。

> - FMT：和 STR 类似，但是它还可以接受格式说明符，这些格式说明符出现在嵌入式表达式的左边，用来控制输出的样式

> - RAW：不会像 STR 和 FMT 模板处理器那样自动处理字符串模板，而是返回一个 `StringTemplate` 对象，这个对象包含了模板中的文本和表达式的信息


```java

String name = "Lokesh";

//STR

String message = STR."Greetings \{name}.";

//FMT

String message = FMT."Greetings %-12s\{name}.";

//RAW

StringTemplate st = RAW."Greetings \{name}.";

String message = STR.process(st);

```


> 我们可以使用局部变量、静态/非静态字段甚至方法作为嵌入表达式：


```java

//variable

message = STR."Greetings \{name}!";

//method

message = STR."Greetings \{getName()}!";

//field

message = STR."Greetings \{this.name}!";

```


##### 序列化集合（Sequenced Collections）


>[!NOTE]

>

>这是一种具有确定出现顺序（encounter order）的集合（无论我们遍历这样的集合多少次，元素的出现顺序始终是固定的）。序列化集合提供了处理集合的第一个和最后一个元素以及反向视图（与原始集合相反的顺序）的简单方法。


> Sequenced Collections 包括以下三个接口

>

> - SequencedCollection

>

>   > `SequencedCollection` 接口继承了 `Collection`接口， 提供了在集合两端访问、添加或删除元素以及获取集合的反向视图的方法。

>   >

>   > `List` 和 `Deque` 接口实现了`SequencedCollection` 接口。

>

> - SequencedSet

>

>   > `SequencedSet`接口直接继承了 `SequencedCollection` 接口并重写了 `reversed()` 方法。

>   >

>   > `SortedSet` 和 `LinkedHashSet` 实现了`SequencedSet`接口。

>

> - SequencedMap

>

>   > `SequencedMap` 接口继承了 `Map`接口， 提供了在集合两端访问、添加或删除键值对、获取包含 key 的 `SequencedSet`、包含 value 的 `SequencedCollection`、包含 entry（键值对） 的 `SequencedSet`以及获取集合的反向视图的方法。

>   >

>   > `SortedMap` 和 `LinkedHashMap` 实现了 `SequencedMap` 接口。


##### 分代 ZGC


> JDK21 中对 ZGC 进行了功能扩展，增加了分代 GC 功能。不过，默认是关闭的，需要通过配置打开：


```sh

// 启用分代ZGC

java -XX:+UseZGC -XX:+ZGenerational ...

```


> 分代 ZGC 可以显著减少垃圾回收过程中的停顿时间，并提高应用程序的响应性能。这对于大型 Java 应用程序和高并发场景下的性能优化非常有价值


##### 记录模式（正式）


>[!NOTE]

>

>记录模式（Record Patterns） 可对 record 的值进行解构，也就是更方便地从记录类（Record Class）中提取数据。并且，还可以嵌套记录模式和类型模式结合使用，以实现强大的、声明性的和可组合的数据导航和处理形式。

>

>记录模式不能单独使用，而是要与 instanceof 或 switch 模式匹配一同使用。


>  instanceof 

>

```java

> //定义一个记录类

> record Shape(String type, long unit){}

> //没记录之前

> Shape circle = new Shape("Circle", 10);

> if (circle instanceof Shape shape) {

>   System.out.println("Area of " + shape.type() + " is : " + Math.PI * Math.pow(shape.unit(), 2));

> }

> //有记录模式之后

> Shape circle = new Shape("Circle", 10);

> if (circle instanceof Shape(String type, long unit)) {

>   System.out.println("Area of " + type + " is : " + Math.PI * Math.pow(unit, 2));

> }

```

>

> switch 

>

```java

> //定义一些类

> interface Shape {}

> record Circle(double radius) implements Shape { }

> record Square(double side) implements Shape { }

> record Rectangle(double length, double width) implements Shape { }

> //没有记录模式之前

> Shape shape = new Circle(10);

> switch (shape) {

>     case Circle c:

>         System.out.println("The shape is Circle with area: " + Math.PI * c.radius() * c.radius());

>         break;

>     case Square s:

>         System.out.println("The shape is Square with area: " + s.side() * s.side());

>         break;

>     case Rectangle r:

>         System.out.println("The shape is Rectangle with area: + " + r.length() * r.width());

>         break;

>     default:

>         System.out.println("Unknown Shape");

>         break;

> }

> //有了记录模式之后

> Shape shape = new Circle(10);

> switch(shape) {

>   case Circle(double radius):

>     System.out.println("The shape is Circle with area: " + Math.PI * radius * radius);

>     break;

>   case Square(double side):

>     System.out.println("The shape is Square with area: " + side * side);

>     break;

>   case Rectangle(double length, double width):

>     System.out.println("The shape is Rectangle with area: + " + length * width);

>     break;

>   default:

>     System.out.println("Unknown Shape");

>     break;

> }

> 

```


> [!NOTE]

>

> 记录模式可以避免不必要的转换，使得代码更建简洁易读。而且，用了记录模式后不必再担心 `null` 或者 `NullPointerException`，代码更安全可靠。


> [!WARNIng]

>

> 不要把记录模式和 [JDK16](https://javaguide.cn/java/new-features/java16.html) 正式引入的记录类搞混了


##### switch 的模式匹配（正式）


> 增强 Java 中的 switch 表达式和语句，允许在 case 标签中使用模式。当模式匹配时，执行 case 标签对应的代码。

>

> 在下面的代码中，switch 表达式使用了类型模式来进行匹配：


```java

static String formatterPatternSwitch(Object obj) {

    return switch (obj) {

        case Integer i -> String.format("int %d", i);

        case Long l    -> String.format("long %d", l);

        case Double d  -> String.format("double %f", d);

        case String s  -> String.format("String %s", s);

        default        -> obj.toString();

    };

}

```


##### 外部函数和内存 API（第三次预览）


##### 未命名模式和变量（预览）


>未命名模式和变量使得我们可以使用下划线 `_` 表示未命名的变量以及模式匹配时不使用的组件，旨在提高代码的可读性和可维护性。


> 未命名变量的典型场景是 `try-with-resources` 语句、 `catch` 子句中的异常变量和`for`循环。当变量不需要使用的时候就可以使用下划线 `_`代替，这样清晰标识未被使用的变量。


##### 虚拟线程（正式）


> [!important]

>

> 虚拟线程是一项重量级的更新，一定一定要重视！


>虚拟线程（Virtual Thread）是 JDK 而不是 OS 实现的轻量级线程(Lightweight Process，LWP），由 JVM 调度。许多虚拟线程共享同一个操作系统线程，虚拟线程的数量可以远大于操作系统线程的数量


>在引入虚拟线程之前，`java.lang.Thread` 包已经支持所谓的平台线程，也就是没有虚拟线程之前，我们一直使用的线程。JVM 调度程序通过平台线程（载体线程）来管理虚拟线程，一个平台线程可以在不同的时间执行不同的虚拟线程（多个虚拟线程挂载在一个平台线程上），当虚拟线程被阻塞或等待时，平台线程可以切换到执行另一个虚拟线程。


> [!note]

>

> 关于平台线程和系统内核线程的对应关系多提一点：在 Windows 和 Linux 等主流操作系统中，Java 线程采用的是一对一的线程模型，也就是一个平台线程对应一个系统内核线程。Solaris 系统是一个特例，HotSpot VM 在 Solaris 上支持多对多和一对一


> [!note]

>

> 相比较于平台线程来说，虚拟线程是廉价且轻量级的，使用完后立即被销毁，因此它们不需要被重用或池化，每个任务可以有自己专属的虚拟线程来运行。虚拟线程暂停和恢复来实现线程之间的切换，避免了上下文切换的额外耗费，兼顾了多线程的优点，简化了高并发程序的复杂，可以有效减少编写、维护和观察高吞吐量并发应用程序的工作量。


> [!important]

>

> 四种创建虚拟线程的方法：

> 通过列举的 4 种创建虚拟线程的方式可以看出，官方为了降低虚拟线程的门槛，尽力复用原有的 `Thread` 线程类，这样可以平滑的过渡到虚拟线程的使用。

>

```java

> // 1、通过 Thread.ofVirtual() 创建

> Runnable fn = () -> {

>   // your code here

> };

> Thread thread = Thread.ofVirtual(fn).start();

> 

> // 2、通过 Thread.startVirtualThread() 、创建

> Thread thread = Thread.startVirtualThread(() -> {

>   // your code here

> });

> 

> // 3、通过 Executors.newVirtualThreadPerTaskExecutor() 创建

> var executorService = Executors.newVirtualThreadPerTaskExecutor();

> executorService.submit(() -> {

>   // your code here

> });

> 

> class CustomThread implements Runnable {

>   @Override

>   public void run() {

>     System.out.println("CustomThread run");

>   }

> }

> //4、通过 ThreadFactory 创建

> CustomThread customThread = new CustomThread();

> // 获取线程工厂类

> ThreadFactory factory = Thread.ofVirtual().factory();

> // 创建虚拟线程

> Thread thread = factory.newThread(customThread);

> // 启动线程

> thread.start();

```


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/virtual-threads-platform-threads-kernel-threads-relationship.png" alt="虚拟线程、平台线程和系统内核线程的关系" width="50%" />


##### 未命名类和实例 main 方法 （预览）


> 这个特性主要简化了 `main` 方法的的声明。对于 Java 初学者来说，这个 `main` 方法的声明引入了太多的 Java 语法概念，不利于初学者快速上手。


> 使用该新特性之后定义一个 `main` 方法：

>

```java

> class HelloWorld {

>     void main() {

>         System.out.println("Hello, World!");

>     }

> }

```

>

> 进一步精简(未命名的类允许我们不定义类名)：

>

```java

> void main() {

>    System.out.println("Hello, World!");

> }

```


#### [22](https://openjdk.org/projects/jdk/22/)


```

2024年03月29日，JDK22发布。

```


### OpenJDK vs OracleJDK


> 市面上有各种jdk，最权威的是官方发布的oracle jdk，其他的还有adoptopenjdk， azul zulu jdk， Amazon Corretto， alibaba dragonwell， Temurin等。 

>

> oracle jdk 和Open jdk有什么区别？

>

> 为什么又冒出各种各样的jdk?

>

>  Oracle jdk从2019年之后需要商业收费，该如何选择？


> OpenJDK可理解为两个：源代码存储库和发行版本。

>

> 1. 源代码存储库角度

>

>    > 就源代码而言，只有一套Java源代码，存在[OpenJDK](https://github.com/openjdk/jdk)项目中。这个项目由Oracle公司主导，还有很多大公司参与合作开发，如：IBM, Apple, Microsoft等。

>

> 2. 发行版本角度

>

>    > 各个公司基于同一套源码，加上一些自己的实用工具，为不同的平台（os：Linux, Mac, Windows; 架构：aarch64, x64）编译出二进制包，并附上授权声明，提供给大家下载使用。 

>    >

>    > 各个不同的发行版本也会承诺如有版本更新也会及时释出新版本。

>    >

>    > OracleJDK从9开始一样是基于OpenJDK，它额外的提供了一些闭源组件，以及商用license。

>    >

>    > 可以理解为OracleJDK和OpenJDK源码几乎就一样，使用Oracle JDK需要付费，同时也能得到相应的服务: 客服支持，版本更新以及一些实用工具。


#### 主流OpenJDK 发行版介绍


> 1. [Temurin OpenJDK](https://adoptium.net/)

>

> >原来是AdoptOpenJDK ，是2017年，一群Java用户组（JUG）成员、开发者和供应商（包括亚马逊、微软、Pivotal、Redhat等）建立了一个社区称作AdoptOpenJDK。

> >

> >他们提供免费、稳固的OpenJDK build，可用性与更新周期更长。

> >

> >甚至还有两个不同的Java虚拟机可供选择：HotSpot和OpenJ9。

> >

> >目前它已归属于Eclipse 基金会，该版本是大多数用户（无特殊功能要求）的最佳选择。

>

> 2. Oracle OpenJDK

>

> > oracle自己也基于OpenJDK编译了一套发行版，去除了商标，并且免费，但不承诺会及时更新。

>

> 3. [Azul Zulu OpenJDK](https://www.azul.com/downloads/?package=jdk)

>

> >官方称是世界上最大的OpenJDK商用提供商。它自家闭源的zing jvm在hotspot jvm的基础上进行了大量优化。zulu是Azul提供的开源版本，可自由使用，但不提供支持。 需要支持可选用商业版本：

> >

> >- Azul Platform Core：即之前的zulu enterprise/embedded版本

> >- Azul Platform Prime：即之前的zing。它提供更优秀的性能。

>

> 4. [Microsoft OpenJDK](https://www.microsoft.com/openjdk)

>

>    > 微软也发行了自己的openJDK版本，且不仅仅是Windows版本, macOS, Linux也有对应释出版本。果然Microsoft越来越开放了。 按微软的说法其Azure, SQL Server, Visual Studio Code, LinkedIn等都使用了java技术。微软提供的软件质量肯定是妥妥的，用于生产都没什么问题

>

> 5. [Dragonwell OpenJDK](https://www.aliyun.com/product/dragonwell)

>

>    > Alibaba Dragonwell （龙井）是一款免费的, 生产就绪型Open JDK 发行版，提供长期支持，包括性能增强和安全修复。

>    >

>    > 阿里巴巴拥有最丰富的Java应用场景，覆盖电商，金融，物流等众多领域，世界上最大的Java用户之一。Alibaba Dragonwell作为Java应用的基石，支撑了阿里经济体内所有的Java业务。

>    >

>    > 阿里生产环境使用的OpenJDK，质量也是经的起考验，需要注意的是：Alibaba Dragonwell 会针对 Long Term Support(LTS) 提供 Java 8 和 Java 11两个版本。

>    >

>    > Dragonwell随阿里云 VM 镜像发布，免费提供给阿里云客户使用；开发者也可以直接下载免费使用

>    > 阿里巴巴提供季度更新，Java8 更新至少到 2023 年 6月，Java11 更新至少到 2024 年 6月

>    > 目前仅支持Linux下的x64架构


> 用户JDK版本选择

>

> 1. 有商业支持需求的选择Oracle JDK。 

> 2. 如果对性能方面有更高要求的选Azul Platform Prime, 即zing jvm。

> 3. 免费用户无特殊要求的选Temurin OpenJDK即可。

> 4. 有特殊架构需求的，如Mac m1（aarch64）有时释出版本受限，可选择zulu OpenJDK。




