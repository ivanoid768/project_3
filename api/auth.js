const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const axios = require('@nuxtjs/axios');

const UserModel = require('./models/users-model');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/registration', function (req, res) {
	let user = req.body;
	console.log(req, req.body);


	UserModel.create({
		name: user.name,
		email: user.email,
		password: user.password,
		BTCAddress: user.BTCAddress
	}, function (err, newUser) {
		console.log(err);

		// if (err) return handleError(err);
		res.send({
			token: '0xdddddddddddddddddddddddd',
			user: newUser
		})
	});
});

module.exports = router;
