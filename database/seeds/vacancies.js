'use strict';

const Vacancy = require('../../src/models/vacancyModel').Vacancy;
const _ = require('lodash');

module.exports = (companies, users) => (
    [
        new Vacancy({
            office: 'Operador de Caixa',
            description: 'Profissional atuará com atendimento ao cliente e operação de caixa, entre outras rotinas de Loja',
            applyByApp: true,
            visibility: 'confidential',
            quantity: 10,
            pcd: {
                rule: 'onlyPcd',
                acceptedShortcomings: [
                    'Visual', 'Reabilitado', 'Auditiva'
                ]
            },
            signupDeadline: new Date(),
            daysOff: 2,
            observation: 'Observação',
            workingDays: [{
                key: 'monday',
                value: 'Segunda',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'tuesday',
                value: 'Terça',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'wednesday',
                value: 'Quarta',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'thursday',
                value: 'Quinta',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'friday',
                value: 'Sexta',
                startTime: '06:00',
                endTime: '18:00'
            }],
            wageType: 'maximum',
            wage: 1200,
            commission: 0,
            unit: null,
            requirements: 'Organização e gerenciamento',
            activities: 'Atividades',
            benefits: ["Benefício 1"],
            languages: [{
                name: 'Português',
                level: 'Avançado'
            }],
            hiringRegimes: ["CLT"],
            supplementaryQuestions: [{
                asking: "Texto Livre",
                type: "text",
                alternatives: []
            }, {
                asking: "Múltipla Escolha (1 Opção)",
                type: "radio",
                alternatives: [{
                    text: "Sim",
                    position: 0
                }, {
                    text: "Não",
                    position: 1
                }, {
                    text: "Não sei",
                    position: 2
                }]
            }, {
                asking: "Multipla Escolha - Mais de 1 opção",
                type: "check",
                alternatives: [{
                    text: "Sim",
                    position: 0,
                }, {
                    text: "Não",
                    position: 1,
                }, {
                    text: "Não sei",
                    position: 2,
                }]
            }, {
                type: "linear",
                asking: "Escala Linear",
                final: 10,
                initial: 0,
                alternatives: []
            }, {
                asking: "Dropdown",
                type: "dropdown",
                alternatives: [{
                    text: "Sim",
                    position: 0
                }, {
                    text: "Não",
                    position: 1
                }, {
                    text: "Não sei",
                    position: 2
                }]
            }],
            // minimumAffinity: 20,
            process: {
                name: "Processo 1",
                isProcessDefault: false,
                steps: [{
                    name: "Todos",
                    mandatory: true,
                    needScheduling: false,
                    candidates: [{
                        candidate: _.find(users, user => user.username === 'maria@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'pedro@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'joao@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'danrley@taqe.com.br')._id
                    }],
                    currentStep: true
                }, {
                    mandatory: true,
                    name: "Selecionados",
                    needScheduling: true,
                    workingDays: 1
                }, {
                    name: "Pro1 Passo 1",
                    needScheduling: true,
                    workingDays: 2
                }, {
                    name: "Pro1 Passo 2",
                    needScheduling: false,
                    workingDays: 3
                }, {
                    mandatory: true,
                    name: "Contratados",
                    needScheduling: false,
                    workingDays: 4
                }, {
                    mandatory: true,
                    name: "Dispensados"
                }]
            },
            // process: companies[0].vacancyProcess[0],
            company: companies[0]._id,

            // candidates: new VacancyCandidate({
            //             vacancy: vacancies[0]._id,
            //             user: users[1]._id,
            //             supplementaryQuestionsAnswers: [{
            //                 question: vacancies[0].supplementaryQuestions[0]._id,
            //                 asking: vacancies[0].supplementaryQuestions[0].asking,
            //                 type: vacancies[0].supplementaryQuestions[0].type,
            //                 answers: [
            //                     'Resposta do texto Livre'
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[1]._id,
            //                 asking: vacancies[0].supplementaryQuestions[1].asking,
            //                 type: vacancies[0].supplementaryQuestions[1].type,
            //                 answers: [
            //                     vacancies[0].supplementaryQuestions[1].alternatives[0].text
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[2]._id,
            //                 asking: vacancies[0].supplementaryQuestions[2].asking,
            //                 type: vacancies[0].supplementaryQuestions[2].type,
            //                 answers: [
            //                     vacancies[0].supplementaryQuestions[2].alternatives[0].text,
            //                     vacancies[0].supplementaryQuestions[2].alternatives[1].text,
            //                     vacancies[0].supplementaryQuestions[2].alternatives[2].text
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[3]._id,
            //                 asking: vacancies[0].supplementaryQuestions[3].asking,
            //                 type: vacancies[0].supplementaryQuestions[3].type,
            //                 answers: [
            //                     (vacancies[0].supplementaryQuestions[3].final + vacancies[0].supplementaryQuestions[3].initial) / 2
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[4]._id,
            //                 asking: vacancies[0].supplementaryQuestions[4].asking,
            //                 type: vacancies[0].supplementaryQuestions[4].type,
            //                 answers: [
            //                     vacancies[0].supplementaryQuestions[4].alternatives[0].text,
            //                 ]
            //             }],
            //         })
        }),
        new Vacancy({
            office: 'Cadastro',
            description: 'Profissional atuará com atendimento ao cliente e operação de caixa, entre outras rotinas de Loja',
            applyByApp: true,
            visibility: 'confidential',
            quantity: 10,
            pcd: {
                rule: 'onlyPcd',
                acceptedShortcomings: [
                    'Visual', 'Reabilitado', 'Auditiva'
                ]
            },
            signupDeadline: new Date(),
            daysOff: 2,
            observation: 'Observação',
            workingDays: [{
                key: 'monday',
                value: 'Segunda',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'tuesday',
                value: 'Terça',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'wednesday',
                value: 'Quarta',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'thursday',
                value: 'Quinta',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'friday',
                value: 'Sexta',
                startTime: '06:00',
                endTime: '18:00'
            }],
            wageType: 'maximum',
            wage: 1200,
            commission: 0,
            unit: null,
            requirements: 'Organização e gerenciamento',
            activities: 'Atividades',
            benefits: ["Benefício 1"],
            languages: [{
                name: 'Português',
                level: 'Avançado'
            }],
            hiringRegimes: ["CLT"],
            supplementaryQuestions: [{
                asking: "Texto Livre",
                type: "text",
                alternatives: []
            }, {
                asking: "Múltipla Escolha (1 Opção)",
                type: "radio",
                alternatives: [{
                    text: "Sim",
                    position: 0
                }, {
                    text: "Não",
                    position: 1
                }, {
                    text: "Não sei",
                    position: 2
                }]
            }, {
                asking: "Multipla Escolha - Mais de 1 opção",
                type: "check",
                alternatives: [{
                    text: "Sim",
                    position: 0,
                }, {
                    text: "Não",
                    position: 1,
                }, {
                    text: "Não sei",
                    position: 2,
                }]
            }, {
                type: "linear",
                asking: "Escala Linear",
                final: 10,
                initial: 0,
                alternatives: []
            }, {
                asking: "Dropdown",
                type: "dropdown",
                alternatives: [{
                    text: "Sim",
                    position: 0
                }, {
                    text: "Não",
                    position: 1
                }, {
                    text: "Não sei",
                    position: 2
                }]
            }],
            // minimumAffinity: 20,
            process: {
                name: "Processo 1",
                isProcessDefault: false,
                steps: [{
                    name: "Todos",
                    mandatory: true,
                    needScheduling: false,
                    candidates: [{
                        candidate: _.find(users, user => user.username === 'maria@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'pedro@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'joao@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'danrley@taqe.com.br')._id
                    }],
                    currentStep: true
                }, {
                    mandatory: true,
                    name: "Selecionados",
                    needScheduling: true,
                    workingDays: 1
                }, {
                    name: "Pro1 Passo 1",
                    needScheduling: true,
                    workingDays: 2
                }, {
                    name: "Pro1 Passo 2",
                    needScheduling: false,
                    workingDays: 3
                }, {
                    mandatory: true,
                    name: "Contratados",
                    needScheduling: false,
                    workingDays: 4
                }, {
                    mandatory: true,
                    name: "Dispensados"
                }]
            },
            // process: companies[0].vacancyProcess[0],
            company: companies[0]._id,

            // candidates: new VacancyCandidate({
            //             vacancy: vacancies[0]._id,
            //             user: users[1]._id,
            //             supplementaryQuestionsAnswers: [{
            //                 question: vacancies[0].supplementaryQuestions[0]._id,
            //                 asking: vacancies[0].supplementaryQuestions[0].asking,
            //                 type: vacancies[0].supplementaryQuestions[0].type,
            //                 answers: [
            //                     'Resposta do texto Livre'
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[1]._id,
            //                 asking: vacancies[0].supplementaryQuestions[1].asking,
            //                 type: vacancies[0].supplementaryQuestions[1].type,
            //                 answers: [
            //                     vacancies[0].supplementaryQuestions[1].alternatives[0].text
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[2]._id,
            //                 asking: vacancies[0].supplementaryQuestions[2].asking,
            //                 type: vacancies[0].supplementaryQuestions[2].type,
            //                 answers: [
            //                     vacancies[0].supplementaryQuestions[2].alternatives[0].text,
            //                     vacancies[0].supplementaryQuestions[2].alternatives[1].text,
            //                     vacancies[0].supplementaryQuestions[2].alternatives[2].text
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[3]._id,
            //                 asking: vacancies[0].supplementaryQuestions[3].asking,
            //                 type: vacancies[0].supplementaryQuestions[3].type,
            //                 answers: [
            //                     (vacancies[0].supplementaryQuestions[3].final + vacancies[0].supplementaryQuestions[3].initial) / 2
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[4]._id,
            //                 asking: vacancies[0].supplementaryQuestions[4].asking,
            //                 type: vacancies[0].supplementaryQuestions[4].type,
            //                 answers: [
            //                     vacancies[0].supplementaryQuestions[4].alternatives[0].text,
            //                 ]
            //             }],
            //         })
        }),
        new Vacancy({
            office: 'Teste vaga',
            description: 'Profissional atuará com atendimento ao cliente e operação de caixa, entre outras rotinas de Loja',
            applyByApp: true,
            visibility: 'confidential',
            quantity: 10,
            pcd: {
                rule: 'onlyPcd',
                acceptedShortcomings: [
                    'Visual', 'Reabilitado', 'Auditiva'
                ]
            },
            signupDeadline: new Date(),
            daysOff: 2,
            observation: 'Observação',
            workingDays: [{
                key: 'monday',
                value: 'Segunda',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'tuesday',
                value: 'Terça',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'wednesday',
                value: 'Quarta',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'thursday',
                value: 'Quinta',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'friday',
                value: 'Sexta',
                startTime: '06:00',
                endTime: '18:00'
            }],
            wageType: 'maximum',
            wage: 1200,
            commission: 0,
            unit: null,
            requirements: 'Organização e gerenciamento',
            activities: 'Atividades',
            benefits: ["Benefício 1"],
            languages: [{
                name: 'Português',
                level: 'Avançado'
            }],
            hiringRegimes: ["CLT"],
            supplementaryQuestions: [{
                asking: "Texto Livre",
                type: "text",
                alternatives: []
            }, {
                asking: "Múltipla Escolha (1 Opção)",
                type: "radio",
                alternatives: [{
                    text: "Sim",
                    position: 0
                }, {
                    text: "Não",
                    position: 1
                }, {
                    text: "Não sei",
                    position: 2
                }]
            }, {
                asking: "Multipla Escolha - Mais de 1 opção",
                type: "check",
                alternatives: [{
                    text: "Sim",
                    position: 0,
                }, {
                    text: "Não",
                    position: 1,
                }, {
                    text: "Não sei",
                    position: 2,
                }]
            }, {
                type: "linear",
                asking: "Escala Linear",
                final: 10,
                initial: 0,
                alternatives: []
            }, {
                asking: "Dropdown",
                type: "dropdown",
                alternatives: [{
                    text: "Sim",
                    position: 0
                }, {
                    text: "Não",
                    position: 1
                }, {
                    text: "Não sei",
                    position: 2
                }]
            }],
            // minimumAffinity: 20,
            process: {
                name: "Processo 1",
                isProcessDefault: false,
                steps: [{
                    name: "Todos",
                    mandatory: true,
                    needScheduling: false,
                    candidates: [{
                        candidate: _.find(users, user => user.username === 'maria@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'pedro@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'joao@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'danrley@taqe.com.br')._id
                    }],
                    currentStep: true
                }, {
                    mandatory: true,
                    name: "Selecionados",
                    needScheduling: true,
                    workingDays: 1
                }, {
                    name: "Pro1 Passo 1",
                    needScheduling: true,
                    workingDays: 2
                }, {
                    name: "Pro1 Passo 2",
                    needScheduling: false,
                    workingDays: 3
                }, {
                    mandatory: true,
                    name: "Contratados",
                    needScheduling: false,
                    workingDays: 4
                }, {
                    mandatory: true,
                    name: "Dispensados"
                }]
            },
            // process: companies[0].vacancyProcess[0],
            company: companies[0]._id,

            // candidates: new VacancyCandidate({
            //             vacancy: vacancies[0]._id,
            //             user: users[1]._id,
            //             supplementaryQuestionsAnswers: [{
            //                 question: vacancies[0].supplementaryQuestions[0]._id,
            //                 asking: vacancies[0].supplementaryQuestions[0].asking,
            //                 type: vacancies[0].supplementaryQuestions[0].type,
            //                 answers: [
            //                     'Resposta do texto Livre'
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[1]._id,
            //                 asking: vacancies[0].supplementaryQuestions[1].asking,
            //                 type: vacancies[0].supplementaryQuestions[1].type,
            //                 answers: [
            //                     vacancies[0].supplementaryQuestions[1].alternatives[0].text
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[2]._id,
            //                 asking: vacancies[0].supplementaryQuestions[2].asking,
            //                 type: vacancies[0].supplementaryQuestions[2].type,
            //                 answers: [
            //                     vacancies[0].supplementaryQuestions[2].alternatives[0].text,
            //                     vacancies[0].supplementaryQuestions[2].alternatives[1].text,
            //                     vacancies[0].supplementaryQuestions[2].alternatives[2].text
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[3]._id,
            //                 asking: vacancies[0].supplementaryQuestions[3].asking,
            //                 type: vacancies[0].supplementaryQuestions[3].type,
            //                 answers: [
            //                     (vacancies[0].supplementaryQuestions[3].final + vacancies[0].supplementaryQuestions[3].initial) / 2
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[4]._id,
            //                 asking: vacancies[0].supplementaryQuestions[4].asking,
            //                 type: vacancies[0].supplementaryQuestions[4].type,
            //                 answers: [
            //                     vacancies[0].supplementaryQuestions[4].alternatives[0].text,
            //                 ]
            //             }],
            //         })
        }),
        new Vacancy({
            office: 'Vaga seed',
            description: 'Profissional atuará com atendimento ao cliente e operação de caixa, entre outras rotinas de Loja',
            applyByApp: true,
            visibility: 'confidential',
            quantity: 10,
            pcd: {
                rule: 'onlyPcd',
                acceptedShortcomings: [
                    'Visual', 'Reabilitado', 'Auditiva'
                ]
            },
            signupDeadline: new Date(),
            daysOff: 2,
            observation: 'Observação',
            workingDays: [{
                key: 'monday',
                value: 'Segunda',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'tuesday',
                value: 'Terça',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'wednesday',
                value: 'Quarta',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'thursday',
                value: 'Quinta',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'friday',
                value: 'Sexta',
                startTime: '06:00',
                endTime: '18:00'
            }],
            wageType: 'maximum',
            wage: 1200,
            commission: 0,
            unit: null,
            requirements: 'Organização e gerenciamento',
            activities: 'Atividades',
            benefits: ["Benefício 1"],
            languages: [{
                name: 'Português',
                level: 'Avançado'
            }],
            hiringRegimes: ["CLT"],
            supplementaryQuestions: [{
                asking: "Texto Livre",
                type: "text",
                alternatives: []
            }, {
                asking: "Múltipla Escolha (1 Opção)",
                type: "radio",
                alternatives: [{
                    text: "Sim",
                    position: 0
                }, {
                    text: "Não",
                    position: 1
                }, {
                    text: "Não sei",
                    position: 2
                }]
            }, {
                asking: "Multipla Escolha - Mais de 1 opção",
                type: "check",
                alternatives: [{
                    text: "Sim",
                    position: 0,
                }, {
                    text: "Não",
                    position: 1,
                }, {
                    text: "Não sei",
                    position: 2,
                }]
            }, {
                type: "linear",
                asking: "Escala Linear",
                final: 10,
                initial: 0,
                alternatives: []
            }, {
                asking: "Dropdown",
                type: "dropdown",
                alternatives: [{
                    text: "Sim",
                    position: 0
                }, {
                    text: "Não",
                    position: 1
                }, {
                    text: "Não sei",
                    position: 2
                }]
            }],
            // minimumAffinity: 20,
            process: {
                name: "Processo 1",
                isProcessDefault: false,
                steps: [{
                    name: "Todos",
                    mandatory: true,
                    needScheduling: false,
                    candidates: [{
                        candidate: _.find(users, user => user.username === 'maria@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'pedro@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'joao@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'danrley@taqe.com.br')._id
                    }],
                    currentStep: true
                }, {
                    mandatory: true,
                    name: "Selecionados",
                    needScheduling: true,
                    workingDays: 1
                }, {
                    name: "Pro1 Passo 1",
                    needScheduling: true,
                    workingDays: 2
                }, {
                    name: "Pro1 Passo 2",
                    needScheduling: false,
                    workingDays: 3
                }, {
                    mandatory: true,
                    name: "Contratados",
                    needScheduling: false,
                    workingDays: 4
                }, {
                    mandatory: true,
                    name: "Dispensados"
                }]
            },
            // process: companies[0].vacancyProcess[0],
            company: companies[0]._id,

            // candidates: new VacancyCandidate({
            //             vacancy: vacancies[0]._id,
            //             user: users[1]._id,
            //             supplementaryQuestionsAnswers: [{
            //                 question: vacancies[0].supplementaryQuestions[0]._id,
            //                 asking: vacancies[0].supplementaryQuestions[0].asking,
            //                 type: vacancies[0].supplementaryQuestions[0].type,
            //                 answers: [
            //                     'Resposta do texto Livre'
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[1]._id,
            //                 asking: vacancies[0].supplementaryQuestions[1].asking,
            //                 type: vacancies[0].supplementaryQuestions[1].type,
            //                 answers: [
            //                     vacancies[0].supplementaryQuestions[1].alternatives[0].text
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[2]._id,
            //                 asking: vacancies[0].supplementaryQuestions[2].asking,
            //                 type: vacancies[0].supplementaryQuestions[2].type,
            //                 answers: [
            //                     vacancies[0].supplementaryQuestions[2].alternatives[0].text,
            //                     vacancies[0].supplementaryQuestions[2].alternatives[1].text,
            //                     vacancies[0].supplementaryQuestions[2].alternatives[2].text
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[3]._id,
            //                 asking: vacancies[0].supplementaryQuestions[3].asking,
            //                 type: vacancies[0].supplementaryQuestions[3].type,
            //                 answers: [
            //                     (vacancies[0].supplementaryQuestions[3].final + vacancies[0].supplementaryQuestions[3].initial) / 2
            //                 ]
            //             }, {
            //                 question: vacancies[0].supplementaryQuestions[4]._id,
            //                 asking: vacancies[0].supplementaryQuestions[4].asking,
            //                 type: vacancies[0].supplementaryQuestions[4].type,
            //                 answers: [
            //                     vacancies[0].supplementaryQuestions[4].alternatives[0].text,
            //                 ]
            //             }],
            //         })
        }),
        new Vacancy({
            office: 'Repositor',
            description: 'Faz a organização, conservação e precificação dos produtos',
            applyByApp: true,
            visibility: 'confidential',
            quantity: 10,
            pcd: {
                rule: 'onlyPcd',
                acceptedShortcomings: [
                    'Visual', 'Reabilitado', 'Auditiva'
                ]
            },
            signupDeadline: new Date(),
            daysOff: 2,
            observation: 'Observação',
            workingDays: [{
                key: 'monday',
                value: 'Segunda',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'tuesday',
                value: 'Terça',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'wednesday',
                value: 'Quarta',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'thursday',
                value: 'Quinta',
                startTime: '06:00',
                endTime: '18:00'
            }, {
                key: 'friday',
                value: 'Sexta',
                startTime: '06:00',
                endTime: '18:00'
            }],
            wageType: 'maximum',
            wage: 1200,
            commission: 0,
            unit: null,
            requirements: 'Organização e gerenciamento',
            activities: 'Atividades',
            benefits: ["Benefício 1"],
            languages: [{
                name: 'Português',
                level: 'Avançado'
            }],
            hiringRegimes: ["CLT"],
            supplementaryQuestions: [],
            minimumAffinity: 20,
            process: {
                name: "Processo 1",
                isProcessDefault: false,
                steps: [{
                    name: "Todos",
                    mandatory: true,
                    needScheduling: false,
                    candidates: [{
                        candidate: _.find(users, user => user.username === 'maria@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'pedro@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'joao@taqe.com.br')._id
                    }, {
                        candidate: _.find(users, user => user.username === 'danrley@taqe.com.br')._id
                    }],
                }, {
                    mandatory: true,
                    name: "Selecionados",
                    needScheduling: true,
                    workingDays: 1
                }, {
                    name: "Pro1 Passo 1",
                    needScheduling: true,
                    workingDays: 2
                }, {
                    name: "Pro1 Passo 2",
                    needScheduling: false,
                    workingDays: 3
                }, {
                    mandatory: true,
                    name: "Contratados",
                    needScheduling: false,
                    workingDays: 4
                }, {
                    mandatory: true,
                    name: "Dispensados"
                }]
            },
            // process: companies[0].vacancyProcess[0],
            company: companies[0]._id
        })
    ]
);
