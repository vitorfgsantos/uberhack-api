'use strict';

const _ = require('lodash');
const Test = require('../../../src/models/testModel').Test;

module.exports = (files, tests, achievements, categories, studyCategories) => (
    [
        new Test({
            name: 'Conhecimentos - Nível 1',
            description: 'Saber o que acontece no Brasil e no mundo e estar atualizado sobre temas importantes do nosso dia a dia, te ajudam a ir mais longe! Vamos ver como você se sai nesse teste de Conhecimentos Gerais? Mostre tudo o que você sabe, hein? ',
            categories: [
                _.find(categories, category => category.name === 'Habilidades')._id,
                _.find(categories, category => category.name === 'Conhecimentos')._id
            ],
            estimatedTime: 5,
            type: 'generalKnowledge',
            repeatable: false,
            level: 1,
            image: _.find(files, file => file.filename === 'capas_conhecimentos-01.png').fileUrl,
            score: undefined,
            activities: [{
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Atualidades')._id,
                    ],
                    contentFormat: 'add',
                    content: {
                        questions: [{
                            text: 'Arraste para a claquete o filme brasileiro recorde de público em 2016, com mais de 11 milhões de espectadores.',
                            background: _.find(files, file => file.filename === 'Nivel-1_CG_Q1.png').fileUrl,
                            baseResolution: {
                                width: 1080,
                                height: 860
                            },
                            layers: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Nivel-1_CG_Q1a.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel1_CG_Q1_AI_a.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Nivel-1_CG_Q1b.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel1_CG_Q1_AI_b.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Nivel-1_CG_Q1c.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel1_CG_Q1_AI_c.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 4,
                                category: 'A',
                                image: _.find(files, file => file.filename === 'Nivel-1_CG_Q1d.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel_1_CG_Q1_AI_d2.png').fileUrl,
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }],
                            correctLayers: [3]
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Informática')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            text: 'O símbolo do e-mail é conhecido como…',
                            alternativesType: 'image',
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'CG_N1_Q2_1.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N1_Q2_2.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N1_Q2_3.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N1_Q2_4.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'D'
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Meio Ambiente')._id,
                    ],
                    contentFormat: 'add',
                    content: {
                        questions: [{
                            text: 'Adicione na lixeira o que tem a ver com reciclagem.',
                            background: _.find(files, file => file.filename === 'Teste_CG_nivel1_Q3a.png').fileUrl,
                            baseResolution: {
                                width: 1080,
                                height: 860
                            },
                            layers: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Teste_CG_nivel1_q3b.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Teste_CG_nivel1_q3f.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 431,
                                    y: 344
                                }
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Teste_CG_nivel1_q3c.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Teste_CG_nivel1_q3g.png').fileUrl,
                                category: 'B',
                                tickPosition: {
                                    x: 549,
                                    y: 635
                                }
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Teste_CG_nivel1_q3d.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Teste_CG_nivel1_q3h.png').fileUrl,
                                category: 'C',
                                tickPosition: {
                                    x: 459,
                                    y: 709
                                }
                            }, {
                                number: 4,
                                category: 'D',
                                image: _.find(files, file => file.filename === 'Teste_CG_nivel1_q3e.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Teste_CG_nivel1_q3i.png').fileUrl,
                                tickPosition: {
                                    x: 604,
                                    y: 348
                                }
                            }],
                            correctLayers: [2, 4]
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Meio Ambiente')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{

                            text: 'Qual a a usina que é a maior fonte geradora de energia elétrica no Brasil?',
                            alternativesType: 'image',
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Nivel1_CG_Q4a.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Nivel1_CG_Q4b.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Nivel1_CG_Q4c.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Nivel1_CG_Q4d.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'C'
                        }]
                    }

                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Economia')._id,
                    ],
                    contentFormat: 'errors',
                    content: {
                        questions: [{
                            text: 'Clique sobre a definição de PIB:',
                            clicks: 1,
                            baseResolution: {
                                width: 1080,
                                height: 1140
                            },
                            background: _.find(files, file => file.filename === 'Nivel1_CG_Q5.png').fileUrl,
                            mappings: [{
                                coordinates: '360,320,456,212,499,72,431,16,332,8,243,65,226,143,249,211',
                                shape: 'poly',
                                tickPosition: {
                                    x: 342,
                                    y: 115
                                },
                            }]
                        }]
                    }

                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Geopolítica')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{

                            text: 'Sobre as Organizações Terroristas, não podemos afirmar que....',
                            alternativesType: 'image',
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Teste_CG_nivel1_Q6A.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Teste_CG_nivel1_Q6B.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Teste_CG_nivel1_Q6C.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Teste_CG_nivel1_Q6D.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'A'
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Economia')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{

                            text: 'O valor do salário mínimo no Brasil é...',
                            alternativesType: 'image',
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'CG_N1_Q7_1.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N1_Q7_2.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N1_Q7_3.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N1_Q7_4.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'B'
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Empresa')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{

                            text: 'Quem é a fonte de sobrevivência para qualquer empresa? ',
                            alternativesType: 'image',
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'CG_N1_Q8_1.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N1_Q8_2.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N1_Q8_3.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N1_Q8_4.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'C'
                        }]
                    }
                }] //final do action
        })
    ]
);
