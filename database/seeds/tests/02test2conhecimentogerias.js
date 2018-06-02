'use strict';

const _ = require('lodash');
const Test = require('../../../src/models/testModel').Test;

module.exports = (files, tests, achievements, categories, studyCategories) => (
    [
        new Test({
            name: 'Conhecimentos - Nível 2',
            description: 'Muito bom! Você mostrou que é bem informado e passou para o segundo nível do teste. Agora, concentre-se, lembre de tudo que você já leu nos jornais e tire de letra mais algumas perguntas.   ',
            categories: [
                _.find(categories, category => category.name === 'Habilidades')._id,
                _.find(categories, category => category.name === 'Conhecimentos')._id
            ],
            type: 'generalKnowledge',
            estimatedTime: 5,
            repeatable: false,
            level: 2,
            image: _.find(files, file => file.filename === 'capas_conhecimentos-02.png').fileUrl,
            preRequirements: [
                _.find(tests, test => test.name === 'Conhecimentos - Nível 1')._id
            ],
            score: undefined,
            activities: [{
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Meio Ambiente')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        //q1
                        questions: [{
                            text: 'Em 2015, houve um grande desastre socioambiental quando a Barragem de Fundão, em Minas Gerais, se rompeu. Esta barragem fica em…',
                            alternativesType: 'text',
                            alternatives: [{
                                option: 'Ouro preto. ',
                                letter: 'A'
                            }, {
                                option: 'Mariana.',
                                letter: 'B'
                            }, {
                                option: 'Tiradentes. ',
                                letter: 'C'
                            }, {
                                option: 'Uberlândia.',
                                letter: 'D'
                            }],
                            correctAnswer: 'B'
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Empresa - RH')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            text: 'Qual departamento da empresa que cuida das admissões, demissões e benefícios?',
                            alternativesType: 'text',
                            alternatives: [{
                                option: 'Finanças ',
                                letter: 'A'
                            }, {
                                option: 'Recursos Humanos ',
                                letter: 'B'
                            }, {
                                option: 'Produção',
                                letter: 'C'
                            }, {
                                option: 'Tecnologia',
                                letter: 'D'
                            }],
                            correctAnswer: 'B'

                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Geografia Econômica')._id,
                    ],
                    contentFormat: 'simpleQuiz',
                    content: {
                        questions: [{
                            text: 'Quando falamos em globalização, é errado afirmar que... ',
                            image: _.find(files, file => file.filename === 'Nivel-2_CG_Q3.png').fileUrl,
                            alternativesType: 'text',
                            alternatives: [{
                                option: 'Os países impedem o acesso de outros em sua economia. ',
                                letter: 'A'
                            }, {
                                option: 'Os países abrem-se ao fluxo internacional de serviços, bens e capitais.',
                                letter: 'B'
                            }],
                            correctAnswer: 'A'
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Informática')._id,
                    ],
                    contentFormat: 'simpleQuiz',
                    content: {
                        questions: [{
                            text: 'Vírus de computador... ',
                            image: _.find(files, file => file.filename === 'Nivel-2_CG_Q4.png').fileUrl,
                            alternativesType: 'text',
                            alternatives: [{
                                option: 'Ajuda o computador a trabalhar com menos recursos.',
                                letter: 'A'
                            }, {
                                option: 'Prejudica o funcionamento do computador.',
                                letter: 'B'
                            }],
                            correctAnswer: 'B'
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Economia')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            text: 'O imposto chamado CPFM diz respeito a quais atividades?',
                            time: undefined,
                            alternativesType: 'image',
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'CG_N2_Q5_1_1.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N2_Q5_2_1_1.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N2_Q5_3_1.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N2_Q5_4_1.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'A'
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Atualidades')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            text: 'Selecione qual mosquito transmite dengue, zica e chikungunya',
                            time: undefined,
                            alternativesType: 'image',
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Nivel-2_CG_Q6a.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Nivel-2_CG_Q6b.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Nivel-2_CG_Q6c.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Nivel-2_CG_Q6d.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'C'
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Trabalho')._id,
                    ],
                    contentFormat: 'errors',
                    content: {
                        questions: [{
                            text: 'Qual a idade mínima para ter carteira de trabalho assinada?',
                            clicks: 1,
                            baseResolution: {
                                width: 1080,
                                height: 1140
                            },
                            background: _.find(files, file => file.filename === 'Nivel-2_CG_Q7.png').fileUrl,
                            mappings: [{
                                coordinates: '536,329,637,563,1028,563,1004,319,794,180',
                                shape: 'poly',
                                tickPosition: {
                                    x: 651,
                                    y: 395
                                },

                            }]
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'História')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            text: 'Martin Luther King, ganhador do Prêmio Nobel da Paz, lutou por qual ideal?',
                            alternativesType: 'text',
                            alternatives: [{
                                option: 'Igualdade de direitos civis para brancos e negros.',
                                letter: 'A'
                            }, {
                                option: 'Cotas raciais nas universidades dos EUA.',
                                letter: 'B'
                            }, {
                                option: 'Direito de voto para a população negra.',
                                letter: 'C'
                            }, {
                                option: 'Salários mais justos para os negros. ',
                                letter: 'D'
                            }],
                            correctAnswer: 'A'
                        }]
                    }

                }] //final do action
        })
    ]
);
