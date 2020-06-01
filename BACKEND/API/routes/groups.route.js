import express from "express";
import { newGroup, addUserToGroup } from "../controllers/groups.controller";

var router = express.Router();

router.post("/newGroup", newGroup);

router.post("/addUser", addUserToGroup);

export default router;