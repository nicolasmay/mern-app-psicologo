import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getCitas,
  getCita,
  updateCita,
  deleteCita,
} from "../controllers/admin.citas.controllers.js";

const router = Router();

router.get("/citasadmin", authRequired, getCitas);
router.get("/citasadmin/:id", authRequired, getCita);
router.put("/citasadmin/:id", authRequired, updateCita);
router.delete("/citasadmin/:id", authRequired, deleteCita);

export default router;
