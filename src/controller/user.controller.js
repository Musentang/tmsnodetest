const { createUser } = require('../service/user.service');
const { registerError } = require('../constants/err.type');

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
		ctx.body = 'user login success';
	}
}

module.exports = new UserController;