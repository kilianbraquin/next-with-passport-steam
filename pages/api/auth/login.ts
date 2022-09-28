import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import auth from "middleware/auth";
import passport from "lib/passport";

const handler = nextConnect();

handler
  .use(auth)
  .get(passport.authenticate("steam"), (req, res: NextApiResponse) => {
    // Should never be called
    res.status(200).end();
  });

export default handler;
