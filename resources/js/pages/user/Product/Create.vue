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
            <v-toolbar-title class="text-xs-center white--text">{{$t('product_creation')}}</v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items>
                <v-btn
                        :loading="loading"
                        flat
                        color="white"
                        @click.native="submit()"
                >
                    {{$t('save')}}
                    <v-icon right>save</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-form autocomplete="off" @submit.prevent="login"
                @keydown.native="form.errors.clear($event.target.name)">
            <v-container>
                <v-layout wrap row>
                    <v-flex xs12 sm6 md6>
                        <v-text-field
                                v-model="form.name"
                                :error-messages="form.errors.get('name')"
                                :class="{ 'error--text': form.errors.has('name') }"
                                :label="$t('product_name')"
                                outline
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                        <v-autocomplete
                                v-model="form.categories"
                                :error-messages="form.errors.get('categories')"
                                :class="{ 'error--text': form.errors.has('categories') }"
                                :items="categories"
                                item-text="name"
                                item-value="id"
                                chips
                                :label="$t('category')"
                                hide-no-data
                                multiple
                                single-line
                                outline
                        ></v-autocomplete>
                    </v-flex>
                    <v-flex xs12 md4>
                        <v-text-field
                                v-model="form.price"
                                :error-messages="form.errors.get('price')"
                                :class="{ 'error--text': form.errors.has('price') }"
                                :label="$t('price')"
                                type="number"
                                outline
                        >
                            <v-fade-transition slot="append">
                                <span>{{$t('s_p')}}</span>
                            </v-fade-transition>
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                        <v-text-field
                                v-model="form.sale"
                                :error-messages="form.errors.get('sale')"
                                :class="{ 'error--text': form.errors.has('sale') }"
                                :label="$t('sale')"
                                min="0"
                                max="100"
                                type="number"
                                outline
                        >
                            <v-fade-transition slot="append">
                                <span>%</span>
                            </v-fade-transition>
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                        <v-text-field
                                :label="$t('price_after_sale')"
                                :value="formatPrice(salePrice)"
                                disabled
                                outline
                        >
                            <v-fade-transition slot="append">
                                <span>{{$t('s_p')}}</span>
                            </v-fade-transition>
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                        <image_upload :label="$t('upload_product_picture')"
                                      type="image/jpg, image/jpeg, image/png"
                                      server="/api/product_upload_temp"
                                      maxSize="5MB"
                                      v-model="form.picture_id"
                                      :error-messages="form.errors.get('picture_id')"
                                      :class="{ 'error--text': form.errors.has('picture_id') }">
                        </image_upload> <!--:file="image ? 'storage/user_image/'+image : ''"-->
                        <span class="error--text" v-if="form.errors.has('picture_id')"
                              v-text="form.errors.get('picture_id')"></span>
                    </v-flex>
                    <v-flex xs12 md8>
                        <v-combobox
                                v-model="form.tags2"
                                :error-messages="form.errors.get('tags2')"
                                :class="{ 'error--text': form.errors.has('tags2') }"
                                :items="tags"
                                item-text="name"
                                item-value="id"
                                :search-input.sync="search"
                                hint="Maximum of 5 tags"
                                label="Add some tags"
                                multiple
                                persistent-hint
                                outline
                                single-line
                                chips
                        >
                            <template slot="no-data">
                                <v-list-tile>
                                    <v-list-tile-content>
                                        <v-list-tile-title>
                                            No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                                        </v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </template>
                        </v-combobox>
                    </v-flex>
                    <v-flex>
                        <v-textarea
                                v-model="form.description"
                                :error-messages="form.errors.get('description')"
                                :class="{ 'error--text': form.errors.has('description') }"
                                :label="$t('product_description')"
                                outline
                                rows="8"
                        ></v-textarea>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-btn
                    :loading="loading"
                    block
                    color="secondary"
                    @click="submit()"
            >
                {{$t('save')}}
                <v-icon right>save</v-icon>
            </v-btn>
        </v-form>
    </modal-layout>
</template>

<script>
    import ModalLayout from "../../../layouts/ModalLayout.vue";
    import image_upload from "../../../components/ImageUpload.vue";

    export default {
        components: {
            ModalLayout,
            image_upload
        },
        data: () => ({
            loading: false,
            form: new Form({
                id: '',
                name: null,
                price: 0,
                categories: [],
                description: null,
                sale: 0,
                picture: null,
                picture_id: null,
                tags: [],
                tags2: [],
                selling_count: null,
            }),
            tags: [],
            search: null,
            categories: [],
        }),
        watch: {

        },
        computed: {
            salePrice() {
                let totalValue = this.form.price * ( (100 - this.form.sale) / 100 );
                return totalValue.toFixed(2);
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                this.$http.all([
                    this.$http.get('/categories'),
                    this.$http.get('/tags'),
                ]).then(this.$http.spread((categoriesRes, tagsRes) => {
                    this.categories = categoriesRes.data;
                    this.tags = tagsRes.data;
                })).catch((error) => {flash(error.message, 'error');});
            },
            submit() {
                this.loading = true;
                this.processTags();
                this.form.post('/save-product')
                    .then(response => {
                        this.loading = false;
                        flash(response.msg);
                        this.redirectBack();
//                        this.$store.commit('setCurrentUser', response.data);
                    }).catch(error => {
                    flash(error.message, 'error');
                    this.loading = false;
                });
            },
            processTags() {
                this.form.tags = _.map(this.form.tags2, function (item) {
                    if(item.hasOwnProperty('name'))
                        return item.name
                    return item
                });
            },
            redirectBack() {
                let self = this;
                self.$nextTick(() => self.$router.push({name: "products"}));
            }
        }
    };
</script>
