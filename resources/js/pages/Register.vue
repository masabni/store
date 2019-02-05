<template>
    <!--<div class="container">-->
    <!--<div class="card card-default">-->
    <!--<div class="card-header">Register</div>-->

    <!--<div class="card-body">-->
    <!--<div class="alert alert-danger" v-if="has_error">-->
    <!--<p v-text="error"></p>-->
    <!--</div>-->
    <!--<form autocomplete="" @submit.prevent="register" @keydown="form.errors.clear($event.target.name); form2.errors.clear($event.target.name)">-->
    <!--<div v-show="step === 1">-->
    <!--<h1>Basic Info</h1>-->
    <!--<div class="row">-->
    <!--<div class="col-md-6">-->
    <!--<div class="form-group" v-bind:class="{ 'has-error': form.errors.has('first_name') }">-->
    <!--<label for="first_name">First Name</label>-->
    <!--<input type="text" id="first_name" class="form-control" name="first_name"-->
    <!--placeholder="Enter your first name..." v-model="form.first_name">-->
    <!--<span class="help-block text-danger" v-if="form.errors.has('first_name')"-->
    <!--v-text="form.errors.get('first_name')"></span>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="col-md-6">-->
    <!--<div class="form-group" v-bind:class="{ 'has-error': form.errors.has('last_name') }">-->
    <!--<label for="last_name">Last Name</label>-->
    <!--<input type="text" id="last_name" class="form-control" name="last_name"-->
    <!--placeholder="Enter your last name..." v-model="form.last_name">-->
    <!--<span class="help-block text-danger" v-if="form.errors.has('last_name')"-->
    <!--v-text="form.errors.get('last_name')"></span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="row">-->
    <!--<div class="col-md-6">-->
    <!--<div class="form-group" v-bind:class="{ 'has-error': form.errors.has('phone_number') }">-->
    <!--<label for="phone_number">Phone Number</label>-->
    <!--<input type="number" id="phone_number" class="form-control" name="phone_number"-->
    <!--placeholder="Enter your phone number..." v-model="form.phone_number">-->
    <!--<span class="help-block text-danger" v-if="form.errors.has('phone_number')"-->
    <!--v-text="form.errors.get('phone_number')"></span>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="col-md-6">-->
    <!--<div class="form-group" v-bind:class="{ 'has-error': form.errors.has('email') }">-->
    <!--<label for="email">E-mail</label>-->
    <!--<input type="text" id="email" class="form-control" placeholder="Enter your email..."-->
    <!--name="email"-->
    <!--v-model="form.email">-->
    <!--<span class="help-block text-danger" v-if="form.errors.has('email')"-->
    <!--v-text="form.errors.get('email')"></span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->

    <!--<div class="row">-->
    <!--<div class="col-md-6">-->
    <!--<div class="form-group" v-bind:class="{ 'has-error': form.errors.has('password') }">-->
    <!--<label for="password">Password</label>-->
    <!--<input type="password" id="password" class="form-control" name="password"-->
    <!--placeholder="Enter your password..." v-model="form.password">-->
    <!--<span class="help-block text-danger" v-if="form.errors.has('password')"-->
    <!--v-text="form.errors.get('password')"></span>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="col-md-6">-->
    <!--<div class="form-group">-->
    <!--<label for="password_confirmation">Confirm Password</label>-->
    <!--<input type="password" id="password_confirmation" class="form-control"-->
    <!--name="password_confirmation"-->
    <!--placeholder="Re enter your password..." v-model="form.password_confirmation">-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->

    <!--<div class="row">-->
    <!--<div class="col">-->
    <!--<div class="form-group">-->
    <!--<div class="btn-group btn-group-toggle mb-3">-->
    <!--<label :class="{ 'active': form.type === 'buyer' , 'btn' :'btn', 'btn-light': 'btn-light'}" >-->
    <!--<input type="radio" v-model="form.type" value="buyer" id="buyer" autocomplete="off" checked> Buyer-->
    <!--</label>-->
    <!--<label :class="{ 'active': form.type === 'store' , 'btn' :'btn', 'btn-light': 'btn-light'}" >-->
    <!--<input type="radio" v-model="form.type" value="store" id="store" autocomplete="off"> Store-->
    <!--</label>-->
    <!--</div>-->
    <!--</div>-->

    <!--&lt;!&ndash;<div class="input-group date">&ndash;&gt;-->
    <!--&lt;!&ndash;<input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->

    <!--</div>-->
    <!--</div>-->
    <!--<button type="button" @click="validUser()" :class="[loading ? 'loading-btn' : '' ,'btn btn-primary']"-->
    <!--:disabled="this.form.errors.any()">Register-->
    <!--</button>-->
    <!--&lt;!&ndash;<button type="submit" :class="[loading ? 'loading-btn' : '' ,'btn btn-primary']"&ndash;&gt;-->
    <!--&lt;!&ndash;:disabled="this.form.errors.any()">Register&ndash;&gt;-->
    <!--&lt;!&ndash;</button>&ndash;&gt;-->
    <!--</div>-->

    <!--<div v-show="step === 2">-->
    <!--<h1>Enter Store Data</h1>-->
    <!--<div class="row">-->
    <!--<div class="col-md-6">-->
    <!--<div class="form-group" v-bind:class="{ 'has-error': form2.errors.has('store_name') }">-->
    <!--<label for="store_name">Store Name</label>-->
    <!--<input type="text" class="form-control" id="store_name" name="store_name"-->
    <!--placeholder="Enter name of your store..." v-model="form2.store_name">-->
    <!--<span class="help-block text-danger" v-if="form2.errors.has('store_name')"-->
    <!--v-text="form2.errors.get('store_name')"></span>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="col-md-6">-->
    <!--<div class="form-group" v-bind:class="{ 'has-error': form2.errors.has('main_category_id') }">-->
    <!--<label for="main_category_id">Main Product</label>-->
    <!--<select id="main_category_id" class="form-control" v-model="form2.main_category_id">-->
    <!--<option v-for="category in categories" :value="category.id" v-text="category.name"></option>-->
    <!--</select>-->
    <!--<span class="help-block text-danger" v-if="form2.errors.has('main_category_id')"-->
    <!--v-text="form2.errors.get('main_category_id')"></span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="row">-->
    <!--<div class="col-md-6">-->
    <!--<div class="form-group" v-bind:class="{ 'has-error': form2.errors.has('address') }">-->
    <!--<label for="city_id">City</label>-->
    <!--<select id="city_id" class="form-control" v-model="form2.city_id">-->
    <!--<option v-for="city in cities" :value="city.id" v-text="city.city_ar"></option>-->
    <!--</select>-->
    <!--<span class="help-block text-danger" v-if="form2.errors.has('city_id')"-->
    <!--v-text="form2.errors.get('city_id')"></span>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="col-md-6">-->
    <!--<div class="form-group">-->
    <!--<label for="store_name">Have a physical store?</label>-->
    <!--<div class="material-switch pull-right">-->
    <!--<input id="someSwitchOptionPrimary" name="someSwitchOption001" type="checkbox" v-model="form2.have_store"/>-->
    <!--<label for="someSwitchOptionPrimary" class="bg-primary"></label>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="row">-->
    <!--<div class="col-md-6">-->
    <!--<div class="form-group" v-bind:class="{ 'has-error': form2.errors.has('address') }">-->
    <!--<label for="first_name">Address</label>-->
    <!--<textarea :disabled="!form2.have_store" id="address" class="form-control" name="address" rows="5"-->
    <!--placeholder="Enter store address..." v-model="form2.address"></textarea>-->
    <!--<span class="help-block text-danger" v-if="form2.errors.has('address')"-->
    <!--v-text="form2.errors.get('address')"></span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<button type="button" @click="validStore()" :class="[loading ? 'loading-btn' : '' ,'btn btn-primary']">-->
    <!--Confirm-->
    <!--</button>-->
    <!--<button type="button" @click="prev()" class="btn btn-light">Previous-->
    <!--</button>-->
    <!--</div>-->

    <!--<div v-show="step === 3">-->
    <!--<h1>Confirmation</h1>-->

    <!--&lt;!&ndash;<button @click.prevent="prev()">Previous</button>&ndash;&gt;-->
    <!--&lt;!&ndash;<input type="submit" value="Save">&ndash;&gt;-->
    <!--</div>-->
    <!--</form>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
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
                        <v-form autocomplete="" @submit.prevent="register"
                                @keydown.native="form.errors.clear($event.target.name); form2.errors.clear($event.target.name)">
                            <v-stepper-content step="1">
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                                v-model="form.first_name"
                                                :error-messages="form.errors.get('first_name')"
                                                :class="{ 'error--text': form.errors.has('first_name') }"
                                                class="primary--text"
                                                name="first_name"
                                                :label="$t('first_name')"
                                                data-vv-name="first_name"
                                                prepend-icon="person"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                                v-model="form.last_name"
                                                :error-messages="form.errors.get('last_name')"
                                                :class="{ 'error--text': form.errors.has('last_name') }"
                                                class="primary--text"
                                                name="last_name"
                                                :label="$t('last_name')"
                                                data-vv-name="last_name"
                                                prepend-icon="person"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                                v-model="form.phone_number"
                                                :error-messages="form.errors.get('phone_number')"
                                                :class="{ 'error--text': form.errors.has('phone_number') }"
                                                class="primary--text"
                                                name="phone_number"
                                                mask="phone"
                                                :label="$t('phone_number')"
                                                data-vv-name="phone_number"
                                                prepend-icon="phone"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                                v-model="form.email"
                                                :error-messages="form.errors.get('email')"
                                                :class="{ 'error--text': form.errors.has('email') }"
                                                class="primary--text"
                                                name="email"
                                                :label="$t('email')"
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
                                                :error-messages="form.errors.get('gender')"
                                                :class="{ 'error--text': form.errors.has('gender') }"
                                                class="primary--text"
                                                :items="genders"
                                                item-text="gender"
                                                item-value="value"
                                                :label="$t('gender')"
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
                                                    slot="activator"
                                                    :error-messages="form.errors.get('birth_date')"
                                                    :class="{ 'error--text': form.errors.has('birth_date') }"
                                                    v-model="form.birth_date"
                                                    :label="$t('birth_date')"
                                                    prepend-icon="event"
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
                                                :append-icon="icon"
                                                :type="!password_visible ? 'password' : 'text'"
                                                :error-messages="form.errors.get('password')"
                                                :class="{ 'error--text': form.errors.has('password') }"
                                                class="primary--text"
                                                name="password"
                                                :label="$t('password')"
                                                data-vv-name="password"
                                                counter="255"
                                                prepend-icon="lock"
                                                @click:append="(password_visible = !password_visible)"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                                v-model="form.password_confirmation"
                                                :append-icon="icon2"
                                                :type="!password_visible2 ? 'password' : 'text'"
                                                class="primary--text"
                                                name="password_confirmation"
                                                :label="$t('re_password')"
                                                data-vv-name="password"
                                                counter="255"
                                                prepend-icon="lock"
                                                @click:append="(password_visible2 = !password_visible2)"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-subheader class="title">{{$t('sign_up_as')}}</v-subheader>
                                        <v-radio-group v-model="form.type" hide-details class="mt-0">
                                            <v-radio value="buyer" :label="$t('buyer')"></v-radio>
                                            <v-radio value="store" :label="$t('store')"></v-radio>
                                        </v-radio-group>
                                    </v-flex>
                                </v-layout>
                                <v-btn
                                        :loading="loading"
                                        @click="validUser()"
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
                            </v-stepper-content>
                            <v-stepper-content :step="form.type === 'store' ? '2':'0'">
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                                v-model="form2.store_name"
                                                :error-messages="form2.errors.get('store_name')"
                                                :class="{ 'error--text': form2.errors.has('store_name') }"
                                                class="primary--text"
                                                name="store_name"
                                                :label="$t('store_name')"
                                                data-vv-name="store_name"
                                                prepend-icon="store"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-select
                                                v-model="form2.main_category_id"
                                                :error-messages="form2.errors.get('main_category_id')"
                                                :class="{ 'error--text': form2.errors.has('main_category_id') }"
                                                class="primary--text"
                                                :items="categories"
                                                item-text="name"
                                                item-value="id"
                                                :label="$t('main_product')"
                                                prepend-icon="local_grocery_store"
                                        ></v-select>
                                    </v-flex>
                                </v-layout>
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-select
                                                v-model="form2.city_id"
                                                :error-messages="form2.errors.get('city_id')"
                                                :class="{ 'error--text': form2.errors.has('city_id') }"
                                                class="primary--text"
                                                :items="cities"
                                                item-text="city_ar"
                                                item-value="id"
                                                :label="$t('city')"
                                                prepend-icon="location_city"
                                        ></v-select>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-switch class="pr-3"
                                                  :label="$t('have_physical_store')"
                                                  v-model="form2.have_store"
                                        ></v-switch>
                                    </v-flex>
                                </v-layout>
                                <v-layout wrap>
                                    <v-flex xs12 sm12 md12>
                                        <v-textarea
                                                v-model="form2.address"
                                                :error-messages="form2.errors.get('address')"
                                                :class="{ 'error--text': form2.errors.has('address') }"
                                                name="address"
                                                :label="$t('address')"
                                                :disabled="!form2.have_store"
                                                :placeholder="$t('enter_store_address')"
                                                prepend-icon="location_on"
                                                counter="500"
                                        ></v-textarea>
                                    </v-flex>
                                </v-layout>
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
                                                @click="validStore()"
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
                        </v-form>
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
                errors: {},
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
            next() {
                if (this.form.type === 'store')
                    this.step++;
                else
                    this.register();
            },
            validUser() {
                this.has_error = false;
                this.loading = true;
                this.$http.post('auth/validate-user', this.form).then((res) => {
                    this.loading = false;
                    this.next()
                }).catch((res) => {
                    this.form.errors.record(res.response.data);
                    flash(res.response.data.message, 'error');
                    this.loading = false;
                });
            },
            validStore() {
                this.has_error = false;
                this.loading = true;
                this.$http.post('auth/validate-store', this.form2).then((res) => {
//                    this.loading = false;
                    this.register()
                }).catch((res) => {
                    this.form2.errors.record(res.response.data);
                    flash(res.response.data.message, 'error');
                    this.loading = false;
                });
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
                        this.form.errors.record(res.response.data);
                        flash(res.response.data.message, 'error');
                        this.loading = false;
                    }
                })
            }
        }
    }
</script>
