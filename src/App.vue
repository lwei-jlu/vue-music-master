<template>
  <div id="app">
    <router-view/>
    <player></player>
  </div>
</template>

<script>
import Player from './components/Player'
export default {
  name: 'app',
  components: {
    Player
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 1080px;
}
</style>
