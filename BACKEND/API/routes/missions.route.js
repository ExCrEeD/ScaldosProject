import express from "express";
import { newMIssion, getMission, deleteMission } from "../controllers/missions.controller";

var router = express.Router();

router.post("/newMission", newMIssion);

router.get("/getMission", getMission);

router.delete("/deleteMission", deleteMission);

export default router;
