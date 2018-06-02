'use strict';

const _ = require('lodash');

module.exports = (files) => ({
    title: 'Sua imagem é seu cartão de visitas',
    text: 'Você foi comprar um celular e pegou um vendedor que sabe tudo e tirou todas as suas dúvidas.',
    video: {
        fileUrl: 'files/stream?type=videos&filename=' + '5_-_CRENCAS_online.mp4',
        type: 'video/mp4'
    },
    // subtitles: {
    //     fileUrl: _.find(files, file => file.filename === 'google-developer-stories-subtitles-en.vtt').fileUrl,
    //     label: 'English'
    // }
});
