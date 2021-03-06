'use strict';

const Router = require('koa-router');
const oauthServer = require('./auth.server');

let router = new Router();

router.post('/token', oauthServer.grant(), function* () {});

module.exports = router;
