'use strict';

const _ = require('lodash');

module.exports = (files) => ({
    slides: [{
        image: _.find(files, file => file.filename === 'slide1.png').fileUrl,
        title: 'Não deixe de ser você',
        text: '<p>Ter boa aparência não se trata de ser bonito ou feio, ou de usar roupas e acessórios caros, de grife ou que estão na moda, mas sim cuidar de você. </p><p>Se você consegue cuidar de você, você é capaz de cuidar do outro e das coisas relacionadas ao trabalho.</p>'
    }, {
        image: _.find(files, file => file.filename === 'slide2.png').fileUrl,
        title: 'Não deixe de ser você',
        text: 'Ter um visual saudável e natural te deixa mais seguro no dia a dia e também transmite aquela dose de confiança, responsabilidade e capacidade de lidar bem com suas atividades.'
    }, {
        image: _.find(files, file => file.filename === 'slide3.png').fileUrl,
        title: 'Não deixe de ser você',
        text: '<p>Você não precisa perder seu estilo e a forma de ser vestir e se sentir bem.</p><p>Com bom senso você se ajusta ao ambiente sem deixar sua personalidade de fora. Afinal, mostrar quem você é de verdade também conta ponto! ;)</p>'
    }]
});
