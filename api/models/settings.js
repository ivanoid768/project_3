const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Schm = new Schema({
	userId: {
		type: String,
		required: true,
	},
	doubleFactorAuth: {
		type: Boolean,
		default: false,
	},
	workersTurnOff: {
		type: Boolean,
		default: false,
	},
	hideUserNameInPool: {
		type: Boolean,
		default: false,
	},
	paymentType: {
		type: String,
		default: "PPS",
		enum: ['PPS', 'FPPS', 'PPLNS']
	},
	paymentLimit: {
		type: mongoose.Mixed,
		default: [
			{ currency: "BTC", value: "0.1" }
		]
	},

})

const Settings = mongoose.model('settings', Schm)
module.exports = Settings