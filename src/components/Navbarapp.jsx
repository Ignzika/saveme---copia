import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { SoapContext } from "../context/context.jsx";
import { NavLink } from "./Helpers/NavLink.jsx";
import imgNabar from "../assets/img/logo.webp";
import LogoutButton from "./Logout.jsx";

import "./Navbarapp.css";

const Navbarapp = () => {
  const { dataLog, totalProducts } = useContext(SoapContext);
  console.log(dataLog);
  return (
    <Navbar
      expand="lg"
      className="BigNav bg-success d-flex justify-content-around"
    >
      <Nav className="customNav">
        <NavLink className="imgStore" to="/">
          <img src={imgNabar} className="navBarImg" alt="Vegan Soap img" />
          <p className="titleNavbar  text-white"> JABONESVEGAN</p>
        </NavLink>

        <div className="linkers">
          <NavLink to="/store">
            <p>Tienda</p>
          </NavLink>

          {!dataLog.id ? null : (
            <NavLink to="/user/favorites">
              <p>Favoritos </p>
            </NavLink>
          )}

          {!dataLog.id ? null : (
            <NavLink to="/user">
              <p>Prefil </p>
            </NavLink>
          )}
          {dataLog.rol === "admin" ? (
            <NavLink to="/admn">
              <p>ADM PANEL </p>
            </NavLink>
          ) : null}

          {!dataLog.id ?  (
            <NavLink to="/login">
              <p>Inciar Sesión </p>
            </NavLink>
          ):null  }
        </div>

        {!dataLog.id ? null : (
          <NavLink to="/cart">
            {totalProducts ? (
              <div className="divCart">
                <span>
                  {" "}
                  🛒Monto:
                  {Intl.NumberFormat("es-CL", {
                    style: "currency",
                    currency: "CLP"
                  }).format(Number(totalProducts))}
                </span>
              </div>
            ) : (
              <div className="divCart">
                <span>Esperamos tu pedido</span>
              </div>
            )}
          </NavLink>
        )}
        {!dataLog.id ? null : <LogoutButton />}
      </Nav>
    </Navbar>
  );
};

export default Navbarapp;
