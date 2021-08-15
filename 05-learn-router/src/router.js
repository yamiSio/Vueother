import Vue from 'vue'
import Router from 'vue-router'     //导入路由插件
import Home from './views/Home.vue'
import User from './views/User.vue'


//1.通过Vue.use(插件),安装插件
Vue.use(Router)


//2.创建Router对象
//配置路由和组件之间的应用对象
const router = new Router({
  // linkActiveClass:'active', //只要有反应的路由，class统一改为active
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path:'/',
      //redirect重定向
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        title:'首页'
        },
      children:[
        //keep=alive的时候由于重定向，会自动的跳到home默认，不会保持之前的按的
        // {
        //   path:'/',
        //   component:()=>import('./views/homenews.vue')
        // },
        {
          path:'news',
          component:()=>import('./views/homenews.vue')
        },

        {
          path:'message',
          component:()=>import('./views/homeMessage.vue')
        }

      ]
    },
    {
      path: '/about',
      name: 'about',
      meta:{
        title:'关于'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.下面是懒加载代码
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/user/:abv',
      // /user/:随便   是动态路由，只要跳转到/user/任意 就跳转
      name:'user',
      meta:{
        title:'用户'
      },
      component:User
    },
    {
      path:'/profile',
      meta:{
        title:'档案'
      },
      component:()=> import('./views/Profile.vue')
    }
  ]
})

//前置守卫（guard）跳转前回调  可以写到routes那里，固定再某一页面才执行
     router.beforeEach((to,from,next)=> {
//   //从from跳转到to
   document.title=to.matched[0].meta.title
       // console.log(to);
       // console.log('+++');
       //next默认跳到下一个，也可以固定跳哪，填flase就禁止跳
       next()
 })

//后置钩子(hook) 不需要next() 跳转后回调
router.afterEach((to,from)=>{
  // console.log('-----');
})

export default router
