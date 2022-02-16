import { PATHS } from "../constants";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Table from "../pages/Tables";
import Users from "../pages/Users";

const ROUTES = [
  {
    path: PATHS.HOME,
    element: Home,
  },
  {
    path: PATHS.MENU,
    element: Menu,
  },
  {
    path: PATHS.TABLES,
    element: Table,
  },
  {
    path: PATHS.USERS,
    element: Users,
  },
];

export { ROUTES };
