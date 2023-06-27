import axios from "./axios";

export const getCitasRequest = () => axios.get("/citas");
export const getCitaRequest = (id) => axios.get(`/citas/${id}`);
export const createCitaRequest = (cita) => axios.post("/citas", cita);
export const updateCitaRequest = (cita) =>
  axios.put(`/citas/${cita._id}`, cita);
export const deleteCitaRequest = (id) => axios.delete(`/citas/${id}`);
