<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 11:23:33
 * @LastEditTime: 2019-09-20 10:39:01
 * @LastEditors: Please set LastEditors
 -->
#### 阅读vue源码笔记， 更多理解看代码中的注释(2.x版本) 


### 浏览器debug常用功能
![avatar](https://github.com/lusteng/qs/blob/master/images/debug-demo.png)

引入数据检查 flow工具

 
new Vue 执行入口 src/core/index 


### 入口 src/core/instance/index.js  初始化Vue对象

初始化了一系列操作  E:\xuexi\vue\src\core\instance\init.js

### 初始化data数据
> 通过Object.defineProperty将data的key数据代理到vue对象的_data下，监听getter和setter  
E:\xuexi\vue\src\core\instance\state.js
initData 函数  
将data绑定在this._data 上
proxy 函数
Object.defineProperty 代理绑定 绑定在this的_data上

```js  
    initLifecycle(vm)  
    initEvents(vm)
    initRender(vm)
    //beforeCreate 之前执行了vue的一列表对象初始化操作
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm) //初始化data 做了一系列处理
    initProvide(vm) // resolve provide after data/props
    //created 之前执行了数据data，props的初始化操作
    callHook(vm, 'created')

```

### 数据响应式

1. 在Observe中通过Object.defineProperty 将组件的data数据转变为可观测数据
2. 将watcher存储在window.Dep.target 对象上
3. 界面数据发生变更，对象的setter中监听到数据的变化，通知Dep.notice 触发watcher更新操作，更新界面变化

 
Object.defineProperty的不足：
    无法检测数组的push，pop等变化，vue正对数组的push，pop等方法进行一次封装，在方法内加入了监听变化
    
[https://nlrx-wjc.github.io/Learn-Vue-Source-Code/reactive/object.html#_4-%E4%BE%9D%E8%B5%96%E5%88%B0%E5%BA%95%E6%98%AF%E8%B0%81](https://nlrx-wjc.github.io/Learn-Vue-Source-Code/reactive/object.html#_4-%E4%BE%9D%E8%B5%96%E5%88%B0%E5%BA%95%E6%98%AF%E8%B0%81)
