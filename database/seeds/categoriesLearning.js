'use strict';

const CategoryLearning = require('../../src/models/CategoryLearningModel').CategoryLearning;

module.exports = () => (
    [
        //Aulas
        new CategoryLearning({
            name: "Administração e finanças",
            key: 'management',
            type: "lesson"
        }),
        new CategoryLearning({
            name: "Análise e tomada de decisões (Indicadores)",
            key: 'strategy',
            type: "lesson"
        }),
        new CategoryLearning({
            name: "Atendimento ao cliente",
            key: 'customerService',
            type: "lesson"
        }),
        new CategoryLearning({
            name: "Busca pelo emprego",
            key: 'searchForJobs',
            type: "lesson"
        }),
        new CategoryLearning({
            name: "Comunicação",
            key: 'communication',
            type: "lesson"
        }),
        new CategoryLearning({
            name: "Criatividade e Inovação",
            key: 'creative',
            type: "lesson"
        }),
        new CategoryLearning({
            name: "Liderança e trabalho em equipe",
            key: 'teamWork',
            type: "lesson"
        }),
        new CategoryLearning({
            name: "Marketing Pessoal",
            key: 'personalMarketing',
            type: "lesson"
        }),
        new CategoryLearning({
            name: "Organização e produtividade",
            key: 'efficiency',
            type: "lesson"
        }),
        new CategoryLearning({
            name: "Processo seletivo",
            key: 'selectiveProcess',
            type: "lesson"
        }),
        new CategoryLearning({
            name: "Propósito de vida",
            key: 'lifePurpose',
            type: "lesson"
        }),

        new CategoryLearning({
            name: "Auto-conhecimento",
            type: "test"
        }),
        new CategoryLearning({
            name: "Habilidades",
            type: "test"
        }),
        new CategoryLearning({
            name: "Conhecimentos",
            type: "test"
        })
    ]
);
