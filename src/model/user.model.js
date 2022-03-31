const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const User = seq.define('tms_user', {
	user_name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		comment: 'User Name unique'
	},
	password: {
		type: DataTypes.STRING(256),
		allowNull: false,
		comment: 'password'
	},
	is_admin: {
		type: DataTypes.BOOLEAN,
		defaultValue: 0,
		comments: '1=admin'
	}
}, {
	freezeTableName: true
});

// User.sync({ force: true }).then(res => {
// 	console.log(res);
// }).catch(err => {
// 	console.log(err);
// });

module.exports = User;