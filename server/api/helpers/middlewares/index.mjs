import passport from "passport";
import { auth } from "./auth.mjs";
import { catchAsync } from "./catchAsync.mjs";
import { errorMiddleware } from "./errorMiddleware.mjs";

// export async function auth(req, res, next) {
//   passport.authenticate('jwt', { session: false })
//   next();
// }

// export const catchAsync = (fn) => (req, res, next) => {
//   Promise.resolve(fn(req, res, next)).catch((err) => next(err));
// };

export {
  auth, 
  catchAsync,
  errorMiddleware
}