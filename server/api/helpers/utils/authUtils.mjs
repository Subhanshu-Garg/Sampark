import jwt from "jsonwebtoken";
import { JWT_TOKEN_EXPIRES_IN_DAYS, JWT_SECRET } from "../constants/constants.mjs";

const authUtils = {
  generateToken
}

export default authUtils;

async function generateToken(payload) {
  const options = {
    expiresIn: JWT_TOKEN_EXPIRES_IN_DAYS
  }
  const token = jwt.sign(payload, JWT_SECRET, options)
  return 'Bearer ' + token;
}