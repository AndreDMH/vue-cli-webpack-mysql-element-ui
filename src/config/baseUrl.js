let GlobalPath = {
  apiUrl:""
};
if(process.env.NODE_ENV == 'production'){
  //生产环境
 
} else if(process.env.NODE_ENV == 'testing'){
  //对外测试
  
} else {
  //测试
 
  // GlobalPath.apiUrl = 'http://10.10.10.60:334'
}

export default GlobalPath