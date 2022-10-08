import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import moment from "moment";
import "moment/locale/zh-cn";
// import config from "@/config.js";
import VueParticles from "vue-particles";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//设定moment区域为中国
moment.locale("zh-cn");

//区分开发环境,生产环境
// const isDev = process.env.NODE_ENV === "development";
const isDev = false;

//关闭Vue生产提示
Vue.config.productionTip = isDev;

//使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title} | 科创数据库`;
//   const cur = AV.User.current();
//   const curJson = cur && cur.toJSON();
//   if (!cur && to.path !== "/login") {
//     next("/login");
//   } else if (!cur && to.path === "/login") {
//     next();
//   } else if (cur && curJson.mobilePhoneVerified && to.path === "/login") {
//     next("/");
//   } else if (cur && curJson.mobilePhoneVerified && to.path !== "/login") {
//     next();
//   } else {
//     next();
//   }
// });


//使用插件
Vue.use(ElementUI);


//测试
// console.log('process', process);
// console.log('process.env', process.env);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);


Vue.use(VueParticles);

//创建vue实例对象
new Vue({
  router,
  store,
  render: h => h(App)//render函数帮助解析模版，传人的h为一个函数，该函数可以用来解析App这个组件
}).$mount('#app')//将App.vue挂载到index.html中id为app的div标签上
