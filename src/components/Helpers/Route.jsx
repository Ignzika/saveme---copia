import { useContext } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import SoapProvider, { SoapContext } from "../../context/context";
import ProtectedRoutes from "./UseAuth.jsx";

const { dataLog } = useContext(SoapContext);



export const Route = ({
  path,
  loader,
  action,
  element: Element,
  errorElement,
  ...props
}) => {
  return (
    <Route {...props} element={ProtectedRoutes() ? <Element /> : <Outlet/>} />
  );
};

