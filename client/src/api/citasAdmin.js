import axios from "./axios";

export const getCitasRequest = () => axios.get("/citasadmin");
export const updateCitaRequest = (id, cita) =>
  axios.put(`/citasadmin/${id}`, cita);
export const deleteCitaRequest = async (id) =>
  axios.delete(`/citasadmin/${id}`);
