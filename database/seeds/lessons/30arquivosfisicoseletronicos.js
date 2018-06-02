'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Arquivos físicos e eletrônicos",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Propósito de vida')._id,
            ],
            description: 'Diz aí.! Você tem uma gaveta, pasta ou caixa onde guarda papéis e documentos importantes? Se a resposta for sim, saiba que você está fazendo um arquivo e que essa prática é muito importante tanto para as pessoas quanto para as empresas. Hoje você vai conhecer os tipos de documentos e as diferentes maneiras de arquivá-los. É só seguir a aula!',
            estimatedTime: '8',
            image: _.find(files, file => file.filename === 'Aula_01.png').fileUrl,
            activities: [{
              name: 'O ABC dos arquivos.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'O ABC dos arquivos.',
                  description: 'Todos os dias, produzimos diversos tipos de documentos que precisam ser guardados para comprovar as contas que pagamos, as atividades que praticamos e até quem somos! ',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'map',
              content: {
                title: 'O ABC dos arquivos. ',
                text: 'Vamos dar um rolê em um arquivo para entender como ele é? Clique nas letras e descubra o que cada pasta desse arquivo guarda pra você.',
                background: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at1.png').fileUrl,
                baseResolution:{
                    width: 1080,
                    height: 1020
                },
                mapping: [{
                    coordinates: '370,260,279,257,296,351,471,363,586,343,548,242',
                    shape: 'poly',
                    tickPosition: {
                        x: 366,
                        y: 253
                    },
                    feedback: {
                        title: 'Arquivo. O que é?',
                        text: 'Arquivo é aquele conjunto de documentos que você precisa guardar para provar algum tipo de atividade ou ação. Não pense que arquivos são só papéis e pastas! Eles podem ter diversos formatos ou suportes.',
                        image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at9.png').fileUrl
                    }
                },{
                    coordinates: "167,129,173,247,469,214,432,110",
                    shape: 'poly',
                    tickPosition: {
                        x: 202,
                        y: 104
                    },
                    feedback: {
                        title: 'Como guardar?',
                        text: 'Fique esperto e mantenha sempre os arquivos em local seguro contra incêndio, extravio, roubo e deterioração. Além disso, tente organizar de forma que sejam facilmente localizados, acessados e compreendidos por todos. Afinal, o arquivo também é uma fonte de consultas.',
                        image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at10.png').fileUrl,
                    }
                },{
                  coordinates: "713,182,687,265,721,287,930,269,923,152",
                  shape: 'poly',
                  tickPosition: {
                      x: 770,
                      y: 165
                  },
                  feedback: {
                      title: 'Documentos físicos e eletrônicos.',
                      text: 'Documento não é só seu RG ou CPF, mas tudo o que você precisa guardar.  Existem documentos físicos, basicamente papéis, e documentos digitais, que são arquivos de Word, Excel, Power Point, entre outros. Um documento físico pode ser tornar digital se for escaneado. ',
                      image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at11.png').fileUrl,
                  }

                },{
                  coordinates: '579,23,563,124,612,144,802,121,790,3',
                  shape: 'poly',
                  tickPosition: {
                      x: 620,
                      y: 21
                  },
                  feedback: {
                      title: 'Tipos de arquivos.',
                      text: '<p>Os arquivos são divididos em 3 tipos:</p><p>Ativos: que precisam ser sempre consultados.</p><p>Inativos: que têm pouca frequência de consulta.</p><p>Morto: que quase não é acessado, mas que deve ser organizado como os outros.</p>',
                      image: _.find(files, file => file.filename === 'Aula29_Admin_tempo_at12.png').fileUrl
                  }
                }]}

            },{
              name: 'Tudo organizado.',
              description: '',
              type: 'interaction',
              presentation: {
                  title: 'Tudo organizado.',
                  description: 'Para facilitar a organização e a consulta de arquivos, existem alguns métodos de classificação. Vamos conhecê-los?',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'multipleQuiz',
              content: {
                questions: [{
                  title: 'Tudo organizado.',
                  text: 'A área de Recursos Humanos de uma empresa fez pastas de cada funcionário e as classificou por ordem alfabética. Qual das opções abaixo está fora desse arquivo? ',
                  alternativesType: 'image',
                  feedbacks: [{
                      title: 'Parabéns!',
                      text: 'Um arquivo organizado segue um padrão. Nesse caso, as pastas têm os nomes dos funcionários, não os tipos de documentos.',
                      type: 'positive'
                  }, {
                      title: 'Tá errado!',
                      text: 'Um arquivo organizado segue um padrão. Nesse caso, as pastas têm os nomes dos funcionários, não os tipos de documentos.',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q1_1.png').fileUrl,
                      letter: 'A'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q1_2.png').fileUrl,
                      letter: 'B'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q1_3.png').fileUrl,
                      letter: 'C'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q1_4.png').fileUrl,
                      letter: 'D'
                  }],
                  correctAnswer: 'D'
                },{
                  title: 'Tudo organizado.',
                  text: 'Uma empresa de alimentos arquivou os documentos de suas filiais de forma geográfica, ou seja, de acordo com a localização de cada uma. Indique a opção que fica fora dessa classificação.',
                  alternativesType: 'image',
                  feedbacks: [{
                      title: 'Boa!',
                      text: '“Notas” não é uma região, portanto deveria estar em outro arquivo.',
                      type: 'positive'
                  }, {
                      title: 'Nada disso!',
                      text: '“Notas” não é uma região, portanto deveria estar em outro arquivo.',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q2_1.png').fileUrl,
                      letter: 'A'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q2_2.png').fileUrl,
                      letter: 'B'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q2_3.png').fileUrl,
                      letter: 'C'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q2_4.png').fileUrl,
                      letter: 'D'
                  }],
                  correctAnswer: 'B'

                },{
                  title: 'Tudo organizado.',
                  text: 'Para arquivar seus projetos, uma construtora fez pastas classificadas por ordem numérica. Mostre qual pasta não segue a lógica da classificação.',
                  alternativesType: 'image',
                  feedbacks: [{
                      title: 'Muito bem!',
                      text: 'Como alguém vai encontrar a sigla AL no meio de um monte de arquivos numerados?',
                      type: 'positive'
                  }, {
                      title: 'Foi mal!',
                      text: 'Como alguém vai encontrar a sigla AL no meio de um monte de arquivos numerados?',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q3_1.png').fileUrl,
                      letter: 'A'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q3_2.png').fileUrl,
                      letter: 'B'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q3_3.png').fileUrl,
                      letter: 'C'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q3_4.png').fileUrl,
                      letter: 'D'
                  }],
                  correctAnswer: 'C'
                },{
                  title: 'Tudo organizado.',
                  text: 'Uma loja de roupas arquiva seus pagamentos em caixas por ordem numérica cronológica, ou seja, pelo mês em que as contas foram pagas. Mostre qual caixa está fora do padrão.',
                  alternativesType: 'image',
                  feedbacks: [{
                      title: 'Joia!',
                      text: 'Essa caixa tem uma numeração, e não uma data. Ela não tem nada a ver com esse arquivo.',
                      type: 'positive'
                  }, {
                      title: 'Pense bem.',
                      text: 'essa caixa tem uma numeração, e não uma data. Ela não tem nada a ver com esse arquivo.',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q4_1.png').fileUrl,
                      letter: 'A'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q4_2.png').fileUrl,
                      letter: 'B'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q4_3.png').fileUrl,
                      letter: 'C'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q4_4.png').fileUrl,
                      letter: 'D'
                  }],
                  correctAnswer: 'A'
                },{
                  title: 'Tudo organizado.',
                  text: 'Luíza arquiva seus álbuns de fotos por assunto. Mostre qual álbum está sobrando nessa classificação.',
                  alternativesType: 'image',
                  feedbacks: [{
                      title: 'Certíssimo!',
                      text: 'Se a Luiza organiza por assunto, não tem nada a ver ter uma data no meio.',
                      type: 'positive'
                  }, {
                      title: 'Errou!',
                      text: 'Se a Luiza organiza por assunto, não tem nada a ver ter uma data no meio.',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q5_1.png').fileUrl,
                      letter: 'A'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q5_2.png').fileUrl,
                      letter: 'B'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q5_3.png').fileUrl,
                      letter: 'C'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula30_A2_Q5_4.png').fileUrl,
                      letter: 'D'
                  }],
                  correctAnswer: 'C'
                }]}
            },{
              name: 'Pegou, devolveu!',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Pegou, devolveu!',
                  description: 'Sempre tem alguém que precisa retirar um documento do arquivo. Para garantir que ele seja devolvido, o lance é fazer um formulário, com informações como: data, nome de quem retirou, identificação do arquivo… Que tal preencher um desses para treinar?',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'add',
              content: {
              questions: [{
                  title: 'Pegou, devolveu!',
                  text: 'Vera organizou os arquivos do escritório de advocacia em que trabalha e criou um formulário para retirada de documentos. Indique a opção correta para preenchê-lo.',
                  background: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at8.png').fileUrl,
                  baseResolution: {
                      width: 1080,
                      height: 860
                  },
                  feedbacks: [{
                      title: 'Muito bem!',
                      text: 'Um formulário de controle de arquivos deve ser preenchido com o nome do documento e de quem o retirou e com as datas de retirada e de devolução. Não se esqueça de dar baixa quando ele é devolvido!',
                      type: 'positive'
                  }, {
                      title: 'Quase lá!',
                      text: 'Um formulário de controle de arquivos deve ser preenchido com o nome do documento e de quem o retirou e com as datas de retirada e de devolução. Não se esqueça de dar baixa quando ele é devolvido!',
                      type: 'intermediate'
                  }, {
                      title: 'Ooops!',
                      text: 'Um formulário de controle de arquivos deve ser preenchido com o nome do documento e de quem o retirou e com as datas de retirada e de devolução. Não se esqueça de dar baixa quando ele é devolvido!',
                      type: 'negative'
                  }],
                  layers: [{
                      number: 1,
                      image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at8a.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at8e.png').fileUrl,
                      category: 'A',
                      tickPosition: {
                          x: 197,
                          y: 87
                      }
                  }, {
                      number: 2,
                      image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at8b.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at8f.png').fileUrl,
                      category: 'A',
                      tickPosition: {
                        x: 197,
                        y: 87
                      }
                  }, {
                      number: 3,
                      image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at8c.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at8g.png').fileUrl,
                      category: 'A',
                      tickPosition: {
                        x: 197,
                        y: 87
                      }
                  }, {
                      number: 4,
                      category: 'A',
                      image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at8d.png').fileUrl,
                      icon: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at8h.png').fileUrl,
                      tickPosition: {
                        x: 197,
                        y: 87
                      }
                  }],
                  correctLayers: [4]
              }]}
            },{
              name: 'Ciclo de vida.',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Ciclo de vida.',
                  description: 'Você deve estar se perguntando: quanto tempo um documento precisa ser guardado?  Depende. Alguns carnês, 2 anos. Pagamentos de serviços, 5 anos. E os que comprovam tempo de contribuição, mais de 10 anos! ',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'simpleRelate',
              content: {
              questions: [{
                title: 'Ciclo de vida.',
                text: 'Topa fazer um teste? Tente adivinhar por quanto tempo cada arquivo que aparecer precisa ser guardado.',
                draggableText: 'Conta de água e luz ',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6c.png').fileUrl
                }],
                correctAnswer: 2,
              },{
                title: 'Ciclo de vida.',
                text: 'Topa fazer um teste? Tente adivinhar por quanto tempo cada arquivo que aparecer precisa ser guardado.',
                draggableText: 'Aluguel',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6c.png').fileUrl
                }],
                correctAnswer: 2,
              },{
                title: 'Ciclo de vida.',
                text: 'Topa fazer um teste? Tente adivinhar por quanto tempo cada arquivo que aparecer precisa ser guardado.',
                draggableText: 'Carnês e recibos',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6c.png').fileUrl
                }],
                correctAnswer: 1,
              },{
                title: 'Ciclo de vida.',
                text: 'Topa fazer um teste? Tente adivinhar por quanto tempo cada arquivo que aparecer precisa ser guardado.',
                draggableText: 'Imposto de renda',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6c.png').fileUrl
                }],
                correctAnswer: 2,
              },{
                title: 'Ciclo de vida.',
                text: 'Topa fazer um teste? Tente adivinhar por quanto tempo cada arquivo que aparecer precisa ser guardado.',
                draggableText: 'Multas e IPVA',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6c.png').fileUrl
                }],
                correctAnswer: 1,
              },{
                title: 'Ciclo de vida.',
                text: 'Topa fazer um teste? Tente adivinhar por quanto tempo cada arquivo que aparecer precisa ser guardado.',
                draggableText: 'Notas fiscais',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6c.png').fileUrl
                }],
                correctAnswer: 2,
              },{
                title: 'Ciclo de vida.',
                text: 'Topa fazer um teste? Tente adivinhar por quanto tempo cada arquivo que aparecer precisa ser guardado.',
                draggableText: 'Comprovante do INSS',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6c.png').fileUrl
                }],
                correctAnswer: 3,
              },{
                title: 'Ciclo de vida.',
                text: 'Topa fazer um teste? Tente adivinhar por quanto tempo cada arquivo que aparecer precisa ser guardado.',
                draggableText: 'Depósito FGTS',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6b.png').fileUrl
                }, {
                    number: 3,
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at6c.png').fileUrl
                }],
                correctAnswer: 3,
              }]}
            },{
              name: 'Fica a dica!',
              description: undefined,
              type: 'presentation',
              contentFormat: 'slides',
              content: {
                slides: [{
                    image: _.find(files, file => file.filename === 'Aula30_arquivosfisicos_at7.png').fileUrl,
                    title: 'Fica a dica!',
                    text: 'A documentação de uma empresa deve ser armazenada com todo cuidado, em local acessível, arejado, bem iluminado, dedetizado e seguro. Quando os arquivos estão bem organizados, as consultas ficam mais rápidas e a empresa não gasta dinheiro com multas decorrentes de documentos não apresentados. É organizar pra melhorar!'
                }]}
            }]//final do action
          }
        )
    ]
);
