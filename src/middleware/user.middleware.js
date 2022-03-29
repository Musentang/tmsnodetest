const { getUserInfo } = require('../service/user.service');
const { userFormatError, userAlreadyExists, registerError } = require('../constants/err.type')
const userValidator = async (ctx, next) => {
	const { user_name, password } = ctx.request.body;
		// 合法性
	if (!user_name || !password) {
		console.error('user_name or password = null', user_name, password);
		ctx.app.emit('error', userFormatError, ctx);
		return;
	}

	await next();
};

const verifyUser = async (ctx, next) => {
	// 合理性
	const { user_name } = ctx.request.body;
	try {
		const userInfo = await getUserInfo({ user_name });
		const userName = userInfo.user_name;
		if (userName) {
			console.error('user Already Exists: ' + userName);
			ctx.app.emit('error', userAlreadyExists, ctx);
			return;
		}
	} catch(err) {
		console.error('getUserInfo Error: ' + err);
		ctx.app.emit('error', registerError, ctx);
		return;
	}

	await next();
};

module.exports = {
	userValidator,
	verifyUser
};