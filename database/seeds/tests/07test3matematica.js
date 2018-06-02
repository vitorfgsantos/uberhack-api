'use strict';

const _ = require('lodash');
const Test = require('../../../src/models/testModel').Test;

module.exports = (files, tests, achievements, categories, studyCategories) => (
    [
        new Test({
            name: 'Lógica - Nível 3',
            description: 'Parabéns! Você chegou até o terceiro nível e mostrou que fazer contas é a sua praia. Agora é só partir para a última etapa e fechar com chave de ouro este teste. Preparado? Estamos torcendo por você! ',
            categories: [
                _.find(categories, category => category.name === 'Habilidades')._id,
                _.find(categories, category => category.name === 'Conhecimentos')._id
            ],
            type: 'logic',
            repeatable: false,
            estimatedTime: 5,
            level: 3,
            image: _.find(files, file => file.filename === 'capas_mat-03.png').fileUrl,
            achievement: _.find(achievements, achievement => achievement.rule === 'logicTestCompleted')._id,
            preRequirements: [
                _.find(tests, test => test.name === 'Lógica - Nível 1')._id,
                _.find(tests, test => test.name === 'Lógica - Nível 2')._id
            ],
            score: undefined,
            activities: [{
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Interpretação de tabelas')._id,
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Porcentagem')._id,
                    ],
                    contentFormat: 'errors',
                    content: {
                        questions: [{
                            text: 'Essa é a distribuição do desmatamento em 2014 e 2015 em alguns estados da Amazônia Legal. Clique na opção que mostra o percentual total de aumento em relação a 2014 e o estado que mais cresceu percentualmente em 2015.',
                            clicks: 1,
                            baseResolution: {
                                width: 1080,
                                height: 1140
                            },
                            background: _.find(files, file => file.filename === 'Nivel-3_MAT_Q1.png').fileUrl,
                            mappings: [{
                                coordinates: '768,925,1026,925,1016,1139,770,1129',
                                shape: 'poly',
                                tickPosition: {
                                    x: 899,
                                    y: 1025
                                },

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
                            text: 'Clique na forma que preenche o quadrado vazio.',
                            clicks: 1,
                            baseResolution: {
                                width: 1080,
                                height: 1140
                            },
                            background: _.find(files, file => file.filename === 'Nivel-3_MAT_Q2.png').fileUrl,
                            mappings: [{
                                coordinates: '440,828,560,777,638,843,558,921',
                                shape: 'poly',
                                tickPosition: {
                                    x: 554,
                                    y: 833
                                },

                            }]
                        }]
                    }

                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Geometria')._id,
                    ],
                    contentFormat: 'errors',
                    content: {
                        questions: [{
                            text: 'Alunos estão montando um cubo para fazer um dado. Os números 3 e 4 representam duas faces paralelas. Sabendo que no dado, a soma dos números em duas faces paralelas é sempre 7, arraste para o molde os algarismos que devem estar nas faces vazias. ',
                            clicks: 1,
                            baseResolution: {
                                width: 1080,
                                height: 1140
                            },
                            background: _.find(files, file => file.filename === 'Nivel-3_MAT_Q3.png').fileUrl,
                            mappings: [{
                                coordinates: '727,928,240,925,243,1038,732,1039',
                                shape: 'poly',
                                tickPosition: {
                                    x: 570,
                                    y: 919
                                },

                            }]
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Adição')._id,
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Subtração')._id,
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Multiplicação')._id,
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Divisão')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            text: 'Uma TV custa R$ 1.800. Consigo guardar R$ 200 por mês. Se pagar em 6X sai R$ 300 por mês. Quantos meses preciso economizar para comprar em 6X? ',
                            alternativesType: 'image',
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'matematica_N3_Q4_1.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'matematica_N3_Q4_2.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'matematica_N3_Q4_3.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'matematica_N3_Q4_4.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'C'
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Raciocínio lógico')._id,
                    ],
                    contentFormat: 'errors',
                    content: {
                        questions: [{
                            text: 'Atenção para o teste de fogo! Clique na opção que mostra quantos quadrados você vê nesta imagem.',
                            clicks: 1,
                            baseResolution: {
                                width: 1080,
                                height: 1140
                            },
                            background: _.find(files, file => file.filename === 'Nivel-3_MAT_Q5.png').fileUrl,
                            mappings: [{
                                coordinates: '539,926,765,925,773,1130,538,1132',
                                shape: 'poly',
                                tickPosition: {
                                    x: 598,
                                    y: 978
                                },

                            }]
                        }]
                    }

                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Raciocínio lógico')._id,
                    ],
                    contentFormat: 'add',
                    content: {
                        questions: [{
                            text: 'Coloque no quadrado o número que está faltando.',
                            background: _.find(files, file => file.filename === 'Nivel-3_MAT_Q6.png').fileUrl,
                            baseResolution: {
                                width: 1080,
                                height: 860
                            },
                            layers: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Nivel-3_MAT_Q6a.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-3_MAT_Q6_AI_a.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Nivel-3_MAT_Q6b.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-3_MAT_Q6_AI_b.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Nivel-3_MAT_Q6c.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-3_MAT_Q6_AI_c.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 4,
                                category: 'A',
                                image: _.find(files, file => file.filename === 'Nivel-3_MAT_Q6d.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-3_MAT_Q6_AI_d.png').fileUrl,
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
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Geometria')._id,
                    ],
                    contentFormat: 'errors',
                    content: {
                        questions: [{
                            text: 'Hora de acampar! Leve o molde certo pra barraca.',
                            clicks: 1,
                            baseResolution: {
                                width: 1080,
                                height: 1140
                            },
                            background: _.find(files, file => file.filename === 'Nivel-3_MAT_Q7.png').fileUrl,
                            mappings: [{
                                coordinates: '185,816,196,729,451,725,510,820,447,912,237,938',
                                shape: 'poly',
                                tickPosition: {
                                    x: 243,
                                    y: 746
                                },

                            }]
                        }]
                    }

                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Geometria')._id,
                    ],
                    contentFormat: 'add',
                    content: {
                        questions: [{
                            text: 'Arraste para a caixa d’água a opção correta. A quantidade de metros cúbicos de água, que pode ser armazenada em uma caixa d’água de 2 m de comprimento por 3 m de largura e 1,5 m de altura, é… ',
                            background: _.find(files, file => file.filename === 'Nivel-3_MAT_Q8_.png').fileUrl,
                            baseResolution: {
                                width: 1080,
                                height: 860
                            },
                            layers: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Nivel-3_MAT_Q8a.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-3_MAT_Q8_AI_a.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Nivel-3_MAT_Q8b.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-3_MAT_Q8_AI_b.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Nivel-3_MAT_Q8c.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-3_MAT_Q8_AI_c.png').fileUrl,
                                category: 'A',
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }, {
                                number: 4,
                                category: 'A',
                                image: _.find(files, file => file.filename === 'Nivel-3_MAT_Q8d.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Nivel-3_MAT_Q8_AI_d.png').fileUrl,
                                tickPosition: {
                                    x: 801,
                                    y: 211
                                }
                            }],
                            correctLayers: [3]
                        }]
                    }
                }] //final action
        })
    ]
);
