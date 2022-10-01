import passport from "passport";
import PassportSteam from "passport-steam";

passport.serializeUser(function (user: Record<string, unknown>, done) {
  // serialize the username into session
  done(null, user);
});

passport.deserializeUser(function (req, user, done) {
  // deserialize the username back into user object
  done(null, user);
});

passport.use(
  new PassportSteam.Strategy(
    {
      returnURL: "http://localhost:3000/api/auth/return",
      realm: "http://localhost:3000/",
      apiKey: process.env.STEAM_API_KEY,
    },
    function (identifier, profile, done) {
      if (identifier) {
        profile.identifier = identifier;
        done(null, profile, profile)
      } else done(null, null);
    }
  )
);

export default passport;
