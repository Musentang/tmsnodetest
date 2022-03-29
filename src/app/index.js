const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body');
const userRouter = require('../router/user.route');

const errorHandler = require('./errorHandler');

app.use(koaBody());
app.use(userRouter.routes());

app.on('error', errorHandler);

module.exports = app;