import { LoginRequest } from "../api/schemas/requests/Login";
import { LoginResponse } from "../api/schemas/responses/Login";

export interface IAuthentication {
  login: (info: LoginRequest) => Promise<LoginResponse>;
  logout: () => Promise<void>;
  getTokenData: () => string | null;
}
