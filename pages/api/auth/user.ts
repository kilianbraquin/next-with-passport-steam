import {NextApiResponse} from "next";
import nextConnect from "next-connect";
import auth from "middleware/auth";
import passport from "lib/passport";

const handler = nextConnect();

handler
  .use(auth)
  .get((req, res: NextApiResponse) => {
    // Should never be called
    res.json(req["session"] ?? {})
  });

export default handler;
