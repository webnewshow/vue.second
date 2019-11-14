// 储存数据
// 储存数据都是互通的
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        // 数据存储
        value:123
    },
    mutations:{
        // 改变state中变量的方法 唯一路径
        changesValue(state,data){
            state.value = data

        }
    },
    actions:{

    },
    getters:{

    }

})
export default store