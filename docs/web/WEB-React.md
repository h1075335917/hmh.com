---
sidebar_position: 3
---

# WEB-React

## jsx、less、tsx


- JSX允许在JavaScript中嵌入HTML标记，用于描述React组件的结构和外观。

- LESS是一种CSS预处理器，提供了扩展和增强的样式定义方式。

- TSX是在JSX中添加了TypeScript类型支持的文件类型，用于在React组件中进行类型注解和静态类型检查


```jsx

// JSX (JavaScript XML):

// 允许你在React组件中编写类似HTML的结构，用于描述组件的外观和结构

// 允许你使用类似HTML的标签和属性来创建React元素，并在JavaScript代码中进行嵌入和处理

import React from 'react';


function MyComponent() {

  return (

    <div>

      <h1>Hello, World!</h1>

      <p>This is a JSX example.</p>

    </div>

  );

}

```


```tsx

/*

TSX (TypeScript XML)

TSX是一种将TypeScript代码嵌入到JSX中的文件类型。它是JSX的扩展，提供了对静态类型检查和类型注解的支持

允许你在编写React组件时添加类型信息，以提高代码的可靠性和可维护性，并在开发过程中捕获潜在的类型错误

*/

import React from 'react';


interface MyComponentProps {

  name: string;

  age: number;

}


function MyComponent(props: MyComponentProps) {

  return (

    <div>

      <h1>Hello, {props.name}!</h1>

      <p>You are {props.age} years old.</p>

    </div>

  );

}


```


```less

/* 

LESS (Leaner CSS)

LESS是一种CSS预处理器，它扩展了原生CSS的功能，并提供了更强大和可维护的样式定义方式

允许你使用变量、嵌套规则、混合（Mixins）、函数等功能来编写样式代码，使样式定义更加模块化和可重用

在React项目中，你可以使用LESS来编写组件的样式，通过引入LESS文件并应用相应的样式规则

*/


//定义一个简单的LESS样式文件

.myComponent {

  background-color: #f0f0f0;

  padding: 10px;

  .title {

    color: blue;

    font-size: 16px;

  }

}


//在React组件中应用LESS样式

import './MyComponent.less';

```




## JSX基本语法


### JSX的原理


```html

<!-- html -->

<div class='app' id='appRoot'>

    <h1 class='title'>欢迎进入React的世界</h1>

    <p>

    React.js 是一个帮助你构建页面 UI 的库

    </p>

</div>

```


```js

//HTML所有的信息用 JavaScript 对象来表示

{

    tag: 'div',

    attrs: { className: 'app', id: 'appRoot'},

    children: [

        {

            tag: 'h1',

            attrs: { className: 'title' },

            children: ['欢迎进入React的世界']

        },

        {

            tag: 'p',

            attrs: null,

            children: ['React.js 是一个构建页面 UI 的库']

        }

    ]

}

```


```jsx

//React.js 扩展JavaScript语法,编译的过程会把类似HTML的JSX结构转换成JavaScript 的对象结构

import React from 'react'

import ReactDOM from 'react-dom'

class App extends React.Component {

    render () {

        return (

            <div className='app' id='appRoot'>

                <h1 className='title'>欢迎进入React的世界</h1>

                <p>

                React.js 是一个构建页面 UI 的库

                </p>

            </div>

        )

    }

}

ReactDOM.render(

    <App />,

    document.getElementById('root')

)

```


```jsx

//编译之后的代码

import React from "react";

import ReactDOM from "react-dom";

class App extends React.Component {

  render() {

    return React.createElement(

      "div",

      {

        className: "app",

        id: "appRoot",

      },

      React.createElement("h1", { className: "title" }, "欢迎进入React的世界"),

      React.createElement("p", null, "React.js 是一个构建页面 UI 的库")

    );

  }

}

ReactDOM.render(React.createElement(App), document.getElementById("root"));

```


```sql

-- React.createElement 会构建一个 JavaScript 对象来描述你 HTML 结构的信息，包括标签名、属性、还有子元素等, 语法为:

React.createElement(

    type,

    [props],

    [...children]

)

```


```sql

-- 使用React和JSX时经过的编译过程

JSX —使用react构造组件，bable进行编译—> JavaScript对象 — ReactDOM.render() —>DOM

元素 —>插入页面

```




### XML基本语法


```jsx

const List = () => ( 

 <div> 

     <Title>This is title</Title> 

     <ul> 

         <li>list item</li> 

         <li>list item</li> 

         <li>list item</li> 

     </ul> 

 </div> 

);

//定义标签时，只允许被一个标签包裹

例如，const component = <span>name</span><span>

value</span> 这样写会报错。原因是一个标签会被转译成对应的 React.createElement 调

用方法，最外层没有被包裹，无法转译成方法调用

```


### 元素类型


```sql

-- DOM元素和组件元素

HTML标签首字母，小写对应DOM元素，大写对应组件元素。

比如 List 组件中的 <div> 标签会生成 DOM 元素，Title 以大写字母开头，会生成组件元素

const Title = (children) => ( 

 <h3>{children}</h3> 

);

等到依赖的组件元素中不再出现组件元素，我们就可以将完整的 DOM 树构建出来了。


-- 命名冲突

JSX 还可以通过命名空间的方式使用组件元素，以解决组件相同名称冲突的问题，或是对一

组组件进行归类。比如，我们想使用 Material UI 组件库中的组件，以 MUI 为包名，可以这么写：

const App = () => ( 

 <MUI.RaisedButton label="Default" /> 

);


-- 在 HTML 标准中，还有一些特殊的标签值得讨论，比如注释和 DOCTYPE 头

-- 注释

在 HTML 中，注释写成 <!-- content --> 这样的形式，但在 JSX 中并没有定义注释的转换

方法。事实上，JSX 还是 JavaScript，依然可以用简单的方法使用注释，唯一要注意的是，在一

个组件的子元素位置使用注释要用 {} 包起来。示例代码如下：

const App = ( 

     <Nav> 

         {/* 节点注释 */} 

         <Person 

             /* 多行

             注释 */ 

             name={window.isLoggedIn ? window.name : ''} 

         /> 

     </Nav> 

);

```


### 元素属性


