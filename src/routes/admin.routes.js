//Esto deberia estar gucci, me tiro respuesta en thunderclient

import { Router } from "express";
import {
  adminLogin,
  adminLogout,
  adminProfile,
  adminVerifyToken,
} from "../controllers/admin.controllers.js";

//Creo que estos puedo dejarlos como globales ???
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/loginadmin", validateSchema(loginSchema), adminLogin);

router.post("/adminlogout", adminLogout);

router.get("/adminverify", adminVerifyToken);

router.get("/adminprofile", authRequired, adminProfile);

export default router;
