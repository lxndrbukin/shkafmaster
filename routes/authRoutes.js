const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
	app.get('/auth/google/', 
		passport.authenticate('google', { scope: ['profile', 'email'] })
	);

	app.get('/auth/google/callback',
		passport.authenticate('google'), (req, res) => {
			res.redirect('/');
		}
	);

	app.get('/auth/facebook',
  	passport.authenticate('facebook', { scope: ['user_friends', 'public_profile'] })
	);

	app.get('/auth/facebook/callback',
		passport.authenticate('facebook'), (req, res) => {
			res.redirect('/');
		}
	);

	app.get('/api/current_user', async (req, res) => {
		await res.send(req.user);
	});

	app.get("/api/logout", (req, res) => {
		req.logout();
		res.redirect("/");
});

}