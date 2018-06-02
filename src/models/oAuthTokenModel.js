'use strict';

//Module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OAuthTokenSchema = new Schema({
    accessToken: {
        type: String,
        required: true,
        unique: true
    },
    clientId: String,
    expires: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Exports Module
module.exports.OAuthTokenSchema = OAuthTokenSchema;
module.exports.OAuthToken = mongoose.model('OAuthToken', OAuthTokenSchema);
