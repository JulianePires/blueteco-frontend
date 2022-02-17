import { User } from "../../../../types";
import { States } from "../../../../types/enums";

export interface CreateTableRequest {
  number: number;
}

export interface UpdateTableRequest {
  user: User;
  userId: string;
  couvert: boolean;
  service: boolean;
  state: States;
  items: string[];
}

export type AddItemToTable = string;

export type RemoveItemFromTable = string;
