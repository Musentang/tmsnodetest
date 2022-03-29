const { Sequelize } = require('sequelize');
const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require('../config/config.default');

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
	port: MYSQL_PORT,
  dialect: 'mysql'
});

// test connection
// seq.authenticate().then(() => {
//   console.log('Connection has been established successfully.');
// }).catch(err => {
//   console.error('Unable to connect to the database:', err);
// });

module.exports = seq;