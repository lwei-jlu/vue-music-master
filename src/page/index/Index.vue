<template>
  <div>
    <div class='index'>
      <button @click="indexTurn('recommend')">个性推荐</button>
      <button @click="indexTurn('songlist')">歌单</button>
      <button @click="indexTurn('radio')">电台</button>
      <button @click="indexTurn('top')">排行榜</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    indexTurn (id) {
      this.$router.push({path: `/root/index/${id}`})
    }
  }
}
</script>

<style>
  .index{
    bottom: 85%;
    left: 0;
    right: 0;
    position: fixed;
    top: 10%;
  }
</style>
