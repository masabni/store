<template>
    <v-layout row wrap>
        <v-flex>
            <v-container
                    fluid
                    grid-list-md
                    pb-2
            >
                <v-layout row wrap>
                    <v-flex
                            v-for="product in products"
                            xs12 md3 mx-2 my-3
                            :key="product.name"
                    >
                        <!--v-bind="{ [`xs${card.flex}`]: true }"-->
                        <v-hover>
                            <v-card
                                    slot-scope="{ hover }"
                                    :class="`elevation-${hover ? 12 : 2}`"
                            >
                                <v-img
                                        :src="'storage/products/'+product.picture"
                                        height="250"
                                />
                                <v-card-title primary-title>
                                    <div>
                                        <router-link tag="div" class="headline" :to="{ name: 'single product', params: { id: product.id }}" v-text="product.name"></router-link>
                                        <span v-if="product.sale" class="old-price grey--text"
                                              v-text="formatPrice(product.price)"></span>
                                        <span v-text="formatPrice((product.price * ( (100 - product.sale) / 100 )))"></span>
                                        <span>{{$t('s_p')}}</span>
                                        <div>
                                            <v-chip v-for="category in product.categories" :key="category.id">
                                                {{category.name}}
                                            </v-chip>
                                        </div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-card-actions>
                                        <v-btn flat color="primary" @click="editProduct(product)">{{$t('update')}}
                                        </v-btn>
                                        <v-btn flat @click="deleteProduct(product)">{{$t('delete')}}</v-btn>
                                        <v-spacer></v-spacer>
                                        <!--<v-btn icon @click="show = !show">-->
                                        <!--<v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>-->
                                        <!--</v-btn>-->
                                    </v-card-actions>
                                    <!--<v-spacer></v-spacer>-->
                                    <!--<v-btn icon>-->
                                    <!--<v-icon>favorite</v-icon>-->
                                    <!--</v-btn>-->
                                    <!--<v-btn icon>-->
                                    <!--<v-icon>bookmark</v-icon>-->
                                    <!--</v-btn>-->
                                    <!--<v-btn icon>-->
                                    <!--<v-icon>share</v-icon>-->
                                    <!--</v-btn>-->
                                </v-card-actions>
                                <v-slide-y-transition>
                                    <v-card-text v-text="product.description.length > 44 ? product.description.substring(0,44) + '...' : product.description">
                                    </v-card-text>
                                </v-slide-y-transition>
                            </v-card>

                        </v-hover>
                    </v-flex>
                    <!--<v-tooltip top>-->
                    <v-btn
                            color="secondary"
                            dark
                            fixed
                            bottom
                            :left="$i18n.locale === 'ar'"
                            :right="$i18n.locale === 'en'"
                            fab
                            @click="addProduct"
                    >
                        <v-icon>add</v-icon>
                    </v-btn>
                    <!--<span>{{$t('add_product')}}</span>-->
                    <!--</v-tooltip>-->
                </v-layout>
            </v-container>
        </v-flex>
        <confirm ref="confirm"></confirm>
    </v-layout>
</template>

<script>
    export default {
        name: "products",
        data: () => ({
            show: false,
            products: [],
        }),
        methods: {
            addProduct() {
                this.$router.push({name: "add product"});
            },
            editProduct(product) {
                this.$router.push({name: "edit product", params: {id: `${product.id}`}});
            },
            deleteProduct(product) {
                const index = this.products.indexOf(product);
                this.$refs.confirm.open(this.$i18n.t('delete_product'), this.$i18n.t('are_you_sure'), {color: 'red'}).then(() => {
                    this.$http.delete('delete-product/', {params: {id: product.id}}).then((res) => {
                        snackbar(res.data.msg);
                        this.products.splice(index, 1);
                    }).catch((error) => {
                        snackbar(`${error.message}`, 'danger');
                    });
                }).catch(() => {
                });
            },
        },
        mounted() {
            this.$http.get('products').then((res) => {
                this.products = res.data
            }).catch(error => {
                snackbar(error.message, 'error');
            });
        },
    }
</script>

<style scoped>

</style>