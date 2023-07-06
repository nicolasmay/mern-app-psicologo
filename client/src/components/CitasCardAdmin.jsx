import { useCitas } from "../context/CitasAdminContext";
import { Link } from "react-router-dom";

function CitasCardAdmin({ cita }) {
  const { deleteCita } = useCitas();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <label className="font-bold">RUT</label>
      <h1>{cita.paciente}</h1>
      <label className="font-bold">Nombre</label>
      <p>{cita.nombre}</p>
      <label className="font-bold">Apellido</label>
      <p>{cita.apellido}</p>
      <label className="font-bold">Motivo de consulta</label>
      <p>{cita.comentario}</p>
      <label className="font-bold">Fecha de consulta</label>
      <h1>{new Date(cita.date).toLocaleString()}</h1>
      <div className="flex py-2 items-center">
        <button
          className="bg-indigo-500 px-4 py-1 rounded-sm font-bold"
          onClick={() => deleteCita(cita._id)}
        >
          Eliminar
        </button>
      </div>
      <div className="flex py-2 items-center">
        <Link
          className="bg-indigo-500 px-4 py-1 rounded-sm font-bold"
          to={`/citas/${cita._id}`}
        >
          Editar
        </Link>
      </div>
    </div>
  );
}

export default CitasCardAdmin;
//4:19
