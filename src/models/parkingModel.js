'use strict';

//Module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParkingSchema = new Schema({
    name: String,
    freeSpaces: Number,
    address: {
        street: String,
        number: Number,
        district: String,
        city: String,
        state: String
    },
    lots: {
        busy: Number,
        free: Number,
        total: Number
    },
    cost: Number
});

// Exports Module
module.exports.ParkingSchema = ParkingSchema;
module.exports.Parking = mongoose.model('Parking', ParkingSchema);
