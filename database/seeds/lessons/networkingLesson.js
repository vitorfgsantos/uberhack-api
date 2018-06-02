'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Networking",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Busca pelo emprego')._id,
            ],
            description: 'Sabia que seus amigos, familiares e conhecidos podem te abrir muitas portas na hora de procurar uma oportunidade de emprego? Isso se chama Rede de Relacionamento e nesta aula você vai aprender que usá-la da forma correta é uma ótima maneira de te aproximar do trampo dos seus sonhos! ',
            estimatedTime: '7',
            image: _.find(files, file => file.filename === 'Aula_11.png').fileUrl,
            activities: [{
                name: 'Oportunidade tá na rede',
                description: undefined,
                type: 'presentation',
                presentation: {
                    title: 'Oportunidade tá na rede',
                    description: 'Antes de tudo, que tal ver como a Bruna usa a rede de relacionamentos dela, hein? É só dar o play!',
                    image: _.find(files, file => file.filename === 'capa_networking.png').fileUrl
                },
                contentFormat: 'video',
                content: {
                    title: 'Oportunidade tá na rede',
                    text: 'Antes de tudo, que tal ver como a Bruna usa a rede de relacionamentos dela, hein? É só dar o play!',
                    video: {
                        fileUrl: 'files/stream?type=videos&filename=' + '2-NETWORKING_online.mp4',
                        type: 'video/mp4'
                    },
                    subtitles: {
                        fileUrl: _.find(files, file => file.filename === 'Networking.vtt').fileUrl,
                        label: 'Português'
                    }
                }
            }, {
              name: 'Quem indica?',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Quem indica?',
                  description: 'Um bom QI (Quociente de Inteligência) faz toda diferença pra arrumar um bom emprego. Mas popularmente, tem que diga que pra arrumar um bom emprego tem que ter outro tipo de QI, o "Quem Indica". Se liga nas dicas a seguir!',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
                contentFormat: 'map',
                content: {
                    title: 'Quem indica?',
                    text: 'Vamos mostrar como é possível bombar suas chances de emprego acionando as pessoas que você conhece. Clique nos contatos do Beto e descubra como isso funciona.',
                    type: 'presentation',
                    background: _.find(files, file => file.filename === 'Aula11_Networking_at1.png').fileUrl,
                    baseResolution: {
                        width: 1080,
                        height: 1020
                    },
                    mapping: [{
                        coordinates: '134,391,130,437,144,456,117,474,108,537,109,575,112,641,109,693,135,792,148,839,130,896,137,905,121,920,171,937,222,948,237,928,243,847,228,706,269,624,258,494,203,429,160,377',
                        shape: 'poly',
                        tickPosition: {
                            x: 55,
                            y: 432
                        },
                        feedback: {
                            title: '',
                            text: 'O Walter foi professor de matemática do Beto. Hoje, ele é diretor financeiro de uma grande empresa. Uma boa hora pra enviar um currículo pra ele. Mesmo que não role um trampo, ele pode indicar o Beto para alguns de seus contatos.',
                            image: _.find(files, file => file.filename === 'Aula11_Networking_at2.png').fileUrl
                        }
                    }, {
                        coordinates: "878,362,858,434,828,488,817,552,816,617,845,676,877,807,826,842,825,912,841,909,885,843,899,931,922,933,953,752,958,680,975,669,995,608,973,474,933,390,916,362",
                        shape: 'poly',
                        tickPosition: {
                            x: 1005,
                            y: 390
                        },
                        feedback: {
                            title: '',
                            text: 'Camila e Beto são amigos de infância. Eles não se falam há algum tempo, mas recentemente a Camila assumiu a gerência de uma empresa que o Beto adoraria trabalhar. Hora de botar o "QI" pra funcionar e o assunto em dia com a amiga-irmã!',
                            image: _.find(files, file => file.filename === 'Aula11_Networking_at5.png').fileUrl,
                        }
                    }, {
                        coordinates: "725,66,719,121,679,162,687,333,706,434,705,533,778,540,821,364,797,135,763,60",
                        shape: 'poly',
                        tickPosition: {
                            x: 802,
                            y: 87
                        },
                        feedback: {
                            title: '',
                            text: 'Lúcia é tia do Beto. Ela já ralou muito na vida, mas hoje, é uma empresária bem sucedida. Lúcia adora gente esforçada como o Beto e, com certeza, vai amar dar uma força pro sobrinho. Hora do Beto bater um papo com a tia!',
                            image: _.find(files, file => file.filename === 'Aula11_Networking_at4.png').fileUrl,
                        }
                    }, {
                        coordinates: "306,79,283,200,266,328,298,363,316,467,302,519,316,566,376,565,426,548,398,411,415,273,396,161,381,65",
                        shape: 'poly',
                        tickPosition: {
                            x: 440,
                            y: 48
                        },
                        feedback: {
                            title: '',
                            text: 'André é um cara figura que o Beto conheceu numa festa e adicionou no Facebook. O Beto já viu que ele é um cara articulado e cheio de amigos. Não custa nada mandar uma mensagem pro André e ver se ele conhece alguém pra direcionar o seu currículo.',
                            image: _.find(files, file => file.filename === 'Aula11_Networking_at3.png').fileUrl,
                        }
                    }]

                }
            }, {
                name: 'Aprenda com sua rede',
                description: undefined,
                type: 'presentation',
                presentation: {
                    title: 'Aprenda com sua rede',
                    description: 'Como mostramos, conversar com seus contatos sobre sua área de interesse pode abrir muitas portas! Mostre pra gente como você utiliza sua rede de relacionamento em cada situação: ',
                    image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
                },
                contentFormat: 'scale',
                content: {
                    questions: [{
                        title: 'Aprenda com sua rede',
                        text: 'Para saber se uma empresa tem a ver com você.',
                        image: _.find(files, file => file.filename === 'Aula11_Atividade03_1.png').fileUrl,
                        values: {
                            right: {
                                value: 'rigth',
                                feedback: {
                                    title: 'Muito bem!',
                                    text: 'Você está usando bem sua rede!',
                                    type: 'positive'
                                }
                            },
                            left: {
                                value: 'left',
                                feedback: {
                                    title: 'Fique de olho!',
                                    text: 'Sua rede de relacionamento pode te ajudar mais nisso!',
                                    type: 'positive'
                                }
                            }
                        },
                    }, {
                        title: 'Aprenda com sua rede',
                        text: 'Para saber como é trabalhar em uma área que você nunca trampou.',
                        image: _.find(files, file => file.filename === 'Aula11_Atividade03_1.png').fileUrl,
                        values: {
                            right: {
                                value: 'rigth',
                                feedback: {
                                    title: 'Muito bem!',
                                    text: ' Legal que você aproveita sua rede para descobrir novas possibilidades.',
                                    type: 'positive'
                                }
                            },
                            left: {
                                value: 'left',
                                feedback: {
                                    title: 'Fique de olho!',
                                    text: 'Aproveite  mais sua rede para descobrir novas possibilidades.',
                                    type: 'positive'
                                }
                            }
                        },
                    }, {
                        title: 'Aprenda com sua rede',
                        text: 'Para conhecer mais uma empresa que você está de olho.',
                        image: _.find(files, file => file.filename === 'Aula11_Atividade03_1.png').fileUrl,
                        values: {
                            right: {
                                value: 'rigth',
                                feedback: {
                                    title: 'Muito bem!',
                                    text: 'Nada melhor do que conhecer uma empresa pelas pessoas que trabalham nela. ',
                                    type: 'positive'
                                }
                            },
                            left: {
                                value: 'left',
                                feedback: {
                                    title: 'Fique de olho!',
                                    text: 'Nada melhor do que conhecer uma empresa pelas pessoas que trabalham nela. Utilize mais sua rede para isso!',
                                    type: 'positive'
                                }
                            }
                        },
                    }, {
                        title: 'Aprenda com sua rede',
                        text: 'Para mandar seu currículo e manter as pessoas atualizadas sobre o que você anda fazendo.',
                        image: _.find(files, file => file.filename === 'Aula11_Atividade03_1.png').fileUrl,
                        values: {
                            right: {
                                value: 'rigth',
                                feedback: {
                                    title: 'Muito bem!',
                                    text: 'Use mais sua rede para mostrar o que você tem de melhor. Aproveite e mantenha seu currículo sempre atualizado.',
                                    type: 'positive'
                                }
                            },
                            left: {
                                value: 'left',
                                feedback: {
                                    title: 'Fique de olho!',
                                    text: 'Isso! Use sua rede para mostrar o que você tem de melhor! Aproveite e mantenha seu currículo sempre atualizado.',
                                    type: 'positive'
                                }
                            }
                        },
                    }]
                }
            }, {
                name: 'Caiu na rede, é trabalho!',
                description: undefined,
                type: 'interaction',
                presentation: {
                    title: 'Caiu na rede, é trabalho!',
                    description: 'Será que você está utilizando bem sua rede de relacionamento? Nas frases a seguir, diga o que você concorda e discorda e vamos descobrir.”',
                    image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
                },
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        title: 'Caiu na rede, é trabalho!',
                        text: 'Minha rede de relacionamento pode ser um show de oportunidades. Por isso, tenho sempre uma lista de pessoas com telefone e e-mail. Na hora que eu precisar, tá na mão!',
                        alternativesType: 'image',
                        feedbacks: [{
                            title: 'Muito bem!',
                            text: 'É isso aí! Você está usando super bem sua rede de relacionamentos.',
                            type: 'positive'
                        }, {
                            title: 'Ooops!',
                            text: 'Nada disso. Você poderia usar melhor sua rede de relacionamentos.',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'Aula11_Networking_at6a.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'Aula11_Networking_at6b.png').fileUrl,
                            letter: 'B'
                        }],
                        correctAnswer: 'A'
                    }, {
                        title: 'Caiu na rede, é trabalho!',
                        text: 'Não uso as redes sociais, tipo o Facebook, para procurar oportunidades de trabalho. ',
                        alternativesType: 'image',
                        feedbacks: [{
                            title: 'Muito bem!',
                            text: ' Boa! As redes sociais são uma ótima maneira de encontrar oportunidades.',
                            type: 'positive'
                        }, {
                            title: 'Ooops!',
                            text: 'Foi mal… As redes sociais são uma ótima maneira de encontrar oportunidades.',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'Aula11_Networking_at6a.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'Aula11_Networking_at6b.png').fileUrl,
                            letter: 'B'
                        }],
                        correctAnswer: 'B'

                    }, {
                        title: 'Caiu na rede, é trabalho!',
                        text: 'Apesar das redes sociais, tento sempre me encontrar com todos pessoalmente. Bater um papo “olho no olho”, faz toda a diferença.',
                        alternativesType: 'image',
                        feedbacks: [{
                            title: 'Muito bem!',
                            text: 'Legal! Manter o contato pessoal com seus conhecidos ajuda muito!',
                            type: 'positive'
                        }, {
                            title: 'Ooops!',
                            text: 'Ops… pense melhor. Manter o contato pessoal com seus conhecidos pode ajudar muito!',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'Aula11_Networking_at6a.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'Aula11_Networking_at6b.png').fileUrl,
                            letter: 'B'
                        }],
                        correctAnswer: 'A'


                    }, {
                        title: 'Caiu na rede, é trabalho!',
                        text: 'Apesar das redes sociais, tento sempre me encontrar com todos pessoalmente. Bater um papo “olho no olho” faz toda a diferença.',
                        alternativesType: 'image',
                        feedbacks: [{
                            title: 'Muito bem!',
                            text: 'Mandou bem! Falar o que você faz e o que procura é sempre o melhor caminho.',
                            type: 'positive'
                        }, {
                            title: 'Ooops!',
                            text: 'Mandou mal! Falar o que você faz e o que procura é sempre o melhor caminho.',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'Aula11_Networking_at6a.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'Aula11_Networking_at6b.png').fileUrl,
                            letter: 'B'
                        }],
                        correctAnswer: 'A'

                    }, {
                        title: 'Caiu na rede, é trabalho!',
                        text: 'Quem não tem Facebook nunca consegue saber das oportunidades que aparecem nas redes sociais.',
                        alternativesType: 'image',
                        feedbacks: [{
                            title: 'Muito bem!',
                            text: 'Isso mesmo! Quem não tem Facebook, pode pedir ajuda pra quem tem!',
                            type: 'positive'
                        }, {
                            title: 'Ooops!',
                            text: 'Tá errado! Quem não tem Facebook, pode pedir ajuda pra quem tem!',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'Aula11_Networking_at6a.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'Aula11_Networking_at6b.png').fileUrl,
                            letter: 'B'
                        }],
                        correctAnswer: 'B'


                    }]
                }
            }, {
                name: 'Emprego não se pede. Se conquista.',
                description: undefined,
                type: 'interaction',
                presentation: {
                    title: 'Emprego não se pede. Se conquista.',
                    description: 'Legal! Agora que você já sabe que as redes sociais podem te dar a maior força na hora de procurar uma oportunidade, que tal mandar umas mensagens para alguns amigos?',
                    image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
                },
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        title: 'Emprego não se pede. Se conquista.',
                        text: 'Mostre qual das mensagens abaixo você mandaria pra não pagar mico.',
                        alternativesType: 'text',
                        feedbacks: [{
                            title: 'Muito bem!',
                            text: 'Legal! Esse é o jeito certo de dizer para um amigo que está procurando uma oportunidade.',
                            type: 'positive'
                        }, {
                            title: 'Ooops!',
                            text: 'Mandou mal! Ficar implorando ou achar que alguém vai te arrumar um trampo só porque é seu amigo, é bola fora!',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: 'Felipe! Há quanto tempo... Cara, preciso muito trabalhar aí! Faço qualquer coisa!',
                            letter: 'A'
                        }, {
                            option: ' Oi Marcão!  Estou trabalhando na área de vendas. Posso te mandar meu currículo?',
                            letter: 'B'
                        }, {
                            option: 'Pedrão! Me arruma um trampo aí. Você é meu amigo ou não é?',
                            letter: 'C'
                        }],
                        correctAnswer: 'B'

                    }]
                }
            }]
        })
    ]
);
