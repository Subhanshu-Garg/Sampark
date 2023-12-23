import mongoose from "mongoose";
import userSchema from "./User.Schema.mjs";
import createModel from "../../helpers/createModel.mjs";

const User = mongoose.model('User', userSchema);

const UserModel = createModel(User)

export default UserModel;