const { createUser } = require('../service/user.service');
class UserController {
	async register(ctx, next) {
		console.log(ctx.request.body);
		const { user_name, password } = ctx.request.body;
		const a = await createUser(user_name, password);
		console.log(a);
		ctx.body = 'user register success';
	}
	async login(ctx, next) {
		ctx.body = 'user login success';
	}
}

module.exports = new UserController;