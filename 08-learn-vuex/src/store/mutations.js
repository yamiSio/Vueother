export default {
    //方法
    increment(state){
        state.counter++
    },
    decrement(state){
        state.counter--
    },
    incrementCount(state,count){
        state.counter+=count
    },
    //特殊封装
    // incrementCount(state,payload){
    //     state.counter+=payload.count
    // },
    addStudent(state,stu){
        state.students.push(stu)
    },
    updateInfo(state){
        state.info.name='sakiyuuki'

        //在mutation不能进行异步操作，会不能很好跟踪，做不到响应式
        //想用异步，用action
        //错误代码
        // setTimeout(()=>{
        //     state.info.name='sakiyuuki'
        // },1000)

        // state.info['address']='gd'
        // Vue.set(state.info,'address1','gd1')
        // delete state.info.name

    }

}