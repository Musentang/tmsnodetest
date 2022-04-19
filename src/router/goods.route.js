const Router = require('koa-router');
const { upload } = require('../controller/goods.controller');

const prefix = '/goods';
const router = new Router({ prefix });

router.post('/upload', upload);

module.exports = router;