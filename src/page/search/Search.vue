<template>
  <div>
    <!-- <div class="input-box">
      <icon name="search" @click="getSearchList" style="position:absolute;width:10%;left:0;"></icon>
      <input type="text" v-model="searchContent" placeholder="input something" @input="getSearchList">
      <p style="display:inline;float:right;" @click="toIndex">取消</p>
    </div> -->

    <div>
      <icon name="search" @click="getSearchList"></icon>
      <input type="text" v-model="searchContent" placeholder="input something" @input="getSearchList">
      <p style="display:inline" @click="toIndex">取消</p>
    </div>

    <!-- <div style="position:absolute;width:15%;right:0;" @click="toIndex">取消</div> -->
    <!-- <ul v-show="showKeySearch" class="keySearchUl">
      <li v-for="(item,index) in searchList" style="border-bottom:1px solid;width:100%;">
        <p>{{item.name}} -- {{item.artists[0].name}}</p>
      </li>
    </ul> -->
    <div v-show="showKeySearch" class="keySearchUl">
      <div style="background-color: #dad6d6;padding-top: 10px;padding-bottom: 10px;">搜索<span style="display:inline;margin-left: 30px;">{{ searchContent }}</span></div>
      <a v-for="(item,index) in searchList">
        {{item.name}} -- {{item.artists[0].name}}
      </a>
    </div>

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
      searchList: '',
      showKeySearch: false
    }
  },
  components: {
    Footer
  },
  methods: {
    getSearchList () {
      this.$http.get(apiurl + '/search?keywords=' + this.searchContent).then(res => {
        if (res.data.code === 200) {
          this.showKeySearch = true
          this.searchList = res.data.result.songs
        } else {
          this.showKeySearch = false
        }
      })
    },
    toIndex () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
$test: 20px;

.input-box {
  border: 1px solid red;
  border-radius: $test;

  width: 85%;
  height: 3%;
  padding-top: 0.5%;
}
.input-box input {
  width: 80%;
  border: none;
  outline: none;
  left: 5%;
}
// ul {
//   padding: 0px;
//   margin: 0px;
//   display: flex;
//   flex-wrap: wrap;
//   z-index: 1001;
//   position: fixed;
// }
// li {
//   list-style-type: none;
// }
.keySearchUl {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 50%;
  margin-left: 25%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  a {
    border-bottom: 1px solid;
    padding-top: 10px;
    padding-bottom: 10px;
    display: block;
    &:hover {
      background-color: #f1f1f1;
    }
  }
}
</style>
