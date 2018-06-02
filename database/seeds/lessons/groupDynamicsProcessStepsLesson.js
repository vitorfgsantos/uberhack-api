'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Etapas do Processo e Dinâmica de Grupo",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Processo seletivo')._id,
            ],
            description: 'Para saber se você é o cara certo, a empresa tem que fazer um processo seletivo. E uma das etapas pode ser a Dinâmica de Grupo!  Mas calma… Isso não é um bicho de sete cabeças. A gente vai te explicar tudinho nessa aula! Respire fundo e vamos lá!',
            estimatedTime: '10',
            image: _.find(files, file => file.filename === 'Aula_12.png').fileUrl,
            activities: [{
              name: 'Emprego à vista! E agora?',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Emprego à vista! E agora?',
                  description: 'O Pyong quer te dar uma força nesta etapa e gravou um vídeo com um monte de dicas pra você. Bora ver?',
                  image: _.find(files, file => file.filename === 'capa_processoseletivo.png').fileUrl // TODO
              },
              contentFormat: 'video',
              content: {
                  title: 'Emprego à vista! E agora?',
                  text: 'O Pyong quer te dar uma força nesta etapa e gravou um vídeo com um monte de dicas pra você. Bora ver?',
                  video: {
                      fileUrl: 'files/stream?type=videos&filename=' + '5-DINAMICA_DE_GRUPO_online.mp4',
                      type: 'video/mp4'
                  },
                  subtitles: {
                      fileUrl: _.find(files, file => file.filename === 'processo-seletivo-relaxesoumadinamica.vtt').fileUrl,
                      label: 'Português'
                  }
              }

            },
           {
              name: 'O passo a passo do processo seletivo',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'O passo a passo do processo seletivo',
                  description: 'Você foi chamado para um processo de seleção e tem que ficar ligado nas etapas que vem pela frente.',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'slides',
              content: {
                  slides: [{
                      image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at1a.png').fileUrl,
                      title: 'O passo a passo do processo seletivo',
                      text: '<u>Triagem: </u>é aqui que seu currículo é avaliado. Às vezes rola até uma entrevista rápida, para ver se você está mesmo a fim da vaga!'
                  }, {
                      image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at1b.png').fileUrl,
                      title: 'O passo a passo do processo seletivo',
                      text: '<u>Teste:</u> talvez você tenha que fazer um ou mais testes, que podem ser de português, matemática, raciocínio lógico, redação, conhecimentos gerais… Cuidado com os erros de português, hein?'
                  }, {
                      image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at1c.png').fileUrl,
                      title: 'O passo a passo do processo seletivo',
                      text: '<u>Dinâmica de grupo:</u> atividade em que você é avaliado junto com os outros candidatos.'
                  }, {
                      image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at1d.png').fileUrl,
                      title: 'O passo a passo do processo seletivo',
                      text: '<u>Entrevista com RH:</u> é ele quem vai avaliar se você tem a ver com a vaga e com a cultura da empresa. Fale sobre sua vida, o que você gosta, o que te motiva…'
                  }, {
                      image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at1e.png').fileUrl,
                      title: 'O passo a passo do processo seletivo',
                      text: '<p><u>Entrevista Gestor: </u>esse provavelmente será seu chefe!</p>Mostre que você é o cara certo para a vaga e que está super atualizado com o que a empresa faz.'
                  }]
              }
            },
            {
              name: 'Organizando a bagunça.',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Organizando a bagunça.',
                  description: 'Bacana! Você já viu todas as etapas de um processo seletivo. Agora, topa fazer um teste?',
                  image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
              },
              contentFormat: 'order',
              content: {
                questions: [{
                    title: 'Organizando a bagunça.',
                    text: 'Organize todas as etapas, colocandos-as na ordem em que acontecem.',
                    feedbacks: [{
                        title: 'Muito bem!',
                        text: 'Parabéns! Agora você já sabe qual é o começo, o meio e o fim de um processo seletivo!',
                        type: 'positive'
                    }, {
                        title: 'Humm…',
                        text: 'Ainda está fora de ordem…  Da próxima vez, se concentre um pouco mais. ',
                        type: 'intermediate'
                    },{
                        title: 'Humm…',
                        text: 'Ainda está fora de ordem…  Da próxima vez, se concentre um pouco mais.',
                        type: 'negative'
                    }],
                    options: [{
                        image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at2e.png').fileUrl,
                        order: 2
                    }, {
                        image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at2b.png').fileUrl,
                        order: 5
                    }, {
                        image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at2c.png').fileUrl,
                        order: 1
                    }, {
                        image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at2d.png').fileUrl,
                        order: 3
                    }, {
                        image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at2a.png').fileUrl,
                        order: 4
                    }]
                }]

              }
            },{
              name: 'Relax… é só uma dinâmica!',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Relax… é só uma dinâmica!',
                  description: 'Descrição do audio.', // TODO
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl // TODO
              },
              contentFormat: 'audio',
              content: {
                  questions: [{
                      title: 'Relax… é só uma dinâmica!',
                      text: 'Atenda! É pra você.',
                      image: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at3.png').fileUrl,
                      audio: {
                          fileUrl: 'files/stream?type=audios&filename=' + 'processo-seletivo-relaxesoumadinamica.mp3',
                          type: 'audio/mpeg'
                      },
                    //   subtitles: {
                    //       fileUrl: _.find(files, file => file.filename === 'google-developer-stories-subtitles-en.vtt').fileUrl,
                    //       label: 'English'
                    //   },
                      // feedback: {
                      //     title: 'Que boa notícia!',
                      //     text: `
                      //       <p>Mas dinâmica de grupo? Caraca, isso dá frio na barriga de muita gente. </p>
                      //       <p>Mas calma, não precisa. É só uma atividade junto com outros candidatos para ver como cada um se sai em algumas situações. Siga a aula que vamos te dar boas dicas!</p>
                      //       `
                      //  }
                  }]
              }
            },{
              name: 'Se dando bem na dinâmica',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Se dando bem na dinâmica',
                  description: 'Nao possui', //TODO
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'multipleQuiz',
              content: { questions:[{
                title: 'Se dando bem na dinâmica',
                text: 'O telefone tocou… a moça do RH te chamou para a próxima etapa do processo de seleção, a Dinâmica de Grupo! O que você faz?',
                alternativesType: 'text',
                feedbacks: [{
                    title: 'Muito bem!',
                    text: 'É isso mesmo! Desse jeito você vai longe!',
                    type: 'positive'
                }, {
                    title: 'Ooops!',
                    text: 'Tá errado! Achar que a vaga já é sua, tentar descobrir o que vai rolar na dinâmica ou partir pra decoreba tá por fora!',
                    type: 'negative'
                }],
                alternatives: [{
                    option: 'Vai correndo comprar aquele tênis que tanto queria! Afinal, a vaga já é sua!',
                    letter: 'A'
                }, {
                    option: 'Faz uma pesquisa sobre a empresa na internet, dá aquela conferida no currículo e já pensa em como vai se apresentar.',
                    letter: 'B'
                }, {
                    option: 'Liga na empresa para tentar descobrir o que vai rolar nessa tal  dinâmica.',

                    letter: 'C'
                }, {
                    option: 'Decora a história da empresa pra falar na hora.',
                    letter: 'D'
                }],
                correctAnswer: 'B'
              },{
                title: 'Se dando bem na dinâmica',
                text: 'O dia da dinâmica chegou! Você abre o guarda-roupa e grande dúvida. O que vestir?',
                alternativesType: 'image',
                feedbacks: [{
                    title: 'Muito bem!',
                    text: 'Escolha certa!! Vestido assim, não vai ter erro!',
                    type: 'positive'
                }, {
                    title: 'Ooops!',
                    text: 'Ops… Com Regata, boné, camisa estampada ou camiseta de super-herói ninguém vai te levar muito a sério.',
                    type: 'negative'
                }],
                alternatives: [{
                    option: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at4a.png').fileUrl,
                    letter: 'A'
                }, {
                    option: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at4b.png').fileUrl,
                    letter: 'B'
                }, {
                    option: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at4c.png').fileUrl,
                    letter: 'C'
                }, {
                    option: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at4d.png').fileUrl,
                    letter: 'D'
                }],
                correctAnswer: 'B'

              },{
                title: 'Quiz múltipla 2',
                text: 'A dinâmica começou e a primeira atividade é falar um pouco sobre você. Preencha os espaços abaixo com as expressões mais adequadas. _______, meu nome é Marcelo, tenho 21 anos, estudo administração de empresas  e busco um lugar _______.',
                alternativesType: 'text',
                feedbacks: [{
                    title: 'Muito bem!',
                    text: 'Começou bem! É isso mesmo!',
                    type: 'positive'
                }, {
                    title: 'Ooops!',
                    text: 'Opção errada. Guarde as gírias para falar com seus amigos.',
                    type: 'negative'
                }],
                alternatives: [{
                    option: 'E aí galera / Animal pra trampar',
                    letter: 'A'
                }, {
                    option: 'Bom dia a todos / Onde eu possa desenvolver meus talentos.',
                    letter: 'B'
                }],
                correctAnswer: 'B'
              },{
                title: 'Se dando bem na dinâmica',
                text: 'Agora, o responsável da dinâmica anuncia uma atividade em grupo, em que todos devem trabalhar juntos para solucionar um problema. Diz pra gente o que você faz.',
                alternativesType: 'text',
                feedbacks: [{
                    title: 'Muito bem!',
                    text: 'Certíssimo!! Você pegou bem o espírito da   dinâmica.',
                    type: 'positive'
                }, {
                    title: 'Ooops!',
                    text: 'Errou! Numa dinâmica é sempre bom ser proativo, ouvir as ideias dos outros e falar o que pensa.',
                    type: 'negative'
                }],
                alternatives: [{
                    option: 'Fica esperando que alguém do grupo comece a atividade.',
                    letter: 'A'
                }, {
                    option: 'Interage com os participantes, dá opiniões e sugestões.',
                    letter: 'B'
                }, {
                    option: 'Sai fazendo o que você acha melhor, antes de ouvir a opinião  dos outros.',
                    feedback: 'Não, você errou! Esquisito é outra coisa.',
                    letter: 'C'
                }, {
                    option: ' Tem ideias mas não fala. Afinal ninguém precisa saber o que você pensa.',
                    letter: 'D'
                }],
                correctAnswer: 'B'

              }
            ]}
          },{
            name: 'Jogo dos erros',
            description: undefined,
            type: 'interaction',
            presentation: {
                title: 'Se dando bem na dinâmica',
                description: 'Se liga na cena e clique em 3 situações que não pegam bem numa Dinâmica de Grupo. ',
                image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
            },
            contentFormat: 'errors',
            content: { questions:[{
              title: 'Dando um oi por aí',
              text: 'Seu dia começa em casa e você passa por muitos lugares até a noite. Será que você cumprimenta todo mundo certinho? Quer testar? Clique nos lugares e descubra!',
              clicks: 3,
              background: _.find(files, file => file.filename === 'Aula12_Etapas_Processo_at5.png').fileUrl,
              baseResolution:{
                  width: 1080,
                  height: 1020
              },
              mappings: [{
                  coordinates: '1,416,106,306,214,248,132,68,2,71',
                  shape: 'poly',
                  tickPosition: {
                      x: 68,
                      y: 125
                  },
                  feedback: {
                      title: 'Muito bem!',
                      text: 'Bem observado! Chegar atrasado pega muito mal!',
                      type: 'positive'
                  }
              },{
                coordinates: '276,543,270,271,445,127,535,231,515,296',
                shape: 'poly',
                tickPosition: {
                    x: 378,
                    y: 167
                },
                feedback: {
                    title: 'Muito bem!',
                    text: 'Isso mesmo! Falar palavrão, nem pensar!!',
                    type: 'positive'
                }
              },{
                coordinates: '576,229,564,378,523,461,537,671,693,664,696,438,691,238',
                shape: 'poly',
                tickPosition: {
                    x: 562,
                    y: 232
                },
                feedback: {
                    title: 'Muito bem!',
                    text: 'Mandou bem! Controlar o nervosismo é fundamental numa dinâmica.',
                    type: 'positive'
                }

              }
            ]
            }
          ]}
          }]//final do action
        })
    ]
);