```sql

-- DOM 元素的属性

DOM 元素的属性是标准规范属性，但有两个例外——class 和 for，这是因为在 JavaScript 中这两个单词都是关键

词。因此，我们这么转换：

class 属性改为 className

for 属性改为 htmlFor


-- 组件元素的属性

组件元素的属性是完全自定义的属性，也可以理解为实现组件所需要的参数。比如：

const Header = ({title, children}) => ( 

 <h3 title={title}>{children}</h3> 

);

我们给 Header 组件加了一个 title 属性，那么可以这么调用：

<Header title="hello world">Hello world</Header>

-- Boolean 属性

-- 展开属性

如果事先知道组件需要的全部属性

const component = <Component name={name} value={value} />;

如果你不知道要设置哪些 props

const component = <Component />; 

component.props.name = name; 

component.props.value = value;

简化

const data = { name: 'foo', value: 'bar' }; 

const component = <Component {...data} />;

-- 自定义 HTML 属性

```


###  JavaScript 属性表达式


```sql

-- 属性值要使用表达式，只要用 {} 替换 "" 即可：

// 输入（JSX）：

const person = <Person name={window.isLoggedIn ? window.name : ''} />; 

// 输出（JavaScript）：

const person = React.createElement( 

 Person, 

 {name: window.isLoggedIn ? window.name : ''} 

);

-- 子组件也可以作为表达式使用：

// 输入（JSX）：

const content = <Container>{window.isLoggedIn ? <Nav /> : <Login />}</Container>; 

// 输出（JavaScript）：

const content = React.createElement( 

 Container, 

 null, 

 window.isLoggedIn ? React.createElement(Nav) : React.createElement(Login) 

);

```


###  HTML 转义


```sql

React 会将所有要显示到 DOM 的字符串转义，防止 XSS。所以，如果 JSX 中含有转义后的

实体字符，比如 &copy;（©），则最后 DOM 中不会正确显示，因为 React 自动把 &copy; 中的特

殊字符转义了。有几种解决办法：

 直接使用 UTF-8 字符 ©；

 使用对应字符的 Unicode 编码查询编码；

 使用数组组装 <div>{['cc ', <span>&copy;</span>, ' 2015']}</div>；

 直接插入原始的 HTML。

此外，React 提供了 dangerouslySetInnerHTML 属性。正如其名，它的作用就是避免 React 转

义字符，在确定必要的情况下可以使用它：

<div dangerouslySetInnerHTML={{__html: 'cc &copy; 2015'}} />

```


## React 组件


>  React 组件基本上由 3 个部分组成——属性（props）、状态（state）以及生命周期方法


### React 组件的构建方法


#### React.createClass


```jsx

// React.createClass

用 React.createClass 构建组件是 React 最传统、也是兼容性最好的方法

const Button = React.createClass({ 

 getDefaultProps() { 

     return { 

         color: 'blue', 

         text: 'Confirm', 

     }; 

 }, 

 render() { 

     const { color, text } = this.props; 

     return ( 

         <button className={`btn btn-${color}`}> 

         <em>{text}</em> 

         </button> 

     ); 

 } 

});

从表象上看，React.createClass 方法就是构建一个组件对象。当另一个组件需要调用 Button 

组件时，只用写成 <Button />，就可以被解析成 React.createElement(Button) 方法来创建 Button 

实例，这意味着在一个应用中调用几次 Button，就会创建几次 Button 实例

```


#### ES6 classes


```jsx

// ES6 classes

import React, { Component } from 'react'; 

class Button extends Component { 

 constructor(props) { 

	 super(props); 

 } 

 static defaultProps = { 

     color: 'blue', 

     text: 'Confirm', 

 }; 

 render() { 

     const { color, text } = this.props; 

     return ( 

         <button className={`btn btn-${color}`}> 

         <em>{text}</em> 

         </button> 

     ); 

 }

这里的直观感受是从调用内部方法变成了用类来实现。与 createClass 的结果相同的是，调

用类实现的组件会创建实例对象。

```


```jsx

// ES6的加入让JavaScript直接支持使用class来定义一个类，react创建组件的方式就是使用的类的继承

import React from "react";

import ReactDOM from "react-dom";

class App extends React.Component {

  render() {

    return <h1>欢迎进入React的世界</h1>;

  }

}

ReactDOM.render(<App />, document.getElementById("root"));


// es6 class 组件其实就是一个构造器,每次使用组件都相当于在实例化组件，像这样：

import ReactDOM from "react-dom";

class App extends React.Component {

  render() {

    return <h1>欢迎进入{this.props.name}的世界</h1>;

  }

}

const app = new App({

  name: "react"

}).render();

ReactDOM.render(app, document.getElementById("root"));

```


#### 无状态函数


```jsx

// 无状态函数

function Button({ color = 'blue', text = 'Confirm' }) { 

 return ( 

     <button className={`btn btn-${color}`}> 

     <em>{text}</em> 

     </button> 

 ); 

}

无状态组件只传入 props 和 context 两个参数；也就是说，它不存在 state，也没有生命周

期方法，组件本身即上面两种 React 组件构建方法中的 render 方法。不过，像 propTypes 和

defaultProps 还是可以通过向方法设置静态属性来实现的。

在适合的情况下，我们都应该且必须使用无状态组件。无状态组件不像上述两种方法在调用

时会创建新实例，它创建时始终保持了一个实例，避免了不必要的检查和内存分配，做到了内部

优化。

```


### 函数式组件


```jsx

// 这样一个完整的函数式组件就定义好了。但要注意! 组件名必须大写，否则报错。

import React from "react";

import ReactDOM from "react-dom";

const App = (props) => <h1>欢迎进入React的世界</h1>;

ReactDOM.render(

  // React组件的调用方式

  <App />,

  document.getElementById("root")

);

```


###  组件的样式


```sql

-- 行内样式

想给虚拟dom添加行内样式，需要使用表达式传入样式对象的方式来实现

-- 注意这里的两个括号，第一个表示我们在要JSX里插入JS了，第二个是对象的括号

<p style={{color:'red', fontSize:'14px'}}>Hello world</p>

```


###  事件处理


#### 绑定事件


> 采用on+事件名的方式来绑定一个事件，注意，这里和原生的事件是有区别的，原生的事件全是小写onclick , **React里的事件是驼峰 onClick **，React的事件并不是原生事件，而是**合成事件**。


> 在 React 中另一个不同是你不能使用返回 **false** 的方式阻止默认行为， 你必须明确使用 **preventDefault**

>

```jsx

> // html

> <a href="#" onclick="console.log('点击链接'); return false">

>   点我

> </a>

> 

> // react jsx

> function ActionLink() {

>   function handleClick(e) {

>     e.preventDefault();

>     console.log('链接被点击');

>   }

>   return (

>     <a href="#" onClick={handleClick}>

>       点我

>     </a>

>   );

> }

```


#### 事件handler的写法


> 直接在render里写行内的箭头函数(不推荐)


