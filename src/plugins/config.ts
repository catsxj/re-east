interface UrlConf {
  isOnline: Boolean
}

const CustomUrlConf: UrlConf = {
  /**
   * 是否启用本地数据接口
      * true: 线上数据
      * false： 本地数据
   */
  isOnline: false
}

export default CustomUrlConf;