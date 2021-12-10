var models = require('../db');
var express = require('express');
var app = express();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect((err)=>{
  if(err) throw err;
  console.log('连接成功')
})

// 用户注册接口
app.post('/addUser', (req, res) => {
  let params = req.body;
  console.log(params);
  //先查询数据库中是否已经存在账号

  let sqlSelect = $sql.user.select;
  conn.query(sqlSelect,[params.username],function(err,result){
    if (err) {
      console.log(err);
    }
    if (result) {
      if(result.length == 0){
        //说明没有查到 库中不存在这条数据
        let sqlAdd = $sql.user.add;
        conn.query(sqlAdd, [params.username, params.password], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log('添加成功')
            res.status(200);
            res.send({
              code:200,
              msg:'success'
            })
          }
        })
      } else if(result.length !=0) {
        //说明库中已存在
        res.status(200);
        res.send({
          code:500,
          msg:'该账户已存在'
        })
      }
    }
  })
});
//登录接口
app.post('/login', (req,res) => {
  let sql = $sql.user.select
  let params = req.body
  console.log(params)
  conn.query(sql,[params.username],function(err,result) {
    if(err) {
      console.log(err);
    } 
    if (result) {
      if(result.length == 0){
        res.status(200);
        res.send({
            code:500,
            msg:'该账户未注册',
            data:result
          })
      } else if(result.length!=0){
        if(params.password == result[0].password){
          res.status(200);
          res.send({
            code:200,
            msg:'登录成功',
            data:result
          })
        } else {
          res.status(200);
          res.send({
            code:500,
            msg:'账号或密码错误',
            data:[]
          })
        }
      }
    }
  })
})

module.exports = app;