import { useEffect } from "react";
import { useCitas } from "../context/CitasContext";

function CitasPage() {
  const { getCitas, citas } = useCitas();

  useEffect(() => {
    getCitas();
  }, []);

  if (citas.length === 0) {
    return <h1>No hay citas</h1>;
  }
  return (
    <div>
      {citas.map((cita) => (
        <div
          key={cita._id}
          className="bg-zinc-800 max-w-md w-full p-10 rounded-md"
        >
          <h1>{cita.paciente}</h1>
          <p>{cita.comentario}</p>
          <h1>{cita.date}</h1>
        </div>
      ))}
    </div>
  );
}

export default CitasPage;
