<template>
  <div class="tab-bar-items" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
} 
</script>


<style scoped>
  
  .tab-bar-items{
    flex:1;
    text-align:center;
    height: 49px;
    font-size: 14px;
  }
  /* .tab-bar-items img{
    height: 24px;
    width:24px;
    margin-top: 3px;
    vertical-align: top;
    margin-bottom: 2px;
  } */

  /* .active{
    color: red;
  } */
</style>
