import { PATHS } from "../constants";
import Create from "../pages/Create";
import Login from "../pages/Login";

const PUBLICROUTES = [
  {
    path: PATHS.LOGIN,
    element: Login,
  },
  {
    path: PATHS.CREATE,
    element: Create,
  },
];

export default PUBLICROUTES;
