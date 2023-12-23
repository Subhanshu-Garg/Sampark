import express from "express";
import SuchiMemberController from "../Suchi/SuchiMember.Controller.mjs";
import { auth } from "../../helpers/middlewares/auth.mjs";
import { catchAsync } from "../../helpers/middlewares/catchAsync.mjs";

const { getSuchiMembers, getSuchiMemberById, createSuchiMember, createSuchiMembers, updateSuchiMemberById, deleteSuchiMemberById } = SuchiMemberController;

const router = express.Router();

router.route('/').get(auth(),catchAsync(getSuchiMembers));
router.route('/').post(auth('admin'), catchAsync(createSuchiMember));
router.route('/many').post(auth('admin'), catchAsync(createSuchiMembers));
router.route('/:id/update').patch(auth('admin'), catchAsync(updateSuchiMemberById));
router.route('/:id').get(auth(), catchAsync(getSuchiMemberById));
router.route('/:id/delete').delete(auth('admin'), catchAsync(deleteSuchiMemberById));

export default router;
