<template>
  <div class="header">
    <div class="logo" :style="this.collStatus?'width:64px':'width:160px'">
      <span class="logo_txt">LOGO</span>
    </div>
    <div class="header_body" v-for="item in $route.meta">{{item}}
      <div class="collapse"><span @click="collapseBtn"><i class="fa fa-bars fa-lg"></i></span></div>
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
      status:Boolean, //父组件给子组件传值
    },
    data(){
      return{
        collStatus:this.status
      }
    },
    created(){
     
    },
    methods:{
      handleCommand(command){
        //登出
        this.$router.push('/');
      },
      collapseBtn(){
        //收缩侧边栏
        if(this.collStatus){
          this.collStatus = false
        } else {
          this.collStatus = true
        }
        this.$emit('collapseClick',this.collStatus) // 子组件给父组件传值
        // console.log('emit',this.$emit('collapseClick',this.collStatus))
      },
    }
  }
</script>

<style lang="scss" scoped>
.header{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 40px;
  display:inline;
  .logo{
    width: 160px;
    background-color:#324353;
    display:inline;
    float: left;
    transition-duration: 0.285s;
    .logo_txt{
      color:#2c6299;
      font-weight:500;
    }
  }
  .header_body{
    display: inline;
    .collapse{
      float: left;
      margin-left: 5px;
      cursor:pointer;
    }
    .header_body_user{
      float: right;
      margin-right:10px
    }
  }
}
</style>