'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Criatividade",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Processo seletivo')._id,
            ],
            description: 'Se tem um perfil de profissional que o mercado de trabalho valoriza é o criativo. A criatividade é uma das habilidades mais importantes da humanidade. Sem ela, ainda estaríamos na idade da pedra. Mas, e você? Se acha criativo? Se a resposta for não, relaxa... Todos nós podemos desenvolver essa habilidade. Basta exercitar! Abra a sua cabeça, siga a aula e deixe a inspiração fluir!',
            estimatedTime: '7',
            image: _.find(files, file => file.filename === 'Aula_23.png').fileUrl,
            activities: [{
              name: 'De onde vêm as ideias?',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'De onde vêm as ideias?',
                  description: 'Seu cérebro pode ser treinado para ser mais criativo! E isso pode ser feito com um monte de atividades simples e divertidas. Se liga nas atitudes a seguir e indique se elas turbinam a criatividade ou não.',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'simpleQuiz',
              content: {
                  questions: [{
                      title: 'Show ou fiasco?',
                      text: 'Escrever suas ideias num caderninho.',
                      alternativesType: 'image',
                      feedbacks: [{
                          title: 'Boa!',
                          text: 'Ter um caderno de anotações para escrever suas ideias ajuda a desenvolver a criatividade.',
                          type: 'positive'
                      }, {
                          title: 'Errado!',
                          text: 'Ter um caderno de anotações para escrever suas ideias ajuda a desenvolver a criatividade.',
                          type: 'negative'
                      }],
                      alternatives: [{
                          option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1a.png').fileUrl,
                          letter: 'A'
                      }, {
                          option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1b.png').fileUrl,
                          letter: 'B'
                      }],
                      correctAnswer: 'A'
                  },{
                    title: 'Show ou fiasco?',
                    text: 'Ler e ouvir música.',
                    alternativesType: 'image',
                    feedbacks: [{
                        title: 'Legal!',
                        text: 'Isso amplia seu repertório.',
                        type: 'positive'
                    }, {
                        title: 'Mandou mal!',
                        text: 'Isso amplia seu repertório.',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1a.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1b.png').fileUrl,
                        letter: 'B'
                    }],
                    correctAnswer: 'A'
                  },{
                    title: 'Show ou fiasco?',
                    text: 'Só fazer atividades que têm a ver com seu trabalho ou rotina.',
                    alternativesType: 'image',
                    feedbacks: [{
                        title: 'Certíssimo!',
                        text: 'Ter outros tipos de atividades, como ir ao teatro ou fazer um curso de pintura, estimulam sua mente!',
                        type: 'positive'
                    }, {
                        title: 'Isso não!',
                        text: 'Ter outros tipos de atividades, como ir ao teatro ou fazer um curso de pintura, estimulam sua mente!',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1a.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1b.png').fileUrl,
                        letter: 'B'
                    }],
                    correctAnswer: 'B'

                  },{
                    title: 'Show ou fiasco?',
                    text: 'Imaginar que é uma pessoa totalmente diferente em algumas situações.',
                    alternativesType: 'image',
                    feedbacks: [{
                        title: ' Isso mesmo!',
                        text: 'Se colocar no lugar de outras pessoas faz você ver as situações por diferentes ângulos.',
                        type: 'positive'
                    }, {
                        title: 'Tá errado!',
                        text: 'Se colocar no lugar de outras pessoas faz você ver a situação por diferentes ângulos.',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1a.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1b.png').fileUrl,
                        letter: 'B'
                    }],
                    correctAnswer: 'A'
                  },{
                    title: 'Show ou fiasco?',
                    text: 'Ficar sempre na mesma rotina.',
                    alternativesType: 'image',
                    feedbacks: [{
                        title: 'Maravilha!',
                        text: 'Ficar na rotina é um veneno para sua criatividade.',
                        type: 'positive'
                    }, {
                        title: 'Nada disso!',
                        text: 'Ficar na rotina é um veneno para sua criatividade',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1a.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1b.png').fileUrl,
                        letter: 'B'
                    }],
                    correctAnswer: 'B'

                  },{
                    title: 'Show ou fiasco?',
                    text: 'Fazer algumas atividades do dia a dia com a mão esquerda, se você é destro, e vice-versa.',
                    alternativesType: 'image',
                    feedbacks: [{
                        title: 'Parabéns!',
                        text: 'Isso é um bom exercício.',
                        type: 'positive'
                    }, {
                        title: 'Fique ligado!',
                        text: 'Isso é um bom exercício.',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1a.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1b.png').fileUrl,
                        letter: 'B'
                    }],
                    correctAnswer: 'A'
                  },{
                    title: 'Show ou fiasco?',
                    text: 'Ver muitos filmes de ação e suspense.',
                    alternativesType: 'image',
                    feedbacks: [{
                        title: 'Parabéns!',
                        text: 'Esses são os melhores filmes para desenvolver a criatividade estratégica e a inovação.',
                        type: 'positive'
                    }, {
                        title: 'Pense melhor!',
                        text: 'Esses são os melhores filmes para desenvolver a criatividade estratégica e a inovação.',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1a.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1b.png').fileUrl,
                        letter: 'B'
                    }],
                    correctAnswer: 'A'
                  },{
                    title: 'Show ou fiasco?',
                    text: 'Dormir pouco para aproveitar mais o dia.',
                    alternativesType: 'image',
                    feedbacks: [{
                        title: 'Show!',
                        text: 'Ter uma boa noite de sono e respeitar os horários das refeições fazem sua mente funcionar melhor.',
                        type: 'positive'
                    }, {
                        title: 'Nunca!',
                        text: 'Ter uma boa noite de sono e respeitar os horários das refeições fazem sua mente funcionar melhor.',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1a.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula23_Criatividade_at1b.png').fileUrl,
                        letter: 'B'
                    }],
                    correctAnswer: 'B'
                  }]}
            },{
              name: 'Turbine sua criatividade.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Turbine sua criatividade.',
                  description: 'Alguns exercícios também são super eficientes para turbinar o cérebro e trazer mais criatividade para o seu dia a dia. Dê uma olhada nas atividades a seguir e mova a barra da escala de acordo com o seu comportamento.',
                  image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
              },
              contentFormat: 'scale',
              content: {
                  questions: [{
                      title: 'Turbine sua criatividade.',
                      text: 'Desenhar',
                      image: _.find(files, file => file.filename === 'Aula23_Criatividade_at02.png').fileUrl,
                      values: {
                          right: {
                              value: 'rigth',
                              feedback: {
                                  title: 'Que tal desenhar mais?',
                                  text: 'Isso estimula seu cérebro.',
                                  type: 'positive'
                              }
                          },
                          left: {
                              value: 'left',
                              feedback: {
                                  title: 'Boa!',
                                  text: 'Desenhar estimula seu cérebro!',
                                  type: 'positive'
                              }
                          }
                      },
                  },{
                    title: 'Turbine sua criatividade.',
                    text: 'Jogar videogame',
                    image: _.find(files, file => file.filename === 'Aula23_Criatividade_at02.png').fileUrl,
                    values: {
                        right: {
                            value: 'rigth',
                            feedback: {
                                title: 'Crie o hábito de jogar de vez em quando!',
                                text: 'É um bom exercício para o cérebro!',
                                type: 'positive'
                            }
                        },
                        left: {
                            value: 'left',
                            feedback: {
                                title: 'Legal!',
                                text: 'Sabia que esse é um bom exercício para o cérebro?',
                                type: 'positive'
                            }
                        }
                    },
                  },{
                    title: 'Turbine sua criatividade.',
                    text: 'Jogar jogos de tabuleiro',
                    image: _.find(files, file => file.filename === 'Aula23_Criatividade_at02.png').fileUrl,
                    values: {
                        right: {
                            value: 'rigth',
                            feedback: {
                                title: 'Dê uma chance!',
                                text: 'Além de divertidos, os jogos de tabuleiro colocam sua cuca pra funcionar! ',
                                type: 'positive'
                            }
                        },
                        left: {
                            value: 'left',
                            feedback: {
                                title: 'Parabéns!',
                                text: 'Além de divertidos, os jogos de tabuleiro colocam sua cuca pra funcionar! ',
                                type: 'positive'
                            }
                        }
                    },
                  },{
                    title: 'Turbine sua criatividade.',
                    text: 'Jogar jogos de interpretação, como RPG',
                    image: _.find(files, file => file.filename === 'Aula23_Criatividade_at02.png').fileUrl,
                    values: {
                        right: {
                            value: 'rigth',
                            feedback: {
                                title: 'Tente jogar mais!',
                                text: 'Esse tipo de jogo ativa sua mente!',
                                type: 'positive'
                            }
                        },
                        left: {
                            value: 'left',
                            feedback: {
                                title: 'Maravilha!',
                                text: 'Esse tipo de jogo ativa sua mente!',
                                type: 'positive'
                            }
                        }
                    },
                  },{
                    title: 'Turbine sua criatividade.',
                    text: 'Contar histórias de improviso',
                    image: _.find(files, file => file.filename === 'Aula23_Criatividade_at02.png').fileUrl,
                    values: {
                        right: {
                            value: 'rigth',
                            feedback: {
                                title: 'Mandou mal!',
                                text: 'Contar histórias de improviso faz nossa criatividade voar alto!',
                                type: 'positive'
                            }
                        },
                        left: {
                            value: 'left',
                            feedback: {
                                title: 'Mandou bem!',
                                text: 'Contar histórias de improviso faz nossa criatividade voar alto!',
                                type: 'positive'
                            }
                        }
                    },
                  },{
                    title: 'Turbine sua criatividade.',
                    text: 'Conhecer pessoas novas',
                    image: _.find(files, file => file.filename === 'Aula23_Criatividade_at02.png').fileUrl,
                    values: {
                        right: {
                            value: 'rigth',
                            feedback: {
                                title: 'Que pena..',
                                text: 'Sabia que ter contato com pessoas diferentes faz você ver o mundo de outras perspectivas?',
                                type: 'positive'
                            }
                        },
                        left: {
                            value: 'left',
                            feedback: {
                                title: 'Que bom!',
                                text: 'Ter contato com pessoas diferentes faz você ver o mundo de outras perspectivas.',
                                type: 'positive'
                            }
                        }
                    },
                  }
                ]}
            },{
              name: 'Eureka!',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Teste seus valores.',
                  description: 'A vida é cheia de desafios que precisam ser resolvidos todos os dias. Para algumas pessoas, isso é uma tremenda chatice. Para outras, é a oportunidade de fazer diferente e criar algo novo!',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'slides',
              content: {
                  slides: [{
                      image: _.find(files, file => file.filename === 'Aula23_Criatividade_at2.png').fileUrl,
                      title: 'Eureka!',
                      text: 'Quando o cientista Arquimedes (287 a.C -212 a.C) descobriu como resolver um complexo dilema apresentado pelo rei da sua época, gritou: Eureka! Esse termo passou a ser usado para as grandes descobertas. E diz aí… todo mundo tem que solucionar altas paradas todo dia, não é? O jeito de fazer isso é usando a criatividade! Pensar de forma criativa ajuda pessoas e empresas a reduzir custos, atender melhor os clientes, simplificar processos, aumentar a lucratividade, desenvolver novos produtos e muito mais! '
                  }, {
                      image: _.find(files, file => file.filename === 'Aula23_Criatividade_at3.png').fileUrl,
                      title: 'Explicando melhor...',
                      text: '<p>Para colocar a criatividade em prática, você tem que estar ligado no que cada coisa significa:</p><p>A criatividade tem a ver com novidade e inovação. Isso inclui criar algo do zero ou melhorar uma coisa que já existe.</p><p>Os problemas são situações que trazem algum tipo de desafio e é onde estão as oportunidades para usar a criatividade.</p>As soluções são as ideias escolhidas para resolver os problemas.'
                  },{
                    image: _.find(files, file => file.filename === 'Aula23_Criatividade_at4.png').fileUrl,
                    title: 'Solucionando problemas.',
                    text: '<p>Se você precisa solucionar um problema, tem que ficar esperto nesses 3 passos:</p><p>Identifique o problema: entenda o que está rolando. Pegue o máximo de informações sobre as causas do problema.</p><p>Encontre a solução: mergulhe nas informações, deixe a mente fluir e anote todas as ideias que podem solucionar o problema.</p>Implemente: faça uma seleção das melhores ideias. Monte um plano de ação, defina prazos e mão na massa! '
                  },{
                    image: _.find(files, file => file.filename === 'Aula23_Criatividade_at5.png').fileUrl,
                    title: 'Criatividade ou inovação?',
                    text: 'Muitos confundem criatividade com inovação. Elas não são a mesma coisa, mas andam juntas. Criatividade é pensar em coisas novas e ter ideias para solucionar um problema. Já a inovação é colocar essas ideias em prática. Ou seja, transformá-las em algo concreto que gere valor para a sociedade.'
                  }]
              }
            },{
              name: 'A solução do problema.',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'A solução do problema.',
                  description: 'Ao longo do tempo, inovações são criadas para resolver problemas e acabam fazendo parte da nossa vida! Topa fazer um exercício? Relacione cada solução apresentada a seguir ao problema que deu origem a ela.',
                  image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
              },
              contentFormat: 'relate',
              content: {
                questions: [{
                    title: 'A solução do problema.',
                    text: 'Relacione corretamente.',
                    drops: [{
                        number: 1,
                        image: _.find(files, file => file.filename === 'Aula23_Criatividade_at6d.png').fileUrl,
                    }, {
                        number: 2,
                        image: _.find(files, file => file.filename === 'Aula23_Criatividade_at6c.png').fileUrl,
                    }, {
                        number: 3,
                        image: _.find(files, file => file.filename === 'Aula23_Criatividade_at6a.png').fileUrl,
                    }, {
                        number: 4,
                        image: _.find(files, file => file.filename === 'Aula23_Criatividade_at6b.png').fileUrl,
                    }],
                    drags: [{
                        text: 'Falta de comunicação',
                        relatedTo: 1
                    }, {
                        text: 'Trânsito',
                        relatedTo: 2
                    }, {
                        text: 'Raios UV',
                        relatedTo: 3
                    }, {
                        text: 'Filas',
                        relatedTo: 4
                    }]
                }]
              }
            },{
              name: 'Treine sua mente.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Treine sua mente.',
                  description: 'Show! Você chegou até aqui e viu que a criatividade pode te ajudar em muita coisa. Pra terminar, topa exercitar um pouco o cérebro? Trouxemos dois exercícios simples, que você pode fazer já. Tá pronto?',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'slides',
              content: {
                  slides: [{
                      image: _.find(files, file => file.filename === 'Aula23_Criatividade_at7.png').fileUrl,
                      title: 'Treine sua mente.',
                      text: 'A repetição faz nosso cérebro ficar cansado. Para resolver esse problema e te ajudar a ter mais criatividade no dia a dia, você pode praticar um exercício simples: contar em ordem regressiva de 35 até 10. '
                  }, {
                      image: _.find(files, file => file.filename === 'Aula23_Criatividade_at8.png').fileUrl,
                      title: 'Treine sua mente.',
                      text: '<p>Pense nesta situação: sua mãe saiu, trancou a casa e… deixou você dentro, sem outra chave. A energia acabou, seu celular está descarregado e você tem uma entrevista que não pode perder! Tente achar algumas soluções criativas para se sair bem dessa!</p><p>Agora, solucione esse problema imaginando ser outra pessoa (alguém mais velho ou do sexo oposto...).</p>Faça esse tipo de exercício em outras situações e dê asas à sua criatividade!'
                  }]
              }
            }]//final do action
        }
      )
    ]
);
