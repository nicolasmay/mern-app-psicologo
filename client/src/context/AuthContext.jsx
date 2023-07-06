import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
  AdminloginRequest,
  adminVerifyTokenRequest,
} from "../api/auth";
import Cookies from "js-cookie";
import { set } from "mongoose";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del proveedor AuthContext");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null); // [1
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setError] = useState([]);
  const [loading, setLoading] = useState(true);

  //Metodo para registrarse
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setError(error.response.data);
      console.log(error.response);
    }
  };

  //Metodo para loguearse
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setError([error.response.data]);
    }
  };

  const adminsignin = async (isAdmin) => {
    try {
      const res = await AdminloginRequest(isAdmin);
      setIsAdmin(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setError([error.response.data]);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setIsAdmin(false);
    setUser(null);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setError([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      //3:26:51 para el tema de cookies etc
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
      }
      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  useEffect(() => {
    async function checkLoginAdmin() {
      const cookies = Cookies.get();
      //3:26:51 para el tema de cookies etc
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        setIsAdmin(null);
      }
      try {
        const res = await adminVerifyTokenRequest(cookies.token);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setIsAdmin(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setIsAdmin(null);
        setLoading(false);
      }
    }
    checkLoginAdmin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        loading,
        user,
        isAdmin,
        isAuthenticated,
        adminsignin,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
