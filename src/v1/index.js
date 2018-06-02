module.exports = function (server) {

    require('./routers/public')(server);
    require('./middlewares')(server);
    require('./routers/private')(server);

};
