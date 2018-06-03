'use strict';

const Parking = require('../../src/models/parkingModel').Parking;

module.exports = (companies) => (
    [
        new Parking({
            name: 'Estacionamento Pameiras',
            lots: {
                busy: 19,
                free: 81,
                total: 100
            },
            cost: 8,
            address: {
                street: 'Av. Francisco Matarazzo',
                number: 1705,
                district: 'Água Branca',
                city: 'São Paulo',
                state: 'SP'
            },
            coordinates: [-23.527737, -46.676030]
        }),
        new Parking({
            name: 'Estacionamento Anhaguera',
            lots: {
                busy: 10,
                free: 90,
                total: 100
            },
            cost: 10,
            address: {
                street: 'R. Cotoxó',
                number: 110,
                district: 'Vila Pompeia',
                city: 'São Paulo',
                state: 'SP'
            },
            coordinates: [-23.527737, -46.676030]
        }),
        new Parking({
            name: 'Estacionamento Central',
            lots: {
                busy: 40,
                free: 60,
                total: 100
            },
            cost: 11,
            address: {
                street: 'Av. Pompéia',
                number: 718,
                district: 'Vila Pompeia',
                city: 'São Paulo',
                state: 'SP'
            }
        }),
    ]
);