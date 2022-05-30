const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  login: String,
  password: String
});

mongoose.model('users', userSchema);