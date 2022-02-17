import { User } from "../../../../types";

export type UsersResponse = User[];

export interface UserResponse {
  user: User;
  message: string;
}
