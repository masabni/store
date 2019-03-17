<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm9 md5>
                <v-stepper v-model="step" vertical>
                    <v-stepper-header>
                        <v-stepper-step step="1" :complete="step > 1">{{$t('your_information')}}</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step v-if="form.type === 'store'" :step="form.type === 'store' ? '2':'0'"
                                        :complete="step > 2">{{$t('store_information')}}
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step :step="form.type === 'store' ? '3':'2'">{{$t('confirmation')}}</v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                            <v-stepper-content step="1" data-vv-scope="user_scope">
                        <v-form id="user-form" data-vv-scope="user-form" @submit.prevent="next('user-form')">
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                                v-model="form.first_name"
                                                v-validate="'required|max:100'"
                                                :error-messages="errors.first('user-form.first_name')"
                                                :class="{ 'error--text': errors.has('user-form.first_name') }"
                                                class="primary--text"
                                                name="first_name"
                                                :label="$t('validations.attributes.first_name')"
                                                data-vv-name="first_name"
                                                prepend-icon="person"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                                v-model="form.last_name"
                                                v-validate="'required|max:100'"
                                                :error-messages="errors.first('user-form.last_name')"
                                                :class="{ 'error--text': errors.has('user-form.last_name') }"
                                                class="primary--text"
                                                name="last_name"
                                                :label="$t('validations.attributes.last_name')"
                                                data-vv-name="last_name"
                                                prepend-icon="person"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                                v-model="form.phone_number"
                                                v-validate="'required|numeric'"
                                                :error-messages="errors.first('user-form.phone_number')"
                                                :class="{ 'error--text': errors.has('user-form.phone_number') }"
                                                class="primary--text"
                                                name="phone_number"
                                                mask="phone"
                                                :label="$t('validations.attributes.phone_number')"
                                                data-vv-name="phone_number"
                                                prepend-icon="phone"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                                v-model="form.email"
                                                v-validate="'required|email|max:200'"
                                                :error-messages="errors.first('user-form.email')"
                                                :class="{ 'error--text': errors.has('user-form.email') }"
                                                class="primary--text"
                                                name="email"
                                                :label="$t('validations.attributes.email')"
                                                type="email"
                                                data-vv-name="email"
                                                prepend-icon="email"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-select
                                                v-model="form.gender"
                                                v-validate="'required'"
                                                :error-messages="errors.first('user-form.gender')"
                                                :class="{ 'error--text': errors.has('user-form.gender') }"
                                                class="primary--text"
                                                :items="genders"
                                                item-text="gender"
                                                item-value="value"
                                                :label="$t('validations.attributes.gender')"
                                                data-vv-name="gender"
                                                prepend-icon="face"
                                        ></v-select>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-menu
                                                ref="menu"
                                                :close-on-content-click="false"
                                                v-model="menu"
                                                :nudge-right="40"
                                                lazy
                                                transition="scale-transition"
                                                offset-y
                                                full-width
                                                min-width="290px">
                                            <v-text-field
                                                    v-model="form.birth_date"
                                                    v-validate="'required'"
                                                    :error-messages="errors.first('user-form.birth_date')"
                                                    :class="{ 'error--text': errors.has('user-form.birth_date') }"
                                                    :label="$t('validations.attributes.birth_date')"
                                                    data-vv-name="birth_date"
                                                    prepend-icon="event"
                                                    slot="activator"
                                                    readonly
                                            ></v-text-field>
                                            <v-date-picker
                                                    ref="picker"
                                                    v-model="form.birth_date"
                                                    :max="new Date().toISOString().substr(0, 10)"
                                                    min="1920-01-01"
                                                    @change="saveDate"
                                            ></v-date-picker>
                                        </v-menu>

                                    </v-flex>
                                </v-layout>
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                                v-model="form.password"
                                                v-validate="'required|min:6|max:255'"
                                                :append-icon="icon"
                                                :type="!password_visible ? 'password' : 'text'"
                                                :error-messages="errors.first('user-form.password')"
                                                :class="{ 'error--text': errors.has('user-form.password') }"
                                                class="primary--text"
                                                name="password"
                                                ref="password"
                                                :label="$t('validations.attributes.password')"
                                                data-vv-name="password"
                                                prepend-icon="lock"
                                                @click:append="(password_visible = !password_visible)"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                                v-model="form.password_confirmation"
                                                v-validate="'required|confirmed:password'"
                                                :error-messages="errors.first('user-form.re_password')"
                                                :class="{ 'error--text': errors.has('user-form.re_password') }"
                                                :append-icon="icon2"
                                                :type="!password_visible2 ? 'password' : 'text'"
                                                class="primary--text"
                                                name="password_confirmation"
                                                :label="$t('validations.attributes.re_password')"
                                                data-vv-name="re_password"
                                                prepend-icon="lock"
                                                @click:append="(password_visible2 = !password_visible2)"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-subheader class="title">{{$t('sign_up_as')}}</v-subheader>
                                        <v-radio-group ref="type" v-model="form.type" hide-details class="mt-0">
                                            <v-radio value="buyer" :label="$t('buyer')"></v-radio>
                                            <v-radio value="store" :label="$t('store')"></v-radio>
                                        </v-radio-group>
                                    </v-flex>
                                </v-layout>
                                <v-btn
                                        :loading="loading"
                                        @click="next('user-form')"
                                        color="primary"
                                        block
                                ><!--:disabled="this.form.errors.any()"-->
                                    {{$t('sign_up')}}
                                </v-btn>
                                <v-btn
                                        block
                                        flat
                                        class="white--text"
                                        color="teal lighten-2"
                                        to="/login"
                                >
                                    {{$t('have_an_account')}} {{$t('login')}}
                                </v-btn>
                        </v-form>
                            </v-stepper-content>
                            <v-stepper-content :step="form.type === 'store' ? '2':'0'" data-vv-scope="store_scope">
                        <v-form id="store-form" data-vv-scope="store-form" @submit.prevent="next('store-form')">
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                                v-model="form2.store_name"
                                                v-validate="'required|max:100'"
                                                :error-messages="errors.first('store-form.store_name')"
                                                :class="{ 'error--text': errors.has('store-form.store_name') }"
                                                class="primary--text"
                                                name="store_name"
                                                :label="$t('validations.attributes.store_name')"
                                                data-vv-name="store_name"
                                                prepend-icon="store"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-select
                                                v-model="form2.main_category_id"
                                                v-validate="'required'"
                                                :error-messages="errors.first('store-form.main_category_id')"
                                                :class="{ 'error--text': errors.has('store-form.main_category_id') }"
                                                class="primary--text"
                                                :items="categories"
                                                item-text="name"
                                                item-value="id"
                                                :label="$t('validations.attributes.main_product')"
                                                data-vv-name="main_category_id"
                                                prepend-icon="local_grocery_store"
                                        ></v-select>
                                    </v-flex>
                                </v-layout>
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-select
                                                v-model="form2.city_id"
                                                v-validate="'required'"
                                                :error-messages="errors.first('store-form.city_id')"
                                                :class="{ 'error--text': errors.has('store-form.city_id') }"
                                                class="primary--text"
                                                :items="cities"
                                                item-text="city_ar"
                                                item-value="id"
                                                :label="$t('validations.attributes.city')"
                                                data-vv-name="city_id"
                                                prepend-icon="location_city"
                                        ></v-select>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-switch class="pr-3"
                                                  :label="$t('have_physical_store')"
                                                  v-model="form2.have_store"
                                                  ref="have_store"
                                        ></v-switch>
                                    </v-flex>
                                </v-layout>
                                <v-slide-y-reverse-transition>
                                    <v-layout wrap v-if="form2.have_store">
                                        <v-flex xs12 sm12 md12>
                                            <v-textarea
                                                    v-model="form2.address"
                                                    v-validate="'required_if:have_store,true'"
                                                    :error-messages="errors.first('store-form.address')"
                                                    :class="{ 'error--text': errors.has('store-form.address') }"
                                                    name="address"
                                                    :label="$t('validations.attributes.address')"
                                                    :placeholder="$t('enter_store_address')"
                                                    data-vv-name="address"
                                                    prepend-icon="location_on"
                                                    counter="500"
                                            ></v-textarea>
                                        </v-flex>
                                    </v-layout>
                                </v-slide-y-reverse-transition>
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-btn
                                                :loading="loading"
                                                @click="prev()"
                                                flat
                                                block
                                        ><!--:disabled="this.form.errors.any()"-->
                                            <span v-html="$t('previous')"></span>
                                        </v-btn>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-btn
                                                :loading="loading"
                                                :disabled="!!errors.count()"
                                                @click="next('store-form')"
                                                color="primary"
                                                block
                                        ><!--:disabled="this.form2.errors.any()"-->
                                            {{$t('confirm')}}
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                                <v-btn
                                        block
                                        flat
                                        class="white--text"
                                        color="teal lighten-2"
                                        to="/login"
                                >
                                    {{$t('have_an_account')}} {{$t('login')}}
                                </v-btn>

                        </v-form>
                            </v-stepper-content>
                            <v-stepper-content :step="form.type === 'store' ? '3':'2'">

                                <P class="headline">
                                    Confirmation Code has been sent to your mobile number, Please enter the code here</P>
                                <v-text-field
                                        class="primary--text"
                                        name="phone_number"
                                        label="Enter Code"
                                        data-vv-name="phone_number"
                                        prepend-icon="lock_open"
                                ></v-text-field>
                                <v-btn
                                        :loading="loading"
                                        :disabled="this.form.errors.any()"
                                        @click="confirmCode()"
                                        color="primary"
                                        block
                                >
                                    {{$t('confirm')}}
                                </v-btn>

                            </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>

            </v-flex>
        </v-layout>
    </v-container>

