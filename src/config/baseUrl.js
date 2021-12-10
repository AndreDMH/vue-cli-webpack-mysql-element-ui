let GlobalPath = {
  apiUrl:""
};
if(process.env.NODE_ENV == 'production'){
  //生产环境
  // GlobalPath.apiUrl = 'http://wzapi.tuisuanli.top'
} else if(process.env.NODE_ENV == 'testing'){
  //对外测试
  // GlobalPath.apiUrl = 'http://wzapi.tuisuanli.top'
} else {
  //测试
  // GlobalPath.apiUrl = 'http://wzapi.tuisuanli.top'
  // GlobalPath.apiUrl = 'http://10.10.10.60:334'
}

export default GlobalPath