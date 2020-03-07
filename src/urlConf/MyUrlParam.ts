import LocalUrlConf from '@/urlConf/LocalUrlConf'
import OnlineUrlConf from '@/urlConf/OnlineUrlConf'
// import CustomUrlConf from '@/plugins/config'

// function f(ss: string) {
//     return function(target: any): void {
//       target.prototype.ss = ss;
//     }

// }

// class Demo {
//   public ss: string;
//   constructor() {
//   }
// }

// @f("2313")
// class ATest extends Demo {}
// let test = new ATest();
// console.log(test.ss);



class RequestClass {
  public methodParam: Object
  public customUrl: Object
  public isOnline: Boolean

  constructor() {
    this._init()
  }

  private _init(): void {
    if(!this.isOnline) {
      this.methodParam = "get"
      this.customUrl = LocalUrlConf
    }else {
      this.methodParam = "post"
      this.customUrl = OnlineUrlConf
    }
  }
}

export default RequestClass
