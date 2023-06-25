import { useAuth } from "../context/AuthContext";

function CitasPage() {
  const { user } = useAuth();
  console.log(user);

  return <div>Pagina de citas</div>;
}

export default CitasPage;
