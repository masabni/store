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
        <v-toolbar-title style="width: 300px" class="pb-1 hidden-xs-only" v-text="$t('store')">
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!--<v-toolbar-items>-->
        <v-menu offset-y>
            <v-btn
                    slot="activator"
                    flat
                    dark
            >
                <v-avatar
                        :tile="true"
                        size="26"
                >
                    <img :src="$i18n.locale === 'ar'?'assets/ar.png':'https://cdn.vuetifyjs.com/images/flags/us.png'"
                         alt="avatar">
                </v-avatar>
            </v-btn>
            <v-list>
                <a hreflang="en" :href="'en'+current_route">
                    <v-list-tile avatar>
                        <v-list-tile-avatar :tile="true" size="26">
                            <img src="https://cdn.vuetifyjs.com/images/flags/us.png" alt="English">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>English</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </a>
                <a hreflang="ar" :href="'ar'+current_route">
                    <v-list-tile avatar>
                        <v-list-tile-avatar :tile="true" size="26">
                            <img src="/assets/ar.png" alt="Arabic">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>العربية</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </a>
            </v-list>
        </v-menu>
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
                <span>{{$auth.user().first_name}} {{$auth.user().last_name}}</span>
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


        <!--</v-toolbar-items>-->
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
        data() {
            return {
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
        mounted() {

        }
    }
</script>
