const Router = require('koa-router');
const { register, login } = require('../controller/user.controller');
const prefix = '/users';

const router = new Router({ prefix });

router.post('/register', register);
router.post('/login', login);

module.exports = router;
