'use strict';

const _ = require('lodash');

module.exports = (files) => ({
    questions: [{
        title: 'Quiz Memorizar 1',
        text: 'Você foi comprar um celular e pegou um vendedor que sabe tudo e tirou todas as suas dúvidas.',
        time: 120,
        number: 1,
        alternativesType: 'image',
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        alternatives: [{
            option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2_a.png').fileUrl,
            letter: 'A'
        }, {
            option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2_b.png').fileUrl,
            letter: 'B'
        }, {
            option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2_c.png').fileUrl,
            letter: 'C'
        }, {
            option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2_d.png').fileUrl,
            letter: 'D'
        }, {
            option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2_e.png').fileUrl,
            letter: 'E'
        }, {
            option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2_f.png').fileUrl,
            letter: 'F'
        }],
        correctAnswer: 'D'
    }, {
        title: 'Quiz Memorizar 2',
        text: 'Você foi comprar um celular e pegou um vendedor que sabe tudo e tirou todas as suas dúvidas.',
        time: 120,
        number: 2,
        alternativesType: 'image',
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        alternatives: [{
            option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2_a.png').fileUrl,
            letter: 'A'
        }, {
            option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2_b.png').fileUrl,
            letter: 'B'
        }, {
            option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2_c.png').fileUrl,
            letter: 'C'
        }, {
            option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2_d.png').fileUrl,
            letter: 'D'
        }, {
            option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2_e.png').fileUrl,
            letter: 'E'
        }, {
            option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2_f.png').fileUrl,
            letter: 'F'
        }],
        correctAnswer: 'B'
    }]
});
