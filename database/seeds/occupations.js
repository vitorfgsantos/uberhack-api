'use strict';

const _ = require('lodash');
const Occupation = require('../../src/models/occupationModel').Occupation;

module.exports = (files) => (
    [
        new Occupation({
            name: 'Engenharia',
            image: _.find(files, file => file.filename === 'engenharia.png').fileUrl,
            overview: 'Você gosta de colocar em prática tudo o que aprende e adora produzir coisas novas? Engenharia é a sua área!',
            description: `
            <p>Você gosta de colocar em prática tudo o que aprende e adora produzir coisas novas? Engenharia é a sua área! Da construção de uma casa até o sabão que você usa, tudo precisa de um engenheiro para ser feito.</p>
            <p>Você pode seguir muitas profissões: engenharia civil e mecânica, controle qualidade, eletrônica, metalúrgica, entre outras.</p>
            `
        }),

        new Occupation({
            name: 'Reparação e Manutenção',
            image: _.find(files, file => file.filename === 'reparacao_manutencao.png').fileUrl,
            overview: 'Se você é daqueles que conserta tudo e adora trabalhos manuais, vai se dar bem nesta área! Você pode...',
            description: `<p>Se você é daqueles que conserta tudo o que vê pela frente e adora trabalhos manuais, vai se dar bem na área de reparo e manutenção de bens, máquinas e equipamentos.</p>
 <p>Você pode se desenvolver como técnico em várias áreas, operador de manutenção de indústrias, sapateiro, costureira, vidraceiro ou eletricista.</p>`
        }),
        new Occupation({
            name: 'Agronomia',
            image: _.find(files, file => file.filename === 'agronomia.png').fileUrl,
            overview: 'Você curte mexer com a terra, criar animais e cultivar vegetais? Seguindo a área de agronomia você estará...',
            description: `<p>Você curte mexer com a terra, criar animais e cultivar vegetais? Seguindo a área de agronomia você estará em contato com técnicas de produção, manejo e de preservação dos recursos naturais.</p>
            <p>Algumas ocupações relacionadas são: produtor agropecuário, gestor de fazenda, engenheiro florestal, atividades em berçário ou estufa de plantas e animais, florista.</p>`

        }),

        new Occupation({
            name: 'Computação e Dados',
            image: _.find(files, file => file.filename === 'computacao_dados.png').fileUrl,
            overview: 'Quem é apaixonado por tudo o que é digital vai se identificar com essa área. É dela que saem os programas...',
            description: `<p>Quem é apaixonado por tudo o que é digital, como computadores, sistemas de informática e organização de dados, vai se identificar com essa área. É dela que saem os programas de computador, aplicativos e outros sistemas que facilitam nossa vida.</p><p>Algumas profissões que você pode seguir são: arquivista, curador, programador de computador, analista de sistemas e desenvolvedor de website.</p>`
        }),
        new Occupation({
            name: 'Ciências Exatas',
            image: _.find(files, file => file.filename === 'exatas.png').fileUrl,
            overview: 'Você é cuidadoso e gosta de analisar os enigmas do corpo humano e dos outros seres vivos? Então, se sentirá...',
            description: `<p>Essa área é para pessoas com um perfil investigativo e com excelente raciocínio lógico.</p><p>Se você tem facilidade em lidar com números, fazer cálculos e resolver problemas, pode ser dar muito bem em profissões relacionadas às ciências exatas, como: físico, biólogo, farmacêutico, pesquisador, matemático e químico.</p>
`
        }),
        new Occupation({
            name: 'Saúde',
            image: _.find(files, file => file.filename === 'saude.png').fileUrl,
            overview: 'Você curte mexer com a terra, criar animais e cultivar vegetais? Seguindo a área de agronomia você estará...',
            description: `<p>Você é cuidadoso e gosta de analisar os enigmas do corpo humano e dos outros seres vivos? Então, se sentirá realizado exercendo alguma função na área da saúde.</p>

<p>Veja as principais profissões que ela engloba: médico, anestesista, dentista, enfermeiro, veterinário, tecnólogo de alimentos e radiologista.</p>`
        }),
        new Occupation({
            name: 'Artes Visuais',
            image: _.find(files, file => file.filename === 'artes_visuais.png').fileUrl,
            overview: 'Se você é uma pessoa visual, que utiliza o desenho, a ilustração ou a pintura para expressar suas ideias...',
            description: `<p>Se você é uma pessoa visual, que utiliza o desenho, a ilustração ou a pintura para mostrar o que sente e expressar suas ideias, essa área é a sua cara.</p>

<p>Existem várias profissões em que você pode colocar em prática seu lado artístico: designer de produtos, de moda, multimídia e industrial, fotógrafo e profissional de animação em 3D.</p>`
        }),

        new Occupation({
            name: 'Música',
            image: _.find(files, file => file.filename === 'musica.png').fileUrl,
            overview: 'É nessa área que quem ama música e se dedica a tocar instrumentos se realiza! A música pode ser algo que...',
            description: `<p>É nessa área que quem ama música e se dedica a tocar instrumentos se realiza! A música pode ser algo que você faz por hobby, mas também abre portas para muitas profissões.</p>
<p>Músicos podem trabalhar em espetáculos, como concertos e shows, e em estúdios, tocando em gravações artísticas ou publicitárias.</p>`
        }),
        new Occupation({
            name: 'Comunicação e Informação',
            image: _.find(files, file => file.filename === 'comunicacao.png').fileUrl,
            overview: 'Pessoas comunicativas, dinâmicas, criativas e curiosas se desenvolvem muito bem nesta área. Se você tem...',
            description: `<p>Pessoas comunicativas, dinâmicas, criativas e curiosas se desenvolvem muito bem na área de comunicação e informação.</p>

<p>Se você tem essas habilidades e gosta de estar sempre bem informado, veja as profissões que pode seguir: publicidade, relações públicas, comunicação institucional, planejamento e produção de eventos, blogueiro e vídeo bloguer.</p>`
        }),

        new Occupation({
            name: 'Artes Cênicas',
            image: _.find(files, file => file.filename === 'artes_cenicas.png').fileUrl,
            overview: 'Pessoas comunicativas, dinâmicas, criativas e curiosas se desenvolvem muito bem nesta área. Se você tem...',
            description: `<p>Se você se realiza quando sobe ao palco ou se interessa por criação, montagem e direção de espetáculos, pode fazer disso sua profissão.</p>

<p>O profissional de Artes Cênicas pode seguir alguns caminhos nesse universo, como ator, dramaturgo, cenógrafo, figurinista ou produtor de TV.</p>`
        }),

        new Occupation({
            name: 'Serviço Social',
            image: _.find(files, file => file.filename === 'servico_social.png').fileUrl,
            overview: 'Você se preocupa com os outros, é sensível e está sempre querendo resolver as dificuldades de quem precisa?',
            description: `<p>Você se preocupa com os outros, é sensível e está sempre querendo resolver as dificuldades de quem precisa? Uma boa área a seguir é o serviço social.</p>

<p>Trata-se de uma área ampla que engloba profissionais de várias especialidades, como saúde mental, reabilitação, advocacia, assistência social, jornalismo, liderança comunitária e política.</p>`
        }),

        new Occupation({
            name: 'Ciências Sociais e Humanas',
            image: _.find(files, file => file.filename === 'ciencias_sociais.png').fileUrl,
            overview: 'Você passa longas horas do dia lendo e refletindo e estudando sobre as ações da sociedade? Esse é o perfil...',
            description: `<p>Você passa longas horas do dia lendo e refletindo e estudando sobre as ações da sociedade? Esse é o perfil certo para atuar na área de ciências sociais e humanas.</p>

<p>Confira algumas ocupações que você pode exercer: antropólogo, criminologista, cientista político, psicólogo, sociólogo, advogado, juiz, economista, historiador, museologista, relações internacionais e serviço social.</p>`
        }),

        new Occupation({
            name: 'Educação',
            image: _.find(files, file => file.filename === 'educacao.png').fileUrl,
            overview: 'Seu jeito especial de ensinar e orientar as pessoas dá pistas de que você seria um bom profissional da área...',
            description: `<p>Seu jeito especial de ensinar e orientar as pessoas dá pistas de que você seria um bom profissional da área de educação. Paciência e capacidade de se expressar são habilidades importantes também.</p>

<p>Veja algumas profissões dessa área: administrador educacional e de escolas, professor, assistente de sala, pedagogo, linguista, tradutor e intérprete.</p>`
        }),

        new Occupation({
            name: 'Logística e distribuição',
            image: _.find(files, file => file.filename === 'logistica.png').fileUrl,//TODO
            overview: 'Quem é organizado, dinâmico e tem uma boa visão de processos, pode seguir a área de logística. Afinal...',
            description: `<p>Quem é organizado, dinâmico e tem uma boa visão de processos, pode seguir a área de logística. Afinal, a função desse profissional é entregar produtos no local certo e dentro do prazo.  </p>

<p>Se você tem esse perfil, pode trabalhar como carteiro, motorista, controlador de tráfego aéreo, na área de operação de transporte, supervisor de armazém, operador de empilhadeiras e analista de logística.</p>`
        }),

        new Occupation({
            name: 'Segurança Pública',
            image: _.find(files, file => file.filename === 'administracao_publica.png').fileUrl,//TODO
            overview: 'Se você se preocupa com a segurança e o bem-estar da sociedade, pode ter sucesso nesta área. Atuar no...',
            description: `<p>Se você se preocupa com a segurança e o bem-estar da sociedade, pode ter sucesso nesta área.</p>

<p>Atuar no exército, marinha, aeronáutica, polícia, corpo de bombeiros ou na defesa civil, são algumas das possibilidades que você pode seguir.</p>`
        }),

        new Occupation({
            name: 'Marketing e Vendas',
            image: _.find(files, file => file.filename === 'marketing_vendas.png').fileUrl,
            overview: 'Você adora falar com pessoas e está sempre ligado no que elas precisam? Já pensou em trabalhar nesta área?',
            description: `<p>Você adora falar com pessoas e está sempre ligado no que elas precisam? Já pensou em trabalhar nesta área? Esse profissional é responsável por manter clientes e marcas sempre conectados.</p>

<p>Para começar, você pode atuar como vendedor, atendente de telemarketing, analista de publicidade, comprador, feirante, agente de seguros, agente imobiliário,  assistente de marketing, ente outros.</p>`
        }),

        new Occupation({
            name: 'Bens e Serviços',
            image: _.find(files, file => file.filename === 'bens_servicos.png').fileUrl,
            overview: 'Você é daqueles que se interessa pela qualidade dos serviços que consome e gosta de ser sempre bem atendido?',
            description: `<p>Você é daqueles que se interessa pela qualidade dos serviços que consome e gosta de ser sempre bem atendido? Partir para uma profissão nesta área pode ser a sua!</p>

<p>Dá uma olhada nas ocupações que você pode exercer: trabalhos domésticos ou em restaurantes, porteiro, zelador, recepcionista, telefonista, manobrista, cozinheiro, garçom, secretária, recepcionista, comissária de bordo, cabeleireiro, entre outras.</p>`
        }),

        new Occupation({
            name: 'Administração Pública',
            image: _.find(files, file => file.filename === 'administracao_publica.png').fileUrl,
            overview: 'Questões que envolvem a organização e administração da sua cidade, estado ou país interessam você? Então...',
            description: `<p>Questões que envolvem a organização e administração da sua cidade, estado ou país interessam você? Então fique de olho nas carreiras relacionadas à administração pública.</p>

<p>Ser um redator de tribunal, administrador ou gestor de políticas públicas pode ser a chave para transformar o que você gosta em profissão!</p>`
        }),

        new Occupation({
            name: 'Finanças',
            image: _.find(files, file => file.filename === 'financas.png').fileUrl,
            overview: 'Você valoriza muito a rotina e gosta de tudo bem organizado e estruturado? Já pensou em trabalhar com...',
            description: `<p>Você valoriza muito a rotina e gosta de tudo bem organizado e estruturado? Já pensou em trabalhar com finanças?</p>

<p>Nessa área você irá executar tarefas relativas à contabilidade e administração, em cargos como: contador, auditor, caixa de banco, analista de orçamento, analista de crédito, analista de seguro, avaliador de imóveis, fiscal e contador.</p>`
        }),

        new Occupation({
            name: 'Administração',
            image: _.find(files, file => file.filename === 'administracao.png').fileUrl,
            overview: 'Esta área é indicada para quem faz tudo de forma organizada e busca máxima eficiência em todas as tarefas...',
            description: `<p>Para quem faz tudo de forma organizada e busca máxima eficiência em todas as tarefas que executa, carreiras relacionadas à área de administração são as mais indicadas.</p>

<p>Você pode atuar como analista administrativo, analista de logística, auxiliar de escritório ou de serviços gerais, comprador, recepcionista, gerente de hotel, gestor de propriedade e em diversas outras carreiras.</p>`
        }),

        new Occupation({
            name: 'Produção de Bens Industriais',
            image: _.find(files, file => file.filename === 'bens_servicos.png').fileUrl,
            overview: 'Mexer com ferramentas, instrumentos e equipamentos mecânicos é com você mesmo? Então, esta área pode ser...',
            description: `<p>Mexer com ferramentas, instrumentos e equipamentos mecânicos é com você mesmo? Então, esta área pode ser uma boa escolha.</p>

<p>Algumas ocupações são: trabalhador da construção civil, operador industrial e de processos, pedreiro, fabricação e instalação eletroeletrônica, montagem de aparelhos e instrumentos de precisão.</p>`
        }),

        new Occupation({
            name: 'Recursos humanos',
            image: _.find(files, file => file.filename === 'recursos_humanos.png').fileUrl,
            overview: '',
            description: `<p>Se você é observador, gosta de ajudar as pessoas e sabe identificar o que cada um tem de melhor, esta é a sua área! O objetivo de quem trabalha em Recursos Humanos é oferecer serviços ligados ao emprego e auxiliar o funcionário a tirar suas dúvidas. </p>

<p>Você pode começar sendo analista de benefícios, entrevistador de processo seletivo, analista de treinamento, entre outras funções. </p>`
        }),








    ]
);
