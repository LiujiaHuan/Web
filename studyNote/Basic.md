# 0x01.基础知识

## 实例化

**每个 Vue 应用都需要通过实例化 Vue 来实现。**

```javascript
var vm = new Vue({
  // 选项
})
```

## 构造器格式

```html
<div id="vue_det">			<!-- 这里的id和构造器的id绑定了-->
    <h1>site : {{site}}</h1>
    <h1>url : {{url}}</h1>
    <h1>{{details()}}</h1>
</div>
<script type="text/javascript">
  <!-- 这里是构造器-->
    var vm = new Vue({
        el: '#vue_det',<!-- 与div的id绑定-->
        data: {
            site: "菜鸟教程",
            url: "www.runoob.com",
            alexa: "10000"
        },
        methods: {
            details: function() {
                return  this.site + " - 学的不仅是技术，更是梦想！";
            }
        }
    })
</script>
```

https://www.runoob.com/try/try.php?filename=vue2-start1

**data** 用于定义属性，实例中有三个属性分别为：site、url、alexa。

**methods** 用于定义的函数，可以通过 return 来返回函数值。

**{{ }}** 用于输出对象属性和函数返回值。

## 效果

当一个 Vue 实例被创建时，它向 Vue 的响应式系统中加入了其 data 对象中能找到的所有的属性。当这些属性的值发生改变时，html 视图将也会产生相应的变化。

## 数据关系

```html
<div id="vue_det">
    <h1>site : {{site}}</h1>
    <h1>url : {{url}}</h1>
    <h1>Alexa : {{alexa}}</h1>
</div>
<script type="text/javascript">
// 我们的数据对象
var data = { site: "菜鸟教程", url: "www.runoob.com", alexa: 10000}
var vm = new Vue({
    el: '#vue_det',
    data: data
})
// 它们引用相同的对象！
document.write(vm.site === data.site) // true
document.write("<br>")
// 设置属性也会影响到原始数据
vm.site = "Runoob"
document.write(data.site + "<br>") // Runoob
 
// ……反之亦然
data.alexa = 1234
document.write(vm.alexa) // 1234
</script>
```

https://www.runoob.com/try/try.php?filename=vue2-start2

构造器构造了vm,引用了data作为wm的data,他们的数据是共享的,不管修改那个另外一个都会被修改

## 实例属性与方法

前缀$,用来区分用户自定义的属性区分开来

实例

```html
<div id="vue_det">
    <h1>site : {{site}}</h1>
    <h1>url : {{url}}</h1>
    <h1>Alexa : {{alexa}}</h1>
</div>
<script type="text/javascript">
// 我们的数据对象
var data = { site: "菜鸟教程", url: "www.runoob.com", alexa: 10000}
var vm = new Vue({
    el: '#vue_det',
    data: data
})
 
document.write(vm.$data === data) // true
document.write("<br>") 
document.write(vm.$el === document.getElementById('vue_det')) // true
</script>
```

# 0x02模板语法

## 文本

用大括号扩起来

```html
<div id="app">
  <p>{{ message }}</p>
</div>
```

## html标签

```html
<div id="app">
    <div v-html="message"></div>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    message: '<h1>菜鸟教程</h1>'
  }
})
</script>
```

## 属性

**HTML 属性中的值应使用 v-bind 指令。**



这一块不太好理解,大概是把一个checkbox类型的input绑定到vue类型的use里面(这样子你打勾或者不打就改变了use的值),然后再用v-bind把div标签的class属性的值绑定到app(Vue)的use值上



**坑**:这里用了一个v-model,推测是数据绑定,详细见用户输入

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - 菜鸟教程(runoob.com)</title>
</head>
<style>
.class1{
  background: #444;
  color: #eee;
}
</style>
<body>
<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>

<div id="app">
  <label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
  <br><br>
  <div v-bind:class="{'class1': use}">
    v-bind:class 指令
  </div>
</div>
    
<script>
new Vue({
    el: '#app',
  data:{
      use: false
  }
});
</script>
</body>
```

https://www.runoob.com/try/try.php?filename=vue2-v-bind

## 表达式

Vue.js 都提供了完全的 JavaScript 表达式支持。

实例https://www.runoob.com/try/try.php?filename=vue2-js-expr

## v-指令

指令是带有 **v- 前缀**的特殊属性。

指令**用于在表达式的值改变时，将某些行为应用到 DOM** 上。如下例子：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - 菜鸟教程(runoob.com)</title>
<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
</head>
<body>
<div id="app">
    <p v-if="seen">现在你看到我了</p>
    <template v-if="ok">
      <h1>菜鸟教程</h1>
      <p>学的不仅是技术，更是梦想！</p>
      <p>哈哈哈，打字辛苦啊！！！</p>
    </template>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    seen: true,
    ok: true
  }
})
</script>
</body>
</html>
```

这里， v-if 指令将根据表达式 seen 的值(true 或 false )来决定是否插入 p 元素。

### 参数

#### v-bind(value-bind)

```html
<div id="app">
    <pre><a v-bind:href="url">菜鸟教程</a></pre>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    url: 'http://www.runoob.com'
  }
})
</script>
```

