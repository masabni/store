import Vue from 'vue'
import {Form, Errors} from './helpers';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors'
window._ = require('lodash');
window.Popper = require('popper.js').default;
window.moment = require('moment');
// Set Vue globally
window.Vue = Vue;
Vue.use(Vuetify, {
    rtl: document.querySelector('html').getAttribute('lang') === "ar",
    theme: {
        primary: colors.teal.darken1, 
        secondary: colors.amber.darken1,
        accent: colors.red.darken1
    }
    // lang: {
    //     locales: { en, ar},
    //     current: document.querySelector('html').getAttribute('lang')
    // }
});

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');
window.Form = Form;
window.Errors = Errors;
// let user_token = localStorage.getItem('laravel-vue-spa');
// if(user_token !== null && user_token !== "undefined"){
//     window.axios.defaults.headers.common['Authorization'] = 'Bearer '+ user_token;
// }
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.baseURL = document.head.querySelector('base').href;
window.axios.defaults.baseURL = document.head.querySelector('meta[name="api-base-url"]').content;
// set the timeout duration for axios requests (20 seconds)
window.axios.defaults.timeout = 20000;

window.axios.defaults.headers.common['Accept-Language'] = document.querySelector('html').getAttribute('lang');
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */
let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
window.events = new Vue();

window.flash = function(message, level = 'success', hideAfter = 5000, showResendEmailBtn = false) {
    window.events.$emit('flash', { message, level, hideAfter, showResendEmailBtn });
};
window.snackbar = function(message, level = 'success', hideAfter = 5000) {
    window.events.$emit('snackbar', { message, level, hideAfter });
};
// try {
//     window.$ = window.jQuery = require('jquery');
//
//     require('bootstrap-sass');
// } catch (e) {}

window.Event = new class {
    constructor(){
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }

    destroy(event, callback) {
        this.vue.$off(event, callback);
    }
};
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
