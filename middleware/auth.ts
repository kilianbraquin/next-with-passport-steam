import nextConnect from "next-connect";
import passport from "lib/passport";
import session from "cookie-session";

const auth = nextConnect()
  .use(
    session({
      name: "sid",
      secret: "process.env.TOKEN_SECRET_process.env.TOKEN_SECRET_process.env.TOKEN_SECRET",
      maxAge: 60 * 60 * 8, // 8 hours,
    })
  )
  .use(passport.initialize())
  .use(passport.session());

export default auth;
