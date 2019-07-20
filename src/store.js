import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timeToExpire: 172800000 // set default expiration time to two days from now
  }
  ,
  mutations: {
    updateTimeToExpire(state) {
      state.timeToExpire -= 1000
    }
  },
  actions: {
    startTime(context){
      setInterval(() =>{
          context.commit('updateTimeToExpire')
      }, 1000)
    }
  }
})