> 在组件内使用箭头函数定义一个方法(推荐)

>

```jsx

> handleBtnClick = () => {

>     this.setState({

>     	isLiked: !this.state.isLiked

>     })

> }

```


> 直接在组件内定义一个非箭头函数的方法，然后在render里直接使用 `onClick={this.handleClick.bind(this)}` (不推荐)


> 直接在组件内定义一个非箭头函数的方法，然后在constructor里bind(this)(推荐)

>

```jsx

> constructor(props) {

>     super(props);

>     this.handleChange = this.handleChange.bind(this);

> }

> handleChange(event) {

>     this.setState({

>         isLiked: !this.state.isLiked

>     });

> }

```


#### Event对象


> 和普通浏览器一样，事件handler会被自动传入一个 event 对象，这个对象和普通的浏览器 event 对象所包含的方法和属性都基本一致


> 不同的是 React中的 event 对象并不是浏览器提供的，而是它自己内部所构建的。它同样具有 event.stopPropagation 、 event.preventDefault 这种常用的方法


### 表单与事件


#### 简单组件使用表单


```jsx

//渲染出一个值为 Hello Runoob! 的 input 元素，并通过 onChange 事件响应更新用户输入的值。

//通过render渲染到指定容器中(example)

class HelloMessage extends React.Component {

  constructor(props) {

      super(props);

      this.state = {value: 'Hello Runoob!'};

      this.handleChange = this.handleChange.bind(this);

  }

 
  handleChange(event) {

    this.setState({value: event.target.value});

  }

  render() {

    var value = this.state.value;

    return <div>

            <input type="text" value={value} onChange={this.handleChange} /> 

            <h4>{value}</h4>

           </div>;

  }

}

ReactDOM.render(

  <HelloMessage />,

  document.getElementById('example')

);

```


#### 子组件上使用表单


```jsx

//onChange 方法将触发 state 的更新并将更新的值传递到子组件的输入框的 value 上来重新渲染界面。

//需要在父组件通过创建事件句柄 (handleChange) ，并作为 prop (updateStateProp) 传递到子组件上

//event.target.value是在事件处理函数中获取事件目标元素的值的一种常见方式。event.target表示触发事件的输入框元素，而event.target.value表示输入框当前的值

//通过render渲染到指定容器中(example)

class Content extends React.Component {

  render() {

    return  <div>

            <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 

            <h4>{this.props.myDataProp}</h4>

            </div>;

  }

}

class HelloMessage extends React.Component {

  constructor(props) {

      super(props);

      this.state = {value: 'Hello Runoob!'};

      this.handleChange = this.handleChange.bind(this);

  }

 
  handleChange(event) {

    this.setState({value: event.target.value});

  }

  render() {

    var value = this.state.value;

    return <div>

            <Content myDataProp = {value} 

              updateStateProp = {this.handleChange}></Content>

           </div>;

  }

}

ReactDOM.render(

  <HelloMessage />,

  document.getElementById('example')

);

```


#### 下拉菜单


```jsx

//在 React 中，不使用 selected 属性，而在根 select 标签上用 value 属性来表示选中项

//通过render渲染到指定容器中(example)

class FlavorForm extends React.Component {

  constructor(props) {

    super(props);

    this.state = {value: 'coconut'};

 
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

 
  handleChange(event) {

    this.setState({value: event.target.value});

  }

 
  handleSubmit(event) {

    alert('Your favorite flavor is: ' + this.state.value);

    event.preventDefault();

  }

 
  render() {

    return (

      <form onSubmit={this.handleSubmit}>

        <label>

          选择您最喜欢的网站

          <select value={this.state.value} onChange={this.handleChange}>

            <option value="gg">Google</option>

            <option value="rn">Runoob</option>

            <option value="tb">Taobao</option>

            <option value="fb">Facebook</option>

          </select>

        </label>

        <input type="submit" value="提交" />

      </form>

    );

  }

}

 
ReactDOM.render(

  <FlavorForm />,

  document.getElementById('example')

);

```


#### 多个表单


```jsx

//当你有处理多个 input 元素时，你可以通过给每个元素添加一个 name 属性，来让处理函数根据 event.target.name 的值来选择做什么

//通过render渲染到指定容器中(example)

class Reservation extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      isGoing: true,

      numberOfGuests: 2

    };

 
    this.handleInputChange = this.handleInputChange.bind(this);

  }

 
  handleInputChange(event) {

    const target = event.target;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    const name = target.name;

 
    this.setState({

      [name]: value

    });

  }

 
  render() {

    return (

      <form>

        <label>

          是否离开:

          <input

            name="isGoing"

            type="checkbox"

            checked={this.state.isGoing}

            onChange={this.handleInputChange} />

        </label>

        <br />

        <label>

          访客数:

          <input

            name="numberOfGuests"

            type="number"

            value={this.state.numberOfGuests}

            onChange={this.handleInputChange} />

        </label>

      </form>

    );

  }

}

```


#### 非受控组件


> 状态（state）不由 React 组件来控制和管理的组件。它的值通常由 DOM 元素本身来管理，通过 DOM API 直接访问和修改元素的值


> React要编写一个非受控组件，可以 使用 ref 来从 DOM 节点中获取表单数据，就是非受控组件


```jsx

class NameForm extends React.Component {

  constructor(props) {

    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.input = React.createRef();

  }

  handleSubmit(event) {

    alert("A name was submitted: " + this.input.current.value);

    event.preventDefault();

  }

  render() {

    return (

      <form onSubmit={this.handleSubmit}>

        <label>

          Name:

          <input type="text" ref={this.input} />

        </label>

        <input type="submit" value="Submit" />

      </form>

    );

  }

}

ReactDOM.render(

  <NameForm />,

  document.getElementById('example')

);

```


#### 受控组件


> 状态（state）由 React 组件来控制和管理的组件。它的值通常由组件的属性（props）传递进来，并且通过事件回调函数来更新状态


> 受控组件的状态变化会被 React 监控和管理，可以方便地进行数据校验、操作以及与其他组件的交互


```jsx

class NameForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

     }

    handleChange(event) {

      this.setState({value: event.target.value});

    }

    handleSubmit(event) {

      alert('提交的名字: ' + this.state.value);

      event.preventDefault();

    }

    render() {

      return (

        <form onSubmit={this.handleSubmit}>

          <label>

            名字:

            <input type="text" value={this.state.value} onChange={this.handleChange} />

          </label>

          <input type="submit" value="提交" />

        </form>

      );

  }

}

ReactDOM.render(

  <NameForm />,

  document.getElementById('example')

);

```




### Ref的应用


