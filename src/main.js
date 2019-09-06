import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import './css/style.css'
// 通过use方法加载axios插件
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
