import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getCitas,
  getCita,
  createCita,
  updateCita,
  deleteCita,
} from "../controllers/citas.controller.js";

const router = Router();

router.get("/citas", authRequired, getCitas);
router.get("/citas/:id", authRequired, getCita);
router.post("/citas", authRequired, createCita);
router.put("/citas/:id", authRequired, updateCita);
router.delete("/citas/:id", authRequired, deleteCita);

export default router;
