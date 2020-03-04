import Vue from 'vue'
import Router from 'vue-router'
import {Message} from 'element-ui'
import NProgress from 'nprogress'
import Login from '@/views/Login.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: "Login",
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  if(to.name === "login") {
    next()
  }else {
    // 判断有没有token
    const accessToken: string = sessionStorage.getItem('accessToken');
    if(!accessToken) {
      router.push({name: "login"});
      Message.warning("请先登录");
      return ;
    }else {
      next()
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router;
