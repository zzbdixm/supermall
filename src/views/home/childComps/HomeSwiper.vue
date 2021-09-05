<template>
  <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" class="homeImg">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper/index"

export default {
name:'HomeSwiper',
props:{
  banners:{
    type:Array,
    defalult(){
      return []
    }
  }
},
components:{
  Swiper,
  SwiperItem
}
}
</script>

<style  scoped>
.homeImg{
  width: 100%;
}
</style>
