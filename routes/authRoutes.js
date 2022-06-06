const passport = require('passport');

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
  	passport.authenticate('facebook', { scope: ['user_friends'] })
	);

	app.get('/auth/facebook/callback',
		passport.authenticate('facebook'), (req, res) => {
			res.redirect('/');
		}
	);
}