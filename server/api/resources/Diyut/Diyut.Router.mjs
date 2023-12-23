import express from "express";
import DiyutController from "../Diyut/Diyut.Controller.mjs";
import { auth } from "../../helpers/middlewares/auth.mjs";

const { getDiyuts, getDiyutById, createDiyut, updateDiyutById, deleteDiyutById } = DiyutController;

const router = express.Router();

router.route('/').get(auth(), getDiyuts);
router.route('/').post(auth('admin'), createDiyut);
router.route('/:id/update').patch(auth('admin'), updateDiyutById);
router.route('/:id').get(auth('admin'), getDiyutById);
router.route('/:id/delete').delete(auth('admin'), deleteDiyutById);

export default router;
