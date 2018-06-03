'use strict';

const Router = require('koa-router');
const RoutersController = require('./routers.controller');

const ErrorService = require('../../../services/error.service');

let router = new Router();

router.get('/maps/:mode', function* () {
    try {
        this.body = yield RoutersController.getRoutersByMaps(this);
    } catch (error) {
        ErrorService.handleError(this, error);
    }
});

router.get('/uber', function* () {
    try {
        this.body = yield RoutersController.getRoutersByUber(this);
    } catch (error) {
        ErrorService.handleError(this, error);
    }
});

module.exports = router;
