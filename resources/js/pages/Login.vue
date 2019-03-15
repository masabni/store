<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar color="white">
                        <v-toolbar-title>{{$t('log_in_to_account')}}</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form autocomplete="" @submit.prevent="submit"
                                @keydown.native="form.errors.clear($event.target.name)">
                            <v-text-field
                                    v-model="form.email"
                                    v-validate="'required'"
                                    :error-messages="errors.first('email')"
                                    :class="{ 'error--text': errors.has('email') }"
                                    class="primary--text"
                                    name="email"
                                    :label="$t('enter_email_phone')"
                                    data-vv-name="email"
                                    prepend-icon="email"
                            ></v-text-field>
                            <v-text-field
                                    v-model="form.password"
                                    v-validate="'required|min:6'"
                                    :append-icon="icon"
                                    :type="!password_visible ? 'password' : 'text'"
                                    :error-messages="errors.first('password')"
                                    :class="{ 'error--text': errors.has('password') }"
                                    class="primary--text"
                                    name="password"
                                    :label="$t('enter_your_password')"
                                    hint="At least 6 characters" :hint="$t('at_least_characters', [6])"
                                    data-vv-name="password"
                                    prepend-icon="lock"
                                    @click:append="(password_visible = !password_visible)"
                            ></v-text-field>
                            <v-btn
                                    :loading="loading"
                                    :disabled="!!errors.count()"
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
                            <v-flex xs12 sm6 md6>
                                <v-btn
                                        block
                                        flat
                                        class="white--text"
                                        color="secondary"
                                        tp="/reset"
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
            submit() {
                this.$validator.validateAll().then((result) => {if (result) this.login();});
            },
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
                        snackbar(res.response.data.message,'error');
                        this.loading = false;
                    },
                    rememberMe: this.remember,
                    fetchUser: true
                })
            }
        }
    }
</script>