'use strict';

const _ = require('lodash');
const Test = require('../../../src/models/testModel').Test;

module.exports = (files, tests, achievements, categories, studyCategories) => (
    [
        new Test({
            name: 'Português - Nível 3',
            description: 'Uhuuuu! Você passou para o último nível e mostrou que é fera em português! Está preparado para encarar a reta final? Vamos lá, você consegue!',
            categories: [
                _.find(categories, category => category.name === 'Habilidades')._id,
                _.find(categories, category => category.name === 'Conhecimentos')._id
            ],
            estimatedTime: 5,
            type: 'portuguese',
            repeatable: false,
            level: 3,
            image: _.find(files, file => file.filename === 'capas_port-03.png').fileUrl,
            achievement: _.find(achievements, achievement => achievement.rule === 'portugueseTestCompleted')._id,
            preRequirements: [
                _.find(tests, test => test.name === 'Português - Nível 1')._id,
                _.find(tests, test => test.name === 'Português - Nível 2')._id,
            ],
            score: undefined,
            activities: [{
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Semântica')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {
                    //q1
                    questions: [{
                        text: '"Anos a fio...” O que significa esta expressão?',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Há muitos anos.',
                            letter: 'A'
                        }, {
                            option: 'Há anos atrás.',
                            letter: 'B'
                        }, {
                            option: 'Uma sequência de anos.',
                            letter: 'C'
                        }, {
                            option: 'Nos últimos anos. ',
                            letter: 'D'
                        }],
                        correctAnswer: 'C'
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Concordância verbal')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {

                    questions: [{
                        text: 'Qual dessas frases tem erro de concordância verbal?',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Houveram muitos turistas atravessando a ponte.',
                            letter: 'A'
                        }, {
                            option: 'Faz vinte minutos que esse carro espera para ser liberado. ',
                            letter: 'B'
                        }, {
                            option: 'Deve haver poucas declarações para serem examinadas.',
                            letter: 'C'
                        }, {
                            option: 'São oito horas de trabalho.',
                            letter: 'D'
                        }],
                        correctAnswer: 'A'
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Jogo de palavras')._id,
                ],
                contentFormat: 'errors',
                content: {
                    questions: [{
                        text: 'Não seja enforcado! Clique na opção correta para completar as palavras do jogo.',
                        clicks: 1,
                        baseResolution: {
                            width: 1080,
                            height: 1140
                        },
                        background: _.find(files, file => file.filename === 'Nivel-3_POR_Q3.png').fileUrl,
                        mappings: [{
                            coordinates: '188,622,149,675,199,721,910,735,917,623',
                            shape: 'poly',
                            tickPosition: {
                                x: 217,
                                y: 628
                            },

                        }]
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Ortografia')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {

                    questions: [{
                        text: 'Qual dessas frases é a certa?  "A ___ de uma guerra nuclear provoca uma grande ___ na humanidade e a deixa ___ quanto ao futuro.“ ',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'espectativa - tensão - exitante ',
                            letter: 'A'
                        }, {
                            option: 'espectativa - tenção - hesitante ',
                            letter: 'B'
                        }, {
                            option: 'expectativa - tensão - hesitante ',
                            letter: 'C'
                        }, {
                            option: 'expectativa - tensão - esitante',
                            letter: 'D'
                        }],
                        correctAnswer: 'C'
                    }]
                }

            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Ortografia')._id,
                ],
                contentFormat: 'add',
                content: {
                    questions: [{
                        text: 'Hora da notícia! Arraste as palavras corretas para o balão.',
                        background: _.find(files, file => file.filename === 'Nivel-3_POR_Q5.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Nivel-3_POR_Q5a.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-3_POR_Q5_AI_a.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Nivel-3_POR_Q5b.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-3_POR_Q5_AI_b.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Nivel-3_POR_Q5c.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-3_POR_Q5_AI_c.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 4,
                            category: 'A',
                            image: _.find(files, file => file.filename === 'Nivel-3_POR_Q5d.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-3_POR_Q5_AI_d.png').fileUrl,
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }],
                        correctLayers: [2]
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Concordância verbal')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        title: 'Quiz múltipla 2',
                        text: 'Complete: ___ insultos entre os torcedores, depois do jogo.',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Chovia',
                            letter: 'A'
                        }, {
                            option: 'Choviam',
                            letter: 'B'
                        }],
                        correctAnswer: 'B'

                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'O moral ou a moral?')._id,
                ],
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Qual o significado de "moral" no pensamento abaixo?',
                        time: undefined,
                        image: _.find(files, file => file.filename === 'Nivel-3_POR_Q7.png').fileUrl,
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Ânimo',
                            letter: 'A'
                        }, {
                            option: 'Honestidade',
                            letter: 'B'
                        }],
                        correctAnswer: 'B'
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Interpretação de texto')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {

                    questions: [{
                        text: 'O pavão é um arco-íris, cheio de cores, mas não tem pigmentos nas penas. Na verdade, são bolhas d’água onde a luz se fragmenta. Para o artista que vai desenhá-lo, o ideal é atingir o máximo de matizes com poucos elementos. “Atingir o máximo de matizes” significa o artista…',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'fazer refletir, nas penas do pavão, as cores do arco-íris.',
                            letter: 'A'
                        }, {
                            option: 'conseguir o maior número de tonalidades.',
                            letter: 'B'
                        }, {
                            option: 'fazer com que o pavão ostente suas cores.',
                            letter: 'C'
                        }, {
                            option: 'fragmentar a luz nas bolhas d’água. ',
                            letter: 'D'
                        }],
                        correctAnswer: 'B'
                    }]
                }
            }]
        })
    ]
);
