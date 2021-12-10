<template>
  <div style="height:100%">
    <el-container style="height:100%">
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-container style="height:100%">
        <el-aside class="aside">
          <el-menu
            class="menu_list"
            :default-active="defaultActive"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="isCollapse"
            router
            :unique-opened="true"
          >
            <el-submenu index="1">
              <template slot="title">
                <span><i class="fa fa-gears"></i> 常用工具</span>
              </template>
              <el-menu-item-group>
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item index="noteManage"><i class="fa fa-book" aria-hidden="true"></i> 便签管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span><i class="fa fa-users"></i> 账户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="userManage"><i class="fa fa-user"></i> 用户管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-main>
          <el-footer class="footer">
            <Footer></Footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: "Menu",
  components: {
    Header,
    Footer
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace("/pages/", "");
    },
  },
  data() {
    return {
      isCollapse: false,
      screenWidth: document.body.clientWidth, //获取页面宽度
    };
  },
  watch: {
    //监听
    screenWidth: {
      immediate: true,
      handler: function (newVal, oldVal) {
        if (newVal < 900) {
          //缩小
          this.isCollapse = true;
        } else if (newVal >= 900) {
          //放大
          this.isCollapse = false;
        }
      },
    },
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  created() {
    // console.log(this.$route)
  },
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.el-menu {
  border-right: solid 0px #e6e6e6;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #fff;
}
.el-submenu .el-menu-item {
  height: 50px;
  line-height: 50px;
  padding: 0 45px;
  min-width: 0px;
}
html,
body {
  height: 100%;
}
.aside {
  height: 100%;
  background-color: #545c64;
  min-width: 56px;
  width:15%  !important; //防止样式被覆盖
}
.header {
  line-height: 40px;
  height: 40px !important;
}
.footer {
  line-height: 40px;
  height: 40px !important;
}
</style>
