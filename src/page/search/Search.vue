<template>
  <div>

    <div>
      <icon name="search" @click="getSearchList"></icon>
      <input type="text" v-model="searchContent" placeholder="input something" @input="getSearchList">
      <p style="display:inline" @click="toIndex">取消</p>
    </div>

    <div v-show="showKeySearch" class="keySearchUl">
      <div style="background-color: #dad6d6;padding-top: 10px;padding-bottom: 10px;" @click="showType">搜索<span style="display:inline;margin-left: 30px;">{{ searchContent }}</span></div>
      <a v-for="(item,index) in searchList" @click="showType">
        {{item.name}} -- {{item.artists[0].name}}
      </a>
    </div>
    <div v-show="showPlayList">
      <button style="width:20%;" @click="turnSearchType('song')">单曲</button>
      <button style="width:20%;" @click="turnSearchType('artist')">歌手</button>
      <button style="width:20%;" @click="turnSearchType('album')">专辑</button>
      <button style="width:20%;" @click="turnSearchType('songList')">歌单</button>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import apiurl from '../../assets/js/api'
import Footer from '@/components/Footer'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Search',
  data () {
    return {
      searchContent: '',
      searchList: '',
      showKeySearch: false,
      timer: ''
    }
  },
  components: {
    Footer
  },
  computed: {
    ...mapState([
      'showPlayList',
      'playList'
    ])
  },
  methods: {
    getSearchList () {
      const temp = this
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = setTimeout(function () {
          temp.$http.get(apiurl + '/search?keywords=' + temp.searchContent).then(res => {
            if (res.data.code === 200) {
              temp.showKeySearch = true
              const result = res.data.result.songs
              temp.searchList = result.slice(0, 5)
              temp.putPlayList(result)
            } else {
              temp.showKeySearch = false
              temp.$store.state.showPlayList = false
            }
          })
        }, 1000)
      } else {
        this.timer = setTimeout(function () {
          temp.$http.get(apiurl + '/search?keywords=' + temp.searchContent).then(res => {
            if (res.data.code === 200) {
              temp.showKeySearch = true
              temp.searchList = res.data.result.songs
            } else {
              temp.showKeySearch = false
              temp.$store.state.showPlayList = false
            }
          })
        }, 1000)
      }
      // this.$http.get(apiurl + '/search?keywords=' + this.searchContent).then(res => {
      //   if (res.data.code === 200) {
      //     this.showKeySearch = true
      //     this.searchList = res.data.result.songs
      //   } else {
      //     this.showKeySearch = false
      //   }
      // })
    },
    toIndex () {
      this.$router.push({ path: '/' })
    },
    showType () {
      this.$store.state.showPlayList = true
      this.showKeySearch = false
      this.$router.push({ path: '/search/searchSong' })
    },
    turnSearchType (index) {
      switch (index) {
        case 'song':
          this.$router.push({ path: '/search/searchSong' })
          break
        case 'album':
          this.$router.push({ path: '/search/searchAlbum' })
          break
        case 'artist':
          this.$router.push({ path: '/search/searchArtist' })
          break
        case 'songList':
          this.$router.push({ path: '/search/searchSongList' })
          break
      }
    },
    ...mapActions([
      'putPlayList'
    ])
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
