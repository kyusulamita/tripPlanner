const Sequelize = require('sequelize')
const db = require ('./index')
var pg = require('pg');

const restaurant = db.define('restaurant', {
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
console.log(db.models);
module.exports =  restaurant;

// module.exports = function(sequelize, DataTypes){
//     return db.define('restaurant', {
//         name :{
//             type: Sequelize.STRING,
//             allowNull : false
//         },
//         cuisine : {
//             type : Sequelize.STRING,
//             allowNull : false
//         },
//         price : {
//             type : Sequelize.STRING,
//             allowNull : false
//         }
//     })
// };