在这里 href 是参数，告知 v-bind 指令将该元素的 href 属性与表达式 url 的值绑定。

#### V-on

事件绑定给元素

```html
<a v-on:click="doSomething">
```

#### v-model

在 input 输入框中我们可以使用 v-model 指令来实现双向数据绑定：

### 修饰符

修饰符是以半角句号 **.** 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，**.prevent** 修饰符告诉 **v-on** 指令对于触发的事件调用 **event.preventDefault()**：

```html
<form v-on:submit.prevent="onSubmit"></form>
```

## 用户输入

在 input 输入框中我们可以使用 v-model 指令来实现双向数据绑定:

https://www.runoob.com/try/try.php?filename=vue2-v-model

```html
<div id="app">
    <p>{{ message }}</p>
    <input v-model="message">
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  }
})
</script>
```

这里,我们解决了前面的那个坑了,,,,,详细见属性部分



**v-model** 指令用来在 **input、select、textarea、checkbox、radio** 等表单控件元素上创建双向数据绑定，根据表单上的值，自动更新绑定的元素的值。



按钮的事件我们可以使用 **v-on 监听事件**，并对用户的输入进行响应。

以下实例在用户点击按钮后对字符串进行反转操作：

https://www.runoob.com/try/try.php?filename=vue2-reverse-message

```html
<div id="app">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">反转字符串</button>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
</script>
```

**知识补充**:	.split()函数把所有元素打散    .reverse()把元素进行逆置,.join(),吧元素合并成数组



## 过滤器

Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化。由"管道符"指示, 格式如下：

```html
<!-- 在两个大括号中 -->
{{ message | capitalize }}

<!-- 在 v-bind 指令中 -->
<div v-bind:id="rawId | formatId"></div>
```

过滤器函数接受表达式的值作为第一个参数。



例子	对输入的字符串第一个字母转为大写：

```html
<div id="app">
  {{ message | capitalize }}
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    message: 'runoob'
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
</script>
```

**知识补充**:toString()就是变成字符串,aaaaa.charAt(x)就是返回aaaaa字符串下标为x的字符,string.slice(n,m)就是截取string第n到m,n包含,m不包含,如果没有m就是从n往后所有的

关于slicehttps://www.runoob.com/jsref/jsref-slice-string.html



过滤器串联

{{ message | filterA | filterB }}

过滤器接受参数

{{ message | filterA('arg1', arg2) }}这里，message 是第一个参数，字符串 'arg1' 将传给过滤器作为第二个参数， arg2 表达式的值将被求值然后传给过滤器作为第三个参数。

## 缩写

Vue.js 为两个最为常用的指令提供了特别的缩写：

### 1.v-bind

```html
 <!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>
```

### 2.v-on

```html
<!-- 完整语法 -->
<a v-on:click="doSomething"></a>
<!-- 缩写 -->
<a @click="doSomething"></a>
```

# 0x03语句

## 条件语句

### 1.v-if指令

详见0x02的v-指令

https://www.runoob.com/try/try.php?filename=vue2-v-if

### 2.v-else

可以用 v-else 指令给 v-if 添加一个 "else" 块：

https://www.runoob.com/try/try.php?filename=vue2-v-if-else

随机生成一个数字，判断是否大于0.5，然后输出对应信息：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - 菜鸟教程(runoob.com)</title>
<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
</head>
<body>
<div id="app">
	<div v-if="Math.random() > 0.5">
	  Sorry
	</div>
	<div v-else>
	  Not sorry
	</div>
</div>
	
<script>
new Vue({
  el: '#app'
})
</script>
</body>
</html>
```

else块自动匹配v-if块

### 3.v-else-if

v-else-if 在 2.1.0 新增，顾名思义，用作 v-if 的 else-if 块。可以链式的多次使用：

```html
<div id="app">
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    type: 'C'
  }
})
</script>
```

### 4.v-show

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - 菜鸟教程(runoob.com)</title>
<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
</head>
<body>
<div id="app">
    <h1 v-show="ok">Hello!</h1>
</div>
	
<script>
new Vue({
  el: '#app',
  data: {
    ok: true
  }
})
</script>
</body>
</html>
```

## 循环语句

v-for语句

### 渲染列表/整数

v-for 指令需要以 **site in sites** 形式的特殊语法， sites 是源数据数组并且 site 是数组元素迭代的别名。

v-for 可以绑定数据到数组来渲染一个列表：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - 菜鸟教程(runoob.com)</title>
<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
</head>
<body>
<div id="app">
  <ol>
    <li v-for="a in sites">
      {{ a.name }}
    </li>
  </ol>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    sites: [
      { name: 'Runoob' },
      { name: 'Google' },
      { name: 'Taobao' }
    ]
  }
})
</script>
</body>
</html>
```

在<template>标签使用v-for

```html
<ul>
  <template v-for="site in sites">
    <li>{{ site.name }}</li>
    <li>--------------</li>
  </template>
</ul>
```





渲染整数

```html
<div id="app">
  <ul>
    <li v-for="n in 10">
     {{ n }}
    </li>
  </ul>
