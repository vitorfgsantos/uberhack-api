'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Sua imagem, seu Cartão de Visitas",
            points: 2000,
            source: 'Coca-Cola',
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            description: 'Aqui você vai encontrar aulas de Gramática do básico ao avançado, com todo o conteúdo que você precisa para detonar no ENEM ou passar naquele tão sonhado vestibular. São aulas curtas e diretas, com muitos exemplos e exercícios resolvidos, cobrindo fonética, fonologia, morfologia, sintaxe, semântica, etimologia e estilística.',
            estimatedTime: '15',
            category: _.find(categories, category => category.name === 'Marketing Pessoal').name,
            activities: []
        })
    ]
);
