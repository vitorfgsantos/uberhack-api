'use strict';

const Score = require('../../src/models/scoreModel').Score;
const _ = require('lodash');

module.exports = (lessons, tests) => (
    [
        new Score({
            points: 2500,
            type: 'education',
            message: 'pontos por atualizar histórico de ensino'
        }),
        new Score({
            points: 2500,
            type: 'volunteering',
            message: 'pontos por atualizar histórico de voluntariado'
        }),
        new Score({
            points: 1000,
            type: 'exportCurriculum',
            message: 'pontos por exportar arquivo com sucesso'
        }),
        new Score({
            points: 5000,
            type: 'professionalGoals',
            message: 'pontos por atualizar objetivos profissionais ',
        }),
        new Score({
            points: 3000,
            type: 'applyForJob',
            message: 'pontos por submeter candidatura com sucesso'
        }),
        new Score({
            points: 5000,
            type: 'invitedForJob',
            message: 'pontos por receber convite para processo seletivo '
        }),
        new Score({
            points: 10000,
            type: 'hired',
            message: 'pontos por ter sido selecionado para uma vaga'
        }),
        new Score({
            points: 1000,
            type: 'processForward',
            message: 'pontos por avançar de fase em processo seletivo'
        }),
        new Score({
            points: 300,
            type: 'share',
            message: 'pontos por compartilhar nova informação'
        }),
        new Score({
            points: 1000,
            type: 'evaluated',
            message: ''
        }),
        new Score({
            points: 300,
            type: 'randomQuestion',
            message: 'pontos por enviar sua resposta com sucesso '
        }),
        new Score({
            points: 100,
            type: 'dailyBonus2',
            message: 'Você recebeu um novo bônus por ter visitado o TAQE 2 vezes seguidas.'
        }),
        new Score({
            points: 150,
            type: 'dailyBonus3',
            message: 'Você recebeu um novo bônus por ter visitado o TAQE 3 vezes seguidas. '
        }),
        new Score({
            points: 250,
            type: 'dailyBonus4',
            message: 'Você recebeu um novo bônus por ter visitado o TAQE 4 vezes seguidas. '
        }),
        new Score({
            points: 500,
            type: 'Você recebeu um novo bônus por ter visitado o TAQE 5 vezes seguidas. ',
            message: ''
        }),
        new Score({
            points: 500,
            type: 'importFriends',
            message: 'pontos por importar contatos '
        }),
        new Score({
            points: 300,
            type: 'inviteFriends',
            message: ''
        }),
        new Score({
            points: 300,
            type: 'comment1',
            message: 'pontos por publicar comentário'
        }),
        new Score({
            points: 150,
            type: 'comment2',
            message: 'pontos por publicar comentário'
        }),
        new Score({
            points: 75,
            type: 'comment3',
            message: 'pontos por publicar comentário'
        }),
        new Score({
            points: 40,
            type: 'comment4',
            message: 'pontos por publicar comentário'
        }),
        new Score({
            points: 20,
            type: 'comment5',
            message: 'pontos por publicar comentário'
        }),
        new Score({
            points: 10,
            type: 'comment6',
            message: 'pontos por publicar comentário'
        }),
        new Score({
            points: 1000,
            type: 'achievements',
            message: 'pontos por adquirir nova conquista'
        }),
    ]
);
