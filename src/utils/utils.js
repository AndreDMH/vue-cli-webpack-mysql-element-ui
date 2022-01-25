/* 
  工具类文件
  用来存放常用的公共方法
 */
// const utils = require('utils')

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
/**
 * 防抖
 * @param { fn } function  需要防抖的函数
 * @param { delay } number 防抖期限值
**/
export const debounce = (fn,t) => {
  let args = arguments //接收的参数用 ES6 中的 rest 参数统一存储到变量 args 中。arguments就是传入的参数数组,而且个数可以不确定的传回给fn（不确定函数到底有多少个参数，用arguments来接收）
  let delay = t || 1000
  let timer = null //借助闭包
  return function (){
    let th = this; // 由于作用域影响，需要改变this指向
    // 判断还在定时，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
    if(timer){
      clearTimeout(timer) 
    }
    timer = setTimeout(function(){
      timer = null
      //执行
      fn.apply(th,args)
    },delay)
  }
}

/**
 * 节流
 * @param { fn } function 需要节流的函数
 * @param { delay } number 节流期限值
**/
export const throttle = (fn,t) => {
  let timer = null
  let delay = t || 500
  let startTime = Date.now()
  return function() {
    // 结束时间
    let curTime = Date.now()
    // 间隔时间 = 延迟的时间 - （结束时间戳 - 开始时间戳）
    let interval = delay - (curTime - startTime)
    var th = this
    let args = arguments
    clearTimeout(timer)
    if(interval <= 0) {
      // 证明可以触发
      fn.apply(th, args)
      // 重新计算开始时间
      startTime = Date.now()
    } else {
      timer = setTimeout(()=>{
        fn.apply(th,args)
      }, delay)
    }
  }
}





