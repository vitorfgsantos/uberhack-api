'use strict';

const _ = require('lodash');

module.exports = (files) => ({
    questions: [{
        title: 'Sua imagem é seu cartão de Visitas',
        text: '<b>Você</b> é o vendedor de uma loja de eletrônicos e vai ter que se virar para não perder o cliente! Valendo!',
        image: _.find(files, file => file.filename === 'Aula14_simulac_Entrev_at2.png').fileUrl,
        audio: {
            fileUrl: 'files/stream?type=audios&filename=' + 'Simulacao-entrevista-napontadalingua_audio4.mp3',
            type: 'audio/mpeg'
        },
        // subtitles: {
        //     fileUrl: _.find(files, file => file.filename === 'google-developer-stories-subtitles-en.vtt').fileUrl,
        //     label: 'English'
        // },
        feedback: {
            title: 'Que boa notícia!',
            text:
                `<p>Mas dinâmica de grupo? Caraca, isso dá frio na barriga de muita gente. </p>
                <p>Mas calma, não precisa. É só uma atividade junto com outros candidatos para ver como cada um se sai em algumas situações. Siga a aula que vamos te dar boas dicas!</p>`
        }
    }, {
        title: 'Sua imagem é seu cartão de Visitas',
        text: '<b>Você</b> é o vendedor de uma loja de eletrônicos e vai ter que se virar para não perder o cliente! Valendo!',
        image: _.find(files, file => file.filename === 'Aula14_simulac_Entrev_at2.png').fileUrl,
        audio: {
            fileUrl: _.find(files, file => file.filename === 'alert.mp3').fileUrl,
            type: 'audio/mpeg'
        },
        subtitles: {
            fileUrl: _.find(files, file => file.filename === 'google-developer-stories-subtitles-en.vtt').fileUrl,
            label: 'English'
        },
        feedback: {
            title: 'Que boa notícia!',
            text:
                `<p>Mas dinâmica de grupo? Caraca, isso dá frio na barriga de muita gente. </p>
                <p>Mas calma, não precisa. É só uma atividade junto com outros candidatos para ver como cada um se sai em algumas situações. Siga a aula que vamos te dar boas dicas!</p>`
        }
    }]
});
