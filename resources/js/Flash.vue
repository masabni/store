<template>
    <!--<div v-show="show" class="uk-notify uk-notify-bottom-right" style="display: block;">-->
        <!--<div :class="classes"-->
             <!--style="opacity: 1; margin-top: 0px; margin-bottom: 10px;"><a class="close" @click="show = false">×</a>-->
            <!--<div v-html="body"></div>-->
            <!--<button v-if="showResendEmailBtn" @click="resendEmail()" :class="loading ? 'loading-btn btn-link' : 'btn-link'">{{$t('resend_email')}}</button>-->
        <!--</div>-->
    <!--</div>-->
    <div>
        <v-alert
                v-model="show"
                dismissible
                :type="level"
                transition="scale-transition"
        >
           {{body}}
        </v-alert>
    </div>
</template>

<script>
    export default {
        props: ['message'],

        data() {
            return {
                body: this.message,
                level: 'success',
                hideAfter: 5000,
                show: false,
                showResendEmailBtn: false,
                loading : false
            }
        },

        computed: {
            classes() {
                let defaults = ['uk-notify-message','alert-dismissable','alert']; //,'fixed', 'p-4', 'border', 'text-white'

                if (this.level === 'success') defaults.push('alert-success');
                if (this.level === 'warning') defaults.push('alert-warning');
                if (this.level === 'danger') defaults.push('alert-danger');
                if (this.level === 'info') defaults.push('alert-info');

                return defaults;
            }
        },

        created() {
            if (this.message) {
                this.flash();
            }

            window.events.$on(
                'flash', data => this.flash(data)
            );
        },

        methods: {
            flash(data) {
                if (data) {
                    this.body = data.message;
                    this.level = data.level;
                    this.hideAfter = data.hideAfter;
                    this.showResendEmailBtn = data.showResendEmailBtn;
                }

                this.show = true;

                this.hide();
            },
            hide() {
                setTimeout(() => {
                    this.show = false;
                }, this.hideAfter);
            },
            resendEmail() {
                this.loading = true;
                let i18n = this.$i18n;
                this.$http.get('/activate',{params: {email : this.$store.state.user.email}}).then((res) => {
                    flash(i18n.t('confirmation_email_sent'));
                    this.loading = false;
                    this.showResendEmailBtn = false;
                }).catch((err) => {
                    flash(err.message, 'danger');
                    this.loading = false;
                    this.showResendEmailBtn = false;
                });
            }
        }
    };
</script>
