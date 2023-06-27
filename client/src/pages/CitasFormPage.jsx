import { useForm } from "react-hook-form";
import { useCitas } from "../context/CitasContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function CitasFormPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { createCita, getCita, updateCita } = useCitas();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadCita() {
      if (params.id) {
        const cita = await getCita(params.id);
        setValue("paciente", cita.paciente);
        setValue("nombre", cita.nombre);
        setValue("apellido", cita.apellido);
        setValue("comentario", cita.comentario);
        setValue("date", cita.date);
      }
    }
    loadCita();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateCita(params.id, data);
    } else {
      createCita(data);
    }
    navigate("/citas");
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa RUT"
          {...register("paciente", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
          autoFocus
        />
        {errors.paciente && (
          <p className="text-red-500 text-xs">Este campo es obligatorio</p>
        )}
        <textarea
          rows="3"
          placeholder="Ingresa tu nombre"
          {...register("nombre", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        ></textarea>
        {errors.nombre && (
          <p className="text-red-500 text-xs">Este campo es obligatorio</p>
        )}
        <textarea
          rows="3"
          placeholder="Ingresa tu apellido"
          {...register("apellido", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        ></textarea>
        {errors.apellido && (
          <p className="text-red-500 text-xs">Este campo es obligatorio</p>
        )}

        <textarea
          rows="3"
          placeholder="Cuentanos un sobre tu motivo de consulta"
          {...register("comentario", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        ></textarea>
        {errors.comentario && (
          <p className="text-red-500 text-xs">Este campo es obligatorio</p>
        )}
        <label for="date">Elige una hora para tu cita</label>
        <input
          type="datetime-local"
          placeholder="date"
          {...register("date", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
          autoFocus
        />
        {errors.date && (
          <p className="text-red-500 text-xs">Este campo es obligatorio</p>
        )}

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
