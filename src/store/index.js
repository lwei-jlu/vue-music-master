import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  showPlayList: false,
  playList: '',
  playIndex: '',
  playUrl: '',
  playDetail: '',
  playLyric: ''
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
