import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)
const state = {
  //相当于data对象,里面包含n个可变属性数据
  count: 1 //初始化状态数据
}
const mutations = {
  //一个包含n个直接更新状态数据方法的对象,此对象内不要包含异步代码和逻辑代码,异步和逻辑放在action内
  INCREMENT(state) {
    //增加的mutation
    state.count++

  },
  DECREMENT(state) {
    //减少的mutation
    state.count--
  }
}
const actions = {
  //一个包含n个间接更新状态数据方法的对象,此对象内可以包含异步代码和逻辑代码
  ifOddIncrement({commit, state}) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  asyncIncrement({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }

}
const getters = {
  //一个包含n个基于state数据的getter计算属性的方法对象
  evenOrAdd(state) {
    return state.count % 2 === 1 ? '奇数' : '偶数'
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})