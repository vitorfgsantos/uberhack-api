'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Apresentações",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Propósito de vida')._id,
            ],
            description: 'No trabalho é assim: você sempre precisa defender suas ideias, vender seu peixe! E o melhor jeito de fazer isso é montando uma boa apresentação. Mas você sabe como fazer, o que escrever, por onde começar? Se liga nessa aula que a gente vai mostrar tudo!',
            estimatedTime: '7',
            image: _.find(files, file => file.filename === 'Aula_03.png').fileUrl,
            activities: [{
              name: 'Apresentação "profissa"',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Apresentação "profissa"',
                  description: 'Para montar uma apresentação profissional, o importante é deixá-la curta, simples, clara e atrativa. Afinal, ninguém quer gastar tempo com blá, blá, blá, certo? Pra ir direto ao ponto, antes de já sair montando a apresentação, faça um roteiro no papel respondendo as perguntas a seguir:',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'slides',
              content: {
                slides: [{
                    image: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at1.png').fileUrl,
                    title: 'O que apresentar e qual o objetivo?',
                    text: 'Mais do que saber o assunto, o importante é ter bem claro onde você quer chegar. Afinal, uma apresentação é como uma história: tem que ter começo, meio e fim!'
                }, {
                    image: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at2.png').fileUrl,
                    title: 'Quando apresentar e em quanto?',
                    text: 'Comece a preparar a apresentação pelo menos uma semana antes. Assim, você faz tudo com calma e dá aquela revisada. Afinal, apresentação com erro de português não dá! Ah,  e fique de olho no tempo que você tem para apresentar! '
                }, {
                    image: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at3.png').fileUrl,
                    title: 'Quem vai assistir sua apresentação? ',
                    text: 'Saber para quem você vai falar faz toda a diferença na hora de montar sua apresentação. Se o público não conhece o assunto, é bola fora usar um monte de termos técnicos! Mantenha o foco no seu público e no que ele quer saber!'
                },{
                  image: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at4.png').fileUrl,
                  title: 'Quais ferramentas você vai usar?',
                  text: 'E, por fim, defina que tipo de apresentação você vai fazer. Um vídeo? Um power point? Hoje, existem vários programas de apresentações com diferentes recursos. Mas não exagere nos efeitos. Usar muitas animações ou um gráfico cheio de cores só confunde quem está assistindo.'

                }]
              }
            },{
              name: 'Escolha as ferramentas.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Escolha as ferramentas.',
                  description: 'A Alice faz muitas apresentações! Não é à toa que ela tem vários programas e aplicativos exclusivos para isso em seu computador. Vamos conhecê-los? ',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
                contentFormat: 'map',
                content: {
                    title: 'Quem indica?',
                    text: 'A Alice faz muitas apresentações! Não é à toa que ela tem vários programas e aplicativos exclusivos para isso em seu computador. Vamos conhecê-los? ',
                    type: 'presentation',
                    background: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at5.png').fileUrl,
                    baseResolution: {
                        width: 1080,
                        height: 1020
                    },
                    mapping: [{
                        coordinates: '176,133,166,346,209,449,314,448,347,128',
                        shape: 'poly',
                        tickPosition: {
                            x: 209,
                            y: 147
                        },
                        feedback: {
                            title: 'Power Point',
                            text: 'Este é o Power Point, o programa de apresentações mais conhecido de todos. Ele é bem fácil de mexer e você pode incluir imagens, vídeos, efeitos e áudios para enriquecer sua apresentação e encantar o público. ',
                            image: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at6.png').fileUrl
                        }
                    }, {
                        coordinates: "380,130,397,435,540,438,548,128",
                        shape: 'poly',
                        tickPosition: {
                            x: 409,
                            y: 152
                        },
                        feedback: {
                            title: 'Prezi',
                            text: 'Este aqui é o Prezi. Um programa muito interativo para apresentações. Ao invés de slides, ele utiliza uma única tela e os vídeos, fotos, imagens e textos vão aparecendo na hora que você escolher. Basta ir passeando pela tela.',
                            image: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at7.png').fileUrl,
                        }
                    }, {
                        coordinates: "588,129,596,426,730,411,736,131",
                        shape: 'poly',
                        tickPosition: {
                            x: 611,
                            y: 152
                        },
                        feedback: {
                            title: 'Sway',
                            text: 'Este é o Sway, um aplicativo da Microsoft bem simples e prático de usar. Você pode compartilhar sua apresentação com várias pessoas e acessá-lo de qualquer lugar.',
                            image: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at8.png').fileUrl,
                        }
                    }, {
                        coordinates: "770,133,914,123,892,440,780,433",
                        shape: 'poly',
                        tickPosition: {
                            x: 800,
                            y: 154
                        },
                        feedback: {
                            title: 'Google Docs',
                            text: 'O Google Docs é o serviço mais prático de todos. Para utilizá-lo, você só precisa ter uma conta no Google. Como é um serviço online, várias pessoas podem acessar e editar a apresentação e as alterações são salvas automaticamente.',
                            image: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at9.png').fileUrl,
                        }
                    }]

                }
            },{
              name: 'Show ou fiasco?',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Show ou fiasco?',
                  description: 'Alguns pontos são muito importantes na hora de preparar um slide. E você? Saberia dizer quais deixam a apresentação um show ou um fiasco?',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'simpleQuiz',
              content: {
                  questions: [{
                      title: 'Show ou fiasco?',
                      text: 'Economizar slides, colocando o máximo de informações em cada um.',
                      alternativesType: 'image',
                      feedbacks: [{
                          title: 'Muito bem!',
                          text: 'O ideal é colocar uma informação importante por slide e usar quantos slides forem necessários para defender sua ideia.',
                          type: 'positive'
                      }, {
                          title: 'Errou!',
                          text: 'O ideal é colocar uma informação importante por slide e usar quantos slides forem necessários para defender sua ideia.',
                          type: 'negative'
                      }],
                      alternatives: [{
                          option: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at10b.png').fileUrl,
                          letter: 'A'
                      }, {
                          option: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at10a.png').fileUrl,
                          letter: 'B'
                      }],
                      correctAnswer: 'B'
                  },{
                    title: 'Show ou fiasco?',
                    text: 'Deixar as letras bem pequenas, para aproveitar melhor o espaço do slide.',
                    alternativesType: 'image',
                    feedbacks: [{
                        title: 'Boa!',
                        text: 'Letras muito pequenas podem não ser vistas. Lembre-se que pode haver pessoas na sala que não ',
                        type: 'positive'
                    }, {
                        title: 'Foi mal!',
                        text: 'Letras muito pequenas podem não ser vistas. Lembre-se que pode haver pessoas na sala que não enxergam bem.',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at10b.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at10a.png').fileUrl,
                        letter: 'B'
                    }],
                    correctAnswer: 'B'
                  },{
                    title: 'Show ou fiasco?',
                    text: 'Usar uma fonte bem neutra ou a letra padrão da empresa.',
                    alternativesType: 'image',
                    feedbacks: [{
                        title: 'Boa!',
                        text: 'Letras muito rebuscadas podem deixar a apresentação poluída e ilegível.',
                        type: 'positive'
                    }, {
                        title: 'Foi mal!',
                        text: 'Nada disso! Letras muito rebuscadas podem deixar a apresentação poluída e ilegível.',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at10b.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at10a.png').fileUrl,
                        letter: 'B'
                    }],
                    correctAnswer: 'A'
                  },{
                    title: 'Show ou fiasco?',
                    text: 'Destacar as informações mais importantes.',
                    alternativesType: 'image',
                    feedbacks: [{
                        title: 'Boa!',
                        text: 'As pessoas retêm mais as informações que estão em destaque. ',
                        type: 'positive'
                    }, {
                        title: 'Foi mal!',
                        text: 'As pessoas retêm mais as informações que estão em destaque. ',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at10b.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at10a.png').fileUrl,
                        letter: 'B'
                    }],
                    correctAnswer: 'A'
                  },{
                    title: 'Show ou fiasco?',
                    text: 'Usar cores bem contrastantes, de preferência as cores da marca que você está fazendo a apresentação. ',
                    alternativesType: 'image',
                    feedbacks: [{
                        title: 'Isso mesmo!!',
                        text: 'Priorize os contrastes, para uma cor não apagar a outra.',
                        type: 'positive'
                    }, {
                        title: 'Não!',
                        text: 'Priorize os contrastes, para uma cor não apagar a outra.',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at10b.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at10a.png').fileUrl,
                        letter: 'B'
                    }],
                    correctAnswer: 'A'
                  },{
                    title: 'Show ou fiasco?',
                    text: 'Colocar muitas imagens, só para deixar o slide mais bonito.',
                    alternativesType: 'image',
                    feedbacks: [{
                        title: 'Mandou bem!',
                        text: 'As imagens devem ser utilizadas para enfatizar o que você quer dizer. Além disso,  o uso em excesso pode poluir a apresentação. ',
                        type: 'positive'
                    }, {
                        title: 'Tá errado!',
                        text: 'As imagens devem ser utilizadas para enfatizar o que você quer dizer. Além disso, o uso em excesso pode poluir a apresentação. ',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at10b.png').fileUrl,
                        letter: 'A'
                    }, {
                        option: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at10a.png').fileUrl,
                        letter: 'B'
                    }],
                    correctAnswer: 'B'
                  }
                ]}//final do content

            },{
              name: 'Teste dos 3 segundos.',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Teste dos 3 segundos.',
                  description: 'Você tem 3 segundos para ver o slide a seguir e encontrar 3 erros! Você sabia que esse é o tempo que um slide deve ser totalmente compreendido? Quando terminar sua apresentação, repasse seus slides e faça o teste!',
                  image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
              },
              contentFormat: 'errors',
              content: {
                  questions: [{
                      title: 'Teste dos 3 segundos.',
                      text: 'Ilustração de um slide com  3 erros:',
                      background: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at04.png').fileUrl,
                      clicks: 3,
                      baseResolution: {
                          width: 1080,
                          height: 1020
                      },
                      mappings: [{
                          coordinates: '111,66,110,203,869,190,832,74',
                          shape: 'poly',
                          tickPosition: {
                              x: 196,
                              y: 53
                          },
                          feedback: {
                              title: 'Parabéns!',
                              text: 'Esta frase tem dois erros de português: ortográfico (crecimento) e de concordância (produto infantis)',
                              type: 'positive'
                          }
                      }, {
                          coordinates: '144,227,137,276,469,277,466,229',
                          shape: 'poly',
                          tickPosition: {
                              x: 150,
                              y: 218
                          },
                          feedback: {
                              title: 'Show!',
                              text: 'Essa fonte não dá uma boa leitura.',
                              type: 'positive'
                          }
                      },{
                        coordinates: '390,429,745,363,820,400,813,507,358,496',
                        shape: 'poly',
                        tickPosition: {
                            x: 628,
                            y: 360
                        },
                        feedback: {
                            title: 'Maravilha!',
                            text: 'Esse gráfico tem tantas cores que confunde as pessoas.',
                            type: 'positive'
                        }
                      }]
                  }]
              }
            },{
              name: 'Só o necessário.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Só o necessário.',
                  description: 'Ouça algumas dicas para você arrasar na sua apresentação!',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'audio',
              content: {
                  questions: [{
                      title: 'Só o necessário.',
                      text: 'Este é o Ricardo! Ele montou um projeto muito bacana e agora está apresentando. Vamos ouvir o que ele vai dizer?',
                      image: _.find(files, file => file.filename === 'Aula21_Ferramentas_Apresentacao_at12.png').fileUrl,
                      audio: {
                          fileUrl: 'files/stream?type=audios&filename=' + 'ferramentas-apresentacoes-soonecessario.mp3',
                          type: 'audio/mpeg'
                      },
                      // subtitles: {
                      //     fileUrl: _.find(files, file => file.filename === 'S-entrevista-napontadalingua_audio1.vtt').fileUrl,
                      //     label: 'Português'
                      // },
                  }]}
            }]//final do action
          })
        ]
);
