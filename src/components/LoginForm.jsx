import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ENDPOINT } from "../context/config/constant.js";
import ButtonGoogle from "./BttnGoogle.jsx";
import { useContext, useEffect } from "react";
import { SoapContext } from "./../context/context.jsx";
import { errorHandler, loginresponse } from "./Helpers/Alerts.jsx";

const LogIn = () => {
  const navigate = useNavigate();
  const { dataLog, setDataLog } = useContext(SoapContext);
  console.log("seteo general", dataLog)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const postAxios = async (data) => {
    try {
      const response = await axios.post(ENDPOINT.login, data);
      window.sessionStorage.setItem("data", JSON.stringify(response.data));
      loginresponse()
      setDataLog(response.data)
      navigate("/user");
    } catch (error) {
      console.error(error);
      console.log(error);
      errorHandler(error)
    }
  };

  const send = (data) => {
    Object.keys(data).forEach((key) => {
      if (typeof data[key] === "string") {
        data[key] = data[key].trim();
      }
    });
    console.log(data);
    postAxios({ user: data });
  };

  return (
    <Container fluid>
      <Form className="formlog" onSubmit={handleSubmit(send)}>
        <Form.Group className="mb-4 pInputMail" controlId="basicEmail" noValidate>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            autoComplete="username"
            {...register("email")}
          />
          <Form.Text className="text-muted">
            ingresa tu correo, si aun no estas registrado ingresa
            <Link to="../register"> aqui</Link>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="Psswrd">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            autoComplete="current-password"
            {...register("password")}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check
            required
            label="iniciaras sesion ?"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            {...register("DOOM", { required: true })}
            isInvalid={!!errors.agreeToTerms}
          />
        </Form.Group>

        <Button variant="success" type="btn btn-success">
          entra al sitio!
        </Button>
      </Form>
      <ButtonGoogle />
    </Container>
  );
};
export default LogIn;
