'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Trabalho em Equipe",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Comunicação')._id,//TODO
            ],
            estimatedTime: 8,
            description: 'Relacionar-se bem com seus colegas e saber trabalhar em equipe são habilidades muito valorizadas nas empresas. Afinal, quando um grupo trabalha unido, as chances de sucesso são muito maiores! Vamos ver como isso rola no dia a dia?',
            image: _.find(files, file => file.filename === 'Aula_14.png').fileUrl, //TODO
            activities: [{
              name: 'A união faz a força.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'A união faz a força.',
                  description: 'A Bruna já descobriu que trabalhar em equipe traz muitas vantagens. Quer ver? Dê o play!',
                  image: _.find(files, file => file.filename === 'capa_trabalho_equipe.png').fileUrl
              },
              contentFormat: 'video',
              content: {
                title: 'A união faz a força.',
                text: 'A Bruna já descobriu que trabalhar em equipe traz muitas vantagens. Quer ver? Dê o play!',
                video: {
                    fileUrl: 'files/stream?type=videos&filename=' + '1-ATENDIMENTO_AO_CLIENTE_online.mp4',
                    type: 'video/mp4'
                },
                subtitles: {
                    fileUrl: _.find(files, file => file.filename === 'Atendimento_ao_cliente.vtt').fileUrl,
                    label: 'Português'
                }
              }
      },{
        name: 'Pequenos gestos, grande diferença.',
        description: undefined,
        type: 'interaction',
        presentation: {
            title: 'Pequenos gestos, grande diferença.',
            description: 'Se relacionar bem com seus colegas de trabalho faz toda a diferença! Mostre quais atitudes te deixam enturmado ou por fora da galera do trampo.',
            image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
        },
        contentFormat: 'classify',
        content: {
          title: 'Pequenos gestos, grande diferença.',
          text: 'Arraste as atitudes para mostrar se elas te deixam enturmado ou por fora.',
          questions:[{
            image: _.find(files, file => file.filename === 'Aula27_Lidar_com_pessoas_at02a.png').fileUrl,
            alternativesType: 'text',
            alternatives: {
                left: {
                    option: 'Por fora'
                },
                right: {
                    option: 'Enturmado'
                }
            },
            correctAnswer: 'right'

          },{
            image: _.find(files, file => file.filename === 'Aula27_Lidar_com_pessoas_at02b.png').fileUrl,
            alternativesType: 'text',
            alternatives: {
                left: {
                    option: 'Por fora'
                },
                right: {
                    option: 'Enturmado'
                }
            },
            correctAnswer: 'right'

          },{
            image: _.find(files, file => file.filename === 'Aula27_Lidar_com_pessoas_at02c.png').fileUrl,
            alternativesType: 'text',
            alternatives: {
                left: {
                    option: 'Por fora'
                },
                right: {
                    option: 'Enturmado'
                }
            },
            correctAnswer: 'left'
          },{
            image: _.find(files, file => file.filename === 'Aula27_Lidar_com_pessoas_at02d.png').fileUrl,
            alternativesType: 'text',
            alternatives: {
                left: {
                    option: 'Por fora'
                },
                right: {
                    option: 'Enturmado'
                }
            },
            correctAnswer: 'right'
          },{
            image: _.find(files, file => file.filename === 'Aula27_Lidar_com_pessoas_at02e.png').fileUrl,
            alternativesType: 'text',
            alternatives: {
                left: {
                    option: 'Por fora'
                },
                right: {
                    option: 'Enturmado'
                }
            },
            correctAnswer: 'left'
          },{
            image: _.find(files, file => file.filename === 'Aula27_Lidar_com_pessoas_at02f.png').fileUrl,
            alternativesType: 'text',
            alternatives: {
                left: {
                    option: 'Por fora'
                },
                right: {
                    option: 'Enturmado'
                }
            },
            correctAnswer: 'right'
          }]
        }
      },{
        name: 'Duas cabeças pensam melhor que uma.',
        description: undefined,
        type: 'interaction',
        presentation: {
            title: 'Duas cabeças pensam melhor que uma.',
            description: 'Quando trabalhamos em equipe, somos mais fortes e atingimos os melhores resultados.',
            image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
        },
        contentFormat: 'relate',
        content: {
          questions: [{
              title: 'Duas cabeças pensam melhor que uma.',
              text: 'Relacione as pessoas e descubra onde ganhamos força quando trabalhamos juntos.',
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
                  image: _.find(files, file => file.filename === 'Aula27_Lidar_com_pessoas_at03_c1.png').fileUrl,
              }, {
                  number: 2,
                  image: _.find(files, file => file.filename === 'Aula27_Lidar_com_pessoas_at03a1.png').fileUrl,
              }, {
                  number: 3,
                  image: _.find(files, file => file.filename === 'Aula27_Lidar_com_pessoas_at03b1.png').fileUrl,
              }, {
                  number: 4,
                  image: _.find(files, file => file.filename === 'Aula27_Lidar_com_pessoas_at03d1.png').fileUrl,
              }],
              drags: [{
                  text: 'ino',
                  relatedTo: 1
              }, {
                  text: 'aprendi',
                  relatedTo: 2
              }, {
                  text: 'ência',
                  relatedTo: 3
              }, {
                  text: 'inte',
                  relatedTo: 4
              }]
            }]

        }
      },{
        name: 'Você sabe trabalhar em equipe?',
        description: '',
        type: 'interaction',
        presentation: {
            title: 'Você sabe trabalhar em equipe?',
            description: 'E você? Sabe trabalhar em equipe? A seguir, você vai ver situações muito comuns em uma empresa. Indique como você se sairia em cada uma delas.',
            image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
        },
        contentFormat: 'multipleQuiz',
        content: {
            questions: [{
              title: 'Você sabe trabalhar em equipe?',
              text: 'Xiiii!! Tinha um slide errado na sua apresentação! Um colega percebeu e tirou o maior sarro de você no meio da reunião. O que você faz?',
              alternativesType: 'text',
              feedbacks: [{
                  title: 'Boa!',
                  text: 'Dessa forma você resolve a situação e não entra em conflito com ninguém.',
                  type: 'positive'
              }, {
                  title: 'Nada disso!',
                  text: 'Não seria melhor explicar com calma a situação e evitar conflitos?',
                  type: 'negative'
              }],
              alternatives: [{
                  option: 'Se jogar na cadeira e tirar um cochilo.',
                  letter: 'A'
              }, {
                  option: 'Culpa outro colega, que não está na reunião, pelo erro.',
                  letter: 'B'
              }, {
                  option: 'Com calma e educação, explica os motivos do erro e diz que ficará atento para isso não voltar a acontecer.',
                  letter: 'C'
              }],
              correctAnswer: 'C'
            },{
              title: 'Você sabe trabalhar em equipe?',
              text: 'Você está numa reunião com a galera do departamento e um dos colegas sai da sala. Então, todo mundo começa a falar mal dele. Como você reage?',
              alternativesType: 'text',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Tente sempre se manter longe desse tipo de conversa.',
                  type: 'positive'
              }, {
                  title: 'Mandou mal!',
                  text: 'Tente sempre se manter longe desse tipo de conversa.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: 'Entra na onda e fala mal também. O cara nem é seu amigo!',
                  letter: 'A'
              }, {
                  option: 'Não entra na conversa e tenta mudar de assunto.',
                  letter: 'B'
              }, {
                  option: 'Aproveita para contar uma fofoca que ouviu sobre outro colega.',
                  letter: 'C'
              }],
              correctAnswer: 'B'

            },{
              title: 'Você sabe trabalhar em equipe?',
              text: 'Sua área precisa preparar um relatório para a reunião de fechamento do mês. E aí? Como você se sai?',
              alternativesType: 'text',
              feedbacks: [{
                  title: 'Maravilha!',
                  text: 'Quem trabalha em equipe é proativo e não fica esperando a ordem de ninguém.',
                  type: 'positive'
              }, {
                  title: 'Errou!',
                  text: 'Quem trabalha em equipe é proativo e não fica esperando a ordem de ninguém.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: 'Fica na sua. Alguém da equipe com certeza vai fazer.',
                  letter: 'A'
              }, {
                  option: 'Fica esperando alguém te cobrar. Vai que eles esquecem, né?',
                  letter: 'B'
              }, {
                  option: 'Já toma a iniciativa e chama a equipe para começar a fazer junto com você. ',
                  letter: 'C'
              }],
              correctAnswer: 'C'

            },{
              title: 'Você sabe trabalhar em equipe?',
              text: 'Sua equipe se reúne para encontrar soluções para um problema de processos. Um colega começa a falar e você...',
              alternativesType: 'text',
              feedbacks: [{
                  title: 'Mandou bem!',
                  text: 'Respeitar as opiniões e ideias dos colegas mostra que você sabe trabalhar em equipe!',
                  type: 'positive'
              }, {
                  title: 'Ops…',
                  text: 'quem sabe trabalhar em equipe respeita as opiniões e ideias dos colegas.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: 'Ouve o que ele diz com atenção e depois coloca suas ideias. ',
                  letter: 'A'
              }, {
                  option: 'Vê que o cara está viajando e interrompe logo.',
                  letter: 'B'
              }, {
                  option: 'Diz que não tem nada a ver e prossegue falando, ignorando a atitude do colega.',
                  letter: 'C'
              }],
              correctAnswer: 'A'

            },{
              title: 'Você sabe trabalhar em equipe?',
              text: 'Você teve uma ideia para melhorar um produto da empresa. Quando foi contar para a equipe, outro colega veio com uma solução ainda melhor. Qual a sua reação?',
              alternativesType: 'text',
              feedbacks: [{
                  title: 'Legal!',
                  text: 'Aceitar as ideias dos outros e saber ceder são habilidades de quem sabe trabalhar em equipe!',
                  type: 'positive'
              }, {
                  title: 'Nada disso.',
                  text: 'Aceitar as ideias dos outros e saber ceder são habilidades de quem sabe trabalhar em equipe!',
                  type: 'negative'
              }],
              alternatives: [{
                  option: 'Insiste até o fim na sua ideia, mesmo sabendo que a dele é melhor.',
                  letter: 'A'
              }, {
                  option: 'Cria um monte de dificuldades para colocar a ideia dele em prática.',
                  letter: 'B'
              }, {
                  option: 'Aceita a ideia dele e ainda dá dicas para melhorá-la.',
                  letter: 'C'
              }],
              correctAnswer: 'C'

            },{
              title: 'Você sabe trabalhar em equipe?',
              text: 'Você e sua equipe fizeram um projeto para apresentar para a diretoria. Mas, justo no dia da apresentação, você ficou com a maior gripe! O que você faz?',
              alternativesType: 'text',
              feedbacks: [{
                  title: 'Bacana!',
                  text: 'Confiar nos seus colegas é a base de um trabalho em equipe bem-sucedido.',
                  type: 'positive'
              }, {
                  title: 'Hummm…',
                  text: 'Não é por aí. Confiar nos seus colegas é a base de um trabalho em equipe bem-sucedido.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: 'Pede para um colega da equipe apresentar. Afinal, você confia nele!',
                  letter: 'A'
              }, {
                  option: 'Tenta desmarcar a reunião. Vai que alguém da equipe dá uma bola fora?',
                  letter: 'B'
              }, {
                  option: 'Vai apresentar espirrando e com febre. Ninguém da equipe vai apresentar tão bem quanto você!',
                  letter: 'C'
              }],
              correctAnswer: 'A'
            },{
              title: 'Você sabe trabalhar em equipe?',
              text: 'Seu colega está com muita dificuldade em mexer num programa novo de tabelas. Nesse caso, você...',
              alternativesType: 'text',
              feedbacks: [{
                  title: 'Show!',
                  text: 'Oferecer ajuda e ser colaborativo torna mais fácil o convívio em grupo.',
                  type: 'positive'
              }, {
                  title: 'Nãaaooo!',
                  text: 'Oferecer ajuda e ser colaborativo torna mais fácil o convívio em grupo.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: 'Oferece ajuda, claro!',
                  letter: 'A'
              }, {
                  option: 'Deixa ele se virar sozinho.',
                  letter: 'B'
              }, {
                  option: 'Finge que nem vê para não ter que ajudar.',
                  letter: 'C'
              }],
              correctAnswer: 'A'

            }]}
      },{
        name: 'Somos um time!',
        description: undefined,
        type: 'presentation',
        presentation: {
            title: 'Somos um time!',
            description: 'Tá rolando uma partida tensa de vôlei.  Olha! O técnico pediu tempo!  Vamos ouvir o que ele está dizendo para o time?',
            image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
        },
        contentFormat: 'audio',
        content: {
            questions: [{
                title: 'Somos um time!',
                text: 'Tá rolando uma partida tensa de vôlei.  Olha! O técnico pediu tempo!  Vamos ouvir o que ele está dizendo para o time?',
                image: _.find(files, file => file.filename === 'Aula27_Lidar_com_pessoas_at05.png').fileUrl,
                audio: {
                    fileUrl: 'files/stream?type=audios&filename=' + 'trabalho_equipe_somosumtime.mp3',//TODO
                    type: 'audio/mpeg'
                },
                // subtitles: {
                //     fileUrl: _.find(files, file => file.filename === 'google-developer-stories-subtitles-en.vtt').fileUrl,
                //     label: 'Português'
                // },
            }]}
      }]//final do activities
    })
  ]
);
