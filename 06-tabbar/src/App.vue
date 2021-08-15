<template>
  <div id="app">
     <tab-bar>
        <tab-bar-item path="/home" activeColor="#66ccff">
          <img slot="item-icon" src="./assets/img/TabBar/shouye.png" alt="">
          <img slot="item-icon-active" src="./assets/img/TabBar/shouye_1.png" alt="">
          <div slot="item-text">首页</div>
        </tab-bar-item>
       <tab-bar-item path="/category" activeColor="blue">
         <img slot="item-icon" src="./assets/img/TabBar/fenlei.png" alt="">
         <img slot="item-icon-active" src="./assets/img/TabBar/fenlei_1.png" alt="">
         <div slot="item-text">分类</div>
       </tab-bar-item>
       <tab-bar-item path="/cart" activeColor="blue">
         <img slot="item-icon" src="./assets/img/TabBar/gouwu.png" alt="">
         <img slot="item-icon-active" src="./assets/img/TabBar/B.png" alt="">
         <div slot="item-text">购物车</div>
       </tab-bar-item>
       <tab-bar-item path="profile" activeColor="blue">
         <img slot="item-icon" src="./assets/img/TabBar/wode.png" alt="">
         <img slot="item-icon-active" src="./assets/img/TabBar/wode_1.png" alt="">
         <div slot="item-text">我的</div>
       </tab-bar-item>
     </tab-bar>
    <router-view></router-view>

    <div .a>red</div>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from "./components/tabbar/TabBarItem";
export  default {
  name:'App',
  components:{
   TabBar,
    TabBarItem
  }
}
</script>
<style>
@import "./assets/css/base.css";

</style>
