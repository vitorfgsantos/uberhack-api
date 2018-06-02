'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Métodos e soluções.",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Processo seletivo')._id,
            ],
            description: 'Quando você tem um problema, o que faz para resolvê-lo? Chama alguém pra te ajudar, faz pesquisas, busca soluções em diferentes lugares? Cada vez mais as empresas valorizam os profissionais que possuem habilidades para trabalhar na solução de problemas. Pra te ajudar a ser um deles, preparamos esta aula com alguns métodos que fazem toda a diferença nesse processo. ',
            estimatedTime: '7',
            image: _.find(files, file => file.filename === 'Aula_26.png').fileUrl,
            activities: [{
              name: 'Mapeando um problema.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Mapeando um problema.',
                  description: ' Jorge mora com seus pais e seus irmãos. Um dia, seu pai chegou em casa muito nervoso, com a conta de água nas mãos! A família tinha gasto muito mais do que nos outros meses! Eles tinham que resolver esse problema logo ou iriam pagar muito mais no próximo mês.',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'slides',
              content: {
                slides: [{
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at1.png').fileUrl,
                    title: 'Mapeando o processo.',
                    text: 'Primeiro, Jorge fez um esquema para entender melhor o problema. Ele listou as principais atividades que envolviam o gasto de água na casa (tomar banho, lavar louças e roupas, lavar o carro, etc) e perguntou para seus pais e irmãos quanto tempo eles demoravam em cada tarefa.'
                }, {
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at1b.png').fileUrl,
                    title: 'Organizando as informações.',
                    text: '<p>Depois, ele começou a organizar todas as informações. Jorge sabe que, se os dados estão em ordem, é muito mais fácil tomar uma decisão!</p><p>Ele, então, fez uma tabela colocando o tempo total gasto com cada atividade que envolvia o consumo de água.</p>'
                },{
                  image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at1c.png').fileUrl,
                  title: 'Analisando os dados.',
                  text: 'Em seguida, Jorge analisou  todos os dados que coletou. De tudo o que ele tinha nas mãos, algumas coisas foram descartadas. Outras foram muito importantes para ele tomar decisões. Por exemplo: ele descobriu que seu irmão mais novo ficava 40 minutos no banho!'
                },{
                  image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at1d.png').fileUrl,
                  title: 'Buscando soluções criativas.',
                  text: '<p>Por fim, precisou de boas ideias para solucionar o problema. Na hora do jantar, ele levou um caderninho e pediu pra todo mundo da casa dar suas sugestões. Nas empresas, isso se chama brainstorm, que quer dizer “tempestade de ideias”. Funciona assim: todo mundo dá suas ideias e não vale criticá-las!</p><p>Com tantas ideias, Jorge só teve que escolher as melhores e colocá-las em prática!</p>'
                }]
              }
            },{
              name: 'Priorização de ideias',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Priorização de ideias',
                  description: 'Das ideias que a família do Jorge deu, algumas podem ser colocadas em prática já (mural); outras são possíveis, mas não pra agora (caderno); e algumas são inviáveis (lixo).',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'simpleRelate',
              content: {
              questions: [{
                  title: 'Priorização de ideias.',
                  text: ' Vamos ajudar o Jorge a classificá-las, arrastando cada ideia para a imagem correta?',
                  draggableText: 'Não tomar banho',
                  alternatives: [{
                      number: 1,
                      image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5a.png').fileUrl
                  }, {
                      number: 2,
                      image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5b.png').fileUrl
                  }, {
                      number: 3,
                      image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5c.png').fileUrl
                  }],
                  correctAnswer: 2,
              },{
                title: 'Priorização de ideias.',
                text: ' Vamos ajudar o Jorge a classificá-las, arrastando cada ideia para a imagem correta?',
                draggableText: 'Lavar o carro a seco',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5c.png').fileUrl
                }],
                correctAnswer: 3,
              },{
                title: 'Priorização de ideias.',
                text: ' Vamos ajudar o Jorge a classificá-las, arrastando cada ideia para a imagem correta?',
                draggableText: 'Consertar vazamentos',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5c.png').fileUrl
                }],
                correctAnswer: 3,
              },{
                title: 'Priorização de ideias.',
                text: ' Vamos ajudar o Jorge a classificá-las, arrastando cada ideia para a imagem correta?',
                draggableText: 'Banho de 5 min',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5c.png').fileUrl
                }],
                correctAnswer: 3,
              },{
                title: 'Priorização de ideias.',
                text: 'Vamos ajudar o Jorge a classificá-las, arrastando cada ideia para a imagem correta?',
                draggableText: 'Não escovar os dentes',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5c.png').fileUrl
                }],
                correctAnswer: 1,
              },{
                title: 'Priorização de ideias.',
                text: 'Vamos ajudar o Jorge a classificá-las, arrastando cada ideia para a imagem correta?',
                draggableText: 'Não cozinhar',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5c.png').fileUrl
                }],
                correctAnswer: 1,
              },{
                title: 'Priorização de ideias.',
                text: 'Vamos ajudar o Jorge a classificá-las, arrastando cada ideia para a imagem correta?',
                draggableText: 'Cavar um poço',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5c.png').fileUrl
                }],
                correctAnswer: 2,
              },{
                title: 'Priorização de ideias.',
                text: 'Vamos ajudar o Jorge a classificá-las, arrastando cada ideia para a imagem correta?',
                draggableText: 'Não beber água',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at5c.png').fileUrl
                }],
                correctAnswer: 1,
              }]}
            },{
              name: 'Processando...',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Processando...',
                  description: 'Um processo é uma combinação de fatores que resulta em um produto ou serviço. Fazer o mapa de um processo pode te ajudar muito a encontrar soluções. ',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'map',
              content: {
                title: 'Processando...',
                text: 'Jorge foi trabalhar em uma empresa e, adivinha? Ela também precisou resolver um problema de desperdício, mas dessa vez com o cafezinho. Vamos ver o mapa de processo que ele fez para solucionar o problema. Clique em cada palavra e descubra.',
                background: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at6.png').fileUrl,
                baseResolution:{
                    width: 1080,
                    height: 1020
                },
                mapping: [{
                    coordinates: '401,71,368,115,366,152,372,179,408,198,497,202,501,225,517,255,552,272,584,262,603,235,615,199,724,192,718,67',
                    shape: 'poly',
                    tickPosition: {
                        x: 515,
                        y: 70
                    },
                    feedback: {
                        title: '',
                        text: 'A empresa recebe todo mês 40 quilos de café. Há 3 meses, essa quantidade dava e sobrava. Porém,  de uns tempos pra cá, mesmo sem ter aumentado o quadro de funcionários, o café acaba 10 dias antes de terminar o mês.',
                        image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at7.png').fileUrl
                    }
                },{
                    coordinates: "410,282,405,370,549,415,711,370,697,285",
                    shape: 'poly',
                    tickPosition: {
                        x: 515,
                        y: 260
                    },
                    feedback: {
                        title: '',
                        text: 'A empresa usa a mesma marca de café faz tempo. Ah, e por sinal, também utiliza as mesmas garrafas térmicas há uns bons anos!',
                        image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at8.png').fileUrl,
                    }
                },{
                  coordinates: "407,444,404,536,549,584,709,533,698,437",
                  shape: 'poly',
                  tickPosition: {
                      x: 515,
                      y: 423
                  },
                  feedback: {
                      title: '',
                      text: 'A Joana, da cozinha, coloca sempre a mesma quantidade de pó para fazer o café. Ela disse pro Jorge que, nos últimos tempos, ele tem esfriado muito rápido nas garrafas e ela tem que repor toda hora.',
                      image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at9.png').fileUrl,
                  }

                },{
                  coordinates: '411,607,403,702,515,758,712,731,708,602',
                  shape: 'poly',
                  tickPosition: {
                      x: 515,
                      y: 593
                  },
                  feedback: {
                      title: '',
                      text: 'O pessoal da empresa toma o café assim que ele chega, mas, depois de alguns minutos, ninguém quer mais. Foi aí que o Jorge sacou o que estava rolando! As garrafas térmicas estavam velhas e não conservavam mais o café quente! Problema resolvido!',
                      image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at10.png').fileUrl
                  }
                }]}
            },{
              description: undefined,
              name: 'Organização é tudo!',
              type: 'interaction',
              presentation: {
                  title: 'Organização é tudo!',
                  description: 'Você sabe organizar dados? Uma empresa quer identificar que tipo de produto vende mais em cada região do Brasil: ítens para lanche ou refeições prontas. Vamos ajudá-la?',
                  image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
              },
              contentFormat: 'add',
              content: {
              questions: [{
                  title: 'Organização é tudo!',
                  text: 'Complete a tabela arrastando os dados corretos para o campo em branco. Para cada região, o lanche e a refeição pronta devem somar 100%.',
                  background: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at11a.png').fileUrl,
                  baseResolution: {
                      width: 1080,
                      height: 860
                  },
                  feedbacks: [{
                      title: 'Muito bem!',
                      text: 'Para somar 100%, a Região Norte tem que ter o índice de 58% de refeições prontas e, a Região Sudeste, 66% de produtos para lanche',
                      type: 'positive'
                  }, {
                      title: 'Quase lá!',
                      text: 'Para somar 100%, a Região Norte tem que ter o índice de 58% de refeições prontas e, a Região Sudeste, 66% de produtos para lanche',
                      type: 'intermediate'
                  }, {
                      title: 'Ooops!',
                      text: 'Para somar 100%, a Região Norte tem que ter o índice de 58% de refeições prontas e, a Região Sudeste, 66% de produtos para lanche',
                      type: 'negative'
                  }],
                  layers: [{
                      number: 1,
                      image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at11h.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at11d.png').fileUrl,
                      category: 'A',
                      tickPosition: {
                          x: 789,
                          y: 333
                      }
                  }, {
                      number: 2,
                      image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at11b.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at11e.png').fileUrl,
                      category: 'A',
                      tickPosition: {
                        x: 789,
                        y: 333
                      }
                  }, {
                      number: 3,
                      image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at11i.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at11f.png').fileUrl,
                      category: 'B',
                      tickPosition: {
                          x: 449,
                          y: 550
                      }
                  }, {
                      number: 4,
                      category: 'B',
                      image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at11c.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at11g.png').fileUrl,
                      tickPosition: {
                        x: 449,
                        y: 550
                      }
                  }],
                  correctLayers: [2, 4]
              }]}
            },{
              name: 'Hora de analisar.',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Hora de analisar.',
                  description: 'Você já organizou os dados. Agora, precisa analisá-los! De acordo com o exercício anterior, mostre pra gente quais conclusões são verdadeiras e quais são falsas.',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'simpleQuiz',
              content: {
              questions: [{
                title: 'Hora de analisar.',
                text: 'Podemos concluir que as regiões mais ao sul do Brasil consomem mais produtos para lanche.',
                image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at12.png').fileUrl,
                alternativesType: 'text',
                feedbacks: [{
                    title: 'Muito bem!',
                    text: 'As Regiões Sudeste e Sul têm um percentual maior de consumo de produtos para lanche.',
                    type: 'positive'
                }, {
                    title: 'Ooops!',
                    text: 'As Regiões Sudeste e Sul têm um percentual maior de consumo de produtos para lanche.',
                    type: 'negative'
                }],
                alternatives: [{
                    option: 'Certo',
                    letter: 'A'
                }, {
                    option: 'Errado',
                    letter: 'B'
                }],
                correctAnswer: 'A'

            },{
              title: 'Hora de analisar.',
              text: 'Analisamos que todas as regiões do Brasil consomem mais refeições prontas.',
              image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at12.png').fileUrl,
              alternativesType: 'text',
              feedbacks: [{
                  title: 'Maravilha! ',
                  text: ' Só as Regiões Norte e Nordeste consomem mais refeições prontas.',
                  type: 'positive'
              }, {
                  title: 'Nada disso!',
                  text: 'Só as Regiões Norte e Nordeste consomem mais refeições prontas.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: 'Certo',
                  letter: 'A'
              }, {
                  option: 'Errado',
                  letter: 'B'
              }],
              correctAnswer: 'B'
            },{
              title: 'Hora de analisar.',
              text: 'Descobrimos que a maioria das regiões consome mais produtos para lanche.',
              image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at12.png').fileUrl,
              alternativesType: 'text',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Três Regiões consomem mais produtos pra lanche (Centro-Oeste, Sudeste e Sul).',
                  type: 'positive'
              }, {
                  title: 'Mandou mal!',
                  text: 'Três Regiões consomem mais produtos pra lanche (Centro-Oeste, Sudeste e Sul).',
                  type: 'negative'
              }],
              alternatives: [{
                  option: 'Certo',
                  letter: 'A'
              }, {
                  option: 'Errado',
                  letter: 'B'
              }],
              correctAnswer: 'A'
            },{
              title: 'Hora de analisar.',
              text: 'Os dados apontaram que em nenhuma região do Brasil as refeições prontas vendem mais que os itens para lanche.',
              image: _.find(files, file => file.filename === 'Aula26_Metodos_e_solucoes_at12.png').fileUrl,
              alternativesType: 'text',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'As Regiões Nordeste e Norte consomem mais refeições prontas.',
                  type: 'positive'
              }, {
                  title: 'Ooops!',
                  text: 'As Regiões Nordeste e Norte consomem mais refeições prontas.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: 'Certo',
                  letter: 'A'
              }, {
                  option: 'Errado',
                  letter: 'B'
              }],
              correctAnswer: 'B'
              }]}
            }]//final do action
          })
    ]
);
