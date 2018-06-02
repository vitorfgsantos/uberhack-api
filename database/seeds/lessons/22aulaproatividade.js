
'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Proatividade",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Propósito de vida')._id,
            ],
            description: 'Você se antecipa aos acontecimentos? Age antes das pessoas pedirem? Coloca suas ideias em prática? Então, você é proativo! Mas, se você ainda não tem essas habilidades, relaxa! Sempre é tempo de aprender e se aprimorar. Comece seguindo esta aula!',
            estimatedTime: '7',
            image: _.find(files, file => file.filename === 'Aula_03.png').fileUrl,
            activities: [{
              name: 'Tudo é questão de atitude.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Sonhando acordado.',
                  description: 'Lucas é uma cara tão proativo que antecipou um pouco do conteúdo da aula neste vídeo. Assiste aí!!',
                  image: _.find(files, file => file.filename === 'capa_historia_vida.png').fileUrl // TODO
              },
              contentFormat: 'video',
              content: {
                  title: 'Quem é proativo?',
                  text: 'Atitudes proativas são sempre muito bem-vindas. Saber diferenciar quando é e quando não é vai te ajudar a avaliar suas atitudes e descobrir como melhorá-las. É isso que vamos testar agora.',
                  video: {
                      fileUrl: 'files/stream?type=videos&filename=' + '5-PROATIVIDADE_online.mp4',//TODO
                      type: 'video/mp4'
                  }
              }
            },{
              name: 'Quem é proativo?',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Quem é proativo?',
                  description: 'Você deve estar se perguntando: quanto tempo um documento precisa ser guardado?  Depende. Alguns carnês, 2 anos. Pagamentos de serviços, 5 anos. E os que comprovam tempo de contribuição, mais de 10 anos! ',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'simpleRelate',
              content: {
              questions: [{
                title: 'Quem é proativo?',
                text: 'Caio é proativo e está sempre olhando à frente e se antecipando. Já Helena espera as coisas acontecerem pra tomar alguma atitude. Clique e arraste as atitudes relacionadas a cada um.',
                draggableText: 'adora mudanças',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1b.png').fileUrl
                }],
                correctAnswer: 1,
              },{
                title: 'Quem é proativo?',
                text: 'Caio é proativo e está sempre olhando à frente e se antecipando. Já Helena espera as coisas acontecerem pra tomar alguma atitude. Clique e arraste as atitudes relacionadas a cada um.',
                draggableText: 'deixa tudo para a última hora',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1b.png').fileUrl
                }],
                correctAnswer: 2,
              },{
                title: 'Quem é proativo?',
                text: 'Caio é proativo e está sempre olhando à frente e se antecipando. Já Helena espera as coisas acontecerem pra tomar alguma atitude. Clique e arraste as atitudes relacionadas a cada um.',
                draggableText: 'coloca as ideias em prática',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1b.png').fileUrl
                }],
                correctAnswer: 1,
              },{
                title: 'Quem é proativo?',
                text: 'Caio é proativo e está sempre olhando à frente e se antecipando. Já Helena espera as coisas acontecerem pra tomar alguma atitude. Clique e arraste as atitudes relacionadas a cada um.',
                draggableText: 'age antes do chefe pedir',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1b.png').fileUrl
                }],
                correctAnswer: 1,
              },{
                title: 'Quem é proativo?',
                text: 'Caio é proativo e está sempre olhando à frente e se antecipando. Já Helena espera as coisas acontecerem pra tomar alguma atitude. Clique e arraste as atitudes relacionadas a cada um.',
                draggableText: 'não curte novidades',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1b.png').fileUrl
                }],
                correctAnswer: 2,
              },{
                title: 'Quem é proativo?',
                text: 'Caio é proativo e está sempre olhando à frente e se antecipando. Já Helena espera as coisas acontecerem pra tomar alguma atitude. Clique e arraste as atitudes relacionadas a cada um.',
                draggableText: 'gosta de trabalhar em equipe',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1b.png').fileUrl
                }],
                correctAnswer: 1,
              },{
                title: 'Quem é proativo?',
                text: 'Caio é proativo e está sempre olhando à frente e se antecipando. Já Helena espera as coisas acontecerem pra tomar alguma atitude. Clique e arraste as atitudes relacionadas a cada um.',
                draggableText: 'é antenado com tudo',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1b.png').fileUrl
                }],
                correctAnswer: 1,
              },{
                title: 'Quem é proativo?',
                text: 'Caio é proativo e está sempre olhando à frente e se antecipando. Já Helena espera as coisas acontecerem pra tomar alguma atitude. Clique e arraste as atitudes relacionadas a cada um.',
                draggableText: 'enfrenta as dificuldades ',
                alternatives: [{
                    number: 1,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1a.png').fileUrl
                }, {
                    number: 2,
                    image: _.find(files, file => file.filename === 'Aula22_proatividade_at1b.png').fileUrl
                }],
                correctAnswer: 1,
              }]}
            },{
              name: 'Eu chego lá!',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Eu chego lá!',
                  description: 'Se liga nessa atividade, pois vamos mostrar como as atitudes proativas ajudam as pessoas a crescerem profissionalmente e conquistarem cargos de liderança.',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'map',
              content: {
                title: 'Eu chego lá!',
                text: 'Esta é a estrutura de uma empresa. Chama-se organograma! Vamos dar uma passeada por ela e descobrir por que as pessoas estão em cada cargo?',
                background: _.find(files, file => file.filename === 'Aula22_proatividade_at2.png').fileUrl,
                baseResolution:{
                    width: 1080,
                    height: 1020
                },
                mapping: [{
                    coordinates: '532,615,429,615,421,724,672,721,666,614',
                    shape: 'poly',
                    tickPosition: {
                        x: 483,
                        y: 616
                    },
                    feedback: {
                        title: 'Arquivo. O que é?',
                        text: 'Arquivo é aquele conjunto de documentos que você precisa guardar para provar algum tipo de atividade ou ação. Não pense que arquivos são só papéis e pastas! Eles podem ter diversos formatos ou suportes.',
                        image: _.find(files, file => file.filename === 'Aula22_proatividade_at3.png').fileUrl
                    }
                },{
                    coordinates: "435,480,428,587,668,586,662,483",
                    shape: 'poly',
                    tickPosition: {
                        x: 483,
                        y: 483
                    },
                    feedback: {
                        title: 'Como guardar?',
                        text: 'Fique esperto e mantenha sempre os arquivos em local seguro contra incêndio, extravio, roubo e deterioração. Além disso, tente organizar de forma que sejam facilmente localizados, acessados e compreendidos por todos. Afinal, o arquivo também é uma fonte de consultas.',
                        image: _.find(files, file => file.filename === 'Aula22_proatividade_at4.png').fileUrl,
                    }
                },{
                  coordinates: "440,354,425,452,666,455,660,361",
                  shape: 'poly',
                  tickPosition: {
                      x: 483,
                      y: 348
                  },
                  feedback: {
                      title: 'Documentos físicos e eletrônicos.',
                      text: 'Documento não é só seu RG ou CPF, mas tudo o que você precisa guardar.  Existem documentos físicos, basicamente papéis, e documentos digitais, que são arquivos de Word, Excel, Power Point, entre outros. Um documento físico pode ser tornar digital se for escaneado. ',
                      image: _.find(files, file => file.filename === 'Aula22_proatividade_at5.png').fileUrl,
                  }

                },{
                  coordinates: '416,168,379,217,423,280,663,261',
                  shape: 'poly',
                  tickPosition: {
                      x: 483,
                      y: 166
                  },
                  feedback: {
                      title: 'Tipos de arquivos.',
                      text: '<p>Os arquivos são divididos em 3 tipos:</p><p>Ativos: que precisam ser sempre consultados.</p><p>Inativos: que têm pouca frequência de consulta.</p><p>Morto: que quase não é acessado, mas que deve ser organizado como os outros.</p>',
                      image: _.find(files, file => file.filename === 'Aula22_proatividade_at6.png').fileUrl
                  }
                }]}
            },{
              name: 'Ser proativo ajuda muito.',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Ser proativo ajuda muito.',
                  description: ' Você sabia que pessoas proativas fazem muita diferença em uma empresa? E você, se acha proativo? Descubra indicando as respostas corretas para as situações a seguir.',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
              },
              contentFormat: 'multipleQuiz',
              content: {
              questions: [{
                title: 'Ser proativo ajuda muito.',
                text: 'A galera do seu departamento está meio ‘deprê’ por causa de uns resultados da empresa que não foram legais. O que você faz? ',
                alternativesType: 'text',
                feedbacks: [{
                    title: 'É isso aí!',
                    text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                    type: 'positive'
                }, {
                    title: 'Nada disso!',
                    text: 'Pessoas proativas são otimistas e estimulam seus colegas.',
                    type: 'negative'
                }],
                alternatives: [{
                    option: 'Diz que isso é só o começo e que vai piorar ainda mais.',
                    letter: 'A'
                }, {
                    option: 'Tenta levantar o astral da galera, dando soluções para melhorar os resultados.',
                    letter: 'B'
                }, {
                    option: 'Fica desanimado também e diz para todo mundo que vai procurar outro trampo.',
                    letter: 'C'
                }],
                correctAnswer: 'B'
              },{
                title: 'Ser proativo ajuda muito.',
                text: 'Ainda é segunda-feira, mas você está cheio de trabalho e sabe que tem que entregar um relatório na sexta. E aí? Como você se sai? ',
                alternativesType: 'text',
                feedbacks: [{
                    title: 'Boa!',
                    text: 'Pessoas proativas se organizam e não deixam nada para depois.',
                    type: 'positive'
                }, {
                    title: 'Errou… ',
                    text: 'Pessoas proativas se organizam e não fazem corpo mole.',
                    type: 'negative'
                }],
                alternatives: [{
                    option: 'Diz que isso é só o começo e que vai piorar ainda mais.',
                    letter: 'A'
                }, {
                    option: 'Tenta levantar o astral da galera, dando soluções para melhorar os resultados.',
                    letter: 'B'
                }, {
                    option: 'Fica desanimado também e diz para todo mundo que vai procurar outro trampo.',
                    letter: 'C'
                }],
                correctAnswer: 'C'
              },{
                title: 'Ser proativo ajuda muito.',
                text: 'Você sai todo dia do trabalho às 18h30 e aproveita as noites livres para….',
                alternativesType: 'text',
                feedbacks: [{
                    title: 'Legal!',
                    text: 'Quem é proativo não se acomoda e tenta saber sempre mais!',
                    type: 'positive'
                }, {
                    title: 'Humm… ',
                    text: 'não seria melhor buscar novos conhecimentos para não ficar fazendo sempre as mesmas funções? ',
                    type: 'negative'
                }],
                alternatives: [{
                    option: 'Fazer cursos, ler e se atualizar sobre os mais diferentes assuntos.',
                    letter: 'A'
                }, {
                    option: 'zzzzzzzzzzzzzzz…...Dormir!!!',
                    letter: 'B'
                }, {
                    option: 'Ficar passando piadinhas para os amigos pelo whatsapp.',
                    letter: 'C'
                }],
                correctAnswer: 'A'
              },{
                title: 'Ser proativo ajuda muito.',
                text: 'Um colega de outro departamento veio terminar um trampo na mesa ao lado da sua. O que você faz?',
                alternativesType: 'text',
                feedbacks: [{
                    title: 'Legal!',
                    text: 'Quem é proativo não se acomoda e tenta saber sempre mais!',
                    type: 'positive'
                }, {
                    title: 'Humm… ',
                    text: 'não seria melhor buscar novos conhecimentos para não ficar fazendo sempre as mesmas funções? ',
                    type: 'negative'
                }],
                alternatives: [{
                    option: 'Se finge de morto. Vai que ele te pede alguma coisa, né?',
                    letter: 'A'
                }, {
                    option: 'Se interessa pelo trabalho e pede para ele te mostrar o que está fazendo.',
                    letter: 'B'
                }, {
                    option: 'Vira o seu monitor para o outro lado para ele não ver o que você está fazendo.',
                    letter: 'C'
                }],
                correctAnswer: 'B'
              },{
                title: 'Ser proativo ajuda muito.',
                text: 'Você vê que a galera está imprimindo muita coisa sem necessidade. E aí? Você faz o quê?',
                alternativesType: 'text',
                feedbacks: [{
                    title: 'Boa atitude!',
                    text: 'Proatividade é pensar como o dono do negócio e evitar desperdício.',
                    type: 'positive'
                }, {
                    title: 'Mandou mal!',
                    text: 'Proatividade é pensar como o dono do negócio e evitar desperdício.',
                    type: 'negative'
                }],
                alternatives: [{
                    option: 'Fica na sua. Isso não é problema seu!',
                    letter: 'A'
                }, {
                    option: 'Aproveita para imprimir um monte de coisas pessoais também.',
                    letter: 'B'
                }, {
                    option: 'Faz um e-mail falando do desperdício de papel, de tinta e de energia e pede para todos colaborarem, imprimindo só o necessário.',
                    letter: 'C'
                }],
                correctAnswer: 'C'
              },{
                title: 'Ser proativo ajuda muito.',
                text: 'O pessoal da outra área está lançando um produto novo e você teve uma ideia genial. E aí? ',
                alternativesType: 'text',
                feedbacks: [{
                    title: 'Boa atitude!',
                    text: 'Proatividade é pensar como o dono do negócio e evitar desperdício.',
                    type: 'positive'
                }, {
                    title: 'Mandou mal!',
                    text: 'Proatividade é pensar como o dono do negócio e evitar desperdício.',
                    type: 'negative'
                }],
                alternatives: [{
                    option: 'Você guarda a ideia para não dar uma de intrometido.',
                    letter: 'A'
                }, {
                    option: 'Você mostra a ideia para eles e tenta colocá-la em prática.',
                    letter: 'B'
                }, {
                    option: 'Você começa a ver um monte de problemas, acaba achando que a ideia não é tão boa assim e desiste dela.  ',
                    letter: 'C'
                }],
                correctAnswer: 'B'
              }]}
            },{
              name: 'Falou tudo!',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Falou tudo!',
                  description: 'Agora que você já entendeu o que é proatividade, vamos testar um diálogo direto com o chefe do Edu, completando a conversa com as respostas certas.',
                  image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
              },
              contentFormat: 'add',
              content: {
              questions: [{
                  title: 'Falou tudo!',
                  text: 'Clique e arraste as respostas para completar a conversa de Whatsapp do Edu com o chefe. Ah, e lembre-se: o Edu é um cara proativo!',
                  background: _.find(files, file => file.filename === 'Aula22_proatividade_at7.png').fileUrl,
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
            }]//final do action
          })
    ]
);
