// const Sequelize = require('sequelize')
// const db = new Sequelize('postgres://localhost/tripplanner')
// var Place = require('./place');
// var Hotel = require('./hotel');
// var Restaurant = require('./restaurant');
// var Activity = require('./activity');


// Hotel.belongsTo(Place);
// Activity.belongsTo(Place);
// Restaurant.belongsTo(Place);

// module.exports = db;



const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/tripplanner')

// const db  = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;


const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Place = require('../models/place');
const Activity = require('../models/activity');


Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = db;







