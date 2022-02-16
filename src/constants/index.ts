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
};

const MENUITEMS: Route[] = [
  {
    name: "Home",
    path: PATHS.HOME,
    icon: TiHome,
  },
  {
    name: "Menu",
    path: PATHS.MENU,
    icon: MdRestaurantMenu,
  },
  {
    name: "Tables",
    path: PATHS.TABLES,
    icon: SiAirtable,
  },
  {
    name: "Users",
    path: PATHS.USERS,
    icon: FaUsersCog,
  },
];

export { PATHS, MENUITEMS };
