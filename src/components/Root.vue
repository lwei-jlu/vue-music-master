<template>
  <div>
    <div class="root">
      <button>1</button>
      <button @click="changeTab">2</button>
      <button>3</button>
    </div>

    <router-view></router-view>
    <div class='footer'>
      <div style="text-align: center;">
        <button>foot-1</button>
        <button>foot-2</button>
        <button>foot-3</button>
        <button>foot-4</button>
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
    changeTab () {
      this.$router.push({path: '/root/index/top'})
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
    top: 5%;
    bottom: 90%;
    left: 0;
    right: 0;
    z-index: 1000;
  }
</style>
