import Vue from 'vue'
import App from './App.vue'
import index from './index.vue'
import VueRouter from 'vue-router'
import routes from './router.js'
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
let vm = new Vue({
  render: h => h(index),
  router
}).$mount('#app')
