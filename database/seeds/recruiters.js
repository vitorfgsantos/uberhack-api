'use strict';

const _ = require('lodash');
const Recruiter = require('../../src/models/userRecruiterModel').UserRecruiter;

module.exports = (users, companies, units) => (
    [
        new Recruiter({
            firstName: 'Daniel',
            lastName: 'Loscheck',
            gender: 'Masculino',
            phone: '(13)3252-81111',
            cellphone: '(13)98252-81111',
            email: 'admin@taqe.com.br',
            status: true,
            user: _.find(users, user => (user.email === 'site@taqe.com.br'))._id,
            company: _.find(companies, company => (company.companyName === 'Empresa'))._id,
            actingField: 'Informática',
            cpf: '615.314.419-55',
            organization: _.find(units, units => (units.name === 'Unidade 1'))._id,
            isAdmin: true,
            office: 'Recrutador',
            credits: 10000
        }),
        new Recruiter({
            firstName: 'Renato',
            lastName: 'Dias',
            gender: 'Masculino',
            phone: '(13)3252-81111',
            cellphone: '(13)98252-81111',
            email: 'cobasi@taqe.com.br',
            status: true,
            user: _.find(users, user => (user.email === 'cobasi@taqe.com.br'))._id,
            company: _.find(companies, company => (company.companyName === 'Cobasi Comercio de Prod Basicos e Industrializados Ltda'))._id,
            actingField: 'Informática',
            cpf: '615.314.419-55',
            organization: _.find(units, units => (units.name === 'Unidade Cobasi'))._id,
            isAdmin: true,
            office: 'Recrutador',
            credits: 10000
        })/*,
        new Recruiter({
            firstName: 'Matheus',
            lastName: 'Sousa',
            gender: 'Masculino',
            phone: '(13)3152-81122',
            cellphone: '(13)98902-8311',
            email: 'usuario@taqe.com.br',
            status: true,
            user: _.find(users, user => (user.email === 'site@taqe.com.br'))._id,
            company: _.find(companies, company => (company.companyName === 'Empresa'))._id,
            actingField: 'Informática',
            cpf: '432.754.122-50',
            organization: _.find(units, units => (units.name === 'Unidade 2'))._id,
            isAdmin: false,
            office: 'Recrutador',
            permission: ["permissão 1"],
            credits: 6000
        })*/

    ]
);
