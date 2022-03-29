const { createUser, getUserInfo } = require('../service/user.service');
class UserController {
	async register(ctx, next) {
		const { user_name, password } = ctx.request.body;
		// 合法性
		if (!user_name || !password) {
			console.error('user_name or password = null', user_name, password);
			ctx.status = 400;
			ctx.body = {
				code: 10001,
				message: 'user_name or password cannot be null',
				result: {}
			};
			return;
		}

		// 合理性
		const userInfo = await getUserInfo({ user_name });
		const userName = userInfo.user_name;
		if (userName) {
			ctx.status = 409;
			ctx.body = {
				code: 10002,
				message: `${userName} has exist`,
				result: {}
			};
			return;
		}

		const res = await createUser(user_name, password);
		ctx.body = {
			code: 0,
			message: 'create success',
			result: {
				id: res.id,
				username: res.user_name
			}
		};
	}
	async login(ctx, next) {
		ctx.body = 'user login success';
	}
}

module.exports = new UserController;