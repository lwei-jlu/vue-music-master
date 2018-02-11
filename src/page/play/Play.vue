<template>
  <div>
    <!-- <div>
      <img v-bind:src="playDetail.al.picUrl" style="width:500px;">
    </div> -->
    <audio controls>
        <source v-bind:src="playUrl.url" type="audio/mpeg">
    </audio>
    <div>
      <i class="fas fa-random fa-2x"></i>
      <i class="fas fa-step-backward fa-2x"></i>
      <i class="far fa-play-circle fa-2x"></i>
      <i class="far fa-pause-circle fa-2x"></i>
      <i class="fas fa-step-forward fa-2x"></i>
      <i class="fas fa-list-ul fa-2x"></i>
    </div>
  </div>
</template>

<script>
// import apiurl from '../../assets/js/api'
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
    ])
  },
  created () {
    // this.$http.get(apiurl + '/music/url?id=' + this.playIndex).then(res => {
    //   this.songDetail = res.data.data[0]
    // })
  }
}
</script>

<style lang="scss" scoped>

</style>