#### 给标签设置ref="username"


> 通过这个获取this.refs.username , ref可以获取到应用的真实dom


#### 给组件设置ref="username"


> 通过这个获取this.refs.username ,ref可以获取到组件对象


#### 新的写法


```jsx

> myRef = React.createRef()

> <div ref={this.myRef}>hello</div>

> // 访问this.myRef.current

```


```jsx

class MyComponent extends React.Component {

  handleClick() {

    // 使用原生的 DOM API 获取焦点

    this.refs.myInput.focus();

  }

  render() {

    //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs

    return (

      <div>

        <input type="text" ref="myInput" />

        <input

          type="button"

          value="点我输入框获取焦点"

          onClick={this.handleClick.bind(this)}

        />

      </div>

    );

  }

}

 
ReactDOM.render(

  <MyComponent />,

  document.getElementById('example')

);

```


### 组件通信的方式


#### 父子组件通信方式


> 传递数据(父传子)与传递方法(子传父)


> ref标记 (父组件拿到子组件的引用，从而调用子组件的方法)

>

> 在父组件中清除子组件的input输入框的value值。**this.refs.form.reset()**


#### 非父子组件通信方式


> 状态提升(中间人模式)

>

> React中的状态提升概括来说,就是将多个组件需要共享的状态提升到它们最近的父组件上。在父组件上改变这个状态然后通过props分发给子组件


>  发布订阅模式实现


> context状态树传参

>

> 注意：GlobalContext.Consumer内必须是回调函数，通过context方法改变根组件状态

>

> 优点：跨组件访问数据

>

> 缺点：react组件树种某个上级组件shouldComponetUpdate 返回false,当context更新时，不会引起下级组件更新

>

```jsx

> // 先定义全局context对象

> import React from 'react'

> const GlobalContext = React.createContext()

> export default GlobalContext

```

>

```jsx

> // 根组件引入GlobalContext，并使用GlobalContext.Provider（生产者）

> //重新包装根组件 class App {}

> \<GlobalContext.Provider

>     value={{

>     name:"kerwin",

>     age:100,

>     content:this.state.content,

>     show:this.show.bind(this),

>     hide:this.hide.bind(this)

>     }}

> >

>     <之前的根组件></之前的根组件>

> </GlobalContext.Provider>

```

>

```jsx

> // 任意组件引入GlobalContext并调用context，使用GlobalContext.Consumer（消费者）

> <GlobalContext.Consumer>

>     \{

>         context => {

>             this.myshow = context.show; //可以在当前组件任意函数触发

>             this.myhide = context.hide;//可以在当前组件任意函数触发

>             return (

>                 <div>

>                     {context.name}-{context.age}-{context.content}

>                 </div>

>             )

>         }

>     }

> </GlobalContext.Consumer>

```


## React 数据流


> 在 React 中，数据是自顶向下单向流动的，即从父组件到子组件。这条原则让组件之间的关系变得简单且可预测


> state 与 props 是 React 组件中最重要的概念

>

> > 如果顶层组件初始化 props，那么 React 会向下遍历整棵组件树，重新尝试渲染所有相关的子组件

>

> >  state 只关心每个组件自己内部的状态，这些状态只能在组件内改变

>

> > 把组件看成一个函数，那么它接受了 props 作为参数，内部由 state 作为函数的内部参数，返回一个 Virtual DOM 的实现


### state 


#### 定义


```jsx

//方式一

class App extends Component {

  state = {

    name: "React",

    isLiked: false

  };

  render() {

    return (

      <div>

        <h1>欢迎来到{this.state.name}的世界</h1>

        <button>{this.state.isLiked ? "❤取消" : "🖤收藏"}</button>

      </div>

    );

  }

}

//方式二

class App extends Component {

  constructor() {

    super();

    this.state = {

      name: "React",

      isLiked: false

    };

  }

  render() {

    return (

      <div>

        <h1>欢迎来到{this.state.name}的世界</h1>

        <button>{this.state.isLiked ? "❤取消" : "🖤收藏"}</button>

      </div>

    );

  }

}

```


#### setState


```jsx

//当组件内部使用库内置的 setState 方法时，最大的表现行为就是该组件会尝试重新渲染。

//这很好理解，因为我们改变了内部状态，组件需要更新了。比如，我们实现了一个计数器组件：

import React, { Component } from 'react'; 

class Counter extends Component { 

 constructor(props) { 

     super(props); 

     this.handleClick = this.handleClick.bind(this); 

     this.state = { 

     	count: 0, 

     }; 

 } 

 handleClick(e) { 

     e.preventDefault();

     this.setState({ 

         count: this.state.count + 1, 

     }); 

 } 

 render() { 

     return ( 

         <div> 

             <p>{this.state.count}</p> 

             <a href="#" onClick={this.handleClick}>更新</a> 

         </div> 

     ); 

 } 

}

在 React 中常常在事件处理方法中更新 state，上述例子就是通过点击“更新”按钮不断地更新内部 count 的值，这样就可以把组件内状态封装在实现中。

值得注意的是，setState 是一个异步方法，一个生命周期内所有的 setState 方法会合并操作。

```


#### setState两个参数


>  第一个参数可以是对象，也可以是方法return一个对象，我们把这个参数叫做 updater


```jsx

//参数是对象

this.setState({

	isLiked: !this.state.isLiked

})

```


```jsx

//参数是方法

this.setState((prevState, props) => {

    return {

    	isLiked: !prevState.isLiked

    }

})

//注意的是这个方法接收两个参数，第一个是上一次的state, 第二个是props

```


```jsx

//setState 是异步的，所以想要获取到最新的state，没有办法获取，就有了第二个参数，这是一个可选的回调函数

this.setState(

  (prevState, props) => {

    return {

      isLiked: !prevState.isLiked

    };

  },

  () => {

    console.log("回调里的", this.state.isLiked);

  }

);

console.log("setState外部的", this.state.isLiked);

```




### props 


>props 是正常是外部传入的，组件内部也可以通过一些方式来初始化的设置，属性不能被组件自己更改，但可以通过父组件主动重新渲染的方式来传入新的 props


> React 的单向数据流，主要的流动管道就是 props。props 本身是不可变的。如果说要渲染一个对 props加工后的值，最简单的方法就是使用局部变量或直接在 JSX 中计算结果。


> 在组件上通过key=value 写属性,通过this.props获取属性,这样组件的可复用性提高了。

>

> 注意在传参数时候，如果写成isShow="true" 那么这是一个字符串 如果写成isShow={true} 这个

> 是布尔值

>

> \{...对象} 展开赋值


