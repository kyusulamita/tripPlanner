const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/tripplanner')

module.exports = db

const Place = db.define('place', {
	address :{
		type : Sequelize.STRING,
		allowNull:false
	},
	city : {
		type : Sequelize.STRING,
		allowNull : false
	},
	state: {
		type : Sequelize.STRING,
		allowNull : false
	},
	phone: {
		type : Sequelize.STRING,
		allowNull : false
	},
	location :{
		type : Sequelize.STRING,
		allowNull : false
	}
});


const Hotel = db.define('hotel', {
	name :{
		type: Sequelize.STRING,
		allowNull : false
	},
	num_stars : {
		type : Sequelize.STRING,
		allowNull : false
	},
	amenities : {
		type : Sequelize.STRING,
		allowNull : false
	}
});


const Activity = db.define('activity', {
	name :{
		type: Sequelize.STRING,
		allowNull :false
	},
	age_range : {
		type: Sequelize.STRING,
		allowNull :false
	}
});

const Restuarant = db.define('restuarant', {
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