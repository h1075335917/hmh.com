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

注意：项目只能是容器的顶层子元素，不包含项目的子元素，比如上面代码的`<p>`元素就不是项目。`Grid`布局只对项目生效。

### 容器属性

Grid 布局的属性分成两类。一类定义在容器上面，称为容器属性；另一类定义在项目上面，称为项目属性。这部分先介绍容器属性。

#### display 属性

`display:grid`指定一个容器采用网格布局（块级元素）。设置行内元素使用`display:inline-grid`。
> 查看区别：[行内元素和块级元素](WEB-CSS#行内元素和块级元素)








