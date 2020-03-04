import axios from 'axios'
import {Message} from 'element-ui'
import NProgress from 'nprogress'
import CustomUrlConf from './config'


if ( !CustomUrlConf.isOnline ) {
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://localhost:9004/static/';
}


const instance = axios.create({});
instance.interceptors.request.use((config: any) => {
  if (config['Content-Type']) {
    config.headers['Content-Type'] = config['Content-Type'];
  }
  NProgress.start();
  var accessToken = sessionStorage.getItem('accessToken');
  config.headers.Authorizationtion = accessToken;
  config.headers.accessToken = accessToken;

  var orientsecGroupID = sessionStorage.getItem('orientsecGroupID');
  config.headers.Authorizationtion = orientsecGroupID;
  config.headers.orientsecGroupID = orientsecGroupID;
  if(config.method === 'post') {

  }
  if(config.method === 'get') {
      // alert(JSON.stringify(config));
  }
  return config
}, (error: any) => {
  return  Promise.reject(error)
  })

  instance.interceptors.response.use(function (response: any) {
      // 根据返回的code值来做不同的处理(和后端约定)
      NProgress.done();
      const data = response.data;
      if(data.code != 200){
        if(data.message == 'token已失效' || data.message =="解析token错误" || data.message == "由于长时间未操作，用户登录信息已经失效，请重新登陆系统！"){
          Message.error('登录超时');
          // router.push({name:'login'})
          setTimeout(() =>{
            location.href = '/'
          },1000)

        }

      }
      return response;

      // 根据返回的code值来做不同的处理(和后端约定)
      // return response;
    }, function (error: any) {
      // console.log(error.response.status);
      console.log(error.request.responseURL);
      let msg = error.request.responseURL+"返回异常，错误信息: ";
      if (error.response.status) {
        switch (error.response.status) {
          case 400:
            Message.error(msg + "错误请求!");
            break;
          case 401:
            Message.error(msg + "登录过期，请重新登录!");
            setTimeout(() =>{
              location.href = '/'
            },1000)
            break;
          case 403:
            Message.error(msg + "服务器拒绝请求!");
            break;
          case 404:
            Message.error(msg + "网络请求不存在!");
            break;
          case 405:
            Message.error(msg + "禁用请求中指定的方法");
            break;
          case 406:
            Message.error(msg + "无法使用请求的内容特性响应请求的网页!");
            break;
          case 407:
            Message.error(msg + "指定请求者应当授权使用代理!");
            break;
          case 408:
            Message.error(msg + "服务器等候请求时发生超时");
            break;
          case 409:
            Message.error(msg + "服务器在完成请求时发生冲突!");
            break;
          case 410:
            Message.error(msg + "请求的资源已永久删除!");
            break;
          case 411:
            Message.error(msg + "服务器不接受不含有效内容长度标头字段的请求");
            break;
          case 412:
            Message.error(msg + "服务器未满足请求者在请求中设置的其中一个前提条件!");
            break;
          case 413:
            Message.error(msg + "请求实体过大!");
            break;
          case 414:
            Message.error(msg + "请求的 URI 过长！");
            break;
          case 415:
            Message.error(msg + "不支持的媒体类型!");
            break;
          case 416:
            Message.error(msg + "请求范围不符合要求!");
            break;
          case 417:
            Message.error(msg + "未满足期望值！");
            break;
          case 500:
            Message.error(msg + "服务器内部错误!");
            break;
          case 501:
            Message.error(msg + "服务器不具备完成请求的功能!");
            break;
          case 502:
            Message.error(msg + "网关错误!");
            break;
          case 503:
            Message.error(msg + "服务不可用!");
            break;
          case 504:
            Message.error(msg + "服务器内部异常!");
            break;
          case 505:
            Message.error(msg + "服务器不支持请求中所用的 HTTP 协议版本!");
            break;
        }
      }

      return Promise.resolve(error);
    });

export default instance;
