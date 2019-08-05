
import Vue from 'vue'
import Vuex from 'vuex'
import Login from './modules/Login'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    // 在参数或者数组中,后面需要用空格, 哈哈
    // =左右需要空格
    giveVal (state, val) {
      state.list = val
      console.log(state.list)
    }

  },
  getters: {
    add (state) {
      state.list.push({name: '涵涵', age: 18})
    }
  },
  modules: {
    Login
  }


})
