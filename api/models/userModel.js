'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: 'email is required'
  },
  cpf: {
    type: String,
    required: 'cpf is required'
  },
  number: {
    type: String,
    required: 'number is required'
  },
  password: {
    type: String,
    required: 'password is required'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', UserSchema);
