'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Atendimento 2",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Atendimento ao cliente')._id,
            ],
            description: 'Hoje vamos falar daquele momento chave! Aquela hora que você fica cara a cara com o cliente e precisa atendê-lo da melhor forma. Será que você sabe o que dizer e como agir quando ele chega nervoso? Ou como se apresentar para causar uma boa impressão? Fique ligado na aula que nós vamos te contar tudo!   ',
            image: _.find(files, file => file.filename === 'Aula_18.png').fileUrl,
            activities: [{
                name: 'Dando um trato.',
                description: undefined,
                type: 'presentation',
                presentation: {
                    title: 'Dando um trato.',
                    description: 'O Júlio está acordando para ir trabalhar! Ele é atendente de uma assistência técnica de computadores e precisa estar sempre ligado no que fazer, e no que não fazer, na hora de ficar frente a frente com um cliente. Vamos ver como é o dia dele? ',
                    image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl // TODO
                },
                contentFormat: 'slides',
                content: {
                    slides: [{
                        image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at1-01.png').fileUrl,
                        title: ' Você é a cara da empresa. Cuide-se!s',
                        text: 'Primeiro, o Júlio dá aquele trato no visual! Toma um banho para espantar o sono, penteia o cabelo, escova os dentes e capricha no desodorante e faz a barba! Depois veste uma roupa limpa e passada e calça um par de sapatos bem cuidado. Ele sabe que até os pequenos detalhes fazem a diferença na hora do atendimento. Ah, o crachá da empresa ele deixa no peito, para o cliente bater o olho e ver de cara seu nome. '
                    }, {
                        image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at1-02.png').fileUrl,
                        title: 'Cada um é cada um.',
                        text: 'O Júlio chegou ao trabalho e a primeira cliente que ele atende é a Sra. Olga. Ela vai sempre lá e ele já sabe como atendê-la. Tudo tem que ser bem explicado e não pode faltar um cafezinho! O segredo de um bom atendimento é esse: tratar o cliente da forma que ele quer ser tratado!'
                    }, {
                        image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at1-03.png').fileUrl,
                        title: 'Sem perder o estilo.',
                        text: '<p>Depois, o Júlio atendeu um cliente que nunca tinha ido lá. Ele chegou nervoso e com muita pressa! Mas com boa vontade, o Júlio descobriu que o cliente queria ser atendido sem rodeios. E foi isso que ele fez. Resolveu rápido o problema e o cliente saiu felizão!</p><p>E o dia do Júlio seguiu atendendo pessoas diferentes ajustando o atendimento para cada tipo de cliente.</p>'
                    }]
                }
            }, {
                name: 'Fui claro?',
                description: undefined,
                type: 'presentation',
                contentFormat: 'audio',
                content: {
                    questions: [{
                        title: 'Fui claro?',
                        text: 'A Maria é vendedora em uma loja de eletrônicos. Ela vai atender sua cliente de duas formas diferentes. Vamos ver qual é a mais adequada?',
                        image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at2.png').fileUrl,
                        audio: {
                            fileUrl: 'files/stream?type=audios&filename=' + 'Principio-de-atendimento-fuiclaro.mp3',
                            type: 'audio/mpeg'
                        },
                          subtitles: {
                              fileUrl: _.find(files, file => file.filename === 'Principio-de-atendimento-fuiclaro.vtt').fileUrl,
                              label: 'English'
                          },
                    }]

                }

            }, {
                name: 'Satisfeito ou zangado?',
                description: undefined,
                type: 'interaction',
                presentation: {
                    title: 'Satisfeito ou zangado?',
                    description: 'Cada cliente tem uma necessidade, mas todos querem se sentir especiais! Agora é a sua vez de mostrar o que conhece. Indique se o seu cliente ficaria feliz ou nervoso com as atitudes a seguir.',
                    image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
                },
                contentFormat: 'simpleQuiz',
                content: {
                    questions: [{
                        title: 'Satisfeito ou zangado?',
                        text: 'Você apresentou um produto para o cliente e tinha tudo na ponta língua: características, vantagens e benefícios.',
                        alternativesType: 'image',
                        feedbacks: [{
                            title: 'Isso mesmo!',
                            text: 'Saber que você entende do que está falando deixa o cliente felizão!',
                            type: 'positive'
                        }, {
                            title: 'Nada disso!',
                            text: 'Saber que você entende do que está falando deixam o cliente felizão!',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'Aula18_Atend_principios_at3-01.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'Aula18_Atend_principios_at3-02.png').fileUrl,
                            letter: 'B'
                        }],
                        correctAnswer: 'A'

                    }, {
                        title: 'Satisfeito ou zangado?',
                        text: 'O cliente não sabia bem o que queria, você não deu corda e apressou o atendimento.',
                        alternativesType: 'image',
                        feedbacks: [{
                            title: 'Boa!',
                            text: 'Desrespeito e falta de atenção deixam o cliente uma fera!',
                            type: 'positive'
                        }, {
                            title: 'Errou!',
                            text: 'Desrespeito e falta de atenção deixam o cliente uma fera!',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'Aula18_Atend_principios_at3-01.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'Aula18_Atend_principios_at3-02.png').fileUrl,
                            letter: 'B'
                        }],
                        correctAnswer: 'B'
                    }, {
                        title: 'Satisfeito ou zangado?',
                        text: 'O cliente estava com um problema e você tentou resolver a situação com paciência, repetindo a explicação todas  as vezes necessárias.',
                        alternativesType: 'image',
                        feedbacks: [{
                            title: 'Mandou bem!',
                            text: 'Ter jogo de cintura, facilitar as coisas e não apressar o atendimento, deixam o cliente satisfeito.',
                            type: 'positive'
                        }, {
                            title: 'Mandou mal!',
                            text: 'Ter jogo de cintura, facilitar as coisas e não apressar o atendimento, deixam o cliente satisfeito.',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'Aula18_Atend_principios_at3-01.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'Aula18_Atend_principios_at3-02.png').fileUrl,
                            letter: 'B'
                        }],
                        correctAnswer: 'A'
                    }, {
                        title: 'Satisfeito ou zangado?',
                        text: 'O cliente estava com urgência, você tenta acalmá-lo e disse que as coisas não podiam ser resolvidas assim, de uma hora pra outra.',
                        alternativesType: 'image',
                        feedbacks: [{
                            title: 'Maravilha!',
                            text: 'O cliente fica nervoso quando percebe que o problema vai demorar para ser resolvido.',
                            type: 'positive'
                        }, {
                            title: 'Não!!',
                            text: 'O cliente fica nervoso quando percebe que o problema vai demorar para ser resolvido. ',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'Aula18_Atend_principios_at3-01.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'Aula18_Atend_principios_at3-02.png').fileUrl,
                            letter: 'B'
                        }],
                        correctAnswer: 'B'
                    }, {
                        title: 'Satisfeito ou zangado?',
                        text: 'O cliente perguntou sobre uma vantagem que o produto que você ofereceu não tem, você deu uma enrolada e inventou alguma coisa.',
                        alternativesType: 'image',
                        feedbacks: [{
                            title: 'Perfeito!',
                            text: 'Nenhum cliente gosta de ser enganado.',
                            type: 'positive'
                        }, {
                            title: 'Tá errado!',
                            text: 'Nenhum cliente gosta de ser enganado.',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: _.find(files, file => file.filename === 'Aula18_Atend_principios_at3-01.png').fileUrl,
                            letter: 'A'
                        }, {
                            option: _.find(files, file => file.filename === 'Aula18_Atend_principios_at3-02.png').fileUrl,
                            letter: 'B'
                        }],
                        correctAnswer: 'B'

                    }]
                }
            }, {
                name: 'Vire o jogo!',
                description: undefined,
                type: 'interaction',
                presentation: {
                    title: 'Vire o jogo!',
                    description: 'Atender clientes insatisfeitos é um desafio para testar sua capacidade de virar o jogo e fidelizá-los. Ser simpático, se empenhar em resolver o problema e acalmar a situação. Agora é com você. Indique a resposta correta para cada momento. ',
                    image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
                },
                contentFormat: 'multipleQuiz',
                content: {
                    questions: [{
                        title: 'Vire o jogo!',
                        text: 'Um cliente chega muito nervoso na loja, reclamando de um produto que comprou e não funcionou. Qual a primeira coisa que você faz:',
                        alternativesType: 'text',
                        feedbacks: [{
                            title: 'Muito bem!',
                            text: 'Quando o cliente está sentado fica naturalmente mais calmo.',
                            type: 'positive'
                        }, {
                            title: 'Ooops!',
                            text: 'o cliente só vai ficar tranquilo com um bom atendimento. E não adianta se esconder, hein?',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: 'Oferece um copo de água com açúcar.',
                            letter: 'A'
                        }, {
                            option: 'Demonstra simpatia e pede que ele se sente.',
                            letter: 'B'
                        }, {
                            option: 'Fica distante até ele se acalmar.',
                            letter: 'C'
                        }],
                        correctAnswer: 'B'

                    }, {
                        title: 'Vire o jogo!',
                        text: 'O cliente começa a falar alto de todas as tentativas que fez para fazer o produto funcionar. E você…',
                        alternativesType: 'text',
                        feedbacks: [{
                            title: 'Isso mesmo!',
                            text: 'Quando o cliente está sentado fica naturalmente mais calmo.',
                            type: 'positive'
                        }, {
                            title: 'Foi mal!',
                            text: ' Interromper o cliente ou partir para atitudes extremas só complicam a situação.',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: 'Ouve com atenção, sem interromper, e anota as reclamações para passar ao departamento responsável.',
                            letter: 'A'
                        }, {
                            option: 'Tenta dar sua explicação antes que ele termine de falar.',
                            letter: 'B'
                        }, {
                            option: 'Chama o segurança.',
                            letter: 'C'
                        }],
                        correctAnswer: 'A'

                    }, {
                        title: 'Vire o jogo!',
                        text: 'Na hora de dar sua explicação, como você se comporta:',
                        alternativesType: 'text',
                        feedbacks: [{
                            title: 'Jóia!',
                            text: 'Você se saiu bem. Atitudes assim fazem o cliente se sentir respeitado.',
                            type: 'positive'
                        }, {
                            title: 'Ooops!',
                            text: 'minimizar o problema ou intimidar o cliente é mancada.',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: 'Diz que ele está exagerando e que o problema não é tão grave assim.',
                            letter: 'A'
                        }, {
                            option: 'Fala uns termos técnicos e umas palavras difíceis para intimidá-lo.',
                            letter: 'B'
                        }, {
                            option: 'Tenta se colocar no lugar dele e explica seus pontos de forma clara e objetiva.',
                            letter: 'C'
                        }],
                        correctAnswer: 'C'

                    }, {
                        title: 'Vire o jogo!',
                        text: 'Por fim, como você resolve o problema?',
                        alternativesType: 'text',
                        feedbacks: [{
                            title: 'Legal!',
                            text: 'Isso passa segurança para o cliente.',
                            type: 'positive'
                        }, {
                            title: 'Não!',
                            text: 'Prolongar o problema ou envolver outras partes, só pioram a situação.',
                            type: 'negative'
                        }],
                        alternatives: [{
                            option: 'Oferece um copo de água com açúcar.',
                            letter: 'A'
                        }, {
                            option: 'Demonstra simpatia e pede que ele se sente.',
                            letter: 'B'
                        }, {
                            option: 'Fica distante até ele se acalmar.',
                            letter: 'C'
                        }],
                        correctAnswer: 'A'
                    }]
                }
            }, {
                name: 'Palavras mágicas.',
                description: undefined,
                type: 'interaction',
                presentation: {
                    title: 'Palavras mágicas.',
                    description: 'Clientes são como a gente: gostam de se sentir respeitados. Você sabia que algumas palavras e expressões têm esse poder? A seguir, veja os diálogos entre clientes e atendentes e complete com as opções corretas.',
                    image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
                },
                contentFormat: 'add',
                content: {
                    questions: [{
                        title: 'Palavras mágicas.',
                        text: 'O cliente pergunta: "Você tem a nova temporada da série Killers?". Como você responde?',
                        background: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-001.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        feedbacks: [{
                            title: 'Muito bem!',
                            text: 'Expressões como “obrigado”, "desculpe" e "por favor" ajudam muito no diálogo',
                            type: 'positive'
                        }, {
                            title: 'Pense bem...',
                            text: ' Esse tipo de expressão não transmite respeito. O mais adequado seria começar com: "Com licença, posso ajudar"?',
                            type: 'negative'
                        }],
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-04.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-1A.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 520,
                                y: 66
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-03.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-1b.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 520,
                                y: 66
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-02.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-1c.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 520,
                                y: 66
                            }
                        }, {
                            number: 4,
                            category: 'A',
                            image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-01.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-1d.png').fileUrl,
                            tickPosition: {
                                x: 520,
                                y: 66
                            }
                        }],
                        correctLayers: [3]
                    }, {
                        title: 'Palavras mágicas.',
                        text: 'O cliente questiona: "Comprei um produto ontem com você e está com defeito". Como você responde?',
                        background: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-200.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        feedbacks: [{
                            title: 'Certíssimo!',
                            text: 'O cliente fica encantado quando é chamado pelo nome.',
                            type: 'positive'
                        }, {
                            title: 'Ops...',
                            text: ' Expressões como essa não são adequadas para se comunicar com um cliente. Que tal chamá-lo pelo nome?',
                            type: 'negative'
                        }],
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-201.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-2A.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 520,
                                y: 66
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-202.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-2b.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 520,
                                y: 66
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-203.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-2c.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 520,
                                y: 66
                            }
                        }, {
                            number: 4,
                            category: 'A',
                            image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-204.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-2d.png').fileUrl,
                            tickPosition: {
                                x: 520,
                                y: 66
                            }
                        }],
                        correctLayers: [1]

                    }, {
                        title: 'Palavras mágicas.',
                        text: 'Agora é sua vez de fazer uma pergunta pro cliente que acaba de chegar na loja, capricha!',
                        background: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-300.png').fileUrl,
                        baseResolution: {
                            width: 1080,
                            height: 860
                        },
                        feedbacks: [{
                            title: 'Você já começou bem!',
                            text: 'Esse tipo de expressão, além de transmitir educação, faz o cliente se sentir respeitado.',
                            type: 'positive'
                        }, {
                            title: 'Foi mal.',
                            text: 'Esse tipo de expressão não transmite respeito. O mais adequado seria começar com: “Com licença, posso ajudar”?',
                            type: 'negative'
                        }],
                        layers: [{
                            number: 1,
                            image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-301.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-3A.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 520,
                                y: 66
                            }
                        }, {
                            number: 2,
                            image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-302.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-3b.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 520,
                                y: 66
                            }
                        }, {
                            number: 3,
                            image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-303.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-3c.png').fileUrl,
                            category: 'A',
                            tickPosition: {
                                x: 520,
                                y: 66
                            }
                        }, {
                            number: 4,
                            category: 'A',
                            image: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-304.png').fileUrl,
                            icon: _.find(files, file => file.filename === 'Aula18_Atend_principios_at5-3d.png').fileUrl,
                            tickPosition: {
                                x: 520,
                                y: 66
                            }
                        }],
                        correctLayers: [3]
                    }]
                }
            }]
        })
    ]
);
