import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import moduleA from './modules/modulesA';

//1.安装插件
Vue.use(Vuex)

//2.创建对象


const state={
    counter:1000,
        students:[
    {id:110,name:'why',age:10},
    {id:111,name:'yami',age:11},
    {id:112,name:'saki',age:12},
    {id:113,name:'yuuki',age:13}
],
    info:{
    name:'saki',
        age:14,
        height:1.56
}
}
const store =new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        a:moduleA
    }
})


//3.导出对象
export default store

//对象的解构
const obj ={
    name:'saki',
    age:21,
    height:1.75
}

const {name,age,height}=obj;
console.log(name);