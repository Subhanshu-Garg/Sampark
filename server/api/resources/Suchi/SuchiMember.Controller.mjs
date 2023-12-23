import httpStatus from "http-status";
import SuchiMemberModel from "./SuchiMember.Model.mjs";

const SuchiMemberController = {
  createSuchiMember,
  createSuchiMembers,
  getSuchiMemberById,
  getSuchiMembers,
  deleteSuchiMemberById,
  updateSuchiMemberById
}

export default SuchiMemberController;

async function createSuchiMember(req, res, next) {
  const { body } = req;
  const suchiMember = await SuchiMemberModel.create(body);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "SuchiMember created successfully.",
    suchiMember
  })
}

async function createSuchiMembers(req, res, next) {
  const { body } = req; 
  const suchiMembersPromises = [];
  body.forEach(suchiMember => {
    suchiMembersPromises.push(SuchiMemberModel.create(suchiMember));
  })
  const suchiMembers = await Promise.allSettled(suchiMembersPromises);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "suchiMembers created successfully.",
    suchiMembers
  })
}

async function getSuchiMembers(req, res, next) {
  const { query } = req;
  const suchiMembers = await SuchiMemberModel.find(query, 'name mobileNumber shreni', { populate: { path: 'shreni', select: 'name' }});
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully fetched suchiMembers",
    suchiMembers
  })
}

async function getSuchiMemberById(req, res, next) {
  const { params: { id }} = req;
  const suchiMember = await SuchiMemberModel.findById(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully fetched suchiMember by Id",
    suchiMember
  })
}

async function updateSuchiMemberById(req, res, next) {
  const { body, params: { id } } = req;
  delete body?.updates
  const suchiMember = await SuchiMemberModel.updateById(id, body);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully updated suchiMember by Id",
    suchiMember
  })
}

async function deleteSuchiMemberById(req, res, next) {
  const { params: { id }} = req;
  const suchiMember = await SuchiMemberModel.deleteById(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully deleted suchiMember by Id",
    suchiMember
  })
}
