var express = require('express');
const mongoose = require('mongoose');

var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));


// var MongoClient = require('mongodb').MongoClient;
let DBUSERNAME = process.env.DBUSERNAME !== undefined ? process.env.DBUSERNAME : "sigmapool";
let DBPASSWORD = process.env.DBPASSWORD !== undefined ? process.env.DBPASSWORD : "sigmapool";
let url = process.env.DBURL !== undefined ? process.env.DBURL : `mongodb://127.0.0.1:27017`;

var mongoDB = `${url}/users`;
console.log(mongoDB)
mongoose.connect(mongoDB)
	.then(() => {
		app.use('/auth', require('./auth'))

		app.listen(process.env.PORT || 3000, () =>
			console.log(`API app listening on port ${process.env.PORT || 3000}!`),
		)

	});