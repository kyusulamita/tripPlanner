// const Sequelize = require('sequelize')
// const db = require('../')


const Sequelize = require('sequelize')
//const db = new Sequelize('postgres://localhost/tripplanner')
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
// 'use strict'


// module.exports = (db, Sequelize) =>{
// 	const Restaurant = db.define('restaurant', {
// 		name :{
// 			type: Sequelize.STRING,
// 			allowNull : false
// 		},
// 		cuisine : {
// 			type : Sequelize.STRING,
// 			allowNull : false
// 		},
// 		price : {
// 			type : Sequelize.STRING,
// 			allowNull : false
// 		}
// 	});
// 	return Restaurant;
// }