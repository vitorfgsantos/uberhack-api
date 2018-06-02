'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Administração do Tempo",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Comunicação')._id,//TODO
            ],
            estimatedTime: 8,
            description: 'Todo mundo reclama que queria ter mais tempo. A gente não consegue esticar o dia além das suas 24 horas, mas será que dá para melhorar o uso do tempo? Sim! É isso que vamos te mostrar nessa aula. ',
            image: _.find(files, file => file.filename === 'Aula_14.png').fileUrl, //TODO
            activities: [{
              name: 'Seu bem mais precioso.',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Seu bem mais precioso.',
                  description: 'Você já parou para pensar qual é o seu bem mais precioso? A seguir, você vai encontrar alguns ítens que podem ser bem importantes para você.',
                  image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
              },
              contentFormat: 'add',
              content: {
              questions: [{
                  title: 'Otimização em ação!',
                  text: 'Clique e arraste para a máquina de pagamentos todos os itens que você puder comprar.',
                  background: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at1.png').fileUrl,
                  baseResolution: {
                      width: 1080,
                      height: 860
                  },
                  feedbacks: [{
                      title: 'Muito bem!',
                      text: 'Reparou, né? Muita coisa que a gente precisa podemos pagar para ter. Porém, não o tempo. Por isso é tão importante organizar as tarefas: para sermos mais produtivos e termos tempo para dedicar ao que realmente importa na nossa vida e no trabalho. E isso também valoriza você! ',
                      type: 'positive'
                  }, {
                      title: 'Quase lá!',
                      text: 'Reparou, né? Muita coisa que a gente precisa podemos pagar para ter. Porém, não o tempo. Por isso é tão importante organizar as tarefas: para sermos mais produtivos e termos tempo para dedicar ao que realmente importa na nossa vida e no trabalho. E isso também valoriza você! ',
                      type: 'intermediate'
                  }, {
                      title: 'Ooops!',
                      text: 'Reparou, né? Muita coisa que a gente precisa podemos pagar para ter. Porém, não o tempo. Por isso é tão importante organizar as tarefas: para sermos mais produtivos e termos tempo para dedicar ao que realmente importa na nossa vida e no trabalho. E isso também valoriza você! ',
                      type: 'negative'
                  }],
                  layers: [{
                      number: 1,
                      image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at1a.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at1e.png').fileUrl,
                      category: 'A',
                      tickPosition: {
                          x: 197,
                          y: 87
                      }
                  }, {
                      number: 2,
                      image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at1b.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at1f.png').fileUrl,
                      category: 'A',
                      tickPosition: {
                        x: 197,
                        y: 87
                      }
                  }, {
                      number: 3,
                      image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at1c.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at1g.png').fileUrl,
                      category: 'A',
                      tickPosition: {
                        x: 197,
                        y: 87
                      }
                  }, {
                      number: 4,
                      category: 'A',
                      image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at1d.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at1h.png').fileUrl,
                      tickPosition: {
                        x: 197,
                        y: 87
                      }
                  }],
                  correctLayers: [4]
              }]}
            },{
              name: 'O tempo não para.',
              description: undefined,
              type: 'presentation',
              contentFormat: 'slides',
              content: {
                slides: [{
                    image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at3.png').fileUrl,
                    title: 'O tempo não para.',
                    text: 'Você sabe como gasta o seu tempo? Um jeito bom de saber é usando uma agenda e anotando tarefas e coisas importantes da sua semana. Assim, você se organiza e ganha tempo para fazer o que é realmente importante. Inspire-se no exemplo da imagem abaixo.'
                }]}
            },{
              name: 'Ganha ou perde tempo.',
              description: '',
              type: 'interaction',
              presentation: {
                  title: 'Ganha ou perde tempo.',
                  description: 'Juliana está precisando de uma mão para organizar seu tempo e acabar com aquelas tarefas que matam sua produtividade. A A seguir, diga quais tarefas ela ganha ou perde tempo.',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'simpleQuiz',
              content: {
              questions: [{
              title: 'Ganha ou perde tempo.',
              text: 'Ela levou 20 minutos criando um e-mail para o seu chefe para deixar as informações bem claras e objetivas. ',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Parece que é demais, mas, às vezes, isso significa uma mensagem direta que vai poupar tempo de todo mundo, inclusive o seu!',
                  type: 'positive'
              }, {
                  title: 'Mandou mal!',
                  text: 'Parece que é demais, mas, às vezes, isso significa uma mensagem direta que vai poupar tempo de todo mundo, inclusive o seu!',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at4a.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at4b.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'A'
            },{
              title: 'Ganha ou perde tempo.',
              text: 'O Whatsapp apitou e ela passou 40 minutos trocando mensagens com os amigos durante o dia.',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Conectar com os amigos é uma delícia, mas tudo tem sua hora!',
                  type: 'positive'
              }, {
                  title: 'Mandou mal!',
                  text: 'Conectar com os amigos é uma delícia, mas tudo tem sua hora!',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at4a.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at4b.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'B'
            },{
              title: 'Ganha ou perde tempo.',
              text: 'A Ju ama ler romances. Então, toda noite ela passa 30 minutos lendo seu livro favorito. ',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'É importante fazer coisas que você gosta. O ideal é separar um horário para isso, assim você reabastece as energias e não atrapalha seus afazeres. ',
                  type: 'positive'
              }, {
                  title: 'Mandou mal!',
                  text: 'É importante fazer coisas que você gosta. O ideal é separar um horário para isso, assim você reabastece as energias e não atrapalha seus afazeres. ',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at4a.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at4b.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'A'
            },{
              title: 'Ganha ou perde tempo.',
              text: 'Toda vez que o Facebook sinaliza uma notificação, a Ju entra na hora para checar e acaba ficando uns 20 minutos por lá. ',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Tudo tem a sua hora! Reserve o tempo que você quer dedicar às redes sociais e siga à risca! Assim, você consegue se manter conectado com a galera sem perder o foco. ',
                  type: 'positive'
              }, {
                  title: 'Mandou mal!',
                  text: 'Tudo tem a sua hora! Reserve o tempo que você quer dedicar às redes sociais e siga à risca! Assim, você consegue se manter conectado com a galera sem perder o foco. ',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at4a.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at4b.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'B'
            },{
              title: 'Ganha ou perde tempo.',
              text: 'Ela passou uma hora de manhã e uma hora de tarde lendo e organizando seus e-mails. ',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'É importante separar um tempo específico para certas tarefas, como ler e-mails. Assim, você não interrompe suas atividades sempre que chegar uma nova mensagem. ',
                  type: 'positive'
              }, {
                  title: 'Mandou mal!',
                  text: 'É importante separar um tempo específico para certas tarefas, como ler e-mails. Assim, você não interrompe suas atividades sempre que chegar uma nova mensagem. ',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at4a.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at4b.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'A'
            }]}
          },{
              name: 'Dica de amigo.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Dica de amigo.',
                  description: 'Grande parte do seu tempo no trabalho vai para os e-mails. Eles são o principal canal de comunicação e, se você não se organizar direitinho, podem virar verdadeiros sugadores de tempo e produtividade. Por isso, aqui vão algumas dicas para você não se afogar em mensagens.',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'slides',
              content: {
                slides: [{
                    image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at5.png').fileUrl,
                    title: 'Assunto.',
                    text: 'No campo “assunto”, seja claro e objetivo! Dessa forma, as pessoas vão saber rapidamente o que esperar da sua mensagem.'
                }, {
                    image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at6.png').fileUrl,
                    title: 'Mensagem.',
                    text: 'Menos é mais. Crire mensagens curtas e diretas, com a informação clara do que você espera ter de resposta das pessoas. Isso ajuda muito a economizar tempo.'
                },{
                    image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at7.png').fileUrl,
                    title: 'Organização.',
                    text: 'Organize os e-mails em pastas de interesse ou os delete, se não precisar mais deles. É importante você manter sua caixa limpa e organizada.  '
                }]
              }
            },{
              name: 'Caixa de ferramentas.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Caixa de ferramentas.',
                  description: 'Pronto! Agora que você já tem várias dicas práticas de como usar seu tempo, é hora de conhecer algumas ferramentas que podem te ajudar ainda mais a otimizar o seu dia a dia. Vamos lá? ',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'map',
              content: {
                title: 'Caixa de ferramentas.',
                text: 'Olha quanta coisa que a gente tem aqui pra te ajudar! Clique nos ícones para conhecer cada uma das ferramentas que você pode usar para melhorar o uso do seu tempo. ',
                background: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at8.png').fileUrl,
                baseResolution:{
                    width: 1080,
                    height: 1020
                },
                mapping: [{
                    coordinates: '164,91,141,155,157,218,245,264,311,232,332,146,249,70',
                    shape: 'poly',
                    tickPosition: {
                        x: 167,
                        y: 108
                    },
                    feedback: {
                        title: 'One Note',
                        text: 'permite criar notas e listas de tarefas que ficam guardadas na nuvem (ou seja, online). Assim, você pode acessá-las de qualquer computador!',
                        image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at9.png').fileUrl
                    }
                },{
                    coordinates: "466,96,434,147,451,200,492,232,551,234,603,186,618,123,576,82,519,70",
                    shape: 'poly',
                    tickPosition: {
                        x: 477,
                        y: 87
                    },
                    feedback: {
                        title: 'Lync',
                        text: 'é como o Messenger, do Facebook, mas específico para o pessoal do trabalho. Dessa forma, você vai ficar conectado com quem precisa, sem distrações.',
                        image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at10.png').fileUrl,
                    }
                },{
                  coordinates: "774,78,735,139,746,201,775,226,854,232,896,183,896,132,841,74",
                  shape: 'poly',
                  tickPosition: {
                      x: 768,
                      y: 96
                  },
                  feedback: {
                      title: 'One Drive',
                      text: 'aqui você pode criar documentos de texto, planilhas, apresentações e ainda armazenar todo tipo de arquivo online. Superprático para trabalhar em colaboração com seus colegas de trabalho.',
                      image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at11.png').fileUrl,
                  }

                },{
                  coordinates: '189,344,161,366,161,412,172,450,214,480,283,470,290,401,256,349',
                  shape: 'poly',
                  tickPosition: {
                      x: 172,
                      y: 353
                  },
                  feedback: {
                      title: 'Skype',
                      text: 'sabe aquela reunião que você precisa fazer com alguém que está superlonge? O Skype te ajuda fazendo videoconferências, chamadas de voz, vídeo e troca de mensagens.',
                      image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at12.png').fileUrl
                  }
                },{
                  coordinates: '482,347,453,372,443,425,457,458,493,482,539,495,581,474,604,448,607,379,572,334',
                  shape: 'poly',
                  tickPosition: {
                      x: 482,
                      y: 351
                  },
                  feedback: {
                      title: 'Outlook',
                      text: 'com ele, seus e-mails podem ficar organizados por pastas, além de oferecer diversas funções para filtrar suas mensagens, fazendo com que você ganhe tempo.',
                      image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at13.png').fileUrl
                  }
                },{
                  coordinates: '763,350,739,403,755,459,790,482,851,485,886,461,903,412,882,360,838,332',
                  shape: 'poly',
                  tickPosition: {
                      x: 765,
                      y: 346
                  },
                  feedback: {
                      title: 'Pacote Office',
                      text: 'cria documentos de texto, apresentações e planilhas com uma novidade: tudo fica disponível online para você acessar de qualquer lugar que estiver.',
                      image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at14.png').fileUrl
                  }
                }]}
        },{
          name: 'Tic Tac.',
          description: '',
          type: 'interaction',
          presentation: {
              title: 'Tic Tac.',
              description: 'O relógio está rodando e agora é a hora de você mostrar que já entendeu sobre organização de tempo. Vamos testar suas habilidades e fechar com chave de ouro essa aula? Valendo! ',
              image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
          },
          contentFormat: 'multipleQuiz',
          content: {
            questions: [{
              title: 'Tic Tac.',
              text: 'O que é, o que é? Não se estica, não se compra, mas se ganha quando a gente se organiza bem? ',
              alternativesType: 'text',
              alternatives: [{
                  option: 'Elástico',
                  letter: 'A'
              }, {
                  option: 'Presente',
                  letter: 'B'
              }, {
                  option: 'Tempo',
                  letter: 'C'
              }],
              correctAnswer: 'C'
            },{
              title: 'Tic Tac.',
              text: 'Escolha o assunto mais adequado para um e-mail que precisa ser enviado:',
              alternativesType: 'text',
              alternatives: [{
                  option: 'Compra de materiais',
                  letter: 'A'
              }, {
                  option: 'Preciso falar com você sobre uma coisa',
                  letter: 'B'
              }, {
                  option: 'Sobre aquele assunto que conversamos',
                  letter: 'C'
              }],
              correctAnswer: 'A'
            },{
              title: 'Tic Tac.',
              text: 'Organizando sua agenda de tarefas, você decide:',
              alternativesType: 'text',
              alternatives: [{
                  option: 'Separar porções de tempo para ler e-mails e fazer ligações',
                  letter: 'A'
              }, {
                  option: 'Responder e-mails à medida que vão chegando',
                  letter: 'B'
              }, {
                  option: 'Deixar as coisas acontecerem',
                  letter: 'C'
              }],
              correctAnswer: 'A'
            },{
              title: 'Tic Tac.',
              text: 'Você recebeu uma mensagem que precisará rever mais tarde, então você:',
              alternativesType: 'text',
              alternatives: [{
                  option: 'Deixa na caixa de entrada',
                  letter: 'A'
              }, {
                  option: 'Joga na lixeira',
                  letter: 'B'
              }, {
                  option: 'Bota em uma pasta com o nome do assunto',
                  letter: 'C'
              }],
              correctAnswer: 'C'
            }]
          }
        }] //final do action
      })
    ]
);
