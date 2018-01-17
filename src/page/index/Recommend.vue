<template>
  <div class="maindiv">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item,index in banner" v-bind:key="index">
        <img v-bind:src="item.pic">
        <div class="footdiv" v-bind:style="{ background: item.titleColor }">{{ item.typeTitle }}</div>
      </swiper-slide>
    </swiper>
    <div>
      <button>私人FM</button>
      <button>每日推荐</button>
      <button>歌单</button>
      <button>排行榜</button>
    </div>
    <!-- <div>
     <icon name="flag"></icon>
     <icon name="music"></icon>
     <icon name="signal" flip="horizontal"></icon>

    </div> -->
    <div class="privatecontent">
      <div style="position: absolute;top:0;left:0;">独家放送></div>
      <ul>
        <li v-for="item,index in privatecontent" v-bind:key="index" style="width:50%;">
          <img :src="item.sPicUrl" style="zoom:0.5">
          <p>{{item.name}}</p>
        </li>
      </ul>  
    </div>
    
  </div>
</template>

<script>
import apiurl from '../../assets/js/api'
import 'swiper/dist/css/swiper.css'

export default {
  data () {
    return {
      banner: '',
      resource: '',
      privatecontent: '',
      newsong: '',
      swiperOption: {
        autoplay: false,
        loop: true,
        grabCursor: true
      }
    }
  },
  methods: {
    getBanner () { // 轮播图
      this.$http.get(apiurl + '/banner').then(res => {
        this.banner = res.data.banners
      })
    },
    getResource () { // 推荐歌单
      this.$http.get(apiurl + '/recommend/resource').then(res => {
        this.resource = res.data.result
      })
    },
    getPrivatecontent () { // 独家放送
      this.$http.get(apiurl + '/personalized/privatecontent').then(res => {
        this.privatecontent = res.data.result
        console.log(this.privatecontent.length)
      })
    },
    getNewsong () { // 推荐新音乐
      this.$http.get(apiurl + '/personalized/newsong').then(res => {
        this.newsong = res.data.result
      })
    }
  },
  created () {
    this.getBanner()
   // this.getResource()
    this.getPrivatecontent()
    this.getNewsong()
  }
}
</script>

<style>

  .maindiv{
    position: relative;
    height: 200px;
  }
  .footdiv{
    position: absolute;
    height: 25px;
    bottom: 2%;
    right: 0%;
    border-radius: 10px 0 0 10px;
    padding-left: 15px;
    padding-right: 10px;
    color: #FFF;
  }
  .privatecontent{
    position:absolute;
    margin-top: 50px;
  }
  ul{
    padding: 0px;
    margin: 0px;
  }
  li{
    list-style-type: none;
    float: left;
  }
</style>
