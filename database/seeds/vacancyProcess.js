'use strict';

const VacancyProcess = require('../../src/models/vacancyProcessModel').VacancyProcess;

module.exports = (companies) => (
    [
        new VacancyProcess({
            name: 'Passo 1',
            steps: {
                name: 'Vaga',
                needScheduling: false,
                scheduling: {
                    type: 'Presencial', //presential or remote
                    address: {
                        street: ' R. Bela Cintra',
                        number: '741',
                        complement: '',
                        district: 'Consolação',
                        city: 'São Paulo',
                        state: 'SP',
                        zipCode: '07809170'
                    },
                    date: new Date(),
                }
            },
            company: companies[0]._id
        })
    ]
);
