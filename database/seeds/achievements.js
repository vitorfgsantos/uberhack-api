'use strict';

const _ = require('lodash');
const Achievements = require('../../src/models/achievementsModel').Achievements;

module.exports = (files) => (
    [
        // friends
        // new Achievements({
        //     area: 'friends',
        //     name: 'O chamado I',
        //     rule: 'invitedFriends10'
        // }),
        // new Achievements({
        //     area: 'friends',
        //     name: 'O chamado II',
        //     rule: 'invitedFriends50'
        // }),
        // new Achievements({
        //     area: 'friends',
        //     name: 'O chamado III',
        //     rule: 'invitedFriends200',
        // }),
        // new Achievements({
        //     area: 'friends',
        //     name: 'Companhia',
        //     rule: 'friend1'
        // }),


        // selfKnowledge
        new Achievements({
            area: 'selfKnowledge',
            name: 'Quem sou eu',
            description: 'Você acaba de ganhar uma medalha por completar o Teste de Personalidade.',
            image: _.find(files, file => file.filename === 'quem_sou_eu.png').fileUrl,
            rule: 'testPsychological'
        }),
        new Achievements({
            area: 'selfKnowledge',
            name: 'Competente',
            description: 'Você acaba de ganhar uma medalha por completar o teste de Competências.',
            image: _.find(files, file => file.filename === 'competente.png').fileUrl,
            rule: 'finishTestSkills'
        }),
        new Achievements({
            area: 'selfKnowledge',
            name: '3 Estrelas',
            description: 'Você acaba de ganhar uma medalha por finalizar a primeira aula com 3 estrelas.',
            image: _.find(files, file => file.filename === 'tres_estrelas.png').fileUrl,
            rule: 'threeStars'
        }),


        // capacity
        new Achievements({
            area: 'capacity',
            name: 'Especialista',
            description: 'Você acaba de ganhar uma medalha por completar o primeiro tema de conhecimento.',
            image: _.find(files, file => file.filename === 'especialista.png').fileUrl,
            rule: 'specialist'
        }),
        new Achievements({
            area: 'capacity',
            name: 'Sabe Tudo',
            description: 'Você acaba de ganhar uma medalha por receber pelo menos uma estrela em cada tema existente.',
            image: _.find(files, file => file.filename === 'sabe_tudo.png').fileUrl,
            rule: 'knowAll'
        }),
        new Achievements({
            area: 'capacity',
            name: 'Consciente',
            description: 'Você acaba de ganhar uma medalha por completar a categoria de Propósito de Vida.',
            image: _.find(files, file => file.filename === 'sabe_tudo.png').fileUrl,
            rule: 'lifePurposeCompleted'
        }),
        new Achievements({
            area: 'capacity',
            name: 'Marketeiro',
            description: 'Você acaba de ganhar uma medalha por completar a categoria de Marketing Pessoal.',
            image: _.find(files, file => file.filename === 'marketeiro.png').fileUrl,
            rule: 'personalMarketingCompleted'
        }),
        new Achievements({
            area: 'capacity',
            name: 'Explorador',
            description: 'Você acaba de ganhar uma medalha por completar a categoria de Busca pelo Emprego.',
            image: _.find(files, file => file.filename === 'explorador.png').fileUrl,
            rule: 'searchForJobsCompleted'
        }),
        new Achievements({
            area: 'capacity',
            name: 'Preparado',
            description: 'Você acaba de ganhar uma medalha por completar a categoria de Processo Seletivo.',
            image: _.find(files, file => file.filename === 'preparado.png').fileUrl,
            rule: 'selectiveProcessCompleted'
        }),
        new Achievements({
            area: 'capacity',
            name: 'Criativo',
            description: 'Você acaba de ganhar uma medalha por completar a categoria de Criatividade e Inovação.',
            image: _.find(files, file => file.filename === 'criativo.png').fileUrl,
            rule: 'creativeCompleted'
        }),
        new Achievements({
            area: 'capacity',
            name: 'Trabalho em Equipe',
            description: 'Você acaba de ganhar uma medalha por completar a categoria de Liderança e Trabalho em Equipe.',
            image: _.find(files, file => file.filename === 'trabalho_equipe.png').fileUrl,
            rule: 'teamWorkCompleted'
        }),
        new Achievements({
            area: 'capacity',
            name: 'Cliente em 1º Lugar',
            description: 'Você acaba de ganhar uma medalha por completar a categoria de Atendimento ao Cliente.',
            image: _.find(files, file => file.filename === 'cliente_primeiro_lugar.png').fileUrl,
            rule: 'customerServiceCompleted'
        }),
        new Achievements({
            area: 'capacity',
            name: 'Comunicador',
            description: 'Você acaba de ganhar uma medalha por completar a categoria de Comunicação.',
            image: _.find(files, file => file.filename === 'comunicador.png').fileUrl,
            rule: 'communicationCompleted'
        }),
        new Achievements({
            area: 'capacity',
            name: 'Eficiente',
            description: 'Você acaba de ganhar uma medalha por completar a categoria de Organização e Produtividade.',
            image: _.find(files, file => file.filename === 'eficiente.png').fileUrl,
            rule: 'efficiencyCompleted'
        }),
        new Achievements({
            area: 'capacity',
            name: 'Administrador',
            description: 'Você acaba de ganhar uma medalha por completar a categoria de Administração e Finanças.',
            image: _.find(files, file => file.filename === 'administrador.png').fileUrl,
            rule: 'managementCompleted'
        }),
        new Achievements({
            area: 'capacity',
            name: 'Estrategista',
            description: 'Você acaba de ganhar uma medalha por completar a categoria de Análise e tomada de decisões (indicadores).',
            image: _.find(files, file => file.filename === 'estrategia.png').fileUrl,
            rule: 'strategyCompleted'
        }),

        new Achievements({
            area: 'capacity',
            name: '1º Comentário',
            description: 'Você acaba de ganhar uma medalha por inserir o primeiro comentário nesta atividade.',
            image: _.find(files, file => file.filename === 'primeiro_comentario.png').fileUrl,
            rule: 'comment1'
        }),
        new Achievements({
            name: '1ª Aula',
            description: 'Você acaba de ganhar uma medalha por finalizar sua primeira aula.',
            image: _.find(files, file => file.filename === 'primeira_aula.png').fileUrl,
            area: 'capacity',
            rule: 'firstLesson',
        }),

        // CAPTAÇÃO
        new Achievements({
            area: 'catchment',
            name: 'Plugado',
            rule: 'facebookConnect'
        }),

        // GERAL
        // new Achievements({
        //     area: 'general',
        //     name: 'Parceiro',
        //     rule: 'rateApp'
        // }),
        //
        // new Achievements({
        //     area: 'general',
        //     name: 'Promoter',
        //     rule: 'shareApp'
        // }),
        new Achievements({
            area: 'general',
            name: 'Ponta Firme I',
            description: 'Você acaba de ganhar uma medalha por acessar o TAQE 3 dias seguidos.',
            image: _.find(files, file => file.filename === 'ponta_firme_3.png').fileUrl,
            rule: '3days'
        }),
        new Achievements({
            area: 'general',
            name: 'Ponta Firme II',
            description: 'Você acaba de ganhar uma medalha por acessar o TAQE 10 dias seguidos.',
            image: _.find(files, file => file.filename === 'ponta_firme_10.png').fileUrl,
            rule: '10days'
        }),
        new Achievements({
            area: 'general',
            name: 'Ponta Firme III',
            description: 'Você acaba de ganhar uma medalha por acessar o TAQE 30 dias seguidos.',
            image: _.find(files, file => file.filename === 'ponta_firme_30.png').fileUrl,
            rule: '30days'
        }),

        // home
        // new Achievements({
        //     area: 'home',
        //     name: 'Velhos tempos',
        //     rule: '365days'
        // }),

        // opportunity
        new Achievements({
            area: 'opportunity',
            name: '1 vaga elegivel',
            description: 'Você acaba de ganhar uma medalha por desbloquear sua primeira vaga.',
            image: _.find(files, file => file.filename === 'emprego_vista.png').fileUrl,
            rule: 'gaveMatch'
        }),
        new Achievements({
          area: 'opportunity',
          name: 'Candidato',
          description: 'Você acaba de ganhar uma medalha por se candidatar pela primeira vez.',
          image: _.find(files, file => file.filename === 'candidato.png').fileUrl,
          rule: 'applyForJob'
        }),
        new Achievements({
            area: 'opportunity',
            name: 'Grandes Chances',
            description: 'Você acaba de ganhar uma medalha por ter recebido um convite de entrevista pela primeira vez.',
            image: _.find(files, file => file.filename === 'grandes_chances.png').fileUrl,
            rule: 'gooseBumps'
        }),

        // user
        new Achievements({
            area: 'user',
            name: 'Guru',
            description: 'Você acaba de ganhar uma medalha por completar todas as aulas e testes.',
            image: _.find(files, file => file.filename === 'grandes_chances.png').fileUrl,
            rule: 'guru'
        }),
        new Achievements({
            area: 'user',
            name: 'Iniciante',
            rule: 'profile100'
        }),
        new Achievements({
            area: 'user',
            name: 'Meu currículo',
            rule: 'exportCurriculum'
        }),
        new Achievements({
            area: 'user',
            name: 'Histórico',
            description: 'Você acaba de ganhar uma medalha por inserir seu histórico escolar.',
            image: _.find(files, file => file.filename === 'escolado.png').fileUrl,
            rule: 'education'
        }),
        new Achievements({
            area: 'user',
            name: 'Voluntário',
            description: 'Você acaba de ganhar uma medalha por inserir suas informações de voluntariado.',
            image: _.find(files, file => file.filename === 'voluntario.png').fileUrl,
            rule: 'volunteering'
        }),
        new Achievements({
            area: 'user',
            name: 'Determinado',
            description: 'Você acaba de ganhar uma medalha por realizar a dinâmica de Objetivos Profissionais.',
            image: _.find(files, file => file.filename === 'determinado.png').fileUrl,
            rule: 'professionalGoals'
        }),
        new Achievements({
            area: 'user',
            name: 'Contratado',
            rule: 'hired'
        }),
        new Achievements({
            area: 'user',
            name: 'Cérebro',
            description: 'Você acaba de ganhar uma medalha por completar todos os testes de Lógica.',
            image: _.find(files, file => file.filename === 'cerebro.png').fileUrl,
            rule: 'logicTestCompleted'
        }),
        new Achievements({
            area: 'user',
            name: 'Linguista',
            description: 'Você acaba de ganhar uma medalha por completar todos os testes de Português.',
            image: _.find(files, file => file.filename === 'linguista.png').fileUrl,
            rule: 'portugueseTestCompleted'
        }),
        new Achievements({
            area: 'user',
            name: 'Enciclopédia',
            description: 'Você acaba de ganhar uma medalha por completar todos os testes de Conhecimentos Gerais.',
            image: _.find(files, file => file.filename === 'enciclopedia.png').fileUrl,
            rule: 'generalKnowledgeTestCompleted'
        }),
        new Achievements({
            area: 'user',
            name: 'Conhecedor',
            description: 'Você acaba de ganhar uma medalha por completar todos os testes.',
            image: _.find(files, file => file.filename === 'conhecedor.png').fileUrl,
            rule: 'expert'
        }),
    ]
);
