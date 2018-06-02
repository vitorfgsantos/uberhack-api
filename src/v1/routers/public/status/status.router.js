'use strict';

const Router = require('koa-router');

let router = new Router();

router.get('/', function* () {
    this.body = 'OK';
});

module.exports = router;
