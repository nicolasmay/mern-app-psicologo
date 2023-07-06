import { useEffect } from "react";
import { useCitas } from "../context/CitasAdminContext";
import CitasCard from "../components/CitasCardAdmin";
function CitasPageAdmin() {
  const { getCitas, citas } = useCitas();

  useEffect(() => {
    getCitas();
  }, []);

  if (citas.length === 0) {
    return <h1>No hay citas</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-1">
      {citas.map((cita) => (
        <CitasCard cita={cita} key={cita._id} />
      ))}
    </div>
  );
}

export default CitasPageAdmin;
