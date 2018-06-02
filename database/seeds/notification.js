'use strict';

const _ = require('lodash');
const Notification = require('../../src/models/notificationModel').Notification;
const NotificationTypeEnum = require('../../src/models/notificationModel').NotificationTypeEnum;

const User = require('../../src/models/userModel').User;

module.exports = (users) => (
    [
        new Notification({
            type: NotificationTypeEnum.interviews,
            message: `Você <span class="text-green">foi aprovado</span> no processo seletivo da <span class="text-green">Ford </span>`,
            user: _.find(users, user => user.username === 'app@taqe.com.br')._id,
            icon: 'img/icon-notification-process.png',
            iconClass: "green",
            date: new Date("2016-09-05"),
            hasAction: true
        }),
        new Notification({
            type: NotificationTypeEnum.interviews,
            message: `O <span class="text-dark-purple">processo seletivo</span> da vaga <span class="text-dark-purple">Lorem Ipsum encerrou </span>`,
            user: _.find(users, user => user.username === 'app@taqe.com.br')._id,
            icon: 'img/icon-notification-vacancy.png',
            iconClass: "dark-purple",
            date: new Date("2016-09-08 11:00:00"),
            hasAction: true
        }),
        new Notification({
            type: NotificationTypeEnum.interviews,
            message: `Você tem uma entrevista confirmada no <span class="text-green">Bradesco</span> as <span class="text-green">14hs</span>, no dia <span class="text-green">13.05.2016</span>`,
            user: _.find(users, user => user.username === 'app@taqe.com.br')._id,
            icon: "img/icon-notification-calendar-success.png",
            iconClass: "green",
            hasAction: true
        }),
        new Notification({
            type: NotificationTypeEnum.interviews,
            message: `Você foi convidado pela <span class="text-yellow">Ford para uma entrevista</span>, clique para confirmar`,
            user: _.find(users, user => user.username === 'app@taqe.com.br')._id,
            icon: "img/icon-notification-invite.png",
            iconClass: "yellow",
            hasAction: true
        }),
        new Notification({
            type: NotificationTypeEnum.interviews,
            message: `A entrevista na <span class="text-yellow">Tim</span> foi alterada de <span class="text-yellow">14.05.2016 para 16.05.2016</span> clique para confirmar`,
            user: _.find(users, user => user.username === 'app@taqe.com.br')._id,
            icon: "img/icon-notification-calendar-changed.png",
            iconClass: "yellow",
            hasAction: true
        }),
        new Notification({
            type: NotificationTypeEnum.interviews,
            message: `Sua entrevista no <span class="text-red">Santa Maria</span> no dia <span class="text-red">24.05.2016</span> foi concelada`,
            user: _.find(users, user => user.username === 'app@taqe.com.br')._id,
            icon: "img/icon-notification-calendar-error.png",
            iconClass: "red",
            hasAction: true
        }),
        new Notification({
            type: NotificationTypeEnum.interviews,
            message: `A vaga<span class="text-red">Lorem Ipsum</span> da <span class="text-red">Ford</span> foi concelada`,
            user: _.find(users, user => user.username === 'app@taqe.com.br')._id,
            icon: "img/icon-notification-vacancy-error.png",
            iconClass: "red",
            hasAction: true
        }),
        new Notification({
            type: NotificationTypeEnum.others,
            message: `Continue fazendo aulas lorem ipsum sit dolor alo lorem dor`,
            icon: "img/icon-notification-lesson.png",
            iconClass: "purple",
            user: _.find(users, user => user.username === 'app@taqe.com.br')._id
        }),
        new Notification({
            type: NotificationTypeEnum.others,
            message: `Os termos e condições foram alterados lorem ipsum sit dolor alo lorem dor`,
            icon: "img/icon-notification-changed.png",
            iconClass: "purple",
            user: _.find(users, user => user.username === 'app@taqe.com.br')._id
        })
    ]
);
