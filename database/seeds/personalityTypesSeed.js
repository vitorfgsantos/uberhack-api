'use strict';

const _ = require('lodash');
const PersonalityType = require('../../src/models/personalityTypeModel').PersonalityType;

module.exports = (hollandAreas, files) => (
    [
        new PersonalityType({
            type: 'ESTP',
            title: 'O Realizador ',
            subtitle: 'Você faz acontecer',
            description: `
            <p>Se existe um problema que precisa ser resolvido rápido, é só te chamar. Afinal, seu jeito prático e destemido faz com que você solucione tudo sem complicações. Você age por impulso e não se planeja muito, mas nunca perde a noção da realidade. Lugares muito certinhos e cheios de regras não são a sua cara.</p>
            <p>Você se adapta muito fácil a ambientes novos e adora o contato com gente. Aliás, adivinhar o que as pessoas querem é uma característica sua. Por isso você é tão bom em vender suas ideias e convencer os outros.</p>
            `,
            image: _.find(files, file => file.filename === 'Realizador.png').fileUrl,
            qualities: [
                'Agir na emergência',
                'Resolver problemas',
                'Convencer as pessoas'
            ],
            defects: [
                'Sem impaciente',
                'Deixar as tarefas sem conclusão',
                'Fazer as coisas sem pensar nas consequências'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Empreendedor',
                'Comerciante',
                'Médico de serviços de emergência',
                'Esportista de aventura'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Técnico'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Administração e Vendas'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Ciência e Tecnologia'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Serviço Social'))._id,
            ]
        }),
        new PersonalityType({
            type: 'ESTJ',
            title: 'O Responsável',
            subtitle: 'Você resolve os problemas',
            description: `
            <p>Você é do tipo que coloca ordem na casa. E faz isso de um jeito prático, porque toma decisões rápidas e sabe o que quer.</p>
            <p>Você adora ver as coisas prontas e fica extremamente irritado quando alguém atrasa uma tarefa ou tenta dar um jeitinho. Seguir as regras e manter a rotina são fundamentais para você. À primeira vista as pessoas podem te achar meio grosso, mas logo percebem que você está sempre disposto a ajudar, mesmo que isso exija esforço de dedicação.</p>
            `,
            image: _.find(files, file => file.filename === 'Aula08_Cumpri_at3a.png').fileUrl,
            qualities: [
                'Tomar decisões práticas',
                'Organizar as coisas',
                'Concluir o que começou'
            ],
            defects: [
                'Ter dificuldade com mudanças',
                'Elogiar pouco as pessoas',
                'Ignorar as pequenas coisas'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Administração',
                'Contabilidade',
                'Finanças',
                'Carreira gerencial'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Administração e Vendas'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Operações de Negócios'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Artes'))._id
            ]
        }),
        new PersonalityType({
            type: 'ESFP',
            title: 'O Empolgado',
            subtitle: 'Você alegra qualquer ambiente',
            description: `
            <p>Basta você chegar e o lugar vira uma festa! Seu bom humor e seu jeito alegre de aproveitar a vida são contagiantes. Gosta de comer bem, de se vestir com estilo e de se divertir muito! É otimista e não tem medo de mudanças.</p>
            <p>No dia a dia sempre busca saídas práticas para os problemas e vende bem suas ideias. Não se vê fazendo nada sozinho. Trabalho, para você, tem que ser em grupo e com muita liberdade para criar. Você tem muita energia! Tome cuidado para não estressar que vive a sua volta.</p>
            `,
            image: _.find(files, file => file.filename === 'Empolgado.png').fileUrl,
            qualities: [
                'Entender os outros',
                'Convencer as pessoas',
                'Achar que tudo vai dar certo'
            ],
            defects: [
                'Socializar demais',
                'Ter dificuldade em terminar o que começou',
                'Fazer antes e pensar depois'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Vendas',
                'Política',
                'Relações Públicas',
                'Artes Cênicas'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Administração e Vendas'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Serviço Social'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Artes'))._id
            ]
        }),
        new PersonalityType({
            type: 'ESFJ',
            title: 'O Acolhedor',
            subtitle: 'Você quer ver todo mundo bem',
            description: `
            <p>Em uma festa, você é aquele que se preocupa se as pessoas estão à vontade e se não está faltando nada para elas. É do tipo que quer ver todo mundo de bem com a vida e usa seu bom humor para isso.</p>
            <p>Dá valor à aparência e ao luxo e sabe puxar um assunto interessante com cada pessoa que conversa. Aliás, bater um bom papo e saber das últimas fofocas, é com você mesmo! Lealdade e comprometimento também são suas características. O que você promete, você cumpre.</p>
            `,
            image: _.find(files, file => file.filename === 'Acolhedor.png').fileUrl,
            qualities: [
                'Estar sempre animado',
                'Ser comunicativo',
                'Ter tudo organizado'
            ],
            defects: [
                'Esconder os problemas para não brigar',
                'Esquecer de você mesmo para agradar os outros',
                'Ter dificuldades para resolver problemas'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Professor',
                'Organização de eventos',
                'Assessoria de Imprensa',
                'Líder comunitário'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Serviço Social'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Administração e Vendas'))._id,
            ]
        }),
        new PersonalityType({
            type: 'ENTP',
            title: 'O Diversificador',
            subtitle: 'Você tem mil e um interesses',
            description: `
            <p>Você faz mil coisas ao mesmo tempo e acha um tédio executar uma tarefa sempre da mesma forma. Por ter um pensamento rápido e capacidade de improvisação, adora resolver problemas e inventar coisas. Assuntos, lugares e pessoas diferentes te motivam. Mas, com tantos interesses, às vezes você perde o foco e deixa as coisas sem terminar.</p>
            <p>Acredita em você mesmo e tem sempre boas justificativas para convencer as pessoas. Não tem medo de desagradar os outros. É do tipo que perde um amigo, mas não a piada!</p>
            `,
            image: _.find(files, file => file.filename === 'Diversificador.png').fileUrl,
            qualities: [
                'Ppensar rápido',
                'Ter vários interesses',
                'Ser curioso para aprender'
            ],
            defects: [
                'Ignorar as pequenas coisas',
                'Dar pouca importância às sugestões dos outros',
                'Ter dificuldade para se concentrar'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Advocacia',
                'Relações públicas',
                'Criação',
                'Farmácia',
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Serviço Social'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Ciência e Tecnologia'))._id
            ]
        }),
        new PersonalityType({
            type: 'ENTJ',
            title: 'O Líder',
            subtitle: 'Você tem a voz do comando',
            description: `
            <p>Você é um líder nato. Por isso, tem muita facilidade de influenciar as pessoas a seguirem seus planos que, por sinal, são muito bem traçados e analisados. Por estar sempre de olho no futuro, geralmente consegue identificar o melhor caminho a seguir e isso faz você se sentir importante. Afinal, você adora desafios e a sensação de vencer.</p>
            <p>Identificar as falhas e as qualidades das pessoas é uma característica sua. Mas, por ser muito direto e nada gentil nas críticas, você pode parecer arrogante.</p>
            `,
            image: _.find(files, file => file.filename === 'Lider.png').fileUrl,
            qualities: [
                'Perceber como será o futuro',
                'Influenciar as pessoas',
                'Ser líder'
            ],
            defects: [
                'Ser impaciente',
                'Mandar nas pessoas',
                'Agir de maneira insensível'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Economia',
                'Engenharia',
                'Gestão de políticas públicas',
                'Carreiras executivas'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Administração e Vendas'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Ciência e Tecnologia'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Serviço Social'))._id
            ]
        }),
        new PersonalityType({
            type: 'ENFP',
            title: 'O Guia',
            subtitle: 'Você indica os caminhos',
            description: `
                <p>Encantador e animado. Você é assim. E, por isso, está sempre no centro das atenções. Se interessar por muitos assuntos diferentes faz de você uma pessoa criativa e que está constantemente começando novas atividades. Trabalhar, para você, é tão prazeroso quanto se divertir.</p>
                <p>Se sente bem ao lado das pessoas e se realiza quando consegue ajuda-las a conseguir o que querem. Isso porque, para você, é fácil perceber do que elas gostam.</p>
                `,
            image: _.find(files, file => file.filename === 'Guia.png').fileUrl,
            qualities: [
                'Estar sempre animado',
                'Ter interesses diferentes',
                'Ajudar as pessoas'
            ],
            defects: [
                '​Controlar mal o tempo',
                'Ter dificuldade para definir prioridades',
                'Dizer sempre sim'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Educação',
                'Psicologia',
                'Marketing',
                'Artes'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Serviço Social'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Administração e Vendas'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Artes'))._id
            ]
        }),
        new PersonalityType({
            type: 'ENFJ',
            title: 'O Conciliador',
            subtitle: 'Você faz as pessoas se entenderem',
            description: `
                <p>Você nasceu para se comunicar, organizar a bagunça e influenciar as pessoas. Com você por perto, todos se entendem. Afinal, você está sempre pronto para ajudar e mostrar que a vida é muito melhor quando todos se respeitam.</p>
                <p>Seu jeito gentil e articulado faz com que as pessoas sigam seus passos. O que é muito bom, pois se tem uma coisa que você valoriza é o trabalho em grupo. Por ser um líder popular, você está sempre se envolvendo com os problemas dos outros. Cuidado para não se estressar!</p>
                `,
            image: _.find(files, file => file.filename === 'Aula08_Cumpri_at3a.png').fileUrl,
            qualities: [
                'Entender os outros',
                'Respeitar as diferenças',
                'Ser sociável'
            ],
            defects: [
                'Ser muito exigente com você mesmo',
                'Achar que relacionamentos são perfeitos',
                'Ignorar as pequenas coisas'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Jornalismo',
                'Publicidade e Propaganda',
                'Multimídia – Comunicação em Meios Digitais',
                'Relações Internacionais'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Artes'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Administração e Vendas'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Ciência e Tecnologia'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Serviço Social'))._id
            ]
        }),
        new PersonalityType({
            type: 'ISTP',
            title: 'O Independente',
            subtitle: 'Você gosta de ser livre',
            description: `
                <p>Liberdade é o seu nome! Adora atividades diferentes, de preferência ao ar livre. Odeia receber ordens ou seguir muitas regras.</p>
                <p>É curioso e observador: está sempre atento a tudo e a todos. Também é ótimo em trabalhos manuais. Aliás, prefere aprender na prática do que em cursos e livros. Estar sempre mudando de turma, de amigos, de relacionamentos também é uma forma ser livre. Perceber as emoções das pessoas não é o seu forte.</p>
                `,
            image: _.find(files, file => file.filename === 'Independente.png').fileUrl,
            qualities: [
                'Achar soluções práticas para os problemas',
                'Ficar calmo em momentos difíceis',
                'Dar respostas rápidas'
            ],
            defects: [
                'Parecer desinteressado',
                'Ser pouco planejado',
                'Ter dificuldade em continuar o que começou'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Logística',
                'Fotografia',
                'Educação Física',
                'Pilotagem'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Operações de Negócios'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Artes'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Serviço Social'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Ciência e Tecnologia'))._id
            ]
        }),
        new PersonalityType({
            type: 'ISTJ',
            title: 'O Confiável',
            subtitle: 'Você sempre cumpre o que promete',
            description: `
                <p>Missão dada, missão cumprida! É assim que você é.</p>
                <p>Quer sempre entregar seus trabalhos de forma organizada e correta em cada detalhe.</p>
                <p>É paciente, dedicado e se mostra calmo. As pessoas confiam em você. Detesta quando alguém é preguiçoso ou desonesto. Não gosta de nenhum tipo de aposta, nem de fazer as coisas de um jeito novo. É discreto, sério e não liga para luxo. O importante para você é ter coisas úteis e duráveis. O consumismo não é com você.</p>
                `,
            image: _.find(files, file => file.filename === 'Confiavel.png').fileUrl,
            qualities: [
                'Fazer as coisas você mesmo',
                'Prestar atenção à pequenas coisas',
                'Ser fiel aos amigos'
            ],
            defects: [
                'Ter dificuldade em aceitar opiniões diferentes das suas',
                'Recusar pedir ajuda',
                'Fazer as coisas sempre da mesma forma'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Contabilidade',
                'Auditoria',
                'Gestão de Projetos',
                'Pesquisa'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Operações de Negócios'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Administração e Vendas'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Ciência e Tecnologia'))._id,
            ]
        }),
        new PersonalityType({
            type: 'ISFP',
            title: 'O Sensível',
            subtitle: 'sentidos',
            description: `
                <p>Gosta de atividades solitárias que usem o tato, a audição, a visão, o paladar ou o olfato. Pessoas como você gostam muito de trabalhos manuais, culinária, música, dança e esportes.</p>
                <p>É gentil e simpático, mas nem sempre mostra o que sente. Apesar disso, quem conhece você sabe como é generoso. Muito observador, pode se dar bem cuidando de pessoas ou da natureza. Não tem problemas com mudanças, mas evita conflitos.</p>
                <p>Preocupado com o presente, prefere viver sem muitas regras e sem planejar o futuro.</p>
                `,
            image: _.find(files, file => file.filename === 'Sensivel.png').fileUrl,
            qualities: [
                'Ter facilidade com mudanças',
                'Ser sensível',
                'Agir de maneira prática'
            ],
            defects: [
                'Ser ingênuo',
                'Ter dificuldade em mostrar o que sente',
                'Evitar falar o que pensa para não provocar conflitos'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Artes Plásticas, Teatro ou Música',
                'Gastronomia',
                'Química',
                'Ecologia'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Artes'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Ciência e Tecnologia'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Técnico'))._id
            ]
        }),
        new PersonalityType({
            type: 'ISFJ',
            title: 'O Cuidador',
            subtitle: 'Você nasceu para ajudar',
            description: `
                <p>Ajudar as pessoas é uma missão de vida para você. Por isso, presta muita atenção ao que os outros precisam. É responsável e transmite confiança.</p>
                <p>Muito dedicado ao trabalho, tem dificuldade de ser reconhecido porque não gosta de ser o centro das atenções. Tem facilidade para se organizar e faz tudo bem feito, dentro das regras e no tempo determinado. Você é do tipo que economiza, não gosta de desperdícios e se preocupa em ter dinheiro para o futuro.</p>
                `,
            image: _.find(files, file => file.filename === 'Cuidador.png').fileUrl,
            qualities: [
                'Ajudar as pessoas',
                'Ser sério',
                'Agir de maneira prática'
            ],
            defects: [
                'Ser teimoso',
                'Ter dificuldade em perceber seu próprio valor',
                'Achar que as coisas podem dar errado'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Enfermagem',
                'Serviço Social',
                'Pedagogia',
                'Gestão Ambiental'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Serviço Social'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Técnico'))._id
            ]
        }),
        new PersonalityType({
            type: 'INTP',
            title: 'O Pensador',
            subtitle: 'Você é uma fábrica de ideias',
            description: `
                <p>Curioso, inteligente e com raciocínio rápido. Esse é você! Adora um desafio para encontrar uma solução bem criativa.</p>
                <p>Não gosta de rotina no trabalho. Acredita em você mesmo e faz as coisas do seu jeito. Prefere trabalhar sozinho, pois precisa de concentração. Ninguém engana você fácil, percebe de longe uma mentira. Não tem muita paciência com quem não acompanha seu raciocínio. É tranquilo estar em sua companhia no dia a dia, mas muitos estranham pois você não fala muito da vida pessoal.</p>
                `,
            image: _.find(files, file => file.filename === 'Pensador.png').fileUrl,
            qualities: [
                'Aanalisar bem as situações',
                'Solucionar problemas difíceis',
                'Ser criativo'
            ],
            defects: [
                'Ser pouco prático',
                'Ficar sozinho',
                'Ter dificuldade em abrir mão de suas ideias'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Engenharia',
                'Ciências e Tecnologia',
                'Arquitetura',
                'Computação'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Ciência e Tecnologia'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Artes'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Técnico'))._id,
            ]
        }),
        new PersonalityType({
            type: 'INTJ',
            title: 'O Estudioso ',
            subtitle: 'Você adora grandes desafios',
            description: `
                <p>Você adora o conhecimento e está sempre aprendendo algo. Pensa antes de agir e gosta de ficar sozinho. Aliás, não gosta de fofoca ou de falar bobagens.</p>
                <p>Adora um bom desafio, pois pode usar sua concentração, criação, raciocínio, poder de análise e persistência. O seu jeito tímido e objetivo, às vezes, o faz parecer frio e até grosso. Entretanto, sua confiança e capacidade fazem com que todos queiram trabalhar com você.</p>
                `,
            image: _.find(files, file => file.filename === 'Estudioso.png').fileUrl,
            qualities: [
                'Usar a inteligência para prever e evitar problemas',
                'Ser independente',
                'Ter certeza do que quer'
            ],
            defects: [
                'Ser exigente demais',
                'Fazer poucos elogios',
                'Ter dificuldade em mostrar o que sente.'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Engenharia',
                'Controladoria e Finanças',
                'Consultoria',
                'Pesquisa'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Ciência e Tecnologia'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Operações de Negócios'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Administração e Vendas'))._id,
            ]
        }),
        new PersonalityType({
            type: 'INFP',
            title: 'O Idealista',
            subtitle: 'Você luta por aquilo que acredita',
            description: `
                <p>Defender uma causa é com você!</p>
                <p>Observador, calmo e agradável, pode parecer tímido e distante. Mas, por dentro, são muitas emoções.</p>
                <p>Procura identificar o que está errado para poder corrigir. É muito bom em perceber os talentos das pessoas e ajudá-las a ter sucesso. Unir as pessoas em torno de uma mesma ideia é com você. Gosta de mudanças e sempre busca coisas novas. Cuidado, porém, para não se perder nos seus pensamentos enquanto a vida acontece.</p>
                `,
            image: _.find(files, file => file.filename === 'Idealista.png').fileUrl,
            qualities: [
                'Sser sensível',
                'Ter curiosidade',
                'Convencer as pessoas'
            ],
            defects: [
                '​Pensar muito e agir pouco',
                'Atrasar tarefas por perfeccionismo',
                'Tentar agradar todo mundo ao mesmo tempo'
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Psicologia ou Psiquiatria',
                'Línguas estrangeiras',
                'Arquitetura',
                'Teologia'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Serviço Social'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Artes'))._id,
            ]
        }),
        new PersonalityType({
            type: 'INFJ',
            title: 'O Defensor',
            subtitle: 'Você trabalha por um mundo mais justo',
            description: `
                <p>Você está sempre lutando por justiça. Quer que todos fiquem bem e que tenham as mesmas oportunidades. Defende suas ideias com firmeza, mas evita ao máximo brigas e confusões.</p>
                <p>Você é muito bom em entender as pessoas e conseguir a ajuda delas. Isso também o torna sensível. Quando muito criticado, você pode ficar infeliz.</p>
                <p>Gostar de ficar sozinho para recarregar a energia e para criar. Sempre busca conhecimento para fazer tudo ainda melhor.</p>
                `,
            image: _.find(files, file => file.filename === 'Defensor.png').fileUrl,
            qualities: [
                'Entender os outros',
                'Agir de acordo com aquilo que fala',
                'Pensar sobre a vida'
            ],
            defects: [
                'Gastar muito tempo na busca pela perfeição',
                'Ficar sozinho',
                'Estar sempre preocupado em não magoar o outro.',
            ],
            careerIndicationText: 'O seu jeito se adapta a muitas profissões. O importante é nunca deixar de aprender e gostar do que faz. Veja algumas carreiras indicadas para você:',
            careersIndicated: [
                'Psicologia ou Psiquiatria',
                'Letras (Escritor)',
                'Filosofia',
                'Advocacia'
            ],
            hollandAreas: [
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Serviço Social'))._id,
                _.find(hollandAreas, hollandArea => (hollandArea.title === 'Artes'))._id,
            ]
        })
    ]
);
