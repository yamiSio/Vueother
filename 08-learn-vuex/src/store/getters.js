export default {
    powerCounter(state) {
        return state.counter * state.counter
    },
    more20stu(state){
        return state.students.filter(s=> s.age >12)
    },
    more20stuLength(state,getters){
        return getters.more20stu.length
    },
    moreAgeStu(state){
        return function (age){
            return state.students.filter(s=>s.age>age)
        }
    }
}