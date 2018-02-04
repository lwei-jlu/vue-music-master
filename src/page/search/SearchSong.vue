<template>
  <div v-show="showPlayList">
    <ul>
      <li v-for="(item,index) in playList" @click="turnPlay(playList[index].id)">
        {{item.name}} -- {{item.artists[0].name}}
      </li>
    </ul>
    <!-- <a v-for="(item,index) in playList">
      {{item.name}} -- {{item.artists[0].name}}
    </a> -->
  </div>
</template>

<script>
import apiurl from '../../assets/js/api'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'showPlayList',
      'playList',
      'playIndex',
      'playUrl',
      'playDetail',
      'playLyric'
    ])
  },
  methods: {
    ...mapActions([
      'putPlayList'
    ]),
    turnPlay (id) {
      this.$store.state.playIndex = id
      this.$http.get(apiurl + '/music/url?id=' + id).then(res => {
        this.$store.state.playUrl = res.data.data[0]
      }).catch(error => {
        console.log(error)
        this.$store.state.playUrl = ''
      })
      this.$http.get(apiurl + '/song/detail?ids=' + id).then(res => {
        console.log(res)
        this.$store.state.playDetail = res.data.songs[0]
      }).catch(error => {
        console.log(error)
        this.$store.state.playDetail = ''
      })
      this.$http.get(apiurl + '/lyric?id=' + id).then(res => {
        this.$store.state.playLyric = res.data.lrc.lyric
      }).catch(error => {
        console.log(error)
        this.$store.state.playLyric = ''
      })
      this.$router.push({ path: '/play' })
    }
  }
}
</script>

<style lang="scss" scoped>
  ul{
    padding: 0px;
    margin: 0px;
  }
  li{
    list-style-type: none;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  li:hover{
    background-color: #f1f1f1;
  }
</style>
