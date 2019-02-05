import VueI18n from 'vue-i18n';
import ar from './lang/ar';
import en from './lang/en';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: document.querySelector('html').getAttribute('lang'), // localStorage.getItem('lang')
    fallbackLocale: 'ar',
    messages: {
        'en': en,
        'ar': ar
    } // set locale messages
});



// const loadedLanguages = [localStorage.getItem('lang')]; // our default language that is preLoaded
// Vue.config.lang = localStorage.getItem('lang') || 'ar';

// function setI18nLanguage (lang) {
//     i18n.locale = lang;
//     axios.defaults.headers.common['Accept-Language'] = lang;
//     document.querySelector('html').setAttribute('lang', lang);
//     localStorage.setItem('lang',lang);
//     return lang
// }

// export function loadLanguageAsync (lang) {
//     if (i18n.locale !== lang) {
//         if (!loadedLanguages.includes(lang)) {
//             return import(/* webpackChunkName: "lang-[request]" */ `../lang/${lang}`).then(msgs => {
//                 i18n.setLocaleMessage(lang, msgs.default);
//                 loadedLanguages.push(lang);
//                 return setI18nLanguage(lang);
//             })
//         }
//         return Promise.resolve(setI18nLanguage(lang))
//     }
//     return Promise.resolve(lang)
// }

export default i18n;