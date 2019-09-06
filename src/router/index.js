import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)
const rs = path => {
    return resolve => require(['@/views/' + path], resolve)
}

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: rs('Home')
    }
  ]
})
