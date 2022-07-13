const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get('/api/current_user', async (req, res) => {
    await res.send(req.user);
  });

  app.get('/api/users', async (req, res) => {
    await User.find({}, (err, users) => {
      res.send(users);
    }).clone();
  });

  app.put('/api/current_user', async (req, res) => {
    const user = await User.findOneAndUpdate(
      { _id: req.body._id },
      {
        fullName: req.body.fullName,
        email: req.body.email,
      }
    ).clone();
    user.save();
    res.send(user);
  });
};
