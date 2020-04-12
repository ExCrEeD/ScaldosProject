import express from "express";
import { newGroup } from "../controllers/groups.controller";

var router = express.Router();

router.post("/newGroup", newGroup);

export default router;