import { Object } from "../../types";

const routes: Object<string> = {
  USER: "/user",
  USERID: "/user/:id",
  MENU: "/menu",
  MENUID: "/menu/:id",
  TABLE: "/table",
  TABLEID: "/table/:id",
  TABLEPARTIAL: "/table/partial/:id",
  TABLEOPEN: "/table/open/:id",
  TABLECLOSE: "/table/close/:id",
  TABLECOUVERT: "/table/couvert/:id",
  TABLESERVICE: "/table/service/:id",
  TABLEADDITEM: "/table/addItem/:id",
  TABLEREMOVEITEM: "/table/removeItem/:id",
  AUTH: "/auth",
};

export { routes };
