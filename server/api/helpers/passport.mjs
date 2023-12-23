import { Strategy, ExtractJwt } from "passport-jwt";
import passport from "passport";
import UserModel from "../resources/User/User.Model.mjs";
import { JWT_SECRET } from "./constants/constants.mjs";


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}

passport.use(new Strategy(opts, async function(jwtPayload, done) {
    try {
        const user = await UserModel.findById(jwtPayload.userId);

        if(!user){
            return done(null, false);
        }

        return done(null, user);
    } catch (error) {
        
        return done(error, false);
    }
}));
