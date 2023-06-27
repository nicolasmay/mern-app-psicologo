import { createContext, useContext, useState } from "react";
import { createCitaRequest, getCitasRequest } from "../api/citas";

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
  return (
    <CitasContext.Provider
      value={{
        citas,
        createCita,
        getCitas,
      }}
    >
      {children}
    </CitasContext.Provider>
  );
}
