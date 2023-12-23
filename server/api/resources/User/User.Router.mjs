import express from "express";
import UserController from "./User.Controller.mjs";
import { auth, catchAsync } from "../../helpers/middlewares/index.mjs"

const { login, logout, createUser, updateUserById, getUsers, deleteUserById } = UserController;

const router = express.Router();

router.route("/login").post(catchAsync(login));
router.route("/logout").post(auth(), catchAsync(logout));
router.route("/").get(auth(), catchAsync(getUsers));
router.route("/").post(catchAsync(createUser));
router.route("/:id/update").patch(auth('admin'), catchAsync(updateUserById));
router.route("/:id/delete").delete(auth('admin'), catchAsync(deleteUserById));

export default router;