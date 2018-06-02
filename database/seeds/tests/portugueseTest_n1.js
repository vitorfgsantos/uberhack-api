'use strict';

const _ = require('lodash');
const Test = require('../../../src/models/testModel').Test;

module.exports = (files, tests, achievements, categories, studyCategories) => (
    [
        new Test({
            name: 'Português - Nível 1',
            description: 'Falar e escrever de forma correta te ajudam muito! E você? Sabe como anda o seu português? Que tal fazer um teste? As perguntas a seguir vão avaliar um pouco dos seus conhecimentos. Mas fique tranquilo. Mais do que responder tudo certo, o importante é aprender!',
            categories: [
                _.find(categories, category => category.name === 'Habilidades')._id,
                _.find(categories, category => category.name === 'Conhecimentos')._id
            ],
            estimatedTime: 5,
            type: 'portuguese',
            repeatable: false,
            level: 1,
            image: _.find(files, file => file.filename === 'capas_port-01.png').fileUrl,
            score: undefined,
            activities: [{
                studyCategories: [
                    _.find(studyCategories, studyCategory => studyCategory.title === 'Ortografia')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Escolha a opção correta para completar a frase: ______ , Pelé foi o melhor jogador de futebol do século XX.',
                        time: undefined,
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Concerteza',
                            letter: 'A',
                        }, {
                            option: 'Comcerteza ',
                            letter: 'B',
                        }, {
                            option: 'Com certeza',
                            letter: 'C',
                        }],
                        correctAnswer: 'C'
                    }]
                }
            }, {
                studyCategories: [
                    _.find(studyCategories, studyCategory => studyCategory.title === 'Concordância Nominal')._id,
                ],
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Escolha a resposta certa pro relógio. Agora é _______- dia e ________.',
                        time: undefined,
                        image: _.find(files, file => file.filename === 'Nivel-1_POR_Q2.png').fileUrl,
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Meio / meia',
                            letter: 'A'
                        }, {
                            option: 'Meio / meio',
                            letter: 'B'
                        }],
                        correctAnswer: 'A'
                    }]
                }
            }, {
                studyCategories: [
                    _.find(studyCategories, studyCategory => studyCategory.title === 'Para mim ou para eu?')._id,
                ],
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Diga se essa fala está certa ou errada: "Vou comprar algo para MIM beber"',
                        time: undefined,
                        image: _.find(files, file => file.filename === 'Nivel-1_POR_Q3.png').fileUrl,
                        alternativesType: 'boolean',
                        alternatives: [{
                            option: true,
                            letter: 'A'
                        }, {
                            option: false,
                            letter: 'B'
                        }],
                        correctAnswer: 'B'
                    }]
                }
            }, {
                studyCategories: [
                    _.find(studyCategories, studyCategory => studyCategory.title === 'Semântica')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Qual é o significado da palavra "pacato"?',
                        time: undefined,
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'portugues_N1_Q1_1.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N1_Q1_2.png').fileUrl,
                            letter: 'B'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N1_Q1_3.png').fileUrl,
                            letter: 'C'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N1_Q1_4.png').fileUrl,
                            letter: 'D'
                        }],
                        correctAnswer: 'D'
                    }]
                }
            }, {
                studyCategories: [
                    _.find(studyCategories, studyCategory => studyCategory.title === 'Interpretação de texto')._id,
                ],
                contentFormat: 'errors',
                content: {
                    questions: [{
                        text: 'Clique na opção que demonstra o que o personagem quis dizer com a expressão "AHHH!". Ele ficou...',
                        time: undefined,
                        clicks: 1,
                        baseResolution: {
                            width: 1080,
                            height: 1140
                        },
                        background: _.find(files, file => file.filename === 'Nivel-1_POR_Q5.png').fileUrl,
                        mappings: [{
                            coordinates: '265,992,502,996,506,1062,253,1053',
                            shape: 'poly',
                            tickPosition: {
                                x: 489,
                                y: 1049
                            }
                        }]
                    }]
                }
            }, {
                studyCategories: [
                    _.find(studyCategories, studyCategory => studyCategory.title === 'Plural')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'O plural de "qualquer cidadão" é…',
                        time: undefined,
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'portugues_N1_Q6_1.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N1_Q6_2.png').fileUrl,
                            letter: 'B'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N1_Q6_3.png').fileUrl,
                            letter: 'C'
                        }, {
                            option: _.find(files, file => file.filename === 'portugues_N1_Q6_4.png').fileUrl,
                            letter: 'D'
                        }],
                        correctAnswer: 'B'
                    }]
                }
            }, {
                studyCategories: [
                    _.find(studyCategories, studyCategory => studyCategory.title === 'Ortografia')._id,
                ],
                contentFormat: 'add',
                content: {
                    questions: [{
                        text: 'Leve até o cartaz a palavra que está escrita da forma correta.',
                        time: undefined,
                        background: _.find(files, file => file.filename === 'Nivel-1_POR_Q7.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Nivel-1_POR_Q7a.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-1_POR_Q7_AI_a.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 763,
                                y: 278
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Nivel-1_POR_Q7b.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-1_POR_Q7_AI_b.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 763,
                                y: 278
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Nivel-1_POR_Q7c.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-1_POR_Q7_AI_c.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 763,
                                y: 278
                            }
                        }, {
                            number: 4,
                            image: _.find(files, file => file.filename === 'Nivel-1_POR_Q7d.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Nivel-1_POR_Q7_AI_d.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 763,
                                y: 278
                            }
                        }],
                        correctLayers: [2]
                    }]
                }
            }, {
                studyCategories: [
                    _.find(studyCategories, studyCategory => studyCategory.title === 'Interpretação de texto')._id,
                ],
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Uma raposa passou por uma parreira e quis comer uvas. Pulou, fez de tudo, mas não deu certo. Aí, foi embora dizendo: dane-se, elas estão verdes mesmo. Por que ela não conseguiu pegar as uvas?',
                        time: undefined,
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Elas ainda estavam verdes',
                            letter: 'A',
                        }, {
                            option: 'A parreira era muito alta',
                            letter: 'B',
                        }, {
                            option: 'Não quis subir na parreira',
                            letter: 'C',
                        }, {
                            option: 'Tinha poucas uvas',
                            letter: 'D',
                        }],
                        correctAnswer: 'B'
                    }]
                }
            }]
        })
    ]
);
