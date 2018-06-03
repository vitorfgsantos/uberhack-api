'use strict';

const Router = require('koa-router');
const ParkingsController = require('./parkings.controller');

const ErrorService = require('../../../services/error.service');

let router = new Router();

router.get('/', function* () {
    try {
        this.body = yield ParkingsController.getParkingsNearColdAreas(this);
    } catch (error) {
        ErrorService.handleError(this, error);
    }
});

module.exports = router;