#### 默认属性值


```jsx

//通过组件类的 defaultProps 属性为 props 设置默认值

class HelloMessage extends React.Component {

  render() {

    return (

      <h1>Hello, {this.props.name}</h1>

    );

  }

}

HelloMessage.defaultProps = {

  name: 'Runoob'

};

const element = <HelloMessage/>;

ReactDOM.render(

  element,

  document.getElementById('example')

);

```


#### prop-types 属性验证


> Props 验证使用 **propTypes**，它可以保证我们的应用组件被正确使用，React.PropTypes 提供很多验证器 (validator) 来验证传入数据是否有效。当向 props 传入无效数据时，JavaScript 控制台会抛出警告。


```jsx

//React.PropTypes 在 React v15.5 版本后已经移到了 prop-types 库。

//属性 title 是必须的且是字符串，非字符串类型会自动转换为字符串

import propTypes from "prop-types";

var title = "菜鸟教程";

// var title = 123;

class MyTitle extends React.Component {

  render() {

    return (

      <h1>Hello, {this.props.title}</h1>

    );

  }

}

MyTitle.propTypes = {

  title: PropTypes.string

};

ReactDOM.render(

    <MyTitle title={title} />,

    document.getElementById('example')

);

```


#### 验证器


```jsx

MyComponent.propTypes = {

    // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的

   optionalArray: React.PropTypes.array,

    optionalBool: React.PropTypes.bool,

    optionalFunc: React.PropTypes.func,

    optionalNumber: React.PropTypes.number,

    optionalObject: React.PropTypes.object,

    optionalString: React.PropTypes.string,

 
    // 可以被渲染的对象 numbers, strings, elements 或 array

    optionalNode: React.PropTypes.node,

 
    //  React 元素

    optionalElement: React.PropTypes.element,

 
    // 用 JS 的 instanceof 操作符声明 prop 为类的实例。

    optionalMessage: React.PropTypes.instanceOf(Message),

 
    // 用 enum 来限制 prop 只接受指定的值。

    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

 
    // 可以是多个对象类型中的一个

    optionalUnion: React.PropTypes.oneOfType([

      React.PropTypes.string,

      React.PropTypes.number,

      React.PropTypes.instanceOf(Message)

    ]),

 
    // 指定类型组成的数组

    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

 
    // 指定类型的属性构成的对象

    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

 
    // 特定 shape 参数的对象

    optionalObjectWithShape: React.PropTypes.shape({

      color: React.PropTypes.string,

      fontSize: React.PropTypes.number

    }),

 
    // 任意类型加上 `isRequired` 来使 prop 不可空。

    requiredFunc: React.PropTypes.func.isRequired,

 
    // 不可空的任意类型

    requiredAny: React.PropTypes.any.isRequired,

 
    // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。

    customProp: function(props, propName, componentName) {

      if (!/matchme/.test(props[propName])) {

        return new Error('Validation failed!');

      }

    }

  }

}

```




#### State和Props简单结合使用


```jsx

class WebSite extends React.Component {

  constructor() {

      super();

      this.state = {

        name: "菜鸟教程",

        site: "https://www.runoob.com"

      }

    }

  render() {	

    return (

      <div>

        <Name name={this.state.name} />

        <Link site={this.state.site} />

      </div>

    );

  }

}

class Name extends React.Component {

  render() {

    return (

      <h1>{this.props.name}</h1>

    );

  }

}

class Link extends React.Component {

  render() {

    return (

      <a href={this.props.site}>

        {this.props.site}

      </a>

    );

  }

}

ReactDOM.render(

  <WebSite />,

  document.getElementById('example')

);

```


### 渲染数据


#### dangerouslySetInnerHTML


> React当中所有表达式的内容会被转义，如果直接输入，标签会被当成文本。需要使用 dangerouslySetHTML 属性，它允许我们动态设置 innerHTML


```jsx

class App extends React.Component {

  constructor() {

    super();

    this.state = {

      content: "<h1>React.js是一个构建UI的库</h1>"

    };

  }

  render() {

    return (

      <div

        // 注意这里是两个下下划线 __html

        dangerouslySetInnerHTML={{ __html: this.state.content }}

      />

    );

  }

}

ReactDOM.render(<App />, document.getElementById("example"));

```




## React 生命周期


### 初始化阶段


> componentWillMount: render之前最后一次修改状态的机会


> render: 只能访问this.props和this.state,不允许修改状态和DOM输出


> componentDidMount: 成功render并渲染完成真实DOM之后触发，可以修改DOM


### 运行中阶段


> componentWillReceiveProps: 父组件修改属性触发


> shouldComponentUpdate: 返回false会阻止render调用


> componentWillUpdate: 不能修改属性和状态


> render: 只能访问this.props和this.state,不允许修改状态和DOM输出


> componentDidUpdate: 可以修改DOM


### 销毁阶段


> componentWillUnmount: 在删除组件之前进行清理操作，比如计时器和事件监听器


### 新老生命周期问题


#### 老生命周期问题


> componentWillMount ,在ssr中 这个方法将会被多次调用， 所以会重复触发多遍，同时在这里如果绑定事件，将无法解绑，导致内存泄漏 ， 变得不够安全高效逐步废弃


> componentWillReceiveProps 外部组件多次频繁更新传入多次不同的 props，会导致不必要的异步请求


> componetWillupdate, 更新前记录 DOM 状态, 可能会做一些处理，与componentDidUpdate相隔时间如果过长， 会导致状态不可信


#### 新生命周期替代


> getDerivedStateFromProps 第一次的初始化组件以及后续的更新过程中(包括自身状态更新以及父传子) ，返回一个对象作为新的state，返回null则说明不需要在这里更新state

>

```jsx

> //老的生命周期的写法

>   componentDidMount() {

>     if (this.props.value !== undefined) {

>       this.setState({

>         current: this.props.value,

>       });

>     }

>   }

>   componentWillReceiveProps(nextProps) {

>     if (nextProps.value !== undefined) {

>       this.setState({

>         current: nextProps.value,

>       });

>     }

>   }

>   // 新的生命周期写法

>   static getDerivedStateFromProps(nextProps) {

>     if (nextProps.value !== undefined) {

>       return {

>         current: nextProps.value,

>       };

>     }

>     return null;

>   }

```


> getSnapshotBeforeUpdate 取代了 componetWillUpdate ,触发时间为update发生的时候，在render之后dom渲染之前返回一个值，作为componentDidUpdate的第三个参数


### 性能优化的方案


> shouldComponentUpdate

>

> 控制组件自身或者子组件是否需要更新，尤其在子组件非常多的情况下， 需要进行优化


