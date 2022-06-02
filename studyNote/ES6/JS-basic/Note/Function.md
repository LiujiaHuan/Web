# 有意思的地方
## **匿名函数 + 回调函数**
```js
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```
传入的 yes no 是两个匿名函数。
## 函数表达式
```js
let sayHi = function() {
  alert( "Hello" );
};
```