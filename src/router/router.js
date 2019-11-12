import Vue from 'vue'
import Router from 'vue-router'
import Details from '../components/news/Details.vue'
import Tabnews from '../components/Tabnews.vue'
Vue.use(Router)
export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Tabnews
        },
        {
            path:'/details/:id',
            components:{
               details:Details
        }
    }
    ]
})