<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div class="center">
          购物街
        </div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>

    <tab-control @tabClick="tabClick" class="tab-control" :titles="['流行','新款','精选']"/>
    <goods-list :goods="showGoods"></goods-list>

  </div>
</template>

<script>

import HomeSwiper from "./childComps/HomeSwiper"
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/FeatureView'

import TabControl from 'components/content/tabControl/TabControl'
import NavBar from "components/common/navbar/NavBar"
import GoodsList from "components/content/goods/GoodsList"

import {getHomeMultidata,getHomeGoods} from "network/home"

export default {
name:'Home',
components:{
  HomeSwiper,
  HomeRecommendView,
  FeatureView,
  TabControl,
  NavBar,
  GoodsList
},
data(){
  return{
    banners:null,
    recommends:null,
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]},
    },
    currentType:'pop'
  }
},
created(){
  //1.请求多个数据
  this.getHomeMultidata(),
  //2.请求商品数据
  this.getHomeGoods('pop')
  this.getHomeGoods('new')
  this.getHomeGoods('sell')
},
computed:{
  showGoods(){
    return this.goods[this.currentType].list
  }
},
methods:{
  //时间监听相关方法
  tabClick(index){
    switch(index){
      case 0:
        this.currentType = 'pop'
        break
      case 1:
        this.currentType = 'new'
        break
      case 2:
        this.currentType = 'sell'
        break   
    }
  },

  //网络请求相关方法
  getHomeMultidata(){
    getHomeMultidata().then(res => {
      console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
  getHomeGoods(type){
    const page = this.goods[type].page + 1
    getHomeGoods(type,page).then(res =>{
      console.log(res)
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page += 1
  })
  }
}
}
</script>

<style  scoped>
#home{
  padding-top: 44px;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 2;
}  
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>

