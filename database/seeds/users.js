'use strict';

const _ = require('lodash');
const bcrypt = require('bcryptjs');
const User = require('../../src/models/userModel').User;
const UserAcessTypeEnum = require('../../src/models/userModel').UserAcessTypeEnum;

module.exports = (ways, oauthClients) => (
    [
        new User({
            username: 'app@taqe.com.br',
            email: 'app@taqe.com.br',
            password: bcrypt.hashSync('123', bcrypt.genSaltSync(8), null),
            basicInformation: {
                name: "Renato",
                lastName: 'Dias',
                birthday: new Date(80, 5, 24),
                nationality: 'Brasileiro',
                gender: 'Masculino',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id fermentum elit, sed scelerisque neque. Maecenas faucibus in ex non congue. Nam vel euismod odio. Phasellus eu magna tellus. Curabitur pellentesque ligula enim, sed pharetra libero imperdiet quis. Mauris luctus sodales orci eu convallis. Aliquam maximus sapien vitae risus vestibulum, a commodo dolor consectetur. Suspendisse feugiat efficitur dolor suscipit feugiat.',
                relationship: 'Casado'
            },
            address: {
                street: "Rua dos Ipês",
                number: "200",
                complement: "Casa",
                district: "Consolação",
                city: "Santos",
                state: "São Paulo",
                zipCode: '11800-390',
                country: "Brasil"
            },
            userSettingsNotification: {
                vancancyAndInterviews: {
                    arround: true
                }
            },
            contact: {
                cellPhone: {
                    countryCode: 55,
                    ddd: 11,
                    number: 91933123,
                    whatsApp: true
                },
                landline: {
                    ddd: 11,
                    number: 91933123
                },
                gtalk: 'admin',
                skype: 'admin.skype'
            },
            education: [{
                institution: "Universidade de São Paulo",
                formation: "Engenharia Mecatrônica (Exatas)",
                in: "2014",
                until: "cursando",
                studyHere: true
            }],
            status: true,
            insertDate: new Date(),
            updateDate: undefined,
            way: {
                currentWay: _.find(ways, way => way.name === 'Inicial').name,
                currentLevel: 0
            },
            ways: _.find(ways, way => way.name === 'Inicial'),
            oauthClients: [_.find(oauthClients, oauthClient => oauthClient.clientId === 'app')]
        }),
        new User({
            username: 'danrley@taqe.com.br',
            email: 'danrley@taqe.com.br',
            password: bcrypt.hashSync('123', bcrypt.genSaltSync(8), null),
            basicInformation: {
                name: "Danrley",
                lastName: 'Morais',
                birthday: new Date(95, 5, 24),
                nationality: 'Brasileiro',
                gender: 'Masculino',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id fermentum elit, sed scelerisque neque. Maecenas faucibus in ex non congue. Nam vel euismod odio. Phasellus eu magna tellus. Curabitur pellentesque ligula enim, sed pharetra libero imperdiet quis. Mauris luctus sodales orci eu convallis. Aliquam maximus sapien vitae risus vestibulum, a commodo dolor consectetur. Suspendisse feugiat efficitur dolor suscipit feugiat.',
                relationship: 'Solteiro'
            },
            address: {
                street: "Rua dos Ipês",
                number: "200",
                complement: "Casa",
                district: "Consolação",
                city: "Santos",
                state: "São Paulo",
                zipCode: '11800-390',
                country: "Brasil"
            },
            userSettingsNotification: {
                vancancyAndInterviews: {
                    arround: true
                }
            },
            contact: {
                cellPhone: {
                    countryCode: 55,
                    ddd: 11,
                    number: 91933123,
                    whatsApp: true
                },
                landline: {
                    ddd: 11,
                    number: 91933123
                },
                gtalk: 'admin',
                skype: 'admin.skype'
            },
            education: [{
                institution: "Universidade de São Paulo",
                formation: "Engenharia Mecatrônica (Exatas)",
                in: "2014",
                until: "cursando",
                studyHere: true
            }],
            status: true,
            insertDate: new Date(),
            updateDate: undefined,
            way: {
                currentWay: _.find(ways, way => way.name === 'Inicial').name,
                currentLevel: 0
            },
            ways: _.find(ways, way => way.name === 'Inicial'),
            oauthClients: [_.find(oauthClients, oauthClient => oauthClient.clientId === 'app')],
            // vacancies: vacancies
        }),
        new User({
            username: 'maria@taqe.com.br',
            email: 'maria@taqe.com.br',
            password: bcrypt.hashSync('123', bcrypt.genSaltSync(8), null),
            basicInformation: {
                name: "Maria",
                lastName: 'Dias',
                birthday: new Date(85, 5, 24),
                nationality: 'Brasileiro',
                gender: 'Feminino',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id fermentum elit, sed scelerisque neque. Maecenas faucibus in ex non congue. Nam vel euismod odio. Phasellus eu magna tellus. Curabitur pellentesque ligula enim, sed pharetra libero imperdiet quis. Mauris luctus sodales orci eu convallis. Aliquam maximus sapien vitae risus vestibulum, a commodo dolor consectetur. Suspendisse feugiat efficitur dolor suscipit feugiat.',
                relationship: 'Viúvo'
            },
            address: {
                street: "Rua dos Ipês",
                number: "200",
                complement: "Teste",
                district: "Consolação",
                city: "Santos",
                state: "São Paulo",
                zipCode: '11800-390',
                country: "Brasil"
            },
            userSettingsNotification: {
                vancancyAndInterviews: {
                    arround: true
                }
            },
            contact: {
                cellPhone: {
                    countryCode: 55,
                    ddd: 11,
                    number: 91933123,
                    whatsApp: true
                },
                landline: {
                    ddd: 11,
                    number: 91933123
                },
                gtalk: 'admin',
                skype: 'admin.skype'
            },
            education: [{
                institution: "Universidade de São Paulo",
                formation: "Engenharia Mecatrônica (Exatas)",
                in: "2014",
                until: "cursando",
                studyHere: true
            }],
            status: true,
            insertDate: new Date(),
            updateDate: undefined,
            way: {
                currentWay: _.find(ways, way => way.name === 'Inicial').name,
                currentLevel: 0
            },
            ways: _.find(ways, way => way.name === 'Inicial'),
            oauthClients: [_.find(oauthClients, oauthClient => oauthClient.clientId === 'app')]
        }),
        new User({
            username: 'pedro@taqe.com.br',
            email: 'pedro@taqe.com.br',
            password: bcrypt.hashSync('123', bcrypt.genSaltSync(8), null),
            basicInformation: {
                name: "Pedro",
                lastName: 'Dias',
                birthday: new Date(99, 5, 24),
                nationality: 'Brasileiro',
                gender: 'Feminino',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id fermentum elit, sed scelerisque neque. Maecenas faucibus in ex non congue. Nam vel euismod odio. Phasellus eu magna tellus. Curabitur pellentesque ligula enim, sed pharetra libero imperdiet quis. Mauris luctus sodales orci eu convallis. Aliquam maximus sapien vitae risus vestibulum, a commodo dolor consectetur. Suspendisse feugiat efficitur dolor suscipit feugiat.',
                relationship: 'Solteiro'
            },
            address: {
                street: "Rua dos Ipês",
                number: "200",
                complement: "Teste",
                district: "Consolação",
                city: "Santos",
                state: "São Paulo",
                zipCode: '11800-390',
                country: "Brasil"
            },
            userSettingsNotification: {
                vancancyAndInterviews: {
                    arround: true
                }
            },
            contact: {
                cellPhone: {
                    countryCode: 55,
                    ddd: 11,
                    number: 91933123,
                    whatsApp: true
                },
                landline: {
                    ddd: 11,
                    number: 91933123
                },
                gtalk: 'admin',
                skype: 'admin.skype'
            },
            education: [{
                institution: "Universidade de São Paulo",
                formation: "Engenharia Mecatrônica (Exatas)",
                in: "2014",
                until: "cursando",
                studyHere: true
            }],
            status: true,
            insertDate: new Date(),
            updateDate: undefined,
            way: {
                currentWay: _.find(ways, way => way.name === 'Inicial').name,
                currentLevel: 0
            },
            ways: _.find(ways, way => way.name === 'Inicial'),
            oauthClients: [_.find(oauthClients, oauthClient => oauthClient.clientId === 'app')]
        }),
        new User({
            username: 'joao@taqe.com.br',
            email: 'joao@taqe.com.br',
            password: bcrypt.hashSync('123', bcrypt.genSaltSync(8), null),
            basicInformation: {
                name: "João",
                lastName: 'Dias',
                birthday: new Date(99, 5, 24),
                nationality: 'Brasileiro',
                gender: 'Feminino',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id fermentum elit, sed scelerisque neque. Maecenas faucibus in ex non congue. Nam vel euismod odio. Phasellus eu magna tellus. Curabitur pellentesque ligula enim, sed pharetra libero imperdiet quis. Mauris luctus sodales orci eu convallis. Aliquam maximus sapien vitae risus vestibulum, a commodo dolor consectetur. Suspendisse feugiat efficitur dolor suscipit feugiat.',
                relationship: 'Casado'
            },
            address: {
                street: "Rua dos Ipês",
                number: "200",
                complement: "Teste",
                district: "Consolação",
                city: "Santos",
                state: "São Paulo",
                zipCode: '11800-390',
                country: "Brasil"
            },
            userSettingsNotification: {
                vancancyAndInterviews: {
                    arround: true
                }
            },
            contact: {
                cellPhone: {
                    countryCode: 55,
                    ddd: 11,
                    number: 91933123,
                    whatsApp: true
                },
                landline: {
                    ddd: 11,
                    number: 91933123
                },
                gtalk: 'admin',
                skype: 'admin.skype'
            },
            education: [{
                institution: "Universidade de São Paulo",
                formation: "Engenharia Mecatrônica (Exatas)",
                in: "2014",
                until: "cursando",
                studyHere: true
            }],
            status: true,
            insertDate: new Date(),
            updateDate: undefined,
            way: {
                currentWay: _.find(ways, way => way.name === 'Inicial').name,
                currentLevel: 0
            },
            ways: _.find(ways, way => way.name === 'Inicial'),
            oauthClients: [_.find(oauthClients, oauthClient => oauthClient.clientId === 'app')]
        }),
        new User({
            username: 'site@taqe.com.br',
            email: 'site@taqe.com.br',
            password: bcrypt.hashSync('123', bcrypt.genSaltSync(8), null),
            address: {
                street: "Rua dos Ipês",
                number: "200",
                complement: "Casa",
                district: "Consolação",
                city: "Santos",
                state: "São Paulo",
                zipCode: '11800-390',
                country: "Brasil"
            },
            basicInformation: {
                name: "Usuário",
                lastName: 'do TAQE',
                birthday: new Date(96, 5, 24),
                nationality: 'Brasileiro',
                gender: 'Masculino',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id fermentum elit, sed scelerisque neque. Maecenas faucibus in ex non congue. Nam vel euismod odio. Phasellus eu magna tellus. Curabitur pellentesque ligula enim, sed pharetra libero imperdiet quis. Mauris luctus sodales orci eu convallis. Aliquam maximus sapien vitae risus vestibulum, a commodo dolor consectetur. Suspendisse feugiat efficitur dolor suscipit feugiat.',
                relationship: 'Solteiro'
            },
            contact: {
                cellPhone: {
                    countryCode: 55,
                    ddd: 11,
                    number: 91933123,
                    whatsApp: true
                },
                landline: {
                    ddd: 11,
                    number: 91933123
                },
                gtalk: 'usuario.gtalk',
                skype: 'usuario.skype'
            },
            education: [{
                institution: "Universidade de São Paulo",
                formation: "Engenharia Mecatrônica (Exatas)",
                in: "2014",
                until: "cursando"
            }],
            professionalExperience: [{
                organization: 'Votorantin Lorem Ipsum Dolor',
                office: 'Engenheiro Assistente',
                state: 'São Paulo',
                city: 'São Paulo',
                in: '2010',
                until: '2013',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            }],
            languages: [{
                language: 'Inglês',
                level: 'Avançado'
            }, {
                language: 'Espanhol',
                level: 'Intermediário'
            }],
            volunteering: [{
                organization: 'Nome da Empresa ou Instituição',
                cause: 'Breve descrição da causa',
                office: 'Cargo ou atuação lorem ipsum door sit amet',
                in: '2010',
                until: '2014',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }],
            status: true,
            userSettingsNotification: {
                vancancyAndInterviews: {
                    arround: true
                }
            },
            insertDate: new Date(),
            updateDate: undefined,
            oauthClients: [_.find(oauthClients, oauthClient => oauthClient.clientId === 'site')]
        }),
        new User({
            username: 'cobasi@taqe.com.br',
            email: 'cobasi@taqe.com.br',
            password: bcrypt.hashSync('123', bcrypt.genSaltSync(8), null),
            address: {
                street: "Rua dos Ipês",
                number: "200",
                complement: "Casa",
                district: "Consolação",
                city: "Santos",
                state: "São Paulo",
                zipCode: '11800-390',
                country: "Brasil"
            },
            status: true,
            userSettingsNotification: {
                vancancyAndInterviews: {
                    arround: true
                }
            },
            basicInformation: {
                name: "Cobasi",
                birthday: new Date(96, 5, 24),
                nationality: 'Brasileiro',
                gender: 'Masculino',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id fermentum elit, sed scelerisque neque. Maecenas faucibus in ex non congue. Nam vel euismod odio. Phasellus eu magna tellus. Curabitur pellentesque ligula enim, sed pharetra libero imperdiet quis. Mauris luctus sodales orci eu convallis. Aliquam maximus sapien vitae risus vestibulum, a commodo dolor consectetur. Suspendisse feugiat efficitur dolor suscipit feugiat.',
                relationship: 'Solteiro'
            },
            contact: {
                cellPhone: {
                    countryCode: 55,
                    ddd: 11,
                    number: 91933123,
                    whatsApp: true
                },
                landline: {
                    ddd: 11,
                    number: 91933123
                },
                gtalk: 'usuario.gtalk',
                skype: 'usuario.skype'
            },
            insertDate: new Date(),
            updateDate: undefined,
            oauthClients: [_.find(oauthClients, oauthClient => oauthClient.clientId === 'site')]
        }),
        new User({
            username: 'cms@taqe.com.br',
            email: 'cms@taqe.com.br',
            password: bcrypt.hashSync('123', bcrypt.genSaltSync(8), null),
            address: {
                street: "Rua dos Ipês",
                number: "200",
                complement: "Casa",
                district: "Consolação",
                city: "Santos",
                state: "São Paulo",
                zipCode: '11800-390',
                country: "Brasil"
            },
            basicInformation: {
                name: "Usuário",
                lastName: 'do TAQE',
                birthday: new Date(99, 5, 24),
                nationality: 'Brasileiro',
                gender: 'Masculino',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id fermentum elit, sed scelerisque neque. Maecenas faucibus in ex non congue. Nam vel euismod odio. Phasellus eu magna tellus. Curabitur pellentesque ligula enim, sed pharetra libero imperdiet quis. Mauris luctus sodales orci eu convallis. Aliquam maximus sapien vitae risus vestibulum, a commodo dolor consectetur. Suspendisse feugiat efficitur dolor suscipit feugiat.',
                relationship: 'Solteiro'
            },
            contact: {
                cellPhone: {
                    countryCode: 55,
                    ddd: 11,
                    number: 91933123,
                    whatsApp: true
                },
                landline: {
                    ddd: 11,
                    number: 91933123
                },
                gtalk: 'usuario.gtalk',
                skype: 'usuario.skype'
            },
            education: [{
                institution: "Universidade de São Paulo",
                formation: "Engenharia Mecatrônica (Exatas)",
                in: "2014",
                until: "cursando"
            }],
            professionalExperience: [{
                organization: 'Votorantin Lorem Ipsum Dolor',
                office: 'Engenheiro Assistente',
                state: 'São Paulo',
                city: 'São Paulo',
                in: '2010',
                until: '2013',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            }],
            languages: [{
                language: 'Inglês',
                level: 'Avançado'
            }, {
                language: 'Espanhol',
                level: 'Intermediário'
            }],
            volunteering: [{
                organization: 'Nome da Empresa ou Instituição',
                cause: 'Breve descrição da causa',
                office: 'Cargo ou atuação lorem ipsum door sit amet',
                in: '2010',
                until: '2014',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }],
            status: true,
            userSettingsNotification: {
                vancancyAndInterviews: {
                    arround: true
                }
            },
            insertDate: new Date(),
            updateDate: undefined,
            oauthClients: [_.find(oauthClients, oauthClient => oauthClient.clientId === 'cms')]
        }),
    ]
);
