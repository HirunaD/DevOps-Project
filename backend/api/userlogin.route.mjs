import express from "express";
const router = express.Router();
import { login, loginu } from "./userlogin.controller.js";

router.post("/", loginu);

export default router;
