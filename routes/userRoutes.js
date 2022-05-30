const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
  app.get('/api/users', async (req, res) => {
    await User.find({}, (err, user) => {
      res.send(user[0]);
    });
  });

  app.post('/api/users', async (req, res) => {
    const user = await new User({
      login: req.body.login,
      password: req.body.password
    });
    if (!user.login) {
      res.redirect('/');
      return;
    } else if (!user.password) {
      res.redirect('/');
      return;
    } else {
      user.save();
      res.send(user);
    }
  })
}