// import Vue from 'vue'
// import Vuex from 'vuex'
//
// //1.安装插件
// Vue.use(Vuex)
//
// //2.创建对象
// const  moduleA = {
//     state:{
//         name:'Sio'
//     },
//     mutations:{
//         updateName(state,payload){
//             state.name=payload
//         }
//     },
//     actions:{
//         aUptateName(context){
//             setTimeout(()=>{
//                 context.commit('updateName','wangwu')
//             },1000)
//
//         }
//     },
//     getters:{
//         fullname(state){
//             return state.name +'111'
//         },
//         fullname2(state,getters){
//             return getters.fullname+'222'
//         },
//         fullname3(state,getters,rootState){
//             return getters.fullname2+rootState.counter
//         }
//     }
// }
//
// const store =new Vuex.Store({
//     state:{
//         counter:1000,
//         students:[
//             {id:110,name:'why',age:10},
//             {id:111,name:'yami',age:11},
//             {id:112,name:'saki',age:12},
//             {id:113,name:'yuuki',age:13}
//         ],
//         info:{
//             name:'saki',
//             age:14,
//             height:1.56
//         }
//     },
//     mutations:{
//         //方法
//         increment(state){
//             state.counter++
//         },
//         decrement(state){
//             state.counter--
//         },
//         incrementCount(state,count){
//             state.counter+=count
//         },
//         //特殊封装
//         // incrementCount(state,payload){
//         //     state.counter+=payload.count
//         // },
//         addStudent(state,stu){
//             state.students.push(stu)
//         },
//         updateInfo(state){
//             state.info.name='sakiyuuki'
//
//             //在mutation不能进行异步操作，会不能很好跟踪，做不到响应式
//             //想用异步，用action
//             //错误代码
//             // setTimeout(()=>{
//             //     state.info.name='sakiyuuki'
//             // },1000)
//
//             // state.info['address']='gd'
//             // Vue.set(state.info,'address1','gd1')
//             // delete state.info.name
//
//         }
//
//     },
//     actions:{
//         //默认属性:context  上下文
//         //1，做法1
//        // aUptateInfo(context,payload){
//        //     setTimeout(()=>{
//        //         context.commit('updateInfo')
//        //         console.log(payload.message);
//        //         payload.success()
//        //     },1000)
//        // }
//
//         aUptateInfo(context,payload){
//                 return new Promise((resolve, reject) => {
//                     setTimeout(()=>{
//                         context.commit('updateInfo');
//                         console.log(payload);
//                         resolve('111')
//                     },1000)
//                 })
//         }
//     },
//     getters: {
//         powerCounter(state) {
//             return state.counter * state.counter
//         },
//             more20stu(state){
//                 return state.students.filter(s=> s.age >12)
//         },
//         more20stuLength(state,getters){
//             return getters.more20stu.length
//         },
//         moreAgeStu(state){
//             return function (age){
//                 return state.students.filter(s=>s.age>age)
//             }
//         }
//     },
//     modules:{
//         a:moduleA
//     }
// })
//
//
// //3.导出对象
// export default store
//
// //对象的解构
// const obj ={
//     name:'saki',
//     age:21,
//     height:1.75
// }
//
// const {name,age,height}=obj;
// console.log(name);