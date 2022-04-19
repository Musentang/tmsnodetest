const { createUser, getUserInfo, updateById } = require('../service/user.service');
const { registerError } = require('../constants/err.type');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config.default');
class UserController {
	async register(ctx, next) {
		const { user_name, password } = ctx.request.body;
		try {
			const res = await createUser(user_name, password);
			ctx.body = {
				code: 0,
				message: 'create success',
				result: {
					id: res.id,
					username: res.user_name
				}
			};
		} catch(err) {
			console.log(err);
			ctx.app.emit('error', registerError, ctx);
		}
	}

	async login(ctx, next) {
		const { user_name } = ctx.request.body;
		// 1.get user info
		try{
			const { password, ...res } = await getUserInfo({ user_name });
			console.log(res);
			ctx.body = {
				code: 0,
				message: 'login success',
				result: {
					token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' })
				}
			};
		} catch(err) {
			console.error('login error');
		}
	}

	async changePassword(ctx, next) {
		const { id } = ctx.state.user;
		console.log(id);
		const password = ctx.request.body.password;
		console.log(password);
		const res = await updateById({id, password});
		if (res) {
			ctx.body = {
				code: 0,
				message: 'change success',
				result: ''
			};
		} else {
			ctx.body = {
				code: 10007,
				message: 'change password fail',
				result: ''
			};
		}
	}
}

module.exports = new UserController;