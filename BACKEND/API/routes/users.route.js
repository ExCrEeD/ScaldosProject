import express from "express";
import { newUser, login } from "../controllers/users.controller";

var router = express.Router();

router.post("/login", login);

router.post("/newUser", newUser);

export default router;
