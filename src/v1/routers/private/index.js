const mount = require('koa-mount');

module.exports = function (server) {

    // const userManagersRouter = require('./user/user.router');
    // server.use(mount('/v2/user', userManagersRouter.routes()));

    const routersRouter = require('./routers/routers.router');
    server.use(mount('/v2/routers', routersRouter.routes()));

};
