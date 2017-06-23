// const Sequelize = require('sequelize')
// const db = require('../')


const Sequelize = require('sequelize')
//const db = new Sequelize('postgres://localhost/tripplanner')
const db = require('../')

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
		type : Sequelize.ARRAY(Sequelize.FLOAT),
		allowNull : false
	}
});

module.exports = Place;
// 'use strict'

// module.exports = (db, Sequelize) =>{
// 	const Place = db.define('place', {
// 		address :{
// 			type : Sequelize.STRING,
// 			allowNull:false
// 		},
// 		city : {
// 			type : Sequelize.STRING,
// 			allowNull : false
// 		},
// 		state: {
// 			type : Sequelize.STRING,
// 			allowNull : false
// 		},
// 		phone: {
// 			type : Sequelize.STRING,
// 			allowNull : false
// 		},
// 		location :{
// 			type : Sequelize.ARRAY(Sequelize.FLOAT),
// 			allowNull : false
// 		}
// 	});	
// 	return Place;
// }