<template>
    <v-snackbar
            v-model="show"
            multi-line
            top
            :color="level"
    >
        {{body}}
        <v-btn
                dark
                flat
                @click="show = false"
        >
            {{$t('close')}}
        </v-btn>
    </v-snackbar>
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
                this.snackbar();
            }

            window.events.$on(
                'snackbar', data => this.snackbar(data)
            );
        },

        methods: {
            snackbar(data) {
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
                    snackbar(i18n.t('confirmation_email_sent'));
                    this.loading = false;
                    this.showResendEmailBtn = false;
                }).catch((err) => {
                    snackbar(err.message, 'danger');
                    this.loading = false;
                    this.showResendEmailBtn = false;
                });
            }
        }
    };
</script>
