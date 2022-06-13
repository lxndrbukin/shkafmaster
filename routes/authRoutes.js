const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get(
    '/auth/google/',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );
  
  app.get(
    '/auth',
    passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
      res.redirect('/');
    }
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', { scope: ['email', 'public_profile'] })
  );

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      res.redirect('/');
    }
  );
};
