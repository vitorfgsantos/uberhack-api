'use strict';

const _ = require('lodash');
const Transaction = require('../../src/models/transactionModel').Transaction;

module.exports = (companies, recruiters, users) => (
    [
        new Transaction({
            value: 20,
            type: 'credit',
            description: 'Crédito',
            company: _.find(companies, company => (company.companyName === 'Empresa'))._id,
            createdAt: new Date()
        }),
        new Transaction({
            value: 30,
            type: 'credit',
            description: 'Crédito 2',
            company: _.find(companies, company => (company.companyName === 'Empresa'))._id,
            createdAt: new Date()
        }),
        new Transaction({
            value: 40,
            type: 'transferToRecruiter',
            description: 'Transferência para Recrutador',
            company: _.find(companies, company => (company.companyName === 'Empresa'))._id,
            userRecruiter: recruiters[0]._id,
            createdAt: new Date()
        }),
        new Transaction({
            value: 7,
            type: 'debitFromRecruiter',
            description: 'Débito no Recrutador',
            company: _.find(companies, company => (company.companyName === 'Empresa'))._id,
            userRecruiter: recruiters[0]._id,
            createdAt: new Date()
        }),
        new Transaction({
            value: 10,
            type: 'transferToCompany',
            description: 'Transferencia para Company',
            company: _.find(companies, company => (company.companyName === 'Empresa'))._id,
            createdAt: new Date()
        }),
    ]
);
