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

        <v-stepper v-model="step" vertical>
            <v-stepper-header>
                <v-stepper-step step="1" :complete="step > 1">{{$t('your_information')}}</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2">{{$t('confirmation')}}</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
                <v-form autocomplete="off" @submit.prevent="login"
                        @keydown.native="form.errors.clear($event.target.name)">
                    <v-stepper-content step="1">

                        <v-layout wrap justify-space-between>
                            <v-flex xs12 sm5 md5>
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
                        </v-layout>
                        <v-layout wrap justify-space-between>
                            <v-flex xs12 md3>
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
                            <v-flex xs12 md2>
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
                            <v-flex xs12 md3>
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
                            <v-flex xs12 md3>
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
                        </v-layout>
                        <v-layout wrap justify-space-between>
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
                            <v-flex xs12 md7>
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
                                                    No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd>
                                                    to create a new one
                                                </v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </template>
                                </v-combobox>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap>
                            <v-flex>
                                <v-textarea
                                        v-model="form.description"
                                        :error-messages="form.errors.get('description')"
                                        :class="{ 'error--text': form.errors.has('description') }"
                                        :label="$t('product_description')"
                                        outline
                                        rows="3"
                                ></v-textarea>
                            </v-flex>
                        </v-layout>

                        <v-btn
                                :loading="loading"
                                block
                                color="secondary"
                                @click="step++"
                        >
                            {{$t('save')}}
                            <v-icon right>save</v-icon>
                        </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                        <v-layout wrap>
                            <v-flex md4>
                                <v-select
                                        v-model="form.variation"
                                        :error-messages="form.errors.get('variation')"
                                        :class="{ 'error--text': form.errors.has('variation') }"
                                        :items="variations"
                                        item-text="name"
                                        item-value="value"
                                        :label="$t('variation_theme')"
                                        :readonly="isEditing"
                                        outline
                                        @change="variation_choose($event)"
                                >
                                    <v-slide-x-reverse-transition
                                            slot="append-outer"
                                            mode="out-in"
                                    >
                                        <v-icon
                                                :key="`icon-${isEditing}`"
                                                :color="isEditing ? 'success' : 'info'"
                                                @click="isEditing = !isEditing"
                                                v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
                                        ></v-icon>
                                    </v-slide-x-reverse-transition>
                                </v-select>
                            </v-flex>
                        </v-layout>

                        <v-expand-transition>
                            <v-layout align-center justify-center v-if="form.variation">
                                <v-flex>

                                    <v-card>
                                        <v-card-title class="headline font-weight-regular blue-grey white--text">Add
                                            variations
                                        </v-card-title>
                                        <!--<v-card-title><h3>Add variations</h3></v-card-title>-->
                                        <v-card-text>
                                            <!--<v-divider></v-divider>-->
                                            <h3 class="indigo--text">List all your variation terms for the themes
                                                below</h3>
                                            <h5>For the fields below, list the variations that exist for your product.
                                                For
                                                example, If you're selling Shirts in the sizes Small, Medium and Large,
                                                and in the colors White and Black, list all those terms. This is
                                                necessary even
                                                if you don't carry every combination, or temporally
                                                out of stock on some (in this case set the quantity to zero).
                                            </h5>
                                            <v-layout wrap justify-space-between mt-3>
                                                <v-flex xs12 md5
                                                        v-if="form.variation === 'CS' || form.variation === 'C'">
                                                    <v-combobox
                                                            v-model="colors"
                                                            :items="form.color"
                                                            item-text="name"
                                                            item-value="id"
                                                            hint="Example: Red, Green, Black"
                                                            label="Color"
                                                            multiple
                                                            persistent-hint
                                                            outline
                                                            single-line
                                                            chips
                                                    >
                                                    </v-combobox>
                                                </v-flex>
                                                <v-flex xs12 md5
                                                        v-if="form.variation === 'CS' || form.variation === 'S'">
                                                    <v-combobox
                                                            v-model="sizes"
                                                            :items="form.size"
                                                            item-text="name"
                                                            item-value="id"
                                                            hint="Example: Small, Medium, Large"
                                                            label="Size"
                                                            multiple
                                                            persistent-hint
                                                            outline
                                                            single-line
                                                            chips
                                                    >
                                                    </v-combobox>
                                                </v-flex>
                                                <v-flex xs12 md5 v-if="form.variation === 'PQ'">
                                                    <v-combobox
                                                            v-model="package_quantities"
                                                            :items="form.package_quantity"
                                                            item-text="name"
                                                            item-value="id"
                                                            hint="Example: Small, Medium, Large"
                                                            label="Package Quantity"
                                                            multiple
                                                            persistent-hint
                                                            outline
                                                            single-line
                                                            chips
                                                    >
                                                    </v-combobox>
                                                </v-flex>
                                            </v-layout>
                                            <v-btn
                                                    @click="add_variants"
                                                    color="primary"
                                            >
                                                Add Variations
                                            </v-btn>


                                            <!--<v-divider></v-divider>-->
                                        </v-card-text>
                                    </v-card>


                                </v-flex>
                            </v-layout>
                        </v-expand-transition>
                        <v-expand-transition>
                            <v-layout mt-3 v-if="showTable">
                                <v-data-table
                                        v-model="selected"
                                        :headers="headers"
                                        :items="desserts"
                                        select-all
                                        item-key="name"
                                        class="elevation-1"
                                        hide-actions
                                >
                                    <template slot="headers" slot-scope="props">
                                        <tr>
                                            <th>
                                                <v-checkbox
                                                        :input-value="props.all"
                                                        :indeterminate="props.indeterminate"
                                                        primary
                                                        hide-details
                                                        @click.stop="toggleAll"
                                                ></v-checkbox>
                                            </th>
                                            <th
                                                    v-for="header in props.headers"
                                                    :key="header.text"

                                            >
                                                {{ header.text }}
                                            </th>
                                        </tr>
                                    </template>
                                    <template slot="items" slot-scope="props">
                                        <tr :active="props.selected">
                                            <td>
                                                <v-checkbox
                                                        :input-value="props.selected"
                                                        primary
                                                        hide-details
                                                ></v-checkbox>
                                            </td>
                                            <td>{{ props.item.color }}</td>
                                            <td class="text-xs-center">
                                                <v-layout align-center justify-center mt-3>
                                                    <v-flex md7>
                                                        <v-text-field
                                                                v-model="props.item.price"
                                                                outline
                                                        >
                                                            <v-fade-transition slot="append">
                                                                <span>{{$t('s_p')}}</span>
                                                            </v-fade-transition>
                                                        </v-text-field>
                                                    </v-flex>
                                                </v-layout>
                                            </td>
                                            <td class="text-xs-center">
                                                <v-checkbox
                                                        :input-value="props.item.apply_sale"
                                                        primary
                                                        hide-details
                                                ></v-checkbox>
                                            </td>
                                            <td class="text-xs-center">
                                                <v-layout align-center justify-center mt-3>
                                                    <v-flex md5>
                                                        <v-text-field
                                                                v-model="props.item.quantity"
                                                                outline
                                                        ></v-text-field>
                                                    </v-flex>
                                                </v-layout>
                                            </td>
                                        </tr>
                                    </template>
                                </v-data-table>
                            </v-layout>
                        </v-expand-transition>
                        <v-btn
                                :loading="loading"
                                block
                                color="secondary"
                                @click="submit"
                        >
                            {{$t('save')}}
                            <v-icon right>save</v-icon>
                        </v-btn>
                        <v-btn
                                :loading="loading"
                                @click="step--"
                                flat
                                block
                        ><!--:disabled="this.form.errors.any()"-->
                            <span v-html="$t('previous')"></span>
                        </v-btn>
                    </v-stepper-content>
                </v-form>
            </v-stepper-items>
        </v-stepper>

        <!--<v-btn-->
        <!--:loading="loading"-->
        <!--block-->
        <!--color="secondary"-->
        <!--@click="submit()"-->
        <!--&gt;-->
        <!--{{$t('save')}}-->
        <!--<v-icon right>save</v-icon>-->
        <!--</v-btn>-->
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
        data() {
            return {
                showTable: true,
                isEditing: false,
                variations: [
                    {'value': 'S', 'name': this.$i18n.t('size')},
                    {'value': 'C', 'name': this.$i18n.t('color')},
                    {'value': 'CS', 'name': this.$i18n.t('color,size')},
                    {'value': 'PQ', 'name': this.$i18n.t('package_quantity')},
                ],
                step: 2,
                loading: false,
                colors: [],
                sizes: [],
                package_quantities: [],
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
                    variation: '',
                    selling_count: null,
                    size: [],
                    color: [],
                    package_quantity: [],

                }),
                tags: [],
                search: null,
                categories: [],

                selected: [],
                headers: [
                    {
                        sortable: false,
                        text: 'Color',
                        align: 'left',
                    },
                    {sortable: false, text: 'Price'},
                    {sortable: false, text: 'Apply Sale'},
                    {sortable: false, text: 'Quantity'},
                ],
                desserts: [
                    {
                        color: 'Red',
                        price: '',
                        apply_sale: true,
                        quantity: '',
                    },
                    {
                        color: 'Black',
                        price: '',
                        apply_sale: true,
                        quantity: '',
                    },
                ]
            }
        },
        watch: {},
        computed: {
            salePrice() {
                let totalValue = this.form.price * ((100 - this.form.sale) / 100);
                return totalValue.toFixed(2);
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            add_variants() {

            },
            toggleAll() {
                if (this.selected.length) this.selected = []
                else this.selected = this.desserts.slice()
            },
            variation_choose(val) {
                console.log(val)
                this.sizes = [];
                this.colors = [];
                this.package_quantities = [];

            },
            getData() {
                this.$http.all([
                    this.$http.get('/categories'),
                    this.$http.get('/tags'),
                ]).then(this.$http.spread((categoriesRes, tagsRes) => {
                    this.categories = categoriesRes.data;
                    this.tags = tagsRes.data;
                })).catch((error) => {
                    flash(error.message, 'error');
                });
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
                    if (item.hasOwnProperty('name'))
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