> PureComponent

>

> PureComponent会帮你 比较新props 跟 旧的props， 新的state和老的state（值相等,或者对象含有相同的属性、且属性值相等 ），决定shouldcomponentUpdate 返回true 或者false， 从而决定要不要呼叫 render function。

>

> 注意：如果你的 state 或 props 『永远都会变』，那 PureComponent 并不会比较快，因为shallowEqual 也需要花时间。


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%B5%81%E7%A8%8B%E5%9B%BE.png" width="50%" />


<img src="https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/ES6classes%E4%B8%8EcreateClass%E6%9E%84%E5%BB%BA%E7%BB%84%E4%BB%B6%E6%96%B9%E6%B3%95%E7%9A%84%E5%BC%82%E5%90%8C.png" width="50%" />




## React 与 DOM


> 从 React 0.14 版本开始，React 将 React 中涉及 DOM 操作的部分剥离开，目的是为了抽象 React，同时适用于 Web 端和移动端。ReactDOM 的关注点在 DOM 上，因此只适用于 Web 端

>

> > 在 React 组件的开发实现中，我们并不会用到 ReactDOM，只有在顶层组件以及由于 React 模型所限而不得不操作 DOM 的时候，才会使用它


##  React Hooks


通过使用 React Hooks，可以更轻松地编写和维护 React 组件，并且可以减少类组件的使用，使代码更加简洁和可读


> React Hooks 是 React 16.8 引入的一项功能，它可以让你在无需编写类组件的情况下使用状态（state）和其他 React 特性。通过使用 Hooks，你可以在函数组件中使用状态和副作用，以及访问 React 的生命周期方法


> 优点：

>

> > 简化组件：使用函数组件代替类组件，减少了样板代码，使组件更加简洁和易于理解。

>

> > 状态管理：通过 `useState Hook` 可以在函数组件中使用状态。它可以替代类组件中的 this.state，并提供了更新状态的方法。

>

> > 副作用处理：通过 useEffect Hook 可以处理副作用，例如数据获取、订阅事件、DOM 操作等。它相当于类组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 的组合。

>

> > 自定义 Hook：你还可以创建自定义 Hook，将一些逻辑封装成可复用的函数，方便在多个组件之间共享和复用。

>

> 注意：

>

> > 必须在函数组件的顶层使用：不可以在循环、条件语句或嵌套函数中使用 Hook。

>

> > Hook 的调用顺序必须保持一致：在同一个函数组件中，Hook 的调用顺序必须保持稳定，不得跳过、重排或条件执行。


### useState


> 用于在函数组件中管理状态

>

> const [state, setstate] = useState(initialState)


```jsx

//以下是一个渲染雕塑图片的组件。点击 “Next” 按钮应该显示下一个雕塑并将 index 更改为 1，再次点击又更改为 2，以此类推。但这个组件现在不起作用

import { sculptureList } from './data.js';

export default function Gallery() {

  let index = 0;

  function handleClick() {

     alert(index)

    index = index + 1;

  }

  let sculpture = sculptureList[index];

  return (

    <>

      <button onClick={handleClick}>

        Next

      </button>

      <h2>

        <i>{sculpture.name} </i> 

        by {sculpture.artist}

      </h2>

      <h3>  

        ({index + 1} of {sculptureList.length})

      </h3>

      <img 

        src={sculpture.url} 

        alt={sculpture.alt}

      />

      <p>

        {sculpture.description}

      </p>

    </>

  );

}

```


>  handleClick() 事件处理函数正在更新局部变量 index。但存在两个原因使得变化不可见：

>

> > 局部变量无法在多次渲染中持久保存。 当 React 再次渲染这个组件时，它会从头开始渲染——不会考虑之前对局部变量的任何更改。

>

> > 更改局部变量不会触发渲染。 React 没有意识到它需要使用新数据再次渲染组件

>

> 要使用新数据更新组件，需要做两件事

>

> > 保留渲染之间的数据

>

> > 触发React使用新数据渲染组件（重新渲染）

>

> `useState Hook` 提供了这两个功能

>

> > State 变量 用于保存渲染间的数据

>

> > State setter 函数 更新变量并触发 React 再次渲染组件

>

> 使用：

>

> > 1. 要添加 state 变量，先从文件顶部的 React 中导入 useState

> >

> > >  `import { useState } from 'react';`

> >

> > 2. 替换这一行

> >

> > > let index = 0; ==> const [index, setIndex] = useState(0);

> > >

```jsx

> > > //修改方法

> > > function handleClick() {

> > >   setIndex(index + 1);

> > > }

```


```jsx

import { useState } from 'react';

import { sculptureList } from './data.js';


export default function Gallery() {

  //

  const [index, setIndex] = useState(0);

  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;

  let hasNext = index < sculptureList.length - 1;

  function handleNextClick() {

    setIndex(index + 1);

  }

  function handlePreviousClick() {

    setIndex(index - 1);

  }

  function handleMoreClick() {

    setShowMore(!showMore);

  }

  let sculpture = sculptureList[index];

  return (

    <>

      <button onClick={handlePreviousClick} disabled={!hasPrev}>

        Previous

      </button>

      <button onClick={handleNextClick} disabled={!hasNext}>

        Next

      </button>

      <h2>

        <i>{sculpture.name} </i> 

        by {sculpture.artist}

      </h2>

      <h3>  

        ({index + 1} of {sculptureList.length})

      </h3>

      <button onClick={handleMoreClick}>

        {showMore ? 'Hide' : 'Show'} details

      </button>

      {showMore && <p>{sculpture.description}</p>}

      <img 

        src={sculpture.url} 

        alt={sculpture.alt}

      />

    </>

  );

}

```


> 假设`age`是`42`. 该处理程序调用`setAge(age + 1)`三次

>

```jsx

> function handleClick() {

>   setAge(age + 1); // setAge(42 + 1)

>   setAge(age + 1); // setAge(42 + 1)

>   setAge(age + 1); // setAge(42 + 1)

> }

```

>

> 然而，一点击之后，age只会是43而不是45！这是因为调用该set函数不会更新age已运行代码中的状态变量。所以每次setAge(age + 1)调用都会变成setAge(43)

>

> > 为了解决这个问题，你可以传递一个更新函数来setAge代替下一个状态

> >

```jsx

> > function handleClick() {

> >   setAge(a => a + 1); // setAge(42 => 43)

> >   setAge(a => a + 1); // setAge(43 => 44)

> >   setAge(a => a + 1); // setAge(44 => 45)

> > }

```

> >

