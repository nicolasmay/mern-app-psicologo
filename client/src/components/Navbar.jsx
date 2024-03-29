import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user, isAdmin } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      {isAuthenticated ? (
        <l1>
          <Link to={user ? "/citas" : "/"}>
            <h1 className="text-2xl font-bold">Inicio</h1>
          </Link>

          {isAdmin ? (
            <Link to={isAdmin ? "/citas-admin" : "/"}>
              <h1 className="text-2xl font-bold">Citas pacientes</h1>
            </Link>
          ) : null}
        </l1>
      ) : (
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">Inicio</h1>
        </Link>
      )}
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <l1 className="px-5 font-bold">
              Bienvenido: {isAdmin ? isAdmin.email : ""}
              {user ? user.email : ""}
            </l1>
            <l1>
              {user ? (
                <Link
                  to="/add-citas"
                  className="bg-indigo-500 px-4 py-1 rounded-sm font-bold"
                >
                  Agenda tu cita
                </Link>
              ) : null}
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

      {/* admin Navbar */}
    </nav>
  );
}

export default Navbar;
