'use strict';

const Router = require('koa-router');
const RoutersController = require('./routers.controller');

let router = new Router();

router.get('/', function* () {
    try {
        this.body = yield RoutersController.getRouters(this);
    } catch (error) {
        this.throw(error.message, 400);
    }
});

module.exports = router;
