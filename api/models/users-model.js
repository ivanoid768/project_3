const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UsersSchema = new Schema({
  userName: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique:true
  },
  password: {
    type: String
  }
})
const UsersModel = mongoose.model('users', UsersSchema)
module.exports = UsersModel
