import { api } from "./api";
import { routes } from "./routes";
import { UpdateLoggedUserRequest } from "./schemas/requests/LoggedUser";
import { LoginRequest } from "./schemas/requests/Login";
import {
  AddItemToMenuRequest,
  UpdateMenuItemRequest,
} from "./schemas/requests/Menu";
import { CreateUserRequest } from "./schemas/requests/User";
import { LoginResponse } from "./schemas/responses/Login";
import { UserResponse, UsersResponse } from "./schemas/responses/User";
import { MenuResponse, MenusResponse } from "./schemas/responses/Menu";
import {
  CreateTableRequest,
  UpdateTableRequest,
} from "./schemas/requests/Table";
import {
  TableReturn,
  TablesReturn,
} from "./schemas/responses/Table";

const authenticate = async (info: LoginRequest) => {
  const response = await api.post<LoginResponse>(routes.AUTH, info);
  return response;
};

const getLoggedUser = async () => {
  const response = await api.get<UserResponse>(routes.AUTH);
  return response;
};

const createUser = async (info: CreateUserRequest) => {
  const response = await api.post<UserResponse>(routes.USER, info);
  return response;
};

const getAllUsers = async () => {
  const response = await api.get<UsersResponse>(routes.USER);
  return response;
};

const updateAuthenticatedUser = async (info: UpdateLoggedUserRequest) => {
  const response = await api.patch<UserResponse>(routes.USER, info);
  return response;
};

const deleteAuthenticatedUser = async () => {
  const response = await api.delete<UserResponse>(routes.USER);
  return response;
};

const listUserById = async (id: string) => {
  const response = await api.get<UserResponse>(
    routes.USERID.replace(":id", id)
  );
  return response;
};

const addItemToMenu = async (info: AddItemToMenuRequest) => {
  const response = await api.post<MenuResponse>(routes.MENU, info);
  return response;
};

const getAllMenuItems = async () => {
  const response = await api.get<MenusResponse>(routes.MENU);
  return response;
};

const getItemById = async (id: string) => {
  const response = await api.get<MenuResponse>(
    routes.MENUID.replace(":id", id)
  );
  return response;
};

const updateMenuItem = async (id: string, info: UpdateMenuItemRequest) => {
  const response = await api.patch<MenuResponse>(
    routes.MENUID.replace(":id", id),
    info
  );
  return response;
};

const deleteMenuItem = async (id: string) => {
  const response = await api.delete<MenuResponse>(
    routes.MENUID.replace(":id", id)
  );
  return response;
};

const createTable = async (info: CreateTableRequest) => {
  const response = await api.post<TableReturn>(routes.TABLE, info);
  return response;
};

const getAllTables = async () => {
  const response = await api.get<TablesReturn>(routes.TABLE);
  return response;
};

const getTableById = async (id: string) => {
  const response = await api.get<TableReturn>(
    routes.TABLEID.replace(":id", id)
  );
  return response;
};

const updateTableData = async (id: string, data: UpdateTableRequest) => {
  const response = await api.patch<TableReturn>(
    routes.TABLEID.replace(":id", id),
    data
  );
  return response;
};

const getTableByNumber = async (tableNumber: number) => {
  const response = await api.get<TableReturn>(
    routes.TABLENUMBER.replace(":number", tableNumber.toString())
  );

  return response;
};

const getTablePartialValue = async (id: string) => {
  const response = await api.get<TableReturn>(
    routes.TABLEPARTIAL.replace(":id", id)
  );
  return response;
};

const openTable = async (id: string) => {
  const response = await api.put<TableReturn>(
    routes.TABLEOPEN.replace(":id", id)
  );
  return response;
};

const closeTable = async (id: string) => {
  const response = await api.put<TableReturn>(
    routes.TABLECLOSE.replace(":id", id)
  );
  return response;
};

const switchCouvertTable = async (id: string) => {
  const response = await api.put<TableReturn>(
    routes.TABLECOUVERT.replace(":id", id)
  );
  return response;
};

const switchServiceTable = async (id: string) => {
  const response = await api.put<TableReturn>(
    routes.TABLESERVICE.replace(":id", id)
  );
  return response;
};

const addItemToTable = async (id: string, itemId: string) => {
  const response = await api.put<TableReturn>(
    routes.TABLEADDITEM.replace(":id", id),
    itemId
  );
  return response;
};

const removeItemFromTable = async (id: string, itemId: string) => {
  const response = await api.put<TableReturn>(
    routes.TABLEREMOVEITEM.replace(":id", id),
    itemId
  );
  return response;
};

export {
  authenticate,
  getLoggedUser,
  createUser,
  getAllUsers,
  updateAuthenticatedUser,
  deleteAuthenticatedUser,
  listUserById,
  addItemToMenu,
  getAllMenuItems,
  getItemById,
  updateMenuItem,
  deleteMenuItem,
  createTable,
  getAllTables,
  getTableById,
  updateTableData,
  getTableByNumber,
  getTablePartialValue,
  openTable,
  closeTable,
  switchCouvertTable,
  switchServiceTable,
  addItemToTable,
  removeItemFromTable,
};
