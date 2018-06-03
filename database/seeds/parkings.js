'use strict';

const Parking = require('../../src/models/parkingModel').Parking;

module.exports = (companies) => (
    [
        new Parking({
            name: 'Estacionamento Anhanguera',
            lots: {
                busy: 40,
                free: 60,
                total: 100
            },
            cost: 10,
            address: {
                street: 'Rua Eduardo Viviani',
                number: 400,
                district: 'Boa Vista',
                city: 'Juiz de Fora',
                state: 'MG'
            }
        }),
        new Parking({
            name: 'Campinas Estacionamentos',
            lots: {
                busy: 40,
                free: 60,
                total: 100
            },
            cost: 10,
            address: {
                street: 'Rua Eduardo Viviani',
                number: 400,
                district: 'Boa Vista',
                city: 'Juiz de Fora',
                state: 'MG'
            }
        }),
        new Parking({
            name: 'Estacionamento Central',
            lots: {
                busy: 40,
                free: 60,
                total: 100
            },
            cost: 10,
            address: {
                street: 'Rua Aurora Tôrres',
                number: 10,
                district: 'Santa Luzia',
                city: 'Juiz de Fora',
                state: 'MG'
            }
        }),
    ]
);
