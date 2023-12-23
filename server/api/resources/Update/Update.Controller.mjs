import httpStatus from "http-status";
import UpdateModel from "./Update.Model.mjs"
import SuchiMemberModel from "../Suchi/SuchiMember.Model.mjs";

const UpdateController = {
  createUpdate,
  getUpdates,
  getUpdateById,
  updateUpdateById,
  deleteUpdateById
}

export default UpdateController;

async function createUpdate(req, res, next) {
  const { body } = req;
  const update = await UpdateModel.create(body);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Successfully created update",
    update
  })
  next();
}

async function getUpdates(req, res, next) {
  const { query } = req;
  const updates = await UpdateModel.find(query, '', { populate: { path: 'createdBy', select: 'name mobileNumber'}});
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully fetched updates",
    updates
  })
  next();
}

async function getUpdateById(req, res, next) {
  const { params: { id }} = req;
  const update = await UpdateModel.findById(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully fetched update by Id",
    update
  })
  next();
}

async function updateUpdateById(req, res, next) {
  const { body, params: { id } } = req;
  const update = await UpdateModel.updateById(id, body);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully updated update by Id",
    update
  })
  next();
}

async function deleteUpdateById(req, res, next) {
  const { params: { id }} = req;
  const update = await UpdateModel.deleteById(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully deleted update by Id",
    update
  })
  next();
}