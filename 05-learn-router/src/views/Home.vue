<template>
<!--  <div class="home">-->
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  </div>-->
  <div>
    <router-link to="/home/news">新闻</router-link>  |
    <router-link to="/home/message">信息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'home',
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
    path:'/home/news'
   }
  },
  created() {
    console.log('home created');

  },
  destroyed() {      //销毁
    console.log('home destroyed');
  },

  //这两个函数只有使用的keep—alive时才有效
  //activated进入页面时触发
  activated() {
    console.log('activated');
    this.$router.push(this.path)
  },
  // deactivated() {
  //   console.log('deactivated');
  // },
  //离开之前执行的函数，指向了此位置，可返回上一步回来
  beforeRouteLeave(to,from,next){
    this.path=this.$route.path
    next()
  }

}
</script>
