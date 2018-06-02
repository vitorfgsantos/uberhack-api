'use strict';

const _ = require('lodash');
const Lesson = require('../../../src/models/lessonModel').Lesson;

module.exports = (files, categories, scores, achievements) => (
    [
        new Lesson({
            name: "Apresentação em público",
            source: undefined,
            categories: [
                _.find(categories, category => category.name === 'Comunicação')._id,//TODO
            ],
            description: 'Você é daqueles que tremem nas bases só de pensar em falar em público? Então, pode ficar frio, porque nesta aula você vai ter dicas valiosas de como se preparar para esse momento e fazer uma apresentação irada! Dê um tchau pro medo e vem com a gente! ',
            image: _.find(files, file => file.filename === 'Aula_18.png').fileUrl, // TODO
            activities: [{
              name: 'Falar em público não é coisa de outro mundo.',
              description: undefined,
              type: 'presentation',
              presentation: {
                  title: 'Falar em público não é coisa de outro mundo.',
                  description: 'Pra começar, vamos ver como o Pyong se prepara para falar em público. Aperte o play!',
                  image: _.find(files, file => file.filename === 'capa_historia_vida.png').fileUrl // TODO
              },
              contentFormat: 'video',
              content: {
                  title: 'Ser ou não ser, eis a questão',
                  text: 'Pra começar, vamos ver como o Pyong se prepara para falar em público. Aperte o play!',
                  video: {
                      fileUrl: 'files/stream?type=videos&filename=' + '2-APRESENTACAO_EM_PUBLICO_online.mp4',//TODO
                      type: 'video/mp4'
                  },
                  // subtitles: {
                  //     fileUrl: _.find(files, file => file.filename === 'Historia_de_vida.vtt').fileUrl,
                  //     label: 'Português'
                  // }
              }


            },{
              name: 'Medo de quê?',
              description: undefined,
              type: 'interaction',
              presentation: {
                  title: 'Medo de quê?',
                  description: 'Você tem que fazer uma apresentação para os gerentes da empresa! Que pânico, hein? Agora, relaxe e indique quais situações podem te acalmar ou te deixar mais nervoso. ',
                  image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl // TODO
              },
              contentFormat: 'simpleQuiz',
              content: {
              questions:[{
              title: 'Medo de quê?',
              text: 'Um dia antes da apresentação, você deixou tudo preparado, estudou o que ia falar e leu até um pouco mais sobre o tema, para dominar o assunto. ',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Isso!',
                  text: 'Se preparar antes e saber até mais do que você vai apresentar te deixam tranquilão!!!',
                  type: 'positive'
              }, {
                  title: 'Nada disso!',
                  text: 'Se preparar antes e saber até mais do que você vai apresentar te deixam tranquilão!!!',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula20_Apre_publico_at01b.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula20_Apre_publico_at01a.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'B'
            },{
              title: 'Medo de quê?',
              text: 'Apesar da sua mãe achar a parada muito estranha, você ficou treinando como falar na frente do espelho do banheiro.',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Perfeito!',
                  text: 'Essa é uma ótima técnica para vencer o medo de falar em público.',
                  type: 'positive'
              }, {
                  title: 'Errou…',
                  text: 'Essa é uma ótima técnica para vencer o medo de falar em público.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula20_Apre_publico_at01b.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula20_Apre_publico_at01a.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'B'

            },{
              title: 'Medo de quê?',
              text: 'Mesmo com suas mãos tremendo na hora de apresentar, você ficou segurando uma caneta de laser para indicar os conteúdos na tela.',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Esse tipo de acessório faz com que todo mundo perceba que você está nervoso!',
                  type: 'positive'
              }, {
                  title: 'Nãããooo!',
                  text: 'Esse tipo de acessório faz com que todo mundo perceba que você está nervoso!',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula20_Apre_publico_at01b.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula20_Apre_publico_at01a.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'A'
            },{
              title: 'Medo de quê?',
              text: 'Você decorou todos os textos da apresentação para não dar nenhuma mancada. ',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Muito bem!',
                  text: 'Decorar não é uma boa, pois sua memória pode falhar.',
                  type: 'positive'
              }, {
                  title: 'Mandou mal!',
                  text: 'Decorar não é uma boa, pois sua memória pode falhar.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula20_Apre_publico_at01b.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula20_Apre_publico_at01a.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'A'

            },{
              title: 'Medo de quê?',
              text: 'Você chegou quase 1 hora antes do horário marcado.',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Certíssimo!',
                  text: 'Se você chega antes, pode ir conversando com as pessoas. Isso te deixa mais à vontade para apresentar.',
                  type: 'positive'
              }, {
                  title: 'Pense melhor...',
                  text: 'se você chega antes, pode ir conversando com as pessoas. Isso te deixa mais à vontade para apresentar.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula20_Apre_publico_at01b.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula20_Apre_publico_at01a.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'B'
            },{
              title: 'Medo de quê?',
              text: 'Antes de começar a apresentação, você respirou fundo e soltou o ar lentamente.',
              alternativesType: 'image',
              feedbacks: [{
                  title: 'Arrasou!',
                  text: 'A respiração mais prolongada ajuda muito a acalmar.',
                  type: 'positive'
              }, {
                  title: 'Opção errada!',
                  text: 'A respiração mais prolongada ajuda muito a acalmar.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: _.find(files, file => file.filename === 'Aula20_Apre_publico_at01b.png').fileUrl,
                  letter: 'A'
              }, {
                  option: _.find(files, file => file.filename === 'Aula20_Apre_publico_at01a.png').fileUrl,
                  letter: 'B'
              }],
              correctAnswer: 'B'
            }
          ]}
        },{
          name: 'Conquiste seu público.',
          description: undefined,
          type: 'presentation',
          presentation: {
              title: 'Conquiste seu público.',
              description: 'Para sua apresentação ser um sucesso, você precisa envolver a plateia! Nos próximos slides, você vai conhecer a Bia. Fique ligado na apresentação dela e aprenda muito!',
              image: _.find(files, file => file.filename === 'capa_apresentacao.png').fileUrl
          },
          contentFormat: 'slides',
          content: {
          slides: [{
              image: _.find(files, file => file.filename === 'Aula20_Apre_publico_at03a.png').fileUrl,
              title: 'Comece bem.',
              text: 'Olha só. A Bia chegou e cumprimentou o pessoal. Depois, agradeceu a presença de todos e se apresentou! Pronto, aí a Bia já começou a conquistar a plateia. '
          }, {
              image: _.find(files, file => file.filename === 'Aula20_Apre_publico_at03b.png').fileUrl,
              title: 'Sorria e seja simpático!',
              text: 'A Bia começou a apresentação! Viu como ela está sorrindo e olhando para as pessoas? Isso é muito importante!  Outra coisa: ela está explicando um item sem ler o slide e falando tudo de forma clara, com frases curtas. Ah, e sem aquelas palavrinhas como “né”, “então” e “tá”.Mandou bem, Bia!'
          }, {
              image: _.find(files, file => file.filename === 'Aula20_Apre_publico_at03c.png').fileUrl,
              title: 'Bom humor é tudo.',
              text: 'A Bia está terminando a apresentação no maior astral! É muito legal quando o apresentador contagia todo mundo com seu entusiasmo. Parabéns, Bia! Você foi demais!'
          }]}
        },{
          name: 'Você no foco.',
          description: undefined,
          type: 'interaction',
          presentation: {
              title: 'Você no foco.',
              description: 'Objetividade e clareza ao enviar uma mensagem por e-mail para um cliente faz toda a diferença. A seguir vamos te mostrar uma mensagem do atendente Luciano e você deverá revisar e tirar os erros, deixado a mensagem pronta para ser enviada.',
              image: _.find(files, file => file.filename === 'capa_ad_erro_escala.png').fileUrl
          },
          contentFormat: 'errors',
          content: { questions:[{
            title: 'Você no foco.',
            text: 'Vai começar a apresentação do Léo. Clique sobre 3 falhas que ele cometeu.',
            clicks: 2,
            background: _.find(files, file => file.filename === 'Aula20_Apre_publico_at04.png').fileUrl,
            baseResolution:{
                width: 1080,
                height: 1020
            },
            mappings: [{
              coordinates: '195,432,155,506,215,587,280,581,381,526,293,442',
              shape: 'poly',
              tickPosition: {
                  x: 215,
                  y: 447
              },
              feedback: {
                  title: 'Boa!',
                  text: 'A forma como você se veste sempre comunica algo sobre você. Procure sempre se apresentar com roupas limpas e bem passadas.',
                  type: 'positive'
              }
            },{
              coordinates: '159,706,114,824,102,941,223,964,347,891,300,749',
              shape: 'poly',
              tickPosition: {
                  x: 185,
                  y: 780
              },
              feedback: {
                title: 'Excelente!',
                text: 'As mãos no bolso não ajudam… Esse tipo de gesto pode se transformar em hábito e acabar diminuindo o poder das suas palavras.',
                  type: 'positive'
              }
            }
          ]
          }
        ]}
      },{
        name: 'Te dou o maior apoio.',
        description: '',
        type: 'interaction',
        presentation: {
            title: 'Te dou o maior apoio.',
            description: 'Legal! Você chegou até aqui. Agora, vamos ver se você está ligado em alguns pontos que fazem toda a diferença na hora de uma apresentação. Vamos lá?',
            image: _.find(files, file => file.filename === 'capa_quiz.png').fileUrl
        },
        contentFormat: 'multipleQuiz',
        content: {
            questions: [{
              title: 'Te dou o maior apoio.',
              text: 'Você precisa fazer uma apresentação muito maneira para mostrar os resultados do seu departamento. O que você usa? ',
              alternativesType: 'text',
              feedbacks: [{
                  title: 'Maravilha!',
                  text: 'Você não poluiu sua apresentação com efeitos manjados e um monte de texto! ',
                  type: 'positive'
              }, {
                  title: 'Hummm...',
                  text: 'Não seria melhor trazer apenas a essência da mensagem e não poluir a apresentação com efeitos manjados?',
                  type: 'negative'
              }],
              alternatives: [{
                  option: 'Alguns ruídos, tipo máquina de escrever e brecadinhas de carro.',
                  letter: 'A'
              }, {
                  option: 'Letras de tamanho grande, cores chamativas e poucas palavras em cada slide.',
                  letter: 'B'
              }, {
                  option: 'Muitas tabelas com números,  grandes blocos de texto e vários efeitos visuais, tipo palavras e fotos girando. ',
                  letter: 'C'
              }],
              correctAnswer: 'B'
            },{
              title: 'Te dou o maior apoio.',
              text: '<p>Em um dos slides da apresentação você escreveu a seguinte frase: “ ________ 5 anos que a concorrência tem marcas  ______ conhecidas que as nossas”.</p> Complete com as palavras corretas: ',
              alternativesType: 'text',
              feedbacks: [{
                  title: 'Que Bacana!',
                  text: 'Você deve ter dado uma revisada na apresentação para não deixar passar erros grosseiros.',
                  type: 'positive'
              }, {
                  title: 'Xiiii!',
                  text: 'Não dá pra deixar um erro desses passar na sua apresentação. Dê uma revisada antes.',
                  type: 'negative'
              }],
              alternatives: [{
                  option: 'Fazem / menos',
                  letter: 'A'
              }, {
                  option: 'Faz / menas',
                  letter: 'B'
              }, {
                  option: 'Faz / menos',
                  letter: 'C'
              }],
              correctAnswer: 'C'

            },{
              title: 'Te dou o maior apoio.',
              text: 'Chegou o dia de apresentar. O que você faz?',
              alternativesType: 'text',
              feedbacks: [{
                  title: 'Perfeito!',
                  text: 'Levar um roteiro com informações que complementem a apresentação te dará mais segurança.',
                  type: 'positive'
              }, {
                  title: 'Não!!',
                  text: 'Que tal levar um roteiro, com informações que complementem sua apresentação, para ter mais segurança?',
                  type: 'negative'
              }],
              alternatives: [{
                  option: 'Leva a apresentação e só. Afinal, está tudo na sua cabeça.',
                  letter: 'A'
              }, {
                  option: 'Vai com a apresentação, mas leva também um roteiro impresso com algumas informações importantes, caso esqueça de algo.',
                  letter: 'B'
              }, {
                  option: 'Leva a apresentação e outras informações em jornais, livros ou revistas, caso precise consultar na hora.',
                  letter: 'C'
              }],
              correctAnswer: 'B'

            },{
              title: 'Te dou o maior apoio.',
              text: 'Você só tem 20 minutos para apresentar. Então….',
              alternativesType: 'text',
              feedbacks: [{
                  title: 'Boa saída!',
                  text: 'Extrapolar o tempo ou parar a apresentação no meio são uma tremenda bola fora. ',
                  type: 'positive'
              }, {
                  title: 'Nada disso.',
                  text: 'Não seria melhor levar um cronômetro e controlar o tempo da apresentação?',
                  type: 'negative'
              }],
              alternatives: [{
                  option: 'Começa a apresentação e deixa rolar. Se o tempo acabar, você para onde estiver.',
                  letter: 'A'
              }, {
                  option: 'Apresenta tudo muito rápido para terminar uns 5 minutos antes.',
                  letter: 'B'
              }, {
                  option: 'Usa um cronômetro ou um relógio para ir controlando o horário e apresentar tudo no tempo certo.',
                  letter: 'C'
              }],
              correctAnswer: 'C'

            }]}
      }]//final do action



    })
  ]
);
