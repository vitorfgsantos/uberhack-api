'use strict';

const _ = require('lodash');
const Test = require('../../../src/models/testModel').Test;

module.exports = (files, tests, achievements, categories) => (
    [
        new Test({
            name: 'Competências - 1',
            description: 'Todo mundo tem suas habilidades. Aquelas características que fazem você se destacar em algumas coisas. Você é o cara que se planeja ou é do tipo que sai fazendo sem pensar?  Resolve as coisa antes de te pedirem ou espera que alguém faça primeiro? Entender quais são as suas competências te ajuda a guiar as suas escolhas. Quer descobrir no que você é bom? Use toda a sua sinceridade e responda o teste!',
            categories: [
                _.find(categories, category => category.name === 'Auto-conhecimento')._id
            ],
            estimatedTime: '5',
            score: 2500,
            type: 'competencies_1',
            repeatable: false,
            image: _.find(files, file => file.filename === 'capas_competencias-01.png').fileUrl,
            activities: [{
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Selecione o comportamento que tem mais a ver com você:',
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'competencias_N1_Q1_1.png').fileUrl,
                            letter: 'A',
                            value: {
                                competence: 'iniciative',
                                points: 0
                            }
                        }, {
                            option: _.find(files, file => file.filename === 'competencias_N1_Q1_2.png').fileUrl,
                            letter: 'B',
                            value: {
                                competence: 'organization',
                                points: 1
                            }
                        }, {
                            option: _.find(files, file => file.filename === 'competencias_N1_Q1_3.png').fileUrl,
                            letter: 'C',
                            value: {
                                competence: 'iniciative',
                                points: 0
                            }
                        }, {
                            option: _.find(files, file => file.filename === 'competencias_N1_Q1_4.png').fileUrl,
                            letter: 'D',
                            value: {
                                competence: 'organization',
                                points: 1
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Selecione a atitude que é mais a sua cara:',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Antes de começar uma tarefa, pergunto como é para ser feita.',
                            letter: 'A',
                            value: {
                                competence: 'iniciative',
                                points: 1
                            }
                        }, {
                            option: 'Percebo o que as pessoas precisam e ofereço ajuda.',
                            letter: 'B',
                            value: {
                                competence: 'personalGuidance',
                                points: 3
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Diante de um problema...',
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'competencias_N1_Q3_1.png').fileUrl,
                            letter: 'A',
                            value: {
                                competence: 'iniciative',
                                points: 2
                            }
                        }, {
                            option: _.find(files, file => file.filename === 'competencias_N1_Q3_2.png').fileUrl,
                            letter: 'B',
                            value: {
                                competence: 'emotionalControl',
                                points: 0
                            }
                        }, {
                            option: _.find(files, file => file.filename === 'competencias_N1_Q3_3.png').fileUrl,
                            letter: 'C',
                            value: {
                                competence: 'emotionalControl',
                                points: 0
                            }
                        }, {
                            option: _.find(files, file => file.filename === 'competencias_N1_Q3_4.png').fileUrl,
                            letter: 'D',
                            value: {
                                competence: 'iniciative',
                                points: 2
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Meu perfil é mais do tipo...',
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'Teste_CO_Q4a.png').fileUrl,
                            letter: 'A',
                            value: {
                                competence: 'iniciative',
                                points: 3
                            }
                        }, {
                            option: _.find(files, file => file.filename === 'Teste_CO_Q4b.png').fileUrl,
                            letter: 'B',
                            value: {
                                competence: 'flexibility',
                                points: 2
                            }
                        }],
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Tá, então você é o cara. Arraste a barra pro lado que você é mais forte:',
                        image: _.find(files, file => file.filename === 'competencias_N1_Q5.png').fileUrl,
                        values: {
                            left: {
                                value: {
                                    competence: 'focusOnResults',
                                    points: 4
                                },
                            },
                            right: {
                                value: {
                                    competence: 'iniciative',
                                    points: 4
                                },
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        // title: 'Teste de Competências',
                        text: 'Escolha a opção na qual você mais se enxerga.',
                        alternativesType: 'text',
                        alternatives: [{
                            letter: 'A',
                            option: 'Me organizo antes de fazer qualquer tarefa.',
                            value: {
                                competence: 'organization',
                                points: 1
                            }
                        }, {
                            option: 'Pergunto o que os outros precisam para poder ajudá-los.',
                            letter: 'B',
                            value: {
                                competence: 'personalGuidance',
                                points: 2
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Arraste a barra pro lado que mais combina com você.',
                        image: _.find(files, file => file.filename === 'competencias_N1_Q7.png').fileUrl,
                        values: {
                            left: {
                                value: {
                                    competence: 'emotionalControl',
                                    points: 4
                                }
                            },
                            right: {
                                value: {
                                    competence: 'organization',
                                    points: 2
                                },
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        // title: 'Teste de Competências',
                        text: 'Escolha a melhor definição sobre você.',
                        alternativesType: 'text',
                        alternatives: [{
                            letter: 'A',
                            option: 'Planejo minhas tarefas.',
                            value: {
                                competence: 'organization',
                                points: 3
                            }
                        }, {
                            option: 'Mudo de opinião se fizer sentido.',
                            letter: 'B',
                            value: {
                                competence: 'flexibility',
                                points: 1
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        // title: 'Teste de Competências',
                        text: 'Na hora de encarar um trampo...',
                        alternativesType: 'text',
                        image: _.find(files, file => file.filename === 'Teste_CO_Q9.png').fileUrl,
                        alternatives: [{
                            option: '...percebo facilmente uma nova forma de organizar as tarefas para resolvê-las com agilidade.',
                            letter: 'A',
                            value: {
                                competence: 'organization',
                                points: 4
                            }
                        }, {
                            option: '...reformulo o que for preciso para cumprir as tarefas de forma mais simples, rápida e útil.',
                            letter: 'B',
                            value: {
                                competence: 'focusOnResults',
                                points: 3
                            }
                        }],
                    }]
                }
            }, {
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        // title: 'Teste de Competências',
                        text: 'Sou bom em...',
                        alternativesType: 'text',
                        image: _.find(files, file => file.filename === 'Teste_CO_Q10.png').fileUrl,
                        alternatives: [{
                            option: '...deixar tudo pra última hora.',
                            letter: 'A',
                            value: {
                                competence: 'organization',
                                points: 0
                            }
                        }, {
                            option: '...tomar a frente e evitar um problema.',
                            letter: 'B',
                            value: {
                                competence: 'iniciative',
                                points: 4
                            }
                        }],
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        // title: 'Teste de Competências',
                        text: 'Nas relações costumo ser aquele que...',
                        alternativesType: 'text',
                        alternatives: [{
                            letter: 'A',
                            option: 'Ajuda as pessoas.',
                            value: {
                                competence: 'personalGuidance',
                                points: 2
                            }
                        }, {
                            option: 'Controla os nervos.',
                            letter: 'B',
                            value: {
                                competence: 'emotionalControl',
                                points: 3
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Arraste a barra e mostre se você tá mais pra lá ou pra cá.',
                        image: _.find(files, file => file.filename === 'competencias_N1_Q12.png').fileUrl,
                        values: {
                            left: {
                                value: {
                                    competence: 'flexibility',
                                    points: 0
                                }
                            },
                            right: {
                                value: {
                                    competence: 'personalGuidance',
                                    points: 3
                                },
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        // title: 'Teste de Competências',
                        text: 'Veja qual dessas opções é mais você.',
                        alternativesType: 'text',
                        alternatives: [{
                            letter: 'A',
                            option: 'Contribuo para a boa relação entre as pessoas.',
                            value: {
                                competence: 'personalGuidance',
                                points: 4
                            }
                        }, {
                            option: 'Consigo priorizar o que deve ser feito numa tarefa pra entregar direito.',
                            letter: 'B',
                            value: {
                                competence: 'focusOnResults',
                                points: 2
                            }
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Arraste a barra pra opção que descreve melhor você.',
                        image: _.find(files, file => file.filename === 'competencias_N1_Q14.png').fileUrl,
                        values: {
                            left: {
                                value: {
                                    competence: 'iniciative',
                                    points: 3
                                }
                            },
                            right: {
                                value: {
                                    competence: 'personalGuidance',
                                    points: 0
                                }
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'add',
                content: {
                    questions: [{
                        // title: 'Teste de Competências',
                        text: 'Arraste para o balão a frase que provavelmente seus amigos diriam sobre você.',
                        background: _.find(files, file => file.filename === 'Teste_CO_Q15.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q15a.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q15_AI_a.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'personalGuidance',
                                points: 1
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q15b.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q15_AI_b.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'organization',
                                points: 0
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q15c.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q15_AI_c.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'organization',
                                points: 0
                            }
                        }, {
                            number: 4,
                            image: _.find(files, file => file.filename === 'Teste_CO_Q15d.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Teste_CO_Q15_AI_d.png').fileUrl,
                            category: 'A',
                            value: {
                                competence: 'personalGuidance',
                                points: 1
                            }
                        }]
                    }]
                }
            }]
        })
    ]
);
