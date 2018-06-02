'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Atendimento ao cliente",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Atendimento ao cliente')._id,
            ],
            estimatedTime: 7,
            description: 'Você sabia que o profissional de atendimento é responsável pela  primeira impressão que o cliente tem da empresa? Por isso, é tão importante ter a postura adequada e não dar nenhuma mancada na hora do atendimento.  Quer umas dicas espertas? Siga esta aula!',
            image: _.find(files, file => file.filename === 'Aula_14.png').fileUrl, //TODO
            activities: [{
              name: 'Atendimento 100%',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Atendimento 100%',
                  description: 'A Bruna tem um monte de exemplos do que fazer, e do que não fazer, na hora de atender o cliente. Quer ver?',
                  image: _.find(files, file => file.filename === 'capa_atendimento.png').fileUrl
              },
              contentFormat: 'video',
              content: {
                title: 'Atendimento 100%',
                text: 'A Bruna tem um monte de exemplos do que fazer, e do que não fazer, na hora de atender o cliente. Quer ver?',
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
        name: 'O bom atendimento',
        description: undefined,
        type: 'interaction',
        presentation: {
            title: 'O bom atendimento',
            description: 'O João quer ser atendimento mas ainda tem dúvidas sobre o que ele precisa ter para atender bem. Ajude ele classificando as palavras em SIM (bom atendimento) ou NÃO (mau atendimento).',
            image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl//TODO
        },
        contentFormat: 'classify',
        title: 'O bom atendimento',
        text: 'O João quer ser atendimento mas ainda tem dúvidas sobre o que ele precisa ter para atender bem. Ajude ele classificando as palavras em SIM (bom atendimento) ou NÃO (mau atendimento).',
        content: { questions:[{
          // feedbacks: [{
          //     title: 'Muito bem!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'positive'
          // }, {
          //     title: 'Ooops!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'negative'
          // }],
          image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at1a.png').fileUrl,
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
          // feedbacks: [{
          //     title: 'Muito bem!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'positive'
          // }, {
          //     title: 'Ooops!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'negative'
          // }],
          image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at1i.png').fileUrl,
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
          // feedbacks: [{
          //     title: 'Muito bem!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'positive'
          // }, {
          //     title: 'Ooops!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'negative'
          // }],
          image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at1c.png').fileUrl,
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
          // feedbacks: [{
          //     title: 'Muito bem!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'positive'
          // }, {
          //     title: 'Ooops!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'negative'
          // }],
          image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at1b.png').fileUrl,
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
          // feedbacks: [{
          //     title: 'Muito bem!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'positive'
          // }, {
          //     title: 'Ooops!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'negative'
          // }],
          image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at1d.png').fileUrl,
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
          // feedbacks: [{
          //     title: 'Muito bem!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'positive'
          // }, {
          //     title: 'Ooops!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'negative'
          // }],
          image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at1g.png').fileUrl,
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
          // feedbacks: [{
          //     title: 'Muito bem!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'positive'
          // }, {
          //     title: 'Ooops!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'negative'
          // }],
          image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at1f.png').fileUrl,
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

          // feedbacks: [{
          //     title: 'Muito bem!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'positive'
          // }, {
          //     title: 'Ooops!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'negative'
          // }],
          image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at1j.png').fileUrl,
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
          // feedbacks: [{
          //     title: 'Muito bem!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'positive'
          // }, {
          //     title: 'Ooops!',
          //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
          //     type: 'negative'
          // }],
          image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at1e.png').fileUrl,
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

        }
      ]}
    },{
      name: 'A hora do "vamos ver"',
      description: undefined,
      type: 'interaction',
      presentation: {
          title: 'A hora do "vamos ver"',
          description: 'Tá, na teoria tá explicado. Mas na prática vamos ver se o João sabe como como é que se faz? Vamos mostrar algumas situações e você diz pra gente se ele está certo ou errado. Vamos lá?',
          image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
      },
      contentFormat: 'simpleQuiz',
      content: { questions:[{
        title: 'A hora do "vamos ver"',
        text: 'O João tá lá no trampo e recebeu um e-mail pedindo um orçamento urgente. Ele está confuso com suas tarefas e deixa pra responder só depois que terminar tudo o que tem pra fazer. O João mandou bem?',
        image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at2.png').fileUrl,
        alternativesType: 'boolean',
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Muito bem! Mesmo que não possa atender no momento, é importante dar uma resposta!',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Errado. Mesmo que não possa atender no momento, é importante sempre dar uma uma resposta! ',
            type: 'negative'
        }],
        alternatives: [{
            option: true,
            letter: 'A'
        }, {
            option: false,
            letter: 'B'
        }],
        correctAnswer: 'B'
      },{
        title: 'A hora do "vamos ver"',
        text: 'João resolve organizar os produtos da loja colocando sinalização de um jeito que facilite para os clientes encontrarem rapidamente o que procuram. O João mandou bem?',
        image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at3.png').fileUrl,
        alternativesType: 'boolean',
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Isso aí! Ninguém gosta de perder tempo, né? Faz parte de um bom atendimento organizar os produtos e mostrar direitinho onde estão dentro da loja. ',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Errado! Atendimento não é só falar com o cliente. Organizar os produtos para facilitar a vida clientes é parte de um bom atendimento.',
            type: 'negative'
        }],
        alternatives: [{
            option: true,
            letter: 'A'
        }, {
            option: false,
            letter: 'B'
        }],
        correctAnswer: 'A'

      },{
        title: 'A hora do "vamos ver"',
        text: 'Chegou um cliente para comprar um celular e o João resolveu mostrar tudo o que manja, explicando todos os detalhes e tirando todas as dúvidas na maior paciência. Diz aí se ele mandou bem.',
        image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at4.png').fileUrl,
        alternativesType: 'boolean',
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Boa! Quem não gosta de ajuda na hora de comprar uma coisa tão importante (e cara!) como um celular? Um bom atendimento conhece bem seus produtos e adora tirar dúvidas.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Errado! Você compraria algo tão caro sem ter certeza de que é a melhor opção? Um bom atendimento adora tirar dúvidas e um bom cliente adora saber o que compra.',
            type: 'negative'
        }],
        alternatives: [{
            option: true,
            letter: 'A'
        }, {
            option: false,
            letter: 'B'
        }],
           correctAnswer: 'A'
          }
         ]}
        },{
          name: 'O cliente tem razão',
          description: undefined,
          type: 'presentation',
          presentation: {
              title: 'O cliente tem razão',
              description: 'Cliente não é só quem compra. Eles estão por toda parte e têm muita importância para o negócio acontecer. Vamos ver.',
              image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
          },
          contentFormat: 'slides',
          content: {
            slides: [{
                image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at5.png').fileUrl,
                title: 'O cliente tem razão',
                text: 'Os <u>clientes de fora</u> são as pessoas que compram o produto ou o serviço da empresa. Os <u>clientes de dentro</u> são as pessoas que trabalham no mesmo lugar que você, e tem necessidades, desde um simples cafezinho à ajuda para fazerem seu trabalho. Quando você ajuda eles dentro da empresa, é porque eles são seus clientes também. '
            }, {
                image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at6.png').fileUrl,
                title: 'O cliente tem razão',
                text: 'O atendimento é o ponto de encontro entre o cliente externo e a empresa. Ele faz as coisas como empresa, mas pensa como cliente. Se a empresa não atende a necessidade do cliente, ele não compra e a empresa perde a razão de existir. Uma dica é se colocar sempre no lugar do cliente. Assim você consegue entender o que ele precisa e pode ser mais útil.'
            }]

          }
       },{
         name: 'Não perca o cliente',
         description: undefined,
         type: 'interaction',
         presentation: {
             title: 'Não perca o cliente',
             description: 'Agora que você já pegou boas dicas sobre atendimento, vamos fazer um teste. Você será vendedor de uma loja de eletrônicos e vai ter que se virar para não perder o cliente! Preparado? Vai!',
             image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
         },
         contentFormat: 'simpleQuiz',
         content: {questions:[{
           title: 'Não perca o cliente',
           text: 'Um cliente entra na loja furioso querendo trocar um carregador de celular que não funciona. Você…',
           image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at7.png').fileUrl,
           alternativesType: 'text',
           feedbacks: [{
               title: 'Muito bem!',
               text: 'Mandou bem! O cliente ficou feliz! ',
               type: 'positive'
           }, {
               title: 'Ooops!',
               text: 'Cuidado! Você tá quase perdendo o cliente! ',
               type: 'negative'
           }],
           alternatives: [{
               option: '...passa o cliente para um outro vendedor. Troca não dá comissão! ',
               letter: 'A'
           }, {
               option: '...pergunta o que aconteceu com o carregador, ouve o cliente com atenção, pede desculpas pelo produto com defeito e diz que vai trocar na hora.',
               letter: 'B'
           }],
           correctAnswer: 'B'

         },{
           title: 'Não perca o cliente',
           text: 'Enquanto o cliente do carregador que não funciona esbraveja com você, entra na loja um outro cliente que sempre compra muito. Você então...',
           image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at8.png').fileUrl,
           alternativesType: 'text',
           feedbacks: [{
               title: 'Muito bem!',
               text: 'Agora sim! Você conquistou o cliente! Ele ficou feliz e até pediu para ver outros produtos! Parabéns! ',
               type: 'positive'
           }, {
               title: 'Ooops!',
               text: 'Nããão! O 1º cliente ainda não tinha seu problema resolvido e acabou indo embora. Além de nunca mais voltar, ele pode falar muito mal de você e da empresa que você trabalha. Mandou mal!',
               type: 'negative'
           }],
           alternatives: [{
               option: '...vai atender o cliente que entrou na hora. Afinal, ele deve te dar uma comissão gorda! ',
               letter: 'A'
           }, {
               option: '...pede um minutinho para o cliente que acabou de entrar, e chama outro atendente ou um gerente para ajudar no atendimento.',
               letter: 'B'
           }],
           correctAnswer: 'B'

         },{
           title: 'Não perca o cliente',
           text: 'Você resolveu o problema da troca do carregador do celular, o cliente ficou satisfeito e acabou decidindo comprar capinhas de celular. Mas na hora de pagar, o caixa não tinha troco. Você...',
           image: _.find(files, file => file.filename === 'Aula17_Atendimento1_at9.png').fileUrl,
           alternativesType: 'text',
           feedbacks: [{
               title: 'Muito bem!',
               text: 'Isso aí! A loja precisa ter troco e o cliente sabe disso. Ele saiu da loja feliz e provavelmente vai voltar mais vezes. ',
               type: 'positive'
           }, {
               title: 'Ooops!',
               text: 'Nããão! Você estava indo tão bem! O cliente ficou chateado com a falta de troco e cancelou a compra. ',
               type: 'negative'
           }],
           alternatives: [{
               option: ' ...pede para ficar devendo 3 reais. A culpa não é sua que o cliente não tem dinheiro trocado!',
               letter: 'A'
           }, {
               option: '...você consegue 3 reais com o gerente na hora para dar de troco para o cliente.',
               letter: 'B'
           }],
           correctAnswer: 'B'

         }

       ]}

       }]//final do action
    })
  ]
);
