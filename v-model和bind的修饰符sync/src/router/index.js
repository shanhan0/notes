import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/view/home.vue'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/view/home.vue'),
    name: 'home'
  },
  {
    path: '/shop',
    component: () => import('@/view/shop.vue'),
    name: 'shop'
  },
  {
    path: '/modles',
    component: () => import('@/view/modles.vue'),
    name: 'modles'
  }]
})
