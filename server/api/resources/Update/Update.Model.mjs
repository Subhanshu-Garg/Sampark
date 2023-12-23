import createModel from "../../helpers/createModel.mjs";
import updateSchema from "./Update.Schema.mjs";
import mongoose from "mongoose";

const Update = mongoose.model('Update', updateSchema);

const UpdateModel = createModel(Update);

export default UpdateModel;