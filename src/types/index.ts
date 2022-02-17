import { IconType } from "react-icons";
import { ItemCategory, Role, States } from "./enums";

export type Object<T> = { [key: string | number | symbol]: T };

export type Route = {
  name: string;
  path: string;
  icon: IconType;
};

export type User = {
  id: string;
  name: string;
  email: string;
  birthDate: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
};

export type Menu = {
  id: string;
  name: string;
  price: number;
  category: ItemCategory;
  createdAt: string;
  updatedAt: string;
};

export type Table = {
  id: string;
  number: number;
  user: User;
  couvert?: boolean;
  service?: boolean;
  state: States;
  items: string[];
  createdAt: string;
  updatedAt: string;
};
