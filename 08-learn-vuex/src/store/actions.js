export default {
    //默认属性:context  上下文
    //1，做法1
    // aUptateInfo(context,payload){
    //     setTimeout(()=>{
    //         context.commit('updateInfo')
    //         console.log(payload.message);
    //         payload.success()
    //     },1000)
    // }

    aUptateInfo(context,payload){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                context.commit('updateInfo');
                console.log(payload);
                resolve('111')
            },1000)
        })
    }
}