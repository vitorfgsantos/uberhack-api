'use strict';

const _ = require('lodash');
const fs = require('fs');

module.exports = () => {
    var images = [];
    fs.readdirSync('./database/files/images/tests/competencias_1').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/competencias_1/${file}`,
            metadata: {},
            type: 'images',
            root: 'tests'
        });
    });

    fs.readdirSync('./database/files/images/tests/competencias_2').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/competencias_2/${file}`,
            metadata: {},
            type: 'images',
            root: 'tests'
        });
    });

    fs.readdirSync('./database/files/images/lessons/covers').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/covers/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/aula20apresentacaoempublico').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/aula20apresentacaoempublico/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/lessons/aulacriatividade23').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/aulacriatividade23/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/aula27lidarcompessoas').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/aula27lidarcompessoas/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/interests').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/interests/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/administrativeRoutines').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/administrativeRoutines/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/lessons/aula19atendimento3').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/aula19atendimento3/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/professionalAttitude').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/professionalAttitude/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/lessons/capasDeAulas').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/capasDeAulas/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/learnToCommunicate').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/learnToCommunicate/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/aula04sonhos').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/aula04sonhos/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/aula16rotinasbancarias').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/aula16rotinasbancarias/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/lessons/aulaapresentacao21').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/aulaapresentacao21/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/AulaAtendimento218').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/AulaAtendimento218/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });



    fs.readdirSync('./database/files/images/lessons/historyLife').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/historyLife/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/lessons/toGreet').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/toGreet/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/lessons/10aulacurriculo').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/10aulacurriculo/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/lessons/groupDynamicsProcessSteps').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/groupDynamicsProcessSteps/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/networking').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/networking/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/lessons/interview').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/interview/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });


    fs.readdirSync('./database/files/images/lessons/appearance').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/appearance/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/lessons/AulaAtendimento17').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/AulaAtendimento17/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/lessons/aulaotimizacao25').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/aulaotimizacao25/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/lessons/29aulaadministracao').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/29aulaadministracao/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/aulalideranca28').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/aulalideranca28/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/aulametodosesolucoes26').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/aulametodosesolucoes26/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/interviewSimulation').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/interviewSimulation/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/AulaCrenca03').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/AulaCrenca03/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/valuesLesson').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/valuesLesson/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/capasdevideo').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/capasdevideo/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/others').forEach(function(file) {
        images.push({
            path: `database/files/images/others/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/icons').forEach(function(file) {
        images.push({
            path: `database/files/images/icons/${file}`,
            metadata: {},
            type: 'images',
            root: 'icons'
        });
    });

    fs.readdirSync('./database/files/images/badges').forEach(function(file) {
        images.push({
            path: `database/files/images/badges/${file}`,
            metadata: {},
            type: 'images',
            root: 'badges'
        });
    });

    fs.readdirSync('./database/files/images/professionalGoals/interestCategories').forEach(function(file) {
        images.push({
            path: `database/files/images/professionalGoals/interestCategories/${file}`,
            metadata: {},
            type: 'images',
            root: 'professionalGoals'
        });
    });

    fs.readdirSync('./database/files/images/professionalGoals/careers').forEach(function(file) {
        images.push({
            path: `database/files/images/professionalGoals/careers/${file}`,
            metadata: {},
            type: 'images',
            root: 'professionalGoals'
        });
    });

    fs.readdirSync('./database/files/images/badges').forEach(function(file) {
        images.push({
            path: `database/files/images/badges/${file}`,
            metadata: {},
            type: 'images',
            root: 'badges'
        });
    });

    fs.readdirSync('./database/files/images/personalities').forEach(function(file) {
        images.push({
            path: `database/files/images/personalities/${file}`,
            metadata: {},
            type: 'images',
            root: 'personalities'
        });
    });

    fs.readdirSync('./database/files/images/tests/portuguese/n1').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/portuguese/n1/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    //caio teste

    fs.readdirSync('./database/files/images/tests/portuguese/n2').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/portuguese/n2/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/tests/capasTest').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/capasTest/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/tests/portuguese/n3').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/portuguese/n3/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/tests/conhecimentotest1').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/conhecimentotest1/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/tests/conhecimentotest2').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/conhecimentotest2/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/tests/conhecimentotest3').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/conhecimentotest3/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/tests/matematicatest1').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/matematicatest1/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/tests/matematicatest2').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/matematicatest2/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });
    fs.readdirSync('./database/files/images/tests/matematicatest3').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/matematicatest3/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/tests/matematicatest3').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/matematicatest3/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });



    fs.readdirSync('./database/files/images/tests/personalityTest_1').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/personalityTest_1/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/tests/personalityTest_2').forEach(function(file) {
        images.push({
            path: `database/files/images/tests/personalityTest_2/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    fs.readdirSync('./database/files/images/lessons/capasDeAulas').forEach(function(file) {
        images.push({
            path: `database/files/images/lessons/capasDeAulas/${file}`,
            metadata: {},
            type: 'images',
            root: 'activities'
        });
    });

    return images;
};
