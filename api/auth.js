const express = require('express');
const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Settings = require('./models/settings');
const UserHistory = require('./models/user-history');
// const bodyParser = require('body-parser');
const config = require('./config');
const FormData = require('form-data');
import checkUser from '../utils/checkUser';

const router = express.Router();

const UserModel = require('./models/users-model');

const axInst = axios.create({
	baseURL: process.env.MOCKAPI || 'https://btc.sigmapool.com/api/v1',
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
	let fd = new FormData();
	fd.append('subaccount', user.username)
	fd.append('address', user.BTCAddress)
	fd.append('owner_comission', config.comission)

	let regHeaders = {
		'Content-Type': process.env.MOCKAPI ? 'application/x-www-form-urlencoded; charset=UTF-8' : `multipart/form-data; ; boundary=${fd.getBoundary()}`
	}

	axInst.post('/subaccounts', fd, {
		headers: fd.getHeaders(),
		params: {
			key: config.sigmapoolToken
		}
	})
		.then(response => {
			console.log('reg sub data: ', response.data)
			if (response.status === 200) {
				let data = response.data;

				bcrypt.hash(user.password, 10, function (err, pass_hash) {

					if (err) return res.send({ status: 'server_error', error: { err: err, message: 'server_error_hash' } });

					UserModel.create({
						userName: data.subaccount || user.username,
						email: user.email,
						password: pass_hash,
						BTCAddress: data.address || user.BTCAddress
					}, function (err, newUser) {
						console.log(err);

						if (err) return res.send({ status: 'db_error', DBError: err });

						Settings.create({
							userId: newUser.id
						})

						return res.send({
							status: 'success',
							user: {
								username: newUser.userName,
								email: newUser.email,
								BTCAddress: newUser.BTCAddress
							}
						})
					});

				});

			}
		})
		.catch(err => {
			if (err.response) {
				return res.send({ status: 'server_error', APIError: [err.response.data, err.response.status, err.response.headers] })
			} else {
				return res.send({ status: 'server_error', error: { err: err, message: 'server_error' } })
			}
		})


});

router.post('/login', (req, res) => {

	UserModel.findOne({ userName: req.body.username }).then((user) => {
		user.comparePassword(req.body.password, (err, isMatch) => {
			if (isMatch) {
				let token = jwt.sign({ userId: user.id }, config.tokenKey);

				UserHistory.create({
					userId: user.id,
					name: 'User logged in.',
					date: Date.now(), // new Date(Date.now()).toLocaleString()
					ipAddress: req.ip
				})
					.catch(console.log)

				axInst.get(`/subaccounts/${user.userName}`, { params: { key: config.sigmapoolToken } })
					.then(resp => {
						let apiUser = resp.data;
						let { scheme, threshold } = apiUser;

						return Settings.findOneAndUpdate({ userId: user.id }, {
							paymentType: scheme,
							paymentLimit: [
								{ currency: "BTC", value: threshold }
							]
						})
					})
					.then(() => {

						return res.send({
							token
						})

					})
					.catch(err => {
						return res.status(500).send(err)
					})

			}
			else {
				res.status(400).send({ message: 'Неверный Пароль/Имя пользователя' });
			}
		})
	}).catch((err) => {
		res.status(400).send({ message: 'Неверный Пароль/Имя пользователя' });
	})

})

router.get('/user', (req, res) => {
	const token = req.headers.authorization.match(/Bearer\s(\S+)(?:\s|$)/i)[1]
	jwt.verify(token, config.tokenKey, function (err, payload) {
		console.log(payload)
		if (payload) {
			UserModel.findById(payload.userId)
				.then((user) => {
					res.send({
						user: {
							username: user.userName,
							email: user.email,
							BTCAddress: user.BTCAddress
						}
					})
				})
				.catch(() => {
					res.status(404).send({
						status: 'not_exists'
					})
				})
		} else {
			res.status(500).send({
				status: 'server_error'
			})
		}
	})

})

router.use('/', (req, res, next) => {
	const token = req.headers.authorization.match(/Bearer\s(\S+)(?:\s|$)/i)[1]
	jwt.verify(token, config.tokenKey, function (err, payload) {
		if (payload) {
			UserModel.findById(payload.userId)
				.then((user) => {
					req.user = user
					next()
				})
				.catch(() => {
					next()
				})
		} else {
			next()
		}
	})

})

