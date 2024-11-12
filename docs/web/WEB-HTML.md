---
sidebar_position: 3
---

# WEB-HTML

## 表格标签

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

## `<html>`标签

> `html`标签定义HTML文档。

- `lang`：指定文档的语言。

### `<head>`标签

> `head`标签定义文档的头部。

#### `<meta>`标签

> `meta`标签定义文档的元数据。

#### `<title>`标签

> `title`标签定义文档的标题。

#### `<style>`标签

> `style`标签定义文档的样式。

### `<link>`标签

> `link`标签定义文档的外部资源。

### `<body>`标签

> `body`标签定义文档的主体内容。  

#### `<footer>`标签

> `footer`标签定义文档的页脚。

#### `<main>`标签

> `main`标签定义文档的独一无二的主体内容。

##### `<section>`标签

> `section`标签定义文档主体内容中的节。

```html
<!-- 告诉浏览器该文档是 HTML5 文档 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- 指定文档的字符编码 -->
    <meta charset="UTF-8">
    <!-- 指定视口宽度为设备宽度，初始缩放比例为1.0 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CatPhotoApp</title>
    <link href="styles.css" rel="stylesheet"/>
  </head>
  <body>  
    <main>
      <h1>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <p>Everyone loves <a href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg">cute cats</a> online!</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
    </main>
    <footer>
      <p>No Copyright - freeCodeCamp.org</p>
    </footer>
  </body>
</html>
```

#### `<div>`标签

> `div`标签定义文档中的一个块级元素。 

#### `<a>`标签

> `a`标签定义超链接，用于从一个页面链接到另一个页面。

```html
<a href="https://www.freecodecamp.org" target="_blank">
  <img src="image-link.jpg" alt="A photo of a cat.">
</a>
```

<a href="/example/html/pref.html" target="_blank">freeCodeCamp</a>

- `href`：指定链接的目标URL。
- `target`：指定链接的打开方式
  - `_blank`表示在新窗口中打开
  - `_self`表示在当前窗口中打开
  - `_parent`表示在父窗口中打开
  - `_top`表示在最顶层窗口中打开

#### `<ul>`标签

> `ul`标签定义无序列表。

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

#### `<ol>`标签

> `ol`标签定义有序列表。

```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

#### `<figure>`标签

> `figure`标签将媒体内容和描述信息组合在一起。

##### `<figcaption>`标签

> `figcaption`元素用于为`figure`元素添加标题，以描述`figure`元素中包含的图像。

```html
<figure>
  <img src="image-link.jpg" alt="A photo of a cat.">
  <figcaption>A cat</figcaption>
</figure>
```

#### `<em>`标签

> `em`标签定义强调文本。

```html
<figcaption>Cats <em>love</em> lasagna.</figcaption>
```

#### `<strong>`标签

> `strong`标签定义强调文本。

```html
<figcaption>Cats <strong>love</strong> lasagna.</figcaption>
```

#### `<form>`标签

> `form`标签定义表单。

- `action`：指定表单提交的URL。
- `method`：指定表单提交的方式
  - `post`：将表单数据发送到服务器进行处理。
  - `get`：将表单数据附加到URL的查询字符串中。

```html
<form action="/url-of-form-handler" method="post">
  <input type="text" name="name" />
</form>
```

#### `<fieldset>`标签

> `fieldset`元素用于在 Web 表单中将相关输入和标签分组在一起。

##### `<legend>`标签

> `legend`元素用于为`fieldset`元素添加标题。

#### `<label>`标签

> `label`用于帮助将输入元素的文本与输入元素本身关联起来。

#### `<input>`标签

> `input`标签定义输入控件。

- `id`：指定输入控件的唯一标识符。
- `type`：指定输入控件的类型
  - `text`：单行文本输入框。
  - `password`：密码输入框。
  - `email`：电子邮件输入框。
  - `number`：数字输入框。
  - `radio`：单选按钮。
  - `checkbox`：复选框。
- `name`：指定输入控件的名称。
- `value`：指定输入控件的值。
- `placeholder`：指定输入控件的占位符文本。
- `required`：指定输入控件为必填项。
- `checked`：指定输入控件为默认选中状态。

```html
<input type="text" name="username" placeholder="请输入用户名" required />
```

> 为了使选择一个单选按钮会自动取消选择另一个单选按钮，两个按钮的 `name` 属性必须具有相同的值。

```html
<fieldset>
  <label><input checked id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
  <label><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label>
</fieldset>
```

> 使用`for`属性将`label`与`input`关联起来。

```html
<!-- 使用for属性将label与input关联起来 -->
<input id="loving" type="checkbox"> <label for="loving"> Loving</label>
```

#### `<button>`标签

> `button`标签定义按钮。

- `type`：指定按钮的类型
  - `submit`：提交表单。
  - `reset`：重置表单。
  - `button`：普通按钮。

```html
<!-- 不带任何属性的表单按钮的默认会将表单提交到表单的action指定的位置 -->
<form action="https://freecatphotoapp.com/submit-cat-photo">
  <input type="text" name="catphotourl" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
```

## `<article>`标签

> `article`标签定义独立的内容块。

## `<hr>`标签

> `hr`标签定义水平线。

