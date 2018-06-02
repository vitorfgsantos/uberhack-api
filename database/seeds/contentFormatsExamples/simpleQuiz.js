'use strict';

const _ = require('lodash');

module.exports = (files) => ({
    questions: [{
        title: 'Quiz 2 img',
        text: 'Você foi comprar um celular e pegou um vendedor que sabe tudo e tirou todas as suas dúvidas.',
        time: 60,
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
            option: _.find(files, file => file.filename === 'Aula07_Postura_at4a.png').fileUrl,
            letter: 'A'
        }, {
            option: _.find(files, file => file.filename === 'Aula07_Postura_at4b.png').fileUrl,
            letter: 'B'
        }],
        correctAnswer: 'B'
    }, {
        title: 'Quiz imagem + text',
        text: 'Um cliente entra na loja querendo trocar um carregador de celular que não funciona. Você...',
        image: _.find(files, file => file.filename === 'Teste_CG_nivel3_01.png').fileUrl,
        time: 60,
        number: 2,
        alternativesType: 'text',
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
            option: '...passa o cliente para um outro vendedor.',
            letter: 'A'
        }, {
            option: '...ouve o cliente com atenção, entende o problema, pede desculpas e diz que vai trocar na hora.',
            letter: 'B'
        }],
        correctAnswer: 'B'
    }, {
        title: 'Quiz certo e errado',
        text: 'Você foi comprar um celular e pegou um vendedor qu sabe tudo e tirou todas as suas dúvidas.',
        image: _.find(files, file => file.filename === 'Aula08_Cumpri_at3a.png').fileUrl,
        time: 60,
        number: 3,
        alternativesType: 'boolean',
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
            option: true,
            letter: 'A'
        }, {
            option: false,
            letter: 'B'
        }],
        correctAnswer: 'A'
    }]
});
