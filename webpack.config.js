const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode:'development',
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
      {test:/\.png|jpg|gif|bmp|svg|ttf|eot|woff|woff2$/,use:'url-loader?limit=16940'},
      {test:/\.vue$/,use:'vue-loader'},
    ]
  },
  plugins:[
    //...其他插件
    new VueLoaderPlugin() //确保引入这个插件
  ]
}