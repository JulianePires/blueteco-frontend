import { createContext, useContext, useState } from "react";
import { LoginRequest } from "../infrastructure/api/schemas/requests/Login";
import { Authentication } from "../infrastructure/auth";
import { User } from "../types";

interface AuthContextProps {
  signed: boolean;
  user: User | null;
  Login: (info: LoginRequest) => void;
  Logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const autenticator = new Authentication();

  async function Login(info: LoginRequest) {
    const response = await autenticator.login(info);
    setUser(response.user);
  }

  async function Logout() {
    await autenticator.logout();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
