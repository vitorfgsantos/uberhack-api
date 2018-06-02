'use strict';
// Entrege So Descomentar
const Way = require('../../../src/models/wayModel').Way;
const _ = require('lodash');

module.exports = (hollandAreas, lessons, tests, files) => (
    [
        new Way({
            name: "SERVIÇO SOCIAL",
            hollandArea: _.find(hollandAreas, hollandArea => (hollandArea.title === 'Serviço Social'))._id,
            levels: [{
                level: 0,
                steps: [{
                    name: 'Aprenda a se comunicar',
                    icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                    lesson: _.find(lessons, lesson => (lesson.name === 'Aprenda a se comunicar'))._id,
                    locked: false
                }, {
                  name: 'Português - Nível 1',
                  icon: _.find(files, file => file.filename === 'icon-way-tests.png').fileUrl,
                  test: _.find(tests, test => (test.name === 'Português - Nível 1'))._id,
                  locked: false

                }],
            }, {
                level: 1,
                steps: [{
                    name: 'Conhecimentos - Nível 1',
                    icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                    test: _.find(tests, test => (test.name === 'Conhecimentos - Nível 1'))._id,
                },{
                    name: 'Networking',
                    icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                    lesson: _.find(lessons, lesson => (lesson.name === 'Networking'))._id,
                }],
            }, {
                level: 2,
                steps: [{
                    name: 'Currículo',
                    icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                    lesson: _.find(lessons, lesson => (lesson.name === 'Currículo'))._id,
                }, {
                    name: 'Lógica - Nível 1',
                    icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                    test: _.find(tests, test => (test.name === 'Lógica - Nível 1'))._id,
                }],
            },{
                level: 3,
                steps: [{
                    name: 'Competências - 1',
                    icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                    test: _.find(tests, test => (test.name === 'Competências - 1'))._id,
                }],
            },{
              level: 4,
              steps: [{
                  name: 'Português - Nível 2',
                  icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                  test: _.find(tests, test => (test.name === 'Português - Nível 2'))._id,
                },
                { //Colocar
                  name: 'Processo Seletivo',
                  icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                  lesson: _.find(lessons, lesson => (lesson.name === 'Etapas do Processo e Dinâmica de Grupo'))._id,
                },
                {
                     name: 'Atendimento ao cliente',
                    icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                    lesson: _.find(lessons, lesson => (lesson.name === 'Atendimento ao cliente'))._id,

              }],

            },{
              level: 5,
              steps: [{
                name: 'Conhecimentos - Nível 2',
                icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                test: _.find(tests, test => (test.name === 'Conhecimentos - Nível 2'))._id,

              },
              { // Colocar
              name: 'Atendimento 2',
              icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
              lesson: _.find(lessons, lesson => (lesson.name === 'Atendimento 2'))._id,
              }
            ],

            },{
              level: 6,
              steps: [{
                name: 'Entrevista',
                icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                lesson: _.find(lessons, lesson => (lesson.name === 'Entrevista'))._id,
              },{
                name: 'Lógica - Nível 2',
                icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                test: _.find(tests, test => (test.name === 'Lógica - Nível 2'))._id,
              }]

            },
            {
              level: 7,
              steps: [
                { //Colocar
                name: 'Simulação de Entrevista',
                icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                lesson: _.find(lessons, lesson => (lesson.name === 'Simulação de Entrevista'))._id,
              },
              {
                name: 'Postura Profissional',
                icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                lesson: _.find(lessons, lesson => (lesson.name === 'Postura Profissional'))._id,

              }],


            },
            {
              level: 8,
              steps: [{
                name: 'Cumprimentos',
                icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                lesson: _.find(lessons, lesson => (lesson.name === 'Cumprimentos'))._id,
              },{
                name: 'Competências - 2',
                icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                test: _.find(tests, test => (test.name === 'Competências - 2'))._id,

              }],

            },{
              level: 9,
              steps: [{
                name: 'Valores',
                icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                lesson: _.find(lessons, lesson => (lesson.name === 'Valores'))._id,
              },{
                name: 'Português - Nível 3',
                icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                test: _.find(tests, test => (test.name === 'Português - Nível 3'))._id,

              }],

            },{
              level: 10,
              steps: [{
                name: 'Crenças',
                icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                lesson: _.find(lessons, lesson => (lesson.name === 'Crenças'))._id,
              },{
                name: 'Conhecimentos - Nível 3',
                icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                test: _.find(tests, test => (test.name === 'Conhecimentos - Nível 3'))._id,

              }],

            },
            {
              level: 11,
              steps: [{
                name: 'Rotinas Administrativas',
                icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                lesson: _.find(lessons, lesson => (lesson.name === 'Rotinas Administrativas 1'))._id,
              }],

            },
            {
              level: 12,
              steps: [{
                name: 'Lógica - Nível 3',
                icon: _.find(files, file => file.filename === 'icon-way-client.png').fileUrl,
                test: _.find(tests, test => (test.name === 'Lógica - Nível 3'))._id,
              }],

            }]
        })
    ]
);
