import express from "express";
import UpdateController from "./Update.Controller.mjs";
import { auth } from "../../helpers/middlewares/auth.mjs";
import { catchAsync } from "../../helpers/middlewares/catchAsync.mjs";

const { getUpdates, getUpdateById, createUpdate, updateUpdateById, deleteUpdateById } = UpdateController;

const router = express.Router();

router.route('/').get(auth(),catchAsync(getUpdates));
router.route('/').post(auth(), catchAsync(createUpdate));
router.route('/:id/update').patch(auth(), catchAsync(updateUpdateById));
router.route('/:id').get(auth(), catchAsync(getUpdateById));
router.route('/:id/delete').delete(auth(), catchAsync(deleteUpdateById));

export default router;
