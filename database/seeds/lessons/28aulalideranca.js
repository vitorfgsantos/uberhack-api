'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Liderança",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Comunicação')._id,//TODO
            ],
            estimatedTime: 8,
            description: 'Hoje, você irá conhecer a importância de um líder. Mais do que isso: irá saber as habilidades necessárias para se tornar um. Afinal, líderes não são pessoas inatingíveis, mas profissionais comunicativos, proativos, inspiradores e que têm uma grande capacidade de influenciar e orientar equipes. Vem com a gente e assuma a liderança da sua vida!',
            image: _.find(files, file => file.filename === 'Aula_14.png').fileUrl, //TODO
            activities: [{
              name: 'Siga o líder.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Siga o líder.',
                  description: 'Os líderes estão em todo lugar: no trabalho, na escola, na comunidade. São pessoas que sabem direcionar e influenciar os grupos que lideram, incentivando e ajudando as pessoas a superarem obstáculos. O líder é aquele que conduz a equipe a um objetivo comum!',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'slides',
              content: {
                slides: [{
                    image: _.find(files, file => file.filename === 'Aula28_Lideranca2_01.png').fileUrl,
                    title: 'Inspirar e influenciar.',
                    text: 'O líder tem a capacidade de inspirar as pessoas. Com palavras e atitudes coerentes, ele consegue ser um exemplo para a equipe e influenciar o comportamento das pessoas que estão ao seu redor. '
                }, {
                    image: _.find(files, file => file.filename === 'Aula28_Lideranca2_02.png').fileUrl,
                    title: 'Dirigir equipes e dar feedback.',
                    text: 'O líder gosta de estar perto da sua equipe e é disposto a ajudar. Sabe identificar os talentos de cada um e reconhecer o desempenho das pessoas, dizendo o que elas precisam melhorar. Isso se chama feedback, coisa que um líder sabe fazer muito bem!'
                },{
                    image: _.find(files, file => file.filename === 'Aula28_Lideranca2_03.png').fileUrl,
                    title: 'Enxergar longe, se antecipar e realizar.',
                    text: 'Ter visão de futuro e saber exatamente para onde está indo também são habilidades de quem é líder. Pensa em alguém que sabe a hora de mudar antes de todo mundo: esse é o líder! E, por ter essa habilidade, ele consegue tomar decisões rápidas e certeiras. '
                },{
                    image: _.find(files, file => file.filename === 'Aula28_Lideranca2_04.png').fileUrl,
                    title: 'Assumir responsabilidades, promover o bem e desenvolver novos líderes.',
                    text: 'Seja um sucesso ou um fiasco, o líder se responsabiliza pelos resultados de um trabalho. Quando tudo dá certo, ele compartilha o mérito com a equipe e procura manter o clima de trabalho sempre em alto astral. Ah, ele estimula as pessoas a serem líderes também! '
                }]
              }
            },{
              name: 'A atitude diz tudo.',
              description: '',
              type: 'interaction',
              presentation: {
                  title: 'A atitude diz tudo.',
                  description: 'Agora que você já conhece as habilidades de um líder, vamos fazer um teste? Nas situações a seguir, indique qual das opções mais tem a ver com a atitude que um líder tomaria.',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'multipleQuiz',
              content: {
                  questions: [{
                    title: 'A atitude diz tudo.',
                    text: 'Ao voltar de uma reunião com os sócios da empresa onde foram anunciadas as metas para o próximo ano, o que o líder faz?',
                    alternativesType: 'text',
                    feedbacks: [{
                        title: 'Boa!',
                        text: 'Deixar a equipe por dentro dos projetos e mostrar de que forma cada um pode contribuir é uma postura de líder!',
                        type: 'positive'
                    }, {
                        title: 'Nada disso!',
                        text: 'Deixar a equipe por dentro dos projetos e mostrar de que forma cada um pode contribuir é uma postura de líder!',
                        type: 'negative'
                    }],
                    alternatives: [{
                        option: 'Reúne sua equipe, explica o que foi decidido na reunião e informa como cada um pode contribuir para a empresa alcançar as metas.',
                        letter: 'A'
                    }, {
                        option: 'Se fecha na sala e guarda as informações para ele. Afinal, só os chefes precisam saber disso.',
                        letter: 'B'
                    }, {
                        option: 'Conta só para os funcionários mais próximos e que ele confia. ',
                        letter: 'C'
                    }],
                    correctAnswer: 'A'
                },{
                  title: 'A atitude diz tudo.',
                  text: 'Felipe trabalha na área de vendas e se destacou muito em uma apresentação que fez para a diretoria. Foi até aplaudido no final! Que atitude seu líder teria nessa situação?',
                  alternativesType: 'text',
                  feedbacks: [{
                      title: 'Maravilha!',
                      text: 'Um bom líder dá feedbacks e contribui com o desenvolvimento pessoal dos funcionários.',
                      type: 'positive'
                  }, {
                      title: 'Errado!',
                      text: 'Um bom líder dá feedbacks e contribui com o desenvolvimento pessoal dos funcionários',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: 'Tentaria mostrar que participou da elaboração da apresentação para ser elogiado também.',
                      letter: 'A'
                  }, {
                      option: 'Ficaria na dele. Afinal, o Felipe já foi elogiado pelos outros!',
                      letter: 'B'
                  }, {
                      option: 'Daria um feedback para o Felipe, elogiando seu desempenho e dando alguns toques de como melhorar ainda mais.',
                      letter: 'C'
                  }],
                  correctAnswer: 'C'
                },{
                  title: 'A atitude diz tudo.',
                  text: 'A equipe da área de produtos precisa entregar um relatório urgente às 9 horas da manhã de sexta-feira. Já são 5 horas da tarde de quinta e ainda falta muito para terminar. O que o líder faz?',
                  alternativesType: 'text',
                  feedbacks: [{
                      title: 'Certíssimo!',
                      text: 'Um líder de verdade põe a mão na massa e fica ao lado da equipe em todos os momentos.',
                      type: 'positive'
                  }, {
                      title: 'Não!',
                      text: 'Um líder de verdade põe a mão na massa e fica ao lado da equipe em todos os momentos.',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: 'Fala pro pessoal ser mais rápido e vai pra casa descansar.',
                      letter: 'A'
                  }, {
                      option: 'Coloca a mão na massa e fica junto com a equipe até o relatório ficar pronto.',
                      letter: 'B'
                  }, {
                      option: 'Chama uma pizza pra galera e se manda!',
                      letter: 'C'
                  }],
                  correctAnswer: 'B'
                }]}
            },{
              name: 'Encontre o líder.',
              description: '',
              type: 'interaction',
              presentation: {
                  title: 'Encontre o líder.',
                  description: 'Sabia que nem sempre o líder é um chefe? Ter uma postura de liderança não tem nada a ver com o cargo que você tem, mas com algumas aptidões que todos podem desenvolver. Pensando nisso, encontre o líder na imagem a seguir.',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'errors',
              content: {
              questions: [{
                  title: 'Encontre o líder.',
                  text: 'Essas 3 pessoas trabalham na mesma equipe. O Nelson é o chefe. A Ana e a Carol são assistentes. Eles acabaram de apresentar um projeto que não foi muito bem aceito pela diretoria. Clique no profissional que teve uma postura de líder nessa situação.',
                  clicks: 1,
                  baseResolution: {
                      width: 1080,
                      height: 1140
                  },
                  background: _.find(files, file => file.filename === 'Aula28_Lideranca_at5.png').fileUrl,
                  mappings: [{
                      coordinates: '547,101,522,167,548,253,638,297,720,330,753,432,770,455,748,481,769,528,777,629,888,710,1007,650,1029,457,900,89,715,72',
                      shape: 'poly',
                      tickPosition: {
                          x: 640,
                          y: 87
                      },
                      feedback: {
                          title: 'Muito bem!',
                          text: 'Numa situação dessa, o líder não culparia ninguém! Ele assumiria o erro e tentaria fazer melhor da próxima vez.',
                          type: 'positive'
                      }
                  }]
                }]}
            },{
              name: 'A atitude diz tudo.',
              description: '',
              type: 'interaction',
              presentation: {
                  title: 'A atitude diz tudo.',
                  description: 'Agora que você já conhece as habilidades de um líder, vamos fazer um teste? Nas situações a seguir, indique qual das opções mais tem a ver com a atitude que um líder tomaria.',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'simpleQuiz',
              content: {
                  questions: [{
              title: 'Bom relacionamento.',
              text: 'Você entrou num trabalho novo e já sacou que seu chefe é bem exigente . Então, passou a fazer seu trabalho cada vez melhor para se adaptar ao estilo dele.',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Se adaptar ao estilo do seu chefe garante um bom relacionamento.',
                  type: 'positive'
              }, {
                  title: 'Ooops!',
                  text: 'Se adaptar ao estilo do seu chefe garante um bom relacionamento.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6a.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6b.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'A'
            },{
              title: 'Bom relacionamento.',
              text: 'Sempre que você tem uma oportunidade, fala mal dos colegas para o seu chefe. Assim, consegue ganhar a confiança dele.',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Boa!',
                  text: 'Esse tipo de atitude só cria um ambiente negativo e pouco produtivo.',
                  type: 'positive'
              }, {
                  title: 'Errado!',
                  text: 'Esse tipo de atitude só cria um ambiente negativo e pouco produtivo.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6a.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6b.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'B'

            },{
              title: 'Bom relacionamento.',
              text: 'Você sempre presta atenção no jeito que seu líder fala com você e aos feedbacks que ele te dá, pra sacar se ele curte seu jeito e seu trabalho. ',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Isso mesmo! ',
                  text: 'É supermportante saber o que seu chefe pensa de você!',
                  type: 'positive'
              }, {
                  title: 'Nada disso!',
                  text: 'É superimportante saber o que seu chefe pensa de você!',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6a.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6b.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'A'

            },{
              title: 'Bom relacionamento.',
              text: 'Você sabe quais são as suas responsabilidades e o que seu chefe espera do seu trabalho. Assim, consegue atendê-lo sempre bem!',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Isso mesmo! ',
                  text: 'Entender o seu papel te aproxima do seu líder.',
                  type: 'positive'
              }, {
                  title: 'Nada disso!',
                  text: 'Entender o seu papel te aproxima do seu líder.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6a.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6b.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'A'
            },{
              title: 'Bom relacionamento.',
              text: 'Para você, ser amigo do chefe é até mais importante do que fazer um trabalho bem feito.',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Boa postura! ',
                  text: 'Não é com amizade que você vai conseguir a admiração do chefe, mas sim com um bom trabalho!',
                  type: 'positive'
              }, {
                  title: 'Isso não é uma boa postura!',
                  text: 'Não é com amizade que você vai conseguir a admiração do chefe, mas sim com um bom trabalho!',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6a.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6b.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'B'
            },{
              title: 'Bom relacionamento.',
              text: 'Quando seu chefe te pede pra fazer alguma coisa, você sempre tenta surpreendê-lo e fazer algo a mais.',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Acertou! ',
                  text: 'Não é com amizade que você vai conseguir a admiração do chefe, mas sim com um bom trabalho!',
                  type: 'positive'
              }, {
                  title: 'Não!!',
                  text: 'Superar as expectativas é um jeito de impressionar seu chefe! ',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6a.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6b.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'A'
            },{
              title: 'Bom relacionamento.',
              text: 'Quando pinta um problema, você vai logo falar com seu líder. Afinal, é ele quem tem que resolver as coisas!',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Certíssimo!',
                  text: 'Sempre que possível, procure levar soluções no lugar de problemas.',
                  type: 'positive'
              }, {
                  title: 'Tá errado!',
                  text: 'Sempre que possível, procure levar soluções no lugar de problemas.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6a.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6b.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'B'
            },{
              title: 'Bom relacionamento.',
              text: 'Você sempre tenta apoiar seu chefe e ajudá-lo no que for preciso. O que é importante pra ele, é importante pra você!',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Boa atitude!',
                  text: 'Sempre que puder, ajude seu chefe. ',
                  type: 'positive'
              }, {
                  title: 'Isso não!',
                  text: 'Sempre que puder, ajude seu chefe. ',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6a.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula28_Lideranca_at6b.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'A'
            }]}
          },{
            name: 'Rumo à liderança.',
            description: undefined,
            type: 'presentation',
            presentation: {
                title: 'Indeciso, eu? ',
                description: 'Show! Agora você já sabe as principais habilidades  que um líder precisa ter. Por falar nisso, será que você já possui algumas delas? Nas questões a seguir, mova a barra para o lado que melhor indica o seu comportamento. ',
                image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
            },
            // Fazer e refatorar todo o scale
            contentFormat: 'scale',
            content: {
                questions: [{
                  title: 'Rumo à liderança.',
                  text: 'Gosto muito de me comunicar e todo mundo leva em consideração as minhas opiniões.',
                  image: _.find(files, file => file.filename === 'Aula28_Lideranca_at05_02.png').fileUrl,
                  values: {
                    right: {
                        value: 'rigth',
                        feedback: {
                            title: '',
                            text: 'Puxa, que tal praticar mais essa habilidade e começar a se comunicar mais?',
                            type: 'positive'
                        }
                    },
                    left: {
                        value: 'left',
                        feedback: {
                            title: 'Legal!',
                            text: ' Você já tem uma habilidade de líder. Continue assim!',
                            type: 'positive'
                        }
                    }
                  },
                },{
                  title: 'Rumo à liderança.',
                  text: 'Não me deixo levar por “tititis” e fofocas. Respeito as diferenças e sei lidar com conflitos.',
                  image: _.find(files, file => file.filename === 'Aula28_Lideranca_at05_02.png').fileUrl,
                  values: {
                    right: {
                        value: 'rigth',
                        feedback: {
                            title: 'Hummm… ',
                            text: 'você está indo contra ao que um líder faria. Isso só distancia você da liderança.',
                            type: 'positive'
                        }
                    },
                    left: {
                        value: 'left',
                        feedback: {
                            title: 'Legal!',
                            text: 'Continue cultivando essa postura de líder.',
                            type: 'positive'
                        }
                    }
                  },
                },{
                  title: 'Rumo à liderança.',
                  text: 'Faço as coisas sem esperar que os outros me peçam e sempre coloco em prática minhas ideias.',
                  image: _.find(files, file => file.filename === 'Aula28_Lideranca_at05_02.png').fileUrl,
                  values: {
                    right: {
                        value: 'left',
                        feedback: {
                            title: 'Boa!',
                            text: ' Você é proativo e essa é uma das principais habilidades dos líderes. Parabéns!',
                            type: 'positive'
                        }
                    },
                    left: {
                        value: 'rigth',
                        feedback: {
                            title: 'Você não é muito proativo, né?',
                            text: 'Que tal praticar mais essa habilidade. Ela é fundamental para quem quer ser líder! ',
                            type: 'positive'
                        }
                    }
                  },
                },{
                  title: 'Rumo à liderança.',
                  text: 'Tento sempre me colocar no lugar das pessoas e ajudá-las a vencer as dificuldades.',
                  image: _.find(files, file => file.filename === 'Aula28_Lideranca_at05_02.png').fileUrl,
                  values: {
                    right: {
                        value: 'rigth',
                        feedback: {
                            title: 'Ops… ',
                            text: 'você não está praticando muito a empatia, que é uma das grandes qualidades dos líderes! Já pensou em se colocar mais no lugar das pessoas?',
                            type: 'positive'
                        }
                    },
                    left: {
                        value: 'left',
                        feedback: {
                            title: 'Quem bom!',
                            text: 'Você tem empatia e essa é uma das grandes qualidades dos líderes!',
                            type: 'positive'
                        }
                    }
                  },
                }]}
          },{
            name: 'Lidere a sua vida.',
            description: undefined,
            type: 'presentation',
            contentFormat: 'slides',
            content: {
              slides: [{
                  image: _.find(files, file => file.filename === 'Aula28_Lideranca_at7.png').fileUrl,
                  title: 'Lidere a sua vida.',
                  text: 'A liderança não é importante só para o mundo corporativo. Ter uma atitude de líder é fundamental para a nossa vida. Afinal, quando assumimos o controle do que fazemos, conseguimos alcançar o futuro que sonhamos para nós! Por isso, comece hoje mesmo a desenvolver as habilidades de liderança e tenha o comando do seu destino!'
              }]}
          }]//final do action
    })
  ]
);
