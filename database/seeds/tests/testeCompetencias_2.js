'use strict';

const _ = require('lodash');
const Test = require('../../../src/models/testModel').Test;

module.exports = (files, tests, achievements, categories) => (
    [
        new Test({
            name: 'Competências - 2',
            description: 'Excelente! Já deu pra sacar algumas características suas. Mas, para descobrir quais são suas habilidades, precisamos conhecer você ainda mais. Continue respondendo o teste com sinceridade, pois só assim você conhecerá suas verdadeiras competências. Preparado?',
            categories: [
                _.find(categories, category => category.name === 'Auto-conhecimento')._id
            ],
            estimatedTime: '5',
            score: 2500,
            achievement: _.find(achievements, achievement => achievement.rule === 'finishTestSkills')._id,
            type: 'competencies_2',
            preRequirements: [
                _.find(tests, test => test.name === 'Competências - 1')._id
            ],
            repeatable: false,
            image: _.find(files, file => file.filename === 'capas_competencias-02.png').fileUrl,
            activities: [{
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'O que eu mais falo é:',
                        alternativesType: 'text',
                        alternatives: [{
                            letter: 'A',
                            option: 'Calma, vamos conversar.',
                            value: {
                                competence: 'emotionalControl',
                                points: 3
                            }
                        }, {
                            option: 'Vamos fazer diferente.',
                            letter: 'B',
                            value: {
                                competence: 'flexibility',
                                points: 4
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Quando me olho no espelho, vejo uma pessoa…',
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'competencias_N1_Q17_1.png').fileUrl,
                            letter: 'A',
                            value: {
                                competence: 'emotionalControl',
                                points: 4
                            }
                        }, {
                            option: _.find(files, file => file.filename === 'competencias_N1_Q17_2.png').fileUrl,
                            letter: 'B',
                            value: {
                                competence: 'focusOnResults',
                                points: 1
                            }
                        }, {
                            option: _.find(files, file => file.filename === 'competencias_N1_Q17_3.png').fileUrl,
                            letter: 'C',
                            value: {
                                competence: 'emotionalControl',
                                points: 4
                            }
                        }, {
                            option: _.find(files, file => file.filename === 'competencias_N1_Q17_4.png').fileUrl,
                            letter: 'D',
                            value: {
                                competence: 'focusOnResults',
                                points: 1
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        // title: 'Teste de Competências',
                        text: 'A frase com a qual mais me identifico é…',
                        alternativesType: 'text',
                        alternatives: [{
                            letter: 'A',
                            option: 'Tô nem aí, chuto o pau da barraca.',
                            value: {
                                competence: 'emotionalControl',
                                points: 0
                            }
                        }, {
                            option: 'Precisa resolver isso? Deixa comigo!',
                            letter: 'B',
                            value: {
                                competence: 'iniciative',
                                points: 2
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        // title: 'Teste de Competências',
                        text: ' Este sou eu:',
                        alternativesType: 'text',
                        alternatives: [{
                            letter: 'A',
                            option: 'Não curto brigar.',
                            value: {
                                competence: 'emotionalControl',
                                points: 1
                            }
                        }, {
                            option: 'Agilizado',
                            letter: 'B',
                            value: {
                                competence: 'organization',
                                points: 4
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Arraste a barra pro lado de sua maior qualidade.',
                        image: _.find(files, file => file.filename === 'competencias_N1_Q20.png').fileUrl,
                        values: {
                            left: {
                                value: {
                                    competence: 'personalGuidance',
                                    points: 1
                                }
                            },
                            right: {
                                value: {
                                    competence: 'emotionalControl',
                                    points: 2
                                }
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        // title: 'Teste de Competências',
                        text: 'A real é que eu...',
                        alternativesType: 'text',
                        alternatives: [{
                            letter: 'A',
                            option: 'Sugiro novas formas de fazer as coisas quando mudanças precisam ser feitas.',
                            value: {
                                competence: 'flexibility',
                                points: 4
                            }
                        }, {
                            option: 'Nem sempre entrego os trabalhos que me pedem.',
                            letter: 'B',
                            value: {
                                competence: 'focusOnResults',
                                points: 0
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'add',
                content: {
                    questions: [{
                        // title: 'Teste de Competências',
                        text: 'Complete a frase arrastando a palavra mais adequada sobre você.',
                        background: _.find(files, file => file.filename === 'Teste_CO_Q22.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q22a.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q22_AI_a.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'flexibility',
                                points: 0
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q22b.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q22_AI_b.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'iniciative',
                                points: 1
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q22c.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q22_AI_c.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'flexibility',
                                points: 0
                            }
                        }, {
                            number: 4,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q22d.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q22_AI_d.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'iniciative',
                                points: 1
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        // title: 'Teste de Competências',
                        text: 'Sou craque em...',
                        alternativesType: 'text',
                        alternatives: [{
                            letter: 'A',
                            option: 'Mudar o jeito de fazer uma coisa desde que me provem que tem um jeito melhor.',
                            value: {
                                competence: 'flexibility',
                                points: 1
                            }
                        }, {
                            option: 'Organizar tudo o que preciso fazer quando acumulam as tarefas e resolver da melhor forma.',
                            letter: 'B',
                            value: {
                                competence: 'organization',
                                points: 3
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Arraste a barra e mostre de qual lado você está.',
                        image: _.find(files, file => file.filename === 'competencias_N1_Q24.png').fileUrl,
                        values: {
                            left: {
                                value: {
                                    competence: 'personalGuidance',
                                    points: 0
                                }
                            },
                            right: {
                                value: {
                                    competence: 'flexibility',
                                    points: 2
                                }
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'add',
                content: {
                    questions: [{
                        text: 'Leve para a medalha aquilo que você tem de melhor.',
                        background: _.find(files, file => file.filename === 'Teste_CO_Q25.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q25a.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q25_AI_a.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'flexibility',
                                points: 3
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q25b.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q25_AI_b.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'emotionalControl',
                                points: 2
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q25c.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q25_AI_c.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'flexibility',
                                points: 3
                            }
                        }, {
                            number: 4,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q25d.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q25_AI_d.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'emotionalControl',
                                points: 2
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Sou do tipo que...',
                        alternativesType: 'text',
                        alternatives: [{
                            letter: 'A',
                            option: 'Não entrega todos os trabalhos que me pedem.',
                            value: {
                                competence: 'focusOnResults',
                                points: 0
                            }
                        }, {
                            option: 'Orienta as pessoas na organização de suas tarefas.',
                            letter: 'B',
                            value: {
                                competence: 'organization',
                                points: 2
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Arraste a barra pro lado que é mais você:.',
                        image: _.find(files, file => file.filename === 'competencias_N1_Q27.png').fileUrl,
                        values: {
                            left: {
                                value: {
                                    competence: 'iniciative',
                                    points: 0
                                }
                            },
                            right: {
                                value: {
                                    competence: 'focusOnResults',
                                    points: 1
                                }
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Meu mundo gira em torno de...',
                        alternativesType: 'text',
                        image: _.find(files, file => file.filename === 'Teste_CO_Q28.png').fileUrl,
                        alternatives: [{
                            option: 'Ser mega comprometido em tudo que eu faço.',
                            letter: 'A',
                            value: {
                                competence: 'focusOnResults',
                                points: 2
                            }
                        }, {
                            option: 'Fazer com que as pessoas tenham uma boa relação umas com as outras e mostrar a importância disso.',
                            letter: 'B',
                            value: {
                                competence: 'personalGuidance',
                                points: 4
                            }
                        }],
                    }]
                }
            }, {
                contentFormat: 'add',
                content: {
                    questions: [{
                        text: 'Arraste pro alvo e teste sua mira sobre o que está mais presente no seu dia-a-dia.',
                        background: _.find(files, file => file.filename === 'Teste_CO_Q29.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q29_a.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q29_AI_a.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'focusOnResults',
                                points: 3
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q29_b.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q29_AI_b.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'emotionalControl',
                                points: 1
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q29_c.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q29_AI_c.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'focusOnResults',
                                points: 3
                            }
                        }, {
                            number: 4,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q29_d.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q29_AI_d.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'emotionalControl',
                                points: 1
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Esta frase representa quem eu sou:',
                        alternativesType: 'text',
                        alternatives: [{
                            letter: 'A',
                            option: 'As pessoas veem em mim alguém que entrega os trampos acima das expectativas.',
                            value: {
                                competence: 'focusOnResults',
                                points: 4
                            }
                        }, {
                            option: 'Mudo meu modo de agir quando vejo que as coisas ao meu lado mudaram.',
                            letter: 'B',
                            value: {
                                competence: 'flexibility',
                                points: 3
                            }
                        }]
                    }]
                }
            }]
        })
    ]
);
