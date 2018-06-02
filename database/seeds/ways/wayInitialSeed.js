'use strict';

const Way = require('../../../src/models/wayModel').Way;
const _ = require('lodash');

module.exports = (lessons, tests, files) => (
    [
        new Way({
            name: 'Inicial',
            levels: [{
                level: 0,
                steps: [{
                    name: 'Personalidade - 1',
                    icon: _.find(files, file => file.filename === 'icon-way-tests.png').fileUrl,
                    test: _.find(tests, test => (test.name === 'Personalidade - 1'))._id,
                    locked: false
                }],
            }, {
                level: 1,
                steps: [{
                    name: 'Simulação de Entrevista',
                    icon: _.find(files, file => file.filename === 'icon-way-lessons.png').fileUrl,
                    lesson: _.find(lessons, lesson => (lesson.name === 'Simulação de Entrevista'))._id,
                    locked: false

                }, {
                    name: 'Historia de vida',
                    icon: _.find(files, file => file.filename === 'icon-way-lessons.png').fileUrl,
                    lesson: _.find(lessons, lesson => (lesson.name === 'Historia de vida'))._id,
                    locked: false

                }]
            }, {
                level: 2,
                steps: [{
                        name: 'Personalidade - 2',
                        icon: _.find(files, file => file.filename === 'icon-way-tests.png').fileUrl,
                        test: _.find(tests, test => (test.name === 'Personalidade - 2'))._id,
                        locked: false

                    }, {
                        name: 'Interesses',
                        icon: _.find(files, file => file.filename === 'icon-way-lessons.png').fileUrl,
                        lesson: _.find(lessons, lesson => (lesson.name === 'Interesses'))._id,
                        locked: false

                    }
                    // name: 'Teste de Competências',
                    // icon: _.find(files, file => file.filename === 'icon-way-tests.png').fileUrl,
                    // test: _.find(tests, test => (test.name === 'Teste de Competências'))._id,
                    // name: 'Historia de vida',
                    // icon: _.find(files, file => file.filename === 'icon-way-lessons.png').fileUrl,
                    // lesson: _.find(lessons, lesson => (lesson.name === 'Historia de vida'))._id,

                    // name: 'Gameficação',
                    // name: 'História de Vida',
                    // icon: _.find(files, file => file.filename === 'icon-way-lessons.png').fileUrl,
                    // lesson: _.find(lessons, lesson => (lesson.name === 'Gameficação'))._id,
                    // lesson: _.find(lessons, lesson => (lesson.name === 'História de Vida'))._id

                ]
            }, {
                level: 3,
                steps: [{
                    name: 'Objetivos Profissionais',
                    icon: _.find(files, file => file.filename === 'icon-way-professional-objetives.png').fileUrl,
                    exceptional: {
                        name: 'Objetivos Profissionais',
                        rule: 'professionalGoals'
                    }
                }]
            }]
        }),
    ]
);
