import api from "../lib/axios";
import { LoginPayload, LoginResponse } from "../app/(auth)/types/auth";

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", payload);
  return response.data;
};