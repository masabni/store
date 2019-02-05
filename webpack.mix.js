let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// var tailwindcss = require('tailwindcss');
//
// mix.postCss('resources/css/main.css', 'public/css', [
//     tailwindcss('./tailwind.js'),
// ]);
// mix.webpackConfig({
//     module: {
//         rules: [
//             {
//                 test: /\.styl$/,
//                 loader: ['style-loader', 'css-loader', 'stylus-loader']
//             }
//         ]
//     }
// })
mix.js('resources/js/app.js', 'public/js').extract(["axios", "vue", "vuetify"]);
mix.sass('resources/sass/app.scss', 'public/css');
if (mix.inProduction()) {
    mix.version();
}