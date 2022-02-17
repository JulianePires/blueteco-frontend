import { User } from "../../types";

const tokenKey = "@Blueteco:token";
const userKey = "@Blueteco:user";

const saveSessionData = (key: string, user: User) => {
  localStorage.setItem(userKey, JSON.stringify(user));
  localStorage.setItem(tokenKey, key);
};

const getSessionData = () => {
  const storagedUser = localStorage.getItem(userKey);
  const storagedToken = localStorage.getItem(tokenKey);

  const storageData = {
    user: storagedUser,
    token: storagedToken,
  };

  return storageData;
};

const deleteSessionData = () => {
  sessionStorage.removeItem(userKey);
  sessionStorage.removeItem(tokenKey);
};

export { saveSessionData, getSessionData, deleteSessionData };
