'use strict';

const _ = require('lodash');
const Test = require('../../../src/models/testModel').Test;

module.exports = (files, tests, achievements, categories, studyCategories) => (
    [
        new Test({
            name: 'Lógica - Nível 2',
            description: 'Legal! Você é bom de cálculos. Que tal continuar testando suas habilidades com números e responder mais um bloco de perguntas? Vamos lá, use seu raciocínio e encare mais esta!',
            categories: [
                _.find(categories, category => category.name === 'Habilidades')._id,
                _.find(categories, category => category.name === 'Conhecimentos')._id
            ],
            estimatedTime: 5,
            type: 'logic',
            repeatable: false,
            level: 2,
            image: _.find(files, file => file.filename === 'capas_mat-02.png').fileUrl,
            preRequirements: [
                _.find(tests, test => test.name === 'Lógica - Nível 1')._id
            ],
            score: undefined,
            activities: [{
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Porcentagem')._id,
                    ],
                    contentFormat: 'add',
                    content: {
                        questions: [{
                            text: 'Você vê numa loja uma camiseta que custa R$ 70, mas comprando na promoção sai 20% mais barata. Arraste pro cofrinho quanto você vai economizar.',
                            background: _.find(files, file => file.filename === 'Nivel-2_MAT_Q1.png').fileUrl,
                            baseResolution: {
                                width: 1080,
                                height: 860
                            },
                            layers: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q1a.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q1_AI_a.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q1b.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q1_AI_b.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q1c.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q1_AI_c.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 4,
                                category: 'A',
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q1d.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q1_AI_d.png').fileUrl,
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
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Raciocínio lógico')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{

                            text: 'Qual inseto não combina com os demais?',
                            alternativesType: 'image',
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Nivel-2_MAT_Q2-a.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Nivel-2_MAT_Q2-b.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Nivel-2_MAT_Q2-c.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Nivel-2_MAT_Q2-d.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'C'
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Raciocínio lógico')._id,
                    ],
                    contentFormat: 'add',
                    content: {
                        questions: [{
                            text: 'Coloque na imagem a figura que completa a sequência',
                            background: _.find(files, file => file.filename === 'Nivel-2_MAT_Q3.png').fileUrl,
                            baseResolution: {
                                width: 1080,
                                height: 860
                            },
                            layers: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q3a.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q3_AI_a.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q3b.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q3_AI_b.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q3c.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q3_AI_c.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 4,
                                category: 'A',
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q3d.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q3_AI_d.png').fileUrl,
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
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Média aritmética')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{

                            text: 'Numa família, a mãe ganha R$ 1.200 por mês, o pai R$ 800 e o filho R$ 700. Qual o salário médio da família? ',
                            alternativesType: 'image',
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'matematica_N2_Q4_1.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'matematica_N2_Q4_2.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'matematica_N2_Q4_3.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'matematica_N2_Q4_4.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'C'
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Adição')._id,
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Porcentagem')._id,
                    ],
                    contentFormat: 'add',
                    content: {
                        questions: [{
                            text: 'Numa loja, um óculos custa R$ 240 e um celular R$ 500. Na oferta, comprando os dois, o produto mais barato sai pela metade do preço. Arraste pra maquininha quanto você vai pagar no total. ',
                            background: _.find(files, file => file.filename === 'Nivel-2_MAT_Q5.png').fileUrl,
                            baseResolution: {
                                width: 1080,
                                height: 860
                            },
                            layers: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q5a.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q5_AI_a.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q5b.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q5_AI_b.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q5c.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q5_AI_c.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 4,
                                category: 'A',
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q5d.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q5_AI_d.png').fileUrl,
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
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Porcentagem')._id,
                    ],
                    contentFormat: 'memoryQuiz',
                    content: {
                        questions: [{
                            text: 'Memorize os números abaixo e diga qual número representa o maior risco de um tratamento médico dar errado? 1 em…',
                            alternativesType: 'image',
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'matematica_N2_Q6_1.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'matematica_N2_Q6_2.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'matematica_N2_Q6_3.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'matematica_N2_Q6_4.png').fileUrl,
                                letter: 'D'
                            }, {
                                option: _.find(files, file => file.filename === 'matematica_N2_Q6_5.png').fileUrl,
                                letter: 'E'
                            }, {
                                option: _.find(files, file => file.filename === 'matematica_N2_Q6_6.png').fileUrl,
                                letter: 'F'
                            }],
                            correctAnswer: 'C'
                        }]
                    }

                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Raciocínio lógico')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{

                            text: 'Qual o número seguinte dessa sequência: 0, 1, 1, 2, 3, 5, 8…?',
                            alternativesType: 'image',
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'matematica_N2_Q7_1.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'matematica_N2_Q7_2.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'matematica_N2_Q7_3.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'matematica_N2_Q7_4.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'D'
                        }]
                    }

                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Raciocínio lógico')._id,
                    ],
                    contentFormat: 'add',
                    content: {
                        questions: [{
                            text: 'Numa vila, Mariana mora na segunda casa. A casa vizinha à direita de Camila é a vermelha. Arraste o nome da pessoa pra casa com cor correta. ',
                            background: _.find(files, file => file.filename === 'Nivel-2_MAT_Q8.png').fileUrl,
                            baseResolution: {
                                width: 1080,
                                height: 860
                            },
                            layers: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q8a.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q8_AI_a.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q8d.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q8_AI_d.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q8c.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q8_AI_c.png').fileUrl,
                                category: 'B',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 4,
                                category: 'B',
                                image: _.find(files, file => file.filename === 'Nivel-2_MAT_Q8b.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-2_MAT_Q8_AI_b.png').fileUrl,
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }],
                            correctLayers: [1, 4]
                        }]
                    }

                }] //final do action
        })
    ]
);
