// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'

// 引入路由
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)
import index from './components/index.vue'

//注册路由规则
const router = new VueRouter({
  routes : [
      //重定向
      { path: '/', redirect: '/index' },
     // index 都显示 index这个组件
     { path: '/index', component: index }
  ]
})

// 引入网站的的css  
import './assets/statics/site/css/style.css';

// 关闭窗口错误提示
Vue.config.productionTip = false

// 实例化vue对象
new Vue({
  //选择器
  el:'#app',
  // 渲染App组件
  render: h => h(App),
  //挂载路由
  router // (缩写) 相当于 routes: routes
})
