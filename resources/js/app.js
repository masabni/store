import 'es6-promise/auto'
import axios from 'axios'
import './bootstrap'
import store from './store'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import i18n from './i18n-setup';
import Index from './Index'
import auth from './auth'
import router from './router'
import NProgress from 'vue-nprogress'
import NprogressContainer from 'vue-nprogress/src/NprogressContainer';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// Set Vue router
Vue.router = router
Vue.use(VueRouter)

// Set Vue authentication
Vue.use(VueAxios, axios)
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`
Vue.use(VueAuth, auth)

// Set Vue loader
const options = {
    latencyThreshold: 50, // Number of ms before progressbar starts showing, default: 100,
    router: true, // Show progressbar w hen navigating routes, default: true
    http: true // Show progressbar when doing Vue.http, default: true
};
const nprogress = new NProgress('.nprogress-container');
Vue.use(NProgress, options);
// Vue.component("flash", require("./components/partials/Flash.vue"));
Vue.component("flash", require("./Flash.vue"));
Vue.component('NprogressContainer', NprogressContainer);
Vue.component('confirm', require('./components/ConfirmDialogComponent.vue'));

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    nprogress.start();
    return config;
}, function (error) {
    // Do something with request error
    nprogress.done();
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    nprogress.done();
    return response;
}, function (error) {
    // Do something with response error
    // if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
    //     auth.methods.unsetToken();
    // }else if (error.status === 408 || error.code === 'ECONNABORTED') {
    //     console.log(`A timeout happend on url ${error.config.url}`);
    // }
    nprogress.done();
    // flash(error.message, 'danger');
    return Promise.reject(error);
});

Vue.mixin({
    methods: {
        formatPrice(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
});
Vue.directive("color", {
    bind(el, bindings, vnode) {

        if (bindings.modifiers['delay']) {
            if (bindings.modifiers['blink']) {
                setTimeout(() => {
                    if (bindings.arg === "background") {
                        setTimeout(() => {
                            el.style.backgroundColor = bindings.value;
                        }, 3000)
                    } else {
                        setTimeout(() => {
                            el.style.color = bindings.value;
                        }, 3000)
                    }
                });
            } else {
                if (bindings.arg === "background") {
                    setTimeout(() => {
                        el.style.backgroundColor = bindings.value;
                    }, 3000)
                } else {
                    setTimeout(() => {
                        el.style.color = bindings.value;
                    }, 3000)
                }

            }
        }
        console.log(el, bindings.value, vnode)
    }
});
const app = new Vue({
    el: '#app',
    store,
    router,
    nprogress,
    i18n,
    render: h => h(Index)
});
