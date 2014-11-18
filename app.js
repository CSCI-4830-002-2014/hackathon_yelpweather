var mongojs = require('mongojs')
var fs = require('fs')

var db = mongojs("mongodb://localhost:27017/weather/", ['precip']);
var db1 = mongojs("mongodb://localhost:27017/hack10/", ['business']);

	//var query=top_50_array[i].split(" ")[1];
	// var query = eval('{'+variable+'}')]

	// db.precip.find().forEach(function(err,record) {
	// 	console.log(record);
	// });
	// var query = "db.precip.find({"STATION_NAME":/MADISON/},{"DATE":1,"STATION_NAME":1,"HPCP":1}).sort({"HPCP" : 1,"DATE":1})";

	// db.precip.find({"STATION_NAME":/MADISON/},{"DATE":1,"STATION_NAME":1,"HPCP":1}).sort({"HPCP" : 1}).forEach(function(err,record){
	// 	console.log(record);
	// 	// db.close();
	// });

	//Average Query
	// db.businesses.aggregate([{$match: {"city":"Las Vegas"}},{$group: {_id:null, avgReview: {"$avg": "$stars"}}}])

	// db.precip.aggregate({ $match{"STATION_NAME":/MADISON/},{"DATE":1,"STATION_NAME":1,"HPCP":1}).forEach(function(err,record){
	// 	console.log(record);
	// 	// db.close();
	// });

	db1.business.aggregate([{$match: {"city":"Las Vegas"}},{$group: {_id:null, avgReview: {"$avg": "$stars"}}}],[function(err,record){
		console.log(record);
	}])



	// db1.review.find({}).forEach(function(err,record){
	// 	console.log(record);
	// 	// db1.close();
	// });
