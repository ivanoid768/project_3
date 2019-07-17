const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Schm = new Schema({
	userId: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	ipAddress: {
		type: String,
		required: true,
		match: /\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/i
	}
})

const UserHistoryModel = mongoose.model('userhistory', Schm)
module.exports = UserHistoryModel