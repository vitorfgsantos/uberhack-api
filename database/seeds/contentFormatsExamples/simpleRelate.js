'use strict';

const _ = require('lodash');

module.exports = (files) => ({
    questions: [{
        title: 'Relacione 3',
        text: 'Você é o vendedor de uma loja de eletrônicos e vai ter que se virar para não perder o cliente! Valendo!.',
        time: 60,
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        draggableText: 'Comprar frutas na feira 1',
        alternatives: [{
            number: 1,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl
        }, {
            number: 2,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl
        }, {
            number: 3,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl
        }],
        correctAnswer: 2,
    }, {
        title: 'Relacione 2',
        text: 'Você é o vendedor de uma loja de eletrônicos e vai ter que se virar para não perder o cliente! Valendo!.',
        time: 60,
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        draggableText: 'Comprar frutas na feira 2',
        alternatives: [{
            number: 1,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl
        }, {
            number: 2,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl
        }],
        correctAnswer: 1,
    }, {
        title: 'Relacione 2.1',
        text: 'Você é o vendedor de uma loja de eletrônicos e vai ter que se virar para não perder o cliente! Valendo!.',
        time: 60,
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        draggableText: 'Comprar frutas na feira 2',
        alternatives: [{
            number: 1,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl
        }, {
            number: 2,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl
        }],
        correctAnswer: 1,
    }, {
        title: 'Relacione 2.2',
        text: 'Você é o vendedor de uma loja de eletrônicos e vai ter que se virar para não perder o cliente! Valendo!.',
        time: 60,
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        draggableText: 'Comprar frutas na feira 2',
        alternatives: [{
            number: 1,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl
        }, {
            number: 2,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl
        }],
        correctAnswer: 1,
    }]
});
