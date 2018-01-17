<template>
  <div>
    <button>1</button>
    <button @click="changeTab">2</button>
    <button>3</button>

    <router-view></router-view>
    <button>foot-1</button>
    <button>foot-2</button>
    <button>foot-3</button>
    <button>foot-4</button>
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

<style>

</style>
