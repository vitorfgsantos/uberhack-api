'use strict';

const Router = require('koa-router');
const HeatAreasController = require('./heatareas.controller');

const ErrorService = require('../../../services/error.service');

let router = new Router();

router.get('/', function* () {
    try {
        this.body = yield HeatAreasController.getHeatAreas(this);
    } catch (error) {
        ErrorService.handleError(this, error);
    }
});

module.exports = router;