</template>
<script>
    export default {
        data() {
            return {
                genders: [
                    {'value': 'M', 'gender': this.$i18n.t('male')},
                    {'value': 'F', 'gender': this.$i18n.t('female')}
                ],
                step: 1,
                password_visible: false,
                password_visible2: false,
                menu: false,
                form: new Form({
                    first_name: '',
                    last_name: '',
                    phone_number: '',
                    email: '',
                    gender: '',
                    birth_date: '',
                    password: '',
                    password_confirmation: '',
                    type: 'buyer',
                }),
                form2: new Form({
                    store_name: '',
                    main_category_id: '',
                    city_id: '',
                    have_store: false,
                    address: '',

                }),
                categories: [],
                cities: [],
                has_error: false,
                error: '',
                success: false,
                loading: false
            }
        },
        computed: {
            icon() {
                return this.password_visible ? "visibility" : "visibility_off";
            },
            icon2() {
                return this.password_visible ? "visibility" : "visibility_off";
            },
        },
        watch: {
            menu(val) {
                val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
            }
        },
        mounted() {
            this.$http.all([
                this.$http.get('/categories'),
                this.$http.get('/cities')
            ]).then(this.$http.spread((categoriesRes, citiesRes) => {
                this.categories = categoriesRes.data;
                this.cities = citiesRes.data;
            })).catch((error) => {
                this.has_error = true;
                this.error = error.response.data.message;
            });
        },
        methods: {
            saveDate(date) {
                this.$refs.menu.save(date)
            },
            prev() {
                if (this.form.type === 'store')
                    this.step--;
                else
                    this.step = 1;
            },
            next(scope) {
                this.$validator.validateAll(scope).then((result) => { if (result){
                    if (this.form.type === 'store' && this.step === 1)
                        this.step++;
                    else
                        this.register();
                }});
            },
            register() {
                this.loading = true;
                const data = {...this.form, store: this.form2};
                this.$auth.register({
                    data: data,
                    success: function () {
//                        this.$router.push({name: 'login', params: {successRegistrationRedirect: true}})
                        this.step++;
                        this.loading = false;
                    },
                    error: function (res) {
                        // this.form.errors.record(res.response.data);
                        if(res.response.data.errors.hasOwnProperty('email'))
                            snackbar(res.response.data.errors.email[0], 'error');
                        else
                            snackbar(res.response.data.message, 'error');
                        this.loading = false;
                    }
                })
            }
        }
    }
</script>
