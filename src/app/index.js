const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body');
const router = require('../router');
// const userRouter = require('../router/user.route');
// const goodsRouter = require('../router/goods.route');

const errorHandler = require('./errorHandler');

app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());
// app.use(goodsRouter.routes());

app.on('error', errorHandler);

module.exports = app;