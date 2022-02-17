import { Role } from "../../../../types/enums";

export interface CreateUserRequest {
  name: string;
  email: string;
  birthDate: string;
  password: string;
  passwordConfirmation: string;
  role: Role;
}
