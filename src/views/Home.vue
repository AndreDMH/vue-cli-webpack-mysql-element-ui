<template>
  <div class="home" :style="{height:homeHeight}">
    <!-- <router-link to="/pages/test01">link跳转</router-link> -->
      <span style="display:inline-block;width:1px;height:100%;vertical-align:middle;"></span>
      <div class="login">
        <span class="login_span"></span>
        <el-form class="formData" :model="mainForm" label-position="right" ref="mainForm" size="small" label-width="80px">
          <el-form-item
            prop="accountNumber"
          >
            <el-input
              style="width:220px;margin-left:-90px"
              placeholder="请输入账号"
              v-model="mainForm.accountNumber"
            >
              <template slot="prepend"><i class="fa fa-github-alt" aria-hidden="true"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item
            prop="password"
          >
            <el-input
              style="width:220px;margin-left:-90px"
              type="password"
              placeholder="请输入密码"
              v-model="mainForm.password"
            >
              <template slot="prepend"><i class="fa fa-key" aria-hidden="true"></i></template>
            </el-input>
          </el-form-item>
        </el-form>
        <div class="login_opt">
          <el-button type="primary" class="login_opt_btn" @click="loginClick">登录</el-button>
          <el-button style="margin-top:10px" class="login_opt_btn" @click="signClick">注册</el-button>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
      mainForm:{
        accountNumber:"",
        password:"",
      },
      sreenHeight:"",
      homeHeight:"720px",
    }
  },
  created(){
    this.sreenHeight = document.documentElement.clientHeight
  },
  watch:{
    'sreenHeight':{
      immediate:true,
      handler:function(newVal,oldVal){
        console.log('s',newVal)
        if(newVal == '667'){
          this.homeHeight = '150px'
        } else {
          this.homeHeight = '720px'
        }
      }
    }
  },
  mounted(){
    const that = this;
    window.onresize = () =>{
      return(()=>{
        window.sreenHeight = document.documentElement.clientHeight
        that.sreenHeight = window.sreenHeight
      })()
    }
  },
  methods:{
    async loginClick(){
      //登录
      const response = await this.$http.post('/api/user/login',
        {
          username:this.mainForm.accountNumber,
          password:this.mainForm.password
        }
      )
      if(response.code == 200 ){
        this.$message.success('登录成功')
        this.$router.push({
          path:'/pages/noteManage'
        })
      } else {
        this.$message.error(response.msg)
      }
    },
    async signClick(){
      //注册
      const response = await this.$http.post('/api/user/addUser',
        {
          username:this.mainForm.accountNumber,
          password:this.mainForm.password
        }
      )
      if(response.code == 200){
        this.$message.success('注册成功')
      } else {
        this.$message.error(response.msg)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.home{
  display: inline-block;
  text-align: center;
    .login{
      display: inline-block;
      text-align: center;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      width: 400px;
      height: 400px;
      vertical-align: middle;
      .login_span{
        display:inline-block;
        width:1px;
        height:30%;
        vertical-align:middle;
      }
      .formData{
        vertical-align: middle;
      }
      .login_opt{
        margin-top:40px;
        .login_opt_btn{
          width: 220px;
          margin-left:-10px
        }
      }
    }
 
}
</style>
