import { createContext, useContext, useState } from "react";
import {
  getCitasRequest,
  deleteCitaRequest,
  updateCitaRequest,
} from "../api/citasAdmin";

const CitasAdminContext = createContext();

export const useCitas = () => {
  const context = useContext(CitasAdminContext);

  if (!context) {
    throw new Error(
      "useCitas debe estar dentro del proveedor CitasAdminContext"
    );
  }
  return context;
};

export function CitasAdminProvider({ children }) {
  const [citas, setCitas] = useState([]);

  const getCitas = async () => {
    const res = await getCitasRequest();

    try {
      const res = await getCitasRequest();
      setCitas(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCita = async (id) => {
    try {
      const res = await deleteCitaRequest(id);
      if (res.status === 204) setCitas(citas.filter((cita) => cita._id !== id));
      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCita = async (id, cita) => {
    try {
      await updateCitaRequest(id, cita);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CitasAdminContext.Provider
      value={{
        citas,
        getCitas,
        deleteCita,
        updateCita,
      }}
    >
      {children}
    </CitasAdminContext.Provider>
  );
}
