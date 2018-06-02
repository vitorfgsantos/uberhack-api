'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Simulação de Entrevista",
            source: 'undefined',
            categories: [
                _.find(categories, category => category.name === 'Marketing Pessoal')._id,
            ],
            description: 'A entrevista está marcada! E agora? O que fazer? O que dizer? Calma… Nesta aula nós vamos simular uma entrevista e você vai poder responder as perguntas mais frequentes dessa etapa do processo. E aí? Tá preparado?  ',
            image: _.find(files, file => file.filename === 'background-lesson.png').fileUrl,
            activities: [{
                    name: 'Na ponta da língua',
                    description: undefined,
                    type: 'presentation',
                    presentation: {
                        title: 'Na ponta da língua',
                        description: 'Chegou a hora da entrevista! Vamos te preparar pra esse momento simulando perguntas reais de uma entrevista. Ouça as perguntas e reflita sobre quais seriam suas respostas. Esse é um bom exercício para se sair bem na hora H.',
                        image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
                    },
                    contentFormat: 'audio',
                    content: {
                        questions: [{
                            title: 'Me conte sobre você',
                            text: '<p>Olá! Eu sou a Lúcia, profissional de RH, e entrevisto muitos candidatos todos os dias! Vou te dar dicas sobre as principais perguntas pra te ajudar a ficar preparado.</p>',
                            image: _.find(files, file => file.filename === 'Aula14_simulac_Entrev_at2.png').fileUrl,
                            audio: {
                                fileUrl: 'files/stream?type=audios&filename=' + 'Simulacao-entrevista-napontadalingua_audio1.mp3',
                                type: 'audio/mpeg'
                            },
                            subtitles: {
                                fileUrl: _.find(files, file => file.filename === 'S-entrevista-napontadalingua_audio1.vtt').fileUrl,
                                label: 'Português'
                            },
                        }, {
                            title: 'Por que você saiu do emprego anterior?',
                            text: 'Clique e ouça:',
                            image: _.find(files, file => file.filename === 'Aula14_simulac_Entrev_at2.png').fileUrl,
                            audio: {
                                fileUrl: 'files/stream?type=audios&filename=' + 'Simulacao-entrevista-napontadalingua_audio2.mp3',
                                type: 'audio/mpeg'
                            },
                            subtitles: {
                                fileUrl: _.find(files, file => file.filename === 'S-entrevista-napontadalingua_audio2.vtt').fileUrl,
                                label: 'Português'
                            },
                        }, {
                            title: 'Por que você quer trabalhar aqui?',
                            text: 'Clique e ouça:',
                            image: _.find(files, file => file.filename === 'Aula14_simulac_Entrev_at2.png').fileUrl,
                            audio: {
                                fileUrl: 'files/stream?type=audios&filename=' + 'Simulacao-entrevista-napontadalingua_audio3.mp3',
                                type: 'audio/mpeg'
                            },
                            subtitles: {
                                fileUrl: _.find(files, file => file.filename === 'S-entrevista-napontadalingua_audio3.vtt').fileUrl,
                                label: 'Português'
                            },
                        }, {
                            title: 'Quais suas principais realizações na carreira até agora?',
                            text: 'Clique e ouça:',
                            image: _.find(files, file => file.filename === 'Aula14_simulac_Entrev_at2.png').fileUrl,
                            audio: {
                                fileUrl: 'files/stream?type=audios&filename=' + 'Simulacao-entrevista-napontadalingua_audio4.mp3',
                                type: 'audio/mpeg'
                            },
                            subtitles: {
                                fileUrl: _.find(files, file => file.filename === 'S-entrevista-napontadalingua_audio4.vtt').fileUrl,
                                label: 'Português'
                            },
                        }]
                    }
                }, {
                    name: 'Termômetro da Entrevista',
                    description: undefined,
                    type: 'presentation',
                    presentation: {
                        title: 'Termômetro da Entrevista',
                        description: 'A seguir vamos medir o que você imagina que pode te atrapalhar numa entrevista em relação a nervosismo, uso de gírias, tempo de resposta e altura da voz. Joga a real que a gente vai te dar dicas pra melhorar o que precisa ser melhorado. ',
                        image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
                    },
                    contentFormat: 'scale',
                    content: {
                        questions: [{
                            title: 'Nervosismo',
                            text: 'De 0 a 10, marque na barra quanto que o nervosismo pode te atrapalhar numa entrevista.',
                            image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at2.png').fileUrl,
                            values: {
                                right: {
                                    value: 'rigth',
                                    feedback: {
                                        title: 'Muito bem!',
                                        text: 'Puxa, você acha que vai ficar nervosão, né? Normal. Continue seguindo a aula e treinando.',
                                        type: 'positive'
                                    }
                                },
                                left: {
                                    value: 'left',
                                    feedback: {
                                        title: 'Muito bem!',
                                        text: 'Que bom! Você ficaria numa boa e levaria a entrevista com tranquilidade. Ponto pra você!',
                                        type: 'positive'
                                    }
                                }
                            },
                        }, {
                            title: 'Gírias e vícios de linguagem',
                            text: 'De 0 a 10, marque na barra o quanto você acha que o uso de gírias e vícios de linguagem podem te atrapalhar.',
                            image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at3.png').fileUrl,
                            values: {
                                right: {
                                    value: 'rigth',
                                    feedback: {
                                        title: 'Muito bem!',
                                        text: 'Puxa, numa entrevista esse tipo de linguagem não cai bem. Que tal treinar falando menos gírias?',
                                        type: 'positive'
                                    }
                                },
                                left: {
                                    value: 'left',
                                    feedback: {
                                        title: 'Muito bem!',
                                        text: 'Perfeito! Numa entrevista, é bom se controlar nas gírias e nos vícios de linguagem.',
                                        type: 'positive'
                                    }
                                }
                            },
                        }, {
                            title: 'Tempo de resposta',
                            text: 'Marque na barra qual a velocidade que você imagina que levaria para responder as perguntas numa entrevista.',
                            image: _.find(files, file => file.filename === 'Aula11_Atividade03_1.png').fileUrl,
                            values: {
                                right: {
                                    value: 'rigth',
                                    feedback: {
                                        title: 'Muito bem!',
                                        text: 'Nada melhor do que conhecer uma empresa pelas pessoas que trabalham nela. Utilize mais sua rede para isso!',
                                        type: 'positive'
                                    }
                                },
                                left: {
                                    value: 'left',
                                    feedback: {
                                        title: 'Muito bem!',
                                        text: 'Não! Você acha que o entrevistador tem todo tempo do mundo? Um minuto é o ideal para cada resposta. ',
                                        type: 'positive'
                                    }
                                }
                            },

                        }, {
                            title: 'Volume da sua voz',
                            text: 'De 0 a 10, marque na barra qual o volume de voz que você imagina quando responder as perguntas numa entrevista.',
                            image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at5.png').fileUrl,
                            values: {
                                right: {
                                    value: 'rigth',
                                    feedback: {
                                        title: 'Muito bem!',
                                        text: ' Você vai ter que abaixar um pouco o volume para falar com o entrevistador. Ele está na sua frente, não precisa gritar.',
                                        type: 'positive'
                                    }
                                },
                                left: {
                                    value: 'left',
                                    feedback: {
                                        title: 'Muito bem!',
                                        text: 'Isso mesmo. Falar alto numa entrevista não é legal. Mas não fale tão baixo também, tá? O entrevistador precisa te ouvir!',
                                        type: 'positive'
                                    }
                                }
                            },
                        }]
                    }
                },{
                    name: 'Conta mais!',
                    description: undefined,
                    type: 'interaction',
                    presentation: {
                        title: 'Na ponta da língua',
                        description: 'Quais os maiores desafios ou fracassos que você já enfrentou?',
                        image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
                    },
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            title: 'Conta mais!',
                            text: 'Quais os maiores desafios ou fracassos que você já enfrentou?',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Muito bem! Ser sincero e dizer o que fez para melhorar mostram que você é humilde e que aprendeu com os erros.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Foi mal! Ser pretensioso ou mostrar que não sabe lidar com pessoas, não pegam bem. ',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'Nenhum! Nada é difícil pra mim e tudo o que eu faço é um sucesso!',
                                letter: 'A'
                            }, {
                                option: 'Uma vez, atrasei na entrega de um trabalho. Mas aprendi a fazer cronogramas e isso nunca mais aconteceu.',
                                letter: 'B'
                            }, {
                                option: 'Já briguei com uma colega e até hoje não olho na cara dela.',
                                letter: 'C'
                            }],
                            correctAnswer: 'B'


                        }, {
                            title: 'Conta mais!',
                            text: 'Quais são seus pontos fortes?',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Isso mesmo! Tente falar das suas qualidades, mas sempre cite exemplos reais que comprovem o que você diz.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Não faça tantos elogios a você mesmo. Pense nos seus pontos fortes que têm a ver com a vaga e dê alguns exemplos dessas qualidades.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'Gosto de me comunicar com as pessoas e atender bem. No meu emprego anterior, alguns clientes só compravam comigo!',
                                letter: 'A'
                            }, {
                                option: 'Ah, tenho vários! São tantos que eu nem lembro!',
                                letter: 'B'
                            }, {
                                option: 'Sou proativo, inteligente, esperto, talentoso, profissional.',
                                letter: 'C'
                            }],
                            correctAnswer: 'A'

                        }, {
                            title: 'Conta mais!',
                            text: 'Quais são seus pontos a desenvolver?',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Boa! Você assumiu uma fraqueza e disse o que está fazendo para melhorar. Isso pega super bem!',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Não disfarce tentando dizer suas qualidades e nem seja arrogante.  O que o  entrevistador quer saber é o que você faz para melhorar. ',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'Não tenho. Eu me acho perfeito!',
                                letter: 'A'
                            }, {
                                option: 'Meu defeito é querer fazer sempre tudo certo!',
                                letter: 'B'
                            }, {
                                option: 'Tenho um pouco de dificuldade em falar em público, mas estou treinando todo dia!',
                                letter: 'C'
                            }],
                            correctAnswer: 'C'

                        }, {
                            title: 'Conta mais!',
                            text: 'Quais são seus planos para os próximos anos?',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Bacana! Dizer que tem planos de permanecer na empresa mostra seu interesse em trabalhar!',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Demonstrar que você muda de opinião o tempo todo ou que quer o emprego só para crescer na empresa não é legal!',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'Ah, sei lá! Cada dia eu quero uma coisa.',
                                letter: 'A'
                            }, {
                                option: 'Quero me manter empregado em uma boa empresa e terminar a faculdade.',
                                letter: 'B'
                            }, {
                                option: 'Quero ser promovido a gerente e virar logo diretor!',
                                letter: 'C'
                            }],
                            correctAnswer: 'B'
                        }, {
                            title: 'Conta mais!',
                            text: 'Qual é a sua pretensão salarial?',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Isso! É legal estar sempre aberto a uma proposta. Às vezes o salário é mais baixo, mas os benefícios compensam!',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Nada disso.  Pedir muita grana logo de cara ou ficar fechado em um valor pode te tirar do processo seletivo. Diga uma faixa de salário e ouça o que a empresa tem a oferecer!',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'Entre 2 e 3 salários mínimos. Mas estou aberto a negociações.',
                                letter: 'A'
                            }, {
                                option: 'Três vezes mais do que eu ganhava na outra empresa.',
                                letter: 'B'
                            }, {
                                option: 'Não aceito menos do que 3 salários mínimos.',
                                letter: 'C'
                            }],
                            correctAnswer: 'A'

                        }, {
                            title: 'Conta mais!',
                            text: 'Porque eu deveria contratar você?',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Certíssimo! Mostrar como você pode ajudar a empresa a alcançar seus objetivos é uma ótima resposta.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Dizer isso não é uma boa! Pense numa resposta que mostre como você pode contribuir com a empresa.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'Porque tô precisando muito desse trampo!',
                                letter: 'A'
                            }, {
                                option: 'Porque sou o melhor.',
                                letter: 'B'
                            }, {
                                option: 'Porque, com minha experiência e vontade de melhorar, posso contribuir muito.',
                                letter: 'C'
                            }],
                            correctAnswer: 'C'

                        }, {
                            title: 'Conta mais!',
                            text: 'Porque eu deveria contratar você?',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'É isso aí! Fazer perguntas sobre a vaga, como principais desafios e perspectivas de carreira, pega bem.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Bola fora! Que tal perguntar algo sobre o departamento que está contratando?',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'Quando eu começo?',
                                letter: 'A'
                            }, {
                                option: 'Se eu for contratado, farei parte de uma equipe de quantas pessoas?',
                                letter: 'B'
                            }, {
                                option: 'Esta empresa faz o que mesmo?',
                                letter: 'C'
                            }],
                            correctAnswer: 'B'

                        }]
                    }
                }, {
                    name: 'Conta mais!',
                    description: undefined,
                    type: 'interaction',
                    presentation: {
                        title: 'Na ponta da língua',
                        description: '<p>Finalmente a entrevista está acabando! Você sabia que algumas atitudes podem ser decisivas para você ganhar a vaga ou voltar a procurar emprego?</p>Arraste o texto até a imagem correta e veja se deu alguma bola fora.',
                        image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
                    },
                    contentFormat: 'simpleRelate',
                    content: {
                        questions: [{
                            title: 'Vai ou racha',
                            text: 'Arraste o texto até a imagem correta e veja se deu alguma bola fora.',
                            draggableText: 'Inventei coisas sobre mim',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at6a.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at6b.png').fileUrl
                            }],
                            correctAnswer: 2,
                        }, {
                            title: 'Vai ou racha',
                            text: 'Arraste o texto até a imagem correta e veja se deu alguma bola fora.',
                            draggableText: 'Chamei o entrevistador pelo nome',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at6a.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at6b.png').fileUrl
                            }],
                            correctAnswer: 1,

                        }, {
                            title: 'Vai ou racha',
                            text: 'Você é o vendedor de uma loja de eletrônicos e vai ter que se virar para não perder o cliente! Valendo!.',
                            draggableText: 'Repeti a frase “Quero um novo desafio"',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at6a.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at6b.png').fileUrl
                            }],
                            correctAnswer: 2,
                        }, {
                            title: 'Vai ou racha',
                            text: 'Arraste o texto até a imagem correta e veja se deu alguma bola fora.',
                            draggableText: 'Fui bem sincero e espontâneo',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at6a.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at6b.png').fileUrl
                            }],
                            correctAnswer: 1,
                        }, {
                            title: 'Vai ou racha',
                            text: 'Arraste o texto até a imagem correta e veja se deu alguma bola fora.',
                            draggableText: 'Fiz um desabafo com o entrevistador',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at6a.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at6b.png').fileUrl
                            }],
                            correctAnswer: 2,
                        }, {
                            title: 'Vai ou racha',
                            text: 'Arraste o texto até a imagem correta e veja se deu alguma bola fora.',
                            draggableText: 'Ao me despedir, agradeci a oportunidade',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at6a.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at6b.png').fileUrl
                            }],
                            correctAnswer: 1,
                        }, {
                            title: 'Vai ou racha',
                            text: 'Arraste o texto até a imagem correta e veja se deu alguma bola fora.',
                            draggableText: 'Decorei umas falas para dizer',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at6a.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula14_Sim_Entrevista_at6b.png').fileUrl
                            }],
                            correctAnswer: 2,
                        }]
                    }
                }, {
                    name: 'Cá entre nós',
                    description: undefined,
                    type: 'presentation',
                    presentation: {
                        title: 'Na ponta da língua',
                        description: 'Legal! Você chegou até aqui e agora já sabe as principais perguntas que precisa responder em uma entrevista. Mas, antes de encerrar a aula, tem alguém querendo te dar um último conselho…',
                        image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
                    },
                    contentFormat: 'audio',
                    content: {
                        questions: [{
                              title: 'Me conte sobre você',
                              text: 'Clique e ouça: ',
                              image: _.find(files, file => file.filename === 'Aula14_simulac_Entrev_at2.png').fileUrl,
                              audio: {
                                  fileUrl: 'files/stream?type=audios&filename=' + 'Simulacao-entrevista-caentrenos.mp3',
                                  type: 'audio/mpeg'
                              },
                              subtitles: {
                                  fileUrl: _.find(files, file => file.filename === 'S-entrevista-caentrenos.vtt').fileUrl,
                                  label: 'Português'
                              },

                        }]
                    }

                }] //final do action
        })
    ]
);
