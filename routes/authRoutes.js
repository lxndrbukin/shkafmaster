const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get(
    '/auth/google/',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  app.post('/auth', async (req, res) => {
    await User.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        console.log(err);
      } else {
        passport.authenticate('local', { failureRedirect: '/login' })(
          req,
          res,
          () => {
            return res.send(user);
          }
        );
      }
    }).clone();
  });

  app.post('/register', async (req, res) => {
    await User.register(
      { username: req.body.username },
      req.body.password,
      (err, user) => {
        if (err) {
          console.log(err);
        } else {
          passport.authenticate('local', { failureRedirect: '/login' })(
            req,
            res,
            () => {
              return res.send(user);
            }
          );
        }
      }
    );
  });

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

  app.get('/api/logout', (req, res) => {
    req.logout();
    // res.redirect('/');
    return res.send('Logged Out');
  });
};
