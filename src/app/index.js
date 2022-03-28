const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body');
const userRouter = require('../router/user.route');

app.use(koaBody());
app.use(userRouter.routes());

module.exports = app;