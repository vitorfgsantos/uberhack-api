const mount = require('koa-mount');
const oauthServer = require('./auth/auth.server');

module.exports = function (server) {

    const authRouter = require('./auth/auth.router');
    server.use(mount('/v2', authRouter.routes()));

    // Protecting next routers with Authorization
    server.use(mount('/v2', oauthServer.authorise()));
};
