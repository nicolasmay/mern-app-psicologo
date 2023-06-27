import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CitasPage from "./pages/CitasPage";
import HomePage from "./pages/HomePage";
import CitasFormPage from "./pages/CitasFormPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";

import { CitasProvider } from "./context/CitasContext";

function App() {
  return (
    <AuthProvider>
      <CitasProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/citas" element={<CitasPage />} />
              <Route path="/add-citas" element={<CitasFormPage />} />
              <Route path="/citas/:id" element={<CitasFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CitasProvider>
    </AuthProvider>
  );
}

export default App;
