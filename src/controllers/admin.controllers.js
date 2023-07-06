//Imports OK, de todas formas hacer doble check

import userAdmin from "../models/admin.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await userAdmin.findOne({ email });

    if (!userFound) {
      return res.status(400).json(["Correo incorrecto"]);
    }

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(400).json(["Contraseña incorrecta"]);
    }

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      email: userFound.email,
      password: userFound.password,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const adminLogout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const adminProfile = async (req, res) => {
  const userFound = await userAdmin.findById(req.user.id);

  if (!userFound)
    return res.status(400).json({ message: "No se encontro usuario" });

  return res.json({
    id: userFound._id,
    email: userFound.email,
  });
};

export const adminVerifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "No autorizado" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    const userFound = await userAdmin.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound._id,
      email: userFound.email,
    });
  });
};
