<template>
  <div class="maindiv">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item,index in banner" v-bind:key="index">
        <img v-bind:src="item.pic">
        <!-- <p>{{ item.typeTitle }}</p> -->
        <div class="footdiv" v-bind:style="{ background: item.titleColor }">{{ item.typeTitle }}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import apiurl from '../../assets/js/api'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      banner: '',
      swiperOption: {
        autoplay: false,
        loop: true,
        grabCursor: true
      }
    }
  },
  methods: {
    getBanner () {
      this.$http.get(apiurl + 'banner').then(res => {
        this.banner = res.data.banners
      })
    }
  },
  created () {
    this.getBanner()
  }
}
</script>

<style>
  .maindiv{
    position: relative;
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
