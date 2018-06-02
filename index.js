'use strict';

const Koa = require('koa');
const http = require('http');
const bodyParser = require('koa-body');
const cors = require('koa-cors');
const corsError = require('koa-cors-error');
const API = require('./src/config/api');
const koaStatic = require('koa-static');
const logger = require('koa-logger');

const db = require('./database/db');

let app = new Koa();

if (process.env.NODE_ENV !== 'production')
    app.use(logger());

app.use(bodyParser());
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    headers: ['Content-Type', 'Authorization', 'Accept-Ranges'],
    expose: [],
    credentials: true
}));
app.use(corsError);

require('./src/v1')(app);

db.on('connected', () => {
    http.createServer(app.callback())
        .listen(API.port, () => {
            console.log(`Server listening at :${API.port}`);
        });
});
