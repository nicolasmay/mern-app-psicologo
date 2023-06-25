import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import citaRoutes from "./routes/cita.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(morgan("dev"));
/*
Se usa ya que express no puede leer los datos que se envian desde un formulario
entonces se invoca este metodo para leer datos de tipo json
*/
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", citaRoutes);

export default app;
