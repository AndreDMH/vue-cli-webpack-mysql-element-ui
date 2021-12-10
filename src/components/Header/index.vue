<template>
  <div class="header">
    <div class="logo">
      <span class="logo_txt">LOGO</span>
    </div>
    <div class="header_body" v-for="item in $route.meta">{{item}}
      <div class="header_body_user">
      <el-dropdown @command="handleCommand">
        <span><i class="fa fa-user-circle" aria-hidden="true"></i> 用户信息</span>
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item command="home">首页</el-dropdown-item> -->
          <el-dropdown-item command="signout">退出</el-dropdown-item>
			  </el-dropdown-menu>
      </el-dropdown>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Header',
    props:{
      name:String,
    },
    data(){
      return{

      }
    },
    created(){
     
    },
    methods:{
      handleCommand(command){
        //登出
        this.$router.push('/');
      },
    }
  }
</script>

<style lang="scss" scoped>
.header{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 40px;
  display:inline-block;
  .logo{
    width:15%;
    min-width: 65px;
    background-color:#324353;
    display:inline-block;
    .logo_txt{
      color:#2c6299;
      font-weight:500;
    }
  }
  .header_body{
    width:85%;
    float:right;
    .header_body_user{
      float: right;
      margin-right:10px
    }
  }
}
</style>