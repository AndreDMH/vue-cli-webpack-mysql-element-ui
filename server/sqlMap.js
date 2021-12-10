// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user_info(id, username, password) values (0, ?, ?)',
    select: 'select * from user_info where binary username = ?'
  },
}

module.exports = sqlMap;