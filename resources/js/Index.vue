<template>
    <v-app light v-cloak>
        <nprogress-container></nprogress-container>
        <!--<snackbar></snackbar>-->
        <router-view name="header"></router-view>
        <v-content>
        <flash></flash>
            <!--<v-container fluid>-->
            <v-fade-transition mode="out-in">
                <router-view></router-view>
            </v-fade-transition>
            <!--</v-container>-->
        </v-content>
        <Footer></Footer>
    </v-app>
</template>

<script>
  import Footer from './components/Footer.vue';
  export default {
    data() {
      return {
        //
      }
    },
    components: {
      Footer
    }
  }
</script>