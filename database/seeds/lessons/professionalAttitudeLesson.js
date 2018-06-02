'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Postura Profissional",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Marketing Pessoal')._id,
            ],
            description: 'No trabalho, tão importante quanto ser competente é ter um comportamento bacana. E isso inclui pontualidade, respeito pelos colegas, comprometimento. Quer saber mais? Fique de olho nessa aula!',
            estimatedTime: '7',
            image: _.find(files, file => file.filename === 'Aula_07.png').fileUrl,
            activities: [{
              name: 'Se encaixando',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Se encaixando',
                  description: 'Se encaixando”. Colocar descrição do vídeo: “Na hora do trampo, a Bruna não dá mancada! Aperte o play e aprenda com ela.',
                  image: _.find(files, file => file.filename === 'capa_postura_profissional.png').fileUrl
              },
              contentFormat: 'video',
              content: {
                  title: 'Se Encaixando',
                  text: 'Se encaixando”. Colocar descrição do vídeo: “Na hora do trampo, a Bruna não dá mancada! Aperte o play e aprenda com ela.',
                  video: {
                      fileUrl: 'files/stream?type=videos&filename=' + '3-POSTURA_PROFISSIONAL_online.mp4',
                      type: 'video/mp4'
                  },
                  subtitles: {
                      fileUrl: _.find(files, file => file.filename === 'Postura_profissional.vtt').fileUrl,
                      label: 'Português'
                  }
              }

            },{
              name: 'De olho no lance',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'De olho no lance',
                  description: 'Você passou por todo o processo seletivo e chegou o grande dia de começar a trabalhar. O desafio agora é mandar bem na largada, mostrando de cara que você foi a escolha certa.',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl // TODO
              },
              contentFormat: 'simpleQuiz',
              content: { questions:[{
                title: 'De olho no lance',
                text: 'Se arrumando para o trampo, aquela gata (ou gato) com quem você queria tanto sair resolveu te dar bola e te chamou pra dar um rolê na mesma hora. Você…',
                image: _.find(files, file => file.filename === 'Aula07_Postura_at1.png').fileUrl,
                alternativesType: 'text',
                feedbacks: [{
                    title: 'Muito bem!',
                    text: 'Mandou bem! O encontro pode esperar, o trampo não!',
                    type: 'positive'
                }, {
                    title: 'Ooops!',
                    text: 'Xiiii… Começou mal! Você acha que seu chefe vai confiar em você depois de uma mancada dessa? ',
                    type: 'negative'
                }],
                alternatives: [{
                    option: '… liga para a firma e diz que amanheceu super doente e que só poderá ir amanhã. Afinal, uma lindeza dessas não pode esperar!',
                    letter: 'A'
                }, {
                    option: '… liga pra gata (ou gato) remarca o rolê pra outro dia e, de quebra, mostra que é uma pessoa de responsa.',
                    letter: 'B'
                }],
                correctAnswer: 'B'
              },{
                title: 'De olho no lance',
                text: 'Seu chefe marcou uma reunião às 14h. Você vai almoçar e vê uma fila imensa para servir o almoço faltando apenas 30 minutos para o horário da reunião. O que você faz? ',
                image: _.find(files, file => file.filename === 'Aula07_Postura_at2.png').fileUrl,
                alternativesType: 'text',
                feedbacks: [{
                    title: 'Muito bem!',
                    text: 'Boa solução! Tente se programar melhor da próxima vez para ter mais tempo de almoço.',
                    type: 'positive'
                }, {
                    title: 'Ooops!',
                    text: 'Ops… essa não foi uma boa escolha. Que tal se programar melhor da próxima vez para ter mais tempo de almoço?',
                    type: 'negative'
                }],
                alternatives: [{
                    option: 'Procura algo pronto e rápido nas redondezas, come e volta ligeiro para chegar pelo menos 5 minutos antes do combinado.',
                    letter: 'A'
                }, {
                    option: 'Encara a fila, pega o prato com calma e come no seu tempo.  Afinal, ninguém vai notar se você atrasar.',
                    letter: 'B'
                }],
                correctAnswer: 'A'

              },{
                title: 'De olho no lance',
                text: 'Você combinou de entregar um trabalho até as 16h. Às 15h40, quando você está terminando, um colega te chama para tomar um café e contar uma fofoca quentíssima. Você...',
                image: _.find(files, file => file.filename === 'Aula07_Postura_at3.png').fileUrl,
                alternativesType: 'text',
                feedbacks: [{
                    title: 'Maravilha!',
                    text: 'Você mostrou que é muito comprometido com prazos. Isso conta pontos pra você!',
                    type: 'positive'
                }, {
                    title: 'Hummm…',
                    text: 'Pense bem! Não seria melhor terminar o trabalho primeiro e mostrar que você é super comprometido com prazos?',
                    type: 'negative'
                }],
                alternatives: [{
                    option: 'Diz que precisa terminar o trabalho primeiro e pede para o colega esperar.',
                    letter: 'A'
                }, {
                    option: 'Não aguenta a curiosidade, corre para o café pra saber da fofoca e deixa pra terminar o trabalho na volta.',
                    letter: 'B'
                }],
                correctAnswer: 'A'
              }]
            }
          },
          {
            name: 'Lembre sempre...',
            description: undefined,
            type: 'interaction',
            presentation: {
                title: 'Lembre sempre...',
                description: 'Existem termos, expressões e atitudes que são legais pra usar com os amigos, mas que no ambiente de trabalho não pegam bem. Veja as situações a seguir e memorize a resposta correta.',
                image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
            },
            contentFormat: 'memoryQuiz',
            content: { questions:[{
              title: 'Lembre sempre...',
              text: 'Ainda no seu primeiro dia de trampo, seu chefe te apresenta seu colega de trabalho, o Francisco. Logo mais você precisa falar com ele e então o chama de:',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Num primeiro contato é legal chamar sempre pelo nome, e não por apelidos ou expressões!',
                  type: 'positive'
              }, {
                  title: 'Ooops!',
                  text: 'Num primeiro contato é legal chamar sempre pelo nome, e não por apelidos ou expressões!',
                  type: 'negative'
              }],
              alternatives: [{
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t1_01.png').fileUrl,
                letter: 'A'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t1_02.png').fileUrl,
                letter: 'B'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t1_03.png').fileUrl,
                letter: 'C'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t1_04.png').fileUrl,
                letter: 'D'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t1_05.png').fileUrl,
                letter: 'E'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t1_06.png').fileUrl,
                letter: 'F'
              }
            ],
              correctAnswer: 'A'
            },{
              title: 'Lembre sempre...',
              text: 'Seu colega de trabalho te pede uma ajuda para entregar um relatório e você fica super chateado com o prazo que é curto. Você então...',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Conversar com calma é sempre a melhor opção. Resolver as coisas com as palavras certas mostra que você é um cara equilibrado e confiável.',
                  type: 'positive'
              }, {
                  title: 'Ooops!',
                  text: 'Conversar com calma é sempre a melhor opção. Resolver as coisas com as palavras certas mostra que você é um cara equilibrado e confiável.',
                  type: 'negative'
              }],
              alternatives: [{
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t2_01.png').fileUrl,
                letter: 'A'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t2_02.png').fileUrl,
                letter: 'B'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t2_03.png').fileUrl,
                letter: 'C'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t2_04.png').fileUrl,
                letter: 'D'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t2_05.png').fileUrl,
                letter: 'E'
              },{
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t2_06.png').fileUrl,
                letter: 'F'
              }],
              correctAnswer: 'C'


            },
            {
              title: 'Lembre sempre...',
              text: 'Você sai pra almoçar com a galera do trampo. Conversa vai, conversa vem e você decide falar sobre...',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Aproveitar esse momento para falar de coisas boas é a melhor escolha. Nada de abordar assuntos polêmicos, como religião, e muito menos falar mal da empresa ou fazer fofocas. ',
                  type: 'positive'
              }, {
                  title: 'Ooops!',
                  text: 'Aproveitar esse momento para falar de coisas boas é a melhor escolha. Nada de abordar assuntos polêmicos, como religião, e muito menos falar mal da empresa ou fazer fofocas. ',
                  type: 'negative'
              }],
              alternatives: [{
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t3_01.png').fileUrl,
                letter: 'A'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t3_02.png').fileUrl,
                letter: 'B'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t3_03.png').fileUrl,
                letter: 'C'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t3_04.png').fileUrl,
                letter: 'D'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t3_05.png').fileUrl,
                letter: 'E'
              },{
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t3_06.png').fileUrl,
                letter: 'F'
              }],
              correctAnswer: 'E'
            },{
              title: 'Lembre sempre...',
              text: 'A festa de fim de ano foi incrível! Você ficou conhecido como o cara que...',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Festas como essa são divertidas, mas não dá pra extrapolar! Lembre-se que, no dia seguinte, você estará com todas aquelas pessoas no trabalho. Não faça nada que te envergonhe depois.',
                  type: 'positive'
              }, {
                  title: 'Ooops!',
                  text: 'Festas como essa são divertidas, mas não dá pra extrapolar! Lembre-se que, no dia seguinte, você estará com todas aquelas pessoas no trabalho. Não faça nada que te envergonhe depois.',
                  type: 'negative'
              }],
              alternatives: [{
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t4_01.png').fileUrl,
                letter: 'A'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t4_02.png').fileUrl,
                letter: 'B'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t4_03.png').fileUrl,
                letter: 'C'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t4_04.png').fileUrl,
                letter: 'D'
              }, {
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t4_05.png').fileUrl,
                letter: 'E'
              },{
                option: _.find(files, file => file.filename === 'Aula7_Postura_Profissional_at03_t4_06.png').fileUrl,
                letter: 'F'
              }],
              correctAnswer: 'D'

            }]//final do questions
          }
        },
        {
          name: 'Pense rápido ',
          description: undefined,
          type: 'interaction',
          presentation: {
              title: 'Pense rápido ',
              description: 'Vamos agora testar situações do trabalho que exigem uma reação rápida, com pouco tempo pra pensar.',
              image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
          },
          contentFormat: 'simpleQuiz',
          content: { questions:[{
            title: 'Pense rápido',
            text: 'Você está concentrado no trabalho e o telefone toca. O que você faz?',
            time: 3,
            alternativesType: 'image',
            feedbacks: [{
                title: 'Legal!',
                text: 'Você tomou uma decisão rápida e mostrou que é proativo.',
                type: 'positive'
            }, {
                title: 'Ooops!',
                text: 'Puxa, não seria melhor mostrar que está ligado no que acontece e atender o telefone?',
                type: 'negative'
            }],
            alternatives: [{
                option: _.find(files, file => file.filename === 'Aula07_Postura_at4a.png').fileUrl,
                letter: 'A'
            }, {
                option: _.find(files, file => file.filename === 'Aula07_Postura_at4b.png').fileUrl,
                letter: 'B'
            }],
            correctAnswer: 'A'

          },{
            title: 'Pense rápido',
            text: 'Seu chefe te mandou um e-mail e pediu uma resposta o mais rápido possível. O que você faz?',
            time: 3,
            alternativesType: 'image',
            feedbacks: [{
                title: 'Bacana!',
                text: 'Você foi rápido mas não mandou a resposta de qualquer jeito.',
                type: 'positive'
            }, {
                title: 'Essa foi mal!',
                text: 'Não adianta ser rápido, fazendo as coisas de qualquer jeito.',
                type: 'negative'
            }],
            alternatives: [{
                option: _.find(files, file => file.filename === 'Aula07_Postura_at5a.png').fileUrl,
                letter: 'A'
            }, {
                option: _.find(files, file => file.filename === 'Aula07_Postura_at5b.png').fileUrl,
                letter: 'B'
            }],
            correctAnswer: 'A'

          },{
            title: 'Pense rápido',
            text: 'Você está chateado com problemas do trabalho e sente que precisa desabafar. O que você faz?',
            time: 3,
            alternativesType: 'image',
            feedbacks: [{
                title: 'Boa!',
                text: 'Você desabafou com um colega ao invés de expor seu problema para um monte de gente!',
                type: 'positive'
            }, {
                title: 'Ops',
                text: 'desse jeito você está expondo seu problema e a empresa também. O melhor seria conversar com alguém de confiança.',
                type: 'negative'
            }],
            alternatives: [{
                option: _.find(files, file => file.filename === 'Aula07_Postura_at6a.png').fileUrl,
                letter: 'A'
            }, {
                option: _.find(files, file => file.filename === 'Aula07_Postura_at6b.png').fileUrl,
                letter: 'B'
            }],
            correctAnswer: 'B'

          },{
            title: 'Pense rápido',
            text: 'Você está no meio de uma reunião importante e sua namorada(o) te manda um whatsapp cheio de amor.',
            time: 3,
            alternativesType: 'image',
            feedbacks: [{
                title: 'Muito bem!',
                text: 'Parabéns pela atitude! É muito legal receber esse tipo de mensagem, mas não deixe que ela atrapalhe seu trampo.',
                type: 'positive'
            }, {
                title: 'Nada disso!',
                text: 'Ficar no celular no meio da reunião demonstra desinteresse e falta de respeito pelas outras pessoas.',
                type: 'negative'
            }],
            alternatives: [{
                option: _.find(files, file => file.filename === 'Aula07_Postura_at7a.png').fileUrl,
                letter: 'A'
            }, {
                option: _.find(files, file => file.filename === 'Aula07_Postura_at7b.png').fileUrl,
                letter: 'B'
            }],
            correctAnswer: 'B'

          },{
            title: 'Pense rápido',
            text: 'Te avisaram no meio do trabalho que o tênis que você tanto queria está em promoção na internet. O que você faz?',
            time: 3,
            alternativesType: 'image',
            feedbacks: [{
                title: 'Show!',
                text: 'O tênis não vai sair correndo. Além disso, pega muito mal ficar fazendo um monte de coisas pessoais em horário de trampo.',
                type: 'positive'
            }, {
                title: 'Se liga!',
                text: 'Fazer coisas pessoais em horário de trampo é mancada!',
                type: 'negative'
            }],
            alternatives: [{
                option: _.find(files, file => file.filename === 'Aula07_Postura_at8a.png').fileUrl,
                letter: 'A'
            }, {
                option: _.find(files, file => file.filename === 'Aula07_Postura_at8b.png').fileUrl,
                letter: 'B'
            }],
            correctAnswer: 'B'
          }]}
        },{
          name: 'Cuidado sim, medo não',
          description: undefined,
          type: 'presentation',
          presentation: {
              title: 'Cuidado sim, medo não',
              description: 'Pra finalizar essa aula, queremos dizer que todo mundo erra e se você cometer alguma falha, não se crucifique. O importante é mostrar vontade de aprender e se desenvolver.',
              image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl // TODO
          },
          contentFormat: 'slides',
          content:{
            slides: [{
                image: _.find(files, file => file.filename === 'Aula07_Postura_at9.png').fileUrl,
                title: 'Cuidado sim, medo não',
                text: 'Seja honesto sempre, e íntegro, mantendo seus princípios. Você não é obrigado a concordar com tudo e, quando algo estiver incomodando, observe quem é a melhor pessoa, o melhor lugar e a melhor hora para conversar e expor o que você pensa. Continue evoluindo e boa sorte!'
            }]
          }

        }]//final do metodo action
        })
    ]
);
