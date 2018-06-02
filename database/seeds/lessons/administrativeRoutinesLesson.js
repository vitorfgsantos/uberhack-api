'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Rotinas Administrativas 1",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Administração e finanças')._id,
            ],
            description: 'Sabia que seus amigos, familiares e conhecidos podem te abrir muitas portas na hora de procurar uma oportunidade de emprego? Isso se chama Rede de Relacionamento e nesta aula você vai aprender que usá-la da forma correta é uma ótima maneira de te aproximar do trampo dos seus sonhos! ',
            image: _.find(files, file => file.filename === 'Aula_14.png').fileUrl,
            activities: [{
                    name: 'Em sintonia com o trampo',
                    description: undefined,
                    type: 'presentation',
                    presentation: {
                        title: 'Em sintonia com o trampo',
                        description: 'Hoje você vai ver que aquele tipo de tarefa, que a gente tem que fazer todos os dias, é muito importante para organizar o nosso trabalho e os processos de uma empresa. Ou seja: tudo tem que ter uma rotina, e não tem nada de chato nisso! Quer saber mais? Vem com a gente!',
                        image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
                    },
                    contentFormat: 'audio',
                    content: {
                        questions: [{
                            title: 'Em sintonia com o trampo',
                            text: 'Tem informação importante para você. ',
                            image: _.find(files, file => file.filename === 'Aula15_Rotinas-Adm_at1.png').fileUrl,
                            audio: {
                                fileUrl: 'files/stream?type=audios&filename=' + 'Rotinas-administrativas-emsintoniacomotrampo.mp3',
                                type: 'audio/mpeg'
                            },
                              subtitles: {
                                  fileUrl: _.find(files, file => file.filename === 'R-administrativas-emsintoniacomotrampo.vtt').fileUrl,
                                  label: 'English'
                              },
                        }]
                    }
                }, {
                    name: 'De olho na conta',
                    description: undefined,
                    type: 'interaction',
                    presentation: {
                        title: 'Em sintonia com o trampo',
                        description: 'Agora, vamos entrar na rotina de uma empresa, começando pela movimentação bancária! Imagine um documento, que mostra tudo o que entra e o que sai do caixa da empresa. Será que você saberia dizer o que cada informação representa?',
                        image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
                    },
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            title: 'De olho na conta',
                            text: 'O dia começou e a empresa tem R$ 2.340,00 disponíveis na conta. Essa informação é identificada como:  ',
                            alternativesType: 'image',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Isso aí! O que já está na conta é o saldo anterior.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Nada disso.  O que já está na conta é o saldo anterior.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P1_01.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P1_02.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P1_03.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P1_04.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'C'

                        }, {
                            title: 'De olho na conta',
                            text: 'É dia de pagamento dos funcionários! Saiu da conta da empresa R$ 10.500,00. Como esse valor é classificado?',
                            alternativesType: 'image',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Acertou! Tudo o que sai da conta é chamado de débito.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Errou! Tudo o que sai da conta é chamado de débito.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P1_01.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P2_02.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P2_03.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P2_04.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'A'

                        }, {
                            title: 'De olho na conta',
                            text: ' Com o valor que tinha anteriormente, menos o que pagou para os funcionários, a empresa ficou com -R$ 8.160,00 na conta. Isso é chamado de:  ',
                            alternativesType: 'image',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Show! Saldo é a diferença entre tudo o que entra e o que sai da conta. ',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: ' Foi mal! A diferença entre tudo o que entra e o que sai da conta é chamado de saldo.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P3_01.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P3_02.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P3_03.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P3_04.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'C'

                        }, {
                            title: 'De olho na conta',
                            text: ' Um cliente fez um pagamento para a empresa de R$ 4.800,00. Esse valor entra como:',
                            alternativesType: 'image',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Muito bem! Todo valor que entra na conta é classificado como crédito.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Ops… Todo valor que entra na conta é classificado como crédito.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P3_01.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P4_02.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P4_03.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P4_04.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'B'
                        }, {
                            title: 'De olho na conta',
                            text: 'A soma de tudo o que entrou na conta da empresa menos a soma de tudo o que a empresa gastou no dia é chamado de:  ',
                            alternativesType: 'image',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Maravilha! Esse balanço do que entrou X o que saiu da conta no dia é chamado de saldo a transportar.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Mandou mal! Esse balanço do que entrou X o que saiu da conta no dia é chamado de saldo a transportar.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P5_01.png').fileUrl,
                                letter: 'A'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P5_02.png').fileUrl,
                                letter: 'B'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P5_03.png').fileUrl,
                                letter: 'C'
                            }, {
                                option: _.find(files, file => file.filename === 'Aula15_Rotinas_Administrativas_at02_P5_04.png').fileUrl,
                                letter: 'D'
                            }],
                            correctAnswer: 'A'
                        }]
                    }
                }, {
                    name: 'O carteiro chegou!',
                    description: undefined,
                    type: 'interaction',
                    presentation: {
                        title: 'O carteiro chegou!',
                        description: 'A troca de informações também faz parte das rotinas administrativas. E muitas são feitas através dos serviços postais. E você? Conhece os tipos de correspondências mais utilizados?  ',
                        image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
                    },
                    contentFormat: 'relate',
                    content: {
                        questions: [{
                            title: 'Relacione',
                            text: 'Relacione cada tipo de mensagem com a correspondência adequada. ',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Viu? Para cada tipo de mensagem, existe uma correspondência específica. Se liga nisso!',
                                type: 'positive'
                            }, {
                                title: 'Quase lá!',
                                text: 'Viu? Para cada tipo de mensagem, existe uma correspondência específica. Se liga nisso!',
                                type: 'intermediate'
                            }, {
                                title: 'Ooops!',
                                text: 'Viu? Para cada tipo de mensagem, existe uma correspondência específica. Se liga nisso!',
                                type: 'negative'
                            }],
                            drops: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula15_Rotinas-Adm_at2d.png').fileUrl,
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula15_Rotinas-Adm_at2b.png').fileUrl,
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula15_Rotinas-Adm_at2a.png').fileUrl,
                            }, {
                                number: 4,
                                image: _.find(files, file => file.filename === 'Aula15_Rotinas-Adm_at2e.png').fileUrl,
                            }],
                            drags: [{
                                text: 'Reclamação pelo correio',
                                relatedTo: 1
                            }, {
                                text: 'Devolução de produto',
                                relatedTo: 2
                            }, {
                                text: 'Mandar material para a filial',
                                relatedTo: 3
                            }, {
                                text: 'Aviso de cobrança',
                                relatedTo: 4
                            }]

                        }]
                    }
                }, {
                    // apartir daqui
                    name: 'Selada e carimbada',
                    description: undefined,
                    type: 'interaction',
                    presentation: {
                        title: 'Selada e carimbada',
                        description: 'Para enviar uma carta, você não pode vacilar na hora de preencher o envelope! Vamos ver como você se sai ao mandar uma carta para um amigo?',
                        image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
                    },
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            title: 'Selada e carimbada',
                            text: 'Você está preenchendo o envelope e tem que colocar os dados do seu amigo que vai receber a carta. Mostre pra gente onde essas informações devem entrar.',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'No verso, onde você fecha e cola o envelope.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Na frente, onde fica o selo.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'No verso, onde você fecha e cola o envelope.',
                                letter: 'A'
                            }, {
                                option: 'Na frente, onde fica o selo.',
                                letter: 'B'
                            }, {
                                option: 'Tanto faz entrar na frente ou no verso.',
                                letter: 'C'
                            }],
                            correctAnswer: 'B'

                        }, {
                            title: 'Selada e carimbada',
                            text: ' Você preencheu a frente do envelope com os seguintes dados: João Matos - Rua Dr. Augusto de Miranda, 250 - Pompéia - São Paulo - SP. Qual informação está faltando?',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Mandou bem! O CEP, código de endereçamento postal, é um número formado por oito algarismos e que facilita muito a entrega da correspondência.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Mandou mal! O que faltou foi o CEP, código de endereçamento postal, um número formado por oito algarismos e que facilita muito a entrega da correspondência.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'O nome do destinatário',
                                letter: 'A'
                            }, {
                                option: 'O bairro',
                                letter: 'B'
                            }, {
                                option: 'O CEP',
                                letter: 'D'
                            }],
                            correctAnswer: 'C'

                        }, {
                            title: 'Selada e carimbada',
                            text: 'Você já preencheu a frente e o verso do envelope com os dados do destinatário e os seus. Agora, só falta uma coisa para a carta ser enviada. Você sabe o que é?',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Acertou! O selo é muito importante para enviar a carta. Ele identifica que você postou e pagou pela sua entrega.',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Errado! O que falta é o selo. Ele é muito importante para enviar a carta, pois identifica que você postou e pagou pela sua entrega.',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'Colocar o assunto da carta na frente do envelope. ',
                                letter: 'A'
                            }, {
                                option: 'Colocar seu telefone no verso do envelope.',
                                letter: 'B'
                            }, {
                                option: 'Ter o selo e o carimbo do correio.',
                                letter: 'D'
                            }],
                            correctAnswer: 'C'
                        }]
                    }
                }, {
                    name: 'Seu trampo não é sua casa',
                    description: undefined,
                    type: 'presentation',
                    presentation: {
                        title: 'Seu trampo não é sua casa',
                        description: '<p>Não é porque você fica muito tempo no trampo que vai achar que tá em casa! Pense que os equipamentos, móveis e materiais da empresa são de uso de todos! Ao cuidar bem deles você mostra que é um cara de responsa e ainda evita que a empresa tenha gastos à toa.</p><p>Se liga nas dicas que a gente trouxe pra você... </p>',
                        image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
                    },
                    contentFormat: 'slides',
                    content: {
                        slides: [{
                            image: _.find(files, file => file.filename === 'Aula15_Rotinas-Adm_at3.png').fileUrl,
                            title: 'Reunião com organização.',
                            text: '<p>Toda sala de reuniões tem equipamentos e materiais importantes.</p>Antes de uma reunião começar, dê uma geral na sala. Veja se tem papel e caneta, se o flip chart (cavalete usado para escrever) está com folhas, se o quadro branco está limpo e se todos os equipamentos eletrônicos estão funcionando.'
                        }, {
                            image: _.find(files, file => file.filename === 'Aula15_Rotinas-Adm_at4.png').fileUrl,
                            title: 'Computador pessoal.',
                            text: '<p>Só que não.<p><p>O computador da empresa, é da empresa, não se esqueça.</p><p>Evite acessá-lo para coisas pessoais, como baixar filmes, jogar, gravar músicas… Isso deixa toda a internet da empresa muito lenta!</p>Ah, também não entre em sites suspeitos e pegue leve no uso das redes sociais. Lembre-se que você está ali para trabalhar, ok?'
                        }, {
                            image: _.find(files, file => file.filename === 'Aula15_Rotinas-Adm_at5.png').fileUrl,
                            title: 'Alô, alô! O telefone também é da empresa!',
                            text: '<p>Você pode até usar o telefone da empresa pra fazer ligações pessoais, mas "tititi” com a namorada não rola, né? </p><p>Evite ligações demoradas e nada de discutir ou brigar pelo telefone.</p>Ligações para aquele primo que mora em outra cidade também não!'
                        },{
                          image: _.find(files, file => file.filename === 'Aula15_Rotinas-Adm_at6.png').fileUrl,
                          title: 'Tempo é dinheiro.',
                          text: 'Assim como os equipamentos da empresa, cuidar do tempo faz toda a diferença.  Quando você administra bem sua rotina, o trampo rende mais! Escolha uma agenda, pode ser um caderno ou no próprio celular, e anote tudo nela: data, horário e duração de cada atividade. Desse jeito, você nunca dá furo!'

                        }]

                    }
                }] //final do action
        })
    ]
);
