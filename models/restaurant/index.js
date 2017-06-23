const Sequelize = require('sequelize')
const db = require('../')

const Restaurant = db.define('restaurant', {
	name :{
		type: Sequelize.STRING,
		allowNull : false
	},
	cuisine : {
		type : Sequelize.STRING,
		allowNull : false
	},
	price : {
		type : Sequelize.STRING,
		allowNull : false
	}
});

module.exports = Restaurant;
