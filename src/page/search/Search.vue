<template>
  <div>
    <div class="input-box">
      <icon name="search" @click="getSearchList" style="position:absolute;width:10%;left:0;"></icon>
      <input type="text" v-model="searchContent" placeholder="input something" @input="getSearchList">
    </div>
    <div style="position:absolute;width:15%;right:0;">取消</div>
      <ul v-if="searchList.length !== 0">
        <li v-for="(item,index) in searchList" style="border-bottom:1px solid;width:100%;">
          <p>{{item.name}} -- {{item.artists[0].name}}</p>
        </li>
      </ul>
    <Footer></Footer>
  </div>
</template>

<script>
import apiurl from '../../assets/js/api'
import Footer from '@/components/Footer'
export default {
  name: 'Search',
  data () {
    return {
      searchContent: '',
      searchList: ''
    }
  },
  components: {
    Footer
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

<style scoped>
  .input-box{
    border: 1px solid red;
    border-radius: 20px;
    position: absolute;
    width: 85%;
    height: 3%;
    padding-top: 0.5%;
  }
  .input-box input{
    width: 80%;
    border: none;
    outline:none;
    left: 5%;
  }
  ul{
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
    z-index: 1001;
    position: fixed;
  }
  li{
    list-style-type: none;
  }
</style>
