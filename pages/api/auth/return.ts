import {NextApiResponse} from "next";
import nextConnect from "next-connect";
import auth from "middleware/auth";
import passport from "lib/passport";

const handler = nextConnect();

handler
  .use(auth)
  .get(passport.authenticate("steam", {failureRedirect: '/api/auth/login'}), (req, res: NextApiResponse) => {
    res.redirect("/");
  });

export default handler;
