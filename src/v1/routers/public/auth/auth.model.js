const OAuthToken = require('../../../../models/oAuthTokenModel').OAuthToken;
const OAuthClient = require('../../../../models/oAuthClientModel').OAuthClient;
const UserAccess = require('../../../../models/userAccessesModel').UserAccess;
const User = require('../../../../models/userModel').User;

// const UserService = require('../../../services/user.service');

const getClient = function (clientId, clientSecret, next) {
    OAuthClient.findOne({
        clientId: clientId,
        clientSecret: clientSecret
    }, next);
};

const grantTypeAllowed = function (oAuthClient, grantType, next) {
    return next(false, true);
};

const getUser = function (email, password, next) {
    User.findOne({
        email
    }, (err, user) => {
        if (err) return next(err);
        if (!user) return next();

        // const passwordIsValid = UserService.validatePassword(user.password, password);
        // if (!passwordIsValid)
        //     return next();

        return next(null, user._id);
    });
};

const saveAccessToken = function (token, clientId, expires, userId, next) {
    UserAccess.create({
        user: userId
    })
        .then(() => {
            return OAuthToken.create({
                accessToken: token,
                clientId: clientId,
                user: userId,
                expires: expires
            });
        })
        .then(oauthToken => {
            next(null, oauthToken);
        })
        .catch(err => {
            next(err);
        });
};

const getAccessToken = function (bearerToken, next) {
    OAuthToken.findOne({
        accessToken: bearerToken
    }, next);
};

module.exports = {
    getClient,
    grantTypeAllowed,
    getUser,
    saveAccessToken,
    getAccessToken
};
