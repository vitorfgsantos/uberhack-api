'use strict';

const _ = require('lodash');
const LessonComment = require('../../src/models/lessonCommentsModel').LessonComment;

module.exports = (users, lessons) => (
    [
        new LessonComment({
            user: _.find(users, user => (user.email === 'admin@taqe.com.br'))._id,
            lesson: lessons[0]._id,
            likes: [{
                user: _.find(users, user => (user.email === 'admin@taqe.com.br'))._id,
                date: new Date()
            }],
            comment: 'Ótimo conteúdo!',
            date: new Date()
        }),
        // new LessonComment({
        //     user: users[0]._id,
        //     lesson: lessons[1]._id,
        //     likes: [{
        //         user: users[0]._id,
        //         date: new Date()
        //     }],
        //     comment: 'Conteúdo ótimo!',
        //     date: new Date()
        // })
    ]
);
