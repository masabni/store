<template>
    <div>
    <v-navigation-drawer
            fixed
            v-model="drawer"
            :right="$i18n.locale==='ar'"
            clipped
            app
    > <!--:clipped="$vuetify.breakpoint.mdAndUp"-->
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title :style="$i18n.locale==='ar' ? 'text-align: right; !important':''">{{$auth.user().first_name}} {{$auth.user().last_name}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-list dense>
            <v-divider></v-divider>
            <template v-for="item in items">
                <!--<v-layout-->
                        <!--row-->
                        <!--v-if="item.heading"-->
                        <!--align-center-->
                        <!--:key="item.heading"-->
                <!--&gt;-->
                    <!--<v-flex xs6>-->
                        <!--<v-subheader v-if="item.heading">-->
                            <!--{{ item.heading }}-->
                        <!--</v-subheader>-->
                    <!--</v-flex>-->
                    <!--<v-flex xs6 class="text-xs-center">-->
                        <!--<a href="#!" class="body-2 black&#45;&#45;text">EDIT</a>-->
                    <!--</v-flex>-->
                <!--</v-layout>-->
                <!--<v-list-group-->
                        <!--v-else-if="item.children"-->
                        <!--v-model="item.model"-->
                        <!--:key="item.text"-->
                        <!--:prepend-icon="item.model ? item.icon : item['icon-alt']"-->
                        <!--append-icon=""-->
                <!--&gt;-->
                    <!--<v-list-tile slot="activator">-->
                        <!--<v-list-tile-content>-->
                            <!--<v-list-tile-title>-->
                                <!--{{ item.text }}-->
                            <!--</v-list-tile-title>-->
                        <!--</v-list-tile-content>-->
                    <!--</v-list-tile>-->
                    <!--<v-list-tile-->
                            <!--v-for="(child, i) in item.children"-->
                            <!--:key="i"-->
                            <!--@click=""-->
                    <!--&gt;-->
                        <!--<v-list-tile-action v-if="child.icon">-->
                            <!--<v-icon>{{ child.icon }}</v-icon>-->
                        <!--</v-list-tile-action>-->
                        <!--<v-list-tile-content>-->
                            <!--<v-list-tile-title>-->
                                <!--{{ child.text }}-->
                            <!--</v-list-tile-title>-->
                        <!--</v-list-tile-content>-->
                    <!--</v-list-tile>-->
                <!--</v-list-group>-->
                <v-list-tile :to="item.route" :key="item.text">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title :style="$i18n.locale==='ar' ? 'text-align: right; !important':''">
                            {{ item.text }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            :clipped-right="$i18n.locale==='ar'"
            color="primary"
            dark
            app
            height="58px"
            fixed
    >
        <router-link class="d-flex" to="/">
            <img
                    height="38px"
                    width="38px"
                    :src="logo"
                    alt="Store"
            >
        </router-link>

        <v-toolbar-title style="width: 200px" class="ml-0 pl-3 hidden-sm-and-down">
            <span>{{$t('dashboard')}}</span>
        </v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-text-field
                flat
                solo-inverted
                prepend-icon="search"
                label="Search"
                class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>notifications</v-icon>
        </v-btn>
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
        <!--<v-toolbar-title class="pb-1 hidden-xs-only" v-text="$t('ma5zan')">-->
        <!--</v-toolbar-title>-->
        <!--<v-btn icon large to="/">-->
            <!--<v-avatar size="32px" tile>-->
                <!--<img-->
                        <!--:src="logo"-->
                        <!--alt="Store"-->
                <!--&gt;-->
            <!--</v-avatar>-->
        <!--</v-btn>-->
    </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "dashboard_header",
        data() {
            return {
                logo: '/assets/vuetify.png',
                dialog: false,
                drawer: null,
                items: [
                    { icon: 'dashboard', text: this.$i18n.t('dashboard'), route: '/dashboard' },
                    { icon: 'content_copy', text: this.$i18n.t('products'), route: '/products' },
                    { icon: 'history', text: this.$i18n.t('orders'), route: '/orders' },
                    { icon: 'chat_bubble', text: this.$i18n.t('chat'), route: '/chat' },
                    { icon: 'contacts', text: this.$i18n.t('stats'), route: '/stats' },
                    { icon: 'settings', text: this.$i18n.t('settings'), route: '/' },
                    { icon: 'help', text: this.$i18n.t('help'), route: '/' },
                ]
            }
        },
        computed: {
            current_route() {
                return this.$route.path
            }
        },
        mounted() {
            //
        }
    }
</script>

<style scoped>

</style>