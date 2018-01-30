<template>
  <div>
    <audio controls>
        <source v-bind:src="playUrl" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
import apiurl from '../../assets/js/api'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      songDetail: ''
    }
  },
  computed: {
    ...mapState([
      'showPlayList',
      'playList',
      'playIndex',
      'playUrl'
    ])
  },
  methods: {
    ...mapActions([
      'putPlayList'
    ])
  },
  created () {
    this.$http.get(apiurl + '/music/url?id=' + this.playIndex).then(res => {
      this.songDetail = res.data.data[0]
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
