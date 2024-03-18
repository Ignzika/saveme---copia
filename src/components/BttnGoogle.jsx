import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { ENDPOINT } from "../context/config/constant.js";
import { useContext } from "react";
import { SoapContext } from "./../context/context.jsx";
import { useNavigate } from "react-router-dom";
import { errorHandler, loginresponse } from "./Helpers/Alerts.jsx";

const ButtonGoogle = () => {
  const { dataLog, setDataLog } = useContext(SoapContext);
  const navigate = useNavigate();

  const validarTokenGoogle = async (credendialGOOGLE) => {
    await axios
      .post(ENDPOINT.validarGogle, {
        google: { credential: credendialGOOGLE.credential }
      })
      .then(({ data }) => {
        setDataLog(data);
        console.log("dato", data);
        window.sessionStorage.setItem("token", data.data);
        loginresponse("sesion iniciada");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        errorHandler(error);
      });
  };

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
        validarTokenGoogle(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default ButtonGoogle;
