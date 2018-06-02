'use strict';

const _ = require('lodash');
const Test = require('../../../src/models/testModel').Test;

module.exports = (files, tests, achievements, categories) => (
    [
        new Test({
            name: 'Personalidade - 2',
            description: 'Bacana! Já conseguimos sacar um pouco sobre você. Mas para determinar o seu perfil, precisamos saber ainda mais! Topa continuar o teste e mostrar pra gente outras atitudes e sentimentos que te fazem ser quem você é?',
            categories: [
                _.find(categories, category => category.name === 'Auto-conhecimento')._id
            ],
            estimatedTime: 5,
            type: 'personality_2',
            repeatable: false,
            score: 7500,
            image: _.find(files, file => file.filename === 'capas_personalidade-02.png').fileUrl,
            achievement: _.find(achievements, achievement => achievement.rule === 'testPsychological')._id,
            preRequirements: [
                _.find(tests, test => test.name === 'Personalidade - 1')._id
            ],
            activities: [{
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Eu vivo atrasado.',
                        image: _.find(files, file => file.filename === 'Parte 2_PE_Q23.png').fileUrl,
                        alternativesType: 'boolean',
                        alternatives: [{
                            option: true,
                            value: 'P'
                        }, {
                            option: false,
                            value: 'J'
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Um amigo me chamou para ir num lugar novo',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Vou só depois de pesquisar tudo sobre o lugar.',
                            letter: 'A',
                            value: 'J'
                        }, {
                            option: 'Eu vou. Adoro descobrir coisas novas',
                            letter: 'B',
                            value: 'P'
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Adoro ser o centro das atenções!',
                        image: _.find(files, file => file.filename === 'personalidade_N1_Q25.png').fileUrl,
                        values: {
                            left: {
                                value: 'I',
                            },
                            right: {
                                value: 'E',
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Ter rotina na semana é...',
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q26_1.png').fileUrl,
                            letter: 'A',
                            value: 'J'
                        }, {
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q26_2.png').fileUrl,
                            letter: 'B',
                            value: 'P'
                        }, {
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q26_3.png').fileUrl,
                            letter: 'C',
                            value: 'J'
                        }, {
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q26_4.png').fileUrl,
                            letter: 'D',
                            value: 'P'
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Prefiro trampar sozinho do que em grupo.',
                        image: _.find(files, file => file.filename === 'personalidade_N1_Q27.png').fileUrl,
                        values: {
                            left: {
                                value: 'E',
                            },
                            right: {
                                value: 'I',
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Sem querer acabo magoando as pessoas porque não presto atenção em como elas se sentem.',
                        image: _.find(files, file => file.filename === 'Parte 2_PE_Q28.png').fileUrl,
                        alternativesType: 'boolean',
                        alternatives: [{
                            option: true,
                            value: 'T'
                        }, {
                            option: false,
                            value: 'F'
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Numa roda de amigos, eu sou o que...',
                        image: _.find(files, file => file.filename === 'personalidade_N1_Q29.png').fileUrl,
                        values: {
                            left: {
                                value: 'E',
                            },
                            right: {
                                value: 'I',
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Quando estou em uma festa...',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Prefiro ficar quieto no meu canto.',
                            letter: 'A',
                            value: 'I'
                        }, {
                            option: 'Converso com todo mundo!',
                            letter: 'B',
                            value: 'E'
                        }]
                    }]
                }
            }, {
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Quando pesquiso alguma coisa na internet, entro em muitos sites, vejo vários vídeos e, quando percebo, nem lembro mais o que estava procurando.',
                        image: _.find(files, file => file.filename === 'Parte 2_PE_Q31.png').fileUrl,
                        alternativesType: 'boolean',
                        alternatives: [{
                            option: true,
                            value: 'N'
                        }, {
                            option: false,
                            value: 'S'
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Todo mundo acha que eu sou manteiga derretida e deixo me levar pelo coração.',
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q32_1.png').fileUrl,
                            letter: 'A',
                            value: 'F'
                        }, {
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q32_2.png').fileUrl,
                            letter: 'B',
                            value: 'T'
                        }, {
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q32_3.png').fileUrl,
                            letter: 'C',
                            value: 'T'
                        }, {
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q32_4.png').fileUrl,
                            letter: 'D',
                            value: 'F'
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Dizem que sou...',
                        image: _.find(files, file => file.filename === 'personalidade_N1_Q33.png').fileUrl,
                        values: {
                            left: {
                                value: 'N',
                            },
                            right: {
                                value: 'S',
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Numa conversa, sempre falam mais do que eu.',
                        image: _.find(files, file => file.filename === 'personalidade_N1_Q34.png').fileUrl,
                        values: {
                            left: {
                                value: 'E',
                            },
                            right: {
                                value: 'I',
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Se vou tomar uma decisão que envolva outra pessoa, gosto de...',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Ouvir o que ela tem a dizer antes de fazer alguma coisa.',
                            letter: 'A',
                            value: 'F'
                        }, {
                            option: 'Fazer o que eu acho melhor pra ela, mesmo que ela não concorde.',
                            letter: 'B',
                            value: 'T'
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Quando o assunto é arrumação...',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Finjo que não é comigo.',
                            letter: 'A',
                            value: 'P'
                        }, {
                            option: 'Não tem pra ninguém.',
                            letter: 'B',
                            value: 'J'
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Estar com muita gente ou pouca gente?',
                        image: _.find(files, file => file.filename === 'personalidade_N1_Q37.png').fileUrl,
                        values: {
                            left: {
                                value: 'I',
                            },
                            right: {
                                value: 'E',
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Fico muito nervoso quando tenho prazo pra acabar uma tarefa.',
                        image: _.find(files, file => file.filename === 'Parte 2_PE_Q38.png').fileUrl,
                        alternativesType: 'boolean',
                        alternatives: [{
                            option: true,
                            value: 'J'
                        }, {
                            option: false,
                            value: 'P'
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Quando me chamam pra balada, é provável que eu diga...',
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q39_1.png').fileUrl,
                            letter: 'A',
                            value: 'E'
                        }, {
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q39_2.png').fileUrl,
                            letter: 'B',
                            value: 'I'
                        }, {
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q39_3.png').fileUrl,
                            letter: 'C',
                            value: 'I'
                        }, {
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q39_4.png').fileUrl,
                            letter: 'D',
                            value: 'E'
                        }]
                    }]
                }
            }, {
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Sou dos que choram até vendo novela.',
                        image: _.find(files, file => file.filename === 'Parte 2_PE_Q40.png').fileUrl,
                        alternativesType: 'boolean',
                        alternatives: [{
                            option: true,
                            value: 'F'
                        }, {
                            option: false,
                            value: 'T'
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Quando faço a mesma tarefa várias vezes, eu faço sempre do mesmo jeito...',
                        image: _.find(files, file => file.filename === 'personalidade_N1_Q41.png').fileUrl,
                        values: {
                            left: {
                                value: 'N',
                            },
                            right: {
                                value: 'S',
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Quando tenho que falar algo importante, eu...',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Falo na lata, sem pensar.',
                            letter: 'A',
                            value: 'P'
                        }, {
                            option: 'Ensaio muito antes de falar.',
                            letter: 'B',
                            value: 'J'
                        }]
                    }]
                }
            }, {
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Deixo de defender minhas ideias para não discutir com quem não concorda comigo.',
                        image: _.find(files, file => file.filename === 'Teste_PE_part2_q43.png').fileUrl,
                        alternativesType: 'boolean',
                        alternatives: [{
                            option: true,
                            value: 'F'
                        }, {
                            option: false,
                            value: 'T'
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Normalmente termino meus trabalhos...',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Em cima da hora.',
                            letter: 'A',
                            value: 'P'
                        }, {
                            option: 'Com antecedência.',
                            letter: 'B',
                            value: 'J'
                        }]
                    }]
                }
            }]
        })
    ]
);
