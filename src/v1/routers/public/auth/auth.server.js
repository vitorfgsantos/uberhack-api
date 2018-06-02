const oauthserver = require('koa-oauth-server');
const oauthModel = require('./auth.model');

module.exports = oauthserver({
        model: oauthModel,
        grants: ['password'],
        debug: false,
        accessTokenLifetime: 31536000, //365 days
        refreshTokenLifetime: 31536000, //365 days
    })
