'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Historia de vida",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Propósito de vida')._id,
            ],
            description: 'Prepare-se para embarcar em uma jornada rumo a sua infância e adolescência, que vai te dar pistas importantes para seu presente e futuro. Vamos lá?',
            estimatedTime: '8',
            image: _.find(files, file => file.filename === 'Aula_01.png').fileUrl,
            activities: [{
                    name: 'Ser ou não ser, eis a questão',
                    description: undefined,
                    type: 'presentation',
                    presentation: {
                        title: 'Ser ou não ser, eis a questão',
                        description: 'Antes de entrar na sua história de vida, aperte o play. Tem alguém querendo te dar um toque sobre o seu passado!”',
                        image: _.find(files, file => file.filename === 'capa_historia_vida.png').fileUrl // TODO
                    },
                    contentFormat: 'video',
                    content: {
                        title: 'Ser ou não ser, eis a questão',
                        text: 'Antes de entrar na sua história de vida, aperte o play. Tem alguém querendo te dar um toque sobre o seu passado!”',
                        video: {
                            fileUrl: 'files/stream?type=videos&filename=' + '1-HISTORICO_DE_VIDA_online.mp4',
                            type: 'video/mp4'
                        },
                        subtitles: {
                            fileUrl: _.find(files, file => file.filename === 'Historia_de_vida.vtt').fileUrl,
                            label: 'Português'
                        }
                    }
                }, {
                    name: 'De volta para o passado',
                    description: undefined,
                    type: 'presentation',
                    presentation: {
                        title: 'De volta para o passado',
                        description: 'Você acha que se conhece bem? Então, vamos juntos nessa! Coloque os fones (se tiver) e dê o play no áudio!',
                        image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl // TODO
                    },
                    contentFormat: 'audio',
                    content: {
                        questions: [{
                            title: 'De volta para o passado',
                            text: 'Você acha que se conhece bem? Então, vamos juntos nessa! Coloque os fones (se tiver) e dê o play no áudio!',
                            image: _.find(files, file => file.filename === 'Aula01_Historia_at2.png').fileUrl,
                            audio: {
                                fileUrl: 'files/stream?type=audios&filename=' + 'Historia-de-vida-devoltaparaopassado.mp3',
                                type: 'audio/mpeg'
                            },
                            subtitles: {
                                fileUrl: _.find(files, file => file.filename === 'H_de_vida_devoltaparaopassado_correto.vtt').fileUrl, //TODO
                                label: 'English'
                            }
                        }]
                    }
                }, {
                    name: 'Álbum de infância',
                    description: '',
                    type: 'presentation',
                    presentation: {
                        title: 'Álbum de infância',
                        description: 'Agora que você relembrou momentos importantes da sua vida, vamos montar um álbum com fatos marcantes da sua infância.',
                        image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
                    },
                    contentFormat: 'add',
                    content: {
                        questions: [{
                            title: 'Família',
                            text: 'Clique e arraste para a fotografia qual(is) dessas brincadeira(s) mais fizeram parte da sua infância.',
                            background: _.find(files, file => file.filename === 'Aula01_Historia_at3.png').fileUrl,
                            baseResolution: {
                                width: 1080,
                                height: 860
                            },
                            layers: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at3_mae.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at3e.png').fileUrl,
                                category: 'A'
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at3_pai.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at3f.png').fileUrl,
                                category: 'B',
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at3_avo.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at3g.png').fileUrl,
                                category: 'C'
                            }, {
                                number: 4,
                                category: 'D',
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at3_outro.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at3h.png').fileUrl
                            }]
                        }, {
                            title: 'Infância',
                            text: 'Clique e arraste para a fotografia qual dessas brincadeiras mais fizeram parte da sua infância.',
                            background: _.find(files, file => file.filename === 'Aula01_Historia_at4.png').fileUrl,
                            baseResolution: {
                                width: 1080,
                                height: 860
                            },
                            layers: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at4a.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at4e.png').fileUrl,
                                category: 'A'
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at4d.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at4f.png').fileUrl,
                                category: 'B',
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at4b.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at4g.png').fileUrl,
                                category: 'C'
                            }, {
                                number: 4,
                                category: 'D',
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at4c.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at4h.png').fileUrl
                            }]
                        }, {
                            title: 'Escola',
                            text: 'Clique e arraste para a fotografia qual(is) dessas aula(s) você mais gostava.',
                            background: _.find(files, file => file.filename === 'Aula01_Historia_at5.png').fileUrl,
                            baseResolution: {
                                width: 1080,
                                height: 860
                            },
                            layers: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at5a.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at5h.png').fileUrl,
                                category: 'A'
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at5b.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at5f.png').fileUrl,
                                category: 'B'
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at5c.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at5e.png').fileUrl,
                                category: 'C'
                            }, {
                                number: 4,
                                category: 'D',
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at5d.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at5g.png').fileUrl
                            }]
                        }, {
                            title: 'Você e seus amigos',
                            text: 'Clique e arraste para a fotografia como você era entre os seus amigos.',
                            background: _.find(files, file => file.filename === 'Aula01_Historia_at6.png').fileUrl,
                            baseResolution: {
                                width: 1080,
                                height: 860
                            },
                            layers: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at6_agitador.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at6g.png').fileUrl,
                                category: 'A'
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at6_quieto.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at6f.png').fileUrl,
                                category: 'A'
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at6_nerd.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at6e.png').fileUrl,
                                category: 'A'
                            }, {
                                number: 4,
                                category: 'A',
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at6_tagarela.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at6h.png').fileUrl
                            }]
                        }, {
                            title: 'Passatempos',
                            text: 'Arraste para a fotografia qual desses passatempos que você mais gostava (ou ainda gosta!)',
                            background: _.find(files, file => file.filename === 'Aula01_Historia_at7.png').fileUrl,
                            baseResolution: {
                                width: 1080,
                                height: 860
                            },
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: 'Seu álbum de fotografias está completo e agora você tem uma visão melhor do que você é e das suas potencialidades. Vamos continuar explorando?',
                                type: 'positive'
                            }],
                            layers: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at7a.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at7h.png').fileUrl,
                                category: 'A'
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at7b.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at7e.png').fileUrl,
                                category: 'A'
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at7c.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at7f.png').fileUrl,
                                category: 'A'
                            }, {
                                number: 4,
                                category: 'A',
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at7d.png').fileUrl,
                                icon: _.find(files, file => file.filename === 'Aula01_Historia_at7g.png').fileUrl
                            }]
                        }]
                    }
                }, {
                    name: 'Teu passado te constrói',
                    description: '',
                    type: 'interaction',
                    presentation: {
                        title: 'Teu passado te constrói',
                        description: 'Agora que você entendeu que a história de vida influencia quem somos quando adultos, vamos mostrar adultos com suas profissões e você deverá relacionar qual lembrança é de qual.',
                        image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
                    },
                    contentFormat: 'simpleRelate',
                    content: {
                        questions: [{
                            title: 'Teu passado te constrói',
                            text: 'Luíza é enfermeira, Antônio é vendedor e João é financeiro. Arraste as lembranças de infância a cada um dos profissionais.',
                            draggableText: 'Amava cuidar dos outros',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8a.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8b.png').fileUrl
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8c.png').fileUrl
                            }],
                            correctAnswer: 1,
                        }, {
                            title: 'Teu passado te constrói',
                            text: 'Gabriel é arquiteto, Ana é fotógrafa e Joana é veterinária. Arraste as lembranças de infância a cada um dos profissionais.',
                            draggableText: 'Era amigo de todo mundo',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8a.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8b.png').fileUrl
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8c.png').fileUrl
                            }],
                            correctAnswer: 2,

                        }, {
                            title: 'Teu passado te constrói',
                            text: 'Luíza é enfermeira, Antônio é vendedor e João é financeiro. Lembranças de infâncias vão surgir e você deverá arrastá-las a cada um dos profissionais.',
                            draggableText: 'Era craque em quebra-cabeça',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8a.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8b.png').fileUrl
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8c.png').fileUrl
                            }],
                            correctAnswer: 3,

                        }, {

                            title: 'Teu passado te constrói',
                            text: 'Luíza é enfermeira, Antônio é vendedor e João é financeiro. Lembranças de infâncias vão surgir e você deverá arrastá-las a cada um dos profissionais.',
                            draggableText: 'Adorava aula de biologia',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8a.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8b.png').fileUrl
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8c.png').fileUrl
                            }],
                            correctAnswer: 1,

                        }, {
                            title: 'Teu passado te constrói',
                            text: 'Luíza é enfermeira, Antônio é vendedor e João é financeiro. Lembranças de infâncias vão surgir e você deverá arrastá-las a cada um dos profissionais.',
                            draggableText: 'Falava pelos cotovelos',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8a.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8b.png').fileUrl
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8c.png').fileUrl
                            }],
                            correctAnswer: 2,

                        }, {
                            title: 'Teu passado te constrói',
                            text: 'Luíza é enfermeira, Antônio é vendedor e João é financeiro. Lembranças de infâncias vão surgir e você deverá arrastá-las a cada um dos profissionais.',
                            // feedbacks: [{
                            //     title: 'Muito bem!',
                            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                            //     type: 'positive'
                            // }, {
                            //     title: 'Ooops!',
                            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                            //     type: 'negative'
                            // }],
                            draggableText: 'Colecionava moedas',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8a.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8b.png').fileUrl
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at8c.png').fileUrl
                            }],
                            correctAnswer: 3,

                        }, {
                            title: 'Teu passado te constrói',
                            text: '“Gabriel é arquiteto, Ana é fotógrafa e Joana é veterinária. Arraste as lembranças de infância a cada um dos profissionais.',
                            // feedbacks: [{
                            //     title: 'Muito bem!',
                            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                            //     type: 'positive'
                            // }, {
                            //     title: 'Ooops!',
                            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                            //     type: 'negative'
                            // }],
                            draggableText: 'Tinha 10 cachorros e amava todos eles!',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9c.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9b.png').fileUrl
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9a.png').fileUrl
                            }],
                            correctAnswer: 3,

                        }, {

                            title: 'Teu passado te constrói',
                            text: 'Gabriel é arquiteto, Ana é fotógrafa e Joana é veterinária. Lembranças de infâncias vão surgir e você deverá arrastá-las a cada um dos profissionais.',
                            // feedbacks: [{
                            //     title: 'Muito bem!',
                            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                            //     type: 'positive'
                            // }, {
                            //     title: 'Ooops!',
                            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                            //     type: 'negative'
                            // }],
                            draggableText: 'Vivia com blocos de montar',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9c.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9b.png').fileUrl
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9a.png').fileUrl
                            }],
                            correctAnswer: 1,


                        }, {
                            title: 'Teu passado te constrói',
                            text: 'Gabriel é arquiteto, Ana é fotógrafa e Joana é veterinária. Lembranças de infâncias vão surgir e você deverá arrastá-las a cada um dos profissionais.',
                            // feedbacks: [{
                            //     title: 'Muito bem!',
                            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                            //     type: 'positive'
                            // }, {
                            //     title: 'Ooops!',
                            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                            //     type: 'negative'
                            // }],
                            draggableText: 'Adorava paisagens bonitas',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9c.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9b.png').fileUrl
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9a.png').fileUrl
                            }],
                            correctAnswer: 2,


                        }, {
                            title: 'Teu passado te constrói',
                            text: 'Gabriel é arquiteto, Ana é fotógrafa e Joana é veterinária. Lembranças de infâncias vão surgir e você deverá arrastá-las a cada um dos profissionais.',
                            // feedbacks: [{
                            //     title: 'Muito bem!',
                            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                            //     type: 'positive'
                            // }, {
                            //     title: 'Ooops!',
                            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                            //     type: 'negative'
                            // }],
                            draggableText: 'Desenhava muito bem',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9c.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9b.png').fileUrl
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9a.png').fileUrl
                            }],
                            correctAnswer: 1,

                        }, {
                            title: 'Teu passado te constrói',
                            text: 'Gabriel é arquiteto, Ana é fotógrafa e Joana é veterinária. Lembranças de infâncias vão surgir e você deverá arrastá-las a cada um dos profissionais.',
                            // feedbacks: [{
                            //     title: 'Muito bem!',
                            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                            //     type: 'positive'
                            // }, {
                            //     title: 'Ooops!',
                            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                            //     type: 'negative'
                            // }],
                            draggableText: 'Achava gambás umas gracinhas',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9c.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9b.png').fileUrl
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9a.png').fileUrl
                            }],
                            correctAnswer: 3,

                        }, {
                            title: 'Teu passado te constrói',
                            text: 'Gabriel é arquiteto, Ana é fotógrafa e Joana é veterinária. Lembranças de infâncias vão surgir e você deverá arrastá-las a cada um dos profissionais.',
                            // feedbacks: [{
                            //     title: 'Muito bem!',
                            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                            //     type: 'positive'
                            // }, {
                            //     title: 'Ooops!',
                            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                            //     type: 'negative'
                            // }],
                            draggableText: 'Sempre juntava o povo pra uma foto',
                            alternatives: [{
                                number: 1,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9c.png').fileUrl
                            }, {
                                number: 2,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9b.png').fileUrl
                            }, {
                                number: 3,
                                image: _.find(files, file => file.filename === 'Aula01_Historia_at9a.png').fileUrl
                            }],
                            correctAnswer: 2,
                        }]
                    }
                }, {
                    name: 'Rodada de Fogo',
                    description: undefined,
                    type: 'interaction',
                    presentation: {
                        title: 'Rodada de Fogo',
                        description: 'Agora vamos ver se você tá sabendo tudo sobre o que precisa para descobrir sua jornada? ',
                        image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl // TODO
                    },
                    contentFormat: 'multipleQuiz',
                    content: {
                        questions: [{
                            title: 'Rodada de fogo.',
                            text: 'O que é propósito de vida?',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Mandou bem!',
                                text: '',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Ops! Propósito de vida é o sentido da sua vida e a sua contribuição para o mundo!',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'O sentido da vida e a minha contribuição para o mundo.',
                                letter: 'A'
                            }, {
                                option: 'O que a professora me disse que eu sou na escola.',
                                letter: 'B'
                            }, {
                                option: 'O trabalho que eu faço, mesmo se eu não me identifico com ele.',

                                letter: 'C'
                            }],
                            correctAnswer: 'A'
                        }, {
                            title: 'Rodada de fogo.',
                            text: 'Por que se conhecer é importante para decidir sua carreira?',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: '',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Ops! Como você vai decidir sua carreira sem saber quem você é e como você pode contribuir com o seu melhor? ',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'Quem disse que é importante?',
                                letter: 'A'
                            }, {
                                option: 'Porque se eu não sei quem eu sou, não consigo entender como posso contribuir com o meu melhor.',
                                letter: 'B'
                            }, {
                                option: 'Porque me conhecendo melhor os outros vão gostar mais de mim.',

                                letter: 'C'
                            }],
                            correctAnswer: 'B'
                        }, {
                            title: 'Rodada de fogo.',
                            text: 'Tudo o que a gente já viveu forma o jeito que vemos o mundo hoje. Por isso...',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: '',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Ops! Cada um tem uma forma única de ver as coisas, né?',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: '...cada um tem uma forma única de ver o mundo e a si mesmo.',
                                letter: 'A'
                            }, {
                                option: '...todo mundo tem a mesma visão do mundo e das pessoas.',
                                letter: 'B'
                            }, {
                                option: '..não importa o que aconteceu no passado.',

                                letter: 'C'
                            }],
                            correctAnswer: 'A'

                        }, {
                            title: 'De volta para o presente',
                            text: 'Às vezes as pessoas que estão à nossa volta conseguem enxergar a gente melhor do que nós mesmos!',
                            alternativesType: 'text',
                            feedbacks: [{
                                title: 'Muito bem!',
                                text: '',
                                type: 'positive'
                            }, {
                                title: 'Ooops!',
                                text: 'Ops! Às vezes as pessoas que estão à nossa volta conseguem enxergar a gente melhor do que nós mesmos!',
                                type: 'negative'
                            }],
                            alternatives: [{
                                option: 'Pode crer, às vezes meus amigos dizem coisas de mim que eu nem imaginava.',
                                letter: 'A'
                            }, {
                                option: 'Nada a ver! Eu sei exatamente quem eu sou e não preciso de ninguém para me ajudar',
                                letter: 'B'
                            }, {
                                option: 'Quem vive de passado é museu. O que passou, passou!',
                                letter: 'C'
                            }],
                            correctAnswer: 'A'

                        }]
                    }

                }] // final do activities
        })
    ]
);
