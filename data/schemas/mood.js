var mongoose = require('mongoose');

var MoodSchema = new mongoose.Schema({
	amount  : Number, 
	tags : [String]	
});

module.exports = MoodSchema;

