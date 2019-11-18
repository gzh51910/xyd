import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './state.js'
import { mutations } from './mutations.js'
import {common} from './common.js'

Vue.use(Vuex)


  // 4. 把store导出并注入Vue实例
  export default  new Vuex.Store({
		state,
		mutations,
		common
  });