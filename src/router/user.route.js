const Router = require('koa-router');
const { userValidator, verifyUser, bcryptPassword, verifyLogin } = require('../middleware/user.middleware');
const { auth } = require('../middleware/auth.middleware');
const { register, login, changePassword } = require('../controller/user.controller');
const prefix = '/users';

const router = new Router({ prefix });

router.post('/register', userValidator, verifyUser, bcryptPassword, register);
router.post('/login', userValidator, verifyLogin, login);
router.patch('/change_passord', auth, bcryptPassword, changePassword);

module.exports = router;
