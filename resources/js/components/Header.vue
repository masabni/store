<template>
    <v-toolbar
            color="primary"
            dark
            app
            height="58px"
            scroll-off-screen
    >
        <router-link class="d-flex" to="/">
            <img
                    height="38px"
                    width="38px"
                    :src="logo"
                    alt="Store"
            >
        </router-link>
        <v-toolbar-title style="width: 300px" class="pb-1 hidden-xs-only" v-text="$t('ma5zan')">
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
                v-if="!$auth.check()"
                flat
                color="white"
                to="/login"
        >
            <span class="white--text  hidden-sm-and-down">{{$t('login')}}</span>
            <v-icon
                    right
                    color="white"
            >
                exit_to_app
            </v-icon>
        </v-btn>
        <v-btn
                v-if="!$auth.check()"
                flat
                color="white"
                to="/register"
        >
            <span class="white--text  hidden-sm-and-down">{{$t('sign_up')}}</span>
            <v-icon
                    right
                    color="white--text"
            >
                person_add
            </v-icon>
        </v-btn>


        <v-menu offset-y v-if="$auth.check()">
            <v-toolbar-title slot="activator">
                <!--<v-icon dark>user</v-icon>-->
                <span>{{$auth.user().full_name}}</span>
                <v-icon dark>arrow_drop_down</v-icon>
            </v-toolbar-title>

            <v-list>
                <v-list-tile avatar to="/dashboard">
                    <v-list-tile-avatar :tile="true" >
                        <v-icon>dashboard</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>{{$t('dashboard')}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile avatar @click="$auth.logout()">
                    <v-list-tile-avatar :tile="true" >
                        <v-icon>power_settings_new</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>{{$t('logout')}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-menu>

        <v-menu offset-y :offset-x="$i18n.locale === 'en'">
            <template slot="activator">
                <v-btn
                        flat
                        dark
                >
                    <v-avatar
                            :tile="true"
                            size="26"
                    >
                        <img :src="$i18n.locale === 'ar'? lang_items.ar.image : lang_items.en.image"
                             alt="avatar">
                    </v-avatar>
                </v-btn>
            </template>
            <v-list>
                <v-list-tile avatar
                             v-for="(item, index) in lang_items"
                             :key="index"
                             @click="$i18n.locale !== item.lang ? change_lang(item.lang):''"
                >
                    <v-list-tile-avatar :tile="true" size="26">
                        <img :src="item.image" alt="English">
                    </v-list-tile-avatar>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>

    </v-toolbar>

    <!--<nav id="nav">-->
    <!--<ul>-->
    <!--&lt;!&ndash;UNLOGGED&ndash;&gt;-->
    <!--<li v-if="!$auth.check()" v-for="(route, key) in routes.unlogged" v-bind:key="route.path">-->
    <!--<router-link :to="{ name : route.path }" :key="key">-->
    <!--{{route.name}}-->
    <!--</router-link>-->
    <!--</li>-->
    <!--&lt;!&ndash;LOGGED USER&ndash;&gt;-->
    <!--<li v-if="$auth.check('buyer') || $auth.check('store')" v-for="(route, key) in routes.user"-->
    <!--v-bind:key="route.path">-->
    <!--<router-link :to="{ name : route.path }" :key="key">-->
    <!--{{route.name}}-->
    <!--</router-link>-->
    <!--</li>-->
    <!--&lt;!&ndash;LOGGED ADMIN&ndash;&gt;-->
    <!--<li v-if="$auth.check('admin')" v-for="(route, key) in routes.admin" v-bind:key="route.path">-->
    <!--<router-link :to="{ name : route.path }" :key="key">-->
    <!--{{route.name}}-->
    <!--</router-link>-->
    <!--</li>-->
    <!--&lt;!&ndash;LOGOUT&ndash;&gt;-->
    <!--<li v-if="$auth.check()">-->
    <!--<a href="#" @click.prevent="$auth.logout()">Logout</a>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</nav>-->
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                lang_items: {
                    ar: {title: 'العربية', lang: 'ar', image: '/assets/ar.png'},
                    en: {title: 'English', lang: 'en', image: 'https://cdn.vuetifyjs.com/images/flags/us.png'}
                },
                logo: '/assets/vuetify.png',
                extension: true,
                title: 'Store',
                routes: {
                    // UNLOGGED
                    unlogged: [
                        {
                            name: 'Register',
                            path: 'register'
                        },
                        {
                            name: 'Login',
                            path: 'login'
                        }
                    ],

                    // LOGGED USER
                    user: [
                        {
                            name: 'Dashboard',
                            path: 'dashboard'
                        }
                    ],
                    // LOGGED ADMIN
                    admin: [
                        {
                            name: 'Dashboard',
                            path: 'admin.dashboard'
                        }
                    ]
                }
            }
        },
        computed: {
            current_route() {
                return this.$route.path
            }
        },
        methods: {
            change_lang(lang) {
                window.location.href = lang + this.current_route;
            }
        },
        mounted() {

        }
    }
</script>
