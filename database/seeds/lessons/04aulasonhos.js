'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Sonhos",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Propósito de vida')._id,
            ],
            description: 'Hoje nós vamos falar de sonhos. Não daqueles que você tem quando dorme, mas aqueles desejos que você quer muito e ainda não sabe como conquistar! Sente em uma cadeira e respire fundo,  pois esta aula está inspiradora!',
            estimatedTime: '8',
            image: _.find(files, file => file.filename === 'Aula_01.png').fileUrl,
            activities: [{
                    name: 'Sonhando acordado.',
                    description: undefined,
                    type: 'presentation',
                    presentation: {
                        title: 'Sonhando acordado.',
                        description: 'Sonhar é bom! Quer ver? Dá o play que o Pyong vai te mostar!',
                        image: _.find(files, file => file.filename === 'capa_historia_vida.png').fileUrl // TODO
                    },
                    contentFormat: 'video',
                    content: {
                        title: 'Sonhando acordado.',
                        text: 'Sonhar é bom! Quer ver? Dá o play que o Pyong vai te mostar!',
                        video: {
                            fileUrl: 'files/stream?type=videos&filename=' + '3-SONHOS_E_VISÃO_DE_FUTURO_online.mp4',//TODO
                            type: 'video/mp4'
                        },
                        subtitles: {
                            fileUrl: _.find(files, file => file.filename === 'Historia_de_vida.vtt').fileUrl,
                            label: 'Português'
                        }
                    }
      },{
        name: 'Sonho, logo existo.',
        description: undefined,
        type: 'presentation',
        presentation: {
            title: 'Sonho, logo existo.',
            description: 'Já reparou como sonhar é importante? São os sonhos que nos motivam, que dão sentido à nossa vida. Quer ver? Entre com a gente na mente sonhadora do Beto e descubra! ',
            image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
        },
          contentFormat: 'map',
          content: {
              title: 'Sonho, logo existo.',
              text: 'Já reparou como sonhar é importante? São os sonhos que nos motivam, que dão sentido à nossa vida. Quer ver? Entre com a gente na mente sonhadora do Beto e descubra! ',
              type: 'presentation',
              background: _.find(files, file => file.filename === 'Aula04_Sonhos_at1.png').fileUrl,
              baseResolution: {
                  width: 1080,
                  height: 1020
              },
              mapping: [{
                  coordinates: '212,289,194,318,199,356,211,384,231,404,274,414,294,412,335,379,348,335,346,297,325,272,284,257,242,261',
                  shape: 'poly',
                  tickPosition: {
                      x: 233,
                      y: 282
                  },
                  feedback: {
                      title: 'Sonho, logo existo.',
                      text: 'O Beto sonha em passar no vestibular. Ele quer ser engenheiro! É isso que motiva o Beto a acordar bem cedo e estudar! Esse sonho mostra para o Beto todo dia aonde ele deve ir.',
                      image: _.find(files, file => file.filename === 'Aula04_Sonhos_at2.png').fileUrl
                  }
              }, {
                  coordinates: "767,157,761,195,774,238,798,254,850,267,900,240,919,194,911,147,885,120,833,101,787,118",
                  shape: 'poly',
                  tickPosition: {
                      x: 788,
                      y: 137
                  },
                  feedback: {
                      title: 'Sonho, logo existo.',
                      text: 'Tem outro sonho que o Beto tem desde criança e nunca perdeu de vista: viajar pelo mundo! Ele quer conhecer muitos países e isso o  estimula a trabalhar bastante para juntar uma graninha todo mês! Um dia o Beto realiza esse sonho!',
                      image: _.find(files, file => file.filename === 'Aula04_Sonhos_at3.png').fileUrl,
                  }
              }, {
                  coordinates: "339,739,335,777,353,814,389,835,424,834,465,814,491,768,482,716,452,689,428,679,380,686,350,707",
                  shape: 'poly',
                  tickPosition: {
                      x: 372,
                      y: 701
                  },
                  feedback: {
                      title: 'Sonho, logo existo.',
                      text: 'Ah, e o Beto também sonha em ter uma família e seu próprio negócio. Mas isso é coisa pra bem depois! O importante é que o Beto está correndo atrás do que quer e não deixando a vida rolar. Sonhar é isso: ter um objetivo e seguir em frente!',
                      image: _.find(files, file => file.filename === 'Aula04_Sonhos_at4.png').fileUrl,
                  }
              }]

          }
      },{
        name: 'Tá na lista.',
        description: undefined,
        type: 'presentation',
        presentation: {
            title: 'Tá na lista.',
            description: 'Veja os sonhos abaixo e arraste os que estão na sua lista para “tá na lista” e os que não estão para “tá fora”. Depois, aproveite para continuar sua lista e anote seus outros sonhos em um papel.',
            image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
        },
          contentFormat: 'classify',
          content: {
            title: 'Tá na lista.',
            text: 'Veja os sonhos abaixo e arraste os que estão na sua lista para “tá na lista” e os que não estão para “tá fora”. Depois, aproveite para continuar sua lista e anote seus outros sonhos em um papel.',
            questions: [{
                // feedbacks: [{
                //     title: 'Muito bem!',
                //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                //     type: 'positive'
                // }, {
                //     title: 'Ooops!',
                //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                //     type: 'negative'
                // }],
                image: _.find(files, file => file.filename === 'Aula4_Sonhos_at03_01.png').fileUrl,
                alternativesType: 'text',
                alternatives: {
                    left: {
                        option: 'tá na lista'
                    },
                    right: {
                        option: 'tá fora'
                    }
                },
              },{
                image: _.find(files, file => file.filename === 'Aula4_Sonhos_at03_02.png').fileUrl,
                alternativesType: 'text',
                alternatives: {
                    left: {
                        option: 'tá na lista'
                    },
                    right: {
                        option: 'tá fora'
                    }
                },
              },{
                image: _.find(files, file => file.filename === 'Aula4_Sonhos_at03_03.png').fileUrl,
                alternativesType: 'text',
                alternatives: {
                    left: {
                        option: 'tá na lista'
                    },
                    right: {
                        option: 'tá fora'
                    }
                },
              },{
                image: _.find(files, file => file.filename === 'Aula4_Sonhos_at03_04.png').fileUrl,
                alternativesType: 'text',
                alternatives: {
                    left: {
                        option: 'tá na lista'
                    },
                    right: {
                        option: 'tá fora'
                    }
                },
              },{
                image: _.find(files, file => file.filename === 'Aula4_Sonhos_at03_05.png').fileUrl,
                alternativesType: 'text',
                alternatives: {
                    left: {
                        option: 'tá na lista'
                    },
                    right: {
                        option: 'tá fora'
                    }
                },
              },{
                image: _.find(files, file => file.filename === 'Aula4_Sonhos_at03_06.png').fileUrl,
                alternativesType: 'text',
                alternatives: {
                    left: {
                        option: 'tá na lista'
                    },
                    right: {
                        option: 'tá fora'
                    }
                },
              },{
                image: _.find(files, file => file.filename === 'Aula4_Sonhos_at03_07.png').fileUrl,
                alternativesType: 'text',
                alternatives: {
                    left: {
                        option: 'tá na lista'
                    },
                    right: {
                        option: 'tá fora'
                    }
                },
              },{
                image: _.find(files, file => file.filename === 'Aula4_Sonhos_at03_08.png').fileUrl,
                alternativesType: 'text',
                alternatives: {
                    left: {
                        option: 'tá na lista'
                    },
                    right: {
                        option: 'tá fora'
                    }
                },
              }]// final do questions

          }

      },{
        name: 'Bola de cristal',
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
                image: _.find(files, file => file.filename === 'Aula04_Sonhos_at5.png').fileUrl,
                audio: {
                    fileUrl: 'files/stream?type=audios&filename=' + 'Sonhos-e-visao-aula2-boladecristal.mp3',
                    type: 'audio/mpeg'
                },
                // subtitles: {
                //     fileUrl: _.find(files, file => file.filename === 'S-entrevista-napontadalingua_audio1.vtt').fileUrl,
                //     label: 'Português'
                // },
            }]}
      },{
        name: 'Entre em ação!',
        description: undefined,
        type: 'presentation',
        presentation: {
            title: 'Seu trampo não é sua casa',
            description: 'Legal! Você tem uma visão de futuro. E agora? Como realizá-la? O lance é fazer um plano de ação! Agora vamos te mostrar como faz.',
            image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
        },
        contentFormat: 'slides',
        content: {
            slides: [{
                image: _.find(files, file => file.filename === 'Aula04_Sonhos_at6.png').fileUrl,
                title: 'Entre em ação!',
                text: 'Coloque no seu plano de ação tudo o que você precisa para alcançar seus objetivos: próximos passos, ações e prazos. Ah, o mais importante: nunca perca de vista onde você quer chegar! Veja este exemplo, se inspire e faça o seu!'
            }]}

      },{
        name: 'O caminho pra chegar lá.',
        description: undefined,
        type: 'interaction',
        presentation: {
            title: 'O caminho pra chegar lá.',
            description: 'Estabelecer prazos e prioridades é muito importante para quem quer realizar sua visão de futuro.',
            image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
        },
        contentFormat: 'relate',
        content: {
          questions: [{
              title: 'Relacione',
              text: 'Você é o vendedor de uma loja de eletrônicos e vai ter que se virar para não perder o cliente! Valendo!.',
              // feedbacks: [{
              //     title: 'Muito bem!',
              //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
              //     type: 'positive'
              // }, {
              //     title: 'Quase lá!',
              //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
              //     type: 'intermediate'
              // },{
              //     title: 'Ooops!',
              //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
              //     type: 'negative'
              // }],
              drops: [{
                  number: 1,
                  image: _.find(files, file => file.filename === 'Aula4_Sonhos_at06_01.png').fileUrl,
              }, {
                  number: 2,
                  image: _.find(files, file => file.filename === 'Aula4_Sonhos_at06_02.png').fileUrl,
              }, {
                  number: 3,
                  image: _.find(files, file => file.filename === 'Aula4_Sonhos_at06_03.png').fileUrl,
              }, {
                  number: 4,
                  image: _.find(files, file => file.filename === 'Aula4_Sonhos_at06_04.png').fileUrl,
              }],
              drags: [{
                  text: '2 semanas',
                  relatedTo: 1
              }, {
                  text: '1 mês',
                  relatedTo: 2
              }, {
                  text: '3 meses',
                  relatedTo: 3
              }, {
                  text: '6 meses',
                  relatedTo: 4
              }]

        }]}

      }]//final do action
    })
  ]
);
