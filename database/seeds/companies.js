'use strict';

const Company = require('../../src/models/companyModel').Company;

module.exports = () => (
    [
        new Company({
            fantasyName: 'Empresa Fantasia',
            companyName: 'Empresa',
            cnpj: '87.834.750/0001-47',
            sector: 'Portuário',
            recruitmentConsultancy: true,
            numberEmployees: "até 100",
            site: 'http://www.site.com.br',
            phone: '(11)3477-0000',
            address: {
                street: "Rua Lisboa",
                number: "890",
                complement: "Casa",
                district: "Pinheiros",
                city: "São Paulo",
                state: "São Paulo",
                zipCode: '05413-000',
                country: "Brasil"
            },
            location:[-46.681338,-23.555446],
            description: 'Descrição da empresa',
            visibilityVacancy: 1000,
            totalCredits: 100000,
            avaibleCredits: 50000,
            allocatedCredits: 50000,
            vacancyProcess: [{
                name: "Processo 1",
                isProcessDefault: false,
                steps: [{
                    name: "Todos",
                    mandatory: true,
                    needScheduling: false
                }, {
                    mandatory: true,
                    name: "Selecionados",
                    needScheduling: true,
                    workingDays: 1
                }, {
                    name: "Pro1 Passo 1",
                    needScheduling: true,
                    workingDays: 2
                }, {
                    name: "Pro1 Passo 2",
                    needScheduling: false,
                    workingDays: 3
                }, {
                    mandatory: true,
                    name: "Contratados",
                    needScheduling: false,
                    workingDays: 4
                }, {
                    mandatory: true,
                    name: "Dispensados"
                }]
            }],
        }),
        new Company({
            fantasyName: 'Cobasi',
            companyName: 'Cobasi Comercio de Prod Basicos e Industrializados Ltda',
            cnpj: '53.153.938/0010-07',
            sector: 'Varejo',
            recruitmentConsultancy: true,
            numberEmployees: "até 3.000",
            site: 'http://www.cobasi.com.br',
            phone: '(11)3831-8999',
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
            location:[-46.728868,-23.539124],
            description: 'Fundada há mais de 30 anos, a Cobasi foi uma das primeiras lojas estilo shopping para pets do Brasil. Hoje, com 45 lojas, a empresa é uma das maiores redes de varejo especialmente voltada para os cuidados do animal de estimação. A Cobasi entende o quanto os bichinhos são importantes, oferecendo companhia, amizade, conforto e alegria a seus donos. Os clientes da empresa contam com o entendimento desta estreita relação que existe entre eles e seus bichinhos. Por isso, a Cobasi deseja ser, a cada dia, a melhor organização dedicada à criação e ao enriquecimento do vínculo entre pessoas e animais. Seu compromisso consiste em suprir as necessidades dos clientes na venda de produtos, tudo em um só ambiente, bonito, acolhedor, agradável e que estreite o máximo possível seu vínculo com a natureza.',
            visibilityVacancy: 1000,
            totalCredits: 100000,
            avaibleCredits: 50000,
            allocatedCredits: 50000,
            vacancyProcess: [{
                name: "Processo 1",
                isProcessDefault: false,
                steps: [{
                    name: "Todos",
                    mandatory: true,
                    needScheduling: false
                }, {
                    mandatory: true,
                    name: "Selecionados",
                    needScheduling: true,
                    workingDays: 1
                }, {
                    name: "Pro1 Passo 1",
                    needScheduling: true,
                    workingDays: 2
                }, {
                    name: "Pro1 Passo 2",
                    needScheduling: false,
                    workingDays: 3
                }, {
                    mandatory: true,
                    name: "Contratados",
                    needScheduling: false,
                    workingDays: 4
                }, {
                    mandatory: true,
                    name: "Dispensados"
                }]
            }],
        })
    ]
);
