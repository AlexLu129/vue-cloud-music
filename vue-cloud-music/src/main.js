import Vue from 'vue';
import App from './App';
import Axios from './utils/diyaxios';
import router from './router/router';
import store from './store';
import MuseUI from 'muse-ui';
import Toast from 'vue-easy-toast';
import 'muse-ui/dist/muse-ui.css';
import './assets/theme.less';
import FastClick from 'fastclick'; // 解决移动端300毫秒延迟
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body)
    }, false);
}

Vue.use(MuseUI);
Vue.use(Toast);
Vue.prototype.$http = Axios; // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等

// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',   /* 定义作用范围就是index.html里的id为app的范围内 */
  router,   /* 引入路由 */
  store,
  render: h => h(App),
    //render: h => h(App), 也可以用以下代码代替
    // template: '<App/>',  给Vue实例初始一个App组件作为template 相当于默认组件
    // components: { App }  注册引入的组件App.vue
});
