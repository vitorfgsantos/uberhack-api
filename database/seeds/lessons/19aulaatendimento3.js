'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Atendimento 3",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Atendimento ao cliente')._id,
            ],
            description: 'Nesta aula, você vai ver que o maior segredo para deixar o cliente 100% satisfeito é o bom atendimento. Seja pessoal, por telefone e até pelas redes sociais, tratar bem o cliente sempre encanta. Siga a aula e dê um show de atendimento!',
            image: _.find(files, file => file.filename === 'Aula_18.png').fileUrl,
            activities: [{
              name: 'Atendimento perfeito, cliente satisfeito.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Atendimento perfeito, cliente satisfeito.',
                  description: 'Dê o play que o Pyong vai te mostrar o que é um atendimento de excelência!',
                  image: _.find(files, file => file.filename === 'capa_historia_vida.png').fileUrl
              },
              contentFormat: 'video',
              content: {
                  title: 'Ser ou não ser, eis a questão',
                  text: 'Dê o play que o Pyong vai te mostrar o que é um atendimento de excelência!',
                  video: {
                      fileUrl: 'files/stream?type=videos&filename=' + '1-EXCELENCIA_NO_ATENDIMENTO_online.mp4',
                      type: 'video/mp4'
                  },
                  // subtitles: {
                  //     fileUrl: _.find(files, file => file.filename === 'Historia_de_vida.vtt').fileUrl,
                  //     label: 'Português'
                  // }
              }

            },{
              name: 'Atender bem é o canal!',
              description: '',
              type: 'interaction',
              presentation: {
                  title: 'Atender bem é o canal!',
                  description: 'O bom atendimento é a base do relacionamento com o cliente. Hoje em dia, existem vários canais de atendimento, mas nem todos fazem o cliente se sentir próximo da empresa.',
                  image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
              },
              contentFormat: 'simpleRelate',
              content: {
                  questions: [{
                      title: 'Atender bem é o canal!',
                      text: 'Agora é com você: arraste cada tipo de atendimento ao grupo correto.',
                      feedbacks: [{
                          title: 'Muito bem!',
                          text: 'Se tiver profissionais bem treinados, esse tipo de atendimento é próximo e eficiente.',
                          type: 'positive'
                      }, {
                          title: 'Ooops!',
                          text: 'Se tiver profissionais bem treinados, esse tipo de atendimento é próximo e eficiente.',
                          type: 'negative'
                      }],
                      draggableText: 'Contato pelo 0800',
                      alternatives: [{
                          number: 1,
                          image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01a.png').fileUrl
                      }, {
                          number: 2,
                          image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01b.png').fileUrl
                      }, {
                          number: 3,
                          image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01c.png').fileUrl
                      }],
                      correctAnswer: 2,
                  },{
                    title: 'Atender bem é o canal!',
                    text: 'Agora é com você: arraste cada tipo de atendimento ao grupo correto.',
                    feedbacks: [{
                        title: 'Muito bem!',
                        text: 'Nada é mais próximo do que atender pessoalmente um cliente.',
                        type: 'positive'
                    }, {
                        title: 'Ooops!',
                        text: 'Nada é mais próximo do que atender pessoalmente um cliente.',
                        type: 'negative'
                    }],
                    draggableText: 'Comprar em uma loja do shopping',
                    alternatives: [{
                        number: 1,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01a.png').fileUrl
                    }, {
                        number: 2,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01b.png').fileUrl
                    }, {
                        number: 3,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01c.png').fileUrl
                    }],
                    correctAnswer: 1,

                  },{
                    title: 'Atender bem é o canal!',
                    text: 'Agora é com você: arraste cada tipo de atendimento ao grupo correto.',
                    feedbacks: [{
                        title: 'Muito bem!',
                        text: 'Pela resposta não ser imediata e o cliente não saber com quem está falando, esse tipo de atendimento  é considerado distante.',
                        type: 'positive'
                    }, {
                        title: 'Ooops!',
                        text: 'Pela resposta não ser imediata e o cliente não saber com quem está falando, esse tipo de atendimento  é considerado distante.',
                        type: 'negative'
                    }],
                    draggableText: 'Mandar um e-mail',
                    alternatives: [{
                        number: 1,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01a.png').fileUrl
                    }, {
                        number: 2,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01b.png').fileUrl
                    }, {
                        number: 3,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01c.png').fileUrl
                    }],
                    correctAnswer: 3,

                  },{
                    title: 'Atender bem é o canal!',
                    text: 'Agora é com você: arraste cada tipo de atendimento ao grupo correto.',
                    feedbacks: [{
                        title: 'Legal!',
                        text: 'Apesar de ser prático para a empresa, esse tipo de atendimento é muito impessoal e distante.',
                        type: 'positive'
                    }, {
                        title: 'Legal!',
                        text: 'Apesar de ser prático para a empresa, esse tipo de atendimento é muito impessoal e distante.',
                        type: 'negative'
                    }],
                    draggableText: 'Preencher um formulário no site',
                    alternatives: [{
                        number: 1,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01a.png').fileUrl
                    }, {
                        number: 2,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01b.png').fileUrl
                    }, {
                        number: 3,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01c.png').fileUrl
                    }],
                    correctAnswer: 3,

                  },{
                    title: 'Atender bem é o canal!',
                    text: 'Agora é com você: arraste cada tipo de atendimento ao grupo correto.',
                    feedbacks: [{
                        title: 'Muito Bem',
                        text: 'Por dar as respostas em tempo real, o chat é considerado um atendimento próximo!',
                        type: 'positive'
                    }, {
                        title: 'Ops...',
                        text: 'Por dar as respostas em tempo real, o chat é considerado um atendimento próximo!',
                        type: 'negative'
                    }],
                    draggableText: 'Falar pelo chat no site da empresa',
                    alternatives: [{
                        number: 1,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01a.png').fileUrl
                    }, {
                        number: 2,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01b.png').fileUrl
                    }, {
                        number: 3,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01c.png').fileUrl
                    }],
                    correctAnswer: 2,

                  },{
                    title: 'Atender bem é o canal!',
                    text: 'Agora é com você: arraste cada tipo de atendimento ao grupo correto.',
                    feedbacks: [{
                        title: 'Muito Bem',
                        text: 'Se a empresa trabalhar bem suas redes sociais, elas podem ser um canal de atendimento próximo.',
                        type: 'positive'
                    }, {
                        title: 'Ops...',
                        text: 'Se a empresa trabalhar bem suas redes sociais, elas podem ser um canal de atendimento próximo.',
                        type: 'negative'
                    }],
                    draggableText: 'Acessar as redes sociais da empresa',
                    alternatives: [{
                        number: 1,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01a.png').fileUrl
                    }, {
                        number: 2,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01b.png').fileUrl
                    }, {
                        number: 3,
                        image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at01c.png').fileUrl
                    }],
                    correctAnswer: 2,

                  }]}

            },{
              name: 'Posso ajudar?',
              description: '',
              type: 'interaction',
              presentation: {
                  title: 'Posso ajudar?',
                  description: 'Imagine que você trabalha numa loja que vende celulares e serviços de telefonia. São muitos clientes, todos os dias, querendo contratar serviços, resolver problemas e tirar dúvidas. Mostre pra gente como você se sairia nas diferentes situações.',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'multipleQuiz',
              content: {
                  questions: [{
                    title: 'Posso ajudar?',
                    text: 'Você chegou mais cedo, antes da loja abrir, e aproveitou esses 15 minutos para... ',
                    alternativesType: 'text',
                    feedbacks: [{
                        title: 'Show!',
                        text: 'Você mostrou que é um cara comprometido e deixou a loja prontinha para receber os clientes!',
                        type: 'positive'
                    }, {
                        title: 'Nada disso!',
                        text: 'Por que não aproveita para dar uma geral e organizar a loja?',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: 'Se jogar na cadeira e tirar um cochilo.',
                        letter: 'A'
                    }, {
                        option: 'Dar uma geral na loja: organizar a papelada, ligar as   máquinas, regular o ar-condicionado e limpar sua mesa.',
                        letter: 'B'
                    }, {
                        option: 'Ligar para aquele seu amigo do interior e bater um papo.',
                        letter: 'C'
                    }],
                    correctAnswer: 'B'
                  },{
                    title: 'Posso ajudar?',
                    text: 'Um cliente entra na loja bem na hora que você está  ao telefone resolvendo um assunto pessoal.  O que você faz?',
                    alternativesType: 'text',
                    feedbacks: [{
                        title: 'Parabéns!',
                        text: 'Você sabe que o cliente vem sempre em primeiro lugar!',
                        type: 'positive'
                    }, {
                        title: 'Não!',
                        text: 'O certo é desligar o telefone o mais rápido possível e atender o cliente.',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: 'Olha para ele, sorri, faz um sinal de que vai atendê-lo logo e termina rápido a ligação.',
                        letter: 'A'
                    }, {
                        option: 'Se abaixa atrás do balcão para ele não te ver.. ',
                        letter: 'B'
                    }, {
                        option: 'Ignora o cliente. Assim, ele procura outro atendente.',
                        letter: 'C'
                    }],
                    correctAnswer: 'A'

                  },{
                    title: 'Posso ajudar?',
                    text: 'Você vai atender um cliente que nunca foi à loja. Você se aproxima dele e....',
                    alternativesType: 'text',
                    feedbacks: [{
                        title: 'Arrasou!',
                        text: 'Com essa postura, com certeza você iria conquistar o cliente.',
                        type: 'positive'
                    }, {
                        title: 'Nada disso!',
                        text: 'Contato físico logo de cara não é legal. E, se for para dar um aperto de mãos, que seja firme, para passar confiança.',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: 'Dá uma tapa nas suas costas e diz: E aí? Vai levar o que hoje?',
                        letter: 'A'
                    }, {
                        option: 'Dá um aperto de mãos bem fraco e aproveita para dizer que o dia está uma pauleira.',
                        letter: 'B'
                    }, {
                        option: 'Dá bom dia e se dirige a ele com os ombros e o peito abertos. Dá um sorriso e fala: posso ajudá-lo?',
                        letter: 'C'
                    }],
                    correctAnswer: 'C'

                  },{
                    title: 'Posso ajudar?',
                    text: 'Um cliente chegou reclamando que o plano de internet está muito caro e perguntou se você tem uma opção melhor. O que você faz?',
                    alternativesType: 'text',
                    feedbacks: [{
                        title: 'Boa resposta!',
                        text: 'Estar sempre bem informado sobre o que a empresa oferece faz toda a diferença.',
                        type: 'positive'
                    }, {
                        title: 'Errou!',
                        text: 'Conhecer os produtos e serviços da empresa em que você trabalha é fundamental!',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: 'Entrega um folheto para ele ler os planos disponíveis, porque nem você conhece muito bem os serviços da empresa.',
                        letter: 'A'
                    }, {
                        option: 'Se informa na hora sobre os planos disponíveis e já se liga que precisa estudar mais sobre os produtos da empresa. ',
                        letter: 'B'
                    }, {
                        option: 'Passa o cliente para um colega que conhece os serviços e aproveita pra ficar de boa.',
                        letter: 'C'
                    }],
                    correctAnswer: 'B'

                  },{
                    title: 'Posso ajudar?',
                    text: 'Chegou a vez de atender um cliente que esperou um tempão! Porém, sua barriga está roncando de fome. E aí? Como você se sai nessa? ',
                    alternativesType: 'text',
                    feedbacks: [{
                        title: 'Boa atitude! ',
                        text: 'Comer na frente do cliente é mancada!!',
                        type: 'positive'
                    }, {
                        title: 'Péssima escolha…',
                        text: 'comer ou mascar chiclete na frente do cliente pega muito mal! ',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: 'Segura a fome e espera até terminar o atendimento para comer algo em um local reservado.',
                        letter: 'A'
                    }, {
                        option: 'Pega o lanche que trouxe de casa, oferece para o cliente e come ali mesmo.',
                        letter: 'B'
                    }, {
                        option: 'Lembra que tem um chiclete no bolso e começa a mascar para tapear a fome.',
                        letter: 'C'
                    }],
                    correctAnswer: 'A'

                  },{
                    title: 'Posso ajudar?',
                    text: 'O cliente está muito indeciso sobre qual serviço contratar. Nesse caso, você...',
                    alternativesType: 'text',
                    feedbacks: [{
                        title: 'Excelente!',
                        text: 'Isso é bom atendimento!',
                        type: 'positive'
                    }, {
                        title: 'Que tal tentar ajudá-lo?',
                        text: 'Bocejar ou ficar gritando na frente do cliente não é legal.',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: 'Dá uma bocejada pra ver se ele se liga e decide mais rápido.',
                        letter: 'A'
                    }, {
                        option: 'Começa a falar alto com o colega que está do outro lado da loja, para o cliente se tocar.',
                        letter: 'B'
                    }, {
                        option: 'Tem paciência e tenta ajudá-lo, mostrando as vantagens de cada serviço.',
                        letter: 'C'
                    }],
                    correctAnswer: 'C'
                  }]}
            },{
              name: 'Sua ligação é muito importante para nós.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Sua ligação é muito importante para nós.',
                  description: 'Olha! A Paula  é operadora de telemarketing em uma grande empresa! Ligue pra ela e e ouça dicas espertas sobre atendimento telefônico. ',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'audio',
              content: {
                  questions: [{
                      title: 'Sua ligação é muito importante para nós.',
                      text: '',
                      image: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at04.png').fileUrl,
                      audio: {
                          fileUrl: 'files/stream?type=audios&filename=' + 'excelência-atendimento-sualigacaoemuitoimportanteparanos.mp3',//TODO
                          type: 'audio/mpeg'
                      },
                      // subtitles: {
                      //     fileUrl: _.find(files, file => file.filename === 'google-developer-stories-subtitles-en.vtt').fileUrl,
                      //     label: 'Português'
                      // },
                  }]}

            },{
              name: 'Tem mensagem pra você.',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Tem mensagem pra você.',
                  description: 'Objetividade e clareza ao enviar uma mensagem por e-mail para um cliente faz toda a diferença. A seguir, vamos te mostrar uma mensagem do atendente Luciano e você deverá revisar e tirar os erros, deixado a mensagem pronta para ser enviada.',
                  image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
              },
              contentFormat: 'errors',
              content: { questions:[{
                title: 'Tem mensagem pra você.',
                text: 'O Luciano chegou à empresa e tem um monte de e-mails para responder. Mas, antes de enviar, ele precisa revisar. Ajude ele clicando sobre o que deve ser excluído para a mensagem ficar correta.',
                clicks: 3,
                background: _.find(files, file => file.filename === 'Aula19_Excelencia_Atendimento_at05.png').fileUrl,
                baseResolution:{
                    width: 1080,
                    height: 1140
                },
                mappings: [{
                  coordinates: '92,322,97,427,790,423,678,312',
                  shape: 'poly',
                  tickPosition: {
                      x: 169,
                      y: 324
                  },
                  feedback: {
                      title: 'Boa!',
                      text: 'Isso mesmo! Você não está escrevendo para um amigo! Seja mais formal.',
                      type: 'positive'
                  }
                },{
                  coordinates: '459,459,421,483,416,532,448,556,523,567,601,563,655,528,589,451',
                  shape: 'poly',
                  tickPosition: {
                      x: 485,
                      y: 453
                  },
                  feedback: {
                    title: 'Boa!',
                    text: 'Caixa alta  e muitas exclamações dão a impressão de que você está gritando com o cliente.',
                      type: 'positive'
                  }
                },{
                  coordinates: '614,651,524,697,587,799,788,805,927,788,920,693,791,659',
                  shape: 'poly',
                  tickPosition: {
                      x: 672,
                      y: 661
                  },
                  feedback: {
                      title: 'Acertou!',
                      text: 'Seja sempre organizado com seus e-mails. Limpe sua caixa de entrada, mas não jogue mensagens importantes no lixo. ',
                      type: 'positive'
                    }

                }
              ]
              }
            ]}

            }]//final do activities
    })
  ]
);
