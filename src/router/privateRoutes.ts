import { PATHS } from "../constants";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Tables from "../pages/Tables";
import Users from "../pages/Users";

const PRIVATEROUTES = [
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
    element: Tables,
  },
  {
    path: PATHS.USERS,
    element: Users,
  },
];

export default PRIVATEROUTES;
