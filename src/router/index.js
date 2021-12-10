import Vue from 'vue'
import VueRouter from 'vue-router'
// import home from '../views/Home.vue'

Vue.use(VueRouter)

const home = r => require.ensure([], () => r(require('@/views/Home.vue')), 'home');
const menu = r => require.ensure([], () => r(require('@/views/Menu.vue')), 'menu');
const noteManage = r => require.ensure([], () => r(require('@/views/pages/noteManage')), 'noteMange');
const userManage = r => require.ensure([], () => r(require('@/views/pages/userManage')), 'userManege');


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
 export default new VueRouter({
  mode:'history',
  routes:[
    {
      path: '/',
      name:'home',
      component: home,
    },
    {
      path: '/Menu',
      name:'menu',
      component: menu,
      children:[
        {
          path: '/pages/noteManage',
          name:'noteManage',
          component: noteManage,
          meta:['便签管理']
        },
        {
          path: '/pages/userManage',
          name:'userManage',
          component: userManage,
          meta:['用户管理']
        },
      ]
    }
  ]
})
