'use strict';

const _ = require('lodash');

module.exports = (files) => ({
    questions: [{
        title: 'Relacione',
        text: 'Você é o vendedor de uma loja de eletrônicos e vai ter que se virar para não perder o cliente! Valendo!.',
        time: 60,
        number: 1,
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Quase lá!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'intermediate'
        },{
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        drops: [{
            number: 1,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl,
        }, {
            number: 2,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl,
        }, {
            number: 3,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl,
        }, {
            number: 4,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl,
        }],
        drags: [{
            text: 'Comprar frutas na feira',
            relatedTo: 1
        }, {
            text: 'Comprar frutas na feira 2',
            relatedTo: 2
        }, {
            text: 'Comprar frutas na feira 3',
            relatedTo: 3
        }, {
            text: 'Comprar frutas na feira 4',
            relatedTo: 4
        }]
    }, {
        title: 'Relacione 2',
        text: 'Você é o vendedor de uma loja de eletrônicos e vai ter que se virar para não perder o cliente! Valendo!.',
        time: 60,
        number: 2,
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Quase lá!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'intermediate'
        },{
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        drops: [{
            number: 1,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl,
        }, {
            number: 2,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl,
        }, {
            number: 3,
            image: _.find(files, file => file.filename === 'Aula14_sim_Entrevista_Ativ-4b.png').fileUrl,
        }],
        drags: [{
            text: 'Comprar frutas na feira',
            relatedTo: 1
        }, {
            text: 'Comprar frutas na feira 2',
            relatedTo: 2
        }, {
            text: 'Comprar frutas na feira 3',
            relatedTo: 3
        }]
    }]
});
