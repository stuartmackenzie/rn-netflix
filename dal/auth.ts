import { fetchData } from "./client";

const BASE_URL = "https://identitytoolkit.googleapis.com/v1";
const AUTH_KEY = "AIzaSyBAp1ptUMh58RGf7oMsLNOAaWkxDfOUFfk";

export const login = async ({ email, password }) => {
  if (!email) return Promise.reject(new Error("Invalid email"));
  if (!password) return Promise.reject(new Error("Invalid password"));
  const baseUrl = BASE_URL;
  const url = "/accounts:signInWithPassword";
  const method = "POST";
  const qs = { key: AUTH_KEY };
  const body = { email, password, returnSecureToken: true };
  return await fetchData({ baseUrl, url, method, qs, body });
};

export const register = async ({ email, password }) => {
  if (!email) return Promise.reject(new Error("Invalid email"));
  if (!password) return Promise.reject(new Error("Invalid password"));
  const baseUrl = BASE_URL;
  const url = "/accounts:signUp";
  const method = "POST";
  const qs = { key: AUTH_KEY };
  const body = { email, password, returnSecureToken: true };
  return await fetchData({ baseUrl, url, method, qs, body });
};

export const updateUser = async ({
  idToken,
  displayName = "",
  photoUrl = ""
}) => {
  if (!idToken) return Promise.reject(new Error("Invalid idToken"));
  const baseUrl = BASE_URL;
  const url = "/accounts:update";
  const method = "POST";
  const qs = { key: AUTH_KEY };
  const body = { idToken, displayName, photoUrl, returnSecureToken: true };
  return await fetchData({ baseUrl, url, method, qs, body });
};
