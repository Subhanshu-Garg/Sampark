import httpStatus from "http-status";
import DiyutModel from "./Diyut.Model.mjs"

const DiyutController = {
  createDiyut,
  getDiyuts,
  getDiyutById,
  updateDiyutById,
  deleteDiyutById
}

export default DiyutController;

async function createDiyut(req, res, next) {
  const { body } = req;
  const diyut = await DiyutModel.create(body);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Successfully created diyut",
    diyut
  })
  next();
}

async function getDiyuts(req, res, next) {
  const { query } = req;
  const diyuts = await DiyutModel.find(query);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully fetched diyuts",
    diyuts
  })
  next();
}

async function getDiyutById(req, res, next) {
  const { params: { id }} = req;
  const diyut = await DiyutModel.findById(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully fetched diyut by Id",
    diyut
  })
  next();
}

async function updateDiyutById(req, res, next) {
  const { body, params: { id } } = req;
  const diyut = await DiyutModel.updateById(id, body);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully updated diyut by Id",
    diyut
  })
  next();
}

async function deleteDiyutById(req, res, next) {
  const { params: { id }} = req;
  const diyut = await DiyutModel.deleteById(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully deleted diyut by Id",
    diyut
  })
  next();
}