import express from "express";
import SignupCtrl from "./usersignup.controller.js";

const router = express.Router();

router.route("/").get(SignupCtrl.apiSignup).post(SignupCtrl.apiSignup);

export default router;
