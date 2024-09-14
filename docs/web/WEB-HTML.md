---
sidebar_position: 3
---

# WEB-HTML

## HTML表格标签

<table>
    <caption>HTML表格标签</caption>
    <colgroup><col span="2"/></colgroup>
    <thead>
        <tr><td>HTML</td><td>表格标签</td></tr>
    </thead>
    <tfoot>
        <tr><td>tfoot</td><td>定义表格的页脚</td></tr>
    </tfoot>
    <tbody>
        <tr><td>table</td><td>定义表格</td></tr>
        <tr><td>th</td><td>定义表格的表头</td></tr>
        <tr><td>tr</td><td>定义表格的行</td></tr>
        <tr><td>td</td><td>定义表格单元</td></tr>
        <tr><td>caption</td><td>定义表格标题</td></tr>
        <tr><td>colgroup</td><td>定义表格列的组</td></tr>
        <tr><td>col</td><td>定义用于表格列的属性</td></tr>
        <tr><td>thead</td><td>定义表格的页眉</td></tr>
        <tr><td>tbody</td><td>定义表格的主体</td></tr>
    </tbody>
</table>

## CSS Grid布局
```mdx-code-block
import Copyright from '@site/src/components/Copyright';

<Copyright behavior="Study" description="CSS Grid 网格布局教程" url="https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html" />
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
 
> 注意，设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。

#### grid-template-columns、grid-template-rows 属性

容器指定了网格布局以后，接着就要划分行和列。grid-template-columns属性定义每一列的列宽，grid-template-rows属性定义每一行的行高。
```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```
指定一个三行三列的网格，列宽和行高都是100px。

##### repeat()
有时候，重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用repeat()函数，简化重复的值。
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
```
repeat()接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。

repeat()重复某种模式也是可以的。
```css
.container {
    grid-template-columns: repeat(2, 100px 20px 80px);
}
```
定义了6列，第一列和第四列的宽度为100px，第二列和第五列为20px，第三列和第六列为80px。

##### auto-fill 关键字
有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充。
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
```
表示每列宽度100px，然后自动填充，直到容器不能放置更多的列。当容器足够宽，可以在一行容纳所有单元格，并且单元格宽度不固定的时候：
`auto-fill`会用空格子填满剩余宽度，而使用`auto-fit`则会尽量扩大单元格的宽度。

##### fr 关键字
为了方便表示比例关系，网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。
```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```
fr可以与绝对长度的单位结合使用，这时会非常方便。
```css
.container {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
}
```
表示，第一列的宽度为150像素，第二列的宽度是第三列的一半。

##### minmax()
minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。
```css
.container {
    grid-template-columns: 1fr 1fr minmax(100px, 1fr);
}
```
表示列宽不小于100px，不大于1fr。

##### auto 关键字
auto关键字表示由浏览器自己决定长度。
```css
.container {
    grid-template-columns: 100px auto 100px;
}
```
上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了min-width，且这个值大于最大宽度。

##### 网格线的名称
grid-template-columns属性和grid-template-rows属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。
```css
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```
上面代码指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。

网格布局允许同一根线有多个名字，比如[fifth-line row-5]。

#### grid-row-gap、grid-column-gap、grid-gap 属性
grid-row-gap属性设置行与行的间隔（行间距），grid-column-gap属性设置列与列的间隔（列间距）。










