import { GOOGLE_IDENTITY_URL, GOOGLE_AUTH_KEY } from "../constants/env";
import { fetchData } from "./client";

export const login = async ({ email, password }) => {
  if (!email) return Promise.reject(new Error("Invalid email"));
  if (!password) return Promise.reject(new Error("Invalid password"));
  const baseUrl = GOOGLE_IDENTITY_URL;
  const url = "/accounts:signInWithPassword";
  const method = "POST";
  const qs = { key: GOOGLE_AUTH_KEY };
  const body = { email, password, returnSecureToken: true };
  return await fetchData({ baseUrl, url, method, qs, body });
};

export const register = async ({ email, password }) => {
  if (!email) return Promise.reject(new Error("Invalid email"));
  if (!password) return Promise.reject(new Error("Invalid password"));
  const baseUrl = GOOGLE_IDENTITY_URL;
  const url = "/accounts:signUp";
  const method = "POST";
  const qs = { key: GOOGLE_AUTH_KEY };
  const body = { email, password, returnSecureToken: true };
  return await fetchData({ baseUrl, url, method, qs, body });
};

export const updateUser = async ({
  idToken,
  displayName = "",
  photoUrl = ""
}) => {
  if (!idToken) return Promise.reject(new Error("Invalid idToken"));
  const baseUrl = GOOGLE_IDENTITY_URL;
  const url = "/accounts:update";
  const method = "POST";
  const qs = { key: GOOGLE_AUTH_KEY };
  const body = { idToken, displayName, photoUrl, returnSecureToken: true };
  return await fetchData({ baseUrl, url, method, qs, body });
};
