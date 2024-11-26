# 设计模式

## 模式分类

### 创造型模式

提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用new 运算符直接实例化对象

- 工厂模式（Factory Pattern）
- 抽象工厂模式（Abstract Factory Pattern）
- 单例模式（Singleton Pattern）
- 建造者模式（Builder Pattern）
- 原型模式（Prototype Pattern）

### 结构型模式

关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。

- 适配器模式（Adapter Pattern）
- 桥接模式（Bridge Pattern）
- 过滤器模式（Filter、Criteria Pattern）
- 组合模式（Composite Pattern）
- 装饰器模式（Decorator Pattern
- 外观模式（Facade Pattern）
- 享元模式（Flyweight Pattern）
- 代理模式（Proxy Pattern）

### 行为型模式

关注对象之间的通信

- 责任链模式（Chain of Responsibility Pattern）
- 命令模式（Command Pattern）
- 解释器模式（Interpreter Pattern）
- 迭代器模式（Iterator Pattern）
- 中介者模式（Mediator Pattern）
- 备忘录模式（Memento Pattern）
- 观察者模式（Observer Pattern）
- 状态模式（State Pattern）
- 空对象模式（Null Object Pattern）
- 策略模式（Strategy Pattern）
- 模板模式（Template Pattern）
- 访问者模式（Visitor Pattern）

### J2EE模式

关注表示层。这些模式是由SunJavaCenter鉴定

- MVC模式（MVC Pattern）
- 业务代表模式（Business Delegate Pattern）
- 组合实体模式（Composite Entity Pattern）
- 数据访问对象模式（Data Access Object Pattern）
- 前端控制器模式（Front Controller Pattern）
- 拦截过滤器模式（Intercepting Filter Pattern）
- 服务定位器模式（Service Locator Pattern）
- 传输对象模式（Transfer Object Pattern）

## 六大原则

- 开闭原则（Open Close Principle）
   - 对扩展开放，对修改关闭。
- 里氏代换原则（Liskov Substitution Principle）
   - 任何基类可以出现的地方，子类一定可以出现。
   - 开闭原则的重要实现。
   - 将一个基类对象替换成子类对象，程序不会产生任何异常，反过来则不成立。例如我喜欢动物，那我一定喜欢狗，但是我喜欢狗，不能据此判定我喜欢所有的动物。
- 依赖倒转原则（Dependence Inversion Principle）
   - 针对接口编程，依赖于抽象而不依赖于具体。
   - 开闭原则的基础。
- 接口隔离原则（Interface Segregation Principle）
   - 使用多个专门的接口，而不使用单一的总接口，即客户端不应该依赖那些它不需要的接口。
   - 控制接口的粒度，接口不能太小，太小会导致系统接口泛滥，不利于维护；接口也不能太大，太大的接口将违背接口隔离原则，灵活性较差。
   - 接口中仅包含为某一类用户定制的方法即可，不应该强 迫客户依赖于那些它们不用的方法。
- 迪米特法则，又称最少知道原则（Demeter Principle）
   - 一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。
   - 在多个实体间添加一个中间类。用于管理实体间的交互。当需要增加或删除实体时，只需修改中间类即可，无须修改新增类或已有类的源代码。
- 合成复用原则，组合/聚合复用原则（Composite Reuse Principle）
   - 尽量使用对象组合，而不是继承来达到复用的目的。
   - 在能使用关联关系时（如依赖注入），不要使用继承。

## 设计模式

### 简单工厂模式

简单工厂模式(Simple Factory Pattern)：又称为静态工厂方法(Static Factory Method)模式，属于类创建型模式。

#### 角色

- Factory：工厂角色
  工厂角色负责实现创建所有实例的内部逻辑
- Product：抽象产品角色
  抽象产品角色是所创建的所有对象的父类，负责描述所有实例所共有的公共接口
- ConcreteProduct：具体产品角色
  具体产品角色是创建目标，所有创建的对象都充当这个角色的某个具体类的实例。

#### UML类图

```mdx-code-block
import simpleFactory from '/img/docs/java/designpattern/DesignPattern-简单工厂模式.jpg';

<img src={simpleFactory} alt="DesignPattern-简单工厂模式" width="50%" />
```

#### 时序图

```mdx-code-block
import seqSimpleFactory from '/img/docs/java/designpattern/DesignPattern-简单工厂模式时序图.jpg';

<img src={seqSimpleFactory} alt="DesignPattern-简单工厂模式时序图" width="50%" />
```

#### 示例

