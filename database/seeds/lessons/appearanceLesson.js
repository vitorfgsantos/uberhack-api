'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Aparência",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Marketing Pessoal')._id,
            ],
            description: 'Hoje nós vamos falar sobre aparência! Não, isso não tem nada a ver com ser bonito ou usar roupas de marca. Tem a ver com se cuidar e se vestir de acordo com cada ambiente. Bora saber mais sobre isso?',
            estimatedTime: '7',
            image: _.find(files, file => file.filename === 'Aula_05.png').fileUrl,
            activities: [{
                name: 'Sua imagem é seu cartão de visita',
                description: undefined,
                type: 'presentation',
                presentation: {
                    title: 'Sua imagem é seu cartão de visita',
                    description: 'Nada como alguém que sabe se vestir em cada situação para te dar dicas  espertas sobre aparência. Apresentamos… Pyong!!',
                    image: _.find(files, file => file.filename === 'capa_aparencia.png').fileUrl
                },
                contentFormat: 'video',
                content: {
                    title: 'Sua imagem é seu cartão de visitas',
                    text: 'Nada como alguém que sabe se vestir em cada situação para te dar dicas  espertas sobre aparência. Apresentamos… Pyong!!', // TODO
                    video: {
                        fileUrl: 'files/stream?type=videos&filename=' + '4-APARENCIA_online.mp4',
                        type: 'video/mp4'
                    },
                    subtitles: {
                        fileUrl: _.find(files, file => file.filename === 'Aparencia.vtt').fileUrl,
                        label: 'Português'
                    }
                }
            }, {
              name: 'A primeira impressão é a que fica',
              description: '',
              type: 'interaction',
              presentation: {
                  title: 'Impressão que fica',
                  description: 'Você viu o Pyong falando da importância da aparência no trabalho e dando várias dicas. Vamos lembrar dizendo qual é a situação correta? ',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'memoryQuiz',
              content: {
                questions: [{
                title: 'O que cai bem no trampo?',
                text: 'Preste atenção nas imagens que vão surgir e depois clique no perfil mais adequado para um ambiente de trabalho.',
                alternativesType: 'image',
                feedbacks: [{
                    title: 'Memorize aí!',
                    text: 'Pra mandar bem no trabalho, nada de boné, roupa manchada, decotes, saia curta ou calça aparecendo a cueca, hein?',
                    type: 'positive'
                }, {
                    title: 'Memorize aí!',
                    text: 'Pra mandar bem no trabalho, nada de boné, roupa manchada, decotes, saia curta ou calça aparecendo a cueca, hein?',
                    type: 'negative'
                }],
                alternatives: [{
                    option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2f.png').fileUrl,
                    letter: 'A'
                }, {
                    option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2c.png').fileUrl,
                    letter: 'B'
                }, {
                    option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2e.png').fileUrl,
                    letter: 'C'
                }, {
                    option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2a.png').fileUrl,
                    letter: 'D'
                }, {
                    option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2d.png').fileUrl,
                    letter: 'E'
                }, {
                    option: _.find(files, file => file.filename === 'Aula05_Aparencia_at2b.png').fileUrl,
                    letter: 'F'
                }],
                correctAnswer: 'A'
              }]
            }
          },{
            name: 'Espelho, espelho meu',
            description: undefined,
            type: 'interaction',
            presentation: {
                title: 'Espelho, espelho meu',
                description: 'Cuidar da higiene pessoal é super importante! Não adianta nada estar com uma roupa linda, se não tiver com tudo limpinho',
                image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
            },
            contentFormat: 'classify',
            content:{
              title: 'Espelho, espelho meu',
              text: 'Você acordou atrasado pro trabalho e precisa dar um trato rápido no visual. Quais itens não podem ficar de fora?',
              questions: [{
              image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3a.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'NÂO'
                  },
                  right: {
                      option: 'SIM'
                  }
              },
              correctAnswer: 'right'
            },{
              image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3b.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'NÂO'
                  },
                  right: {
                      option: 'SIM'
                  }
              },
              correctAnswer: 'right'
            },{
              image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3c.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'NÂO'
                  },
                  right: {
                      option: 'SIM'
                  }
              },
              correctAnswer: 'right'
            },{
              image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3g.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'NÂO'
                  },
                  right: {
                      option: 'SIM'
                  }
              },
              correctAnswer: 'right'
            },{
              image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3e.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'NÂO'
                  },
                  right: {
                      option: 'SIM'
                  }
              },
              correctAnswer: 'left'
            },{
              image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3f.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'NÂO'
                  },
                  right: {
                      option: 'SIM'
                  }
              },
              correctAnswer: 'left'
            },{
              image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3d.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'NÂO'
                  },
                  right: {
                      option: 'SIM'
                  }

              },
              correctAnswer: 'left',
            }]

            }
        },{
          name: 'Na medida certa',
          description: undefined,
          type: 'interaction',
          presentation: {
            title: 'Na medida certa',
            description: 'Agora, se o trampo for informal, como eles devem se vestir? Clique, arraste e adicione 1 item para cada um para ficar ideal.',
            image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl,
          },
            contentFormat: 'add',
            content:{ questions:[{
              title: 'Trampo formal',
              text: 'Antonio e Maria entraram em um emprego formal. Clique, arraste e adicione 1 item para cada um para ficar com o visual ideal.',
              background: _.find(files, file => file.filename === 'Aula05_Aparencia_at4.1_a.png').fileUrl,
              baseResolution: {
                  width: 1080,
                  height: 860
              },
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Para um trampo formal, não dá pra ir de camisa com estampa.  O ideal é uma gravata escura e uma camisa lisa, para ele, e uma blazer neutro para ela.',
                  type: 'positive'
              }, {
                  title: 'Quase lá!',
                  text: 'Para um trampo formal, não dá pra ir de camisa com estampa.  O ideal é uma gravata escura e uma camisa lisa, para ele, e uma blazer neutro para ela.',
                  type: 'intermediate'
              }, {
                  title: 'Ooops!',
                  text: 'Para um trampo formal, não dá pra ir de camisa com estampa.  O ideal é uma gravata escura e uma camisa lisa, para ele, e uma blazer neutro para ela.',
                  type: 'negative'
              }],
              layers: [{
                  number: 1,
                  image: _.find(files, file => file.filename === 'Aula05_Aparencia_at4c.png').fileUrl,
                  icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at4e.png').fileUrl,
                  category: 'A',
                  tickPosition: {
                      x: 347,
                      y: 496
                  }
              }, {
                  number: 2,
                  image: _.find(files, file => file.filename === 'Aula05_Aparencia_at4b.png').fileUrl,
                  icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at4g.png').fileUrl,
                  category: 'B',
                  tickPosition: {
                      x: 775,
                      y: 559
                  }
              }, {
                  number: 3,
                  image: _.find(files, file => file.filename === 'Aula05_Aparencia_at4a.png').fileUrl,
                  icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at4f.png').fileUrl,
                  category: 'A',
                  tickPosition: {
                      x: 347,
                      y: 496
                  }
              }, {
                  number: 4,
                  category: 'B',
                  image: _.find(files, file => file.filename === 'Aula05_Aparencia_at4d.png').fileUrl,
                  icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at4h.png').fileUrl,
                  tickPosition: {
                      x: 775,
                      y: 559
                  }
              }],
              correctLayers: [1, 4]
            },{
              title: 'Trampo formal',
              text: 'Qual outra opção Antonio e Maria poderiam usar para um emprego formal? Clique, arraste e adicione 1 item para cada um para ficar com o visual ideal.',
              background: _.find(files, file => file.filename === 'Aula05_Aparencia_at4.1_a.png').fileUrl,
              baseResolution: {
                  width: 1080,
                  height: 860
              },
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Num trampo formal, nada de blusas muito decotadas ou roupas super coloridas. Um terno para os homens e camisa neutra para as mulheres caem bem.',
                  type: 'positive'
              }, {
                  title: 'Quase lá!',
                  text: 'Num trampo formal, nada de blusas muito decotadas ou roupas super coloridas. Um terno para os homens e camisa neutra para as mulheres caem bem.',
                  type: 'intermediate'
              }, {
                  title: 'Ooops!',
                  text: 'Num trampo formal, nada de blusas muito decotadas ou roupas super coloridas. Um terno para os homens e camisa neutra para as mulheres caem bem.',
                  type: 'negative'
              }],
              layers: [{
                  number: 1,
                  image: _.find(files, file => file.filename === 'Aula05_Aparencia_at5b.png').fileUrl,
                  icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at5g.png').fileUrl,
                  category: 'A',
                  tickPosition: {
                      x: 347,
                      y: 496
                  }
              }, {
                  number: 2,
                  image: _.find(files, file => file.filename === 'Aula05_Aparencia_at5d.png').fileUrl,
                  icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at5e.png').fileUrl,
                  category: 'B',
                  tickPosition: {
                      x: 775,
                      y: 559
                  }
              }, {
                  number: 3,
                  image: _.find(files, file => file.filename === 'Aula05_Aparencia_at5a.png').fileUrl,
                  icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at5h.png').fileUrl,
                  category: 'A',
                  tickPosition: {
                      x: 347,
                      y: 496
                  }
              }, {
                  number: 4,
                  category: 'B',
                  image: _.find(files, file => file.filename === 'Aula05_Aparencia_at5c.png').fileUrl,
                  icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at5f.png').fileUrl,
                  tickPosition: {
                      x: 775,
                      y: 559
                  }
              }],
              correctLayers: [1, 4]

            },{
              title: 'Trampo Informal',
              text: 'Agora, se o trampo for informal, como eles devem se vestir? Clique, arraste e adicione 1 item para cada um para ficar ideal.',
              background: _.find(files, file => file.filename === 'Aula05_Aparencia_at4.1_a.png').fileUrl,
              baseResolution: {
                  width: 1080,
                  height: 860
              },
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Num trampo mais informal, até rola ir com uma camisa mais colorida. Mas a gravata e o blazer escuro podem ficar no armário.',
                  type: 'positive'
              }, {
                  title: 'Quase lá!',
                  text: 'Num trampo mais informal, até rola ir com uma camisa mais colorida. Mas a gravata e o blazer escuro podem ficar no armário.',
                  type: 'intermediate'
              }, {
                  title: 'Ooops!',
                  text: 'Num trampo mais informal, até rola ir com uma camisa mais colorida. Mas a gravata e o blazer escuro podem ficar no armário.',
                  type: 'negative'
              }],
              layers: [{
                  number: 1,
                  image: _.find(files, file => file.filename === 'Aula05_Aparencia_at6a.png').fileUrl,
                  icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at6f.png').fileUrl,
                  category: 'A',
                  tickPosition: {
                      x: 347,
                      y: 496
                  }
              }, {
                  number: 2,
                  image: _.find(files, file => file.filename === 'Aula05_Aparencia_at6c.png').fileUrl,
                  icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at6h.png').fileUrl,
                  category: 'B',
                  tickPosition: {
                      x: 775,
                      y: 559
                  }
              }, {
                  number: 3,
                  image: _.find(files, file => file.filename === 'Aula05_Aparencia_at6b.png').fileUrl,
                  icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at6e.png').fileUrl,
                  category: 'A',
                  tickPosition: {
                      x: 347,
                      y: 496
                  }
              }, {
                  number: 4,
                  category: 'B',
                  image: _.find(files, file => file.filename === 'Aula05_Aparencia_at6d.png').fileUrl,
                  icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at6g.png').fileUrl,
                  tickPosition: {
                      x: 775,
                      y: 559
                  }
              }],
              correctLayers: [1, 2]
            },{title: 'Trampo informal',
            text: 'Qual outra opção Antonio e Maria poderiam usar para um emprego informal? Clique, arraste e adicione 1 item para cada um para ficar ideal',
            background: _.find(files, file => file.filename === 'Aula05_Aparencia_at4.1_a.png').fileUrl,
            baseResolution: {
                width: 1080,
                height: 860
            },
            feedbacks: [{
                title: 'Muito bem!',
                text: 'Se o trampo é informal, acessórios e penteados mais estilosos são show!',
                type: 'positive'
            }, {
                title: 'Quase lá!',
                text: 'Se o trampo é informal, acessórios e penteados mais estilosos são show!',
                type: 'intermediate'
            }, {
                title: 'Ooops!',
                text: 'Se o trampo é informal, acessórios e penteados mais estilosos são show!',
                type: 'negative'
            }],
            layers: [{
                number: 1,
                image: _.find(files, file => file.filename === 'Aula05_Aparencia_at7d.png').fileUrl,
                icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at7h.png').fileUrl,
                category: 'A',
                tickPosition: {
                    x: 347,
                    y: 496
                }
            }, {
                number: 2,
                image: _.find(files, file => file.filename === 'Aula05_Aparencia_at7c.png').fileUrl,
                icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at7e.png').fileUrl,
                category: 'B',
                tickPosition: {
                    x: 775,
                    y: 559
                }
            }, {
                number: 3,
                image: _.find(files, file => file.filename === 'Aula05_Aparencia_at7b.png').fileUrl,
                icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at7g.png').fileUrl,
                category: 'A',
                tickPosition: {
                    x: 347,
                    y: 496
                }
            }, {
                number: 4,
                category: 'B',
                image: _.find(files, file => file.filename === 'Aula05_Aparencia_at7a.png').fileUrl,
                icon: _.find(files, file => file.filename === 'Aula05_Aparencia_at7f.png').fileUrl,
                tickPosition: {
                    x: 775,
                    y: 559
                }
            }],
            correctLayers: [3, 4]

            }
          ]}
       },{
         name: 'Seu estilo',
         description: undefined,
         type: 'presentation',
         presentation: {
             title: 'Seu estilo',
             description: 'Agora que você já viu que o estilo da empresa influencia muito na forma como você deve se vestir, vamos fazer um teste?',
             image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl // TODO
         },
         contentFormat: 'scale',
         content: {
           questions: [{
             title: 'Seu estilo',
             text: 'Diz pra gente com qual estilo você mais se identifica.',
             image: _.find(files, file => file.filename === 'Aula05_Aparencia_at8.png').fileUrl,
             values: {
                 right: {
                     value: 'rigth',
                     feedback: {
                         title: 'Bacana!',
                         text: 'Você se daria bem em uma empresa mais tradicional.',
                         type: 'positive'
                     }
                 },
                 left: {
                     value: 'left',
                     feedback: {
                         title: 'Legal!',
                         text: 'Você se sairia muito bem numa empresa mais jovem!',
                         type: 'positive'
                     }
                 }
             }
           }]
         }
       },{

         name: 'Não deixe de ser você',
         description: undefined,
         type: 'presentation',
         presentation: {
             title: 'Não deixe de ser você',
             description: 'Quando você trabalha em uma empresa, de certa forma está representando essa organização. Por isso, não dá pra descuidar nunca da aparência!',
             image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl // TODO
         },
         contentFormat: 'slides',
         content:{
           slides: [{
               image: _.find(files, file => file.filename === 'slide1.png').fileUrl,
               title: 'Se cuida! ',
               text: '<p>Ter boa aparência não se trata de ser bonito ou feio, ou de usar roupas e acessórios caros, de grife ou que estão na moda, mas sim cuidar de você.</p> <p>Se você consegue cuidar de você, você é capaz de cuidar do outro e das coisas relacionadas ao trabalho. </p>'
           }, {
               image: _.find(files, file => file.filename === 'slide2.png').fileUrl,
               title: 'O visual ajuda.',
               text: 'Ter um visual saudável e natural te deixa mais seguro no dia a dia e também transmite aquela dose de confiança, responsabilidade e capacidade de lidar bem com suas atividades.'
           }, {
               image: _.find(files, file => file.filename === 'slide3.png').fileUrl,
               title: 'Sem perder o estilo.',
               text: '<p>Você não precisa perder seu estilo e a forma de ser vestir e se sentir bem.</p><p>Com bom senso você se ajusta ao ambiente sem deixar sua personalidade de fora. Afinal, mostrar quem você é de verdade também conta ponto! ;) </p>'
           }]
         }


       }




          //final do action
        ]

      })
  ]
);
