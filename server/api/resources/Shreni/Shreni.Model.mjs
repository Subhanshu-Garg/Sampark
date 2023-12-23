import createModel from "../../helpers/createModel.mjs";
import shreniSchema from "./Shreni.Schema.mjs";
import mongoose from "mongoose";

const Shreni = mongoose.model('Shreni', shreniSchema);

const ShreniModel = createModel(Shreni);

export default ShreniModel;