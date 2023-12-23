import httpStatus from "http-status";
import ShetraModel from "./Shetra.Model.mjs"

const ShetraController = {
  createShetra,
  getShetras,
  getShetraById,
  updateShetraById,
  deleteShetraById
}

export default ShetraController;

async function createShetra(req, res, next) {
  const { body } = req;
  const shetra = await ShetraModel.create(body);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Successfully created shetra",
    shetra
  })
  next();
}

async function getShetras(req, res, next) {
  const { query } = req;
  const shetras = await ShetraModel.find(query);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully fetched shetras",
    shetras
  })
  next();
}

async function getShetraById(req, res, next) {
  const { params: { id }} = req;
  const shetra = await ShetraModel.findById(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully fetched shetra by Id",
    shetra
  })
  next();
}

async function updateShetraById(req, res, next) {
  const { body, params: { id } } = req;
  const shetra = await ShetraModel.updateById(id, body);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully updated shetra by Id",
    shetra
  })
  next();
}

async function deleteShetraById(req, res, next) {
  const { params: { id }} = req;
  const shetra = await ShetraModel.deleteById(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully deleted shetra by Id",
    shetra
  })
  next();
}