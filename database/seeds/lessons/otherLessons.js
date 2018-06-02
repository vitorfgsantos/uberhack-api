'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Apresentação em público",
            points: 2000,
            source: 'Google',
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            description: 'Vídeo aula de matemática e exercícios de matemática desde o ensino fundamental até o ensino superior e concursos públicos.',
            estimatedTime: '30',
            category: _.find(categories, category => category.name === 'Marketing Pessoal').name,
            activities: [],
            image: _.find(files, file => file.filename === 'background-lesson.png').fileUrl,
        }),
        new Lesson({
            name: "Administração do tempo",
            points: 2000,
            source: 'Google',
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            category: _.find(categories, category => category.name === 'Marketing Pessoal').name,
            description: 'Vídeo aula de matemática e exercícios de matemática desde o ensino fundamental até o ensino superior e concursos públicos.',
            estimatedTime: '30',
            activities: [],
            image: _.find(files, file => file.filename === 'background-lesson.png').fileUrl,
        }),
        new Lesson({
            name: "Rotinas Administrativas",
            points: 2000,
            category: _.find(categories, category => category.name === 'Marketing Pessoal').name,
            source: 'Google',
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            description: 'Vídeo aula de matemática e exercícios de matemática desde o ensino fundamental até o ensino superior e concursos públicos.',
            estimatedTime: '30',
            activities: [],
            image: _.find(files, file => file.filename === 'background-lesson.png').fileUrl,
        }),
        new Lesson({
            name: "NETWORKING",
            points: 2000,
            category: _.find(categories, category => category.name === 'Marketing Pessoal').name,
            source: 'Google',
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            description: 'Vídeo aula de matemática e exercícios de matemática desde o ensino fundamental até o ensino superior e concursos públicos.',
            estimatedTime: '30',
            activities: [],
            image: _.find(files, file => file.filename === 'background-lesson.png').fileUrl,
        }),
        new Lesson({
            name: "Atendimento - Nível 1",
            points: 2000,
            category: _.find(categories, category => category.name === 'Marketing Pessoal').name,
            source: 'Google',
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            description: 'Vídeo aula de matemática e exercícios de matemática desde o ensino fundamental até o ensino superior e concursos públicos.',
            estimatedTime: '30',
            activities: [],
            image: _.find(files, file => file.filename === 'background-lesson.png').fileUrl,
        }),
        new Lesson({
            name: "Apresentações e ferramentas",
            points: 2000,
            category: _.find(categories, category => category.name === 'Marketing Pessoal').name,
            source: 'Google',
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            description: 'Vídeo aula de matemática e exercícios de matemática desde o ensino fundamental até o ensino superior e concursos públicos.',
            estimatedTime: '30',
            activities: [],
            image: _.find(files, file => file.filename === 'background-lesson.png').fileUrl,
        }),
        new Lesson({
            name: "Ferramentas",
            points: 2000,
            category: _.find(categories, category => category.name === 'Marketing Pessoal').name,
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            source: 'Google',
            description: 'Vídeo aula de matemática e exercícios de matemática desde o ensino fundamental até o ensino superior e concursos públicos.',
            estimatedTime: '30',
            activities: [],
            image: _.find(files, file => file.filename === 'background-lesson.png').fileUrl,
        }),
        new Lesson({
            name: "Atendimento - Nível 2",
            points: 2000,
            category: _.find(categories, category => category.name === 'Marketing Pessoal').name,
            source: 'Google',
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            description: 'Vídeo aula de matemática e exercícios de matemática desde o ensino fundamental até o ensino superior e concursos públicos.',
            estimatedTime: '30',
            activities: [],
            image: _.find(files, file => file.filename === 'background-lesson.png').fileUrl,
        }),
        new Lesson({
            name: "PROATIVIDADE",
            points: 2000,
            category: _.find(categories, category => category.name === 'Marketing Pessoal').name,
            source: 'Google',
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            description: 'Vídeo aula de matemática e exercícios de matemática desde o ensino fundamental até o ensino superior e concursos públicos.',
            estimatedTime: '30',
            activities: [],
            image: _.find(files, file => file.filename === 'background-lesson.png').fileUrl,
        }),
        new Lesson({
            name: "CRIATIVIDADE",
            points: 2000,
            category: _.find(categories, category => category.name === 'Marketing Pessoal').name,
            source: 'Google',
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            description: 'Vídeo aula de matemática e exercícios de matemática desde o ensino fundamental até o ensino superior e concursos públicos.',
            estimatedTime: '30',
            activities: [],
            image: _.find(files, file => file.filename === 'background-lesson.png').fileUrl,
        }),
        new Lesson({
            name: "INOVAÇÃO",
            points: 2000,
            source: 'Google',
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            description: 'Vídeo aula de matemática e exercícios de matemática desde o ensino fundamental até o ensino superior e concursos públicos.',
            estimatedTime: '30',
            category: _.find(categories, category => category.name === 'Marketing Pessoal').name,
            activities: [],
            image: _.find(files, file => file.filename === 'background-lesson.png').fileUrl,
        }),
        new Lesson({
            name: "Trabalho em equipe",
            points: 2000,
            source: 'Google',
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            description: 'Vídeo aula de matemática e exercícios de matemática desde o ensino fundamental até o ensino superior e concursos públicos.',
            estimatedTime: '30',
            category: _.find(categories, category => category.name === 'Marketing Pessoal').name,
            activities: [],
            image: _.find(files, file => file.filename === 'background-lesson.png').fileUrl,
        })
    ]
);
