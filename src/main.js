// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 主要VUE
import App from './Index'
// 引入element ui
import Elementui from 'element-ui'
// 引入ROUTER
import Router from 'vue-router'
// 引入CSS样式
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Elementui)
Vue.use(Router)
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
