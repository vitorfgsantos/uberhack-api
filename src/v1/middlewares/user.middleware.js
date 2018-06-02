'use strict';

const OAuthToken = require('../../models/oAuthTokenModel').OAuthToken;
const User = require('../../models/userModel').User;

module.exports = function* (next) {

    if (!this.headers || !this.headers.authorization)
        return yield next;

    let bearerToken = this.headers.authorization.substring(7);
    let oauthToken = yield OAuthToken.findOne({
        accessToken: bearerToken
    }).select('user').lean();

    if (oauthToken && oauthToken.user)
        this.state.user = yield User.findById(oauthToken.user).lean();

    yield next;
};
