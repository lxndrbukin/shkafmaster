const mongoose = require('mongoose');
const passport = require('passport');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  userId: String,
  fullName: String,
  email: String,
  username: String,
  password: String,
  avatar: String,
  joinMethod: String,
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model('users', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
