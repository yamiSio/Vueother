<template>
  <div id="app">
    <div id="nav">
<!--      router-link中增加tag是改变本身标签类型，默认a，replace使浏览器无法后退前进-->
<!--      点击后会默认生成2个class属性，可以手动改  active-class='',统一改在路由-->
      <router-link to="/home" tag="button" replace>Home</router-link> |
      <router-link to="/about">About</router-link>
      <br>
<!--       <button @click="homeclick">首页</button>  |-->
<!--       <button @click="aboutclick">关于</button>-->
<!--      <br>-->
<!--      用router.params.abv(router.js内path:后面的字符)获取hash值-->
      <router-link :to="/user/+Id">用户</router-link>  |
<!--          用$route.query.name获取查询值-->
      <router-link :to="{
        path:'/profile',
        query:{name:'whylh',age:18 ,height:1.88}
      }">档案</router-link>
      <br>
      <button @click="userClick">用户按钮</button>
      <button @click="profileClick">档案按钮</button>
    </div>
    //保存Profile的缓存
    <keep-alive exclube="Profile">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name:'App',
  data(){
    return{
      Id:'lisi'
    }
  },
  methods:{
     homeclick(){
       //通过代码修改路由
       // this.$router.push('/home');
       this.$router.replace('/home');
       console.log('homeclick');
     },
     aboutclick(){
      // this.$router.push('/about');
      this.$router.replace('/about');
      console.log('aboutclick');
    },
     userClick(){
       this.$router.replace('/user/'+this.Id);
    },
     profileClick(){
       this.$router.replace({
         path:'/profile',
         query:{
           name:'kobe',
           age:18,
           height:1.87
         }
       })
    }
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
