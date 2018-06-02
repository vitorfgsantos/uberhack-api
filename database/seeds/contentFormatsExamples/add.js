'use strict';

const _ = require('lodash');

module.exports = (files) => ({
    questions: [{
        title: 'Dando um oi por aí',
        text: 'Seu dia começa em casa e você passa por muitos lugares até a noite. Será que você cumprimenta todo mundo certinho? Quer testar? Clique nos lugares e descubra!',
        time: 60,
        background: _.find(files, file => file.filename === 'Aula05_Aparencia_at4.1_a.png').fileUrl,
        baseResolution: {
            width: 1080,
            height: 860
        },
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Quase lá!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'intermediate'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        layers: [{
            number: 1,
            image: _.find(files, file => file.filename === 'Aula05_Aparencia_at4.1_c.png').fileUrl,
            icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at4.2_a.png').fileUrl,
            category: 'A',
            tickPosition: {
                x: 347,
                y: 496
            }
        }, {
            number: 2,
            image: _.find(files, file => file.filename === 'Aula05_Aparencia_at4.1_d.png').fileUrl,
            icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at4.2_b.png').fileUrl,
            category: 'B',
            tickPosition: {
                x: 775,
                y: 559
            }
        }, {
            number: 3,
            image: _.find(files, file => file.filename === 'Aula05_Aparencia_at4.1_e.png').fileUrl,
            icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at4.2_d.png').fileUrl,
            category: 'A',
            tickPosition: {
                x: 347,
                y: 496
            }
        }, {
            number: 4,
            category: 'B',
            image: _.find(files, file => file.filename === 'Aula05_Aparencia_at4.1_b.png').fileUrl,
            icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at4.2_c.png').fileUrl,
            tickPosition: {
                x: 775,
                y: 559
            }
        }],
        correctLayers: [1, 4]
    }]
});
