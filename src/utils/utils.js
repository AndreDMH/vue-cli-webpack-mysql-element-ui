/* 
  工具类文件
  用来存放常用的公共方法
 */
const utils = require('utils')

/**
  * 截取路由参数
  * @param {String} name 
*/
 export const getParamsUrl = (name) => {
  //获取地址栏参数
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}
