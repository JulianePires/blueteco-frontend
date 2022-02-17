import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../context/auth";
import PRIVATEROUTES from "./privateRoutes";
import PUBLICROUTES from "./publicRoutes";

export const Router: React.FC = () => {
  const context = useAuth();
  const ROUTES = context.signed ? PRIVATEROUTES : PUBLICROUTES;

  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
