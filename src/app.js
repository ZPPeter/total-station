import Vue from 'vue';
import Router from 'vue-router';
import App from './app.vue';
import RouterMap from "./components/routerMap.vue";

//  加载vue路由
Vue.use(Router);

var router = {};

//  创建路由对象并配置
router = new Router({
    // history: true
});

//  导入路由Map
router.map(RouterMap);

router.start(App, '#app');
