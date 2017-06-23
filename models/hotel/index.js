const Sequelize = require('sequelize')
const db = require('../')

const Hotel = db.define('hotel', {
	name :{
		type: Sequelize.STRING,
		allowNull : false
	},
	num_stars : {
		type : Sequelize.FLOAT(1,5),
		allowNull : false
	},
	amenities : {
		type : Sequelize.ARRAY(Sequelize.TEXT),
		defaultValue : [],
		set: function (amenities){
			amenities = amenities || [];
			if (typeof amenities === 'string'){
				amenities = amenities.split(',').map((str) =>{ return str.trim()});
			}
			this.setDataValue('amenities', amenities);
		}
	}
});

module.exports = Hotel;

