import express from 'express';
import { login, logout, register, updateProfile } from "../control/user-control.js";
import isAuthenticated from '../auth/isAuth.js';

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile/update").post(isAuthenticated, updateProfile);

export default router;