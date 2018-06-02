'use strict';

const VacancyProfiles = require('../../src/models/vacancyProfilesModel').VacancyProfiles;

module.exports = () => (
    [
        new VacancyProfiles({
            group: 0,
            title: 'Assinale até 25 características de candidatos que podem se adequar ao perfil da vaga',
            types: [
                'Amável',
                'Assertivo',
                'Atencioso',
                'Calmo',
                'Carinhoso',
                'Comunicativo',
                'Confiável',
                'Criativo',
                'Detalhista',
                'Divertido',
                'Eficiente',
                'Energetico',
                'Entusiasta',
                'Espontâneo',
                'Estável',
                'Estratégico',
                'Evita conflito',
                'Extrovertidos',
                'Flexível',
                'Trabalha duro',
                'Idealista',
                'Imaginativo',
                'Impositivo',
                'Impulsivo',
                'Independentes',
                'Introvertido',
                'Líder',
                'Lógico',
                'Minucioso',
                'Observador',
                'Organizado',
                'Pacíficos',
                'Pensam fora da caixa',
                'Perfeccionista',
                'Prático',
                'Racional',
                'Realizador',
                'Resolutivo',
                'Seguro',
                'Sensível',
                'Sério',
                'Simpático',
                'Solidário' ,
                'Visionário',
            ],
            maxLength: 25
        }),

        new VacancyProfiles({
            group: 1,
            title: 'Assinale até 15 afirmações que representem os melhores candidatos para esta vaga. Importante ter profissionais que:	',
            types: [
                'Focado em concretizar planos',
                'Não gosta de fazer a mesma coisa da mesma forma repetidamente',
                'Com boa fluência verbal',
                'Gosta de seguir rotina',
                'Gosta de cuidar dos detalhes',
                'Gosta de planejamento',
                'Gosta de transmitir conhecimento',
                'Sem resistência à mudança',
                'É bom em criar conceitos',
                'Comunica - se bem e toma decisões rápidas',
                'Adoram compartilhar seu ponto de vista com os outros',
                'Tem conforto em ser o centro das atenções',
                'Gosta de se divertir com tudo - curtir a vida sempre',
                'Detesta ineficiência e desorganização',
                'Dá valor alto para tradição, regras e sentimento de segurança ',
                'Gostam de ser minuciosos e pontualidade ao realizar o trabalho ',
                'Obtém satisfação pessoal ao ajudar os outros',
                'Criam harmonia em todas as situações que encontram',
                'Não gostam de lidar com conflitos',
                'Organizam fatos usando primeiro os princípios lógicos',
                'Preocupado com o sentimento dos outros',
                'Dá enorme valor para cumprir o combinado',
                'Trabalha com muita determinação e seriedade',
                'Gostam de aprender fazendo coisas',
                'Cobram muito de si e das pessoas a sua volta',
                'Sempre são os mais quietos e silenciosos',
                'São rápidos para ver possibilidades nas situações',
                'Precisam ter próprio espaço reservado',
                'Tem agilidade mental mas é pouco falante',
                'Estabelecem altas expectativas e padrões',
                'Muita gente a sua volta ou festas tende a drenar a sua energia',
                'Usam da intuição e estão mais focados no panorama geral',
                'Não dão valor para detalhes mundanos ou de menor impacto',
                'Gostam de estar em sintonia com o mundo ao seu redor',
                'Necessitam trabalhar com informações práticas e concretas',
                'Dão importância e tem muito foco no resultado',
                'Gostam de estar em ambiente ordenado e limpo sempre',
                'São fiéis a seus superiores',


            ],
            maxLength: 15
        })
    ]
);