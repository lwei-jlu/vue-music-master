import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  showPlayList: false,
  playList: '',
  playIndex: '',
  playUrl: 'http://m10.music.126.net/20180130211846/5e014d0c769f630a3fa789020d2ab32c/ymusic/0b23/006a/51bf/0d8255acc1634702e1a184d446f91b88.mp3'
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
