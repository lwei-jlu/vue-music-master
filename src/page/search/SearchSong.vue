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
import axios from 'axios'
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
      'playIndex'
    ])
  },
  methods: {
    ...mapActions([
      'putPlayList'
    ]),
    turnPlay (id) {
      this.$store.state.playIndex = id
      function getUrl () {
        return axios.get(apiurl + '/music/url?id=' + id)
      }
      function getDetail () {
        return axios.get(apiurl + '/song/detail?ids=' + id)
      }

      // function getLyric () {
      //   return axios.get(apiurl + '/lyric?id' + id)
      // }

      axios.all([getUrl(), getDetail()])
        .then(axios.spread((res1, res2) => {
          // const arr = [res1, res2]
          console.log(res1.data.data[0])
        }))
      // this.$router.push({ path: '/play' })
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
  }
</style>
