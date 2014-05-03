var mongoose = require('mongoose');

var SugarSchema = new mongoose.Schema({
	amount  : Number, 
	date : {type : Date, default : Date.now }	
});

module.exports = SugarSchema;

