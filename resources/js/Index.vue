<template>
    <v-app light v-cloak>
        <nprogress-container></nprogress-container>
        <!--<snackbar></snackbar>-->
        <router-view name="header"></router-view>
        <v-content transition="slide-x-transition" >
        <flash></flash>
            <!--<v-container fluid>-->
                <router-view></router-view>
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