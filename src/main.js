// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 主要VUE
import App from './Index'
// 引入element ui
import Elementui from 'element-ui'
// 引入ROUTER
import router from './router/router'
// 引入CSS样式
import '../node_modules/element-ui/lib/theme-chalk/index.css'
// 引入VUEX
import store from './store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Elementui)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
