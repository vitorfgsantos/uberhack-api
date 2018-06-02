'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Valores",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Propósito de vida')._id,
            ],
            estimatedTime: 5,
            description: 'Vamos falar de valores? Não, não é sobre grana que a gente quer conversar! É sobre aquilo que a gente dá importância e que desde pequenos aprendemos a valorizar. Nessa aula você vai ver que até as empresas têm os valores delas. Pronto pra começar?',
            image: _.find(files, file => file.filename === 'Aula_02.png').fileUrl,
            activities: [{
                    name: 'Valor que vem do berço',
                    description: undefined,
                    type: 'presentation',
                    presentation: {
                        title: 'Valor que vem do berço',
                        description: 'Hoje vamos falar de valores! Aqueles princípios que consideramos mais importantes e que norteiam nossa vida.',
                        image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
                    },
                    contentFormat: 'map',
                    content: {
                        title: 'Valor que vem do berço',
                        text: ' Os valores são transmitidos ainda na infância. Quer ver? Entre no almoço de domingo da família da Mari e descubra!',
                        background: _.find(files, file => file.filename === 'Aula02_Valores_at1.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 1020
                        },
                        mapping: [{
                            coordinates: '11,122,98,127,175,155,216,313,199,410,220,520,86,559,4,562',
                            shape: 'poly',
                            tickPosition: {
                                x: 104,
                                y: 338
                            },
                            feedback: {
                                title: 'Respeito',
                                text: 'Este é o avô da Mari. Com ele, a Mari aprendeu a respeitar, principalmente os mais velhos. Sempre que ele fala, todo mundo presta atenção. E, se alguém discorda, rola um papo, sem ofender. Graças ao avô, o respeito é um valor na vida da Mari.',
                                image: _.find(files, file => file.filename === 'Aula02_Valores_at2.png').fileUrl
                            }
                        }, {
                            coordinates: "257,123,259,190,253,279,275,354,345,433,492,407,518,276,542,171,538,113,511,28,342,7",
                            shape: 'poly',
                            tickPosition: {
                                x: 368,
                                y: 175
                            },
                            feedback: {
                                title: 'Humildade',
                                text: 'Esta é a mãe da Mari. Um exemplo para a família! Para ela, não existe ninguém melhor do que ninguém. Ela trata todos da mesma forma. Ela também sabe reconhecer seus erros e não é orgulhosa. A humildade da Mari é um valor que veio da sua mãe!',
                                image: _.find(files, file => file.filename === 'Aula02_Valores_at3.png').fileUrl,
                            }
                        }, {
                            coordinates: "592,164,580,233,581,384,571,466,581,536,727,469,763,336,798,143,682,72",
                            shape: 'poly',
                            tickPosition: {
                                x: 629,
                                y: 299
                            },
                            feedback: {
                                title: 'Generosidade',
                                text: 'Esse é a irmã da Mari! Elas sempre dividiam as coisas e até hoje se ajudam em tudo. A Mari deixou de ir em muita balada pra ficar em casa cuidando dela. Generosidade é um valor que a Mari cultivou com sua irmã. ',
                                image: _.find(files, file => file.filename === 'Aula02_Valores_at4.png').fileUrl,
                            }
                        }, {
                            coordinates: "843,173,815,244,829,357,832,441,826,538,1013,534,1048,481,1080,302,1079,43,1002,36,846,37",
                            shape: 'poly',
                            tickPosition: {
                                x: 964,
                                y: 280
                            },
                            feedback: {
                                title: 'Confiança',
                                text: 'O pai da Mari tem uma oficina mecânica. E todo mundo do bairro confia nele! Afinal, ele nunca trocou uma peça que não precisasse em um carro. Confiança é um valor que a Mari carrega do pai!',
                                image: _.find(files, file => file.filename === 'Aula02_Valores_at5.png').fileUrl,
                            }
                        }]
                    }
                }, {
                    name: 'Teste seus valores.',
                    description: undefined,
                    type: 'interaction',
                    presentation: {
                        title: 'Teste seus valores.',
                        description: 'Os valores variam de pessoa pra pessoa. Mesmo aqueles valores transmitidos na infância podem mudar ao longo do tempo. E você? Sabe quais valores são importantes na sua vida? Topa fazer um teste?',
                        image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
                    },
                    contentFormat: 'simpleQuiz',
                    content: {
                        questions: [{
                            title: 'Teste seus valores.',
                            text: 'Honestidade: você está andando na rua e vê uma carteira caída no chão. Qual a sua reação?',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Ótimo! A honestidade é um grande valor pra você. Parabéns!',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Que pena… A honestidade não é um valor importante pra você. Mas nunca é tarde para começar a cultivá-la.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'Tenta encontrar o dono de todo jeito e, se não conseguir, entrega em uma delegacia ou numa agência do correio.',
                                letter: 'A'
                            }, {
                                option: 'Fica com ela. Achado não é roubado!',
                                letter: 'B'
                            }],
                            correctAnswer: 'A'

                        }, {
                            title: 'Teste seus valores.',
                            text: 'Respeito. Você está no metrô lotado, mas conseguiu um lugar para sentar. Na estação seguinte, entra um senhor de idade no vagão. O que você faz?',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Perfeito! O respeito é algo que você valoriza.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Ops… respeito não é muito a sua praia. Que tal começar a praticá-lo mais?',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'Continua sentado. Afinal, você chegou primeiro.',
                                letter: 'A'
                            }, {
                                option: 'Levanta na hora e dá lugar para o senhor sentar.',
                                letter: 'B'
                            }],
                            correctAnswer: 'B'
                        }, {
                            title: 'Teste seus valores.',
                            text: 'Amizade: seu amigo de infância está super mal e te liga para pedir uns conselhos, bem na hora da final do futebol. E aí?',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: ' Que legal! Você valoriza as amizades. Isso é muito bom!',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Puxa, você não valoriza as amizades… Que tal dar mais atenção para os amigos, hein?',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'Você pede para ele ligar mais tarde, claro!',
                                letter: 'A'
                            }, {
                                option: 'Você desencana do futebol e conversa com ele.',
                                letter: 'B'
                            }],
                            correctAnswer: 'B'
                        }, {
                            title: 'Teste seus valores.',
                            text: 'Consciência ecológica: você está no trampo e, na hora de tomar café…',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Maravilha!',
                                text: 'Você mostrou que é um cara consciente e que valoriza o meio ambiente.',
                                type: 'positive'
                            }, {
                                title: 'Xiiii…',
                                text: 'Você não valoriza muito o meio ambiente. Mas nosso futuro depende dele! Pense nisso da próxima vez que tomar seu cafezinho.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'Pega um copinho descartável, enche de café e depois joga no lixo orgânico.',
                                letter: 'A'
                            }, {
                                option: 'Pega seu copo reutilizável, enche de café e lava no fim do dia. ',
                                letter: 'B'
                            }],
                            correctAnswer: 'B'

                        }]
                    }
                }, {
                    name: 'Tudo a ver comigo!',
                    description: undefined,
                    type: 'presentation',
                    presentation: {
                        title: 'Tudo a ver comigo!',
                        description: 'Agora vamos te apresentar outros valores, afinal existem muitos! E você vai mostrar quais têm mais a ver com você.',
                        image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
                    },
                    contentFormat: 'order',
                    content: {
                        questions: [{
                            title: 'Tudo a ver comigo!',
                            text: 'Classifique os valores por ordem de importância em sua vida (do mais para o menos importante).',
                            feedbacks: [{
                                title: 'Bacana!',
                                text: 'Já deu pra gente sacar alguns valores que fazem parte da sua vida!',
                                type: 'positive'
                            }],
                            options: [{
                                image: _.find(files, file => file.filename === 'Aula2_Valores_at03_01.png').fileUrl,
                            }, {
                                image: _.find(files, file => file.filename === 'Aula2_Valores_at03_02.png').fileUrl,
                            }, {
                                image: _.find(files, file => file.filename === 'Aula2_Valores_at03_03.png').fileUrl,
                            }, {
                                image: _.find(files, file => file.filename === 'Aula2_Valores_at03_04.png').fileUrl,
                            }, {
                                image: _.find(files, file => file.filename === 'Aula2_Valores_at03_05.png').fileUrl,
                            }, {
                                image: _.find(files, file => file.filename === 'Aula2_Valores_at03_06.png').fileUrl,
                            }, {
                                image: _.find(files, file => file.filename === 'Aula2_Valores_at03_07.png').fileUrl,
                            }, {
                                image: _.find(files, file => file.filename === 'Aula2_Valores_at03_08.png').fileUrl,
                            }]
                        }]
                    }
                }, {
                    name: 'Toda empresa tem seu valor.',
                    description: undefined,
                    type: 'presentation',
                    presentation: {
                        title: 'Teste seus valores.',
                        description: 'As empresas são como a gente! Têm seus valores que refletem tudo o que ela acredita. Quer um exemplo? Se uma empresa é mega preocupada com o meio ambiente, isso reflete nos seus produtos, na sua comunicação e até nas atitudes dos seus funcionários. Pode reparar!',
                        image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
                    },
                    contentFormat: 'slides',
                    content: {
                        slides: [{
                            image: _.find(files, file => file.filename === 'Aula02_Valores_at6.png').fileUrl,
                            title: 'Toda empresa tem seu valor.',
                            text: 'Então tá… As empresas têm os valores delas e você tem os seus! E o que isso tem a ver com o trampo que você quer arrumar? Tudo a ver! Trampar numa empresa que tem os valores totalmente diferentes dos seus não te estimula, parece que você não pertence a ela, sacou?'
                        }, {
                            image: _.find(files, file => file.filename === 'Aula02_Valores_at7.png').fileUrl,
                            title: 'Toda empresa tem seu valor.',
                            text: 'Não que você tenha que ser igualzinho a ela. Até porque todo mundo que entra numa nova empresa pode assimilar seus valores. Mas, tudo fica muito mais fácil se vocês dois estiverem alinhados, com os mesmos objetivos, propósitos e ideais. Daí não tem erro!'
                        }]
                    }
                }, {
                    name: 'Cada um na sua',
                    description: undefined,
                    type: 'presentation',
                    presentation: {
                        title: 'Cada um na sua',
                        description: 'Veja os valores desses 4 jovens: Téo (dinheiro e competição), Luiz (amizade e respeito), Beth (consciência ecológica), Luca (independência e inovação). Agora, indique qual deles é mais indicado para cada empresa.',
                        image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
                    },
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            title: 'Cada um na sua',
                            text: 'A Vrumm é uma montadora de veículos que dá muita importância ao bem-estar e desenvolvimento de seus funcionários. Para ela as pessoas vêm sempre em primeiro lugar.',
                            alternativesType: 'image',
                            feedbacks: [{
                                title: 'Isso!',
                                text: 'Se o Luiz valoriza a amizade e o respeito, ia adorar trabalhar em uma empresa que se importa com as pessoas.',
                                type: 'positive'
                            }, {
                                title: 'Errou!',
                                text: 'Quem ia se dar bem trabalhando em uma empresa que valoriza as pessoas é o Luiz.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_01.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_02.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_03.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_04.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'C'
                        }, {
                            title: 'Cada um na sua',
                            text: 'A Beta é uma empresa criada por um grupo de jovens. Ali, os funcionários ficam bem à vontade para pensar em coisas novas. Muitos deles nem vão à empresa… trabalham de casa! ',
                            alternativesType: 'image',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Boa! Numa empresa dessas, o Luca seria o funcionário ideal!',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: ' Nada disso. O ideal para a Beta seria alguém que valoriza a inovação e a independência, como o Luca. ',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_01.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_02.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_03.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_04.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'D'
                        }, {
                            title: 'Cada um na sua',
                            text: 'A Gole é uma empresa de bebidas. Os funcionários têm metas altas para alcançar e são muito cobrados por resultados. Quando a empresa bate a meta, todos ganham muito!',
                            alternativesType: 'image',
                            feedbacks: [{
                                title: 'Uhhuuu!',
                                text: 'Você acertou! Na Gole, o Téo seria muito bem sucedido!',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Você não acha que alguém mais competitivo, como o Luca, seria melhor para a Gole?',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_01.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_02.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_03.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_04.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'A'
                        }, {
                            title: 'Cada um na sua',
                            text: 'A Bio é uma empresa de cosméticos que não testa seus produtos em animais. Além disso, utiliza matérias primas que não agridem a natureza e faz melhorias para a comunidade.',
                            alternativesType: 'image',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Mandou bem! A Beth tem tudo a ver com a Bio.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Mandou mal! A pessoa que tem tudo a ver com a Bio é a Beth. ',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_01.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_02.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_03.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula2_Valores_at05_p1_04.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'B'
                        }]
                    }
                }] //final do action
        })
    ]
);
