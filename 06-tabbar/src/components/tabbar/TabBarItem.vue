<template>
    <div class="tab-bar-item" @click="itemclick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
<!--      //如果用:class绑定，那么写的颜色是死的-->
<!--      <div :class="{active:isActive}"><slot  name="item-text"></slot></div>-->
<!--      //动态绑定样式-->
      <div :style="activeStyle"><slot  name="item-text"></slot></div>
<!--      <img src="../../assets/img/TabBar/shouye.png" alt="">-->
<!--      <div>首页</div>-->
    </div>
</template>

<script>
export default {
name: "TabBarItem",
  props:{
   path:String,
    activeColor:{
     type:String,
      default:'red'
    }
  },
  data(){
  return{
    // isActive:true
   }
  },
  computed:{

    isActive(){
     return this.$route.path.indexOf(this.path) !==-1
   },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemclick(){
      //连续点击两次报错处理.catch(err=>{})
      this.$router.replace(this.path).catch(err=>{})
    }
  }
}
</script>

<style scoped>

.tab-bar-item{
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/*.active{*/
/*  color:#42b983;*/
/*}*/
</style>