import Cita from "../models/citas.model.js";

export const getCitas = async (req, res) => {
  try {
    const citas = await Cita.find({
      user: req.user.id,
    }).populate("user");
    res.json(citas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createCita = async (req, res) => {
  const { paciente, nombre, apellido, comentario, date } = req.body;
  console.log(req.user);
  const newCita = new Cita({
    paciente,
    nombre,
    apellido,
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
  try {
    const cita = await Cita.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cita) return res.status(404).json({ message: "Cita no encontrada" });
    res.json(cita);
  } catch (error) {
    return res.status(404).json({ message: "cita no encontrada" });
  }
};
export const deleteCita = async (req, res) => {
  const cita = await Cita.findByIdAndDelete(req.params.id);
  if (!cita) return res.status(404).json({ message: "Cita no encontrada" });
  return res.sendStatus(204);
};
