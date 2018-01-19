<template>
  <div>
    <div class="root">
      <button @click="changeTab(1)">主页</button>
      <button>播放</button>
      <button @click="changeTab(3)">搜索</button>
    </div>

    <router-view></router-view>
    <div class='footer'>
      <div style="text-align: center;">
        <button>发现音乐</button>
        <button>我的音乐</button>
        <button>朋友</button>
        <button>帐号</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    changeTab (id) {
      if (id === 1) {
        this.$router.push({path: '/root/index'})
      } else if (id === 3) {
        this.$router.push({path: '/root/search'})
      }
      // this.$router.push({path: '/root/search'})
    }
  }
}
</script>

<style scoped>
  .footer{
    position: fixed;
    /* top: 90%; */
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  .root{
    position: fixed;
    top: 0%;
    bottom: 90%;
    padding-top: 5%;
    left: 0;
    right: 0;
    z-index: 1000;
  }
</style>
