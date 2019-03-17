import VueI18n from 'vue-i18n';
import ar from './lang/ar';
import en from './lang/en';
let messages = {ar:ar,en:en};
// let messages = {ar:{made_with: 'صُنِعَ بالـ ',copyright: 'جميع الحقوق محفوظة &copy; ' + new Date().getFullYear()},en:{ made_with: 'Made with',copyright: 'All rights reserved &copy; ' + new Date().getFullYear()}};
// if(document.querySelector('html').getAttribute('lang') === 'ar'){
//     import(/* webpackChunkName: "js/ar" */'./lang/ar')
//         .then((ar) => {
//             messages.ar = ar.default;
//         });
// } else {
//     import(/* webpackChunkName: "js/en" */'./lang/en')
//         .then((en) => {
//             messages.en = en.default;
//         });
// }
const i18n = new VueI18n({
    locale: document.querySelector('html').getAttribute('lang'), // localStorage.getItem('lang')
    fallbackLocale: 'ar',
    messages: messages // set locale messages
});

export default i18n;