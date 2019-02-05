module.exports = {

    request: function (req, token) {
        this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token});
    },

    response: function (res) {
        let headers = this.options.http._getHeaders.call(this, res);
        let auth = headers.Authorization || headers.authorization;
        let token = localStorage.getItem('user_token');
        if((token === null || token === "undefined") && auth) {
            token = JSON.parse(auth);
            token = token.access_token;
        }
        if (token) {
            token = token.split(/Bearer\:?\s?/i);

            return token[token.length > 1 ? 1 : 0].trim();
        }
    }
};