> > 这`a => a + 1`是您的更新程序功能。它获取待处理状态并从中计算下一个状态

> >

```jsx

> > import { useState } from 'react';

> > export default function Counter() {

> >   const [age, setAge] = useState(42);

> >   function increment() {

> >     setAge(a => a + 1);

> >   }

> >   return (

> >     <>

> >       <h1>Your age: {age}</h1>

> >       <button onClick={() => {

> >         increment();

> >         increment();

> >         increment();

> >       }}>+3</button>

> >       <button onClick={() => {

> >         increment();

> >       }}>+1</button>

> >     </>

> >   );

> > }

```


您可以将对象和数组放入状态。在 React 中，状态被认为是只读的，因此您应该替换它而不是改变现有的对象


#### form对象形式


```jsx

// 扩展{ ...form }语法确保状态对象被替换而不是被改变

import { useState } from 'react';

export default function Form() {

  const [form, setForm] = useState({

    firstName: 'Barbara',

    lastName: 'Hepworth',

    email: 'bhepworth@sculpture.com',

  });

  return (

    <>

      <label>

        First name:

        <input

          value={form.firstName}

          onChange={e => {

            setForm({

              ...form,

              firstName: e.target.value

            });

          }}

        />

      </label>

      <label>

        Last name:

        <input

          value={form.lastName}

          onChange={e => {

            setForm({

              ...form,

              lastName: e.target.value

            });

          }}

        />

      </label>

      <label>

        Email:

        <input

          value={form.email}

          onChange={e => {

            setForm({

              ...form,

              email: e.target.value

            });

          }}

        />

      </label>

      <p>

        {form.firstName}{' '}

        {form.lastName}{' '}

        ({form.email})

      </p>

    </>

  );

}

```


#### form嵌套对象形式


```jsx

import { useState } from 'react';

export default function Form() {

  const [person, setPerson] = useState({

    name: 'Niki de Saint Phalle',

    artwork: {

      title: 'Blue Nana',

      city: 'Hamburg',

      image: 'https://i.imgur.com/Sd1AgUOm.jpg',

    }

  });

  function handleNameChange(e) {

    setPerson({

      ...person,

      name: e.target.value

    });

  }

  function handleTitleChange(e) {

    setPerson({

      ...person,

      artwork: {

        ...person.artwork,

        title: e.target.value

      }

    });

  }

  function handleCityChange(e) {

    setPerson({

      ...person,

      artwork: {

        ...person.artwork,

        city: e.target.value

      }

    });

  }

  function handleImageChange(e) {

    setPerson({

      ...person,

      artwork: {

        ...person.artwork,

        image: e.target.value

      }

    });

  }

  return (

    <>

      <label>

        Name:

        <input

          value={person.name}

          onChange={handleNameChange}

        />

      </label>

      <label>

        Title:

        <input

          value={person.artwork.title}

          onChange={handleTitleChange}

        />

      </label>

      <label>

        City:

        <input

          value={person.artwork.city}

          onChange={handleCityChange}

        />

      </label>

      <label>

        Image:

        <input

          value={person.artwork.image}

          onChange={handleImageChange}

        />

      </label>

      <p>

        <i>{person.artwork.title}</i>

        {' by '}

        {person.name}

        <br />

        (located in {person.artwork.city})

      </p>

      <img 

        src={person.artwork.image} 

        alt={person.artwork.title}

      />

    </>

  );

}

```


#### 列表数组形式


```jsx

import { useState } from 'react';

import AddTodo from './AddTodo.js';

import TaskList from './TaskList.js';

let nextId = 3;

const initialTodos = [

  { id: 0, title: 'Buy milk', done: true },

  { id: 1, title: 'Eat tacos', done: false },

  { id: 2, title: 'Brew tea', done: false },

];

export default function TaskApp() {

  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {

    setTodos([

      ...todos,

      {

        id: nextId++,

        title: title,

        done: false

      }

    ]);

  }

  function handleChangeTodo(nextTodo) {

    setTodos(todos.map(t => {

      if (t.id === nextTodo.id) {

        return nextTodo;

      } else {

        return t;

      }

    }));

  }

  function handleDeleteTodo(todoId) {

    setTodos(

      todos.filter(t => t.id !== todoId)

    );

  }

  return (

    <>

      <AddTodo

        onAddTodo={handleAddTodo}

      />

      <TaskList

        todos={todos}

        onChangeTodo={handleChangeTodo}

        onDeleteTodo={handleDeleteTodo}

      />

    </>

  );

}

```


```jsx

// AddTodo.js

import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {

  const [title, setTitle] = useState('');

  return (

    <>

      <input

        placeholder="Add todo"

        value={title}

        onChange={e => setTitle(e.target.value)}

      />

      <button onClick={() => {

        setTitle('');

        onAddTodo(title);

      }}>Add</button>

    </>

  )

}

```


```jsx

// TaskList.js

import { useState } from 'react';

export default function TaskList({

  todos,

  onChangeTodo,

  onDeleteTodo

}) {

  return (

    <ul>

      {todos.map(todo => (

        <li key={todo.id}>

          <Task

            todo={todo}

            onChange={onChangeTodo}

            onDelete={onDeleteTodo}

          />

        </li>

      ))}

    </ul>

  );

}

function Task({ todo, onChange, onDelete }) {

  const [isEditing, setIsEditing] = useState(false);

  let todoContent;

  if (isEditing) {

    todoContent = (

      <>

        <input

          value={todo.title}

          onChange={e => {

            onChange({

              ...todo,

              title: e.target.value

            });

          }} />

        <button onClick={() => setIsEditing(false)}>

          Save

        </button>

      </>

    );

  } else {

    todoContent = (

      <>

        {todo.title}

        <button onClick={() => setIsEditing(true)}>

          Edit

        </button>

      </>

    );

  }

  return (

    <label>

      <input

        type="checkbox"

        checked={todo.done}

        onChange={e => {

          onChange({

            ...todo,

            done: e.target.checked

          });

        }}

      />

      {todoContent}

      <button onClick={() => onDelete(todo.id)}>

        Delete

      </button>

    </label>

  );

}

```




### useEffect | useLayoutEffect


> 用于处理副作用 | 同步执行副作用

>

```jsx

> useEffect(() => {

>     //effect

>     return () => {

>     	//cleanup

>     };

> }, [依赖的状态;空数组,表示不依赖])

```

>

> *Preview*页面改造成函数式组件，在路径上从*id=1*切换到*id=2*也会自动重新加载，比*class*组件方便

>

