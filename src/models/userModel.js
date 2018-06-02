'use strict';

//Module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserManagerSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        // required: true,
        trim: true,
        index: {
            unique: true
        }
    },
    password: String,
    firstName: String,
    lastName: String,
    gender: String,
});

// Exports Module
module.exports.UserManagerSchema = UserManagerSchema;
module.exports.UserManager = mongoose.model('User', UserManagerSchema);
