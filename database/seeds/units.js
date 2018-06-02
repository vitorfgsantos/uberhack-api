'use strict';

const _ = require('lodash');
const Unit = require('../../src/models/company/unitModel').Unit;

module.exports = (companies) => (
    [
        new Unit({
            name: 'Unidade 1',
            address: {
                street: "Av das Araucarias",
                number: "200",
                complement: "Casa",
                district: "Boqueirão",
                city: "Santos",
                state: "São Paulo",
                zipCode: '11712-490',
                country: "Brasil"
            },
            phone: '(11)0000-9999',
            numberEmployees: "até 100",
            description: 'Descrição da Unidade',
            company: _.find(companies, company => (company.companyName === 'Empresa'))._id
        }),
        new Unit({
            name: 'Unidade 2',
            address: {
                street: "Av Costa Machado",
                number: "310",
                complement: "Bloco 1, Apt 12",
                district: "Canto do Forte",
                city: "Praia Grande",
                state: "São Paulo",
                zipCode: '11700-610',
                country: "Brasil"
            },
            phone: '(11)0000-9999',
            numberEmployees: "até 100",
            description: 'Descrição da Unidade',
            company: _.find(companies, company => (company.companyName === 'Empresa'))._id
        }),
        new Unit({
            name: 'Unidade Cobasi',
            address: {
                street: "Rua Manoel Velasco",
                number: "90, 96",
                complement: "Casa",
                district: "Vila Leopoldina",
                city: "São Paulo",
                state: "São Paulo",
                zipCode: '05319-010',
                country: "Brasil"
            },
            phone: '(11)3831-8999',
            numberEmployees: "até 3.000",
            description: 'Descrição da Unidade',
            company: _.find(companies, company => (company.companyName === 'Cobasi Comercio de Prod Basicos e Industrializados Ltda'))._id
        })
    ]
);
