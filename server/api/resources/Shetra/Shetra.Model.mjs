import createModel from "../../helpers/createModel.mjs";
import shetraSchema from "./Shetra.Schema.mjs";
import mongoose from "mongoose";

const Shetra = mongoose.model('Shetra', shetraSchema);

const ShetraModel = createModel(Shetra);

export default ShetraModel;