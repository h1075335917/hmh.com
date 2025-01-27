---
sidebar_position: 2
---

# WEB-CSS

## display

> `display`属性设置元素的显示方式。

```css
/* 块级元素 */
display: block;
/* 行内元素 */
display: inline;
/* 行内块级元素 */
display: inline-block;
/* 隐藏元素 */
display: none;
/* 弹性盒布局 */
display: flex;
/* 网格布局 */
display: grid;
```

## text-align

> `text-align`属性设置文本的水平对齐方式。

```css
text-align: center;
```

## background-color

> `background-color`属性设置元素的背景颜色。

```css
background-color: Burlywood;
```

## color

> `color`属性设置元素的文本颜色。

```css
color: #000;
```

## border-color

> `border-color`属性设置元素的边框颜色。

```css
border-color: #000;
```

## box-shadow

```css
/* 单阴影 */
box-shadow: h-shadow v-shadow blur spread color position;
/* 多阴影 */
box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.3), inset 0 0 10px rgba(255,255,255,0.5);
```

- h-shadow：必需。水平阴影的位置。正值将阴影置于元素右侧，负值将阴影置于左侧。
- v-shadow：必需。垂直阴影的位置。正值将阴影置于元素下方，负值将阴影置于上方。
- blur：可选。模糊半径。值越大，阴影越模糊；0 表示没有模糊（锐利的阴影）。
- spread：可选。阴影的尺寸。正值将阴影扩大，负值将阴影缩小。
- color：可选。阴影的颜色。

## background-image

> `background-image`属性设置元素的背景图像。

```css
background-image: url(image.png);
```

## max-width

> `max-width`属性设置元素的最大宽度。

```css
max-width: 100px;
```

## padding

> `padding`属性设置元素的内边距。

```css
/* 上右下左 */
padding: 10px 10px 10px 10px;
```

## margin

> `margin`属性设置元素的外边距。

```css
/* 上右下左 */
margin: 10px 10px 10px 10px;
```

## font-family

> `font-family`属性设置元素的字体。

```css
font-family: Arial, sans-serif;
```

## font-style

> `font-style`属性设置元素的字体样式。

```css
/* 斜体 */
font-style: italic;
```

## font-size

> `font-size`属性设置元素的字体大小。

```css
font-size: 16px;
```

## rgba

```css
color: rgba(0, 0, 0, 0.5);
```

- 最后一个参数表示透明度，取值范围0~1之间。

## :visited

> `:visited`伪类选择器用于选择已被访问过的链接。

```css
a:visited {
  color: purple;
}
```

## :hover

> `:hover`伪类选择器用于选择鼠标悬停在元素上的状态。

```css
a:hover {
  color: purple;
}
```

## :active

> `:active`伪类选择器用于选择鼠标点击在元素上的状态。

```css
a:active {
  color: purple;
}
```

## 行内元素和块级元素

```mdx-code-block
import Copyright from '@site/src/components/Copyright';

<Copyright behavior="参考" description="行内元素和块级元素" url="https://www.cnblogs.com/yc8930143/p/7237456.html" />
```
### 驾轻就熟

区别：
- 块级元素会独占一行，其宽度自动填满其父元素宽度；
行内元素不会独占一行，相邻的行内元素会排列在同一行里，知道一行排不下，才会换行，其宽度随元素的内容而变化
- 块级元素可以设置 width, height属性，【注意：块级元素即使设置了宽度，仍然是独占一行的】；
行内元素设置width, height无效;
- 块级元素可以设置margin 和 padding；
行内元素的水平方向的padding-left,padding-right,margin-left,margin-right 都产生边距效果，但是竖直方向的padding-top,padding-bottom,margin-top,margin-bottom都不会产生边距效果。（水平方向有效，竖直方向无效）

### 青出於蓝

行内元素与块级元素直观上的区别：
- 行内元素会在一条直线上排列，都是同一行的，水平方向排列；
块级元素各占据一行，垂直方向排列。块级元素从新行开始结束接着一个断行。
- 块级元素可以包含行内元素和块级元素；行内元素不能包含块级元素。

行内元素与块级元素属性的不同，主要是盒模型属性上：
- 行内元素设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效；

属性：
- display：inline 行内元素/内联元素
- display:block 块级元素
- display:inline-block 设置成行内块级元素。

行内块级元素和其他元素同一行（行内元素特点），可以设置元素的宽高等（块级元素特点）；
这样的元素有img input；它们为行内元素，但可以改变宽和高；

### 融会贯通

