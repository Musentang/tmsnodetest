const User = require('../model/user.model');

class UserService {
	async createUser(user_name, password) {
		console.log(password);
		const { dataValues } = await User.create({ user_name, password });
		return dataValues;
	}

	async getUserInfo({ id, user_name, password, is_admin }) {
		const where = {}
		id && Object.assign(where, { id });
		user_name && Object.assign(where, { user_name });
		password && Object.assign(where, { password });
		is_admin && Object.assign(where, { is_admin });
		const res = await User.findOne({
			attributes: ['id', 'user_name', 'password', 'is_admin'],
			where
		});
		return res ? res.dataValues : {};
	}
}

module.exports = new UserService;