import axios from "./axios.js";

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const AdminloginRequest = (isAdmin) =>
  axios.post(`/loginadmin`, isAdmin);

export const verifyTokenRequest = () => axios.get("/verify");

export const adminVerifyTokenRequest = () => axios.get("/adminverify");
