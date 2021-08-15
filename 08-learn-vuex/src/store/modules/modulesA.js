export default {
    state:{
        name:'Sio'
    },
    mutations:{
        updateName(state,payload){
            state.name=payload
        }
    },
    actions:{
        aUptateName(context){
            setTimeout(()=>{
                context.commit('updateName','wangwu')
            },1000)

        }
    },
    getters:{
        fullname(state){
            return state.name +'111'
        },
        fullname2(state,getters){
            return getters.fullname+'222'
        },
        fullname3(state,getters,rootState){
            return getters.fullname2+rootState.counter
        }
    }
}