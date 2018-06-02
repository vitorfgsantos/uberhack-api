'use strict';

const VacancyCandidate = require('../../src/models/vacancy/vacancyCandidatesModel').VacancyCandidate;

module.exports = (users, vacancies) => (
    [
        new VacancyCandidate({
            vacancy: vacancies[0]._id,
            user: users[1]._id,
            supplementaryQuestionsAnswers: [{
                question: vacancies[0].supplementaryQuestions[0]._id,
                asking: vacancies[0].supplementaryQuestions[0].asking,
                type: vacancies[0].supplementaryQuestions[0].type,
                answers: [
                    'Resposta do texto Livre'
                ]
            }, {
                question: vacancies[0].supplementaryQuestions[1]._id,
                asking: vacancies[0].supplementaryQuestions[1].asking,
                type: vacancies[0].supplementaryQuestions[1].type,
                answers: [
                    vacancies[0].supplementaryQuestions[1].alternatives[0].text
                ]
            }, {
                question: vacancies[0].supplementaryQuestions[2]._id,
                asking: vacancies[0].supplementaryQuestions[2].asking,
                type: vacancies[0].supplementaryQuestions[2].type,
                answers: [
                    vacancies[0].supplementaryQuestions[2].alternatives[0].text,
                    vacancies[0].supplementaryQuestions[2].alternatives[1].text,
                    vacancies[0].supplementaryQuestions[2].alternatives[2].text
                ]
            }, {
                question: vacancies[0].supplementaryQuestions[3]._id,
                asking: vacancies[0].supplementaryQuestions[3].asking,
                type: vacancies[0].supplementaryQuestions[3].type,
                answers: [
                    (vacancies[0].supplementaryQuestions[3].final + vacancies[0].supplementaryQuestions[3].initial) / 2
                ]
            }, {
                question: vacancies[0].supplementaryQuestions[4]._id,
                asking: vacancies[0].supplementaryQuestions[4].asking,
                type: vacancies[0].supplementaryQuestions[4].type,
                answers: [
                    vacancies[0].supplementaryQuestions[4].alternatives[0].text,
                ]
            }],
        })
    ]
);
