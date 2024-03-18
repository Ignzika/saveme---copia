import axios from "axios";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { SoapContext } from "./../../context/context.jsx";
import { useContext } from "react";
import { ADMINENDPOINT } from "../../context/config/constant.js";
import { useState, useEffect } from "react";
import BanForm from "../../components/BanForm.jsx";

import "./AdminProfile.css";
import PostProduct from "../../components/ProductPost.jsx";
import { responseAlert } from "../../components/Helpers/Alerts.jsx";

const AdminProfile = () => {
  const { dataLog, setDataLog } = useContext(SoapContext);

  const [users, setUsers] = useState([]);
  const [rut, setRut] = useState();
  console.log(rut);

  const token = dataLog.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const getAxios = async (rut) => {
    console.log(rut);
    try {
      const response = await axios.get(
        ADMINENDPOINT.users + `/users/${rut}`,
        config
      );
      responseAlert("usuario encontrado")
      console.log(response);
      setUsers(response.data.user);
    } catch (error) {
      //!response = alert user not found
      //mejorar el catch error
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const send = (data) => {
    Object.keys(data).forEach((key) => {
      if (typeof data[key] === "string") {
        data[key] = data[key].trim();
      }
    });
    setRut(data.rut);
    getAxios(data.rut);
  };

  return (
    <>
      <section className="mainAdmin">
        <article className="dataViewAdmin pCuadro">
          <div className="pForm">
            <Form noValidate onSubmit={handleSubmit(send)}>
              <InputGroup size="sm" className="mb-3">
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  {...register("rut")}
                />

                <Button variant="primary" type="btn">
                  buscar
                </Button>
              </InputGroup>
            </Form>
          </div>
          <div>
            <ul>
              <li>{users.email}</li>
              <li>{users.name}</li>
              <li>{users.last_name}</li>
              <li>{users.rut}</li>
              <li>{users.is_banned}</li>
              
              {users.is_banned ? (
                <li> BANEADO </li>
              ) : (
                <li> aun no cae el banhammer </li>
              )}
            </ul>
          </div>
        </article>

        <article className="dataViewAdmin">
          <BanForm />
        </article>

        <article className="dataViewAdmin">
          <PostProduct />
        </article>
      </section>
      <div></div>
    </>
  );
};

export default AdminProfile;