</div>
```

### 渲染对象的属性

```html
<div id="app">
  <ul>
    <li v-for="value in object">
    {{ value }}
    </li>
  </ul>
</div>
 
<script>
new Vue({
  el: '#app',
  data: {
    object: {
      name: '菜鸟教程',
      url: 'http://www.runoob.com',
      slogan: '学的不仅是技术，更是梦想！'
    }
  }
})
</script>
```

或者带上key(kv串)

```html
<div id="app">
  <ul>
    <li v-for="(value, key) in object">
    {{ key }} : {{ value }}
    </li>
  </ul>
</div>
```

第三个参数是索引值

```html
<div id="app">
  <ul>
    <li v-for="(value, key, index) in object">
     {{ index }}. {{ key }} : {{ value }}
    </li>
  </ul>
</div>
```

**总结一下**,从有第二个参数开始.第一个参数就是value,第二个参数就是key,第三个参数就是索引

# 0x04计算,监听属性

## 计算属性

计算属性关键词: **computed**。

计算属性在处理一些复杂逻辑时是很有用的。

可以看下以下反转字符串的例子：https://www.runoob.com/try/try.php?filename=vue2-str-reverse1

```html
<div id="app">
  {{ message.split('').reverse().join('') }}
</div>
```

模板变的很复杂起来，也不容易看懂理解。



### 下面,来看看计算属性的实例

```html
<div id="app">
  <p>原始字符串: {{ message }}</p>
  <p>计算后反转字符串: {{ reversedMessage }}</p>
</div>
 
<script>
var vm = new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
</script>
```

声明了一个计算属性 reversedMessage 。

提供的函数将用作属性 vm.reversedMessage 的 getter 。

vm.reversedMessage 依赖于 vm.message，在 vm.message 发生改变时，vm.reversedMessage 也会更新。



### JS语法  属性的getter和setter

第一种是 **数据属性**。我们已经知道如何使用它们了。到目前为止，我们使用过的所有属性都是数据属性。

第二种类型的属性是新东西。它是 **访问器属性（accessor properties）**。它们本质上是用于获取和设置值的函数，但从外部代码来看就像常规属性。

```html
let obj = {
  get propName() {
    // 当读取 obj.propName 时，getter 起作用
  },

  set propName(value) {
    // 当执行 obj.propName = value 操作时，setter 起作用
  }
};
```

详细看这个链接

https://zh.javascript.info/property-accessors

### computed vs methods

我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是**基于它的依赖缓存**，只有相关依赖发生改变时才会重新取值。而使用 methods ，在**重新渲染的时候**，函数总会重新调用执行。



可以说使用 computed 性能会更好，但是如果你不希望缓存，你可以使用 methods 属性。



### 缺省

computed 属性默认只有 getter,也就是缺省状态都是getter,然而你当然可以显示的声明get:function或者是set:function(value)



例如

```javascript
var vm = new Vue({
  el: '#app',
  data: {
    name: 'Google',
    url: 'http://www.google.com'
  },
  computed: {
    site: {
      // getter
      get: function () {
        return this.name + ' ' + this.url
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.name = names[0]
        this.url = names[names.length - 1]
      }
    }
  }
})
// 调用 setter， vm.name 和 vm.url 也会被对应更新,原来的data就通过计算属性site的getter被替换了
vm.site = '菜鸟教程 http://www.runoob.com';
document.write('name: ' + vm.name);
document.write('<br>');
document.write('url: ' + vm.url);
```

## 监听属性

通过 watch 来响应数据的变化。

以下实例通过使用 watch 实现计数器：

```javascript
<div id = "app">
    <p style = "font-size:25px;">计数器: {{ counter }}</p>
    <button @click = "counter++" style = "font-size:25px;">点我</button>
</div>
<script type = "text/javascript">
var vm = new Vue({
    el: '#app',
    data: {
        counter: 1
    }
});
vm.$watch('counter', function(nval, oval) {
    alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
});
</script>
```

以下实例进行**千米**与**米**之间的换算：

```javascript
<div id = "computed_props">
    千米 : <input type = "text" v-model = "kilometers">
    米 : <input type = "text" v-model = "meters">
</div>
<p id="info"></p>
<script type = "text/javascript">
    var vm = new Vue({
    el: '#computed_props',
    data: {
        kilometers : 0,
        meters:0
    },
    methods: {
    },
    computed :{
    },
    watch : {
        kilometers:function(val) {
            this.kilometers = val;
            this.meters = this.kilometers * 1000
        },
        meters : function (val) {
            this.kilometers = val/ 1000;
            this.meters = val;
        }
    }
    });
    // $watch 是一个实例方法
    vm.$watch('kilometers', function (newValue, oldValue) {
    // 这个回调将在 vm.kilometers 改变后调用
    document.getElementById ("info").innerHTML = "修改前值为: " + oldValue + "，修改后值为: " + newValue;
})
</script>
```

watch 对象创建了 data 对象的两个监控方法： kilometers 和 meters。当我们再输入框输入数据时，watch 会实时监听数据变化并改变自身的值。
