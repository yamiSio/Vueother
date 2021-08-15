import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   //method默认get,可以不写,另外还有post等
//   // method:'get'
// }).then(res=>{
//   console.log(res);
// })
//
// axios({
//   url:'http://123.207.32.32:8000/home/data?type=sell&page=3',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// })

// //全局配置
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=5000
// //2.axios发送并发请求
// axios.all([axios({
//   timeout:5,
//   url:'/home/multidata'
// }),axios({
//   ure:'/home/data?type=sell&page=3',
//   params:{
//     type:'sell',
//     page:5
//   }
// })])
//     .then(axios.spread((res1,res2) =>{
//       console.log(res1);
//       console.log(res2);
//     }))


// 请求类型:get -> URL查询对象:params
// 请求类型:post ->request body:data

// const instance1=axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
//
// instance1({
//   url:'/home/multidata'
// }).then(res =>{
//   console.log(res);
// })
//
// instance1({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res =>{
//   console.log(res);
// })
//
// const instance2 =axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:1000,
// })

//5.封装模块

import {request} from "./network/request";

// request({
//   url:'/home/multidata'
// },res =>{
//   console.log(res);
// },err=>{
//   console.log(err);
// })

// request({
//   baseConfig:{
//
//   },
//   success:function (res){
//
//   },
//   failure:function (err){
//
//   }
// })

request({
  url:'/home/multidata'
}).then(res =>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})