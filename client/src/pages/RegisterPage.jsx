import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/citas");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        <h1 className="text-2xl font-bold">Registrate</h1>
        {RegisterErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
            placeholder="email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">Este campo es obligatorio</p>
          )}

          <input
            type="number"
            {...register("telefono", { valueAsNumber: true, required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
            placeholder="telefono"
          />

          {errors.telefono && (
            <p className="text-red-500 text-xs">Este campo es obligatorio</p>
          )}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="password"
          />

          {errors.password && (
            <p className="text-red-500 text-xs">Este campo es obligatorio</p>
          )}

          <button type="submit">Registrar</button>
        </form>

        <p className="flex gap-x-2 justify-between">
          Ya tienes cuenta?
          <Link to="/login" className="text-purple-700">
            Ingresa
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
