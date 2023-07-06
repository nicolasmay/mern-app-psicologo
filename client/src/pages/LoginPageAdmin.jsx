import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPageAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { adminsignin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    adminsignin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/citas-admin");
  }, [isAuthenticated]);
  //Estilos 2:43:00
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {loginErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white my-1" key={i}>
            {error}
          </div>
        ))}

        <h1 className="text-2xl font-bold">Login</h1>
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
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="password"
          />

          {errors.password && (
            <p className="text-red-500 text-xs">Este campo es obligatorio</p>
          )}

          <button
            className="bg-indigo-500 px-4 py-1 rounded-lg font-bold"
            type="submit"
          >
            Loguearse
          </button>
        </form>

        <p className="flex gap-x-2 justify-between">
          No tienes cuenta?
          <Link to="/register" className="text-purple-700">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPageAdmin;
