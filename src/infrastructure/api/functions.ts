import { api } from "./api";
import { routes } from "./routes";
import { LoginRequest } from "./schemas/requests/Login";
import { LoginResponse } from "./schemas/responses/Login";

const authenticate = async (info: LoginRequest) => {
  const response = await api.post<LoginResponse>(routes.AUTH, info);
  return response;
};

export { authenticate };
