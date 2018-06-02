'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Otimização",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Processo seletivo')._id,
            ],
            description: 'Fazer escolhas faz parte do nosso dia a dia e todo mundo precisa estar preparado para isso. Algumas são simples, outras envolvem questões complexas, principalmente na vida profissional. Hoje você vai descobrir os principais fatores que influenciam a tomada de decisão e conhecer uma ferramenta que ajuda muito as empresas nesse processo: a otimização. Vamos lá?',
            estimatedTime: '7',
            image: _.find(files, file => file.filename === 'Aula_25.png').fileUrl,
            activities: [{
              name: 'A escolha é sua.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'A escolha é sua.',
                  description: 'Será que o Pyong é um cara decidido ou indeciso? Bora ver como ele faz suas escolhas?',
                  image: _.find(files, file => file.filename === 'capa_aparencia.png').fileUrl
              },
              contentFormat: 'video',
              content: {
                  title: 'A escolha é sua.',
                  text: 'Será que o Pyong é um cara decidido ou indeciso? Bora ver como ele faz suas escolhas?',
                  video: {
                      fileUrl: 'files/stream?type=videos&filename=' + '4-OTIMIZACAO_online.mp4',
                      type: 'video/mp4'
                  },
              }
            },{
              name: 'Indeciso, eu? ',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Indeciso, eu? ',
                  description: 'Na vida, todo dia a gente tem que tomar decisões. Que roupa colocar, se vai pra balada ou fica em casa, se pede suco ou refri… Diz aí, que decisão você tomaria em cada situação a seguir.',
                  image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
              },
              // Fazer e refatorar todo o scale
              contentFormat: 'scale',
              content: {
                  questions: [{
                    title: 'Indeciso, eu?',
                    text: 'Seu chefe não está na loja, mas te deu carta branca para negociar alguns valores. Chega um cliente na loja e pergunta se você pode dar um descontinho  num produto. Você….',
                    image: _.find(files, file => file.filename === 'Aula25_otimizacao_at1athi.png').fileUrl,
                    values: {
                        right: {
                            value: 'rigth',
                            feedback: {
                                title: 'Mandou bem!',
                                text: 'Você tomou uma decisão e isso é muito importante, tanto na sua vida pessoal como profissional. Lembre-se sempre que uma decisão envolve perdas e ganhos e você deve estar preparado para assumi-los.',
                                type: 'positive'
                            }
                        },
                        left: {
                            value: 'left',
                            feedback: {
                                title: 'Mandou bem!',
                                text: 'Você tomou uma decisão e isso é muito importante, tanto na sua vida pessoal como profissional. Lembre-se sempre que uma decisão envolve perdas e ganhos e você deve estar preparado para assumi-los.',
                                type: 'positive'
                            }
                        },
                        center: {
                            value: 'center',
                            feedback: {
                                title: 'Foi mal!',
                                text: 'Você ficou indeciso e preferiu não tomar nenhuma decisão. Mas, lembre-se que tanto na vida pessoal como profissional, é muito importante estar preparado para tomar decisões e assumir suas consequências.',
                                type: 'positive'
                            }
                        }
                    },

                  },{
                    title: 'Indeciso, eu?',
                    text: 'Seus amigos te chamaram para viajar para a praia, mas a moça do tempo disse que vai chover muito por lá. O que você faz?',
                    image: _.find(files, file => file.filename === 'Aula25_otimizacao_at1bthi.png').fileUrl,
                    values: {
                        right: {
                            value: 'rigth',
                            feedback: {
                                title: 'Parabéns!',
                                text: 'Você tomou uma decisão! Seja  nas pequenas ações cotidianas ou no trampo, o segredo é sempre entender a situação, saber todas as questões envolvidas e considerar que dificilmente você poderá voltar atrás em uma decisão.',
                                type: 'positive'
                            }
                        },
                        left: {
                            value: 'left',
                            feedback: {
                                title: 'Parabéns!',
                                text: 'Você tomou uma decisão! Seja  nas pequenas ações cotidianas ou no trampo, o segredo é sempre entender a situação, saber todas as questões envolvidas e considerar que dificilmente você poderá voltar atrás em uma decisão.',
                                type: 'positive'
                            }
                        },
                        center: {
                            value: 'center',
                            feedback: {
                                title: 'Que pena…',
                                text: ' Você preferiu não tomar uma decisão. Não seria melhor avaliar a situação, entender tudo que está envolvido e escolher o melhor caminho, no lugar de esperar que alguma coisa ou alguém decida por você? ',
                                type: 'positive'
                            }
                        }
                    },

                  },{
                    title: 'Indeciso, eu?',
                    text: 'Seu chefe pediu para você escolher o novo serviço de entrega da empresa. Um é mais caro, mas é mais pontual. O outro é mais barato, mas às vezes atrasa. Qual a sua decisão?',
                    image: _.find(files, file => file.filename === 'Aula25_otimizacao_at1cthi.png').fileUrl,
                    values: {
                        right: {
                            value: 'rigth',
                            feedback: {
                                title: 'Show!!',
                                text: 'Você foi decidido! Mas, lembre-se de avaliar bem todos os pontos antes de tomar uma decisão. Nem sempre o produto mais caro é melhor e nem sempre o mais barato é uma boa escolha.',
                                type: 'positive'
                            }
                        },
                        left: {
                            value: 'left',
                            feedback: {
                                title: 'Show!!',
                                text: 'Você foi decidido! Mas, lembre-se de avaliar bem todos os pontos antes de tomar uma decisão. Nem sempre o produto mais caro é melhor e nem sempre o mais barato é uma boa escolha.',
                                type: 'positive'
                            }
                        },
                        center: {
                            value: 'center',
                            feedback: {
                                title: 'Mandou mal!',
                                text: 'Nesse caso, você teria que tomar uma decisão! Comece avaliando os prós e contras de cada serviço. Isso vai ajudá-lo a optar pelo melhor.',
                                type: 'positive'
                            }
                        }
                    },
                  },{
                    title: 'Indeciso, eu?',
                    text: 'Você foi numa sorveteria nova! Seu sorvete preferido é o de flocos, mas o atendente disse que a especialidade da casa é o de chocolate. O que você faz?',
                    image: _.find(files, file => file.filename === 'Aula25_otimizacao_at1dthi.png').fileUrl,
                    values: {
                        right: {
                            value: 'rigth',
                            feedback: {
                                title: 'Maravilha!!',
                                text: 'Você mostrou que é decidido até nas ações cotidianas! Continue assim!',
                                type: 'positive'
                            }
                        },
                        left: {
                            value: 'left',
                            feedback: {
                                title: 'Maravilha!!',
                                text: 'Você mostrou que é decidido até nas ações cotidianas! Continue assim!',
                                type: 'positive'
                            }
                        },
                        center: {
                            value: 'Pense melhor.',
                            feedback: {
                                title: 'Maravilha!!',
                                text: 'Que tal aproveitar as pequenas ações cotidianas e treinar para tomar decisões? Isso vai te ajudar na vida profissional.',
                                type: 'intermediate'
                            }
                        }
                    },

                  },{
                    title: 'Indeciso, eu?',
                    text: 'Você tem que reservar uma sala para a reunião da diretoria. A sala 1 é maior, mas não tem janela. A sala 2 é pequena, mas tem uma vista maneira. E aí?',
                    image: _.find(files, file => file.filename === 'Aula25_otimizacao_at1ethi.png').fileUrl,
                    values: {
                        right: {
                            value: 'rigth',
                            feedback: {
                                title: 'Isso mesmo!',
                                text: 'Tomar decisões é com você mesmo! Só não se esqueça de analisar bem todos os fatores que envolvem a sua decisão.',
                                type: 'positive'
                            }
                        },
                        left: {
                            value: 'left',
                            feedback: {
                                title: 'Isso mesmo!',
                                text: 'Tomar decisões é com você mesmo! Só não se esqueça de analisar bem todos os fatores que envolvem a sua decisão.',
                                type: 'positive'
                            }
                        },
                        center: {
                            value: 'Pense melhor.',
                            feedback: {
                                title: 'Não foi uma boa resposta.',
                                text: 'Que tal aproveitar as pequenas ações cotidianas e treinar para tomar decisões? Isso vai te ajudar na vida profissional.',
                                type: 'intermediate'
                            }
                        }
                    },
                  }]}
            },{
              name: 'Tá decidido!',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'De onde vêm as ideias?',
                  description: 'Para tomar uma decisão, primeiro você precisa saber qual é o problema. Depois, analisá-lo, identificar os riscos e ver os indicadores, que sinalizam se você está no caminho certo.. Em qual etapa cada situação a seguir se enquadra?',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'multipleQuiz',
              content: {
              questions: [{
                  title: 'Tá decidido!',
                  text: 'O Marcelo trabalha em um comércio eletrônico e descobriu que muitos clientes estavam recebendo os pedidos com atraso.',
                  alternativesType: 'text',
                  feedbacks: [{
                      title: 'Acertou! ',
                      text: 'O problema é o resultado de algo que não está indo bem.',
                      type: 'positive'
                  }, {
                      title: 'Errou!',
                      text: 'O resultado de algo que não está indo bem é um problema..',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: 'Problema',
                      letter: 'A'
                  }, {
                      option: 'Decisão',
                      letter: 'B'
                  }],
                  correctAnswer: 'A'
                },{
                  title: 'Tá decidido!',
                  text: 'Quando foi ao estoque, Marcelo viu que estava tudo muito bagunçado porque os produtos chegavam de todos os fornecedores no mesmo dia.',
                  alternativesType: 'text',
                  feedbacks: [{
                      title: 'Muito bem!',
                      text: 'Entender por que o problema está acontecendo é uma análise. É baseada nela que uma decisão é tomada.',
                      type: 'positive'
                  }, {
                      title: 'Nada disso.',
                      text: 'Entender por que o problema está acontecendo é uma análise. É baseada nela que uma decisão é tomada.',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: 'Riscos',
                      letter: 'A'
                  }, {
                      option: 'Análise',
                      letter: 'B'
                  }],
                  correctAnswer: 'B'
                },{
                  title: 'Tá decidido!',
                  text: 'Marcelo, então, pediu que cada fornecedor fizesse a entrega em um dia da semana para o pessoal do estoque  se organizar.',
                  alternativesType: 'text',
                  feedbacks: [{
                      title: 'Isso mesmo!',
                      text: 'Escolher entre algumas alternativas e optar pela que melhor resolve o problema é uma decisão.',
                      type: 'positive'
                  }, {
                      title: 'Não! ',
                      text: 'Escolher entre algumas alternativas e optar pela que melhor resolve o problema é uma decisão.',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: 'Indicador',
                      letter: 'A'
                  }, {
                      option: 'Decisão',
                      letter: 'B'
                  }],
                  correctAnswer: 'B'

                },{
                  title: 'Tá decidido!',
                  text: 'Alguns fornecedores não aceitaram e foram substituídos.',
                  alternativesType: 'text',
                  feedbacks: [{
                      title: 'Mandou bem!',
                      text: 'Algumas situações incertas podem ocorrer no meio de caminho e afetar a solução final. Chamamos isso de risco.',
                      type: 'positive'
                  }, {
                      title: 'Mandou mal!',
                      text: 'Chamamos de riscos algumas situações incertas que podem ocorrer no meio de caminho e afetar a solução final. ',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: 'Riscos',
                      letter: 'A'
                  }, {
                      option: 'Análise',
                      letter: 'B'
                  }],
                  correctAnswer: 'A'
                },{
                  title: 'Tá decidido!',
                  text: 'Na semana seguinte, Marcelo viu que o número de reclamações  por atraso havia diminuído 80%.',
                  alternativesType: 'text',
                  feedbacks: [{
                      title: 'Show!',
                      text: 'Os indícios de que algo deu certo ou errado são chamados de indicadores.',
                      type: 'positive'
                  }, {
                      title: 'Puxa… ',
                      text: 'Os indícios de que algo deu certo ou errado são chamados de indicadores.',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: 'Indicador',
                      letter: 'A'
                  }, {
                      option: 'Problema',
                      letter: 'B'
                  }],
                  correctAnswer: 'A'
                }]}
            },{
              name: 'Otimizar. Que parada é essa?',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Otimizar. Que parada é essa?',
                  description: 'Quando não existem soluções tão simples para um problema, entra em cena uma técnica muito utilizada pelas empresas: a otimização!',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'map',
              content: {
                title: 'Otimizar. Que parada é essa?',
                text: 'Vamos acompanhar a Carol por algumas áreas da empresa e ver como ocorreu seu processo de otimização. Clique nas etapas e descubra!',
                background: _.find(files, file => file.filename === 'Aula25_otimizacao_at4a.png').fileUrl,
                baseResolution:{
                    width: 1080,
                    height: 1020
                },
                mapping: [{
                    coordinates: '127,85,79,150,70,243,101,300,168,337,283,321,317,267,373,177,243,67',
                    shape: 'poly',
                    tickPosition: {
                        x: 123,
                        y: 124
                    },
                    feedback: {
                        title: '',
                        text: 'Carol viu que está rolando um grande desperdício com impressões e cópias. Então, foi até a sala de cópias  e conversou com as pessoas que usam a máquina para entender como, o que e com que frequência elas imprimem.',
                        image: _.find(files, file => file.filename === 'Aula25_otimizacao_at4b.png').fileUrl
                    }
                },{
                    coordinates: "776,86,741,178,756,273,786,333,836,356,924,360,987,336,1017,261,1026,196,982,91,876,48",
                    shape: 'poly',
                    tickPosition: {
                        x: 806,
                        y: 116
                    },
                    feedback: {
                        title: '',
                        text: 'Carol voltou para a sala de administração e começou a anotar ideias de como evitar o desperdício. Ela se perguntou: existe um jeito mais eficiente de utilizar os equipamentos? Dá para fazer diferente sem prejudicar a empresa?',
                        image: _.find(files, file => file.filename === 'Aula25_otimizacao_at4c.png').fileUrl,
                    }
                },{
                  coordinates: "129,618,55,676,51,735,51,803,90,893,213,902,284,860,323,775,305,714,252,626",
                  shape: 'poly',
                  tickPosition: {
                      x: 103,
                      y: 687
                  },
                  feedback: {
                      title: '',
                      text: 'Chegou o grande dia de apresentar todas as sugestões que foram dadas. A Carol precisa do apoio dos colegas para que as ideias sejam colocadas em prática. E, para que ninguém tenha dúvidas, ela chamou todos para uma reunião e explicou tudo sobre os novos processos!',
                      image: _.find(files, file => file.filename === 'Aula25_otimizacao_at4d.png').fileUrl,
                  }

                },{
                  coordinates: '856,646,796,678,723,730,695,823,826,916,928,928,1003,883,1010,735,963,669',
                  shape: 'poly',
                  tickPosition: {
                      x: 820,
                      y: 716
                  },
                  feedback: {
                      title: '',
                      text: 'Depois, foi a vez de monitorar! Carol passou a ir sempre na expedição para ver se o desperdício de materiais diminuiu! Assim, ela conseguiu saber se tem algum ponto do processo que pode ser melhorado!',
                      image: _.find(files, file => file.filename === 'Aula25_otimizacao_at4e.png').fileUrl
                  }
                }]}

            },{
              name: 'Otimização em ação!',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Otimização em ação!',
                  description: 'Colocar seu processo de otimização no papel te ajuda muito a tomar decisões. Isso se chama plano de ação! Quer ver como funciona?',
                  image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
              },
              contentFormat: 'add',
              content: {
              questions: [{
                  title: 'Otimização em ação!',
                  text: 'Uma empresa detectou que havia muito desperdício com energia em todos os departamentos. Arraste os itens para os campos corretos no plano de ação da empresa.',
                  background: _.find(files, file => file.filename === 'Aula25_otimizacao_at7a.png').fileUrl,
                  baseResolution: {
                      width: 1080,
                      height: 860
                  },
                  feedbacks: [{
                      title: 'Muito bem!',
                      text: 'A empresa tinha como objetivo diminuir o desperdício. Então, tomou a decisão de economizar, mas existe o risco dos funcionários não aderirem.',
                      type: 'positive'
                  }, {
                      title: 'Quase lá!',
                      text: 'A empresa tinha como objetivo diminuir o desperdício. Então, tomou a decisão de economizar, mas existe o risco dos funcionários não aderirem.',
                      type: 'intermediate'
                  }, {
                      title: 'Ooops!',
                      text: 'A empresa tinha como objetivo diminuir o desperdício. Então, tomou a decisão de economizar, mas existe o risco dos funcionários não aderirem.',
                      type: 'negative'
                  }],
                  layers: [{
                      number: 1,
                      image: _.find(files, file => file.filename === 'Aula25_otimizacao_at7b.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'aula25_otimizacaothiago3.png').fileUrl,
                      category: 'B',
                      tickPosition: {
                          x: 347,
                          y: 496
                      }
                  }, {
                      number: 2,
                      image: _.find(files, file => file.filename === 'Aula25_otimizacao_at7c.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'aula25_otimizacaothiago2.png').fileUrl,
                      category: 'B',
                      tickPosition: {
                          x: 775,
                          y: 559
                      }
                  }, {
                      number: 3,
                      image: _.find(files, file => file.filename === 'Aula25_otimizacao_at7d.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'aula25_otimizacaothiago1.png').fileUrl,
                      category: 'A',
                      tickPosition: {
                          x: 347,
                          y: 496
                      }
                  }, {
                      number: 4,
                      category: 'A',
                      image: _.find(files, file => file.filename === 'Aula25_otimizacao_at7f.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'aula25_otimizacaothiago4.png').fileUrl,
                      tickPosition: {
                          x: 775,
                          y: 559
                      }
                  }],
                  correctLayers: [3, 1]
              },{
                title: 'Otimização em ação!',
                text: 'Continue completando o plano de ação da empresa.',
                background: _.find(files, file => file.filename === 'Aula25_otimizacao_at8a.png').fileUrl,
                baseResolution: {
                    width: 1080,
                    height: 860
                },
                feedbacks: [{
                    title: 'Muito bem!',
                    text: 'A empresa tinha como objetivo diminuir o desperdício. Então, tomou a decisão de economizar, mas existe o risco dos funcionários não aderirem.',
                    type: 'positive'
                }, {
                    title: 'Quase lá!',
                    text: 'A empresa tinha como objetivo diminuir o desperdício. Então, tomou a decisão de economizar, mas existe o risco dos funcionários não aderirem.',
                    type: 'intermediate'
                }, {
                    title: 'Ooops!',
                    text: 'A empresa tinha como objetivo diminuir o desperdício. Então, tomou a decisão de economizar, mas existe o risco dos funcionários não aderirem.',
                    type: 'negative'
                }],
                layers: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula25_otimizacao_at8b.png').fileUrl,
                    icon: _.find(files, file => file.filename === 'Aula25_otimizacao_at8i.png').fileUrl,
                    category: 'B',
                    tickPosition: {
                        x: 347,
                        y: 496
                    }
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula25_otimizacao_at8c.png').fileUrl,
                    icon: _.find(files, file => file.filename === 'Aula25_otimizacao_at8h.png').fileUrl,
                    category: 'B',
                    tickPosition: {
                        x: 775,
                        y: 559
                    }
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula25_otimizacao_at8d.png').fileUrl,
                    icon: _.find(files, file => file.filename === 'Aula25_otimizacao_at8g.png').fileUrl,
                    category: 'A',
                    tickPosition: {
                        x: 347,
                        y: 496
                    }
                }, {
                    number: 4,
                    category: 'A',
                    image: _.find(files, file => file.filename === 'Aula25_otimizacao_at8e.png').fileUrl,
                    icon: _.find(files, file => file.filename === 'Aula25_otimizacao_at8f.png').fileUrl,
                    tickPosition: {
                        x: 775,
                        y: 559
                    }
                }],
                correctLayers: [3, 1]

              }]}
            }]//final do action
          })
    ]
  );
