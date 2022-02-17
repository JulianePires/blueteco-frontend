import { Object, Route } from "../types";
import { TiHome } from "react-icons/ti";
import { MdRestaurantMenu } from "react-icons/md";
import { SiAirtable } from "react-icons/si";
import { FaUsersCog } from "react-icons/fa";
import { Role } from "../types/enums";

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

const ROLES: string[] = [
  "Admin",
  "Gerente",
  "Chef",
  "Cozinheire",
  "Subchef",
  "Sommelier",
  "Atendente",
  "Outros",
];

const PORTUGUESETOENGLISHROLES: Object<string> = {
  Admin: Role["ADMIN"],
  Gerente: Role["MANAGER"],
  Chef: Role["CHEF"],
  Cozinheire: Role["COOKER"],
  Subchef: Role["SOUSCHEF"],
  Sommelier: Role["SOMMELIER"],
  Atendente: Role["WAITER"],
  Outros: Role["OTHER"],
};

const ENGLISHTOPORTUGUESEROLES: Object<string> = {
  ADMIN: "Admin",
  MANAGER: "Gerente",
  CHEF: "Chef",
  COOKER: "Cozinhere",
  SOUSCHEF: "Subchef",
  SOMMELIER: "Sommelier",
  WAITER: "Atendente",
  OTHER: "Outros",
};

export {
  PATHS,
  MENUITEMS,
  ROLES,
  PORTUGUESETOENGLISHROLES,
  ENGLISHTOPORTUGUESEROLES,
};
