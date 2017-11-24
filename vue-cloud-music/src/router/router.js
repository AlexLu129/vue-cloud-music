import Vue from 'vue';
import VueRouter from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'; /* 英文Hello.vue模版，并赋值给变量Hello,这里是“@”相当于“../” */

Vue.use(VueRouter);  /* 使用路由 */

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld', /* 这里的name同上，暂时没发现有什么意思 */
//       component: HelloWorld,  /* 注册Hello组件 */
//     },
//   ],
// });

const router = new VueRouter({
  routes: [{
    path: "/index",
    componet: require('../views/index'),
    children: [
      {
        path: 'rage',
        component: require('../views/rage')
      },
      {
        path: 'songList',
        component: require('../views/songList')
      },
      {
        path: 'leaderBoard',
        component: require('../views/leaderBoard')
      },
      {
        path: 'hotSinger',
        componet: require('../views/hotSinger')
      }
    ]
  }, {
    name: 'playerDetail',
    path: '/playerDetail/:id',
    component: require('../views/playerDetail')
  }, {
    name: 'playListDetail',
    path: 'playListDetail/:id',
    component: require('../views/playListDetail')
  }, {
    path: '*', redirect: '/index/rage'
  }]
})
export default router
