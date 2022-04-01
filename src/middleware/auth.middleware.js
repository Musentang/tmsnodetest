const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config.default');

const { tokenExpiredError, jsonWebTokenError } = require('../constants/err.type');

const auth = async (ctx, next) => {
	const token = ctx.request.header.authorization.replace('Bearer ', '');
	try {
		const user = jwt.verify(token, JWT_SECRET);
		console.log(user);
		ctx.state.user = user;
	} catch(err) {
		console.error(err);
		switch(err.name) {
			case 'TokenExpiredError':
				console.error('TokenExpiredError');
				return ctx.app.emit('error', tokenExpiredError, ctx);
			case 'JsonWebTokenError':
				console.error('JsonWebTokenError');
				return ctx.app.emit('error', jsonWebTokenError, ctx);
		}

	}
	await next();
};

module.exports = {
	auth
};