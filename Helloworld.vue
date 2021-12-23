<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - 菜鸟教程(runoob.com)</title>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
</head>
<body>






<div id="app">
  <p>{{ message }}</p>
</div>

<script>
new Vue({//新创建实例
  el: '#app',//绑定div标签,仅对绑定的div的子内容生效
  data: {
    message: 'Hello Vue.js!'
  }
})
</script>









</body>
</html>