- [java.util.Calendar#getInstance()](https://docs.oracle.com/javase/8/docs/api/java/util/Calendar.html#getInstance--)
- [java.util.ResourceBundle#获取Bundle()](https://docs.oracle.com/javase/8/docs/api/java/util/ResourceBundle.html#getBundle-java.lang.String-)
- [java.text.NumberFormat#getInstance()](https://docs.oracle.com/javase/8/docs/api/java/text/NumberFormat.html#getInstance--)
- [java.nio.charset.Charset#forName()](https://docs.oracle.com/javase/8/docs/api/java/nio/charset/Charset.html#forName-java.lang.String-)
- [java.net.URLStreamHandlerFactory#createURLStreamHandler(String)](https://docs.oracle.com/javase/8/docs/api/java/net/URLStreamHandlerFactory.html)（根据协议返回不同的单例对象）
- [java.util.EnumSet#of()](https://docs.oracle.com/javase/8/docs/api/java/util/EnumSet.html#of(E))
- [javax.xml.bind.JAXBContext#createMarshaller()](https://docs.oracle.com/javase/8/docs/api/javax/xml/bind/JAXBContext.html#createMarshaller--)和其他类似方法。
- JavaFX 使用工厂模式来创建适合用户环境具体情况的各种 UI 控件。

```java
//JDK类库中广泛使用了简单工厂模式，如工具类java.text.DateFormat
public final static DateFormat getDateInstance();
public final static DateFormat getDateInstance(int style);
public final static DateFormat getDateInstance(int style,Locale locale);

//Java加密技术：获取不同加密算法的密钥生成器
KeyGenerator keyGen = KeyGenerator.getInstance("DESede");
//创建密码器
Cipher cp=Cipher.getInstance("DESede");
```

#### 优点

- 实现对象的创建和对象的使用分离，将对象的创建交给专门的工厂类负责。
- 客户端无须知道所创建的具体产品类的类名，只需要知道具体产品类所对应的参数即可，对于一些复杂的类名，通过简单工厂模式可以减少使用者的记忆量。
- 通过引入配置文件，可以在不修改任何客户端代码的情况下更换和增加新的具体产品类，在一定程度上提高了系统的灵活性。

#### 缺点

- 由于工厂类集中了所有产品创建逻辑，一旦不能正常工作，整个系统都要受到影响。
- 使用简单工厂模式将会增加系统中类的个数，在一定程序上增加了系统的复杂度和理解难度。
- 系统扩展困难，一旦添加新产品就不得不修改工厂逻辑，在产品类型较多时，有可能造成工厂逻辑过于复杂，不利于系统的扩展和维护。
- 简单工厂模式由于使用了静态工厂方法，造成工厂角色无法形成基于继承的等级结构。

### 工厂方法模式

工厂方法模式(Factory Method Pattern)又称为工厂模式，也叫虚拟构造器(Virtual Constructor)模式或者多态工厂(Polymorphic Factory)模式。

#### 角色

- Product：抽象产品
- ConcreteProduct：具体产品
- Factory：抽象工厂
- ConcreteFactory：具体工厂

#### UML类图

```mdx-code-block
import factoryMethod from '/img/docs/java/designpattern/DesignPattern-工厂方法模式.jpg';

<img src={factoryMethod} alt="DesignPattern-工厂方法模式" width="50%" />
```

#### 时序图

```mdx-code-block
import seqFactoryMethod from '/img/docs/java/designpattern/DesignPattern-工厂方法模式时序图.jpg';

<img src={seqFactoryMethod} alt="DesignPattern-工厂方法模式时序图" width="50%" />
```

#### 示例

- [日历](http://docs.oracle.com/javase/8/docs/api/java/util/Calendar.html#getInstance--)
- [资源包](http://docs.oracle.com/javase/8/docs/api/java/util/ResourceBundle.html#getBundle-java.lang.String-)
- [java.text.NumberFormat](http://docs.oracle.com/javase/8/docs/api/java/text/NumberFormat.html#getInstance--)
- [java.nio.charset.字符集](http://docs.oracle.com/javase/8/docs/api/java/nio/charset/Charset.html#forName-java.lang.String-)
- [java.net.URLStreamHandlerFactory](http://docs.oracle.com/javase/8/docs/api/java/net/URLStreamHandlerFactory.html#createURLStreamHandler-java.lang.String-)
- [枚举集合](https://docs.oracle.com/javase/8/docs/api/java/util/EnumSet.html#of-E-)
- [javax.xml.bind.JAXBContext](https://docs.oracle.com/javase/8/docs/api/javax/xml/bind/JAXBContext.html#createMarshaller--)
- 运行应用程序组件的框架，在运行时动态配置。

```java
//JDBC
Connection conn = DriverManager.getConnection("jdbc:microsoft:sqlserver://localhost:1433; DatabaseName=DB; user=sa; password=");
Statement statement = conn.createStatement();
ResultSet rs = statement.executeQuery("select * from UserInfo");
```

#### 优点

- 在工厂方法模式中，工厂方法用来创建客户所需要的产品，同时还向客户隐藏了哪种具体产品类将被实例化这一细节，用户只需要关心所需产品对应的工厂，无须关心创建细节，甚至无须知道具体产品类的类名。
- 基于工厂角色和产品角色的多态性设计是工厂方法模式的关键。它能够使工厂可以自主确定创建何种产品对象，而如何创建这个对象的细节则完全封装在具体工厂内部。工厂方法模式之所以又被称为多态工厂模式，是因为所有的具体工厂类都具有同一抽象父类。
- 使用工厂方法模式的另一个优点是在系统中加入新产品时，无须修改抽象工厂和抽象产品提供的接口，无须修改客户端，也无须修改其他的具体工厂和具体产品，而只要添加一个具体工厂和具体产品就可以了。这样，系统的可扩展性也就变得非常好，完全符合“开闭原则”。

#### 缺点

- 在添加新产品时，需要编写新的具体产品类，而且还要提供与之对应的具体工厂类，系统中类的个数将成对增加，在一定程度上增加了系统的复杂度，有更多的类需要编译和运行，会给系统带来一些额外的开销。
- 由于考虑到系统的可扩展性，需要引入抽象层，在客户端代码中均使用抽象层进行定义，增加了系统的抽象性和理解难度。

### 抽象工厂模式

- 抽象工厂模式(Abstract Factory Pattern)：提供一个创建一系列相关或相互依赖对象的接口，而无须指定它们具体的类。抽象工厂模式又称为Kit模式。
- 当系统所提供的工厂所需生产的具体产品并不是一个简单的对象，而是多个位于不同产品等级结构中属于不同类型的具体产品时需要使用抽象工厂模式。
  - **产品等级结构** ：产品等级结构即产品的继承结构，如一个抽象类是电视机，其子类有海尔电视机、海信电视机、TCL电视机，则抽象电视机与具体品牌的电视机之间构成了一个产品等级结构，抽象电视机是父类，而具体品牌的电视机是其子类。
  - **产品族** ：在抽象工厂模式中，产品族是指由同一个工厂生产的，位于不同产品等级结构中的一组产品，如海尔电器工厂生产的海尔电视机、海尔电冰箱，海尔电视机位于电视机产品等级结构中，海尔电冰箱位于电冰箱产品等级结构中。
- 工厂方法模式针对的是一个产品等级结构，而抽象工厂模式则需要面对多个产品等级结构，一个工厂等级结构可以负责多个不同产品等级结构中的产品对象的创建 。当一个工厂等级结构可以创建出分属于不同产品等级结构的一个产品族中的所有对象时，抽象工厂模式比工厂方法模式更为简单、有效率。

#### 角色

- AbstractFactory：抽象工厂
- ConcreteFactory：具体工厂
- AbstractProduct：抽象产品
- Product：具体产品

#### UML类图

```mdx-code-block
import abatractFactory from '/img/docs/java/designpattern/DesignPattern-抽象工厂模式.jpg';

<img src={abatractFactory} alt="DesignPattern-抽象工厂模式" width="50%" />
```

#### 时序图

```mdx-code-block
import seqAbatractFactory from '/img/docs/java/designpattern/DesignPattern-抽象工厂模式时序图.jpg';

<img src={seqAbatractFactory} alt="DesignPattern-抽象工厂模式时序图" width="50%" />
```

### 状态模式

状态模式(State Pattern) ：允许一个对象在其内部状态改变时改变它的行为，对象看起来似乎修改了它的类。其别名为状态对象(Objects for States)，状态模式是一种对象行为型模式。

#### 角色

- Context: 环境类
- State: 抽象状态类
- ConcreteState: 具体状态类

#### UML类图

```mdx-code-block
import state from '/img/docs/java/designpattern/DesignPattern-状态模式.jpg';

<img src={state} alt="DesignPattern-状态模式" width="50%" />
```

#### 时序图

```mdx-code-block
import seqState from '/img/docs/java/designpattern/DesignPattern-状态模式时序图.jpg';

<img src={seqState} alt="DesignPattern-状态模式时序图" width="50%" />
```

#### 示例

- `java.util.Iterator` Java 的集合框架中使用不同的状态进行迭代。

#### 优点

- 本地化特定于状态的行为并为不同状态划分行为。
- 使状态转换变得明确。
- 可重用的状态对象可以在 Java 中的各种上下文之间有效共享，从而增强内存管理和性能。

#### 缺点

- 可能导致出现大量的状态类。
- 上下文类可能会因状态转换逻辑而变得复杂。

### 策略模式

策略模式(Strategy Pattern)：定义一系列算法，将每一个算法封装起来，并让它们可以相互替换。策略模式让算法独立于使用它的客户而变化，也称为政策模式(Policy)。策略模式是一种对象行为型模式。

#### 角色

- Context: 环境类
- Strategy: 抽象策略类
- ConcreteStrategy: 具体策略类

#### UML类图

```mdx-code-block
import strategy from '/img/docs/java/designpattern/DesignPattern-策略模式.jpg';

<img src={strategy} alt="DesignPattern-策略模式" width="50%" />
```

#### 时序图

```mdx-code-block
import seqStrategy from '/img/docs/java/designpattern/DesignPattern-策略模式时序图.jpg';

<img src={seqStrategy} alt="DesignPattern-策略模式时序图" width="50%" />
```

#### 示例

- Java 的`java.util.Comparator`接口

#### 优点

- 相关算法系列被重复使用。
- 用于扩展行为的子类化的替代方法。
- 避免使用条件语句来选择所需的行为。
- 允许客户选择算法实现。

#### 缺点

- 客户必须了解不同的策略。
- 物体的数量增加。
