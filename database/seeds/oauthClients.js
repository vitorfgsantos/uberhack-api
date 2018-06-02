'use strict';

const OAuthClient = require('../../src/models/oAuthClientModel').OAuthClient;

module.exports = () => (
    [
        new OAuthClient({
            clientId: 'app',
            clientSecret: 'app@password',
            // redirectUri: redirectUri
        }),
        new OAuthClient({
            clientId: 'site',
            clientSecret: 'site@password',
            // redirectUri: redirectUri
        }),
        new OAuthClient({
            clientId: 'cms',
            clientSecret: 'cms@password',
            // redirectUri: redirectUri
        })

    ]
);
