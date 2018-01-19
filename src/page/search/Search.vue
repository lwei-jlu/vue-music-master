<template>
  <div style="margin-top:15%;">
      <p>search</p>
      <input type="text" v-model="searchContent" placeholder="input something" @input="f1">
      <p>{{ searchContent }}</p>
  </div>
</template>

<script>
    export default {
      name: 'Search',
      data () {
        return {
          searchContent: ''
        }
      },
      methods: {
        f1 () {
          console.log(this.searchContent)
        }
      }
    }
</script>

<style>

</style>
