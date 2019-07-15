const express = require('express');
const axios = require('axios');
const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');
const config = require('./config');
import checkUser from '../utils/checkUser';

const router = express.Router();

const UserModel = require('./models/users-model');

const axInst = axios.create({
	baseURL: process.env.MOCKAPI || 'btc.sigmapool.com/v1',
	params: {
		key: config.sigmapoolToken
	}
})

router.post('/registration', function (req, res) {
	let user = req.body;

	let errors = new Object(null)
	let isLogin = checkUser.isLogin(user.username)
	let isBTCAddress = checkUser.isBTCAddress(user.BTCAddress)
	let isPass = checkUser.isPassword(user.password)
	console.log(isLogin, isPass, checkUser.isLogin);


	if (isLogin != true)
		errors['userName'] = isLogin.message
	if (isBTCAddress != true)
		errors['BTCAddress'] = isBTCAddress.message
	if (isPass != true)
		errors['password'] = isPass.message

	if (Object.keys(errors).length > 0) {
		return res.send({
			status: 'input_error',
			errors: errors
		})
	}

	console.log(axInst.defaults, config.comission);

	axInst.post('/subaccounts', {
		subaccount: user.username,
		address: user.BTCAddress,
		owner_comission: config.comission
	}, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		})
		.then(response => {
			if (response.data.status === 'success') {

				bcrypt.hash(user.password, 10, function (err, pass_hash) {

					if (err) return res.send({ status: 'server_error', error: { message: 'server_error' } });

					UserModel.create({
						userName: user.username,
						email: user.email,
						password: pass_hash,
						BTCAddress: user.BTCAddress
					}, function (err, newUser) {
						console.log(err);

						if (err) return res.send({ status: 'db_error', DBError: err });
						return res.send({
							status: 'success',
							user: newUser
						})
					});

				});

			}
		})
		.catch(err => {
			if (err.response) {
				return res.send({ status: 'server_error', APIError: [err.response.data, err.response.status, err.response.headers] })
			} else {
				return res.send({ status: 'server_error', error: { message: 'server_error' } })
			}
		})


});

module.exports = router;
