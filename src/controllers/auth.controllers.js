import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { email, telefono, password } = req.body;

  try {
    const userFound = await User.findOne({email});
    if (userFound) return res.status(400).json(["El correo ya esta en uso"])
    
    const telefonoFound = await User.findOne({telefono});

    if (telefonoFound) return res.status(400).json(["El telefono ya esta en uso"])

    const passwordhash = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      telefono,
      password: passwordhash,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);

    res.json({
      id: userSaved._id,
      email: userSaved.email,
      telefono: userSaved.telefono,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  

  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (!userFound){
      return res.status(400).json(["Correo incorrecto"])};

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch){
      return res.status(400).json(["Contraseña incorrecta"])};

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      email: userFound.email,
      telefono: userFound.telefono,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound)
    return res.status(400).json({ message: "No se encontro usuario" });

  return res.json({
    id: userFound._id,
    email: userFound.email,
    telefono: userFound.telefono,
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "No autorizado" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound._id,
      email: userFound.email,
      telefono: userFound.telefono,
    });
  });
};
