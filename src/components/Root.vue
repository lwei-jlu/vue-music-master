<template>
  <div>
    <div class="root">
      <button @click="changeTab(1)">主页</button>
      <button>播放</button>
      <button @click="changeTab(3)">搜索</button>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  data () {
    return {

    }
  },
  components: {
    Footer
  },
  methods: {
    changeTab (id) {
      if (id === 1) {
        this.$router.push({path: '/root/index'})
      } else if (id === 3) {
        this.$router.push({path: '/search'})
      }
      // this.$router.push({path: '/root/search'})
    }
  }
}
</script>

<style scoped>
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
