import Vue from 'vue'
import Vuex from 'vuex'
import getter from './getter.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{

  },
  getter
})
export default store