router.post('/user', (req, res, next) => {

	let id = req.user && req.user.id;
	let usr = req.body;
	let updateUser = new Object(null);

	if (usr.userName) {
		updateUser.userName = usr.userName
	}
	if (usr.email) {
		updateUser.email = usr.email
	}
	if (usr.BTCAddress) {
		updateUser.BTCAddress = usr.BTCAddress
		if (!usr.email && !usr.userName && !usr.password) {

			let fd = new FormData();
			fd.append('address', usr.BTCAddress)
			fd.append('owner_comission', config.comission)

			axInst.patch(`/subaccounts/${req.user.userName}`, fd, {
				headers: fd.getHeaders(),
				params: {
					key: config.sigmapoolToken
				}
			})
				.then(({ data }) => {
					updateUser.BTCAddress = data.address
					return UserModel.findByIdAndUpdate(id, updateUser);
				})
				.then(() => {
					return res.status(200).send({ status: 'success' })
					// return next()
				})
				.catch(err => {
					res.status(500).send({ status: 'error', err: err })
					return next()
				})

		}
	}
	if (usr.password) {
		updateUser.password = usr.password

		bcrypt.hash(updateUser.password, 10)
			.then((pass_hash) => {
				updateUser.password = pass_hash
				return UserModel.findByIdAndUpdate(id, updateUser);
			})
			.then(() => {
				res.status(200).send({ status: 'success' })
				return next()
			})
			.catch(err => {
				res.status(500).send({ status: 'internal_error', err: err })
				return next()
			})
	}

	UserModel.findByIdAndUpdate(id, updateUser, (err, doc) => {
		if (err) {
			if (err.code == 11000) {
				let message = '';
				if (err.errmsg.indexOf('userName') != -1) {
					message += 'Такое Имя пользователя уже занято, попробуйте другое.'
				} else if (err.errmsg.indexOf('email') != -1) {
					message += 'Такой Е-мэйл уже существует, попробуйте другой.'
				}
				return res.status(500).send({
					message: message,
					status: 'db_error'
				})

			} else {
				console.log('DB_ERROR: ', err)
				return res.status(500).send({
					status: 'db_error',
					message: 'Ошибка сервера, поробуйте позже'
				})

			}
		} else {
			return res.status(200).send({ status: 'success' })
		}

	})

})

router.get('/user/history', (req, res) => {

	console.log(req.query);

	let page = req.query.page;
	let per_page = 20;

	let log = [];
	let pagesNumber = 1;

	UserHistory.find({ userId: req.user.id }, null, {
		skip: (page - 1) * per_page,
		limit: per_page
	})
		.then((history) => {
			log = history;

			return UserHistory.count({ userId: req.user.id })
		})
		.then(count => {
			pagesNumber = Math.ceil(count / per_page)

			return res.status(200).send({
				log: log,
				pagesCounter: pagesNumber
			})
		})
		.catch((err) => {
			res.status(404).send({
				status: 'not_exists',
				erorr: err
			})
		})


})

router.get('/settings', (req, res) => {

	Settings.findOne({ userId: req.user.id }).then(settings => {

		res.status(200).send({
			...settings._doc
		})
	})
		.catch((err) => {
			res.status(500).send({
				status: 'db_error',
				erorr: err
			})
		})

})

router.post('/settings', (req, res) => {

	let newSett = req.body;
	let { user } = req;

	Settings.findOneAndUpdate({ userId: req.user.id }, newSett).then(() => {

		Settings.findOne({ userId: user.id }, (err, settings) => {

			console.log('Settings: >>>', settings);
			let fd = new FormData()
			fd.append('scheme', settings.paymentType);
			fd.append('threshold', settings.paymentLimit[0].value)

			axInst.patch(`/subaccounts/${user.userName}`, fd, {
				headers: fd.getHeaders(),
				params: { key: config.sigmapoolToken }
			})
				.then(resp => {
					res.status(200).send({
						...settings._doc,
						newSett: newSett,
						...resp.data
					})
				})
				.catch(err => {
					res.status(500).send({
						status: 'api_error',
						error: err
					})
				})

		})

	})
		.catch((err) => {
			res.status(500).send({
				status: 'db_error',
				erorr: err
			})
		})

})

router.get('/:currency/settings/poolconnurls', (req, res) => {
	let { currency } = req.params;
	let pcurls = config.poolConnUrls[currency];

	return res.status(200).send(pcurls)

})

module.exports = router;
