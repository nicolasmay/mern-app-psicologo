import Cita from "../models/citas.model.js";

export const getCitas = async (req, res) => {
  const citas = await Cita.find({
    user: req.user.id,
  }).populate("user");
  res.json(citas);
};
export const createCita = async (req, res) => {
  const { paciente, comentario, date } = req.body;
  console.log(req.user);
  const newCita = new Cita({
    paciente,
    comentario,
    date,
    user: req.user.id,
  });

  const savedCita = await newCita.save();
  res.json(savedCita);
};
export const getCita = async (req, res) => {
  const cita = await Cita.findById(req.params.id).populate("user");
  if (!cita) return res.status(404).json({ message: "Cita no encontrada" });
  res.json(cita);
};
export const updateCita = async (req, res) => {
  const cita = await Cita.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!cita) return res.status(404).json({ message: "Cita no encontrada" });
  res.json(cita);
};
export const deleteCita = async (req, res) => {
  const cita = await Cita.findByIdAndDelete(req.params.id);
  if (!cita) return res.status(404).json({ message: "Cita no encontrada" });
  return res.sendStatus(204).json({ message: "Cita eliminada" });
};
