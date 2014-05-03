var mongoose = require('mongoose');
var CoffeeSchema = require('../schemas/coffee');

var Coffee = mongoose.model('Coffee',CoffeeSchema);

module.exports = Coffee;
