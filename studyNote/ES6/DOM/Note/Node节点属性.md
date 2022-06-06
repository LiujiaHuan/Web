# Node节点的属性

## **1.DOM节点类继承关系**
https://zh.javascript.info/basic-dom-node-properties#dom-jie-dian-lei

* 继承关系图
![继承关系](https://zh.javascript.info/article/basic-dom-node-properties/dom-class-hierarchy.svg)
* instanceof检查继承
```js
alert( document.body instanceof HTMLBodyElement ); // true
alert( document.body instanceof HTMLElement ); // true
alert( document.body instanceof Element ); // true
alert( document.body instanceof Node ); // true
alert( document.body instanceof EventTarget ); // true
```
* constructor.name查看从哪里构造出来
```js
alert( document.body.constructor.name ); // HTMLBodyElement
```
## **2.nodeType**
## **3.nodeName VS tagName**
## **4.innerHTML**
## **5.outerHTML**
* 和innerHTML区别：连带着对象本身被选中和更改
```js
<div id="elem">Hello <b>World</b></div>
<script>
  alert(elem.outerHTML); // <div id="elem">Hello <b>World</b></div>
</script>
```
* 注意：写入并不会更改对象本身，需要通过Dom搜索获取对写入的新元素的引用
---
**所以，在 div.outerHTML=... 中发生的事情是：**
* 原先选中引用的元素对象 被从文档（document）中移除。
* 另一个 HTML 片段 \<p>A new element\</p> 被插入到其位置上。
* div 仍拥有其旧的值！！新的 HTML **没有被赋值给任何变量**。
---
## **6.nodeValue/data 文本节点内容**
## **7.textContent 纯文本**
* 比innerHTML更安全，不允许嵌入html