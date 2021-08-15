<template>
  <div id="app">
    <h2>-----App内容:modules内容</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步</button>

    <h2>-----App内容:info测试</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>


    <h2>-----App内容-----</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-----App内容:getters相关信息</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(12)}}</h2>



    <h2>-----Hello Vuex内容-----</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/hellovuex'
export default {
  name:'App',
  components:{
    HelloVuex
  },
  data(){
    return {
      message:'App组件',
    }
  },
  // computed:{
  //   more20stu(){
  //     return this.$store.state.students.filter(s=>{
  //       return s.age >=12
  //     })
  //   }
  // },
  methods:{
    addition(){
      this.$store.commit('increment')
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      //payload:负载  指带参数
      //1.普通的提交封装  简单的count
      this.$store.commit('incrementCount',count)

      //2.特殊的提交封装   count是一个对象
      // this.$store.commit({
      //   type:"incrementCount",
      //   count
      // })
    },
    addStudent(){
      const stu ={id:113,name:'hana',age:15}
      this.$store.commit('addStudent',stu)
    },
    updateInfo(){
      // this.$store.commit('updateInfo')
      //   this.$store.dispatch('aUptateInfo',{
      //     message:'携带信息',
      //     success:()=>{
      //       console.log('完成');
      //     }
      //   })
      this.$store
          .dispatch('aUptateInfo','我是携带信息')
      .then(res =>{
        console.log('里面完成了提交');
        console.log(res);
      })

    },
    updateName(){
      this.$store.commit('updateName','Siows')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUptateName')
    }
  }
}
</script>
<style>

</style>
