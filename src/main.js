import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from '@/config/axios.js'
import baseUrl from '@/config/baseUrl.js'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
import 'font-awesome/css/font-awesome.css'
import store from '@/store'
import jquery from 'jquery'



Vue.config.productionTip = false
Vue.prototype.$baseUrl = baseUrl
Vue.use(axios)
Vue.use(elementui)
Vue.use(Mint)
new Vue({
  router,
  store,
  jquery,
  render: h => h(App)
}).$mount('#app')
