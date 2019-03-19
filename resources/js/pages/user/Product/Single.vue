<template>
    <modal-layout>
        <v-toolbar slot="toolbar" dark app color="primary">
            <v-btn
                    flat
                    icon
                    color="white"
                    @click.native="redirectBack()"
            >
                <v-icon v-if="$i18n.locale==='ar'">arrow_forward</v-icon>
                <v-icon v-else>arrow_back</v-icon>
            </v-btn>
            <v-spacer/>
            <v-toolbar-title class="text-xs-center white--text">{{product.name}}</v-toolbar-title>
            <v-spacer/>
        </v-toolbar>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs6>
                    <v-carousel>
                        <v-carousel-item
                                v-for="(item,i) in items"
                                :key="i"
                                :src="'storage/products/'+item"
                                reverse-transition="fade"
                                transition="fade"
                        ></v-carousel-item>
                    </v-carousel>
                </v-flex>
                <v-flex xs6 :class="'text-sm-'+dir">
                    <v-layout row wrap>
                        <v-flex xs12>
                            <div class="" v-for="category in product.categories">
                                <v-chip color="primary" text-color="white">{{category.name}}</v-chip>
                            </div>
                        </v-flex>
                        <v-flex xs12><h2 class=""><strong v-text="product.name"></strong></h2></v-flex>
                        <v-flex xs12>
                            <div class=""><p v-text="product.description"></p></div>
                        </v-flex>
                    </v-layout>
                    <div :class="'text-sm-'+dir">
                        <h4 v-if="product.sale" class="old-price grey--text"
                            v-text="formatPrice(product.price)+ $t('s_p')" style="text-decoration: line-through"></h4>
                        <h4 v-text="formatPrice((product.price * ( (100 - product.sale) / 100 )))+ $t('s_p')"></h4>
                        <!--<h4>{{$t('s_p')}}</h4>-->

                    </div>
                    <v-layout row wrap>
                        <v-flex xs2 v-for="tag in product.tags" :key="tag.id">
                            <div class="text-xs-center">
                                <v-chip>{{tag.name}}</v-chip>
                            </div>
                        </v-flex>
                    </v-layout>
                    <v-flex xs12>
                        <v-subheader class="pl-0">{{$t('quantity')}}:</v-subheader>
                        <v-slider
                                v-model="qty"
                                thumb-color="primary"
                                thumb-label="always"
                                min="1"
                                max="20"
                                step="1"
                                ticks
                        ></v-slider>
                    </v-flex>
                    <v-form autocomplete="" @submit.prevent="addToCart">
                        <v-btn
                                :loading="loading"
                                block
                                type="submit"
                                color="primary">
                            {{$t('add_to_cart')}}
                            <v-icon right>add_shopping_cart</v-icon>
                        </v-btn>
                    </v-form>
                </v-flex>
                <v-flex xs12 mt-2 :class="'text-sm-'+dir">
                    <v-layout row wrap>
                        <v-spacer></v-spacer>
                        <v-card>
                            <v-card-title primary-title>
                                <div>
                                    <v-tabs centered
                                            v-model="model"
                                            slider-color="primary">
                                        <v-tab
                                                :key="1"
                                                :href="`#tab-1`">
                                            {{$t('description')}}
                                        </v-tab>
                                        <v-tab
                                                :key="'2'"
                                                :href="`#tab-2`">
                                            {{$t('reviews')}}
                                        </v-tab>
                                    </v-tabs>
                                    <v-tabs-items v-model="model">
                                        <v-tab-item
                                                :key="'1'"
                                                :value="`tab-1`">
                                            <v-card flat>
                                                <v-card-text v-text="product.description"></v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                        <v-tab-item
                                                :key="'2'"
                                                :value="`tab-2`">
                                            <v-card flat>
                                                <v-card-text v-text="text"></v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                    </v-tabs-items>
                                </div>
                            </v-card-title>
                        </v-card>

                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </modal-layout>
</template>

<script>
    import ModalLayout from "../../../layouts/ModalLayout";

    export default {
        components: {ModalLayout},
        data() {
            return {
                product: Object,
                items: [],
                loading: false,
                dir: '',
                qty: 1,
                model: 'tab-2',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        },
        name: "show",
        created() {
            this.dir = this.$vuetify.rtl === false ? 'left' : 'right';
            this.$http.get('products/' + this.$route.params.id).then((res) => {
                this.product = res.data;
                this.items = [this.product.picture];
                console.log(this.product, this.items)
            }).catch(error => {
                flash(error.message, 'error');
            });
        },
        methods: {
            redirectBack() {
                let self = this;
                self.$nextTick(() => self.$router.push({name: "products"}));
            },
            addToCart() {
                this.loading = true;
                this.$http.post('add-cart/' + this.product.id,{qty:this.qty}).then((res) => {
                    console.log(res.data)
                    this.loading = false;
                }).catch(error => {
                    flash(error.message, 'error');
                });
            }
        }
    }
</script>

<style scoped>

</style>