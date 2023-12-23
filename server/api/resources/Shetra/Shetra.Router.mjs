import express from "express";
import ShetraController from "../Shetra/Shetra.Controller.mjs";
import { auth } from "../../helpers/middlewares/auth.mjs";

const { getShetras, getShetraById, createShetra, updateShetraById, deleteShetraById } = ShetraController;

const router = express.Router();

router.route('/').get(auth(), getShetras);
router.route('/').post(auth('admin'), createShetra);
router.route('/:id/update').patch(auth('admin'), updateShetraById);
router.route('/:id').get(auth('admin'), getShetraById);
router.route('/:id/delete').delete(auth('admin'), deleteShetraById);

export default router;
