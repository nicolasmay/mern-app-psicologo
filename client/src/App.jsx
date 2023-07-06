import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LoginPageAdmin from "./pages/LoginPageAdmin";
import CitasPage from "./pages/CitasPage";
import CitasPageAdmin from "./pages/CitasPageAdmin";
import HomePage from "./pages/HomePage";
import CitasFormPage from "./pages/CitasFormPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";

import { CitasProvider } from "./context/CitasContext";
import { CitasAdminProvider } from "./context/CitasAdminContext";

function App() {
  return (
    <AuthProvider>
      <CitasAdminProvider>
        <CitasProvider>
          <BrowserRouter>
            <main className="container mx-auto px5">
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/loginadmin" element={<LoginPageAdmin />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/add-citas" element={<CitasFormPage />} />
                  <Route path="/citas/:id" element={<CitasFormPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/citas-admin" element={<CitasPageAdmin />} />
                  <Route path="/citas" element={<CitasPage />} />
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
        </CitasProvider>
      </CitasAdminProvider>
    </AuthProvider>
  );
}

export default App;
