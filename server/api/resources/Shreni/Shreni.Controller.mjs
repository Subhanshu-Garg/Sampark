import httpStatus from "http-status";
import ShreniModel from "./Shreni.Model.mjs"

const ShreniController = {
  createShreni,
  getShrenis,
  getShreniById,
  updateShreniById,
  deleteShreniById
}

export default ShreniController;

async function createShreni(req, res, next) {
  const { body } = req;
  const shreni = await ShreniModel.create(body);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Successfully created shreni",
    shreni
  })
  next();
}

async function getShrenis(req, res, next) {
  const { query } = req;
  const shrenis = await ShreniModel.find(query);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully fetched shrenis",
    shrenis
  })
  next();
}

async function getShreniById(req, res, next) {
  const { params: { id }} = req;
  const shreni = await ShreniModel.findById(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully fetched shreni by Id",
    shreni
  })
  next();
}

async function updateShreniById(req, res, next) {
  const { body, params: { id } } = req;
  const shreni = await ShreniModel.updateById(id, body);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully updated shreni by Id",
    shreni
  })
  next();
}

async function deleteShreniById(req, res, next) {
  const { params: { id }} = req;
  const shreni = await ShreniModel.deleteById(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully deleted shreni by Id",
    shreni
  })
  next();
}