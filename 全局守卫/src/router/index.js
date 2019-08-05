import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  Shop from '../view/shop.vue'
import  Showmoney from '../view/showmoney.vue'
Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () =>import("../view/home.vue"),
      name: "home",
      children: [{
        path: "/keeplive",
        component: () => import("../view/keepLive.vue"), // 按需加载
        name: "keeplive"
      },
      {
        path: "/indexa",
        component: resolve => require(['@/view/Index'], resolve), // 使用懒加载
        name: "indexa"
      },{
        path: "/mine",
        component: () => import("../view/Mine.vue"),
        name: "mine",
        children:[{
          path: "scale",
          component: () => import("../view/Scale.vue"),
          name: "scale",
        }]
      }]
    },
    {
      path: "/shop",
      // component: () => import("../view/shop.vue"),
      name: "shop",
      components: { // components:{}
         default: Shop,
         showmoney: Showmoney
      }
    },
    {
      path:"/showmoney/:id",
      component:()=>import("../view/showmoney.vue"),
      name: "showmoney",
      props: {
         name:'aaa',
         price:2
      }
      // 2)props: (route) =>({
      //   name: route.query.name,
      //   age: route.query.age
      // })
      // 3)props:true
    },
    {
      path: "/login",
      component: () => import("../view/login.vue"),
      name: "login"
    }],
  linkActiveClass:'active'
})

//  global.isLogin="11"

router.beforeEach((to, from, next) => {
  // console.log('navigation-guards');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  //如果next为空则路由正常进行跳转，如果next不为空，则进行跳转时，会中断

  const nextRoute = ['showmoney', 'shop'];
    global.isLogin="22222222"
    let isLogin = global.isLogin;  // 是否登录，一般从storage中读取
    // 未登录状态；当路由到nextRoute指定页时，跳转至login
    if (nextRoute.indexOf(to.name) >= 0) {  
      if (!isLogin) {//没有登陆过
        console.log('what fuck');
        router.push({ name: 'login' })//跳转路由
      }
    }
    // 已登录状态；当路由到login时，如果已经登录过，则跳转至home
    if (to.name === 'login') {
      if (isLogin) {
        router.push({ name: 'home' });//跳转home页
      }
    }
    next();//正常执行

})
export default router
