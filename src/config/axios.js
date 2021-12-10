import axios from "axios";
import baseUrl from "@/config/baseUrl.js";

var token = "";

const axiosAPI = axios.create({
  // 设定请求借口的域名地址
  baseURL: baseUrl.apiUrl, //"http://10.10.10.82/", //GlobalPath.URL_API
  // 网络请求时间，如果超过20秒，请求将被取消
  // timeout: 20000, // 取消超时
  // 设置返回数据为json格式
  responseType: "json",
  // 是否允许携带cookie，默认是false，不允许
  withCredentials: false,
  // http状态验证，你可以规定状态码的范围，比如 status >= 200 && status < 300，记住是一个boolean值
  validateStatus: function(status) {
      return true;
  },
  // 请求头部
  headers: {
    // "Content-Type": "application/x-www-form-urlencodedcharset=utf-8",
    // "X-Requested-With": "XMLHttpRequest"
  }
});
axiosAPI.interceptors.request.use(
  opt => {
      let config = Object.assign({}, {
              isAddHeader: true,
              isSerialize: false
          },
          opt
      );
      //if (config.method.toLowerCase() == 'post') {//}
      config.headers = Object.assign({}, config.headers, {
          // Authorization: "Bearer " + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTAuMTAuMTAuNjA6MjE0L2xvZ2luIiwiaWF0IjoxNTc2MDI5Nzk3LCJleHAiOjE1NzYwNDA1OTcsIm5iZiI6MTU3NjAyOTc5NywianRpIjoiZkFnNHYzdlh6clBjZ09WSyIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.DLrkY5y19q0y26BoV2-kdki8_SPVOwCiJqsUo6_2TE8'
          Authorization: "Bearer " + token
      });

      // 如果设置isSerialize位true或者请求的方式是GET，那么自动序列化，反之是字符串
      if (config.isSerialize && config.method.toLowerCase() == "post") {
          config.transformRequest = [
              function(data, headers) {
                  // 判断传入是不是对象，初始化请求数据的格式（POST形式）
                  if (Object.prototype.toString.call(data) === "[object Object]") {
                      let keys = Object.keys(data);
                      // 把对象里面的键值对拼接成userId=234cd8fbcdbe4bd3943e02a44ce10213&token=267BA2AB6760D7634B99EA12976227DF这样的形式
                      return keys
                          .map(name => `${name}=${encodeURIComponent(data[name])}`)
                          .join("&");
                  }
              }
          ];
      }
      return config;
  },
  function(error) {
      return Promise.reject(error);
  }
);
let setDivStyle = (obj, value) => {
  return (obj.style.display = value);
};

// 请求的方式post，get，请求对象exportAjaxAPI封装（包含了post，get）
const axiosRequestMethod = ["post", "get"];
const exportAjaxAPI = {};
let clickLimit = null;

axiosRequestMethod.forEach(method => {
  // 统一处理所有的请求, config可配置弹窗的显示，默认情况是显示的，不需要额外处理error不为0的情况
  exportAjaxAPI[method] = function(url, data, config) {
      let opt = Object.assign({}, {
              show: true,
              isModal: true
          },
          config
      );
      // 返回一个Promise对象
      return new Promise((resolve, reject) => {
          // 创建空的透明的蒙层，防止用户多次点击
          if (!clickLimit && opt.isModal) {
              clickLimit = window && document.createElement("div");
              clickLimit.className = "clickLimit";
              document.body.appendChild(clickLimit);
          }
          if (opt.isModal) {
              clickLimit && setDivStyle(clickLimit, "block");
          }
          axiosAPI[method](url, data, opt)
              .then(response => {
                  opt.isModal && clickLimit && setDivStyle(clickLimit, "none");
                  // 处理后台返回结果
                  if (response.data) {
                      const errorCode = response.data.error;
                      if (errorCode == 0) {
                          // 正常情况。Promise处理，抛出数据
                          if (!config) {
                              resolve(response.data);
                          } else {
                              resolve(response.data);
                          }
                      } else {
                          resolve(response.data);
                          // 其他异常情况
                          // if (opt.show) {
                          //   // 其他情况给与弹层提示
                          //   if(config) {
                          //     resolve(response);
                          //   }
                          // } else {
                          //   resolve(response.data);
                          // }
                      }
                  }
              })
              .catch(error => {
                  opt.isModal && clickLimit && setDivStyle(clickLimit, "none");
                  //需弹层提示异常
                  reject(error);
              });
      });
  };
});

export default {
  install: function(Vue, Option) {
      Object.defineProperty(Vue.prototype, "$http", {
          value: exportAjaxAPI
      });
  }
};