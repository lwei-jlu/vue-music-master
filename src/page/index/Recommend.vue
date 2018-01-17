<template>
  <div class="maindiv">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- <swiper-slide v-for="item,index in banner" v-bind:key="index">
        <img v-bind:src="item.pic">
        <div class="footdiv" v-bind:style="{ background: item.titleColor }">{{ item.typeTitle }}</div>
      </swiper-slide> -->
      <!-- <swiper-slide>1</swiper-slide>
      <swiper-slide>12</swiper-slide>
      <swiper-slide>14</swiper-slide>
      <swiper-slide>15</swiper-slide>
      <swiper-slide>15</swiper-slide> -->
    </swiper>
    <div>
      <button>私人FM</button>
      <button>每日推荐</button>
      <button>歌单</button>
      <button>排行榜</button>
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
        this.resource = res.data.banners
      })
    },
    getPrivatecontent () { // 独家放送
      this.$http.get(apiurl + '/personalized/privatecontent').then(res => {
        this.privatecontent = res.data.banners
      })
    },
    getNewsong () { // 推荐新音乐
      this.$http.get(apiurl + '/personalized/newsong').then(res => {
        this.privatecontent = res.data.banners
      })
    }
  },
  created () {
    // this.getBanner()
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
</style>
