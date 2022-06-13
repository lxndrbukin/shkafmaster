const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const keys = require('./keys');
const mongoose = require('mongoose');
const req = require('express/lib/request');

const User = mongoose.model('users');

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      const existingUser = await User.findOne({ userId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        userId: profile.id,
        fullName: profile.displayName,
        avatar: profile.photos[0].value,
        joinMethod: profile.provider,
      }).save();
      done(null, user);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      const existingUser = await User.findOne({ userId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        userId: profile.id,
        fullName: profile.displayName,
        avatar: profile.photos[0].value,
        provider: profile.provider,
      }).save();
      done(null, user);
    }
  )
);

passport.use(
  new LocalStrategy(
    async (username, password, done) => {
      console.log(profile);
      const existingUser = await User.findOne({ email: username });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        email: req.body.email,
        password: req.body.password,
        joinMethod: req.body.joinMethod,
      }).save();
      done(null, user);
    }
  )
);
