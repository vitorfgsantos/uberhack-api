'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Rotinas Bancárias",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Processo seletivo')._id,
            ],
            description: 'Você sabe fazer um pagamento? Uma transferência? Verificar um extrato? Essas rotinas bancárias são muito importantes para acompanhar as  finanças de uma empresa e até da sua vida! Tá pronto pra ter tudo na ponta do lápis?',
            estimatedTime: '5',
            image: _.find(files, file => file.filename === 'Aula_13.png').fileUrl,
            activities: [{
              name: 'Entrevista marcada. Não dê mancada!',
              description: undefined,
              type: 'presentation',
              contentFormat: 'slides',
              content: {
                slides: [{
                    image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at1.png').fileUrl,
                    title: 'Leve o banco com você.',
                    text: 'Você sabia que não precisa sair do trabalho para transferir aquela grana para o seu colega ou pagar aquele fornecedor? Dá pra fazer tudo pelo Internet Banking. É tipo um banco dentro do seu computador ou celular.'

          }]
        }
      },{
        name: 'Você sabe como fazer um pagamento?',
        description: undefined,
        type: 'interaction',
        presentation: {
            title: 'Você sabe como fazer um pagamento?',
            description: 'Existem diferentes maneiras de fazer pagamentos. Para cada situação, tem sempre uma forma que é mais indicada. E você? Sabe como pagar cada coisa?',
            image: _.find(files, file => file.filename === 'capa_drag.png').fileUrl
        },
        contentFormat: 'simpleRelate',
        content: {
          questions: [{
              title: 'Você sabe como fazer um pagamento? ',
              text: 'Mostre que você manda bem no pagamento de contas e arraste cada situação à forma de pagamento mais adequada.',
              // feedbacks: [{
              //     title: 'Muito bem!',
              //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
              //     type: 'positive'
              // }, {
              //     title: 'Ooops!',
              //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
              //     type: 'negative'
              // }],
              draggableText: 'Comprar frutas na feira',
              alternatives: [{
                  number: 1,
                  image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2b.png').fileUrl
              }, {
                  number: 2,
                  image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2g.png').fileUrl
              }, {
                  number: 3,
                  image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2d.png').fileUrl
              }],
              correctAnswer: 1,
          },{
            title: 'Você sabe como fazer um pagamento? ',
            text: 'Mostre que você manda bem no pagamento de contas e arraste cada situação à forma de pagamento mais adequada.',
            // feedbacks: [{
            //     title: 'Muito bem!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'positive'
            // }, {
            //     title: 'Ooops!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'negative'
            // }],
            draggableText: 'Comprar ingressos pela internet',
            alternatives: [{
                number: 1,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2b.png').fileUrl
            }, {
                number: 2,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2g.png').fileUrl
            }, {
                number: 3,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2d.png').fileUrl
            }],
            correctAnswer: 2,
          },{
            title: 'Você sabe como fazer um pagamento? ',
            text: 'Mostre que você manda bem no pagamento de contas e arraste cada situação à forma de pagamento mais adequada.',
            // feedbacks: [{
            //     title: 'Muito bem!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'positive'
            // }, {
            //     title: 'Ooops!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'negative'
            // }],
            draggableText: 'Comprar o bilhete do metrô',
            alternatives: [{
                number: 1,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2b.png').fileUrl
            }, {
                number: 2,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2g.png').fileUrl
            }, {
                number: 3,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2d.png').fileUrl
            }],
            correctAnswer: 1,
          },{
            title: 'Você sabe como fazer um pagamento? ',
            text: 'Mostre que você manda bem no pagamento de contas e arraste cada situação à forma de pagamento mais adequada.',
            // feedbacks: [{
            //     title: 'Muito bem!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'positive'
            // }, {
            //     title: 'Ooops!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'negative'
            // }],
            draggableText: 'Mandar grana para outra conta',
            alternatives: [{
                number: 1,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2b.png').fileUrl
            }, {
                number: 2,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2g.png').fileUrl
            }, {
                number: 3,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2d.png').fileUrl
            }],
            correctAnswer: 3,
          },{
            title: 'Você sabe como fazer um pagamento? ',
            text: 'Mostre que você manda bem no pagamento de contas e arraste cada situação à forma de pagamento mais adequada.',
            // feedbacks: [{
            //     title: 'Muito bem!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'positive'
            // }, {
            //     title: 'Ooops!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'negative'
            // }],
            draggableText: 'Pagar um funcionário',
            alternatives: [{
                number: 1,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2b.png').fileUrl
            }, {
                number: 2,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2g.png').fileUrl
            }, {
                number: 3,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2d.png').fileUrl
            }],
            correctAnswer: 3,
          },{
            title: 'Você sabe como fazer um pagamento? ',
            text: 'Mostre que você manda bem no pagamento de contas e arraste cada situação à forma de pagamento mais adequada.',
            // feedbacks: [{
            //     title: 'Muito bem!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'positive'
            // }, {
            //     title: 'Ooops!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'negative'
            // }],
            draggableText: 'Comprar parcelado',
            alternatives: [{
                number: 1,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2b.png').fileUrl
            }, {
                number: 2,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2g.png').fileUrl
            }, {
                number: 3,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2d.png').fileUrl
            }],
            correctAnswer: 2,
          },{
            title: 'Você sabe como fazer um pagamento? ',
            text: 'Agora, veja outras situações e arraste as formas de pagamento mais usadas.',
            // feedbacks: [{
            //     title: 'Muito bem!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'positive'
            // }, {
            //     title: 'Ooops!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'negative'
            // }],
            draggableText: 'Mensalidade da academia',
            alternatives: [{
                number: 1,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2a.png').fileUrl
            }, {
                number: 2,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2f.png').fileUrl
            }, {
                number: 3,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2e.png').fileUrl
            }],
            correctAnswer: 1,
          },{
            title: 'Você sabe como fazer um pagamento? ',
            text: 'Agora, veja outras situações e arraste as formas de pagamento mais usadas.',
            // feedbacks: [{
            //     title: 'Muito bem!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'positive'
            // }, {
            //     title: 'Ooops!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'negative'
            // }],
            draggableText: 'Comprar pipoca no cinema',
            alternatives: [{
                number: 1,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2a.png').fileUrl
            }, {
                number: 2,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2f.png').fileUrl
            }, {
                number: 3,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2e.png').fileUrl
            }],
            correctAnswer: 2,
          },{
            title: 'Você sabe como fazer um pagamento? ',
            text: 'Agora, veja outras situações e arraste as formas de pagamento mais usadas.',
            // feedbacks: [{
            //     title: 'Muito bem!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'positive'
            // }, {
            //     title: 'Ooops!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'negative'
            // }],
            draggableText: 'Compra do supermercado',
            alternatives: [{
                number: 1,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2a.png').fileUrl
            }, {
                number: 2,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2f.png').fileUrl
            }, {
                number: 3,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2e.png').fileUrl
            }],
            correctAnswer: 2,
          },{
            title: 'Você sabe como fazer um pagamento? ',
            text: 'Agora, veja outras situações e arraste as formas de pagamento mais usadas.',
            // feedbacks: [{
            //     title: 'Muito bem!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'positive'
            // }, {
            //     title: 'Ooops!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'negative'
            // }],
            draggableText: 'Pagar o dentista',
            alternatives: [{
                number: 1,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2a.png').fileUrl
            }, {
                number: 2,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2f.png').fileUrl
            }, {
                number: 3,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2e.png').fileUrl
            }],
            correctAnswer: 3,
          },{
            title: 'Você sabe como fazer um pagamento? ',
            text: 'Agora, veja outras situações e arraste as formas de pagamento mais usadas.',
            // feedbacks: [{
            //     title: 'Muito bem!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'positive'
            // }, {
            //     title: 'Ooops!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'negative'
            // }],
            draggableText: 'Conta de luz',
            alternatives: [{
                number: 1,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2a.png').fileUrl
            }, {
                number: 2,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2f.png').fileUrl
            }, {
                number: 3,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2e.png').fileUrl
            }],
            correctAnswer: 1,
          },{
            title: 'Você sabe como fazer um pagamento? ',
            text: 'Agora, veja outras situações e arraste as formas de pagamento mais usadas.',
            // feedbacks: [{
            //     title: 'Muito bem!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'positive'
            // }, {
            //     title: 'Ooops!',
            //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            //     type: 'negative'
            // }],
            draggableText: 'Alugar uma casa na praia',
            alternatives: [{
                number: 1,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2a.png').fileUrl
            }, {
                number: 2,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2f.png').fileUrl
            }, {
                number: 3,
                image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2e.png').fileUrl
            }],
            correctAnswer: 3,
          }]
        }

      },{
        name: 'Vai pagar como?',
        description: undefined,
        type: 'interaction',
        presentation: {
            title: 'Vai pagar como?',
            description: 'Agora que você já sabe que forma de pagamento usar em cada situação, fique ligado! Em muitos casos, é possível realizar o pagamento de diversas maneiras. Quer ver?',
            image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
        },
        contentFormat: 'multipleQuiz',
        content: {
          questions: [{
            title: 'Vai pagar como?',
            text: 'Os papéis da sua impressora acabaram! Você vai no site que vende pela internet e, na hora de pagar, vê que tem um monte de opções. Mostre a única que não está na lista. ',
            alternativesType: 'image',
            feedbacks: [{
                title: 'Show!',
                text: 'Não dá pra usar dinheiro nas compras feitas pela internet.',
                type: 'positive'
            }, {
                title: 'Nada disso.',
                text: 'O que não dá pra usar nas compras pela internet é dinheiro.',
                type: 'negative'
            }],
            alternatives: [{
                option: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2i.png').fileUrl,
                letter: 'A'
            }, {
                option: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at3a.png').fileUrl,
                letter: 'B'
            }, {
                option: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at4b.png').fileUrl,
                letter: 'C'
            }, {
                option: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at4c.png').fileUrl,
                letter: 'D'
            }],
            correctAnswer: 'C'

          },{
            title: 'Vai pagar como?',
            text: 'Seu chefe vai viajar para os Estados Unidos e você tem que dar aquela força nos preparativos! Selecione a opção que ele não deve levar na carteira.',
            alternativesType: 'image',
            feedbacks: [{
                title: 'Mandou bem!',
                text: 'Os cheques dos bancos daqui não são aceitos em outros países.',
                type: 'positive'
            }, {
                title: 'Mandou mal!',
                text: 'Dessa lista, só o talão de cheques não é aceito em outros países.',
                type: 'negative'
            }],
            alternatives: [{
                option: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2h.png').fileUrl,
                letter: 'A'
            }, {
                option: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at2g.png').fileUrl,
                letter: 'B'
            }, {
                option: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at5a.png').fileUrl,
                letter: 'C'
            }, {
                option: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at5d.png').fileUrl,
                letter: 'D'
            }],
            correctAnswer: 'A'

          },{
            title: 'Vai pagar como?',
            text: 'Que legal! Você se matriculou numa escola de inglês! Agora, tem que pagar as mensalidades… Qual das formas de pagamento abaixo a escola não aceita?',
            alternativesType: 'image',
            feedbacks: [{
                title: 'Boa!',
                text: 'O pay pal só é usado em compras feitas pela internet.',
                type: 'positive'
            }, {
                title: 'Mandou mal!',
                text: 'Ops... o que não dá é pagar com Pay Pal. Ele só é usado nas compras pela internet.',
                type: 'negative'
            }],
            alternatives: [{
                option: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at6d.png').fileUrl,
                letter: 'A'
            }, {
                option: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at6b.png').fileUrl,
                letter: 'B'
            }, {
                option: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at6a.png').fileUrl,
                letter: 'C'
            }, {
                option: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at6c.png').fileUrl,
                letter: 'D'
            }],
            correctAnswer: 'D'

          }]
      }
    },{
      name: 'Tudo sob controle.',
      description: undefined,
      type: 'presentation',
      presentation: {
          title: 'Tudo sob controle.',
          description: '<p>Quando a grana está toda no seu bolso, é fácil saber o que entra e o que sai. Mas e quando ela está no banco?</p><p>Se liga nessa atividade que nós vamos te mostrar como fazer esse controle de um jeito fácil e sem drama! Vamos lá?</p>', // TODO
          image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
      },
      contentFormat: 'slides',
      content: {
        slides: [{
            image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at7.png').fileUrl,
            title: 'Na dúvida, tire um extrato.',
            text: '<p>O salário do mês, o lanche que pagou com o cartão, a grana que sacou pro busão… tudo isso fica registrado no Extrato Bancário.</p><p>Mas, fique ligado: extrato é diferente de saldo. Saldo só mostra o que você tem na conta. Já o extrato traz tudo detalhado.</p>'
        },{
            image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at8.png').fileUrl,
            title: 'Extrato não é coisa de outro mundo!',
            text: '<p>É fácil de conseguir um.</p><p>Pela internet: basta acessar a página inicial do banco, inserir o número da sua agência, da sua conta, digitar sua senha, selecionar para ver a conta corrente e depois clicar em extrato.</p>Pelo caixa eletrônico: insira o cartão da conta e siga as instruções da tela. Se tiver dúvidas, peça ajuda para um funcionário do banco. Eles estão ali pra isso!'
        },{
            image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at9.png').fileUrl,
            title: 'Decifrando o que ele diz.',
            text: '<p>Alguns bancos usam cores ou sinais para mostrar </p><p>o que entrou e o que saiu da conta:</p><p>Sinal de menos e cor vermelha = Xiii… esses são seus gastos!</p><p>Nenhum sinal e cor preta = Oba!! esses são créditos!</p><p>Outros bancos usam siglas:</p><p>C = créditos (grana que entrou… uhuuuu!)</p>D = débito (grana que saiu… ai, ai... )'
        },{
          image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at10.png').fileUrl,
          title: 'Isso vale para a empresa também!',
          text: '<p>A empresa, chamada de Pessoa Jurídica, também tem extrato e você precisa ficar esperto!</p><p>Não vacile e guarde todas as notas fiscais, faturas, boletos bancários e outros documentos. </p><p>Quando você tem tudo sob controle, nada te pega de surpresa.</p>'
        }]
      }
    },{
      name: 'Desafio: Fique no azul.',
      description: undefined,
      type: 'interaction',
      presentation: {
        title: 'Desafio: Fique no azul.',
        description: 'Agora, se o trampo for informal, como eles devem se vestir? Clique, arraste e adicione 1 item para cada um para ficar ideal.',
        image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl,
      },
        contentFormat: 'add',
        content:{
          questions:[{
          title: 'Desafio: Fique no azul.',
          text: 'Antonio e Maria entraram em um emprego formal. Clique, arraste e adicione 1 item para cada um para ficar com o visual ideal.',
          background: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at11.png').fileUrl,
          baseResolution: {
              width: 1080,
              height: 860
          },
          feedbacks: [{
              title: 'Muito bem!',
              text: 'A data sempre vem do lado esquerdo da transação, mostrando o dia em que ela foi realizada, e o pagamento tem que entrar como um valor negativo, já que a grana saiu da conta! ',
              type: 'positive'
          }, {
              title: 'Quase lá!',
              text: 'A data sempre vem do lado esquerdo da transação, mostrando o dia em que ela foi realizada, e o pagamento tem que entrar como um valor negativo, já que a grana saiu da conta! ',
              type: 'intermediate'
          }, {
              title: 'Ooops!',
              text: 'A data sempre vem do lado esquerdo da transação, mostrando o dia em que ela foi realizada, e o pagamento tem que entrar como um valor negativo, já que a grana saiu da conta! ',
              type: 'negative'
          }],
          layers: [{
              number: 1,
              image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at11bb.png').fileUrl,
              icon: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at11c.png').fileUrl,
              category: 'B',
              tickPosition: {
                  x: 102,
                  y: 549
              }
          }, {
              number: 2,
              image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at11b.png').fileUrl,
              icon: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at11d.png').fileUrl,
              category: 'A',
              tickPosition: {
                  x: 823,
                  y: 543
              }
          }, {
              number: 3,
              image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at11aa.png').fileUrl,
              icon: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at11e.png').fileUrl,
              category: 'A',
              tickPosition: {
                x: 823,
                y: 543
              }
          }, {
              number: 4,
              category: 'B',
              image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at11a.png').fileUrl,
              icon: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at11f.png').fileUrl,
              tickPosition: {
                x: 102,
                y: 549
              }
          }],
          correctLayers: [2, 4]
        },{
          title: 'Desafio: Fique no azul.',
          text: 'E agora? Quais itens você deve colocar para completar o extrato?',
          background: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at12.png').fileUrl,
          baseResolution: {
              width: 1080,
              height: 860
          },
          feedbacks: [{
              title: 'Muito bem!',
              text: 'Como era um recebimento, o valor tem que ser positivo. Afinal, entrou dinheiro na conta da empresa! Já o número da agência e conta geralmente fica na parte superior do extrato.',
              type: 'positive'
          }, {
              title: 'Quase lá!',
              text: 'Como era um recebimento, o valor tem que ser positivo. Afinal, entrou dinheiro na conta da empresa! Já o número da agência e conta geralmente fica na parte superior do extrato.',
              type: 'intermediate'
          }, {
              title: 'Ooops!',
              text: 'Como era um recebimento, o valor tem que ser positivo. Afinal, entrou dinheiro na conta da empresa! Já o número da agência e conta geralmente fica na parte superior do extrato.',
              type: 'negative'
          }],
          layers: [{
              number: 1,
              image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at12a.png').fileUrl,
              icon: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at12c.png').fileUrl,
              category: 'A',
              tickPosition: {
                  x: 659,
                  y: 35
              }
          }, {
              number: 2,
              image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at12bb.png').fileUrl,
              icon: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at12d.png').fileUrl,
              category: 'A',
              tickPosition: {
                x: 659,
                y: 35
              }
          }, {
              number: 3,
              image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at12b.png').fileUrl,
              icon: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at12e.png').fileUrl,
              category: 'B',
              tickPosition: {
                x: 825,
                y: 458
              }
          }, {
              number: 4,
              category: 'B',
              image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at12aa.png').fileUrl,
              icon: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at12f.png').fileUrl,
              tickPosition: {
                x: 825,
                y: 458
              }
          }],
          correctLayers: [1, 3]

        },{
          title: 'Desafio: Fique no azul.',
          text: 'Boa! Agora vamos ficar no azul? Arraste as duas opções que deixariam o extrato da empresa positivo.',
          background: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at13.png').fileUrl,
          baseResolution: {
              width: 1080,
              height: 860
          },
          feedbacks: [{
              title: 'Muito bem!',
              text: 'Perfeito! Você fez a conta certa! Para ficar com dinheiro sobrando na conta, a empresa tem que gastar menos do que recebeu.',
              type: 'positive'
          }, {
              title: 'Quase lá!',
              text: 'Perfeito! Você fez a conta certa! Para ficar com dinheiro sobrando na conta, a empresa tem que gastar menos do que recebeu.',
              type: 'intermediate'
          }, {
              title: 'Ooops!',
              text: 'Perfeito! Você fez a conta certa! Para ficar com dinheiro sobrando na conta, a empresa tem que gastar menos do que recebeu.',
              type: 'negative'
          }],
          layers: [{
              number: 1,
              image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at13b.png').fileUrl,
              icon: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at13c.png').fileUrl,
              category: 'A',
              tickPosition: {
                  x: 811,
                  y: 427
              }
          }, {
              number: 2,
              image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at13a.png').fileUrl,
              icon: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at13d.png').fileUrl,
              category: 'B',
              tickPosition: {
                  x: 832,
                  y: 564
              }
          }, {
              number: 3,
              image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at13bb.png').fileUrl,
              icon: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at13e.png').fileUrl,
              category: 'A',
              tickPosition: {
                x: 811,
                y: 427
              }
          }, {
              number: 4,
              category: 'B',
              image: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at13aa.png').fileUrl,
              icon: _.find(files, file => file.filename === 'Aula16_Rotinas_Bancarias_at13f.png').fileUrl,
              tickPosition: {
                x: 832,
                y: 564
              }
          }],
          correctLayers: [1, 2]
          //colocar o ultimo aqui
        }]
      }
    }]//final do action
    })
  ]
);
