'use strict';

const _ = require('lodash');

module.exports = (files) => (
    {
        questions: [{
            title: 'Quiz múltipla 2',
            text: 'Um cliente entra na loja querendo trocar um carregador de celular que não funciona. Você...',
            time: 60,
            number: 1,
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
            title: 'Quiz múltipla 3',
            text: 'Um cliente entra na loja querendo trocar um carregador de celular que não funciona. Você...',
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
            }, {
                option: '...ouve o cliente com atenção, entende o problema, pede desculpas e diz que vai trocar na hora.',
                letter: 'C'
            }],
            correctAnswer: 'B'
        }, {
            title: 'Quiz múltipla 3',
            text: 'Um cliente entra na loja querendo trocar um carregador de celular que não funciona. Você...',
            time: 60,
            number: 3,
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
            }, {
                option: '...ouve o cliente com atenção, entende o problema, pede desculpas e diz que vai trocar na hora.',
                feedback: 'Não, você errou! Esquisito é outra coisa.',
                letter: 'C'
            }, {
                option: '...ouve o cliente com atenção, entende o problema, pede desculpas e diz que vai trocar na hora.',
                letter: 'D'
            }],
            correctAnswer: 'A'
        }, {
            title: 'Quiz Múltipla Ilustra',
            text: 'Você foi comprar um celular e pegou um vendedor que sabe tudo e tirou todas as suas dúvidas.',
            time: 60,
            number: 3,
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
                option: _.find(files, file => file.filename === 'Multipla4_texto01.png').fileUrl,
                letter: 'A'
            }, {
                option: _.find(files, file => file.filename === 'Multipla4_texto02.png').fileUrl,
                letter: 'B'
            }, {
                option: _.find(files, file => file.filename === 'Multipla4_texto03.png').fileUrl,
                letter: 'C'
            }, {
                option: _.find(files, file => file.filename === 'Multipla4_texto04.png').fileUrl,
                letter: 'D'
            }],
            correctAnswer: 'A'
        }, {
            title: 'Quiz Múltipla Ilustra',
            text: 'Você foi comprar um celular e pegou um vendedor que sabe tudo e tirou todas as suas dúvidas.',
            time: 60,
            number: 3,
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
                option: _.find(files, file => file.filename === 'Teste_CG_nivel1_q5a.png').fileUrl,
                letter: 'A'
            }, {
                option: _.find(files, file => file.filename === 'Teste_CG_nivel1_q5b.png').fileUrl,
                letter: 'B'
            }, {
                option: _.find(files, file => file.filename === 'Teste_CG_nivel1_q5c.png').fileUrl,
                letter: 'C'
            }, {
                option: _.find(files, file => file.filename === 'Teste_CG_nivel1_q5d.png').fileUrl,
                letter: 'D'
            }],
            correctAnswer: 'A'
        }]
    }
);
