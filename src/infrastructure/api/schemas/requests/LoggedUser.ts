import { Role } from "../../../../types/enums";

export interface UpdateLoggedUserRequest {
  name?: string;
  email?: string;
  birthDate?: string;
  role?: Role;
}
