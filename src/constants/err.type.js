module.exports = {
	userFormatError: {
		code: 10001,
		message: 'user_name or password cannot be null',
		result: {}
	},
	userAlreadyExists: {
		code: 10002,
		message: 'User Already Exists',
		result: {}
	},
	registerError: {
		code: 999,
		message: 'register error',
		result: ''
	},
	userNotExist: {
		code: 10004,
		message: 'User Not Exists',
		result: ''
	},
	userLoginError: {
		code: 10005,
		message: 'User Login Error',
		result: ''
	},
	invalidPassword: {
		code: 10006,
		message: 'Invalid Password',
		result: ''
	},
	tokenExpiredError: {
		code: 10101,
		message: 'Token Expired',
		result: ''
	},
	jsonWebTokenError: {
		code: 10102,
		message: 'Invalid Token',
		result: ''
	}
};
