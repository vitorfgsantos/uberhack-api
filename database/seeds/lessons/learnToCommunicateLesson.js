'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Aprenda a se comunicar",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Marketing Pessoal')._id,
            ],
            description: 'Você fala gírias? Ou solta alguns palavrões de vez em quando? Isso é normal quando se está entre amigos. Mas no trabalho, a coisa muda! Para não dar nenhuma mancada, se liga nas dicas desta aula!',
            estimatedTime: '7',
            image: _.find(files, file => file.filename === 'Aula_06.png').fileUrl,
            activities: [{
                name: 'Aprenda a se comunicar',
                description: undefined,
                type: 'presentation',
                presentation: {
                    title: 'Aprenda a se comunicar',
                    description: 'Se comunicar bem é tudo! E o Pyong sabe disso melhor do que ninguém! Quer ver? Dê o play!',
                    image: _.find(files, file => file.filename === 'capa_comunicacao.png').fileUrl
                },
                contentFormat: 'video',
                content: {
                    title: 'Aprenda a se comunicar',
                    text: 'Se comunicar bem é tudo! E o Pyong sabe disso melhor do que ninguém! Quer ver? Dê o play!',
                    video: {
                        fileUrl: 'files/stream?type=videos&filename=' + '2-APRENDA_A_SE_COMUNICAR_online.mp4',
                        type: 'video/mp4'
                    },
                    subtitles: {
                        fileUrl: _.find(files, file => file.filename === 'Aprenda_a_se_comunicar.vtt').fileUrl,
                        label: 'Português'
                    }
                }
            }, {
                name: 'Olha a boca!',
                description: undefined,
                type: 'interaction',
                presentation: {
                    title: 'Olha a boca!',
                    description: 'Todo mundo fala um pouco de palavrão, mas no trabalho é preciso segurar a onda. A seguir, troque os palavrões por palavras que dizem a mesma coisa de forma mais adequada.',
                    image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl // TODO
                },
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        title: 'Olha a boca!',
                        text: 'Eu fico <u>puto</u> quando meu chefe me passa trampo sem prazo.',
                        time: undefined,
                        alternativesType: 'text',
                        feedbacks: [{
                            title: 'Certo!',
                            text: 'Assim é mais adequado e a mensagem foi passada :)',
                            type: 'positive'
                        }, {
                            title: 'Errado!',
                            text: 'Você tirou o palavrão mas a frase mudou o sentido.',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: 'Chateado',
                            letter: 'A'
                        }, {
                            option: 'Mudo',
                            letter: 'B'
                        }, {
                            option: 'Animado',
                            letter: 'C'
                        }],
                        correctAnswer: 'A'
                    }, {
                          title: 'Olha a boca!',
                          text: 'Eu atrasei e cheguei <u>com cara de idiota</u> na reunião.',
                          time: undefined,
                          alternativesType: 'text',
                          feedbacks: [{
                              title: 'Certo!',
                              text: 'Assim é mais adequado e a mensagem foi passada :)',
                              type: 'positive'
                          }, {
                              title: 'Errado!',
                              text: 'Você tirou o palavrão mas a frase mudou o sentido.',
                              type: 'negative'
                          }],
                          alternatives: [{
                              option: 'Animado',
                              letter: 'A'
                          }, {
                              option: 'Tranquilo',
                              letter: 'B'
                          }, {
                              option: 'Sem graça ',
                              letter: 'C'
                          }],
                          correctAnswer: 'C'
                    },{
                        title: 'Olha a boca!',
                        text: 'Chefe, estou <u>feliz pra car@lho</u> com esse aumento de salário',
                        time: undefined,
                        alternativesType: 'text',
                        feedbacks: [{
                            title: 'Certo!',
                            text: 'Assim é mais adequado e a mensagem foi passada :)',
                            type: 'positive'
                        }, {
                            title: 'Errado!',
                            text: 'Você tirou o palavrão mas a frase mudou o sentido.',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: 'Tranquilo',
                            letter: 'A'
                        }, {
                            option: 'Muito feliz',
                            letter: 'B'
                        }, {
                            option: 'Maluco',
                            letter: 'C'
                        }],
                        correctAnswer: 'B'
                    }]
                }
            }, {
                name: 'Se liga, mano',
                description: '',
                type: 'interaction',
                presentation: {
                    title: 'Se liga, mano',
                    description: 'Vamos mostrar umas gírias e você classifica se elas são ou não aceitáveis no trampo. Preparado? Vamos lá!',
                    image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
                },
                contentFormat: 'simpleRelate',
                content: {
                    questions: [{
                        title: 'Se liga, mano',
                        text: 'Vamos mostrar umas gírias e você classifica se elas são ou não aceitáveis no trampo. Preparado? Vamos lá!',

                        // feedbacks: [{
                        //     title: 'Muito bem!',
                        //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                        //     type: 'positive'
                        // }, {
                        //     title: 'Ooops!',
                        //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                        //     type: 'negative'
                        // }],
                        draggableText: 'Fiquei em maus lençóis.',
                        alternatives: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at2a.png').fileUrl
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at2b.png').fileUrl
                        }],
                        correctAnswer: 1,
                    }, {
                        title: 'Se liga, mano',
                        text: 'Vamos mostrar umas gírias e você classifica se elas são ou não aceitáveis no trampo. Preparado? Vamos lá!',

                        // feedbacks: [{
                        //     title: 'Muito bem!',
                        //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                        //     type: 'positive'
                        // }, {
                        //     title: 'Ooops!',
                        //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                        //     type: 'negative'
                        // }],
                        draggableText: 'Chega desse chove e não molha!',
                        alternatives: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at2a.png').fileUrl
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at2b.png').fileUrl
                        }],
                        correctAnswer: 1,
                    }, {
                        title: 'Se liga, mano',
                        text: 'Vamos mostrar umas gírias e você classifica se elas são ou não aceitáveis no trampo. Preparado? Vamos lá!',

                        // feedbacks: [{
                        //     title: 'Muito bem!',
                        //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                        //     type: 'positive'
                        // }, {
                        //     title: 'Ooops!',
                        //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                        //     type: 'negative'
                        // }],
                        draggableText: 'Às vezes eu sou muito cabeça-dura.',
                        alternatives: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at2a.png').fileUrl
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at2b.png').fileUrl
                        }],
                        correctAnswer: 1,
                    }, {
                        title: 'Se liga, mano',
                        text: 'Vamos mostrar umas gírias e você classifica se elas são ou não aceitáveis no trampo. Preparado? Vamos lá!',

                        // feedbacks: [{
                        //     title: 'Muito bem!',
                        //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                        //     type: 'positive'
                        // }, {
                        //     title: 'Ooops!',
                        //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                        //     type: 'negative'
                        // }],
                        draggableText: 'O Anderson é sinistro.',
                        alternatives: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at2a.png').fileUrl
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at2b.png').fileUrl
                        }],
                        correctAnswer: 2,
                    }, {
                        title: 'Se liga, mano',
                        text: 'Vamos mostrar umas gírias e você classifica se elas são ou não aceitáveis no trampo. Preparado? Vamos lá!',

                        // feedbacks: [{
                        //     title: 'Muito bem!',
                        //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                        //     type: 'positive'
                        // }, {
                        //     title: 'Ooops!',
                        //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                        //     type: 'negative'
                        // }],
                        draggableText: 'Meu chefe é responsa.',
                        alternatives: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at2a.png').fileUrl
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at2b.png').fileUrl
                        }],
                        correctAnswer: 2,
                    }, {
                        title: 'Se liga, mano',
                        text: 'Vamos mostrar umas gírias e você classifica se elas são ou não aceitáveis no trampo. Preparado? Vamos lá!',

                        // feedbacks: [{
                        //     title: 'Muito bem!',
                        //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                        //     type: 'positive'
                        // }, {
                        //     title: 'Ooops!',
                        //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                        //     type: 'negative'
                        // }],
                        draggableText: 'Cola aí na festa!',
                        alternatives: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at2a.png').fileUrl
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at2b.png').fileUrl
                        }],
                        correctAnswer: 2,
                    }]
                }
            }, {
                name: 'Fala ai...',
                description: undefined,
                type: 'interaction',
                presentation: {
                    title: 'Fala ai...',
                    description: 'Agora, vamos testar algumas outras formas de se comunicar no trabalho. Vamos ver se você se sai bem. Boa sorte!',
                    image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl // TODO
                },
                contentFormat: 'add',
                content: {
                    questions: [{
                        title: 'Apelidos',
                        text: 'Apelido é legal, mas precisa ter noção e intimidade. Adicione a fala mais adequada para a cena ilustrada.',
                        background: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at3.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        feedbacks: [{
                            title: 'Muito bem!',
                            text: 'Chamar quem você nem conhece de gata, belezinha ou pelo apelido, não pega bem. O legal é chamar pelo nome e com uma saudação respeitosa.',
                            type: 'positive'
                        },
                        {
                            title: 'Quase lá!',
                            text: 'Chamar quem você nem conhece de gata, belezinha ou pelo apelido, não pega bem. O legal é chamar pelo nome e com uma saudação respeitosa.',
                            type: 'intermediate'
                        },
                         {
                            title: 'Ooops!',
                            text: 'Chamar quem você nem conhece de gata, belezinha ou pelo apelido, não pega bem. O legal é chamar pelo nome e com uma saudação respeitosa.',
                            type: 'negative'
                        }],
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at3d.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at3h.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 806,
                                y: 141
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at3c.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at3g.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 806,
                                y: 141
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at3b.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at3f.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 806,
                                y: 141
                            }
                        }, {
                            number: 4,
                            category: 'A',
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at3a.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at3e.png').fileUrl,
                            tickPosition: {
                                x: 806,
                                y: 141
                            }
                        }],
                        correctLayers: [3]

                    }, {
                        title: 'Cacoete (esteriótipo)',
                        text: 'Cuidado com o uso dos cacoetes! Adicione a frase mais adequada para a ilustração.',
                        background: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at4.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        feedbacks: [{
                            title: 'Muito bem!',
                            text: ' Evite começar a frase com termos desnecessários, como “então” ou “no caso”. Gírias pobres como “tipo assim” também pegam mal. O legal é ter simplicidade e clareza na comunicação.',
                            type: 'positive'
                        },
                        {
                            title: 'Quase lá!',
                            text: ' Evite começar a frase com termos desnecessários, como “então” ou “no caso”. Gírias pobres como “tipo assim” também pegam mal. O legal é ter simplicidade e clareza na comunicação.',
                            type: 'intermediate'
                        },
                         {
                            title: 'Ooops!',
                            text: ' Evite começar a frase com termos desnecessários, como “então” ou “no caso”. Gírias pobres como “tipo assim” também pegam mal. O legal é ter simplicidade e clareza na comunicação.',
                            type: 'negative'
                        }],
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at4a.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at4g.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 884,
                                y: 117
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at4d.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at4f.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 884,
                                y: 117
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at4c.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at4e.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 884,
                                y: 117
                            }
                        }, {
                            number: 4,
                            category: 'A',
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at4b.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at4h.png').fileUrl,
                            tickPosition: {
                                x: 806,
                                y: 141
                            }
                        }],
                        correctLayers: [3]

                    }, {
                        title: 'Gerundismo',
                        text: 'Adicione a fala mais adequada para a ilustração, evitando expressões que dão a entender que você nunca vai terminar o que está fazendo.',
                        background: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at5.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        feedbacks: [{
                            title: 'Muito bem!',
                            text: ' Evite o gerúndio. Esse tipo de expressão é errado para ações que você está fazendo no presente. “Tentarei estar” é ainda pior! Parece que você não vai transferir o cliente nunca.',
                            type: 'positive'
                        },
                        {
                            title: 'Quase lá!',
                            text: ' Evite o gerúndio. Esse tipo de expressão é errado para ações que você está fazendo no presente. “Tentarei estar” é ainda pior! Parece que você não vai transferir o cliente nunca.',
                            type: 'intermediate'
                        },
                        {
                            title: 'Ooops!',
                            text: ' Evite o gerúndio. Esse tipo de expressão é errado para ações que você está fazendo no presente. “Tentarei estar” é ainda pior! Parece que você não vai transferir o cliente nunca.',
                            type: 'negative'
                        }],
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at5b.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at5e.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 176,
                                y: 285
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at5c.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at5f.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 176,
                                y: 285
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at5d.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at5g.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 176,
                                y: 285
                            }
                        }, {
                            number: 4,
                            category: 'A',
                            image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at5a.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at5h.png').fileUrl,
                            tickPosition: {
                                x: 176,
                                y: 285
                            }
                        }],
                        correctLayers: [2]
                  }]
                }
            },{
              name: 'O bom português',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'O bom português',
                  description: 'Vimos várias dicas sobre boas formas de se comunicar, mas não adianta nada quando muitos erros de português estão no seu caminho. Então vamos testar e treinar!',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'simpleQuiz',
              content: { questions: [{
                title: 'O bom português',
                text: 'Leia as frases e diga se estão certas ou erradas.',
                image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at6.png').fileUrl,
                alternativesType: 'boolean',
                feedbacks: [{
                    title: 'Muito bem!',
                    text: 'Ufa, que bom que você sabe essa. Usar menas não dá!',
                    type: 'positive'
                }, {
                    title: 'Ooops!',
                    text: '<u>Menas</u> não existe. Mesmo referindo-se a palavras femininas, use sempre <u>menos.</u>',
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
              title: 'Quiz certo e errado',
              text: 'Leia as frases e diga se estão certas ou erradas.',
              image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at7.png').fileUrl,
              alternativesType: 'boolean',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Mandou bem! <u>Anexo</u> deve concordar com o substantivo, sendo  o certo "Seguem anexos..."',
                  type: 'positive'
              }, {
                  title: 'Ooops!',
                  text: ' Errado! <u>Anexo</u> é adjetivo e deve concordar em gênero e número com o substantivo a que se refere. O certo é: "Seguem anexos..."',
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
              title: 'Quiz certo e errado',
              text: 'Leia as frases e diga se estão certas ou erradas.',
              image: _.find(files, file => file.filename === 'Aula06_Aprenda_a_se_comunicar_at8.png').fileUrl,
              alternativesType: 'boolean',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Isso aí! Pra indicar tempo passado é com "H" do verbo haver.',
                  type: 'positive'
              }, {
                  title: 'Ooops!',
                  text: ' Errado! Para indicar tempo passado, usa-se o verbo haver. O certo é com H: "há 15 anos".',
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

            }]
              }

              //ultimo fecha
            }]
        })
    ]
);
