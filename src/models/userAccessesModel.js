'use strict';

//Module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserAccessSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Exports Module
module.exports.UserAccessSchema = UserAccessSchema;
module.exports.UserAccess = mongoose.model('UserAccess', UserAccessSchema);
