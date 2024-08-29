# 工具-时序图-UML类图

### 时序图


> [时序图（Sequence Diagram）](https://www.cnblogs.com/ywqu/archive/2009/12/22/1629426.html)是显示对象之间交互的图，这些对象是按时间顺序排列的；

>

> 顺序图中显示的是参与交互的对象及其对象之间消息交互的顺序；

>

> 时序图中包括的建模元素主要有：对象（Actor）、生命线（Lifeline）、控制焦点（Focus of control）、消息（Message）等等；


#### 时序图元素


##### 角色（Actor）


> 系统角色，可以是人、及其甚至其他的系统或者子系统。


#####  对象（Object）


> 对象包括三种命名方式：

>

> 1. 包括对象名和类名；

>

> 2. 只显示类名不显示对象名，即表示他是一个匿名对象；

>

> 3. 只显示对象名不显示类名。


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/SequenceDiagram.jpg" alt="img" width="50%" />


##### 生命线（Lifeline）


> 生命线在顺序图中表示为从对象图标向下延伸的一条虚线，表示对象存在的时间；


##### 控制焦点（Focus of Control）


> 控制焦点是顺序图中表示时间段的符号，在这个时间段内对象将执行相应的操作。用小矩形表示；


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/ElementFOC.jpg" alt="img" width="50%" />


##### 消息（Message）


> 消息一般分为同步消息（Synchronous Message），异步消息（Asynchronous Message）和返回消息（Return Message）；


> 同步消息=调用消息（Synchronous Message）

>

> > 消息的发送者把控制传递给消息的接收者，然后停止活动，等待消息的接收者放弃或者返回控制。用来表示同步的意义。

>

> 异步消息（Asynchronous Message）

>

> > 消息发送者通过消息把信号传递给消息的接收者，然后继续自己的活动，不等待接受者返回消息或者控制。异步消息的接收者和发送者是并发工作的。

>

> 返回消息（Return Message）

>

> > 返回消息表示从过程调用返回。


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/Message.gif" alt="img" width="50%" />


##### 自关联消息（Self-Message）


> 表示方法的自身调用（回调）以及一个对象内的一个方法调用另外一个方法。


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/SelfMessage.gif" alt="img" width="50%" />


##### 组合示例


> Alternative fragment（denoted “alt”） 与 if…then…else对应

>

> Option fragment (denoted “opt”) 与 Switch对应

>

> Parallel fragment (denoted “par”) 表示同时发生

>

> Loop fragment(denoted “loop”) 与 for 或者 Foreach对应


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/CombinedFragments.gif" alt="img" width="50%" />


#### 时序图实例分析


>  完成课程创建功能，主要流程有：

>

>  1、请求添加课程页面，填写课程表单，点击【create】按钮

>

>  2、添加课程信息到数据库

>

>  3、向课程对象追加主题信息

>

>  4、为课程指派教师

>

>  5、完成课程创建功能


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/Dequence_Diagram_Example.jpg" alt="img" width="50%" />


> 1、序号1.0-1.3 完成页面的初始化

>

> 2、序号1.4-1.5 课程管理员填充课程表单

>

> 3、序号1.6-1.7 课程管理员点击【Create】按钮，并响应点击事件

>

> 4、序号1.8   Service层创建课程

>

> 5、序号1.9-1.10 添加课程到数据库，并返回课程编号CourseId

>

> 6、序号1.11-1.12 添加课程主题到数据库，并返回主题编号topicId

>

> 7、序号1.13     给课程指派教师

>

> 8、序号1.14     向界面抛创建课程成功与否的消息


### 类之间的关系（UML类图）


- 车的类图结构为`<<abstract>>`，表示车是一个抽象类；

- 它有两个继承类：小汽车和自行车；它们之间的关系为实现关系，使用带空心箭头的虚线表示；

- 小汽车为与SUV之间也是继承关系，它们之间的关系为泛化关系，使用带空心箭头的实线表示；

- 小汽车与发动机之间是组合关系，使用带实心箭头的实线表示；

- 学生与班级之间是聚合关系，使用带空心箭头的实线表示；

- 学生与身份证之间为关联关系，使用一根实线表示；

- 学生上学需要用到自行车，与自行车是一种依赖关系，使用带箭头的虚线表示；


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/uml_class_struct.jpg" alt="_images/uml_class_struct.jpg" width="50%" />


#### 泛化关系(generalization)


> 泛化关系用一条带空心箭头的直线表示；

>

> eg：汽车在现实中有实现，可用汽车定义具体的对象；汽车与SUV之间为泛化关系；

>

> 最终代码中，泛化关系表现为继承非抽象类；


#### 实现关系(realize)


> 实现关系用一条带空心箭头的虚线表示；

>

> eg：”车”为一个抽象概念，在现实中并无法直接用来定义对象；只有指明具体的子类(汽车还是自行车)，才可以用来定义对象（”车”这个类在C++中用抽象类表示，在JAVA中有接口这个概念）

>

> 最终代码中，实现关系表现为继承抽象类；


#### 聚合关系(aggregation)


> 聚合关系用一条带空心菱形箭头的直线表示；

>

> 聚合关系用于表示实体对象之间的关系，表示整体由部分构成的语义；eg：一个部门由多个员工组成；

>

> 与组合关系不同的是，整体和部分不是强依赖的，即使整体不存在了，部分仍然存在；eg：部门撤销了，人员不会消失，他们依然存在；


#### 组合关系(composition)


> 组合关系用一条带实心菱形箭头直线表示；

>

> 与聚合关系一样，组合关系同样表示整体由部分构成的语义；eg：公司由多个部门组成；

>

> 但组合关系是一种强依赖的特殊聚合关系，如果整体不存在了，则部分也不存在了；eg：公司不存在了，部门也将不存在了；


#### 关联关系(association)


> 关联关系是用一条直线表示；

>

> 它描述不同类的对象之间的结构关系；它是一种静态关系， 通常与运行状态无关，一般由常识等因素决定的；它一般用来定义对象之间静态的、天然的结构； 所以，关联关系是一种“强关联”的关系；

>

> eg：乘车人和车票之间就是一种关联关系；学生和学校就是一种关联关系；

>

> 关联关系默认不强调方向，表示对象间相互知道；如果特别强调方向，则是带箭头的直线表示；

>

> 关联对象通常是以成员变量的形式实现的；


#### 依赖关系(dependency)


> 依赖关系是用一套带箭头的虚线表示；

>

> 与关联关系不同的是，它是一种临时性的关系，通常在运行期间产生，并且随着运行时的变化； 依赖关系也可能发生变化；

>

> 显然，依赖也有方向，双向依赖是一种非常糟糕的结构，我们总是应该保持单向依赖，杜绝双向依赖的产生；

>

> 依赖关系体现为类构造方法及类方法的传入参数，箭头的指向为调用关系；依赖关系除了临时知道对方外，还是“使用”对方的方法和属性；