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
		type : Sequelize.ARRAY(Sequelize.FLOAT),
		allowNull : false
	}
});


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


const Activity = db.define('activity', {
	name :{
		type: Sequelize.STRING,
		allowNull :false
	},
	age_range : {
		type: Sequelize.UUID,
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

Hotel.belongsTo(Place, { as : 'location'});
Activity.belongsTo(Place, { as : 'location'});
Restuarant.belongsTo(Place, { as : 'location'});


