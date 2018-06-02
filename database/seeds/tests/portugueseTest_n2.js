'use strict';

const _ = require('lodash');
const Test = require('../../../src/models/testModel').Test;

module.exports = (files, tests, achievements, categories, studyCategories) => (
    [
        new Test({
            name: 'Português - Nível 2',
            description: 'Que legal! Você chegou ao nível 2! Agora é manter o foco e mostrar que você está afiado no português. Bora responder mais um bloco de perguntas?',
            categories: [
                _.find(categories, category => category.name === 'Habilidades')._id,
                _.find(categories, category => category.name === 'Conhecimentos')._id
            ],
            estimatedTime: 5,
            type: 'portuguese',
            repeatable: false,
            level: 2,
            image: _.find(files, file => file.filename === 'capas_port-02.png').fileUrl,
            preRequirements: [
                _.find(tests, test => test.name === 'Português - Nível 1')._id
            ],
            score: undefined,
            activities: [{
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Ortografia')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {
                    //q1
                    questions: [{
                        text: 'Escolha a palavra que completa a frase: Acredito que essa regra é uma…',
                        time: undefined,
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'portugues_N2_Q1_1.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N2_Q1_2.png').fileUrl,
                            letter: 'B'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N2_Q1_3.png').fileUrl,
                            letter: 'C'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N2_Q1_4.png').fileUrl,
                            letter: 'D'
                        }],
                        correctAnswer: 'B'
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Semântica')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Qual é o significado da palavra "supérfluo"?',
                        time: undefined,
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'portugues_N2_Q2_1.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N2_Q2_2.png').fileUrl,
                            letter: 'B'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N2_Q2_3.png').fileUrl,
                            letter: 'C'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N2_Q2_4.png').fileUrl,
                            letter: 'D'
                        }],
                        correctAnswer: 'B'
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Mau ou mal?')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Escolha as palavras certas para completar a frase: Ele está trabalhando ______ pois está sempre de ____ humor.',
                        time: undefined,
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'portugues_N2_Q3_1.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N2_Q3_2.png').fileUrl,
                            letter: 'B'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N2_Q3_3.png').fileUrl,
                            letter: 'C'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N2_Q3_4.png').fileUrl,
                            letter: 'D'
                        }],
                        correctAnswer: 'A'
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Ortografia')._id,
                ],
                contentFormat: 'add',
                content: {
                    questions: [{
                        text: 'Coloque nas plaquinhas da cesta a alternativa correta.',
                        background: _.find(files, file => file.filename === 'Nivel-2_POR_Q4.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Nivel-2_POR_Q4a.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-2_POR_Q4_AI_a.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Nivel-2_POR_Q4b.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-2_POR_Q4_AI_b.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Nivel-2_POR_Q4c.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-2_POR_Q4_AI_c.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 4,
                            category: 'A',
                            image: _.find(files, file => file.filename === 'Nivel-2_POR_Q4d.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-2_POR_Q4_AI_d.png').fileUrl,
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }],
                        correctLayers: [1]
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Jogo de palavras')._id,
                ],
                contentFormat: 'relate',
                content: {
                    questions: [{
                        text: 'Qual palavra está escondida nas letras bagunçadas? Relacione e descubra!',
                        drops: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'portugues_N2_Q5_1.png').fileUrl,
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'portugues_N2_Q5_2.png').fileUrl,
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'portugues_N2_Q5_3.png').fileUrl,
                        }, {
                            number: 4,
                            image: _.find(files, file => file.filename === 'portugues_N2_Q5_4.png').fileUrl,
                        }],
                        drags: [{
                            text: 'HARO',
                            relatedTo: 1
                        }, {
                            text: 'ARIO',
                            relatedTo: 2
                        }, {
                            text: 'UBORO',
                            relatedTo: 3
                        }, {
                            text: 'ZAMIEDA',
                            relatedTo: 4
                        }]
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Interpretação de texto')._id,
                ],
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'A mulher da direita quis dizer que as notícias do jornal são:',
                        image: _.find(files, file => file.filename === 'Nivel-2_POR_Q6.png').fileUrl,
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'assustadoras',
                            letter: 'A'
                        }, {
                            option: 'naturais',
                            letter: 'B'
                        }],
                        correctAnswer: 'A'
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Interpretação de texto')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: '<p>Leia a frase e indique o sentido da interrogação no final da sentença.</p><p>No verão as baratas se proliferam, mas se você acha que pode vencê-las, saiba que elas estão na Terra há mais de 200 milhões de anos, sobrevivem no deserto, nos polos e ficam até 30 dias sem comer. E aí, vai encarar?</p> ',
                        time: undefined,
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'portugues_N2_Q7_1.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N2_Q7_2.png').fileUrl,
                            letter: 'B'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N2_Q7_3.png').fileUrl,
                            letter: 'C'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N2_Q7_4.png').fileUrl,
                            letter: 'D'
                        }],
                        correctAnswer: 'C'
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'A ou Há?')._id,
                ],
                contentFormat: 'add',
                content: {
                    questions: [{
                        text: 'Coloque na plaquinha da barraca a alternativa correta.',
                        background: _.find(files, file => file.filename === 'Nivel-2_POR_Q8.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Nivel-2_POR_Q8a.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-2_POR_Q8_AI_a.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Nivel-2_POR_Q8b.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-2_POR_Q8_AI_b.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Nivel-2_POR_Q8c.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-2_POR_Q8_AI_c.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 4,
                            category: 'A',
                            image: _.find(files, file => file.filename === 'Nivel-2_POR_Q8d.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-2_POR_Q8_AI_d.png').fileUrl,
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }],
                        correctLayers: [3]
                    }]
                }
            }]
        })
    ]
);
