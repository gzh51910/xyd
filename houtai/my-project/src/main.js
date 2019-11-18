import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "./router"


Vue.config.productionTip = false
// axios.defaults.baseURL = '/api'
Vue.use(ElementUI)

// 把axios注入到use原型链上
// Vue.prototype.$axios =axios;

new Vue({
  render: h => h(App),
  // VueRouter,
  router
}).$mount('#app')