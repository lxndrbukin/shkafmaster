const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  fullName: String,
  email: String,
  password: String,
  avatar: String,
  joinMethod: String
});

mongoose.model('users', userSchema);