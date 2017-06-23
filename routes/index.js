var  express = require('express');
var  router = express.Router();
var Promise = require('bluebird');
var  models = require('../models');
const  Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Place = require('../models/place');
const Activity = require('../models/activity');


// var User = models.User;
module.exports = router;


// GET /wiki
router.get('/', function (req, res, next) {
    var hotelPromise = Hotel.findAll({});
    var restaurantPromise = Restaurant.findAll({});
    var activityPromise = Activity.findAll({});
    Promise.all([hotelPromise, restaurantPromise, activityPromise])
    .spread(function(Hotels, Restaurants, Activities){
    //.then(results)
    	// Hotels = results[0];
    	// Restaurants = results[1];
    	// Activities = results[2];
    	res.render('index', { Hotels: Hotels, Restaurants: Restaurants, Activities:Activities});
    });

});


// const router = require('express').Router()
// module.exports = router

// router.get('/', (req, res, next) => {
//   res.render('index')
// })
