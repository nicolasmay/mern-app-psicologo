import { useForm } from "react-hook-form";
import { useCitas } from "../context/CitasContext";
import { useNavigate } from "react-router-dom";
function CitasFormPage() {
  const { register, handleSubmit } = useForm();
  const { createCita } = useCitas();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createCita(data);
    navigate("/citas");
    console.log(Error);
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa RUT"
          {...register("paciente")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
          autoFocus
        />

        <textarea
          rows="3"
          placeholder="Cuentanos un sobre tu motivo de consulta"
          {...register("comentario")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        ></textarea>
        <label for="date">Elige una hora para tu cita</label>
        <input
          type="datetime-local"
          placeholder="date"
          {...register("date")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
          autoFocus
        />

        <label
          for="date"
          className="box-shadow text-xs rounded-sm text-cyan-600"
        >
          Nos comunicaremos contigo mediante email o telefono para confirmar, el
          periodo de atención es entre{" "}
          <span className="font-extrabold text-lg">8:00 y 18:00 </span>horas.
          Porfavor ten en cuenta esto al agendar.
        </label>
        <p></p>
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default CitasFormPage;
