import mongoose from "mongoose";
import suchiMemberSchema from "./SuchiMember.Schema.mjs";
import createModel from "../../helpers/createModel.mjs";

const SuchiMember = mongoose.model('SuchiMember', suchiMemberSchema);

const SuchiMemberModel = createModel(SuchiMember)

export default SuchiMemberModel;