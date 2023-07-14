// middleware has access to req, res

import jwt from "jsonwebtoken";
import config from "config";

export default function auth(req, res, next) {
  //get token from the header
  const token = req.header("x-auth-token");

  // check if taken is not there
  if (!token) {
    return res.status(401).json({ msg: "No token, Authorization denied." });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    // console.log(decoded, "decoded");
    // call next() after all the middleware statements.
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid." });
  }
}
