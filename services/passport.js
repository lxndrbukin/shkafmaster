const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

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
		console.log(profile.photos[0].value);
		const existingUser = await User.findOne({ googleId: profile.id });
		if (existingUser){
			return done(null, existingUser);
		}
		const user = await new User({
			googleId: profile.id,
			fullName: profile.displayName,
			picture: profile.photos[0].value
		}).save();
		done(null, user);
	}
));