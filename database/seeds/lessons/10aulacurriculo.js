'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Currículo",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            description: 'Se você está procurando uma oportunidade de trabalho, tem que ter um currículo bem montado e sempre atualizado. Nesta aula você vai aprender a estruturar um currículo passo a passo e saber tudo o que ele precisar ter para fazer bonito na hora do processo seletivo. É só seguir em frente!',
            estimatedTime: '5',
            image: _.find(files, file => file.filename === 'Aula_10.png').fileUrl,
            activities: [{
                name: 'Seu currículo abre portas!',
                description: undefined,
                type: 'presentation',
                contentFormat: 'slides',
                content: {
                    slides: [{
                        image: _.find(files, file => file.filename === 'Aula10_CV_at1.png').fileUrl,
                        title: 'Seu currículo abre portas!',
                        text: 'O currículo é o primeiro contato que a empresa tem com você e é através dele que o entrevistador decide se vai te chamar para o processo seletivo. Existem vários modelos de currículo: para quem está começando, para quem já é mais experiente... Então, fique ligado nesta aula e saiba mais sobre essa ferramenta que abre portas pra você!'
                    }]
                }

            },{
              name: 'Rolê no currículo',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Rolê no currículo',
                  description: 'Na hora de montar um currículo, sempre pinta a dúvida: por onde começar? O que escrever? Como fazer? Para tirar suas dúvidas, vamos dar um rolê num modelo de currículo?',
                  image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
              },
              contentFormat: 'map',
              content: {
                  title: 'Rolê no currículo',
                  text: 'O tipo mais conhecido de currículo é pra quem já tem experiência profissional. Se você já trampou em pelo menos um lugar, o modelo abaixo é bom para seguir. Clique sobre os itens para entender um pouco mais.',
                  background: _.find(files, file => file.filename === 'Aula10_CV_at2.png').fileUrl,
                  baseResolution:{
                      width: 1080,
                      height: 1020
                  },
                  mapping: [{
                      coordinates: '591,88,614,244,864,221,860,61',
                      shape: 'poly',
                      tickPosition: {
                          x: 723,
                          y: 43
                      },
                      feedback: {
                          title: 'Dados pessoais',
                          text: 'A primeira coisa que você deve colocar no currículo são seus dados pessoais. Nome completo, endereço, telefone. Essas informações são importantes para o entrevistador conhecer você e até para entrar em contato, caso seu currículo seja escolhido!',
                          image: _.find(files, file => file.filename === 'Aula10_CV_at3.png').fileUrl
                      }
                  },{
                      coordinates: "457,373,349,384,355,490,634,465,606,356",
                      shape: 'poly',
                      tickPosition: {
                          x: 397,
                          y: 363
                      },
                      feedback: {
                          title: 'Objetivos profissionais',
                          text: 'Você precisa dizer a área e o cargo que busca. Tudo o que colocar aqui tem que ter a ver com sua experiência ou sua formação. Colocar como objetivo um cargo de gerência se você nunca esteve na liderança não rola!',
                          image: _.find(files, file => file.filename === 'Aula10_CV_at4.png').fileUrl,
                      }
                  }, {
                      coordinates: "360,565,362,695,657,688,643,532",
                      shape: 'poly',
                      tickPosition: {
                          x: 430,
                          y: 542
                      },
                      feedback: {
                          title: 'Formação e cursos',
                          text: 'Daí, é hora de colocar sua formação e os cursos que fez, inclusive aqueles que não terminou ou que ainda está cursando. Importante dizer as instituições de ensino e o período em que cursou cada uma.',
                          image: _.find(files, file => file.filename === 'Aula10_CV_at5.png').fileUrl,
                      }
                  },{
                    coordinates: "365,787,365,889,682,881,672,758",
                    shape: 'poly',
                    tickPosition: {
                        x: 439,
                        y: 761
                    },
                    feedback: {
                        title: 'Experiência',
                        text: 'Liste as empresas que você trabalhou em ordem decrescente (da última até a primeira) e, em cada uma, coloque o cargo, o período de trabalho e as atividades que desenvolveu. Pode listar só as 3 últimas, caso tenha mais.',
                        image: _.find(files, file => file.filename === 'Aula10_CV_at6.png').fileUrl,
                    }

                  }]
                }
            },{
              name: 'Tá tudo relacionado',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Entra ou não?',
                  description: 'Se você não tem experiência, na boa... Você pode fazer um currículo atrativo sem colocar os lugares que já trabalhou. Mas fique ligado para não encher o currículo com informações desnecessárias! ',
                  image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
              },
              contentFormat: 'classify',
              content: {
                title: 'Entra ou não?',
                text: 'Clique e arraste as informações para a direita ou esquerda, classificando as que têm que entrar no currículo e as que não precisam. Vamos lá?',
                questions:[{
                  // feedbacks: [{
                  //     title: 'Muito bem!',
                  //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                  //     type: 'positive'
                  // }, {
                  //     title: 'Ooops!',
                  //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                  //     type: 'negative'
                  // }],
                  image: _.find(files, file => file.filename === 'Aula10_Curriculo_at03_01.png').fileUrl,
                  alternativesType: 'text',
                  alternatives: {
                      left: {
                          option: 'Não precisa'
                      },
                      right: {
                          option: 'Tem que ter'
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
                  image: _.find(files, file => file.filename === 'Aula10_Curriculo_at03_02.png').fileUrl,
                  alternativesType: 'text',
                  alternatives: {
                      left: {
                          option: 'Não precisa'
                      },
                      right: {
                          option: 'Tem que ter'
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
                  image: _.find(files, file => file.filename === 'Aula10_Curriculo_at03_03.png').fileUrl,
                  alternativesType: 'text',
                  alternatives: {
                      left: {
                          option: 'Não precisa'
                      },
                      right: {
                          option: 'Tem que ter'
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
                  image: _.find(files, file => file.filename === 'Aula10_Curriculo_at03_04.png').fileUrl,
                  alternativesType: 'text',
                  alternatives: {
                      left: {
                          option: 'Não precisa'
                      },
                      right: {
                          option: 'Tem que ter'
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
                  image: _.find(files, file => file.filename === 'Aula10_Curriculo_at03_05.png').fileUrl,
                  alternativesType: 'text',
                  alternatives: {
                      left: {
                          option: 'Não precisa'
                      },
                      right: {
                          option: 'Tem que ter'
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
                  image: _.find(files, file => file.filename === 'Aula10_Curriculo_at03_06.png').fileUrl,
                  alternativesType: 'text',
                  alternatives: {
                      left: {
                          option: 'Não precisa'
                      },
                      right: {
                          option: 'Tem que ter'
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
                  image: _.find(files, file => file.filename === 'Aula10_Curriculo_at03_07.png').fileUrl,
                  alternativesType: 'text',
                  alternatives: {
                      left: {
                          option: 'Não precisa'
                      },
                      right: {
                          option: 'Tem que ter'
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
                  image: _.find(files, file => file.filename === 'Aula10_Curriculo_at03_08.png').fileUrl,
                  alternativesType: 'text',
                  alternatives: {
                      left: {
                          option: 'Não precisa'
                      },
                      right: {
                          option: 'Tem que ter'
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
                  image: _.find(files, file => file.filename === 'Aula10_Curriculo_at03_09.png').fileUrl,
                  alternativesType: 'text',
                  alternatives: {
                      left: {
                          option: 'Não precisa'
                      },
                      right: {
                          option: 'Tem que ter'
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
                  image: _.find(files, file => file.filename === 'Aula10_Curriculo_at03_10.png').fileUrl,
                  alternativesType: 'text',
                  alternatives: {
                      left: {
                          option: 'Não precisa'
                      },
                      right: {
                          option: 'Tem que ter'
                      }
                  },
                  correctAnswer: 'right'

                }]
              }
            },{
              name: 'Pra fechar bonito',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Pra fechar bonito',
                  description: 'Quanto mais detalhes você contar no currículo sobre as experiências profissionais que teve, melhor o entrevistador poderá conhecer suas habilidades. Então, se liga nas dicas espertas que vamos te dar e faça do currículo o seu cartão de visitas!',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'slides',
              content: {
                slides: [{
                    image: _.find(files, file => file.filename === 'Aula10_CV_at7.png').fileUrl,
                    title: 'O formato ideal',
                    text: 'O jeito que você formata o currículo é super importante. Um currículo organizado e fácil de ler conta pontos! Se liga: 1 página é o ideal. Procure usar  frases curtas e objetivas e deixe os parágrafos bem espaçados. Prefira uma fonte simples, como a Arial ou a Times New Roman, e não abuse de cores e formatos muito diferentes.'
                }, {
                    image: _.find(files, file => file.filename === 'Aula10_CV_at8.png').fileUrl,
                    title: 'De olho no conteúdo',
                    text: '<p>Na hora de colocar o conteúdo, fique atento!</p>Coloque cada informação apenas uma vez e de forma clara e organizada. Não deixe de citar os trabalhos informais ou voluntários, mas seja sempre sincero.  Mentiras ou meias verdades pegam muito mal! O importante é apresentar o que você realmente fez de melhor e as atividades em que mais se destacou.'
                }, {
                    image: _.find(files, file => file.filename === 'Aula10_CV_at9.png').fileUrl,
                    title: 'Todo cuidado é pouco',
                    text: '<p>Evite frases feitas e não fique se elogiando. Destaque informações que tenham a ver com a vaga. Fotos são desnecessárias mas, se quiser colocar, não escolha a do churras do amigo e nem a do feriadão na praia! Ah, importante: erros de português são mancada! Peça sempre para alguém revisar.</p>Quando terminar a aula, aproveite para turbinar o seu aplicativo acessando o campo “Meu Perfil”.'
                }]

              }
            },{
              name: 'Pra fechar bonito',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Pra fechar bonito',
                  description: 'Na hora de montar um currículo, quanto mais detalhes você contar sobre as experiências profissionais que teve, melhor o entrevistador poderá conhecer suas habilidades. Então, se liga nas dicas espertas que vamos te dar e faça do currículo o seu cartão de visitas! ',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'multipleQuiz',
              content: {
                questions:[{
                  title: 'Agora é com você!',
                  text: 'Primeiro, você vai definir quantas páginas terá seu currículo. Mostre pra gente a opção mais adequada.',
                  alternativesType: 'text',
                  feedbacks: [{
                      title: 'Muito bem!',
                      text: ' É isso aí! Tente colocar todas as informações em 1 página.',
                      type: 'positive'
                  }, {
                      title: 'Ooops!',
                      text: 'Errou! O ideal é o currículo ter apenas 1 página.',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: '1 página',
                      letter: 'A'
                  }, {
                      option: '2 páginas',
                      letter: 'B'
                  }, {
                      option: '4 páginas',
                      letter: 'C'
                  }, {
                      option: '10 páginas',
                      letter: 'D'
                  }],
                  correctAnswer: 'A'

                },{
                  title: 'Agora é com você.',
                  text: 'Chegou a hora de montar o seu currículo. Indique a opção correta em cada etapa da elaboração.',
                  alternativesType: 'image',
                  feedbacks: [{
                      title: 'Muito bem!',
                      text: 'Maravilha! Um tipo de letra simples e fácil de ler é a melhor escolha.',
                      type: 'positive'
                  }, {
                      title: 'Ooops!',
                      text: 'Foi mal! Um tipo de letra simples e fácil de ler é a melhor escolha.',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: _.find(files, file => file.filename === 'Aula10_Curriculo_at05_q2_01.png').fileUrl,
                      letter: 'A'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula10_Curriculo_at05_q2_02.png').fileUrl,
                      letter: 'B'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula10_Curriculo_at05_q2_03.png').fileUrl,
                      letter: 'C'
                  }, {
                      option: _.find(files, file => file.filename === 'Aula10_Curriculo_at05_q2_04.png').fileUrl,
                      letter: 'D'
                  }],
                  correctAnswer: 'A'
                },{
                  title: 'Agora é com você!',
                  text: 'Chegou a hora de montar o seu currículo. Indique a opção correta em cada etapa da elaboração.',
                  alternativesType: 'text',
                  feedbacks: [{
                      title: 'Muito bem!',
                      text: 'Mandou bem! Esses são os dados pessoais que devem constar em um currículo.',
                      type: 'positive'
                  }, {
                      title: 'Ooops!',
                      text: ' Mandou mal! Os dados pessoais que devem ser colocados no currículo são: nome completo, idade, endereço, telefone e e-mail.',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: 'Coloca a hora que nasceu, onde estudou na pré-escola e o time que torce.',
                      letter: 'A'
                  }, {
                      option: 'Coloca seu nome completo, idade, endereço e dados para contato, como telefone e e-mail.',
                      letter: 'B'
                  }, {
                      option: 'Coloca seu nome e o seu Facebook.',
                      letter: 'C'
                  }],
                  correctAnswer: 'B'
                },{
                  title: 'Agora é com você!',
                  text: '<p>Você vai colocar seus objetivos profissionais. Escolha a opção que completa a frase de forma correta.</p>Atuar na área administrativa ______________',
                  alternativesType: 'text',
                  feedbacks: [{
                      title: 'Muito bem!',
                      text: 'Boa! Você colocou seus objetivos de forma clara, não usou frases feitas e nem se elogiou.',
                      type: 'positive'
                  }, {
                      title: 'Ooops!',
                      text: 'Nada disso! O ideal é colocar seus objetivos de forma clara, sem autoelogios ou frases feitas.',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: 'Porque sou muito eficiente nisso.',
                      letter: 'A'
                  }, {
                      option: 'Com ênfase em vendas.',
                      letter: 'B'
                  }, {
                      option: 'Porque busco sempre novos desafios.',
                      letter: 'C'
                  }],
                  correctAnswer: 'B'
                },{
                  title: 'Agora é com você!',
                  text: '“Depois, é a vez de colocar sua formação. Se você começou uma faculdade e não terminou, qual a melhor opção?',
                  alternativesType: 'text',
                  feedbacks: [{
                      title: 'Muito bem!',
                      text: 'Bacana! Cursos e formações devem ser sempre mencionados, mesmo que você não tenha terminado.',
                      type: 'positive'
                  }, {
                      title: 'Ooops!',
                      text: 'Hummm… mentir ou simplesmente não mencionar um curso porque não terminou, é mancada!',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: 'Diz que terminou a faculdade, mesmo sem ter se formado.',
                      letter: 'A'
                  }, {
                      option: 'Coloca o nome da faculdade, o período que cursou e a informação “não concluída”.',
                      letter: 'B'
                  }, {
                      option: 'Nem coloca a faculdade, já que não terminou mesmo.',
                      letter: 'C'
                  }],
                  correctAnswer: 'B'
                },{
                  title: 'Agora é com você!',
                  text: 'Se você nunca trabalhou, que informações colocaria a mais no currículo?',
                  alternativesType: 'text',
                  feedbacks: [{
                      title: 'Muito bem!',
                      text: 'Certíssimo! Toda experiência, mesmo que não seja um trabalho formal, é válida.',
                      type: 'positive'
                  }, {
                      title: 'Ooops!',
                      text: ' Tá errado…  Toda experiência, mesmo que não seja um trabalho formal, é válida.',
                      type: 'negative'
                  }],
                  alternatives: [{
                      option: 'Nenhuma. Só trabalho formal conta como experiência.',
                      letter: 'A'
                  }, {
                      option: 'Um cargo que você inventou, numa empresa que não existe.',
                      letter: 'B'
                  }, {
                      option: 'Um trabalho voluntário que fez ou um trampo temporário.',
                      letter: 'C'
                  }],
                  correctAnswer: 'C'

                }]//final do questions
              }
            }]//final do action
    })
  ]
);
