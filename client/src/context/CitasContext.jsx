import { createContext, useContext, useState } from "react";
import {
  createCitaRequest,
  getCitasRequest,
  deleteCitaRequest,
  getCitaRequest,
  updateCitaRequest,
} from "../api/citas";

const CitasContext = createContext();

export const useCitas = () => {
  const context = useContext(CitasContext);

  if (!context) {
    throw new Error("useCitas debe estar dentro del proveedor CitasContext");
  }
  return context;
};

export function CitasProvider({ children }) {
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

  const createCita = async (cita) => {
    const res = await createCitaRequest(cita);
    console.log(res);
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

  const getCita = async (id) => {
    try {
      const res = await getCitaRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
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
    <CitasContext.Provider
      value={{
        citas,
        createCita,
        getCitas,
        deleteCita,
        getCita,
        updateCita,
      }}
    >
      {children}
    </CitasContext.Provider>
  );
}
