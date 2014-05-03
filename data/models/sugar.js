var mongoose = require('mongoose');
var SugarSchema = require('../schemas/sugar');

var Sugar = mongoose.model('Sugar',SugarSchema);

module.exports = Sugar;
