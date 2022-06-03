const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  fullName: String,
  avatar: String,
  provider: String
});

mongoose.model('users', userSchema);