'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Entrevista",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Processo seletivo')._id,
            ],
            description: 'Se você está procurando uma oportunidade de trabalho, logo, logo vai pintar uma entrevista. E aí? Você acha que está preparado? Para te ajudar, preparamos essa aula cheia de dicas sobre tudo o que você deve fazer nesse momento tão importante. Fique ligado e não perca nada!',
            estimatedTime: '5',
            image: _.find(files, file => file.filename === 'Aula_13.png').fileUrl,
            activities: [{
              name: 'Entrevista marcada. Não dê mancada!',
              description: undefined,
              type: 'presentation',
              contentFormat: 'slides',
              content: {
                slides: [{
                    image: _.find(files, file => file.filename === 'Aula13_Entrevista_at1.png').fileUrl,
                    title: 'Entrevista sem mancada.',
                    text: 'Nesta fase, não é só o curso que você fez ou sua experiência que contam. Dê uma olhada em tudo que o entrevistador vai avaliar: o jeito que você fala e se comporta; como se veste; sua aparência; e até os movimentos que você faz! Ufa… Bora ver o que é tudo isso?'
                }]
              }
          },{
            name: 'Com que roupa eu vou? ',
            description: undefined,
            type: 'presentation',
            presentation: {
                title: 'Com que roupa eu vou? ',
                description: 'Clique nos objetos para ver quais as melhores opções para o Luís e a Ana.',
                image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
            },
            contentFormat: 'map',
            content: {

              title: 'Com que roupa eu vou? ',
              text: '',
              background: _.find(files, file => file.filename === 'Aula13_Entrevista_at2.png').fileUrl,
              baseResolution:{
                  width: 1080,
                  height: 1020
              },
              mapping: [{
                  coordinates: '108,0,204,439,785,451,956,7',
                  shape: 'poly',
                  tickPosition: {
                      x: 477,
                      y: 124
                  },
                  feedback: {
                      title: '',
                      text: 'O Luís tem roupas bacanas. Mas, nem tudo é indicado para uma entrevista. A calça social escura e a camisa clara lisa são show de bola! Para a Ana, nada de vestido decotado ou saia curta. Pra arrasar, ela tem que apostar na calça social com camisa!',
                      image: _.find(files, file => file.filename === 'Aula13_Entrevista_at3.png').fileUrl
                  }
              },{
                  coordinates: "202,750,566,747,570,928,207,935",
                  shape: 'poly',
                  tickPosition: {
                      x: 321,
                      y: 804
                  },
                  feedback: {
                      title: '',
                      text: 'A barba feita, o cabelo penteado, as unhas cortadas e os dentes escovados do Luís contam pontos! Ah, o perfume tem que ser só uma gota! Já para a Ana, menos é mais. Na maquiagem, só tons claros e os brincos pequenos estão de acordo.',
                      image: _.find(files, file => file.filename === 'Aula13_Entrevista_at4.png').fileUrl,
                  }
              },{
                coordinates: "192,555,882,554,892,687,205,696",
                shape: 'poly',
                tickPosition: {
                    x: 345,
                    y: 536
                },
                feedback: {
                    title: '',
                    text: 'Daqui, só o sapato social pega bem numa entrevista. Mas, o Luís vai ter que dar um belo trato nele. Se a Ana ainda não conhece bem a empresa, é melhor não inventar. Para completar o visual, só o sapato fechado de salto médio vai fazer bonito!',
                    image: _.find(files, file => file.filename === 'Aula13_Entrevista_at5.png').fileUrl,
                }

              }]}

          },{
            name: 'Pega bem ou paga mico. ',
            description: undefined,
            type: 'interaction',
            presentation: {
                title: 'Pega bem ou paga mico. ',
                description: 'Imagine que você está sendo entrevistado. Mostre qual dica pega bem e qual paga mico.',
                image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
            },
            contentFormat: 'classify',
            content: {
            title: 'Pega bem ou paga mico.',
            text: 'Imagine que você está sendo entrevistado. Mostre qual dica pega bem e qual paga mico.',
            questions:[{
              // feedbacks: [{
              //     title: 'Muito bem!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'positive'
              // }, {
              //     title: 'Ooops!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'negative'
              // }],
              image: _.find(files, file => file.filename === 'Aula13_Entrevista_at03_01.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'Paga mico'
                  },
                  right: {
                      option: 'Pega bem'
                  }
              },
              correctAnswer: 'left'
            },{

              // feedbacks: [{
              //     title: 'Muito bem!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'positive'
              // }, {
              //     title: 'Ooops!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'negative'
              // }],
              image: _.find(files, file => file.filename === 'Aula13_Entrevista_at03_02.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'Paga mico'
                  },
                  right: {
                      option: 'Pega bem'
                  }
              },
              correctAnswer: 'right'

            },{
              // feedbacks: [{
              //     title: 'Muito bem!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'positive'
              // }, {
              //     title: 'Ooops!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'negative'
              // }],
              image: _.find(files, file => file.filename === 'Aula13_Entrevista_at03_03.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'Paga mico'
                  },
                  right: {
                      option: 'Pega bem'
                  }
              },
              correctAnswer: 'left'
            },{
              // feedbacks: [{
              //     title: 'Muito bem!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'positive'
              // }, {
              //     title: 'Ooops!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'negative'
              // }],
              image: _.find(files, file => file.filename === 'Aula13_Entrevista_at03_04.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'Paga mico'
                  },
                  right: {
                      option: 'Pega bem'
                  }
              },
              correctAnswer: 'right'

            },{
              // feedbacks: [{
              //     title: 'Muito bem!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'positive'
              // }, {
              //     title: 'Ooops!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'negative'
              // }],
              image: _.find(files, file => file.filename === 'Aula13_Entrevista_at03_05.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'Paga mico'
                  },
                  right: {
                      option: 'Pega bem'
                  }
              },
              correctAnswer: 'left'
            },{
              // feedbacks: [{
              //     title: 'Muito bem!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'positive'
              // }, {
              //     title: 'Ooops!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'negative'
              // }],
              image: _.find(files, file => file.filename === 'Aula13_Entrevista_at03_06.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'Paga mico'
                  },
                  right: {
                      option: 'Pega bem'
                  }
              },
              correctAnswer: 'left'

            },{
              // feedbacks: [{
              //     title: 'Muito bem!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'positive'
              // }, {
              //     title: 'Ooops!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'negative'
              // }],
              image: _.find(files, file => file.filename === 'Aula13_Entrevista_at03_07.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'Paga mico'
                  },
                  right: {
                      option: 'Pega bem'
                  }
              },
              correctAnswer: 'right'

            },{
              // feedbacks: [{
              //     title: 'Muito bem!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'positive'
              // }, {
              //     title: 'Ooops!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'negative'
              // }],
              image: _.find(files, file => file.filename === 'Aula13_Entrevista_at03_08.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'Paga mico'
                  },
                  right: {
                      option: 'Pega bem'
                  }
              },
              correctAnswer: 'left'

            },{
              // feedbacks: [{
              //     title: 'Muito bem!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'positive'
              // }, {
              //     title: 'Ooops!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'negative'
              // }],
              image: _.find(files, file => file.filename === 'Aula13_Entrevista_at03_09.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'Paga mico'
                  },
                  right: {
                      option: 'Pega bem'
                  }
              },
              correctAnswer: 'right'

            },{
              // feedbacks: [{
              //     title: 'Muito bem!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'positive'
              // }, {
              //     title: 'Ooops!',
              //     text: ' Chegar atrasado, usar roupas justas, atender o celular , mascar chicletes, interromper ou forçar uma intimidade com o entrevistador, arruínam qualquer entrevista! Fique ligado!',
              //     type: 'negative'
              // }],
              image: _.find(files, file => file.filename === 'Aula13_Entrevista_at03_10.png').fileUrl,
              alternativesType: 'text',
              alternatives: {
                  left: {
                      option: 'Paga mico'
                  },
                  right: {
                      option: 'Pega bem'
                  }
              },
              correctAnswer: 'left'

            }

          ]}
        },{
          name: 'Dicionário do corpo',
          description: undefined,
          type: 'presentation',
          presentation: {
              title: 'Dicionário do corpo.',
              description: 'Entender o significado de cada gesto pode ajudar muito quando você estiver cara a cara com o entrevistador. Por isso, montamos um dicionário do corpo, que vai mostrar o que os movimentos dizem sobre você!', // TODO
              image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
          },
          contentFormat: 'slides',
          content: {
            slides: [{
                image: _.find(files, file => file.filename === 'Aula13_Entrevista_at6.png').fileUrl,
                title: 'Dicionário do corpo',
                text: '<p><u>Braços</u> = se estiverem cruzados, mostram que você está criando uma barreira com o entrevistador. Livre-se dessa mania!</p><u>Cabeça</u> = indica desânimo ou cansaço, se estiver inclinada para baixo. Vai parecer que você não está a fim da vaga… Não é essa impressão que você quer passar, né?'
            },{
                image: _.find(files, file => file.filename === 'Aula13_Entrevista_at7.png').fileUrl,
                title: 'Dicionário do corpo',
                text: '<p><u>Mãos</u> = esfregar uma na outra ou roer unhas são sinais de nervosismo. Controle-se!</p><u>Olhos</u> = se estiverem olhando pro nada ou para algum canto da sala, vai parecer que você não está nem aí para o que o entrevistador diz. O legal é olho no olho!'
            },{
                image: _.find(files, file => file.filename === 'Aula13_Entrevista_at8.png').fileUrl,
                title: 'Dicionário do corpo',
                text: '<p><u>Pernas</u> = se estiverem balançando, vão entregar no ato que você está nervoso… Se liga!</p><u>Tronco</u> = muito reto ou inclinado pra trás pode criar uma distância entre você e o entrevistador. A dica é ficar com o tronco um pouco voltado para frente, para passar confiança!'
            },]
          }
        },{
          name: 'Hora H.',
          description: undefined,
          type: 'interaction',
          presentation: {
              title: 'Hora H.',
              description: 'O jovem deve relacionar alguns comportamentos que contam ponto durante a entrevista.',
              image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
          },
          contentFormat: 'relate',
          content: {
            questions: [{
                title: 'Hora H.',
                text: 'Por isso, montamos um dicionário do corpo, que vai mostrar o que os movimentos dizem sobre você!',
                feedbacks: [{
                    title: 'Muito bem!',
                    text: 'Viu como você pode se conectar com o entrevistador e bater um bom papo usando a linguagem corporal? Basta saber que postura fazer em cada momento! ',
                    type: 'positive'
                }, {
                    title: 'Quase lá!',
                    text: 'Viu como você pode se conectar com o entrevistador e bater um bom papo usando a linguagem corporal? Basta saber que postura fazer em cada momento! ',
                    type: 'intermediate'
                },{
                    title: 'Ooops!',
                    text: 'Viu como você pode se conectar com o entrevistador e bater um bom papo usando a linguagem corporal? Basta saber que postura fazer em cada momento! ',
                    type: 'negative'
                }],
                drops: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula13_Entrevista_at05_01.png').fileUrl,
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula13_Entrevista_at05_02.png').fileUrl,
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula13_Entrevista_at05_03.png').fileUrl,
                }, {
                    number: 4,
                    image: _.find(files, file => file.filename === 'Aula13_Entrevista_at05_04.png').fileUrl,
                }],
                drags: [{
                    text: 'criar conexão',
                    relatedTo: 1
                }, {
                    text: 'mostrar interesse',
                    relatedTo: 2
                }, {
                    text: 'mostrar confiança',
                    relatedTo: 3
                }, {
                    text: 'mostrar tranquilidade',
                    relatedTo: 4
                }]
            }]
          }
        }]//final do action
   })
  ]
);
