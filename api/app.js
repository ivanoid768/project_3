var express = require('express');
const mongoose = require('mongoose');

var app = express();

app.use(express.json())
app.use(express.urlencoded({
	extended: true
}));

let DBUSERNAME = process.env.DBUSERNAME !== undefined ? process.env.DBUSERNAME : "sigmapool";
let DBPASSWORD = process.env.DBPASSWORD !== undefined ? process.env.DBPASSWORD : "sigmapool";
let url = process.env.DBURL !== undefined ? process.env.DBURL : `mongodb://${DBUSERNAME}:${DBPASSWORD}@127.0.0.1:27017`;

var mongoDB = `${url}/users`;
console.log(mongoDB)
mongoose.connect(mongoDB)
	.then(() => {
		app.use('/', require('./auth'))

	});

module.exports = {
	path: "/api/auth/",
	handler: app
};

if (!module.parent) {
	app.listen(4500, port => console.log(port))
}