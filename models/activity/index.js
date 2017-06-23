
const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/tripplanner')

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

module.exports = Activity;


// const Sequelize = require('sequelize')
// const db = new Sequelize('postgres://localhost/tripplanner')

//  'use strict'

// module.exports = (db, Sequelize)=>{
// 	const Activity = db.define('activity', {
// 		name :{
// 			type: Sequelize.STRING,
// 			allowNull :false
// 		},
// 		age_range : {
// 			type: Sequelize.UUID,
// 			allowNull :false
// 		}
// 	});
// 	return Activity;
// }