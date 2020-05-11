import express from "express";
import {sendEmail} from "../controllers/mail.controller"

var router = express.Router();

router.post("/sendMail", sendEmail);

export default router;