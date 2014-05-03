var mongoose = require('mongoose');

var CoffeeSchema = new mongoose.Schema({
	amount  : Number, 
	date : {type : Date, default : Date.now }	
});

module.exports = CoffeeSchema;

