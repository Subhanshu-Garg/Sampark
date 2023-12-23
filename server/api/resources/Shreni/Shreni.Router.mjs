import express from "express";
import ShreniController from "../Shreni/Shreni.Controller.mjs";
import { auth } from "../../helpers/middlewares/auth.mjs";

const { getShrenis, getShreniById, createShreni, updateShreniById, deleteShreniById } = ShreniController;

const router = express.Router();

router.route('/').get(auth(), getShrenis);
router.route('/').post(auth('admin'), createShreni);
router.route('/:id/update').patch(auth('admin'), updateShreniById);
router.route('/:id').get(auth('admin'), getShreniById);
router.route('/:id/delete').delete(auth('admin'), deleteShreniById);

export default router;
