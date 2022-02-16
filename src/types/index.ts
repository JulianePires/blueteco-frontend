import { IconType } from "react-icons";

export type Object<T> = { [key: string | number | symbol]: T };

export type Route = {
  name: string;
  path: string;
  icon: IconType;
};
