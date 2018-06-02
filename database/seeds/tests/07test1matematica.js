'use strict';

const _ = require('lodash');
const Test = require('../../../src/models/testModel').Test;

module.exports = (files, tests, achievements, categories, studyCategories) => (
    [
        new Test({
            name: 'Lógica - Nível 1',
            description: 'A matemática faz parte do seu dia a dia. Quando você paga uma conta, quando tira a medida de algo e até quando faz uma receita, a matemática está lá, sempre presente. E já que ela é tão importante, vamos ver o quanto você sabe sobre cálculos, números e estratégias? ',
            categories: [
                _.find(categories, category => category.name === 'Habilidades')._id,
                _.find(categories, category => category.name === 'Conhecimentos')._id
            ],
            estimatedTime: 5,
            type: 'logic',
            repeatable: false,
            level: 1,
            image: _.find(files, file => file.filename === 'capas_mat-01.png').fileUrl,
            score: undefined,
            activities: [{
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Subtração')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{

                        text: 'Quantas vezes dá pra subtrair 5 de 25?',
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'matematica_N1_Q1_1.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'matematica_N1_Q1_2.png').fileUrl,
                            letter: 'B'
                        }, {
                            option: _.find(files, file => file.filename === 'matematica_N1_Q1_3.png').fileUrl,
                            letter: 'C'
                        }, {
                            option: _.find(files, file => file.filename === 'matematica_N1_Q1_4.png').fileUrl,
                            letter: 'D'
                        }],
                        correctAnswer: 'A'
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Multiplicação')._id,
                ],
                contentFormat: 'add',
                content: {
                    questions: [{
                        text: 'Num certo lugar, há 3 ilhas com 3 coqueiros em cada uma. Em cada coqueiro tem 3 cocos. Arraste para o coqueiro quantos cocos teríamos no total.',
                        background: _.find(files, file => file.filename === 'Nivel-1_MAT_Q2.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Nivel-1_MAT_Q2a.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-1_MAT_Q2_AI_a.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Nivel-1_MAT_Q2b.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-1_MAT_Q2_AI_b.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Nivel-1_MAT_Q2c.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-1_MAT_Q2_AI_c.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 4,
                            category: 'A',
                            image: _.find(files, file => file.filename === 'Nivel-1_MAT_Q2_AI_d_.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-1_MAT_Q2_AI_d.png').fileUrl,
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
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Interpretação de tabelas')._id,
                ],
                contentFormat: 'errors',
                content: {
                    questions: [{
                        text: '<p>A turma da Joana fez uma pesquisa sobre o tipo de filme que as crianças mais gostam. Cada criança pode votar em um filme. </p><p>Clique sobre o tipo de filme preferido das crianças.</p>',
                        clicks: 1,
                        baseResolution: {
                            width: 1080,
                            height: 1140
                        },
                        background: _.find(files, file => file.filename === 'Nivel-1_MAT_Q3.png').fileUrl,
                        mappings: [{
                            coordinates: '158,382,134,416,179,463,979,457,980,390',
                            shape: 'poly',
                            tickPosition: {
                                x: 463,
                                y: 353
                            },

                        }]
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Sistema Horário')._id,
                ],
                contentFormat: 'add',
                content: {
                    questions: [{
                        text: 'Maria colocou um bolo pra assar às 11h35 e ele ficou pronto em 30 minutos. Arraste para o relógio a hora correta que o bolo ficou pronto. ',
                        background: _.find(files, file => file.filename === 'Nivel-1_MAT_Q4.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Nivel-1_MAT_Q4a.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-1_MAT_Q4_AI_a.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Nivel-1_MAT_Q4b.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-1_MAT_Q4_AI_b.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Nivel-1_MAT_Q4c.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-1_MAT_Q4_AI_c.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 801,
                                y: 211
                            }
                        }, {
                            number: 4,
                            category: 'A',
                            image: _.find(files, file => file.filename === 'Nivel-1_MAT_Q4d.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-1_MAT_Q4_AI_d.png').fileUrl,
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
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Multiplicação')._id,
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Adição')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{

                        text: 'Uma escola recebeu de doação: 3 caixas de 1.000 livros + 8 caixas de 100 livros + 5 pacotes de 10 livros + 9 livros. Quantos livros recebeu?',
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'matematica_N1_Q5_1.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'matematica_N1_Q5_2.png').fileUrl,
                            letter: 'B'
                        }, {
                            option: _.find(files, file => file.filename === 'matematica_N1_Q5_3.png').fileUrl,
                            letter: 'C'
                        }, {
                            option: _.find(files, file => file.filename === 'matematica_N1_Q5_4.png').fileUrl,
                            letter: 'D'
                        }],
                        correctAnswer: 'B'
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Interpretação de gráficos')._id,
                ],
                contentFormat: 'remove',
                content: {
                    questions: [{
                        text: 'Os alunos de uma escola tinham que escolher um só lugar pra passar as férias. Veja o resultado e clique no gráfico o lugar menos escolhido.',
                        clicks: 1,
                        background: _.find(files, file => file.filename === 'Nivel-1_MAT_Q6.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        layers: [{
                            image: _.find(files, file => file.filename === 'Nivel-1_MAT_Q6d.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-1_MAT_Q6_TI_d.png').fileUrl,
                            mapping: {
                                coordinates: '734,272,731,650,812,644,809,273',
                                shape: 'poly'
                            }
                        }]
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Raciocínio lógico')._id,
                ],
                contentFormat: 'errors',
                content: {
                    questions: [{
                        text: 'Selecione na cesta de frutas o elemento que não está de acordo com os demais do grupo.',
                        clicks: 1,
                        baseResolution: {
                            width: 1080,
                            height: 1140
                        },
                        background: _.find(files, file => file.filename === 'Nivel-1_MAT_Q7.png').fileUrl,
                        mappings: [{
                            coordinates: '604,143,365,306,641,393,835,264,754,141',
                            shape: 'poly',
                            tickPosition: {
                                x: 559,
                                y: 158
                            },

                        }]
                    }]
                }
            }, {
                studyCategory: [
                    _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Adição')._id,
                ],
                contentFormat: 'errors',
                content: {
                    questions: [{
                        text: 'Olhe bem para a reta numérica e clique no ponto em que fica o número 990, sabendo que a diferença entre o valor de um ponto e o que vem depois é de 10 unidades. ',
                        clicks: 1,
                        baseResolution: {
                            width: 1080,
                            height: 1140
                        },
                        background: _.find(files, file => file.filename === 'Nivel-1_MAT_Q8.png').fileUrl,
                        mappings: [{
                            coordinates: '559,395,559,612,651,611,646,390',
                            shape: 'poly',
                            tickPosition: {
                                x: 550,
                                y: 432
                            },

                        }]
                    }]
                }
            }]
        })
    ]
);