行内元素属性：
- 行内元素属性标签它和其它标签处在同一行内
- 行内元素属性标签无法设置宽度，高度 行高 距顶部距离 距底部距离
- 行内元素属性标签的宽度是直接由内部的文字或者图片等内容撑开的
- 行内元素属性标签内部不能嵌套行属性标签（a链接内不能嵌套其他链接）

块级元素属性：
- 每一个块级元素属性标签都是从新的一行开始，而且之后的元素也都会从新的一行开始（因为每一个块属性标签都会直接占据一整行的内容，导致下面的内容也只能从新的一行开始）
- 块级元素属性标签都是可以设置宽度、高度，行高，距顶部距离，距底部距离
- 块级元素属性标签的宽度假如不做设置，会直接默认为父元素宽度的100%
- 块级元素属性标签是可以直接嵌套的
- p标签中不能嵌套div标签

### 出类拔萃

CSS设置行内元素
- 水平居中
```css
div{text-align:center} /*DIV内的行内元素均会水平居中*/ 
```
- 垂直居中
```css
div{height:30px; line-height:30px} /*DIV内的行内元素均会垂直居中*/ 
```
CSS设置块级元素
- 水平居中
```css
div p{margin:0 auto; width:500px} /*块级元素p一定要设置宽度，才能相当于DIV父容器水平居中*/
```
- 垂直居中
```css
div{width:500px} /*DIV父容器设置宽度*/ 
div p{margin:0 auto; height:30px; line-height:30px} /*块级元素p也可以加个宽度， 以达到相对于DIV父容器的水平居中效果*/
```
> 在以后的实际项目中，块级元素的垂直居中布局方式可能会碰到比这个更复杂, 会尝试用inline-block去解决问题，希望后续多多关注；另外推荐各位一本书肖志华《CSS核心技术详解》

### 返璞归真

在标准文档流里面

块级元素特点：
- 总是在新行上开始，占据一整行；
- 高度，行高以及外边距和内边距都可控制；
- 宽带始终是与浏览器宽度一样，与内容无关；
- 它可以容纳内联元素和其他块元素。

行内元素特点：
- 和其他元素都在一行上；
- 高，行高及外边距和内边距部分可改变；
- 宽度只与内容有关；
- 行内元素只能容纳文本或者其他行内元素。
> 不可以设置宽高，其宽度随着内容增加，高度随字体大小而改变，内联元素可以设置外边界，但是外边界不对上下起作用，只能对左右起作用，也可以设置内边界，但是内边界在ie6中不对上下起作用，只能对左右起作用

## CSS Grid 布局

```mdx-code-block
<Copyright behavior="参考" description="CSS Grid 网格布局教程" url="https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html" />
```

### 基本概念

容器和项目、行和列、单元格、网格线

#### 容器和项目

采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）。

```html
<div>
  <div><p>1</p></div>
  <div><p>2</p></div>
  <div><p>3</p></div>
</div>
```

上面代码中，最外层的`<div>`元素就是容器，内层的三个`<div>`元素就是项目。

> 注意：项目只能是容器的顶层子元素，不包含项目的子元素，比如上面代码的`<p>`元素就不是项目。`Grid`布局只对项目生效。

### 容器属性

Grid 布局的属性分成两类。一类定义在容器上面，称为容器属性；另一类定义在项目上面，称为项目属性。这部分先介绍容器属性。

#### display 属性

`display:grid`指定一个容器采用网格布局（块级元素）。设置行内元素使用`display:inline-grid`。

