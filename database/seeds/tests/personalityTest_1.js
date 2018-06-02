'use strict';

const _ = require('lodash');
const Test = require('../../../src/models/testModel').Test;

module.exports = (files, achievements, categories) => (
    [
        new Test({
            name: 'Personalidade - 1',
            description: 'Vamos nos conhecer melhor? Queremos saber o que você gosta, como se sente ou se comporta em determinadas situações, como se relaciona com os amigos. Seja sincero nas respostas, pois é com base nelas que traçaremos o seu perfil. Pronto para começar?',
            categories: [
                _.find(categories, category => category.name === 'Auto-conhecimento')._id
            ],
            estimatedTime: 5,
            type: 'personality_1',
            repeatable: false,
            image: _.find(files, file => file.filename === 'capas_personalidade-01.png').fileUrl,
            score: 7500,
            activities: [{
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Uhuuuu! Hoje é sexta-feira!',
                        alternativesType: 'text',
                        image: _.find(files, file => file.filename === 'Parte_1_PE_Q1.png').fileUrl,
                        alternatives: [{
                            option: 'Mas ainda não tenho ideia do que tem pra fazer.',
                            letter: 'A',
                            value: 'P'
                        }, {
                            option: 'E já tô sabendo de tudo de bom que vai rolar no final de semana.',
                            letter: 'B',
                            value: 'J'
                        }]
                    }]
                }
            }, {
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Não curto falar da minha vida para os outros. Fico na minha.',
                        image: _.find(files, file => file.filename === 'Parte_1_PE_Q2.png').fileUrl,
                        alternativesType: 'boolean',
                        alternatives: [{
                            option: true,
                            value: 'I'
                        }, {
                            option: false,
                            value: 'E'
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Sempre invento uma maneira nova de fazer as coisas.',
                        image: _.find(files, file => file.filename === 'personalidade_N1_Q4.png').fileUrl,
                        values: {
                            right: {
                                value: 'N',
                            },
                            left: {
                                value: 'S',
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Quando vejo algo errado, falo mesmo sabendo que a pessoa não vai gostar.',
                        image: _.find(files, file => file.filename === 'personalidade_N1_Q4.png').fileUrl,
                        values: {
                            right: {
                                value: 'T',
                            },
                            left: {
                                value: 'F',
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Se alguém pede para mudar meus planos, eu...',
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'Parte 1_PE_Q5_1.png').fileUrl,
                            letter: 'A',
                            value: 'P'
                        }, {
                            option: _.find(files, file => file.filename === 'Parte 1_PE_Q5_2.png').fileUrl,
                            letter: 'B',
                            value: 'J'
                        }, {
                            option: _.find(files, file => file.filename === 'Parte 1_PE_Q5_3.png').fileUrl,
                            letter: 'C',
                            value: 'P'
                        }, {
                            option: _.find(files, file => file.filename === 'Parte 1_PE_Q5_4.png').fileUrl,
                            letter: 'D',
                            value: 'J'
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Quem me comanda é o meu...',
                        image: _.find(files, file => file.filename === 'Teste_PE_part1_Q6.png').fileUrl,
                        values: {
                            right: {
                                value: 'T',
                            },
                            left: {
                                value: 'F',
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Quando vou num lugar que não conheço ninguém, eu fico...',
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'Parte_1_PE_Q7a.png').fileUrl,
                            letter: 'A',
                            value: 'I'
                        }, {
                            option: _.find(files, file => file.filename === 'Parte_1_PE_Q7b.png').fileUrl,
                            letter: 'B',
                            value: 'E'
                        }]
                    }]
                }
            }, {
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Fico irritado com gente que dá uma ideia e depois não sabe como fazer.',
                        image: _.find(files, file => file.filename === 'Parte_1_PE_Q8.png').fileUrl,
                        alternativesType: 'boolean',
                        alternatives: [{
                            option: true,
                            value: 'S'
                        }, {
                            option: false,
                            value: 'N'
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'No meu celular, os arquivos, fotos e pastas ficam...',
                        image: _.find(files, file => file.filename === 'personalidade_N1_Q9.png').fileUrl,
                        values: {
                            left: {
                                value: 'J',
                            },
                            right: {
                                value: 'P',
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'O melhor jeito de aprender é...',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Sozinho',
                            letter: 'A',
                            value: 'N'
                        }, {
                            option: 'Com alguém ao meu lado me explicando tudo',
                            letter: 'B',
                            value: 'S'
                        }]
                    }]
                }
            }, {
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Mando bem em sacar o sentimento dos outros.',
                        image: _.find(files, file => file.filename === 'Parte_1_PE_Q11.png').fileUrl,
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
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Prefiro ficar em casa a ir numa festa.',
                        image: _.find(files, file => file.filename === 'Parte_1_PE_Q12.png').fileUrl,
                        alternativesType: 'boolean',
                        alternatives: [{
                            option: true,
                            value: 'I'
                        }, {
                            option: false,
                            value: 'E'
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Só dou uma ideia depois de saber que dá certo.',
                        image: _.find(files, file => file.filename === 'personalidade_N1_Q13.png').fileUrl,
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
                        text: 'Quando dois amigos meus estão discutindo, eu...',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Não me meto',
                            letter: 'A',
                            value: 'T'
                        }, {
                            option: 'Procuro ajudar',
                            letter: 'B',
                            value: 'F'
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Quando estou empolgado com alguma coisa, eu...',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Esqueço de todo o resto',
                            letter: 'A',
                            value: 'N'
                        }, {
                            option: 'Quero contar pra todo mundo',
                            letter: 'B',
                            value: 'S'
                        }]
                    }]
                }
            }, {
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Quando tem uma prova na escola, eu deixo pra estudar um dia antes.',
                        image: _.find(files, file => file.filename === 'Parte_1_PE_Q16.png').fileUrl,
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
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Não aguento gente que enrola pra dar uma resposta. Gosto de gente objetiva.',
                        image: _.find(files, file => file.filename === 'personalidade_N1_Q17.png').fileUrl,
                        values: {
                            left: {
                                value: 'F',
                            },
                            right: {
                                value: 'T',
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Curto conversar com gente que pensa como eu.',
                        image: _.find(files, file => file.filename === 'personalidade_N1_Q18.png').fileUrl,
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
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        text: 'Dizem que sou bom pra perceber detalhes, como, por exemplo, ver se mexeram nas minhas coisas ou achar um erro que ninguém viu.',
                        image: _.find(files, file => file.filename === 'Parte_1_PE_Q19.png').fileUrl,
                        alternativesType: 'boolean',
                        alternatives: [{
                            option: true,
                            value: 'S'
                        }, {
                            option: false,
                            value: 'N'
                        }]
                    }]
                }
            }, {
                contentFormat: 'scale',
                content: {
                    questions: [{
                        text: 'Tenho facilidade para me colocar no lugar dos outros.',
                        image: _.find(files, file => file.filename === 'personalidade_N1_Q20.png').fileUrl,
                        values: {
                            left: {
                                value: 'T',
                            },
                            right: {
                                value: 'F',
                            }
                        }
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Quando preciso de conselho, acho que só alguém que passou pela mesma situação pode me ajudar.',
                        alternativesType: 'image',
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q21_1.png').fileUrl,
                            letter: 'A',
                            value: 'S'
                        }, {
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q21_2.png').fileUrl,
                            letter: 'B',
                            value: 'N'
                        }, {
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q21_3.png').fileUrl,
                            letter: 'C',
                            value: 'S'
                        }, {
                            option: _.find(files, file => file.filename === 'personalidade_N1_Q21_4.png').fileUrl,
                            letter: 'D',
                            value: 'N'
                        }]
                    }]
                }
            }, {
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        text: 'Sou uma pessoa que...',
                        alternativesType: 'text',
                        alternatives: [{
                            option: 'Mostra o que sente',
                            letter: 'A',
                            value: 'E'
                        }, {
                            option: 'Esconde o que sente',
                            letter: 'B',
                            value: 'I'
                        }]
                    }]
                }
            }]
        })
    ]
);
