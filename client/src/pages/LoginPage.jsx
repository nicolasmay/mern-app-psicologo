import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signingErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  //Estilos 2:43:00
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {signingErrors.map((error, i) => (
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

          <button type="submit">Loguearse</button>
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

export default LoginPage;
