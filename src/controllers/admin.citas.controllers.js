import citaAdmin from "../models/citas.model.js";

export const getCitas = async (req, res) => {
  try {
    const citas = await citaAdmin.find();
    res.json(citas);
    console.log(citas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCita = async (req, res) => {
  const cita = await citaAdmin.findById(req.params.id).populate("user");
  if (!cita) return res.status(404).json({ message: "Cita no encontrada" });
  res.json(cita);
};
export const updateCita = async (req, res) => {
  try {
    const cita = await citaAdmin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cita) return res.status(404).json({ message: "Cita no encontrada" });
    res.json(cita);
  } catch (error) {
    return res.status(404).json({ message: "cita no encontrada" });
  }
};
export const deleteCita = async (req, res) => {
  const cita = await citaAdmin.findByIdAndDelete(req.params.id);
  if (!cita) return res.status(404).json({ message: "Cita no encontrada" });
  return res.sendStatus(204);
};