```jsx

> let id = props.match.params.myid

> useEffect(()=>{

>     axios.get(`/articles/${id}`).then(res => {

>         settitle(res.data.title)

>         setcontent(res.data.content)

>         setcategory(res.data.category)

>     })

> },[id])

```

>

> useEffect | useLayoutEffect区别

>

> > 简单来说就是调用时机不同， useLayoutEffect 和原来 componentDidMount & componentDidUpdate 一致，在react完成DOM更新后马上同步调用的代码，会阻塞页面渲染。而 useEffect 是会在整个页面渲染完才会调用的代码。

>

> > 在实际使用时如果想避免页面抖动（在 useEffect 里修改DOM很有可能出现）的话，可以把需要操作DOM的代码放在 useLayoutEffect 里。在这里做点dom操作，这些dom修改会和 react 做出的更改一起被一次性渲染到屏幕上，只有一次回流、重绘的代价


### useCallback


> 用于缓存回调函数，以避免不必要的重新创建

>

> 防止因为组件重新渲染，导致方法被重新创建 ，起到缓存作用*;* 只有第二个参数 变化了，才重新声明一次

>

```jsx

> var handleClick = useCallback(()=>{

> 	console.log(name)

> },[name])

> <button onClick={()=>handleClick()}>hello</button>

> //只有name改变后， 这个函数才会重新声明一次，

> //如果传入空数组， 那么就是第一次创建后就被缓存， 如果name后期改变了,拿到的还是老的name。

> //如果不传第二个参数，每次都会重新声明一次，拿到的就是最新的name.

```


### useMemo


> 用于缓存计算结果，以避免不必要的重复计算

>

> useCallback 的功能完全可以由 useMemo 所取代，如果你想通过使用 useMemo 返回一个记忆函数也是完全可以的

>

> > useCallback(fn, inputs) is equivalent to useMemo(() => fn, inputs).

>

> 区别:

>

> > useCallback 不会执行第一个参数函数，而是将它返回给你，而 useMemo 会执行第一个函数并

> > 且将函数执行结果返回给你

>

> useCallback 常用记忆事件函数，生成记忆后的事件函数并传递给子组件使用。

>

> useMemo 更适合经过函数计算得到一个确定的值，比如记忆组件。


### useRef


> 用于在函数组件中获取可变的引用

>

```jsx

> const myswiper = useRef(null);

> <Swiper ref={myswiper}/>

```


### useReducer | useContext


> 用于在函数组件中使用上下文。减少组件层次

>

```jsx

> import React from "react";

> var GlobalContext = React.createContext();

> // 注意此时的reduecer 返回值是一个对象 {isShow:false,list:[]}

> function App(props) {

>   let [state, dispatch] = useReducer(reducer, { isShow: true, list: [] });

>   return (

>     <GlobalContext.Provider

>       value={{

>         dispatch

>       }}

>     >

>       <div>

>         {state.isShow ? <div>我是选项卡</div> : null}

>         {props.children}

>       </div>

>     </GlobalContext.Provider>

>   );

> }

> function Detail() {

>   var { dispatch } = useContext(GlobalContext);

>   useEffect(() => {

>     //隐藏

>     dispatch({

>       type: "Hide",

>       payload: false

>     });

>     return () => {

>       //显示

>       dispatch({

>         type: "Show",

>         payload: true

>       });

>     };

>   }, []);

>   return <div>detail</div>;

> }

```


### 自定义hooks


> 当我们想在两个函数之间共享逻辑时，我们会把它提取到第三个函数中

>

> user开头

>

> >不遵循的话，由于无法判断某个函数是否包含对其内部 Hook的调用，React 将无法自动检查你的 Hook 是否违反了 Hook 的规则


## React Router


React Router 是 React 生态系统中使用最广泛的路由管理库，它提供了强大而灵活的功能，适用于构建各种规模和类型的单页面应用程序。它是构建现代 Web 应用的重要工具之一


> 核心概念

>

> > Router（路由器）

> >

> > > React Router 提供了多种类型的路由器，包括 BrowserRouter、HashRouter、MemoryRouter 等。它们是 React 组件，用于管理应用程序的 URL

> >

> > Route（路由）

> >

> > > Route 组件用于将特定的 URL 映射到对应的组件，定义了路径和组件之间的关系。可以使用不同的参数来匹配 URL，例如路径参数、查询参数等

> >

> > Link（链接）

> >

> > > Link 组件用于在应用程序中创建链接，可以通过点击链接来导航到指定的 URL。它会生成一个带有正确 URL 的 `` 标签，并处理点击事件

> >

> > Switch（路由切换）

> >

> > > Switch 组件用于包裹 Route 组件，只渲染第一个与当前 URL 匹配的组件。这样可以确保只有一个组件被渲染，避免多个组件同时匹配的情况

> >

> > Redirect（重定向）

> >

> > > Redirect 组件用于在导航期间重定向到另一个 URL。可以根据条件进行重定向，例如未登录用户重定向到登录页面


## Flux | Redux


Flux 和 Redux 都是用于管理应用程序状态的架构模式，它们都旨在解决在复杂应用中状态管理的问题。Redux 实际上是 Flux 架构的一种实现方式，并在此基础上进行了一些改进和简化


## React Redux


React Redux 是构建大型、复杂应用程序时的首选状态管理库。它提供了一种可靠、一致的方式来管理应用程序的状态，使得应用程序的状态管理变得更加可控和可维护


> 核心概念

>

> > Store（仓库）

> >

> > > Store 是一个保存应用程序状态的容器。它是单一的、可预测的数据源。通过使用 Redux 创建 Store，我们可以将整个应用程序的状态存储在一个统一的地方

> >

> > Action（动作）

> >

> > > Action 是描述状态变化的对象。它包含一个类型（type）和一些额外的数据（payload）。通过派发（dispatch）Action，我们可以触发状态的变化

> >

> > Reducer（减速器）

> >

> > > Reducer 是一个纯函数，用于根据收到的 Action 更新状态。它接收当前的状态和 Action 作为参数，并返回一个新的状态。Reducer 应该是一个纯函数，它不应该有副作用，而是根据输入生成新的状态

> >

> > Connect（连接）

> >

> > > Connect 是一个 React Redux 提供的高阶函数，用于将组件连接到 Redux Store。通过 Connect，我们可以将组件与 Store 中的状态进行绑定，并在状态变化时自动更新组件


##  Immutable


在 React 和 Redux 中，Immutable 数据结构常常与状态管理一起使用。通过使用 Immutable 数据结构，可以确保状态的不可变性，从而实现更高效的状态更新和比较，以及更容易实现时间旅行（time-travel）和撤销/重做等功能