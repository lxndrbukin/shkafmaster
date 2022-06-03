const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  fullName: String,
  avatar: String
});

mongoose.model('users', userSchema);