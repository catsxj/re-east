import RequestClass from '@/urlConf/MyUrlParam'
import CustomUrlConf from '@/plugins/config'
import {Message} from 'element-ui'
import instance from '@/plugins/MyAxios'
import Vue from 'vue'

export default class MyRequestClass extends RequestClass {
  public param: Object
  public method: any
  public url: string
  public callFn: Function
  public ss: string

  constructor(param: Object, callFn: Function, method?: string) {
    super()
    this.isOnline = CustomUrlConf.isOnline
    this.param = param
    this.callFn = callFn
    this.method = method || this.methodParam
    this._getData()
  }

  private async _getData(){
    let _this = this;
    let url: any = this._handleUrl(),
    param = this._handleParam();
    let res = await instance({
      url: url,
      method: _this.method,
      data: param
    })
    
    if(res.data.success) {
      _this.callFn(res.data)
    }else {
      Message.error(res.data.message)
    }
  }

  private _handleUrl() {
      let param = this.customUrl,
      url: any = this.url;

      if(url.indexOf(".") !== -1) {
          let arr = url.split(".");
          for (let item of arr) {
            param = param[item]
          }
      }
      return param
  }

  private _handleParam() {
      let paramTable = new URLSearchParams();
      for(let item in this.param) {
          paramTable.append(item, this.param[item]);
      }
      return paramTable;
  }

}
