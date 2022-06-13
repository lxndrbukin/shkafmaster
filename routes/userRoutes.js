const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
  app.get('/api/current_user', async (req, res) => {
    await res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/users', async (req, res) => {
    await User.find({}, (err, user) => {
      res.send(user[0]);
    });
  });

  app.post('/api/users', async (req, res) => {
    const user = await new User({
      email: req.body.email,
      password: req.body.password
    });
    if (!user.email) {
      res.redirect('/');
      console.log('Nope!');
      return;
    } else if (!user.password) {
      res.redirect('/');
      console.log('Nope!');
      return;
    } else {
      user.save();
      res.send(user);
    }
  })
}