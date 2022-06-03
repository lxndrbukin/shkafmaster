const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model("users");

passport.serializeUser(function(user, done) {
	done(null, user);
});
  
passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use(new GoogleStrategy({
	clientID: '867081045423-gdrpvjkce4mv4mgquo3ghin61iamf1b3.apps.googleusercontent.com',
	clientSecret: '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',
	callbackURL: '/auth/google/callback'
},
	async (accessToken, refreshToken, profile, done) => {
		console.log(profile);
		const existingUser = await User.findOne({ userId: profile.id });
		if (existingUser){
			return done(null, existingUser);
		}
		const user = await new User({
			userId: profile.id,
			fullName: profile.displayName,
			avatar: profile.photos[0].value,
			provider: profile.provider
		}).save();
		done(null, user);
	}
));

passport.use(new FacebookStrategy({
	clientID: '3129177250654108',
	clientSecret: 'de5f8107e2b34346434201d46562b709',
	callbackURL: '/auth/facebook/callback',
	profileFields: ['id', 'displayName', 'photos', 'email']
},
	async (accessToken, refreshToken, profile, done) => {
		console.log(profile);
		const existingUser = await User.findOne({ userId: profile.id });
		if (existingUser){
			console.log('Ha');
			return done(null, existingUser);
		}
		const user = await new User({
			userId: profile.id,
			fullName: profile.displayName,
			avatar: profile.photos[0].value,
			provider: profile.provider
		}).save();
		done(null, user);
	}
));