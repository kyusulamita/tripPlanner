var  express = require('express');
var  router = express.Router();
var  models = require('../models');
const  Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Place = require('../models/place');
const Activity = require('../models/activity');


// var User = models.User;
module.exports = router;


// GET /wiki
router.get('/', function (req, res, next) {
    Hotel.findAll({})
        .then(function (hotels) {
            res.render('index', {
                hotels: hotels
            });
        })
        .catch(next);
});


const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  res.render('index')
})
