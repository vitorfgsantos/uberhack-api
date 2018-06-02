'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Inovação",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Propósito de vida')._id,
            ],
            description: 'Hoje todo mundo fala de inovação. E isso pode até parecer uma parada distante de nós. Algo que só os gênios, os inventores ou as pessoas muito habilidosas conseguem desenvolver. Mas fique sabendo que todo mundo pode aprender a inovar e você não precisa ir muito longe para começar. É só seguir a aula!',
            estimatedTime: '7',
            image: _.find(files, file => file.filename === 'Aula_03.png').fileUrl,
            activities: [{
              name: 'Afinal, o que é inovação?',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Apresentação "profissa"',
                  description: 'novação não é o mesmo que criatividade. O cara criativo tem ideias, pensa em coisas novas. Já os inovadores, colocam isso em prática. Pensa assim: para haver inovação é preciso ação! Você precisa testar, errar, voltar, corrigir. Ela é o resultado de muito trabalho, método e disciplina.  Ou seja… tem que ralar!',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'slides',
              content: {
                slides: [{
                    image: _.find(files, file => file.filename === 'Aula24_Inovacao_at01_1.png').fileUrl,
                    title: 'Aí sim!',
                    text: 'Tá bom. Se inovação não é criatividade…então ela é uma descoberta, uma invenção? Também não. Como estes dois conceitos, ela também traz conhecimento, mas a diferença é que a inovação gera negócios! Inovar é encontrar novas soluções ou maneiras melhores de fazer algo, sempre envolvendo: solução de problemas e geração de valor, tanto para a empresa quanto para a sociedade.'
                }, {
                    image: _.find(files, file => file.filename === 'Aula24_Inovacao_at01_2.png').fileUrl,
                    title: 'Por que é bom uma empresa inovar?',
                    text: 'Porque as soluções inovadoras tornam as empresas mais competitivas e rentáveis. Além disso, geram produtos e serviços que deixam nossa vida mais fácil e movimentam a economia do país. Já reparou quantas inovações fazem parte do nosso dia a dia e que não existiam na época dos nossos avós? Inovação traz desenvolvimento e isso é bom pra todo mundo!'
                }]
              }

      },{
        name: 'Passado e presente.',
        description: undefined,
        type: 'interaction',
        presentation: {
            title: 'Passado e presente.',
            description: 'Você já deve ter se ligado que inovação não é necessariamente algo criado do zero. Muitas vezes ela é a evolução de um produto ou serviço que já existia. A seguir, indique as inovações que substituíram cada produto do passado.',
            image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
        },
        contentFormat: 'multipleQuiz',
        content: {
          questions: [{
          title: 'Passado e presente.',
          text: 'Há trinta anos, se você quisesse bater um papo com um amigo que estava longe, precisaria ter um telefone fixo, conectado por um fio a uma linha telefônica. Que inovação substituiu esse aparelho?',
          alternativesType: 'image',
          feedbacks: [{
              title: 'Isso mesmo!',
              text: 'O telefone celular é uma inovação porque melhorou algo que já existia.',
              type: 'positive'
          }, {
              title: 'Nada disso.',
              text: 'A inovação que melhorou o sistema telefônico foi o telefone celular.',
              type: 'negative'
          }],
          alternatives: [{
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_1.png').fileUrl,
              letter: 'A'
          }, {
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_2.png').fileUrl,
              letter: 'B'
          }, {
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_3.png').fileUrl,
              letter: 'C'
          }, {
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_4.png').fileUrl,
              letter: 'D'
          }],
          correctAnswer: 'B'
        },{
          title: 'Passado e presente.',
          text: 'Se você estivesse perdido numa rua de São Paulo há alguns anos, teria que pegar um guia de mais 500 páginas e cheio de mapas, para se localizar. Que inovação deixou essa tarefa mais fácil?',
          alternativesType: 'image',
          feedbacks: [{
              title: 'Boa!',
              text: 'O sistema GPS inovou a forma como nos deslocamos na cidade.',
              type: 'positive'
          }, {
              title: 'Tá errado!',
              text: 'O sistema que inovou a forma como nos deslocamos na cidade é o GPS.',
              type: 'negative'
          }],
          alternatives: [{
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_1.png').fileUrl,
              letter: 'A'
          }, {
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_2.png').fileUrl,
              letter: 'B'
          }, {
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_3.png').fileUrl,
              letter: 'C'
          }, {
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_4.png').fileUrl,
              letter: 'D'
          }],
          correctAnswer: 'C'
        },{
          title: 'Passado e presente.',
          text: 'Antigamente, para ouvir um som, você tinha que ter uma vitrola e um disco de vinil.  Até que surgiu uma inovação que todo mundo achou o máximo! Qual foi?',
          alternativesType: 'image',
          feedbacks: [{
              title: 'Mandou bem! ',
              text: 'O CD foi uma inovação do disco de vinil.',
              type: 'positive'
          }, {
              title: 'Mandou mal.',
              text: ' Foi o CD que inovou o disco de vinil.',
              type: 'negative'
          }],
          alternatives: [{
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_1.png').fileUrl,
              letter: 'A'
          }, {
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_2.png').fileUrl,
              letter: 'B'
          }, {
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_3.png').fileUrl,
              letter: 'C'
          }, {
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_4.png').fileUrl,
              letter: 'D'
          }],
          correctAnswer: 'D'
        },{
          title: 'Passado e presente.',
          text: 'Para tirar uma foto na década de 90, você tinha que comprar um rolo de filme, tirar a foto, mandar revelar e esperar alguns dias para ver o resultado. Que inovação substituiu esse processo?',
          alternativesType: 'image',
          feedbacks: [{
              title: 'Maravilha! ',
              text: 'O CD foi uma inovação do disco de vinil.',
              type: 'positive'
          }, {
              title: ' Não!!',
              text: 'Foi a câmera digital que deixou esse processo mais fácil e rápido.',
              type: 'negative'
          }],
          alternatives: [{
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_1.png').fileUrl,
              letter: 'A'
          }, {
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_2.png').fileUrl,
              letter: 'B'
          }, {
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_3.png').fileUrl,
              letter: 'C'
          }, {
              option: _.find(files, file => file.filename === 'Aula24_Inovacao_at02_4.png').fileUrl,
              letter: 'D'
          }],
          correctAnswer: 'A'
        }]
        }
      },{
        name: 'Inovação dentro das empresas.',
        description: undefined,
        type: 'interaction',
        presentation: {
            title: 'Inovação dentro das empresas.',
            description: 'A inovação não está só no seu celular ou na forma como você ouve música. Ela está em diversas áreas das empresas, facilitando processos, atraindo novos consumidores e até organizando rotinas. Se liga onde você pode encontrá-la:',
            image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
        },
        contentFormat: 'multipleQuiz',
        content: {
          questions: [{
            title: 'Inovação dentro das empresas.',
            text: 'A inovação pode estar na forma de produzir de uma empresa. Então, qual das opções abaixo seria uma inovação nessa área?',
            alternativesType: 'text',
            feedbacks: [{
                title: 'Isso! ',
                text: ' Inovar em processos é melhorar os métodos de produção ou distribuição de uma empresa, mudando os equipamentos, as fontes de matérias primas e os processos logísticos.',
                type: 'positive'
            }, {
                title: 'Errou… ',
                text: 'Inovar em processos é melhorar os métodos de produção ou distribuição de uma empresa, como trocar os processos manuais por robôs.',
                type: 'negative'
            }],
            alternatives: [{
                option: 'Uma empresa química praticamente não tem máquinas na sua linha de produção. Só pessoas.',
                letter: 'A'
            }, {
                option: 'Uma fabricante de veículos automatizou a linha de produção, trocando o processo manual por robôs.',
                letter: 'B'
            }, {
                option: 'Uma fábrica de alimentos aumentou o turno dos funcionários para eles produzirem mais e a fábrica bombar!',
                letter: 'C'
            }],
            correctAnswer: 'B'

          },{
            title: 'Inovação dentro das empresas.',
            text: 'Também existe inovação na área de marketing, quando um produto é vendido de um jeito novo ou para um público diferente. Qual das opções representa uma inovação assim? ',
            alternativesType: 'text',
            feedbacks: [{
                title: 'Certíssimo! ',
                text: 'Reposicionar uma marca no mercado é uma inovação de marketing.',
                type: 'positive'
            }, {
                title: 'Nada disso!',
                text: 'Inovação em marketing é mudar o design, a embalagem, o posicionamento e a forma de vender um produto e não manter as coisas como estão.',
                type: 'negative'
            }],
            alternatives: [{
                option: 'Uma marca de sandálias voltada para o público popular reformulou sua comunicação e passou a ser desejada por consumidores das classes mais altas. ',
                letter: 'A'
            }, {
                option: 'Uma fábrica de eletrodomésticos focou 100% da sua comunicação no público feminino.',
                letter: 'B'
            }, {
                option: 'Uma marca de roupas não vende seus produtos pela internet. Só na loja física.',
                letter: 'C'
            }],
            correctAnswer: 'A'

      },{
        title: 'Inovação dentro das empresas.',
        text: 'A inovação também está nas novas práticas de organizar a rotina e os procedimentos de trabalho. Qual das opções abaixo representa uma inovação organizacional? ',
        alternativesType: 'text',
        feedbacks: [{
            title: 'Certíssimo!',
            text: ' Inovação organizacional é aquela que traz novas práticas para o dia a dia dos profissionais, tornando a empresa mais produtiva.',
            type: 'positive'
        }, {
            title: 'Não!',
            text: 'Inovação organizacional não é dificultar  o dia a dia dos profissionais e sim facilitar os procedimentos, tornando a empresa mais produtiva.',
            type: 'negative'
        }],
        alternatives: [{
            option: 'Os funcionários de uma  seguradora fazem 3 reuniões por dia para organizar o fluxo de trabalho da empresa.',
            letter: 'A'
        }, {
            option: 'Numa fábrica de chocolates, nenhuma decisão pode ser tomada sem a assinatura do diretor. ',
            letter: 'B'
        }, {
            option: 'Uma empresa de comunicação implantou um programa em que cada funcionário consegue visualizar as tarefas do dia e sinalizar o já foi feito.',
            letter: 'C'
        }],
        correctAnswer: 'C'
      }
     ]}
      },{
        name: '5 habilidades do inovador ',
        description: undefined,
        type: 'presentation',
        presentation: {
            title: 'Escolha as ferramentas.',
            description: 'Você viu que inovação é tudo de bom. Agora é treinar! Afinal, ninguém nasce inovador, mas todo mundo pode aprender a ser um. Para começar, apresentamos algumas habilidades fundamentais para uma mente inovadora. São só 5. Clique nos dedos e descubra!',
            image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
        },
          contentFormat: 'map',
          content: {
              title: '5 habilidades do inovador ',
              text: 'Você viu que inovação é tudo de bom. Agora é treinar! Afinal, ninguém nasce inovador, mas todo mundo pode aprender a ser um. Para começar, apresentamos algumas habilidades fundamentais para uma mente inovadora. São só 5. Clique nos dedos e descubra!',
              type: 'presentation',
              background: _.find(files, file => file.filename === 'Aula24_Inovacao_at04.png').fileUrl,
              baseResolution: {
                  width: 1080,
                  height: 1020
              },
              mapping: [{
                  coordinates: '110,390,80,422,76,489,115,529,205,512,240,445,206,367,149,351',
                  shape: 'poly',
                  tickPosition: {
                      x: 99,
                      y: 390
                  },
                  feedback: {
                      title: 'Trabalhar em rede',
                      text: 'Interagir com pessoas de idades, formações ou gostos diferentes dos seus faz você descobrir novas maneiras de ver as coisas.Para treinar, procure, de vez em quando, ler ou fazer cursos que não tenham a ver com sua área.',
                      image: _.find(files, file => file.filename === 'Aula24_Inovacao_at04_1.png').fileUrl
                  }
              }, {
                  coordinates: "245,100,228,163,257,204,313,219,360,196,389,135,378,95,325,54,270,54",
                  shape: 'poly',
                  tickPosition: {
                      x: 259,
                      y: 72
                  },
                  feedback: {
                      title: 'Questionar',
                      text: 'Fazer perguntas e não se contentar com verdades absolutas, te ajudam a ter novas ideias. Para treinar, faça perguntas a você mesmo, tipo: “E se...?” ou “O que aconteceria se eu fizesse assim?”',
                      image: _.find(files, file => file.filename === 'Aula24_Inovacao_at04_2.png').fileUrl,
                  }
              }, {
                  coordinates: "466,40,455,108,479,156,556,149,604,101,595,30,543,1,502,1",
                  shape: 'poly',
                  tickPosition: {
                      x: 481,
                      y: 15
                  },
                  feedback: {
                      title: 'Observar',
                      text: 'Estar antenado e observar como produtos, empresas e pessoas resolvem seus problemas, te ajuda a ter novas ideias. Pra treinar, se liga no comportamento dos clientes numa loja, por exemplo. ',
                      image: _.find(files, file => file.filename === 'Aula24_Inovacao_at04_3.png').fileUrl,
                  }
              }, {

                coordinates: "675,135,666,186,685,220,732,246,813,200,801,125,775,90,710,80",
                shape: 'poly',
                tickPosition: {
                    x: 707,
                    y: 93
                },
                feedback: {
                    title: 'Experimentar',
                    text: 'Explorar o mundo e viver novas experiências são grandes fontes de inspiração. Viaje, faça cursos, experimente algo que você nunca fez! A resposta para o que você procura pode estar aí!',
                    image: _.find(files, file => file.filename === 'Aula24_Inovacao_at04_4.png').fileUrl,
                }
              },{
                coordinates: "834,287,826,339,835,389,892,406,935,389,967,349,950,288,932,255,858,254",
                shape: 'poly',
                tickPosition: {
                    x: 878,
                    y: 257
                },
                feedback: {
                    title: 'Associar',
                    text: 'Conectar ideias que não se relacionam e dar um novo sentido a elas é uma habilidade dos inovadores. Quer treinar? Acesse um assunto na wikipedia e tente relacioná-lo com um problema do trabalho.',
                    image: _.find(files, file => file.filename === 'Aula24_Inovacao_at04_5.png').fileUrl,
                }

              }]

          }

      },{
        name: 'Xá comigo!',
        description: undefined,
        type: 'presentation',
        presentation: {
            title: 'Xá comigo!',
            description: 'Estamos entrando na era da inovação e as empresas buscam cada vez mais pessoas com esse perfil.',
            image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
        },
        contentFormat: 'order',
        content: {
          questions: [{
              title: 'Organizando a bagunça.',
              text: 'Organize todas as etapas, colocandos-as na ordem em que acontecem.',
              feedbacks: [{
                  title: 'Legal!',
                  text: 'Continue trabalhando as habilidades que você mais pratica e comece a desenvolver as que deixou por último na lista. Isso irá diferenciar você dos outros profissionais e aproximá-lo das melhores empresas! ',
                  type: 'positive'
              }],
              options: [{
                  image: _.find(files, file => file.filename === 'Aula24_Inocacao_at01.png').fileUrl,
              }, {
                  image: _.find(files, file => file.filename === 'Aula24_Inocacao_at02.png').fileUrl,
              }, {
                  image: _.find(files, file => file.filename === 'Aula24_Inocacao_at03.png').fileUrl,
              }, {
                  image: _.find(files, file => file.filename === 'Aula24_Inocacao_at04.png').fileUrl,
              }, {
                  image: _.find(files, file => file.filename === 'Aula24_Inocacao_at05.png').fileUrl,
                }]
            }]
        }
      }] // Final do action
    })
  ]
);
