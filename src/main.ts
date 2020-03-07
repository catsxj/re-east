// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './theme/custom.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import '@/assets/css/style.css'
import axios, { AxiosInstance } from 'axios'
import instance from '@/plugins/MyAxios'
import MyRequest from '@/urlConf/Myrequest'

Vue.use(ElementUI);


Vue.config.productionTip = false

// 全局
Vue.prototype.$http = instance;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
