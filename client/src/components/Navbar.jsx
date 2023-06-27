import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <l1>
        <Link to="/">
          <h1 className="text-2xl font-bold">Inicio</h1>
        </Link>
      </l1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <l1 className="px-5 font-bold">Bienvenido: {user.email}</l1>
            <l1>
              <Link
                to="/add-citas"
                className="bg-indigo-500 px-4 py-1 rounded-sm font-bold"
              >
                Agenda tu cita
              </Link>
            </l1>
            <l1>
              <Link
                to="/"
                onClick={() => logout()}
                className="bg-red-400 px-4 py-1 rounded-sm font-bold"
              >
                Cierra sesion
              </Link>
            </l1>
          </>
        ) : (
          <>
            <l1>
              <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-sm">
                Ingresa
              </Link>
            </l1>
            <l1>
              <Link
                to="/register"
                className="bg-indigo-500 px-4 py-1 rounded-sm"
              >
                Registrate
              </Link>
            </l1>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