> 查看区别：[行内元素和块级元素](WEB-CSS#行内元素和块级元素)

> 注意，设为网格布局以后，容器子元素（项目）的 float、display: inline-block、display: table-cell、vertical-align 和 column-\*等设置都将失效。

#### grid-template-columns/rows 属性

容器指定了网格布局以后，接着就要划分行和列。grid-template-columns 属性定义每一列的列宽，grid-template-rows 属性定义每一行的行高。

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```

指定一个三行三列的网格，列宽和行高都是 100px。

##### repeat()

有时候，重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用 repeat()函数，简化重复的值。

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
```

repeat()接受两个参数，第一个参数是重复的次数（上例是 3），第二个参数是所要重复的值。

repeat()重复某种模式也是可以的。

```css
.container {
  grid-template-columns: repeat(2, 100px 20px 80px);
}
```

定义了 6 列，第一列和第四列的宽度为 100px，第二列和第五列为 20px，第三列和第六列为 80px。

##### auto-fill 关键字

有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用 auto-fill 关键字表示自动填充。

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
```

表示每列宽度 100px，然后自动填充，直到容器不能放置更多的列。当容器足够宽，可以在一行容纳所有单元格，并且单元格宽度不固定的时候：
`auto-fill`会用空格子填满剩余宽度，而使用`auto-fit`则会尽量扩大单元格的宽度。

##### fr 关键字

为了方便表示比例关系，网格布局提供了 fr 关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为 1fr 和 2fr，就表示后者是前者的两倍。

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

fr 可以与绝对长度的单位结合使用，这时会非常方便。

```css
.container {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
}
```

表示，第一列的宽度为 150 像素，第二列的宽度是第三列的一半。

##### minmax()

minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

```css
.container {
  grid-template-columns: 1fr 1fr minmax(100px, 1fr);
}
```

表示列宽不小于 100px，不大于 1fr。

##### auto 关键字

auto 关键字表示由浏览器自己决定长度。

```css
.container {
  grid-template-columns: 100px auto 100px;
}
```

上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了 min-width，且这个值大于最大宽度。

##### 网格线的名称

grid-template-columns 属性和 grid-template-rows 属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。

```css
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```

上面代码指定网格布局为 3 行 x 3 列，因此有 4 根垂直网格线和 4 根水平网格线。方括号里面依次是这八根线的名字。

网格布局允许同一根线有多个名字，比如[fifth-line row-5]。

#### grid-row/column-gap 属性

grid-row-gap 属性设置行与行的间隔（行间距），grid-column-gap 属性设置列与列的间隔（列间距）。

grid-gap 属性是 grid-column-gap 和 grid-row-gap 的合并简写形式：`grid-gap: <grid-row-gap> <grid-column-gap>;`

:::tip

根据最新标准，上面三个属性名的 grid-前缀已经删除，grid-column-gap 和 grid-row-gap 写成 column-gap 和 row-gap，grid-gap 写成 gap。

:::

#### grid-template-areas 属性

网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。grid-template-areas 属性用于定义区域。

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas:
    "a b c"
    "d e f"
    "g h i";
}
```

上面代码先划分出 9 个单元格，然后将其定名为 a 到 i 的九个区域，分别对应这九个单元格。

多个单元格合并成一个区域的写法如下。

```css
.container {
  grid-template-areas:
    "a b c"
    "d e f"
    "g h i";
}
```

上面代码将 9 个单元格分成 a、b、c 三个区域。

如果某些区域不需要利用，则使用"点"（.）表示。

```css
.container {
  grid-template-areas:
    "a . c"
    "d . f"
    "g . i";
}
```

上面代码中，中间一列为点，表示没有用到该单元格，或者该单元格不属于任何区域。
:::tip

注意，区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为区域名-start，终止网格线自动命名为区域名-end。

比如，区域名为 header，则起始位置的水平网格线和垂直网格线叫做 header-start，终止位置的水平网格线和垂直网格线叫做 header-end。

:::

#### grid-auto-flow 属性

划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行，即下图数字的顺序。

这个顺序由 grid-auto-flow 属性决定，默认值是 row，即"先行后列"。也可以将它设成 column，变成"先列后行"。

#### justify/align-items 属性

justify-items 属性设置单元格内容的水平位置（左中右），align-items 属性设置单元格内容的垂直位置（上中下）。

```css
-- center|stretch .container {
  justify-items: start;
  align-items: start;
}
```

这两个属性的写法完全相同，都可以取下面这些值：

- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（默认值）。

place-items 属性是 align-items 属性和 justify-items 属性的合并简写形式：`place-items: <align-items> <justify-items>;`

#### justify/align-content 属性

justify-content 属性是整个内容区域在容器里面的水平位置（左中右），align-content 属性是整个内容区域的垂直位置（上中下）。

```css
-- space-between|space-evenly .container {
  justify-content: start;
  align-content: start;
}
```

这两个属性的写法完全相同，都可以取下面这些值：

- start - 对齐容器的起始边框。
- end - 对齐容器的结束边框。
- center - 容器内部居中。
- stretch - 项目大小没有指定时，拉伸占据整个网格容器。
- space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。
- space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。
- space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。

place-content 属性是 align-content 属性和 justify-content 属性的合并简写形式：`place-content: <align-content> <justify-content>`

#### grid-auto-columns/rows 属性

有时候，一些项目的指定位置，在现有网格的外部。比如网格只有 3 列，但是某一个项目指定在第 5 行。这时，浏览器会自动生成多余的网格，以便放置项目。

grid-auto-columns 属性和 grid-auto-rows 属性用来设置，浏览器自动创建的多余网格的列宽和行高。
它们的写法与 grid-template-columns 和 grid-template-rows 完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。

```css
-- 代码指定新增的行高统一为50px（原始的行高为100px）。 .container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-rows: 50px;
}
```

### 项目属性

#### grid-column/row-start/end 属性

项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。

- grid-column-start 属性：左边框所在的垂直网格线
- grid-column-end 属性：右边框所在的垂直网格线
- grid-row-start 属性：上边框所在的水平网格线
- grid-row-end 属性：下边框所在的水平网格线

#### grid-column/row 属性

grid-column 属性是 grid-column-start 和 grid-column-end 的合并简写形式，grid-row 属性是 grid-row-start 属性和 grid-row-end 的合并简写形式。

```
.item {
  grid-column: <start-line> / <end-line>;
  grid-row: <start-line> / <end-line>;
}
```

#### grid-area 属性

grid-area 属性指定项目放在哪一个区域。

```css
-- 这1号项目位于e区域 .item-1 {
  grid-area: e;
}
```

grid-area 属性还可用作 grid-row-start、grid-column-start、grid-row-end、grid-column-end 的合并简写形式，直接指定项目的位置。

```
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

#### justify/align-self 属性

justify-self 属性设置单元格内容的水平位置（左中右），align-self 属性设置单元格内容的垂直位置（上中下），跟[justify/align-items 属性](#justifyalign-items-属性)属性的用法完全一致，也是只作用于单个项目。

## Flex 布局 

```mdx-code-block
<Copyright behavior="参考" description={["Flex 网格布局教程", "CSS Flexbox"]} url={["https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html", "https://www.w3school.com.cn/css/css3_flexbox.asp"]} />
```

布局的传统解决方案，基于盒状模型，依赖 display 属性 + position 属性 + float 属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

2009 年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。Flex 布局将成为未来布局的首选方案。

### 基本概念

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

```css
.container {
  display: flex;
}
```

行内元素也可以使用 Flex 布局。

```css
.container {
  display: inline-flex;
}
```

Webkit 内核的浏览器，必须加上-webkit 前缀。

```css
.container {
  display: -webkit-flex; /* Safari */
  display: flex;
}
```

> 注意，设为 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end；交叉轴的开始位置叫做 cross start，结束位置叫做 cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size。

```mdx-code-block
import flexContainer from '/img/docs/web/html/HTML-flex-container.png';

<img src={flexContainer} alt="HTML-flex-container" width="50%" />
```

### 容器的属性

#### flex-direction 属性

flex-direction 属性决定主轴的方向（即项目的排列方向）。

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。

#### flex-wrap 属性

默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap 属性定义，如果一条轴线排不下，如何换行。

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- nowrap（默认）：不换行。
- wrap：换行，第一行在上方。
- wrap-reverse：换行，第一行在下方。

#### flex-flow 属性

flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap。

```css
.container {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

#### justify-content 属性

justify-content 属性定义了项目在主轴上的对齐方式。

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around
    | space-evenly;
}
```

- flex-start/start/left（默认值）：左对齐
- flex-end/end/right：右对齐
- center： 居中
- space-between：两端对齐，项目之间的间隔相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。
- space-evenly：项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。

#### align-items 属性

align-items 属性定义项目在交叉轴上如何对齐。

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- flex-start/start/top：交叉轴的起点对齐。
- flex-end/end/bottom：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。

#### align-content 属性

align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around |
    space-evenly | stretch;
}
```

- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴。

### 项目的属性

#### order 属性

order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。

```css
.item {
  order: <integer>;
}
```

#### flex-grow 属性

flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

如果所有项目的 flex-grow 属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的 flex-grow 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项目多一倍。

#### flex-shrink 属性

flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。负值对该属性无效。

#### flex-basis 属性

flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

它可以设为跟 width 或 height 属性一样的值（比如 350px），则项目将占据固定空间。

#### flex 属性

flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。

```css
.item {
  flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" >];
}
```

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

#### align-self 属性

align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

### Flexbox 响应式布局

#### 响应式图片库

```css
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* 创建并排的四个等列 */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

/* 响应式布局 - 创建两列而不是四列布局 */
@media (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* 响应式布局 - 创建上下堆叠而不是并排的两列布局 */
@media (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
```

#### 响应式网站

```css
/* 列容器 */
.row {
  display: flex;
  flex-wrap: wrap;
}

/* 响应式布局 - 当屏幕小于 700 像素宽时，让两列堆叠而不是并排 */
@media screen and (max-width: 700px) {
  .row,
  .navbar {
    flex-direction: column;
  }
}
```
