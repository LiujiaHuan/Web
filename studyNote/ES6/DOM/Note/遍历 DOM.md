# 1.子节点
* **childNode**
* **firstNode**
* **lastNode**
## **0x01 childNode 方法 是什么？**
<kbd>chilNode</kbd>集合列出了所有子节点，包括文本节点

如：展示document.body的所有子元素
```js
    for (let i = 0; i < document.body.childNodes.length; i++) {
      alert( document.body.childNodes[i] ); 
      // Text, DIV, Text, UL, ..., SCRIPT
    }
```
## **0x02 firshChild lastChild和childNode的关系？**
* **第一个子节点 and 最后一个子节点**

* **他们是同级子方法**
```js
elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild
```
## **0x03 childNode 是个集合 不是数组 如何遍历？**
使用 for ... of
```js
for (let node of document.body.childNodes) {
  alert(node); // 显示集合中的所有节点
}
```
# 2 .**兄弟节点 父节点**
* **nextSlibling**
* **previousSibling**
```js
// <body> 的父节点是 <html>
alert( document.body.parentNode === document.documentElement ); // true

// <head> 的后一个是 <body>
alert( document.head.nextSibling ); // HTMLBodyElement

// <body> 的前一个是 <head>
alert( document.body.previousSibling ); // HTMLHeadElement
```
# 3. 纯元素导航（不要类似注释 文本等节点）
* **children**
* **firstElementChild，lastElementChild — 第一个和最后一个子元素**
* **previousElementSibling，nextElementSibling — 兄弟元素**

# 详细请看WEB/P_DOM文件夹
里面放了整个导图
