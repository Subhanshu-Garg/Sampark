import createModel from "../../helpers/createModel.mjs";
import diyutSchema from "./Diyut.Schema.mjs";
import mongoose from "mongoose";

const Diyut = mongoose.model('Diyut', diyutSchema);

const DiyutModel = createModel(Diyut);

export default DiyutModel;