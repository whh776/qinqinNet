import Vue from 'vue'
import App from './App.vue'
import './vant'
import './style/reset.css'
import './utils/rem'
// 引入路由
import router from './router/index'
Vue.config.productionTip = false

// 引入mock
// import mock from 'mock'

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
