'use strict';

const _ = require('lodash');
const UserTest = require('../../src/models/userTestmodel').UserTest;

module.exports = (users, tests) => (
    [
        new UserTest({
            user: _.find(users, user => (user.email === 'admin@taqe.com.br'))._id,
            test: _.find(tests, test => (test.name === 'Quiz Simples de Português'))._id,
            percentage: 100,
            beginDate: new Date(),
            finishDate: new Date()
        })
    ]
);
