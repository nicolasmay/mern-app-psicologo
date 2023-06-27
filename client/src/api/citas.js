import axios from "./axios";

export const getCitasRequest = () => axios.get("/citas");
export const getCitaRequest = (id) => axios.get(`/citas/${id}`);
export const createCitaRequest = (cita) => axios.post("/citas", cita);
export const updateCitaRequest = (id, cita) => axios.put(`/citas/${id}`, cita);
export const deleteCitaRequest = async (id) => axios.delete(`/citas/${id}`);
