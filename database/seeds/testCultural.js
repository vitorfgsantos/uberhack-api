'use strict';

const TestCultural = require('../../src/models/testCulturalModel').TestCultural;

module.exports = () => (
    [
        new TestCultural({
          category: 'Teste Cultural',
          description: 'Para conhecermos melhor a empresa, faça o teste abaixo:',
          questions: [
            {
              cod:1,
              question:{
                description: 'Não se admite improvisos. Regras e prazos são para serem seguidos.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:2,
              question:{
                description: 'O ambiente de trabalho é calmo e cada colaborador pouco sabe das outras pessoas ou áreas.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:3,
              question:{
                description: 'Valorizamos colaboradores que são inventivos e sempre têm boas ideias.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:4,
              question:{
                description: 'Demonstrar dados e argumentos lógicos é valorizado e não há espaço para sensações ou intuições na tomada de decisão.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:5,
              question:{
                description: 'Valoriza-se mais a qualidade e a aderência total aos processos e normas do que o resultado em si.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:6,
              question:{
                description: 'Quando surge um problema interno, nenhuma decisão é tomada antes de ouvir as partes e analisar bem a situação.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:7,
              question:{
                description: 'O ambiente de trabalho é alegre, às vezes até barulhento, mas todos se sentem livres para serem quem são.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:8,
              question:{
                description: 'Valorizamos quem executa atividades práticas, sem muito devaneio. Colaboradores atentos a detalhes e fatos são muito.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:9,
              question:{
                description: 'Colaboradores que não cumprem normas internas são abertamente punidos.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:10,
              question:{
                description: 'Inovação nos define. Ideias, imagens, criação, fazem parte do nosso jeito de ser.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:11,
              question:{
                description: 'Investimos mais tempo valorizando as relações e habilidades sociais, do que solucionando problemas.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:12,
              question:{
                description: 'Temos muitos ambientes calmos, tranquilos, com decoração intimista. Excelentes para a concentração e análise de dados.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:13,
              question:{
                description: 'Toma-se decisão sempre baseada em dados palpáveis, concretos e informações claras. Não se valoriza quem toma decisão.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:14,
              question:{
                description: 'Ao resolver problemas, somos criativos e até audaciosos, porém bastante realistas e racionais.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:15,
              question:{
                description: 'Lidamos bem com a complexidade que vivemos. A gestão usa metáforas, símbolos e raciocínio abstrato para facilitar o entendimento de todos.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:16,
              question:{
                description: 'Somos flexíveis, adaptáveis e tolerantes. As decisões são proteladas e ficam em aberto pelo maior tempo possível.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:17,
              question:{
                description: 'Objetividade, foco na entrega e senso de urgência é o que mais se escuta vindo da liderança.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:18,
              question:{
                description: 'Os colaboradores sentem-se como se fizessem parte de uma mesma família.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:19,
              question:{
                description: 'Detalhes são importantes. Todos os trabalhos passam por profunda revisão antes de serem entregues.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:20,
              question:{
                description: 'É perceptível que as decisões são baseadas nas necessidades e bem-estar dos colaboradores.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:21,
              question:{
                description: 'Queremos que todos os colaboradores se sintam como se estivessem em sua própria empresa.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:22,
              question:{
                description: 'Valorizamos pessoas espontâneas, abertas e que expressem seus sentimentos.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:23,
              question:{
                description: 'É comum iniciarmos uma nova atividade /projeto sem ter terminado outro, somos adaptativos.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:24,
              question:{
                description: 'Os projetos ou novos trabalhos só se iniciam depois de um planejamento e definição de papeis e responsabilidades claras.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:25,
              question:{
                description: 'A organização valoriza profissionais que se expressam bem. Imagem é tudo.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:26,
              question:{
                description: 'A colaboração é estimulada e muito reconhecida em rituais internos.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:27,
              question:{
                description: 'Pela natureza do negócio, muitos colaboradores trabalham sozinhos ou de casa.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:28,
              question:{
                description: 'Os sentimentos dos colaboradores não são levados em conta nas decisões, desde que estas sejam baseadas em dados e fatos comprováveis.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:29,
              question:{
                description: 'Concentração, ponderação e análise são características muito valorizadas nos colaboradores.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:30,
              question:{
                description: 'Tudo é motivo para celebrar e festejar. Não ir a festas "Pega mal".',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:31,
              question:{
                description: 'As reuniões são livres de pauta. Às vezes, abrimos tantos assuntos que esquecemos por que iniciamos a reunião.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:32,
              question:{
                description: 'Quando se quer atender à necessidade de um colaborador, é comum não seguir os processos de gestão de pessoas.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:33,
              question:{
                description: 'Inovação e criatividade são fundamentais em nosso negócio.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:34,
              question:{
                description: 'Nas reuniões, seguimos uma pauta predefinida e cada um tem sua vez de falar.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:35,
              question:{
                description: 'As opiniões dos colaboradores provenientes da pesquisa de clima são valorizadas e orientam as ações para o próximo período.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:36,
              question:{
                description: 'A estrutura da empresa é adaptável. Os trabalhos dependem da demanda dos clientes ou dos projetos.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:37,
              question:{
                description: 'Encontrar soluções é fácil, porque temos todos os procedimentos ordenados e disseminados.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:38,
              question:{
                description: 'Todo colaborador tem metas e objetivos claros a seguir.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:39,
              question:{
                description: 'Há espaço para demonstrar emoções em nossa empresa. Confiamos fortemente nas pessoas.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:40,
              question:{
                description: 'Líderes de pessoas são mais valorizados do que líderes de processos.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:41,
              question:{
                description: 'Há pouco espaço para criar. Os processos devem ser feitos como foram determinados.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:42,
              question:{
                description: 'Os colaboradores têm liberdade de expressão - Todos têm voz ativa e podem dar suas opiniões livremente.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:43,
              question:{
                description: 'Conflitos e divergências não são tratados para não prejudicar o clima interno.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:44,
              question:{
                description: 'Se uma ideia excelente surge próxima à data de entrega de um trabalho, fazemos as mudanças. Porque o prazo é menos importante do que um trabalho bem feito.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:45,
              question:{
                description: 'Quando estamos envolvidos com ideias estamos energizados.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:46,
              question:{
                description: 'Cada colaborador tem sempre muitas e diferentes atividades para realizar. Espera-se que ajam rapidamente, sem muito planejar.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:47,
              question:{
                description: 'Somos uma empresa de muitas frentes, mas refletimos muito antes de agir. Precisamos de tempo para pensar.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:48,
              question:{
                description: 'Valorizamos colaboradores muito sociáveis.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:49,
              question:{
                description: 'Para a empresa, importante são as evidências. Precisamos sempre de muita informação com dados concretos e, se possível, com detalhes, para tomar decisão.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:50,
              question:{
                description: 'Valorizamos a intuição - Nossas decisões são baseadas mais em informações abstratas do que informações de mercado, por exemplo.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:51,
              question:{
                description: 'Trabalhamos muito bem as informações de mercado, interpretamos dados e aprofundamos conhecimentos, antes de lançar produtos/ serviços.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:52,
              question:{
                description: 'Na maioria das vezes, a tomada de decisão está baseada na lógica e argumentos racionais.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:53,
              question:{
                description: 'A tomada de decisão é baseada no sentimento. Cada liderança é encorajada a decidir com a sua intuição.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:54,
              question:{
                description: 'As decisões estão centralizadas e não demoram muito a sair.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:55,
              question:{
                description: 'A hierarquia é clara e com responsabilidades bem definidas.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:56,
              question:{
                description: 'A hierarquia é informal e a liderança é pessoal.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            },{
              cod:57,
              question:{
                description: 'É comum demorarmos muito tempo para tomar uma decisão administrativa, sem nos importarmos com isto.',
                answers:[
                  {
                    text: 'Concordo',
                    value: true
                  },
                  {
                    text: 'Discordo',
                    value: false
                  }
                ]
              }
            }
          ]
        })
    ]
);
