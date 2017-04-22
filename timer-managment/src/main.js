// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'

import '../static/scripts/libs/bootstrap/css/bootstrap.min.css'

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../static/scripts/libs/Font-Awesome-3.2.1/css/font-awesome.min.css'

import echarts from 'echarts'

Vue.use(Element);
Vue.use(VueResource);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
