import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/Login";
import Cookies from 'js-cookie';


// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/index",
        name: 'index',
        component: () => import('./components/Index.vue'),
        children: [//二级路由
            {
                path: 'list',
                component: () => import('./components/List.vue')
            },
            {
                path: 'add',
                name: 'add',
                component: () => import('./components/Add.vue')
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

/**
 * to: Route: 即将要进入的目标 路由对象
 * from: Route: 当前导航正要离开的路由
 */
router.beforeEach((to, from, next) => {
    if (to.fullPath.endsWith("/static")){
        next();
    }
    const isLogin = Cookies.get("isLogin");
    if (to.name === "login") {
        if (isLogin) {
            next({name: "index"});
        } else {
            next();
        }
    } else if (!isLogin) {
        //没有登录去登录页面
        next({name: 'login'})
    }
    next();
});


export default router;