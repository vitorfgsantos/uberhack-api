'use strict';

const _ = require('lodash');

module.exports = (files) => ({
    questions: [{
        title: 'Teste de Escala - 3 Opções',
        text: 'Você é o vendedor de uma loja de eletrônicos e vai ter que se virar para não perder o cliente! Valendo!',
        time: 120,
        image: _.find(files, file => file.filename === 'personalidade_N1_Q25.png').fileUrl,
        values: {
            right: {
                value: 'rigth',
                feedback: {
                    title: 'Muito bem!',
                    text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                    type: 'positive'
                }
            },
            left: {
                value: 'left',
                feedback: {
                    title: 'Ooops!',
                    text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                    type: 'negative'
                }
            },
            center: {
                value: 'center',
                feedbacks: {
                    title: 'Quase lá!',
                    text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                    type: 'intermediate'
                }
            }
        },
        correctAnswer: 'right'
    }, {
        title: 'Teste de Escala - 2 Opções',
        text: 'Você é o vendedor de uma loja de eletrônicos e vai ter que se virar para não perder o cliente! Valendo!',
        time: 120,
        image: _.find(files, file => file.filename === 'personalidade_N1_Q25.png').fileUrl,
        values: {
            right: {
                value: 'rigth',
                feedback: {
                    title: 'Muito bem!',
                    text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                    type: 'positive'
                }
            },
            left: {
                value: 'left',
                feedback: {
                    title: 'Ooops!',
                    text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                    type: 'negative'
                }
            }
        },
        correctAnswer: 'right'
    }]
});
