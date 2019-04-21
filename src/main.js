import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router.js"
import App from "./App";
import Cookies from 'js-cookie';
import axios from 'axios'
import fetch from '../static/js/fetch.js'

Vue.prototype.$http = axios;
Vue.prototype.$cookies = Cookies;
Vue.prototype.fetch = fetch;

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

