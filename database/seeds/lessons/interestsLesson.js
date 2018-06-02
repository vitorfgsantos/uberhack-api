'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
      new Lesson({
        name: "Interesses",
        source: undefined,
        categories: [
            _.find(categories, category => category.name === 'Busca pelo emprego')._id,
        ],
        description: 'Você se interessa por tecnologia ou curte mais agricultura? Se identifica mais com pequenas ou com grandes empresas? Existem muitos tipos de organizações e trabalhar em uma que tem a ver com os seus interesses faz toda a diferença. Vamos conhecer melhor cada uma delas?',
        estimatedTime: '5',
        image: _.find(files, file => file.filename === 'Aula_09.png').fileUrl,
        activities: [{
            name: 'O bê-a-bá das empresas',
            description: undefined,
            type: 'presentation',
            presentation: {
                title: 'O bê-a-bá das empresas',
                description: 'Empresas não são bichos de sete cabeças. :) Vamos te colocar por dentro dos detalhes para você saber escolher certinho onde trilhar a sua carreira.',
                image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
            },
            contentFormat: 'slides',
            content: {
                slides: [{
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at1.png').fileUrl,
                    title: 'O que é uma empresa?',
                    text: '<p>É uma organização, um grupo de pessoas que se junta para criar produtos ou serviços a fim de atender a alguma necessidade da sociedade.</p>'
                }, {
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at2.png').fileUrl,
                    title: 'Empresas podem gerar lucro ou não',
                    text: 'O que é lucro? É o ganho (dinheiro) que a empresa terá com sua atividade. Existem organizações em que o principal objetivo não é lucrar/ganhar dinheiro. As organizações não governamentais (ONGs), por exemplo.'
                }, {
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at3.png').fileUrl,
                    title: 'Tem de vários tamanhos',
                    text: '<p>Além disso, elas variam de tamanho dependendo do número de funcionários que elas têm e do faturamento bruto anual.  Podem ser micro (até 9 funcionários), pequenas (de 10 a 49), médias (50 a 99) ou grandes empresas (mais de 100).</p>'
                }, {
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at4.png').fileUrl,
                    title: 'E tem vários segmentos',
                    text: 'Para produzir tudo o que as pessoas precisam para viver, as empresas se dividem em segmentos. São 16 ao total: Agricultura; Alimentos e Bebidas; Artesanato; Beleza; Construção; Economia Criativa; Madeiras e Móveis; Mercado Digital; Mercearia e Supermercados; Metal Mecânico; Moda; Pecuária; Petroquímico e Mineração; Saúde e Bem-Estar; Turismo; e Veículos.'
                }]
            }
        }, {
            name: 'Lucra ou não lucra?',
            description: undefined,
            type: 'interaction',
            presentation: {
                title: 'Lucra ou não lucra?',
                description: 'A seguir, vamos mostrar algumas empresas pra você testar se sabe diferenciar uma empresa com fins lucrativos e uma sem fins lucrativos. Bora?',
                image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
            },
            contentFormat: 'classify',
            content: {
                title: 'Lucra ou não lucra?',
                text: 'Clique e arraste pra direita ou esquerda, classificando as organizações em lucrativas ou não lucrativas.. Preparado? Já!',
                questions: [{
                    image: _.find(files, file => file.filename === 'Aula09_Atividade02_1.png').fileUrl,
                    alternativesType: 'text',
                    alternatives: {
                        left: {
                            option: 'Lucra'
                        },
                        right: {
                            option: 'Não Lucra'
                        }
                    },
                    correctAnswer: 'right'
                }, {
                    image: _.find(files, file => file.filename === 'Aula09_Atividade02_2.png').fileUrl,
                    alternativesType: 'text',
                    alternatives: {
                        left: {
                            option: 'Lucra'
                        },
                        right: {
                            option: 'Não Lucra'
                        }
                    },
                    correctAnswer: 'left'
                }, {
                    image: _.find(files, file => file.filename === 'Aula09_Atividade02_3.png').fileUrl,
                    alternativesType: 'text',
                    alternatives: {
                        left: {
                            option: 'Lucra'
                        },
                        right: {
                            option: 'Não Lucra'
                        }
                    },
                    correctAnswer: 'right'
                }, {
                    image: _.find(files, file => file.filename === 'Aula09_Atividade02_4.png').fileUrl,
                    alternativesType: 'text',
                    alternatives: {
                        left: {
                            option: 'Lucra'
                        },
                        right: {
                            option: 'Não Lucra'
                        }
                    },
                    correctAnswer: 'left'
                }, {
                    image: _.find(files, file => file.filename === 'Aula09_Atividade02_5.png').fileUrl,
                    alternativesType: 'text',
                    alternatives: {
                        left: {
                            option: 'Lucra'
                        },
                        right: {
                            option: 'Não Lucra'
                        }
                    },
                    correctAnswer: 'left'
                }, {
                    image: _.find(files, file => file.filename === 'Aula09_Atividade02_6.png').fileUrl,
                    alternativesType: 'text',
                    alternatives: {
                        left: {
                            option: 'Lucra'
                        },
                        right: {
                            option: 'Não Lucra'
                        }
                    },
                    correctAnswer: 'right'
                }, {
                    image: _.find(files, file => file.filename === 'Aula09_Atividade02_7.png').fileUrl,
                    alternativesType: 'text',
                    alternatives: {
                        left: {
                            option: 'Lucra'
                        },
                        right: {
                            option: 'Não Lucra'
                        }
                    },
                    correctAnswer: 'right'
                }, {
                    image: _.find(files, file => file.filename === 'Aula09_Atividade02_8.png').fileUrl,
                    alternativesType: 'text',
                    alternatives: {
                        left: {
                            option: 'Lucra'
                        },
                        right: {
                            option: 'Não Lucra'
                        }
                    },
                    correctAnswer: 'left'
                }]
            }
        }, {
            name: 'Do micro ao macro',
            description: undefined,
            type: 'interaction',
            presentation: {
                title: 'Do micro ao macro',
                description: 'Tem empresa com uma pessoa só e outras com milhares de cabeças! Tem empresa que fatura um montão e outras que faturam pouquinho por ano. Você já conhece muitas delas, mas será que sabe dizer se elas são micro, pequenas, médias ou grandes empresas?',
                image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
            },
            contentFormat: 'multipleQuiz',
            content: {
                questions: [{
                    title: 'Do micro ao macro',
                    text: 'Banca de jornal da rua: trabalham seu José e a Margarida vendendo jornais e revistas todos os dias.',
                    alternativesType: 'image',
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5a.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5b.png').fileUrl,
                        letter: 'B'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5c.png').fileUrl,
                        letter: 'C'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5d.png').fileUrl,
                        letter: 'D'
                    }],
                    correctAnswer: 'D'
                }, {
                    title: 'Do micro ao macro',
                    text: 'Padaria: lá quem manda é o Manoel, que tem uma equipe de 15 pessoas, entre atendentes, padeiros, caixa e limpeza.',
                    alternativesType: 'image',
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5a.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5b.png').fileUrl,
                        letter: 'B'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5c.png').fileUrl,
                        letter: 'C'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5d.png').fileUrl,
                        letter: 'D'
                    }],
                    correctAnswer: 'B'
                }, {
                    title: 'Do micro ao macro',
                    text: 'Supermercado: tem tanta gente trabalhando lá para trazer aquele tanto de produto pra gente! Mais de 50, com certeza!',
                    alternativesType: 'image',
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5a.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5b.png').fileUrl,
                        letter: 'B'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5c.png').fileUrl,
                        letter: 'C'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5d.png').fileUrl,
                        letter: 'D'
                    }],
                    correctAnswer: 'A'
                }, {
                    title: 'Do micro ao macro',
                    text: 'Facebook: quantas pessoas será que trabalham para manter o facebook funcionando?',
                    alternativesType: 'image',
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5a.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5b.png').fileUrl,
                        letter: 'B'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5c.png').fileUrl,
                        letter: 'C'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula09_Interesses_at5d.png').fileUrl,
                        letter: 'D'
                    }],
                    correctAnswer: 'C'
                }]
            }
        }, {
          name: 'Ligando o nome ao produto',
          description: undefined,
          type: 'interaction',
          presentation: {
              title: 'Ligando o nome ao produto',
              description: 'Tudo que a gente compra todos os dias foi feito por empresas de diferentes segmentos. Você consegue adivinhar pelo produto qual é o segmento da empresa que o fez?',
              image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
          },
          contentFormat: 'relate',
          content: {
            questions: [{
                  title: 'Ligando o nome ao produto',
                  text: undefined,
                  drops: [{
                      number: 1,
                      image: _.find(files, file => file.filename === 'Aula09_Interesses_at6a.png').fileUrl,
                  }, {
                      number: 2,
                      image: _.find(files, file => file.filename === 'Aula09_Interesses_at6b.png').fileUrl,
                  }, {
                      number: 3,
                      image: _.find(files, file => file.filename === 'Aula09_Interesses_at6c.png').fileUrl,
                  }, {
                      number: 4,
                      image: _.find(files, file => file.filename === 'Aula09_Interesses_at6d.png').fileUrl,
                  }],
                  drags: [{
                      text: 'Veículos',
                      relatedTo: 1
                  }, {
                      text: 'Turismo',
                      relatedTo: 2
                  }, {
                      text: 'Construção',
                      relatedTo: 3
                  }, {
                      text: 'Moda',
                      relatedTo: 4
                  }]
              }, {
                title: 'Ligando o nome ao produto',
                text: undefined,
                drops: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at7a.png').fileUrl,
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at7b.png').fileUrl,
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at7c.png').fileUrl,
                }, {
                    number: 4,
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at7d.png').fileUrl,
                }],
                drags: [{
                    text: 'Agricultura',
                    relatedTo: 1
                }, {
                    text: 'Artesanato',
                    relatedTo: 2
                }, {
                    text: 'Mercado Digital',
                    relatedTo: 3
                }, {
                    text: 'Metal Mecânico',
                    relatedTo: 4
                }]
            }, {
                title: 'Ligando o nome ao produto',
                text: undefined,
                drops: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at8a.png').fileUrl,
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at8b.png').fileUrl,
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at8c.png').fileUrl,
                }, {
                    number: 4,
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at8d.png').fileUrl,
                }],
                drags: [{
                    text: 'Beleza',
                    relatedTo: 1
                }, {
                    text: 'Pecuária',
                    relatedTo: 2
                }, {
                    text: 'Mercearia e supermercado',
                    relatedTo: 3
                }, {
                    text: 'Madeira e Móveis',
                    relatedTo: 4
                }]
            }, {
                title: 'Ligando o nome ao produto',
                text: undefined,
                drops: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at9a.png').fileUrl,
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at9b.png').fileUrl,
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at9c.png').fileUrl,
                }, {
                    number: 4,
                    image: _.find(files, file => file.filename === 'Aula09_Interesses_at9d.png').fileUrl,
                }],
                drags: [{
                    text: 'Economia Criativa',
                    relatedTo: 1
                }, {
                    text: 'Saúde e Bem-estar',
                    relatedTo: 2
                }, {
                    text: 'Petroquímico e mineração',
                    relatedTo: 3
                }, {
                    text: 'Alimentos e Bebidas',
                    relatedTo: 4
                }]
            }]
          }
      }, {
          name: 'O que é o que?',
          description: undefined,
          type: 'presentation',
          presentation: {
              title: 'O que é o que?',
              description: 'As empresas criam times internos para entregar um produto ou serviço irado. Juntamos as áreas mais comuns. Descubra quais são e o que fazem.',
              image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
          },
          contentFormat: 'map',
          content: {
                title: 'O que é o que?',
                text: 'As empresas criam times internos que se dividem para entregar um produto ou serviço irado. Abaixo juntamos as áreas mais comuns. Clique sobre cada um e descubra quais são e o que fazem.',
                background: _.find(files, file => file.filename === 'Aula09_Interesses_at10.png').fileUrl,
                baseResolution:{
                    width: 1080,
                    height: 1020
                },


                mapping: [{
                    coordinates: '3,41,137,98,253,83,299,110,339,86,399,128,403,165,379,221,341,227,234,219,126,179,2,155',
                    shape: 'poly',
                    tickPosition: {
                        x: 285,
                        y: 101
                    },
                    feedback: {
                        title: 'Logística',
                        text: 'esse pessoal organiza onde guardar os produtos e como eles chegarão nos clientes.',
                        image: _.find(files, file => file.filename === 'Aula09_Interesses_at11e.png').fileUrl
                    }
                },{
                    coordinates: "1,333,180,315,236,290,284,286,316,285,331,301,362,257,431,258,449,288,462,321,489,396,430,431,355,387,312,422,233,423,132,410,0,421",
                    shape: 'poly',
                    tickPosition: {
                        x: 359,
                        y: 287
                    },
                    feedback: {
                        title: 'Pesquisa e Desenvolvimento',
                        text: 'essa galera estuda para melhorar sempre os produtos da empresa ou criar novas soluções. ',
                        image: _.find(files, file => file.filename === 'Aula09_Interesses_at11a.png').fileUrl,
                    }
                }, {
                    coordinates: "1,473,170,483,268,452,331,462,426,512,382,558,277,588,182,625,57,592,1,569",
                    shape: 'poly',
                    tickPosition: {
                        x: 258,
                        y: 487
                    },
                    feedback: {
                        title: 'Finanças',
                        text: 'Povo do dindin! Aqui é onde o dinheiro da empresa é controlado.',
                        image: _.find(files, file => file.filename === 'Aula09_Interesses_at11h.png').fileUrl,
                    }
                }, {
                    coordinates: "0,795,122,724,140,737,196,700,233,676,249,625,298,632,355,676,343,714,311,741,296,788,249,826,167,842,76,884,1,922",
                    shape: 'poly',
                    tickPosition: {
                        x: 238,
                        y: 644
                    },
                    feedback: {
                        title: 'Comercial/Vendas',
                        text: 'são eles que falam direto com os clientes mostrando tudo que o produto tem de bom para oferecer.',
                        image: _.find(files, file => file.filename === 'Aula09_Interesses_at11d.png').fileUrl,
                    }
                }, {
                    coordinates: "302,1019,346,962,335,852,365,825,408,792,447,785,441,725,452,683,509,670,589,667,631,680,660,699,666,776,694,794,750,853,770,924,811,1019",
                    shape: 'poly',
                    tickPosition: {
                        x: 480,
                        y: 719
                    },
                    feedback: {
                        title: 'Marketing',
                        text: 'faz o meio campo entre a empresa e o consumidor pensando, por exemplo, em comerciais e onde construir uma loja.',
                        image: _.find(files, file => file.filename === 'Aula09_Interesses_at11g.png').fileUrl,
                    }
                }, {
                    coordinates: "1080,10,943,63,821,95,681,94,637,145,654,192,676,240,712,251,748,274,791,222,838,220,852,198,1080,136",
                    shape: 'poly',
                    tickPosition: {
                        x: 673,
                        y: 96
                    },
                    feedback: {
                        title: 'Tecnologia da Informação',
                        text: ' a galera dos computadores trabalha para que eles funcionem bem sempre!',
                        image: _.find(files, file => file.filename === 'Aula09_Interesses_at11c.png').fileUrl,
                    }
                }, {
                    coordinates: "1080,613,936,574,901,579,859,590,803,559,756,531,698,503,676,455,686,404,718,364,735,306,778,280,813,265,847,269,889,299,1019,239,1080,217",
                    shape: 'poly',
                    tickPosition: {
                        x: 709,
                        y: 399
                    },
                    feedback: {
                        title: 'Recursos Humanos',
                        text: 'o recurso mais valioso de uma empresa são suas pessoas. Aqui eles cuidam dos funcionários pra que eles produzam bem!',
                        image: _.find(files, file => file.filename === 'Aula09_Interesses_at11b.png').fileUrl,
                    }
                }, {
                    coordinates: "1080,844,927,770,900,650,880,625,846,623,765,630,760,686,765,761,799,811,869,866,1080,954",
                    shape: 'poly',
                    tickPosition: {
                        x: 783,
                        y: 639
                    },
                    feedback: {
                        title: 'Produção',
                        text: 'aqui o pessoal bota a mão na massa e entrega o produto ou serviço.',
                        image: _.find(files, file => file.filename === 'Aula09_Interesses_at11f.png').fileUrl,
                    }
                }]
            }
        }]
      })
    ]
);
