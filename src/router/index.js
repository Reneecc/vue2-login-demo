import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'

//引入组件
import Home from '../views/Home.vue'

//使用插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
]

//创建并暴露一个路由器
const router = new VueRouter({
  mode: 'history',//路由模式，该模式不会在地址中显示#
  base: process.env.BASE_URL,
  routes
})

//导航守卫，前置处理
router.beforeEach((to, from, next) => {
  let isAuthenticated = !!localStorage.getItem('userInfo');
  console.log('isAuthenticated', isAuthenticated);
  console.log('1', localStorage.getItem('userInfo'));
  console.log('2', !localStorage.getItem('userInfo'));
  console.log('3', !!localStorage.getItem('userInfo'));


  // 如果路由要跳转到除了登录和注册的界面的话就判断是否已经登录，如果没有登录就强制跳到登录界面
  if (to.path !== '/login' && to.path !== '/register' && !isAuthenticated) {
    next({ name: 'Login' })
    Message({
      message: '请先登录！',
      type: "warning",
    })
  } else {
    next()
  }
})

export default router
