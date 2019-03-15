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
                <!--<v-btn-->
                        <!--:loading="loading"-->
                        <!--flat-->
                        <!--color="white"-->
                        <!--@click.native="submit()"-->
                <!--&gt;-->
                    <!--{{$t('save')}}-->
                    <!--<v-icon right>save</v-icon>-->
                <!--</v-btn>-->
            </v-toolbar-items>
        </v-toolbar>

        <v-stepper v-model="step" vertical>
            <v-stepper-header>
                <v-stepper-step step="1" :complete="step > 1">{{$t('product_info')}}</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2" :complete="step > 2">{{$t('variations')}}</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3">{{$t('confirmation')}}</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
                <v-form autocomplete="off" @submit.prevent="login"
                        @keydown.native="form.errors.clear($event.target.name)">
                    <v-stepper-content step="1">

                        <v-layout pa-2 wrap justify-space-between>
                            <v-flex xs12 sm5 md5>
                                <v-text-field
                                        v-model="form.name"
                                        v-validate="'required|max:40'"
                                        :error-messages="errors.first('product_name')"
                                        :class="{ 'error--text': errors.has('product_name') }"
                                        :label="$t('validations.attributes.product_name')"
                                        outline
                                        data-vv-name="product_name"
                                        required
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-autocomplete
                                        v-model="form.category"
                                        v-validate="'required'"
                                        :error-messages="errors.first('category')"
                                        :class="{ 'error--text': errors.has('category') }"
                                        :items="categories"
                                        item-text="name"
                                        item-value="id"
                                        chips
                                        :label="$t('validations.attributes.category')"
                                        hide-no-data
                                        multiple
                                        single-line
                                        outline
                                        data-vv-name="category"
                                        required
                                ></v-autocomplete>
                            </v-flex>
                        </v-layout>
                        <v-layout pa-2 wrap justify-space-between>
                            <v-flex xs12 md3>
                                <v-text-field
                                        v-model="form.price"
                                        v-validate="'required|numeric|min_value:0'"
                                        :error-messages="errors.first('price')"
                                        :class="{ 'error--text': errors.has('price') }"
                                        :label="$t('validations.attributes.price')"
                                        type="number"
                                        outline
                                        data-vv-name="price"
                                        required
                                >
                                    <v-fade-transition slot="append">
                                        <span>{{$t('s_p')}}</span>
                                    </v-fade-transition>
                                </v-text-field>
                            </v-flex>
                            <v-flex xs12 md2>
                                <v-text-field
                                        v-model="form.sale"
                                        v-validate="'required|numeric|min_value:0|max_value:100'"
                                        :error-messages="errors.first('sale')"
                                        :class="{ 'error--text': errors.has('sale') }"
                                        :label="$t('validations.attributes.sale')"
                                        min="0"
                                        max="100"
                                        type="number"
                                        outline
                                        data-vv-name="sale"
                                        required
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
                                        v-model="form.total_quantity"
                                        v-validate="'required|numeric|min_value:1'"
                                        :error-messages="errors.first('total_quantity')"
                                        :class="{ 'error--text': errors.has('total_quantity') }"
                                        :label="$t('validations.attributes.total_quantity')"
                                        min="0"
                                        type="number"
                                        outline
                                        data-vv-name="total_quantity"
                                        required
                                >
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout pa-2 wrap justify-space-between>
                            <v-flex xs12 md4>
                                <multi_image_upload :label="$t('upload_product_pictures')"
                                                    type="image/jpg, image/jpeg, image/png"
                                                    server="/api/product_upload_temp"
                                                    maxSize="4MB"
                                                    maxFiles="5"
                                                    ref="multi_image"
                                                    v-model="form.pictures"
                                                    v-validate="'required'"
                                                    data-vv-name="pictures"
                                                    :error-messages="errors.first('pictures')"
                                                    :class="{ 'error--text': errors.has('pictures') }">
                                </multi_image_upload> <!--:file="image ? 'storage/user_image/'+image : ''"-->
                                <span class="error--text" v-if="errors.has('pictures')"
                                      v-text="errors.first('pictures')"></span>
                            </v-flex>
                            <v-flex xs12 md7>
                                <v-combobox
                                        v-model="form.tags2"
                                        v-validate:tags_length="'max_value:5'"
                                        :error-messages="errors.first('tags2')"
                                        :class="{ 'error--text': errors.has('tags2') }"
                                        :items="tags"
                                        item-text="name"
                                        item-value="id"
                                        :search-input.sync="search"
                                        :hint="$t('tags_hint')"
                                        :label="$t('add_some_tags')"
                                        multiple
                                        persistent-hint
                                        outline
                                        single-line
                                        chips
                                        data-vv-name="tags2"
                                >
                                    <template slot="no-data">
                                        <v-list-tile>
                                            <v-list-tile-content>
                                                <v-list-tile-title>
                                                    {{$t('no_results_matching')}}"<strong>{{ search }}</strong>". {{$t('press')}} <kbd>enter</kbd>
                                                    {{$t('to_create_new_one')}}
                                                </v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </template>
                                </v-combobox>
                            </v-flex>
                        </v-layout>
                        <v-layout pa-2 wrap>
                            <v-flex>
                                <v-textarea
                                        v-model="form.description"
                                        v-validate="'required|max:500'"
                                        :error-messages="errors.first('description')"
                                        :class="{ 'error--text': errors.has('description') }"
                                        :label="$t('validations.attributes.product_description')"
                                        outline
                                        rows="2"
                                        counter="500"
                                        data-vv-name="description"
                                        required
                                ></v-textarea>
                            </v-flex>
                        </v-layout>
                        <v-layout pa-2 align-center justify-center>
                            <v-flex>
                                <tiptap_editor style="font-size: 16px;" v-model="form.long_description" :label="$t('product_long_description')"></tiptap_editor>
                            </v-flex>
                        </v-layout>
                        <v-btn
                                :loading="loading"
                                @click="next()"
                                :disabled="!!errors.count()"
                                color="primary"
                                block
                        >
                            <span v-html="$t('next')"></span>
                        </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                        <v-layout wrap>
                            <v-flex md4>
                                <v-select
                                        ref="variation"
                                        v-model="form.variation"
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
                                        <v-card-title class="headline font-weight-regular blue-grey white--text">
                                            {{$t('add_variations')}}
                                        </v-card-title>
                                        <v-card-text>
                                            <h3 class="indigo--text">List all your variation terms for the themes
                                                below</h3>
                                            <h5>
                                                For the fields below, list the variations that exist for your product.
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
                                                            v-validate="'required_if:variation,C,CS'"
                                                            :error-messages="errors.first('color')"
                                                            :class="{ 'error--text': errors.has('color') }"
                                                            data-vv-name="color"
                                                            :items="form.color"
                                                            item-text="name"
                                                            item-value="id"
                                                            hint="Example: Red, Green, Black"
                                                            :label="$t('validations.attributes.color')"
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
                                                            v-validate="'required_if:variation,S,CS'"
                                                            :error-messages="errors.first('size')"
                                                            :class="{ 'error--text': errors.has('size') }"
                                                            data-vv-name="size"
                                                            :items="form.size"
                                                            item-text="name"
                                                            item-value="id"
                                                            hint="Example: Small, Medium, Large"
                                                            :label="$t('validations.attributes.size')"
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
                                                            v-validate="'required_if:variation,PQ'"
                                                            :error-messages="errors.first('package_quantity')"
                                                            :class="{ 'error--text': errors.has('package_quantity') }"
                                                            data-vv-name="package_quantity"
                                                            :items="form.package_quantity"
                                                            item-text="name"
                                                            item-value="id"
                                                            hint="Example: Small, Medium, Large"
                                                            :label="$t('validations.attributes.package_quantity')"
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
                                                    @click="add_variations"
                                                    :disabled="!!errors.count()"
                                                    color="primary"
                                            >
                                                {{$t('add_variations')}}
                                            </v-btn>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-expand-transition>
                        <v-expand-transition>
                            <div v-if="showTable">
                                <v-layout row>
                                    <div class="text-xs-center">
                                        <!--<v-btn-->
                                        <!--outline-->
                                        <!--color="red"-->
                                        <!--:disabled="!selected.length"-->
                                        <!--@click="delete_variations()"-->
                                        <!--&gt;-->
                                        <!--Delete Selected-->
                                        <!--</v-btn>-->
                                        <v-btn flat disabled>{{$t('variations')}} {{form.product_specs.length}}</v-btn>
                                    </div>
                                </v-layout>
                                <v-layout ma-2>
                                    <v-flex xs12>
                                        <v-data-table
                                                :headers="headers"
                                                :items="form.product_specs"
                                                class="elevation-1"
                                                hide-actions
                                        >
                                            <template slot="headers" slot-scope="props">
                                                <tr>
                                                    <!--<th>-->
                                                    <!--<v-checkbox-->
                                                    <!--:input-value="props.all"-->
                                                    <!--:indeterminate="props.indeterminate"-->
                                                    <!--primary-->
                                                    <!--hide-details-->
                                                    <!--@click.stop="toggleAll"-->
                                                    <!--&gt;</v-checkbox>-->
                                                    <!--</th>-->
                                                    <th
                                                            v-for="header in props.headers"
                                                            :key="header.text"
                                                    >
                                                        {{ header.text }}
                                                    </th>
                                                </tr>
                                            </template>
                                            <template slot="items" slot-scope="props">
                                                <!--<td>-->
                                                <!--<v-checkbox-->
                                                <!--:input-value="props.selected"-->
                                                <!--primary-->
                                                <!--hide-details-->
                                                <!--@click="props.selected = !props.selected"-->
                                                <!--&gt;</v-checkbox>-->
                                                <!--</td>-->
                                                <td class="text-xs-left">{{ props.index + 1 }}</td>
                                                <td class="text-xs-center title"
                                                    v-if="form.variation === 'C' || form.variation === 'CS'">
                                                    {{props.item.color }}
                                                </td>
                                                <td class="text-xs-center title"
                                                    v-if="form.variation === 'S' || form.variation === 'CS'">
                                                    {{props.item.size }}
                                                </td>
                                                <td class="text-xs-center title" v-if="form.variation === 'PQ'">{{
                                                    props.item.package_quantity }}
                                                </td>
                                                <td class="text-xs-center">
                                                    <v-layout align-center justify-center>
                                                        <v-flex md6 xs5>
                                                            <v-text-field
                                                                    v-model="props.item.price"
                                                                    v-validate="'required|min:0'"
                                                                    data-vv-name="price"
                                                                    outline
                                                                    hide-details
                                                            >
                                                            </v-text-field>
                                                        </v-flex>
                                                    </v-layout>
                                                </td>
                                                <td class="text-xs-center title">{{ formatPrice(props.item.price * ((100
                                                    - form.sale) / 100)) }} <span>{{$t('s_p')}}</span>
                                                </td>
                                                <td class="text-xs-center">
                                                    <v-layout align-center justify-center>
                                                        <v-flex md5 xs5>
                                                            <v-text-field
                                                                    v-model="props.item.quantity"
                                                                    v-validate="'required|min:1'"
                                                                    data-vv-name="quantity"
                                                                    outline
                                                                    hide-details
                                                            ></v-text-field>
                                                        </v-flex>
                                                    </v-layout>
                                                </td>
                                                <td class="justify-center align-center layout px-0">
                                                    <v-icon
                                                            meduim
                                                            @click="delete_variations(props.item)"
                                                    >
                                                        delete
                                                    </v-icon>
                                                </td>
                                            </template>
                                        </v-data-table>
                                    </v-flex>
                                </v-layout>
                            </div>
                        </v-expand-transition>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md6>
                                <v-btn
                                        :loading="loading"
                                        @click="step--"
                                        flat
                                        block
                                ><!--:disabled="this.form.errors.any()"-->
                                    <span v-html="$t('previous')"></span>
                                </v-btn>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-btn
                                        :loading="loading"
                                        @click="next()"
                                        :disabled="!!errors.count()"
                                        color="primary"
                                        block
                                >
                                    <span v-html="$t('next')"></span>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        <!--<v-layout wrap>-->

                        <v-layout wrap>
                            <v-flex md3>
                                <v-list-tile>
                                    <v-list-tile-content>{{$t('validations.attributes.product_name')}}:</v-list-tile-content>
                                    <v-list-tile-content class="align-start">{{form.name}}</v-list-tile-content>
                                </v-list-tile>
                            </v-flex>
                            <v-flex md3>
                                <v-list-tile>
                                    <v-list-tile-content>{{$t('validations.attributes.category')}}:</v-list-tile-content>
                                    <v-list-tile-content class="align-start">{{named_categories}}</v-list-tile-content>
                                </v-list-tile>
                            </v-flex>
                            <v-flex md3>
                                <v-list-tile>
                                    <v-list-tile-content>{{$t('validations.attributes.price')}}:</v-list-tile-content>
                                    <v-list-tile-content class="align-start">{{formatPrice(form.price)}}
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-flex>
                            <v-flex md3>
                                <v-list-tile>
                                    <v-list-tile-content>{{$t('price_after_sale')}}:</v-list-tile-content>
                                    <v-list-tile-content class="align-start">{{formatPrice(salePrice)}}
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap>
                            <v-flex md2>
                                <v-list-tile>
                                    <v-list-tile-content>{{$t('validations.attributes.sale')}}:</v-list-tile-content>
                                    <v-list-tile-content class="align-start">{{form.sale}}%</v-list-tile-content>
                                </v-list-tile>
                            </v-flex>
                            <v-flex md5>
                                <v-list-tile>
                                    <v-list-tile-content>{{$t('validations.attributes.tags')}}:</v-list-tile-content>
                                    <v-list-tile-content class="align-start">{{named_tags}}</v-list-tile-content>
                                </v-list-tile>
                            </v-flex>
                            <v-flex md2>
                                <v-list-tile>
                                    <v-list-tile-content>{{$t('validations.attributes.product_description')}}:</v-list-tile-content>
                                </v-list-tile>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap>
                            <v-flex>
                                <p class="align-start">{{form.description}}</p>
                                <div v-html="form.long_description"></div>
                            </v-flex>
                        </v-layout>
                        <v-layout align-center justify-center ma-4>
                            <v-flex xs12 sm10>
                                <v-card>
                                    <v-responsive :aspect-ratio="16/9">
                                        <v-card-title>
                                            {{$t('product_images')}} ({{$t('you_can_choose_main_image')}})
                                        </v-card-title>
                                        <v-container grid-list-sm fluid>
                                            <v-layout row wrap>
                                                <v-flex
                                                        v-for="(n,index) in image_names"
                                                        :key="n"
                                                        xs12
                                                        md4
                                                >
                                                    <v-card flat tile>
                                                        <v-img
                                                                :src="`storage/${n}`"
                                                                height="150px"
                                                        >
                                                        </v-img>
                                                        <v-radio-group v-model="form.main_image" row>
                                                            <v-radio :label="`${index + 1}`" :value="n"
                                                                     :selected="index===0"></v-radio>
                                                        </v-radio-group>
                                                    </v-card>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-responsive>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        <v-layout v-if="form.product_specs.length" ma-3>
                            <v-flex xs12>
                                <v-data-table
                                        :headers="headers"
                                        :items="form.product_specs"
                                        class="elevation-1"
                                        hide-actions
                                >
                                    <template slot="headers" slot-scope="props">
                                        <tr>
                                            <th
                                                    v-for="header in props.headers"
                                                    :key="header.text"
                                                    v-if="header.text !== $t('delete')"
                                            >
                                                {{ header.text }}
                                            </th>
                                        </tr>
                                    </template>
                                    <template slot="items" slot-scope="props">
                                        <td class="text-xs-left">{{ props.index + 1 }}</td>
                                        <td class="text-xs-center title"
                                            v-if="form.variation === 'C' || form.variation === 'CS'">
                                            {{props.item.color }}
                                        </td>
                                        <td class="text-xs-center title"
                                            v-if="form.variation === 'S' || form.variation === 'CS'">
                                            {{props.item.size }}
                                        </td>
                                        <td class="text-xs-center title" v-if="form.variation === 'PQ'">{{
                                            props.item.package_quantity }}
                                        </td>
                                        <td class="text-xs-center title">
                                            {{props.item.price}}
                                        </td>
                                        <td class="text-xs-center title">{{ formatPrice(props.item.price * ((100 - form.sale) / 100)) }} <span>{{$t('s_p')}}</span>
                                        </td>
                                        <td class="text-xs-center title">
                                            {{props.item.quantity}}
                                        </td>
                                    </template>
                                </v-data-table>
                            </v-flex>
                        </v-layout>
                        <!--</v-layout>-->
                        <v-layout wrap>
                            <v-flex xs12 sm6 md6>
                                <v-btn
                                        :loading="loading"
                                        @click="step--"
                                        flat
                                        block
                                ><!--:disabled="this.form.errors.any()"-->
                                    <span v-html="$t('previous')"></span>
                                </v-btn>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-btn
                                        :loading="loading"
                                        block
                                        color="secondary"
                                        @click="submit"
                                >
                                    {{$t('save')}}
                                    <v-icon right>save</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
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
    // import image_upload from "../../../components/ImageUpload.vue";
    // import multi_image_upload from "../../../components/MultiImageUpload.vue";
    // import tiptap_editor from '../../../components/TiptapEditor.vue';

    export default {
        components: {
            ModalLayout,
        },
        data() {
            return {
                showTable: false,
                isEditing: false,
                variations: [
                    {'value': 'S', 'name': this.$i18n.t('validations.attributes.size')},
                    {'value': 'C', 'name': this.$i18n.t('validations.attributes.color')},
                    {'value': 'CS', 'name': this.$i18n.t('validations.attributes.color_size')},
                    {'value': 'PQ', 'name': this.$i18n.t('validations.attributes.package_quantity')},
                ],
                step: 1,
                loading: false,
                colors: [],
                sizes: [],
                package_quantities: [],
                form: new Form({
                    // id: null,
                    // name: 'لبس ولادي كافة الالوان',
                    // price: 5000,
                    // total_quantity: 500,
                    // categories: [1],
                    // description: 'لبس ولادي كافة الالوان لبس ولادي كافة الالوان لبس ولادي كافة الالوان لبس ولادي كافة الالوان لبس ولادي كافة الالوان لبس ولادي كافة الالوان لبس ولادي كافة الالوان لبس ولادي كافة الالوان لبس ولادي كافة الالوان لبس ولادي كافة الالوان',
                    // long_description: null,
                    // sale: 0,
                    // picture: null,
                    // pictures: [59828, 91881, 49357, 99638],
                    // main_image: "temp/products/59828/D8SrSR2gw2quGoOqBLBJoWNVxftsHRrz5YjRobiN.jpeg",
                    // tags: [],
                    // tags2: [0, 1, 2],
                    // variation: null,
                    // selling_count: null,
                    // package_quantity: [],
                    // product_specs: [],
                    id: null,
                    name: null,
                    price: 0,
                    total_quantity: null,
                    category: [],
                    description: null,
                    long_description: null,
                    sale: 0,
                    picture: null,
                    pictures: [],
                    main_image: null,
                    tags: [],
                    tags2: [],
                    variation: null,
                    selling_count: null,
                    package_quantity: [],
                    product_specs: [],
                }),
                tags: [],
                search: null,
                categories: [],
                headers: [],
                image_names: [],
                // "temp/products/59828/D8SrSR2gw2quGoOqBLBJoWNVxftsHRrz5YjRobiN.jpeg", "temp/products/91881/JWMfJ9ilN8d6gDM2aKscQcJNcn17yy07GRoJnyqD.png"
                // , "temp/products/49357/iM8uiwK89yEAT4uvE9N52ofycybZj38GlxJD6mko.jpeg", "temp/products/99638/ZMkLiAhenGhqPMkHGPNyGSggNba9h3uCw2GsfsyB.png"
            }
        },
        watch: {},
        computed: {
            tags_length() {
                return this.form.tags2.length;
            },
            named_categories() {
                let items = [];
                const _this = this;
                _this.form.category.forEach(function (item) {
                    _this.categories.forEach(function (category) {
                        if (Number(category.id) === item)
                            items.push(category.name);
                    })
                });
                return items.join(',');
            },
            named_tags() {
                const _this = this;
                let tags = _.map(_this.form.tags2, function (tag) {
                    if (typeof tag == "string")
                        return tag;
                    else
                        return tag.name;
                });
                return tags.join(',');
            },
            salePrice() {
                let totalValue = this.form.price * ((100 - this.form.sale) / 100);
                return totalValue.toFixed(2);
            }
        },
        mounted() {
            this.getData();
            Event.listen('imageUpdated', (names) => {
                this.image_names = names;
                this.form.main_image = names[0];
            })

            // console.log(this.$validator.validateAll());
        },
        beforeDestroy() {
            //
        },
        methods: {
            add_variations() {
                let _this = this;
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        _this.headers = [];
                        switch (_this.form.variation) {
                            case 'CS' : {
                                _this.headers.unshift({sortable: false, text: '#', value: 'index'}, {
                                        sortable: false,
                                        text: _this.$i18n.t('validations.attributes.color'),
                                        align: 'left',
                                        value: 'color',
                                    },
                                    {
                                        sortable: false,
                                        text: _this.$i18n.t('validations.attributes.size'),
                                        align: 'left',
                                        value: 'size',
                                    },
                                    {sortable: false, text: _this.$i18n.t('validations.attributes.price')},
                                    {sortable: false, text: _this.$i18n.t('price_after_sale')},
                                    {sortable: false, text: _this.$i18n.t('validations.attributes.quantity')},
                                    {sortable: false, text: _this.$i18n.t('delete')}
                                );
                                _this.form.product_specs = _this.colors.map((color) => {
                                    return _this.sizes.map((size) => {
                                        return {
                                            id: '',
                                            color: color,
                                            size: size,
                                            price: _this.form.price,
                                            quantity: Math.floor(Number(_this.form.total_quantity) / (_this.colors.length * _this.sizes.length))
                                        };
                                    })
                                });
                                break;
                            }
                            case 'C' : {
                                _this.headers.unshift({sortable: false, text: '#', value: 'count'}, {
                                        sortable: false,
                                        text: _this.$i18n.t('validations.attributes.color'),
                                        align: 'left',
                                        value: 'color',
                                    },
                                    {sortable: false, text: _this.$i18n.t('validations.attributes.price')},
                                    {sortable: false, text: _this.$i18n.t('price_after_sale')},
                                    {sortable: false, text: _this.$i18n.t('validations.attributes.quantity')},
                                    {sortable: false, text: _this.$i18n.t('delete')});
                                _this.form.product_specs = _this.colors.map((color) => {
                                    return {
                                        id: '',
                                        color: color,
                                        price: _this.form.price,
                                        quantity: Math.floor(Number(_this.form.total_quantity) / _this.colors.length)
                                    };
                                });
                                break;
                            }
                            case 'S' : {
                                _this.headers.unshift({sortable: false, text: '#', value: 'count'}, {
                                        sortable: false,
                                        text: _this.$i18n.t('validations.attributes.size'),
                                        align: 'left',
                                        value: 'size',
                                    },
                                    {sortable: false, text: _this.$i18n.t('validations.attributes.price')},
                                    {sortable: false, text: _this.$i18n.t('price_after_sale')},
                                    {sortable: false, text: _this.$i18n.t('validations.attributes.quantity')},
                                    {sortable: false, text: _this.$i18n.t('delete')});
                                _this.form.product_specs = _this.sizes.map((size) => {
                                    return {
                                        id: '',
                                        size: size,
                                        price: _this.form.price,
                                        quantity: Math.floor(Number(_this.form.total_quantity) / _this.sizes.length)
                                    };
                                });
                                break;
                            }
                            case 'PQ' : {
                                _this.headers.unshift({sortable: false, text: '#', value: 'count'}, {
                                        sortable: false,
                                        text: _this.$i18n.t('validations.attributes.package_quantity'),
                                        align: 'left',
                                        value: 'package_quantity',
                                    },
                                    {sortable: false, text: _this.$i18n.t('validations.attributes.price')},
                                    {sortable: false, text: _this.$i18n.t('price_after_sale')},
                                    {sortable: false, text: _this.$i18n.t('validations.attributes.quantity')},
                                    {sortable: false, text: _this.$i18n.t('delete')});
                                _this.form.product_specs = _this.package_quantities.map((package_quantity) => {
                                    return {
                                        id: '',
                                        package_quantity: package_quantity,
                                        price: _this.form.price,
                                        quantity: Math.floor(Number(_this.form.total_quantity) / _this.package_quantities.length)
                                    };
                                });
                                break;
                            }
                        }
                        _this.form.product_specs = [].concat.apply([], _this.form.product_specs)
                        _this.showTable = true;
                        // _this.colors = _this.sizes = _this.package_quantities = [];
                    }
                    else {
                        console.log('Oops!');
                    }
                });
            },
            delete_variations(item) {
                this.form.product_specs.splice(this.form.product_specs.indexOf(item), 1);
                if (!this.form.product_specs.length) this.showTable = false;
            },
            // toggleAll() {
            //     if (this.selected.length) this.selected = []
            //     else this.selected = this.form.product_specs.slice()
            // },
            variation_choose(val) {
                this.sizes = this.colors = this.package_quantities = this.form.product_specs = [];
                this.showTable = false;
            },
            getData() {
                this.$http.all([
                    this.$http.get('/categories'),
                    this.$http.get('/tags'),
                ]).then(this.$http.spread((categoriesRes, tagsRes) => {
                    this.categories = categoriesRes.data;
                    this.tags = tagsRes.data;
                })).catch((error) => {
                    snackbar(error.message, 'error');
                });
            },
            submit() {
                this.loading = true;
                this.processTags();
                this.processMainImage();
                this.form.post('/save-product')
                    .then(response => {
                        this.loading = false;
                        snackbar(response.msg);
                        this.redirectBack();
//                        this.$store.commit('setCurrentUser', response.data);
                    }).catch(error => {
                    snackbar(error.message, 'error');
                    this.loading = false;
                });
            },
            next() {
                let _this = this;
                _this.$validator.validateAll().then((result) => {
                    if (result) {
                        if(_this.step ===  2 && _this.form.variation){
                            const sum = _this.form.product_specs.reduce((a,b) => a + Number(b.quantity), 0);
                            if(sum !== Number(_this.form.total_quantity)){
                                snackbar(`${_this.$i18n.t('total_quantity_should_be_equal')} ${_this.form.total_quantity}`, 'error');
                                return;
                            }
                        }
                        this.step++;
                    }
                    else {
                        console.log('Oops!');
                    }
                });
            },
            processTags() {
                this.form.tags = _.map(this.form.tags2, function (item) {
                    if (item.hasOwnProperty('name'))
                        return item.name;
                    return item
                });
            },
            processMainImage() {
                this.form.picture = this.form.main_image.split('/')[2];
                this.form.pictures = this.form.pictures.filter((item) => {return Number(item) !== Number(this.form.picture)});
            },
            redirectBack() {
                let self = this;
                self.$nextTick(() => self.$router.push({name: "products"}));
            }
        }
    };
</script>
