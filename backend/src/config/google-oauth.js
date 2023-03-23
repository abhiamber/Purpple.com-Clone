// let GoogleStrategy = require("passport-google-oauth20").Strategy;
// require("dotenv").config();
// let passport = require("passport");
// let UserModel = require("../models/user.model");

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       console.log(profile);

//       //   console.log(user);
//       // UserModel.find({ googleId: profile.id }, function (err, user) {
//       return cb(null, profile._json);
//       // });
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// module.exports = passport;
