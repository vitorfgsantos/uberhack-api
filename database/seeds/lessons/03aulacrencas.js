'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Crenças",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Propósito de vida')._id,
            ],
            description: '',
            estimatedTime: '7',
            image: _.find(files, file => file.filename === 'Aula_03.png').fileUrl,
            activities: [{
                name: 'Pode crer!',
                description: undefined,
                type: 'presentation',
                presentation: {
                    title: 'Pode crer!',
                    description: 'Todo mundo tem suas crenças. Até a Bruna! Vamos ver como ela lida com isso?',
                    image: _.find(files, file => file.filename === 'capa_crencas.png').fileUrl
                },
                contentFormat: 'video',
                content: {
                    title: 'Pode crer!',
                    text: 'Todo mundo tem suas crenças. Até a Bruna! Vamos ver como ela lida com isso?',
                    video: {
                        fileUrl: 'files/stream?type=videos&filename=' + '5-CRENCAS_online.mp4',
                        type: 'video/mp4'
                    },
                    subtitles: {
                        fileUrl: _.find(files, file => file.filename === 'Crencas.vtt').fileUrl,
                        label: 'Português'
                    }
                }
        },{
          name: 'Tá tudo relacionado',
          description: undefined,
          type: 'interaction',
          presentation: {
              title: 'Tá tudo relacionado.',
              description: 'Muitas crenças que temos foram formadas na infância, pelas atitudes dos nossos pais. Relacione algumas frases que os pais diziam aos filhos com as ações na vida adulta.',
              image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
          },
          contentFormat: 'relate',
          content: {
            questions: [{
                title: 'Relacione',
                text: 'Boa parte das crenças que temos na vida adulta são formadas na infância, muitas vezes pelo o que nossos pais diziam. Relacione as frases que os pais normalmente dizem aos filhos com a forma que isso reflete em suas ações na vida adulta.',
                drops: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula03_Crencas_at1a.png').fileUrl,
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula03_Crencas_at1c.png').fileUrl,
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula03_Crencas_at1b.png').fileUrl,
                }, {
                    number: 4,
                    image: _.find(files, file => file.filename === 'Aula03_Crencas_at1d.png').fileUrl,
                }],
                drags: [{
                    text: 'Você é forte',
                    relatedTo: 1
                }, {
                    text: 'Avião é perigoso',
                    relatedTo: 2
                }, {
                    text: 'Você é inteligente',
                    relatedTo: 3
                }, {
                    text: 'Homens não prestam',
                    relatedTo: 4
                }]
            }]

          }
        },{
          name: 'Tire isso da sua cabeça',
          description: undefined,
          type: 'interaction',
          presentation: {
              title: 'Tire isso da sua cabeça',
              description: 'As crenças têm tudo a ver com as nossas atitudes. Se forem positivas, legal! Mas se forem negativas, te impedem de seguir em frente e prejudicam sua autoimagem.  Bora eliminar as crenças limitantes?',
              image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
          },
          contentFormat: 'remove',
          content: {
            questions: [{
                title: 'Tire isso da sua cabeça',
                text: 'Clique sobre as frases que atrasam sua vida. Deixe apenas as que te levam pra frente.',
                clicks: 4,
                background: _.find(files, file => file.filename === 'Aula03_Crencas_at2a.png').fileUrl,
                baseResolution: {
                    width: 1080,
                    height: 860
                },
                // feedbacks: [{
                //     title: 'Muito bem!',
                //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                //     type: 'positive'
                // }, {
                //     title: 'Quase lá!',
                //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                //     type: 'intermediate'
                // }, {
                //     title: 'Ooops!',
                //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                //     type: 'negative'
                // }],
                layers: [{
                    image: _.find(files, file => file.filename === 'Aula03_Crencas_at2e.png').fileUrl,
                    icon: _.find(files, file => file.filename === 'Aula03_Crencas_at2f.png').fileUrl,
                    mapping: {
                        coordinates: '251,88,273,147,416,196,395,240,463,128,395,45,305,41',
                        shape: 'poly'
                    }
                }, {
                    image: _.find(files, file => file.filename === 'Aula03_Crencas_at2d.png').fileUrl,
                    icon: _.find(files, file => file.filename === 'Aula03_Crencas_at2g.png').fileUrl,
                    mapping: {
                        coordinates: '576,316,619,256,662,190,744,166,753,72,666,29,555,35,491,71,480,146,561,204,588,246"',
                        shape: 'poly'
                    }
                }, {
                    image: _.find(files, file => file.filename === 'Aula03_Crencas_at2c.png').fileUrl,
                    icon: _.find(files, file => file.filename === 'Aula03_Crencas_at2h.png').fileUrl,
                    mapping: {
                        coordinates: '521,569,708,537,854,526,864,423,803,403,698,438',
                        shape: 'poly'
                    }
                }, {
                    image: _.find(files, file => file.filename === 'Aula03_Crencas_at2b.png').fileUrl,
                    icon: _.find(files, file => file.filename === 'Aula03_Crencas_at2i.png').fileUrl,
                    mapping: {
                        coordinates: '371,534,471,425,556,364,522,288,397,284,329,323,340,418,404,426',
                        shape: 'poly'
                    }
                }]
            }]

          }
        },{
          name: 'Fala que eu te escuto.',
          description: undefined,
          type: 'presentation',
          presentation: {
              title: 'Fala que eu te escuto.',
              description: 'Identificar uma crença que te limita pode não ser fácil. Veja como a Laura, amiga do João, o ajudou a enfrentar uma crença que estava atrapalhando sua vida!',
              image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
          },
          contentFormat: 'slides',
          content: {
            slides: [{
                image: _.find(files, file => file.filename === 'Aula03_Crencas_at3.png').fileUrl,
                title: 'Qual seu objetivo?',
                text: 'Batendo um papo, o João disse que a vida dele estava meio sem sentido. A Laura então perguntou se ele tinha algum objetivo no momento,  algo que queria muito realizar. E olha só o que ela descobriu.'
            }, {
                image: _.find(files, file => file.filename === 'Aula03_Crencas_at4.png').fileUrl,
                title: 'Por que não está conseguindo? ',
                text: 'Ter um objetivo é uma ótima dica. E o João tem um! A Laura ficou empolgada e continuou tentando saber o que poderia estar impedindo o amigo alcançar seu objetivo. E a Laura foi buscar a resposta lá no fundo dos pensamentos dele. '
            }, {
                image: _.find(files, file => file.filename === 'Aula03_Crencas_at5.png').fileUrl,
                title: 'Você tem medo de que? ',
                text: 'Laura, vendo que a crença limitante do João era não ser capaz de participar de uma entrevista, o ajudou a ver que ele poderia se preparar antes e treinar para, assim, se sentir mais confiante na hora. Maluco, né? Agora, volte nas perguntas dessa atividade e tente encontrar a crença limitante para os objetivos que você tem.'
            },{
              image: _.find(files, file => file.filename === 'Aula03_Crencas_at6.png').fileUrl,
              title: 'O fim da crença limitante',
              text: 'O João não pensou que poderia se preparar para uma entrevista e que sabendo o que e como a entrevista acontece, seu medo perderia a razão de existir. Pronto! A Laura achou a crença limitante do João! Maluco, né? Agora volte nas perguntas dessa atividade e tente encontrar a crença limitante para seus objetivos.'

            }]
          }

        },{
          name: 'Dá pra mudar. Acredite!',
          description: undefined,
          type: 'interaction',
          presentation: {
              title: 'Dá pra mudar. Acredite!',
              description: 'A boa notícia é que dá pra substituir uma crença limitante por uma positiva! Pense em algo que você acredita, mas que te impede de crescer. Agora, responda as perguntas…',
              image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
          },
          contentFormat: 'scale',
          content: {
            questions: [{
              title: 'Dá pra mudar. Acredite!',
              text: 'Essa crença que você pensou é verdadeira?',

              image: _.find(files, file => file.filename === 'Aula3_Crencas_at05_01.png').fileUrl,
              values: {
                  right: {
                      value: 'rigth',
                      feedback: {
                          title: 'Muito bem!',
                          text: 'Legal! Então está fácil de mudá-la. Você nem sabe se ela é verdadeira!',
                          type: 'positive'
                      }
                  },
                  left: {
                      value: 'left',
                      feedback: {
                          title: 'Ooops!',
                          text: 'Bom… então está na hora de repensá-la.',
                          type: 'positive'
                      }
                  }
              }
            },{
              title: 'Dá pra mudar. Acredite!',
              text: 'Você tem certeza absoluta que é verdadeira?',

              image: _.find(files, file => file.filename === 'Aula3_Crencas_at05_02.png').fileUrl,
              values: {
                  right: {
                      value: 'rigth',
                      feedback: {
                          title: 'Muito bem!',
                          text: ' Boa! Essa crença não está totalmente enraizada em você!',
                          type: 'positive'
                      }
                  },
                  left: {
                      value: 'left',
                      feedback: {
                          title: 'Ooops!',
                          text: 'Acredite! Você consegue mudar de opinião.',
                          type: 'positive'
                      }
                  }
              }

            },{
              title: 'Dá pra mudar. Acredite!',
              text: 'Como você reage? O que acontece quando você acredita que essa crença é verdadeira?',

              image: _.find(files, file => file.filename === 'Aula3_Crencas_at05_03.png').fileUrl,
              values: {
                  right: {
                      value: 'rigth',
                      feedback: {
                          title: 'Muito bem!',
                          text: 'Ótimo! Essa crença não está te atrapalhando muito!',
                          type: 'positive'
                      }
                  },
                  left: {
                      value: 'left',
                      feedback: {
                          title: 'Ooops!',
                          text: 'Puxa, essa crença está te atrapalhando bastante, né?',
                          type: 'positive'
                      }
                  }
              }

            },{
              title: 'Dá pra mudar. Acredite!',
              text: 'Como seria sua vida sem essa crença?',

              image: _.find(files, file => file.filename === 'Aula3_Crencas_at05_04.png').fileUrl,
              values: {
                  right: {
                      value: 'rigth',
                      feedback: {
                          title: 'Muito bem!',
                          text: 'Mesmo assim é melhor tirá-la da cabeça!',
                          type: 'positive'
                      }
                  },
                  left: {
                      value: 'left',
                      feedback: {
                          title: 'Ooops!',
                          text: 'Então, você tem que tirá-la da cabeça!',
                          type: 'positive'
                      }
                  }
              }
            },{
              title: 'Dá pra mudar. Acredite!',
              text: 'Coloque sua crença do lado esquerdo e pense em uma oposta, tipo: ninguém me ama / todos me amam. Pense em fatos que reforcem a crença oposta. Depois, mostre qual é mais forte para você.',
              image: _.find(files, file => file.filename === 'Aula3_Crencas_at05_05.png').fileUrl,
              values: {
                  right: {
                      value: 'rigth',
                      feedback: {
                          title: 'Muito bem!',
                          text: 'Que bom! Você já está conseguindo se livrar dessa crença! Acredite, é possível mudar as crenças que te limitam. É só querer!',
                          type: 'positive'
                      }
                  },
                  left: {
                      value: 'left',
                      feedback: {
                          title: 'Ooops!',
                          text: 'Você ainda não conseguiu se livrar dessa crença, mas acredite: isso é possível! Continue praticando e vendo o lado bom da crença oposta! Uma hora essa crença que só te limita sai da sua cabeça!',
                          type: 'positive'
                      }
                  }
              }
            }
          ]}

        }]//final do action
      })
    ]
);
