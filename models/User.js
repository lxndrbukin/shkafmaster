const mongoose = require('mongoose');
const passport = require('passport');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    userId: String,
    localUserId: Number,
    fullName: String,
    email: String,
    username: String,
    avatar: String,
    joinMethod: String,
  },
  { versionKey: false }
);

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('users', userSchema);

passport.use(User.createStrategy());
