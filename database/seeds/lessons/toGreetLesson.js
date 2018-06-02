'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Cumprimentos",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Marketing Pessoal')._id,
            ],
            description: 'Dizer bom dia ou dar um aperto de mãos são sinais de educação. Mas você sabia que existem formas diferentes de cumprimentar, dependendo do lugar que você está ou da pessoa que você encontra? Quer saber mais? Vem com a gente que esta aula está show!',
            estimatedTime: '7',
            image: _.find(files, file => file.filename === 'Aula_08.png').fileUrl,
            activities: [{
                    name: 'Chegar chegando',
                    description: undefined,
                    type: 'presentation',
                    presentation: {
                        title: 'Chegar chegando',
                        description: 'Por falar em cumprimento, o Pyong quer te dar um oi e alguns toques para você ser educado com a galera do trampo. É só assistir!',
                        image: _.find(files, file => file.filename === 'capa_cumprimentos.png').fileUrl
                    },
                    contentFormat: 'video',
                    content: {
                        title: 'Chegar chegando',
                        text: 'Por falar em cumprimento, o Pyong quer te dar um oi e alguns toques para você ser educado com a galera do trampo. É só assistir!',
                        video: {
                            fileUrl: 'files/stream?type=videos&filename=' + '3-CUMPRIMENTO_online.mp4',
                            type: 'video/mp4'
                        },
                        subtitles: {
                            fileUrl: _.find(files, file => file.filename === 'Cumprimentos.vtt').fileUrl,
                            label: 'Português'
                        }
                    }
                }, {
                    name: 'Dando um oi por aí',
                    description: undefined,
                    type: 'presentation',
                    presentation: {
                        title: 'Dando um oi por aí',
                        description: 'Você passa por muitos lugares durante o dia. Será que você cumprimenta todo mundo certinho? Quer testar?',
                        image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl // TODO
                    },
                    contentFormat: 'map',
                    content: {
                        title: 'Dando um oi por aí',
                        text: 'Clique nos lugares e descubra se você cumprimenta todo mundo certinho.',
                        background: _.find(files, file => file.filename === 'Aula05_Aparencia_01.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 1020
                        },
                        mapping: [{
                            coordinates: '408,66,424,66,442,70,458,78,469,83,477,93,483,106,485,123,483,139,475,149,465,158,454,165,441,174,430,180,420,190,415,197,414,182,407,175,393,169,380,167,367,160,356,152,348,142,343,128,339,113,346,96,358,81,375,71,392,66',
                            shape: 'poly',
                            tickPosition: {
                                x: 453,
                                y: 170
                            },
                            feedback: {
                                title: '',
                                text: 'Cumprimentar faz parte da boa educação em qualquer lugar. Se você é tímido, que tal treinar com os colegas? Ao chegar na escola, cumprimente olhando nos olhos e com gestos firmes. Sacou? ',
                                image: _.find(files, file => file.filename === 'Aula05_Aparencia_01d.png').fileUrl
                            }
                        }, {
                            coordinates: "736,394,757,395,775,400,789,404,803,411,814,421,822,431,829,445,831,461,829,477,822,493,811,504,798,517,781,525,769,531,757,542,748,551,745,556,744,543,738,533,726,526,709,520,690,517,678,507,663,494,657,479,651,464,654,444,661,430,673,415,689,405,708,397",
                            shape: 'poly',
                            tickPosition: {
                                x: 787,
                                y: 522
                            },
                            feedback: {
                                title: '',
                                text: 'Chegou no trampo? Tire os óculos escuros para cumprimentar o pessoal e fazer um contato visual. Você pode dar um olá geral ou cumprimentar um por um. Tudo vai depender da cultura da empresa.',
                                image: _.find(files, file => file.filename === 'Aula05_Aparencia_01e.png').fileUrl,
                            }
                        }, {
                            coordinates: "285,533,301,535,316,538,332,542,346,549,357,556,368,567,376,578,380,591,379,608,377,622,371,633,360,645,348,655,333,664,319,673,306,684,297,692,292,699,291,682,277,670,261,663,244,660,226,653,213,638,204,624,197,606,198,587,207,569,221,555,233,546,251,539,267,535",
                            shape: 'poly',
                            tickPosition: {
                                x: 334,
                                y: 663
                            },
                            feedback: {
                                title: '',
                                text: 'Seu chefe pediu pra você ir numa reunião em outra empresa. Observe na recepção como as pessoas se cumprimentam e faça o mesmo. Mas não se esqueça de agir sempre de forma natural, tá? ',
                                image: _.find(files, file => file.filename === 'Aula05_Aparencia_01f.png').fileUrl,
                            }
                        }]
                    }
                }, {
                    name: 'Prazer em (re)vê-lo',
                    description: undefined,
                    type: 'interaction',
                    presentation: {
                        title: 'Prazer em (re)vê-lo',
                        description: 'Você está num trabalho novo. No café, começa a conhecer mais algumas pessoas que não tinha visto antes. Nas situações seguintes, diga se os comportamentos estão certos ou errados.',
                        image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl // TODO
                    },
                    contentFormat: 'simpleQuiz',
                    content: {
                        questions: [{
                            title: 'Prazer em (re)vê-lo',
                            text: 'Você vê um cara que não conhece e quer logo puxar papo com ele. Então, dá um tapa nas costas para chamar a atenção e cumprimentá-lo. Mandou bem ou vacilou?',
                            image: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at3.png').fileUrl,
                            alternativesType: 'boolean',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'É isso aí! Se o cara é um desconhecido, não dá pra ter essa intimidade com ele logo de cara, né?',
                                type: 'positive'
                            }, {
                                title: 'Não!',
                                text: 'Ao ver alguém pela primeira vez, espere a pessoa dar um sinal de que quer falar com você. Daí, sim, você diz um “oi” e se apresenta!',
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
                        }, {
                            title: 'Prazer em (re)vê-lo',
                            text: 'Um desconhecido chegou no café e você olhou nos olhos dele e esperou ele falar. Como ele cumprimentou, você já mandou um “Bom dia”, sorriu e disse o seu nome. Mandou bem ou vacilou?',
                            image: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at4.png').fileUrl,
                            alternativesType: 'boolean',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Boa! Você fez um contato visual e esperou ele falar primeiro. Educação é tudo!',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Ops… fazer um contato visual e esperar o outro falar primeiro não é vacilo! É boa educação!',
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
                        }, {
                            title: 'Prazer em (re)vê-lo',
                            text: 'Depois de ser apresentado a um colega, rolou aquele silêncio…  Você mandou um  “será que chove hoje?” para puxar uma conversa. Mandou bem ou vacilou?',
                            image: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at5.png').fileUrl,
                            alternativesType: 'boolean',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Legal! Puxar um assunto do dia a dia é ótimo pra quebrar o gelo.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Errou! Falar sobre um assunto do dia a dia é perfeito para tirar esse climão.',
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
                        }, {
                            title: 'Prazer em (re)vê-lo',
                            text: 'Você está conversando com um cara do outro departamento, mas ele não olha pra você e não para de mexer no celular. Você insiste no papo, pra ver se ele se liga. Mandou bem ou vacilou?',
                            image: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at6.png').fileUrl,
                            alternativesType: 'boolean',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Perfeito! Insistir em falar com alguém que não está dando a mínima para o papo é o maior vacilo!',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Hummm… pense bem! Você acha mesmo que um cara que nem olha pra você está interessado no papo? Parte pra outra!',
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
                        }, {
                            title: 'Prazer em (re)vê-lo',
                            text: 'Opa! Agora chegou um cara que estudou com você na primeira série! Que coincidência! Ao cumprimentá-lo, você vai logo dizendo: “ Oi! lembra de mim, do 1º A"? Mandou bem ou vacilou?',
                            image: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at7.png').fileUrl,
                            alternativesType: 'boolean',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Acertou! Como já faz tempo que vocês não se encontram, é sempre bom dar uma relembrada de onde vocês se conhecem.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Tem certeza? Não seria melhor lembrá-lo de onde vocês se conhecem para evitar situações embaraçosas? ',
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
                        }]
                    }
                }, {
                    name: 'Toca aí, parceiro!',
                    description: undefined,
                    type: 'interaction',
                    presentation: {
                        title: 'Toca aí, parceiro!',
                        description: 'Beijo, abraço, aperto de mão… Tem sempre um gesto que cai melhor para cada momento. Mostre pra gente o que você faria em cada situação.',
                        image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl // TODO
                    },
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            title: 'Toca aí, parceiro!',
                            text: 'Você está vendo seu novo chefe pela primeira vez. Como deve cumprimentá-lo?',
                            alternativesType: 'image',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: ' Boa! Esse é o cumprimento mais usado quando se acaba de conhecer alguém.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Não. Você acabou de conhecê-lo! É melhor um aperto de mãos firme, com as mãos bem secas e limpas.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8c.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8d.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8b.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8a.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'A'
                        }, {
                            title: 'Toca aí, parceiro!',
                            text: 'Você encontrou uma colega que já conhece faz tempo, se aproximou dela e…',
                            alternativesType: 'image',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'É isso aí! Se você já tem uma certa intimidade com ela, beleza dar um beijo no rosto',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Não! Aperto de mãos é muito formal, abraço é muito íntimo e aceno é muito distante. Um beijo pega melhor nessa situação.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8c.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8d.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8b.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8a.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'C'
                        }, {
                            title: 'Toca aí, parceiro!',
                            text: 'Um cliente, já conhecido pelo seu chefe, veio visitar a empresa. Seu chefe o recebeu com um abraço. Chega sua vez de cumprimentá-lo. Que gesto você faz?',
                            alternativesType: 'image',
                            feedbacks: [{
                                title: 'Tá certo!',
                                text: 'Seu chefe deu um abraço no cliente, mas você não sabe a intimidade que eles têm. Então, um aperto de mãos é mais garantido.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Errado. Abraço e beijo só se você tiver muita intimidade com a pessoa e aceno é muito impessoal.  Um aperto de mãos é mais garantido.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8c.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8d.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8b.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8a.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'A'
                        }, {
                            title: 'Toca aí, parceiro!',
                            text: 'Você entrou na sala de reunião e ela já está cheia. Tem muita gente ali que você não conhece e a reunião já vai começar. E aí? O que você faz?',
                            alternativesType: 'image',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Boa! Você dá um alô pra todo mundo junto e não atrasa a reunião!',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Errado! Imagine quanto tempo você vai levar para apertar a mão de todo mundo! Beijo e abraço, sem intimidade, também não rola.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8c.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8d.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8b.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8a.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'B'
                        }, {
                            title: 'Toca aí, parceiro!',
                            text: 'Você chegou no refeitório da empresa e a mesa já estava cheia com colegas dos outros departamentos.. Como você cumprimenta todo mundo?',
                            alternativesType: 'image',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Perfeito! Na mesa não é legal cumprimentar as pessoas com contato físico.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Ops… cumprimentar quem está na mesa com contato físico  é mancada.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8c.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8d.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8b.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at8a.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'B'
                        }]
                    }
                }, {
                    name: 'Descolado e educado',
                    description: undefined,
                    type: 'interaction',
                    presentation: {
                        title: 'Descolado e educado',
                        description: 'Saber cumprimentar e interagir com as pessoas em diferentes momentos do dia é sinal de educação. E você? Sabe o que fazer quando encontra um conhecido no restaurante?',
                        image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
                    },
                    contentFormat: 'errors',
                    content: {
                        questions: [{
                            title: 'Descolado e educado',
                            text: 'Se liga nessa cena. Tem 2 erros aí. Tem as manhas de achá-los?',
                            background: _.find(files, file => file.filename === 'Aula08_Cumprimentos_at9.png').fileUrl,
                            clicks: 3,
                            baseResolution: {
                                width: 1080,
                                height: 1020
                            },
                            mappings: [{
                                coordinates: '165,73,126,116,172,199,175,258,144,302,61,268,23,295,51,407,97,460,140,540,137,712,156,785,165,906,167,985,121,1063,292,1066,348,1066,381,1002,353,729,349,581,363,342,345,198,365,134,284,80',
                                shape: 'poly',
                                tickPosition: {
                                    x: 359,
                                    y: 122
                                },
                                feedback: {
                                    title: 'Muito bem!',
                                    text: 'Muito bem! Não é educado cumprimentar com óculos escuros. Olho no olho faz toda diferença nessas horas.',
                                    type: 'positive'
                                }
                            }, {
                                coordinates: '814,236,935,262,961,318,966,411,918,461,933,532,955,596,928,741,834,706,816,602,766,637,743,553,745,470,765,365,739,296',
                                shape: 'poly',
                                tickPosition: {
                                    x: 929,
                                    y: 234
                                },
                                feedback: {
                                    title: 'Muito bem!',
                                    text: 'Legal! Você acertou! É uma tremenda falta de educação deixar uma pessoa que está no grupo fora da conversa. Se liga sempre nisso, ok?',
                                    type: 'positive'
                                }
                            }]
                        }]
                    }
                }] //final do action
        })
    ]
);
