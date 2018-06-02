'use strict';

const Router = require('koa-router');
const RoutersController = require('./routers.controller');

const ErrorService = require('../../../services/error.service');

let router = new Router();

router.get('/', function* () {
    try {
        this.body = yield RoutersController.getRouters(this);
    } catch (error) {
        ErrorService.handleError(this, error);
    }
});

module.exports = router;
