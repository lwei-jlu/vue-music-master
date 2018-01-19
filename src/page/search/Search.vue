<template>
  <div style="margin-top:15%;">
      <p>search</p>
      <input type="text" v-model="searchContent" placeholder="input something">
      <button @click="getSearchList">搜索</button>
      <ul v-if="searchList.length !== 0">
        <li v-for="(item,index) in searchList" style="border-bottom:1px solid;width:100%;">
          <p>{{item.name}}</p>
          <p>{{item.artists[0].name}} - {{item.album.name}}</p>
        </li>
      </ul>



  </div>
</template>

<script>
import apiurl from '../../assets/js/api'
export default {
  name: 'Search',
  data () {
    return {
      searchContent: '',
      searchList: ''
    }
  },
  methods: {
    getSearchList () {
      this.$http.get(apiurl + '/search?keywords=' + this.searchContent).then(res => {
        this.searchList = res.data.result.songs
      })
    }
  }
}
</script>

<style>

</style>
