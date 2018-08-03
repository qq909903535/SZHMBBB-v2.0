// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'



// 引入网站的的css
import './assets/statics/site/css/style.css';

// 关闭窗口错误提示
Vue.config.productionTip = false

// 实例化vue对象
new Vue({
  //选择器
  el:'#app',
  // 渲染App组件
  render: h => h(App)
})
