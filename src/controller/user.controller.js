class UserController {
	async register(ctx, next) {
		ctx.body = 'user register success';
	}
	async login(ctx, next) {
		ctx.body = 'user login success';
	}
}

module.exports = new UserController;