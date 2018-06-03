const mount = require('koa-mount');
const oauthServer = require('./auth/auth.server');

module.exports = function (server) {

    const authRouter = require('./auth/auth.router');
    server.use(mount('/v1/oauth', authRouter.routes()));

    const statusRouter = require('./status/status.router');
    server.use(mount('/v1/status', statusRouter.routes()));

    const routersRouter = require('./routers/routers.router');
    server.use(mount('/v1/routers', routersRouter.routes()));

    const parkingsRouter = require('./parkings/parkings.router');
    server.use(mount('/v1/parkings', parkingsRouter.routes()));

    // Protecting next routers with Authorization
    server.use(mount('/v1', oauthServer.authorise()));
};
