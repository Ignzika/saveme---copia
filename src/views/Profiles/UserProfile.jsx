import Button from "react-bootstrap/esm/Button.js";
import RegisterForm from "./../../components/RegisterForm.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { ENDPOINT, ENDPOINTPRODUCTS } from "../../context/config/constant.js";
import { NavLink } from "../../components/Helpers/NavLink.jsx";
import { SoapContext } from "./../../context/context.jsx";
import { useContext } from "react";

import "./UserProfile.css";

const UserProfile = () => {
  const { dataLog, setDataLog } = useContext(SoapContext);
  const [history, setHistory] = useState([]);
  const [userData, setUserData] = useState(null);

  const token = dataLog.token;
  // const userId = dataLog.id;

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        ENDPOINT.user + `/users/${dataLog.id}`,
        config
      );
      console.log(response.data.user);
      setUserData(response.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchHistory = async () => {
    if (dataLog.rol === admin) {
      try {
        const response = await axios.get(ENDPOINTPRODUCTS + `/${dataLog.id}`);
        setHistory(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    }

    if (dataLog.rol === user) {
      try {
        const response = await axios.get(ENDPOINTPRODUCTS + `/${dataLog.id}`);
        setHistory(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
  }
  useEffect(() => {
    fetchUserData();
  }, []),
    3000;

  useEffect(() => {
    fetchHistory();
  }, []),
    3000;

  return (
    <>
      <section className="mainScreen">
        <article className="dataViewUser dataUser">
          {userData && (
            <ul>
              <h6>Mis Datos:</h6>
              <li>RUT: {userData.rut}</li>
              <li>Nombre: {userData.name}</li>
              <li>Apellido: {userData.last_name}</li>
              <li>Email: {userData.email}</li>
            </ul>
          )}
        </article>

        <article className="dataViewUser favo">
          <NavLink to="/user/favorites">
            <div>¡Veamos Tus Favoritos ! </div>
          </NavLink>
        </article>

        <article className="dataViewUser">
          <div className="ListOfOrders">
            {/* usar axios y crear una lista con un map   get de buy_order y un map  */}
            <h6>Historial</h6>
            {history ? null : (
              <table>
                <tr>
                  <th>client_rut</th>
                  <th>product_price</th>
                  <th>product_amount</th>
                  <th>total_price</th>
                </tr>
                {history.map((order, key) => (
                  <tr key={key}>
                    <th>order.client_rut</th> <th>order.product_price</th>{" "}
                    <th>order.product_amount</th>
                    <th>order.total_price</th>
                  </tr>
                ))}
              </table>
            )}
          </div>
        </article>
      </section>

      <section className="pBoxRegister">
        <RegisterForm userView={true} />
      </section>
    </>
  );
};

export default UserProfile;
