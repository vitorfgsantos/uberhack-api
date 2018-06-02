'use strict';

const UserLesson = require('../../src/models/userLessonModel').UserLesson;
const _ = require('lodash');

module.exports = (users, lessons, activities) => (
    [
        new UserLesson({
            user: _.find(users, user => (user.email === 'admin@taqe.com.br'))._id,
            lesson: _.find(lessons, lesson => (lesson.name === 'Aula de Português'))._id,
            percentage: 50,
            beginDate: new Date(),
            activities: [{
                activity: _.find(activities, activity => (activity.name === 'Quiz Simples de Português'))._id,
                number: 1,
                percentage: 100,
                beginDate: new Date(),
                finishDate: new Date()
            }, {
                activity: _.find(activities, activity => (activity.name === 'Quiz Simples de Português - Nível 2'))._id,
                number: 2,
                percentage: 100,
                beginDate: new Date(),
                finishDate: new Date()
            }]
        })
    ]
);
