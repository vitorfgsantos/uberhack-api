'use strict';

const _ = require('lodash');
const Test = require('../../../src/models/testModel').Test;

module.exports = (files, tests, achievements, categories, studyCategories) => (
    [
        new Test({
            name: 'Conhecimentos - Nível 3',
            description: 'Parabéns! Mandou muito bem! Viu? Quanto mais você sabe, mais longe chega! Que tal responder as últimas perguntas e mostrar que você está sempre ligado em tudo o que acontece?',
            categories: [
                _.find(categories, category => category.name === 'Habilidades')._id,
                _.find(categories, category => category.name === 'Conhecimentos')._id
            ],
            estimatedTime: 5,
            type: 'generalKnowledge',
            repeatable: false,
            level: 3,
            image: _.find(files, file => file.filename === 'capas_conhecimentos-03.png').fileUrl,
            achievement: _.find(achievements, achievement => achievement.rule === 'generalKnowledgeTestCompleted')._id,
            preRequirements: [
                _.find(tests, test => test.name === 'Conhecimentos - Nível 1')._id,
                _.find(tests, test => test.name === 'Conhecimentos - Nível 2')._id
            ],
            score: undefined,
            activities: [{
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Empresa - Segurança do Trabalho')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{

                            text: 'Toda atividade profissional que pode oferecer algum tipo de risco físico ao trabalhador deve ser realizada com o uso de...',
                            alternativesType: 'image',
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'CG_N3_Q1_1.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N3_Q1_2.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N3_Q1_3.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'CG_N3_Q1_4.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'D'
                        }]
                    }

                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Geografia')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            text: 'Os brasileiros convivem com a questão da violência. Vários fatores contribuem para o agravamento dessa situação. Assim, é certo afirmar:',
                            alternativesType: 'text',
                            alternatives: [{
                                option: 'Manifestações violentas acontecem, graças a expansão dos meios de comunicação e das redes sociais. ',
                                letter: 'A'
                            }, {
                                option: 'A maioria das manifestações são retaliações pelas penas leves aplicadas a políticos corruptos.',
                                letter: 'B'
                            }, {
                                option: 'O fraco resultado da implantação das UPPs provocou o abandono do programa pelo Governo Federal. ',
                                letter: 'C'
                            }, {
                                option: 'A precariedade de investimento público, a ausência de uma política eficaz do Estado e a desigualdade social geram violência. ',
                                letter: 'D'
                            }],
                            correctAnswer: 'D'

                        }]
                    }

                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Atualidades')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            text: 'Qual o objetivo da operação da Polícia Federal conhecida como “Lava Jato”?',
                            alternativesType: 'text',
                            alternatives: [{
                                option: ' Impedir a evasão de divisas.  ',
                                letter: 'A'
                            }, {
                                option: 'Apurar um esquema de corrupção numa empresa estatal. ',
                                letter: 'B'
                            }, {
                                option: 'Apurar denúncias de corrupção na Fundação de Amparo ao Meio Ambiente.',
                                letter: 'C'
                            }, {
                                option: 'Prender os falsificadores de medicamentos distribuídos nas Farmácias Populares. ',
                                letter: 'D'
                            }],
                            correctAnswer: 'B'

                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Empresa - Marketing')._id,
                    ],
                    contentFormat: 'simpleQuiz',
                    content: {
                        questions: [{
                            text: 'O principal objetivo da propaganda é...',
                            image: _.find(files, file => file.filename === 'Nivel-3_CG_Q5.png').fileUrl,
                            number: 2,
                            alternativesType: 'text',
                            alternatives: [{
                                option: 'Vender produtos.  ',
                                letter: 'A'
                            }, {
                                option: 'Educar a população.',
                                letter: 'B'
                            }],
                            correctAnswer: 'A'
                        }]
                    }

                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Atualidades')._id,
                    ],
                    contentFormat: 'simpleQuiz',
                    content: {
                        questions: [{
                            text: 'A expressão "Game Over", comum nos jogos eletrônicos, quer dizer...',
                            image: _.find(files, file => file.filename === 'Nivel-3_CG_Q5.png').fileUrl,
                            number: 2,
                            alternativesType: 'text',
                            alternatives: [{
                                option: 'Fim de jogo. ',
                                letter: 'A'
                            }, {
                                option: 'Jogo interrompido. ',
                                letter: 'B'
                            }],
                            correctAnswer: 'A'
                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Trabalho')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            text: 'A proposta do governo referente a mudanças na Lei Trabalhista, que vem sendo discutida atualmente, causou polêmica. Qual alternativa é falsa em relação às medidas propostas?',
                            alternativesType: 'text',
                            alternatives: [{
                                option: 'Tornar permanente o Programa de Proteção ao Emprego (PPE).',
                                letter: 'A'
                            }, {
                                option: 'Parcelamento das férias e do décimo terceiro salário.',
                                letter: 'B'
                            }, {
                                option: 'Atualização da CLT (Consolidação das Leis do Trabalho), com o objetivo de   simplificá-la. ',
                                letter: 'C'
                            }, {
                                option: 'Regulamentação da terceirização.',
                                letter: 'D'
                            }],
                            correctAnswer: 'B'

                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Meio Ambiente')._id,
                    ],
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            text: ' A expressão "Carbono Zero", significa um... ',
                            alternativesType: 'text',
                            alternatives: [{
                                option: 'Papel carbono sem tinta.',
                                letter: 'A'
                            }, {
                                option: 'Jeito de anular os gases tóxicos da atmosfera pelo plantio de árvores.',
                                letter: 'B'
                            }, {
                                option: 'Tipo de detergente que não polui os rios. ',
                                letter: 'C'
                            }, {
                                option: 'Ingrediente que reduz a vida útil dos plásticos poluentes. ',
                                letter: 'D'
                            }],
                            correctAnswer: 'B'

                        }]
                    }
                }, {
                    studyCategory: [
                        _.find(studyCategories, studyCategoriy => studyCategoriy.title === 'Geopolítica')._id,
                    ],
                    contentFormat: 'remove',
                    content: {
                        questions: [{
                            text: 'Tire as falas que não podem ser afirmadas sobre a China.',
                            clicks: 4,
                            background: _.find(files, file => file.filename === 'Teste_CG_nivel3.png').fileUrl,
                            baseResolution: {
                                width: 1080,
                                height: 860
                            },
                            layers: [{
                                image: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8J.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8C.png').fileUrl,
                                mapping: {
                                    coordinates: '466,411,487,395,503,380,516,355,522,332,515,316,499,309,484,304,470,291,460,275,456,261,454,242,459,220,468,205,484,194,502,188,526,186,570,185,604,185,629,189,645,196,658,213,661,232,663,260,653,283,642,296,625,304,606,308,587,310,566,318,555,326,545,342,539,356,524,374,503,392,488,402',
                                    shape: 'poly'
                                }
                            }, {
                                image: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8I.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8E.png').fileUrl,
                                mapping: {
                                    coordinates: '452,542,452,559,462,571,482,583,498,589,514,605,529,624,547,635,568,638,601,638,644,637,679,637,705,634,723,626,731,607,733,580,728,562,712,553,680,547,575,547,540,549,519,555,504,562,486,563,471,559,461,550',
                                    shape: 'poly'
                                }
                            }, {
                                image: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8H.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8D.png').fileUrl,
                                mapping: {
                                    coordinates: '463,479,484,475,510,461,538,448,570,430,593,423,611,418,644,417,687,417,725,413,744,410,762,399,771,377,769,346,758,330,737,321,709,317,655,318,620,319,601,321,589,328,580,340,574,351,571,368,563,386,551,404,538,419,523,432,509,445,499,454,484,465',
                                    shape: 'poly'
                                }
                            }, {
                                image: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8F.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8A.png').fileUrl,
                                mapping: {
                                    coordinates: '286,159,300,150,317,144,336,145,358,145,382,147,407,144,424,147,442,157,447,170,447,183,448,203,443,219,432,228,419,236,410,242,398,247,395,257,394,272,394,285,391,298,385,310,385,298,380,278,369,264,356,250,342,247,321,242,301,236,285,229,273,210,270,197,274,174',
                                    shape: 'poly'
                                }
                            }]
                        }]
                    }
                }]
        })
    ]
);
