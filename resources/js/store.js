import Vuex from 'vuex';
const store = new Vuex.Store({
    state: {
        user: null,
        // token: null,
    },
    getters: {
        // token: state => {
        //     return state.token
        // }
    },
    mutations: {
        setCurrentUser(currentState, user) {
            currentState.user = user;
            // currentState.baseURL = user.is_admin ? 'api/upload_temp' : 'api/user_upload_temp'
        },
        setCurrentUserImage(currentState, image) {
            currentState.user.image = image;
        },
        unsetCurrentUser(currentState) {
            currentState.user.first_name = '';
            currentState.user.last_name = '';
            currentState.user.full_name = '';
            currentState.user.email = '';
            currentState.user.national_id = '';
            currentState.user.image = '';
            currentState.user.job_title = '';
            currentState.user.company = '';
            currentState.user.email_confirmed = '';
            currentState.user.is_admin = '';
        },
    },
    actions: {
        login(context, credentials) {
            return axios.post('login', credentials).then(response => {
                auth.methods.setToken(response.data.access_token, response.data.refresh_token);
                return Promise.resolve();
                // context.commit('setCurrentUser', response.user);
            }).catch(err => {
                // return Promise.reject(new Error('invalid login'));
                console.log(err.message);
                return Promise.reject(err.message);
            });
        }
    },
    strict: process.env.NODE_ENV !== 'production'
});
export default store