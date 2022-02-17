import { Route } from "../types";
import { TiHome } from "react-icons/ti";
import { MdRestaurantMenu } from "react-icons/md";
import { SiAirtable } from "react-icons/si";
import { FaUsersCog } from "react-icons/fa";

const PATHS = {
  HOME: "/",
  MENU: "/menu",
  TABLES: "/tables",
  USERS: "/users",
  LOGIN: "/",
  CREATE: "/create",
};

const MENUITEMS: Route[] = [
  {
    name: "Início",
    path: PATHS.HOME,
    icon: TiHome,
  },
  {
    name: "Menu",
    path: PATHS.MENU,
    icon: MdRestaurantMenu,
  },
  {
    name: "Mesas",
    path: PATHS.TABLES,
    icon: SiAirtable,
  },
  {
    name: "Usuários",
    path: PATHS.USERS,
    icon: FaUsersCog,
  },
];

export { PATHS, MENUITEMS };
