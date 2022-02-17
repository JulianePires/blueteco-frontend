import { User } from "../../../../types";

export interface LoginResponse {
  token: string;
  user: User;
}
