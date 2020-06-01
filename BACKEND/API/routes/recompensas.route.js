import express from "express";
import {
  nuevaRecompensa,
  obtenerRecompensas,
} from "../controllers/recompensas.controller";

var router = express.Router();

router.post("/nuevaRecompensa", nuevaRecompensa);
router.get("/obtenerRecompensas", obtenerRecompensas);

export default router;
