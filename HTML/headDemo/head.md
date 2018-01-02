### `HTML <head>` 元素
>`<head>` 元素包含了所有的头部标签元素。在 <head>元素中你可以插入脚本（scripts）, 样式文件（CSS），及各种meta信息。

可以添加在头部区域的元素标签为: 
* `<title>`
* `<style>`
* `<meta>`
* `<link>`
* `<script>`
* `<noscript>`
* `<base>`

### HTML <title> 元素
`<title>` 标签定义了不同文档的标题。
`<title>` 在 HTML/XHTML 文档中是必须的。
`<title>` 元素:

* 定义了浏览器工具栏的标题
* 当网页添加到收藏夹时，显示在收藏夹中的标题
* 显示在搜索引擎结果页面的标题

```html
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>文档标题</title>
</head>
 
<body>
文档内容......
</body>
 
</html>
```

### HTML <base> 元素
`<base>` 标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接:


```html
<head>
<base href="http://www.runoob.com/images/" target="_blank">
</head>
```