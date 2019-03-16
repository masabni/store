<template>
    <!--<div class="container">-->
    <!--<div class="card card-default">-->
    <!--<div class="card-header">Login</div>-->

    <!--<div class="card-body">-->
    <!--<div class="alert alert-danger" v-if="has_error">-->
    <!--<p v-text="error"></p>-->
    <!--</div>-->
    <!--<form autocomplete="" @submit.prevent="login" @keydown="form.errors.clear($event.target.name)">-->
    <!--<div class="form-group" v-bind:class="{ 'has-error': form.errors.has('email') }">-->
    <!--<label for="email">E-mail</label>-->
    <!--<input type="text" id="email" class="form-control" placeholder="Enter your email or phone number..."-->
    <!--name="email"-->
    <!--v-model="form.email">-->
    <!--<span class="help-block text-danger" v-if="form.errors.has('email')"-->
    <!--v-text="form.errors.get('email')"></span>-->
    <!--</div>-->
    <!--<div class="form-group" v-bind:class="{ 'has-error': form.errors.has('password') }">-->
    <!--<label for="password">Password</label>-->
    <!--<input type="password" id="password" class="form-control" name="password"-->
    <!--placeholder="Enter your password..." v-model="form.password">-->
    <!--<span class="help-block text-danger" v-if="form.errors.has('password')"-->
    <!--v-text="form.errors.get('password')"></span>-->
    <!--</div>-->
    <!--<div class="form-group">-->
    <!--<input type="checkbox" id="remember" name="remember" v-model="remember">-->
    <!--<label for="remember">Remember me</label>-->
    <!--</div>-->
    <!--<button type="submit" :class="[loading ? 'loading-btn' : '' ,'btn btn-primary']" :disabled="this.form.errors.any()">Login</button>-->
    <!--</form>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar color="white">
                        <v-toolbar-title>{{$t('log_in_to_account')}}</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form autocomplete="" @submit.prevent="login"
                                @keydown.native="form.errors.clear($event.target.name)">
                            <v-text-field
                                    v-model="form.email"
                                    :error-messages="form.errors.get('email')"
                                    :class="{ 'error--text': form.errors.has('email') }"
                                    class="primary--text"
                                    name="email"

                                    :label="$t('enter_email_phone')"
                                    data-vv-name="email"
                                    prepend-icon="email"
                            ></v-text-field>
                            <v-text-field
                                    v-model="form.password"
                                    :append-icon="icon"
                                    :type="!password_visible ? 'password' : 'text'"
                                    :error-messages="form.errors.get('password')"
                                    :class="{ 'error--text': form.errors.has('password') }"
                                    class="primary--text"
                                    name="password"
                                    :label="$t('enter_your_password')"
                                    hint="At least 6 characters"
                                    data-vv-name="password"
                                    prepend-icon="lock"
                                    @click:append="(password_visible = !password_visible)"
                            ></v-text-field>
                            <v-btn
                                    :loading="loading"
                                    :disabled="this.form.errors.any()"
                                    block
                                    type="submit"
                                    color="primary"
                            >
                                {{$t('sign_in')}}
                                <v-icon right>exit_to_app</v-icon>
                            </v-btn>
                        </v-form>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md6>
                                <v-btn

                                        block
                                        flat
                                        class="white--text"
                                        color="teal lighten-2"
                                        to="/register"
                                >
                                    {{$t('new_sign_up')}}
                                </v-btn>
                            </v-flex>
                            <v-flex xs12 sm6 md6 >
                                <v-btn
                                        block
                                        flat
                                        class="white--text"
                                        color="secondary"
                                        to="/reset"
                                >
                                    {{$t('forgot_your_password')}}
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                form: new Form({
                    email: '',
                    password: '',
                }),
                password_visible: false,
                has_error: false,
                error: '',
                remember: false,
                loading: false
            }
        },
        computed: {
            icon() {
                return this.password_visible ? "visibility" : "visibility_off";
            },
        },
        mounted() {
            //
        },
        methods: {
            login() {
                this.loading = true;
                // get the redirect object
                let redirect = this.$auth.redirect();
                this.$auth.login({
                    params: this.form,
                    success: function () {
                        // handle redirection
                        const redirectTo = redirect ? redirect.from.name : this.$auth.user().type === 'admin' ? 'admin.dashboard' : 'home';
                        this.$router.push({name: redirectTo})
                        this.loading = false;
                    },
                    error: function (res) {
                        if (res.response.data.errors)
                            this.form.errors.record(res.response.data);
//                        else
//                            this.form.errors.record_error(res.response.data);
                        flash(res.response.data.message,'error');
                        this.loading = false;
                    },
                    rememberMe: this.remember,
                    fetchUser: true
                })
            }
        }
    }
</script>