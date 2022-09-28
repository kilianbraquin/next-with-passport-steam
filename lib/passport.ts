import passport from "passport";
import PassportSteam from "passport-steam";

passport.serializeUser(function (user: Record<string, unknown>, done) {
  // serialize the username into session
  return done(null, user.identifier);
});

passport.deserializeUser(function (req, id, done) {
  // deserialize the username back into user object
  return done(null, { id });
});

passport.use(
  new PassportSteam(
    {
      returnURL: "http://localhost:3000/api/auth/return",
      realm: "http://localhost:3000/",
      apiKey: process.env.STEAM_API_KEY,
    },
    function (identifier, profile, done) {
      console.log(identifier)
      if (identifier) {
        console.log("done")
        return done(null, {identifier})
      }
      else return done(null, null);
    }
  )
);

export default passport;
