var express = require('express');
var router = express.Router();

var Sugar = require('../data/models/sugar');
var Coffee = require('../data/models/coffee');
var Mood = require('../data/models/mood');

/* Mood */

router.get('/api/mood', function(req, res) {

	Mood.find({},function(err,mood){
		if (err)
			return next(err);
		res.json(mood);
	});
});

/* Sugar */

router.get('/api/sugars', function(req, res) {

	Sugar.find({},function(err,sugars){
		if (err)
			return next(err);
		res.json(sugars);
	});
});

router.get('/api/sugar', function(req,res){
	var now = new Date();

	Sugar.find({date : {"$gte" : new Date(now.getFullYear(), now.getMonth(), now.getDate() )}},function(err,sugar){
		if (err)
			return next(err);
		res.json(sugar);
	});
});

router.get('/api/sugar/:date', function(req,res){
	var helper = new Date(req.params.date);
	var start = new Date(helper.getFullYear(), helper.getMonth(), helper.getDate() );
	var end = new Date();
	
	Sugar.find({ date : { "$gte" : start , "$lt": end  }}, 
		function(err,sugars){
			if (err)
				return next(err);
			res.json(sugars)
		});
});

router.post('/api/sugar', function(req, res) {
	if (req.body.amount){
		Sugar.create({amount : req.body.amount, date : req.body.date || Date.now()},function(err){
			if (err)
				return next(err);
			res.json({success : true});
		});
	}
	else {
		res.json({success : false});
	}	
});

/* Coffee */

router.get('/api/coffee', function(req, res) {

	Coffee.find({},function(err,coffee){
		if (err)
			return next(err);
		res.json(coffee);
	});
});

router.post('/api/coffee', function(req, res) {
	if (req.body.amount){
		Coffee.create({amount : req.body.amount, date : req.body.date || Date.now()},function(err){
			if (err)
				return next(err);
			res.json({success : true});
		});
	}
	else {
		res.json({success : false});
	}	
});

module.exports = router;
