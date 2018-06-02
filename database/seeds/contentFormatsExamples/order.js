'use strict';

const _ = require('lodash');

module.exports = (files) => ({
    questions: [{
        title: 'Ordene - 5',
        text: 'Você foi comprar um celular e pegou um vendedor que sabe tudo e tirou todas as suas dúvidas.',
        time: 120,
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
        options: [{
            image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at3c.png').fileUrl,
            order: 1
        }, {
            image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at3a.png').fileUrl,
            order: 2
        }, {
            image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at3b.png').fileUrl,
            order: 3
        }, {
            image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at3e.png').fileUrl,
            order: 4
        }, {
            image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at3d.png').fileUrl,
            order: 5
        }]
    }]

});
