<template>
    <v-footer color="primary" absolute app style="padding-right: 20px !important;"> <!--class="blue darken-2"-->
        <v-layout row wrap align-center>
            <v-flex xs12>
                <div class="white--text ml-3">
                    {{$t('made_with')}}
                    <v-icon class="red--text">favorite</v-icon>
                    <span v-html="$t('copyright')"></span>
                    <!--by <a class="white&#45;&#45;text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>-->
                    <!--and <a class="white&#45;&#45;text" href="https://github.com/vwxyzjn">Costa Huang</a>-->
                </div>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>