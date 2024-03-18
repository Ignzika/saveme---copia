import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { ENDPOINT } from "../context/config/constant";
import { useNavigate } from "react-router-dom";

import "./RegisterForm.css";
import { errorHandler, responseAlert } from "./Helpers/Alerts";

const RegisterForm = ({
  userView = false,
  registerView = false,
  adminView = false
}) => {
  const navigate = useNavigate();
  console.log(userView, registerView, adminView);

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

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("password2").value;

    if (password !== confirmPassword) {
      responseAlert("las contraseñas no son iguales.");
      return;
    }

    console.log(data);

    if (userView == true) {
      try {
        const response = axios.put(ENDPOINT.registarUsuario + `/${id}`, data);

        responseAlert("edicion realizada");
        navigate("/user");
      } catch (error) {
        errorHandler(error);
      }
    }

    if (registerView == true) {
      try {
        const response = axios.post(ENDPOINT.registarUsuario, data);
        console.log(response);
        responseAlert(`registrado exitosamente ${data.name}`);
        navigate("/");
      } catch (error) {
        errorHandler(error);
      }
    }

    if (adminView == true) {
      try {
        const response = axios.put(ENDPOINT.registarUsuario + `/${id}`, data);
        console.log(response);
        responseAlert("edicion completada");
        navigate("/");
      } catch (error) {
        console.error(error);
        errorHandler(error);
      }
    }
  };

  return (
    <>
      <Container
        fluid="xl"
        className={registerView ? "pPersonalContainer" : "pUpdateContainer"}
      >
        <div className="p-1 pFormReg">
          <Form noValidate onSubmit={handleSubmit(send)}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlid="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre"
                  size="sm"
                  {...register("name")}
                  autoComplete="section-red shipping name"
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlid="last_name">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Apellido"
                  size="sm"
                  {...register("last_name")}
                  autoComplete="section-red shipping last_name"
                />
              </Form.Group>
              {userView ? null : (
                <Form as={Col} md="3" controlid="email">
                  <Form.Label>email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="correo@correo.cl"
                    size="sm"
                    required
                    {...register("email")}
                    autoComplete="section-red shipping email"
                  />
                </Form>
              )}

              {registerView ? (
                <Form.Group as={Col} md="4" controlid="rut">
                  <Form.Label>RUT </Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Rut, sin puntos ni - (guion)"
                    size="sm"
                    {...register("rut")}
                    autoComplete="section-red shipping rut"
                  />
                </Form.Group>
              ) : null}

              <Form.Group as={Col} md="4" controlid="postalCode">
                <Form.Label>Codigo postal </Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="(direccion primaria)"
                  size="sm"
                  {...register("postal_code")}
                  autoComplete="section-red shipping codigo postal"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                htmlFor="start"
                controlid="dateOfBirth"
                className="pInputs"
              >
                <Form.Label>Fecha de nacimiento:</Form.Label>
                <input
                  className="pInptDate"
                  type="datetime-local" // Cambiado a datetime-local para incluir la hora
                  name="birthDate" // Cambiado el nombre del campo
                  min="1900-01-01T00:00" // Formato adecuado para datetime-local
                  max="2024-12-31T23:59" // Formato adecuado para datetime-local
                  value="1901-01-01 00:00"
                  autoComplete="section-red shipping birth_day"
                  {...register("birth_date")}
                />{" "}
                <br></br>
                {userView ? null : (
                  <span> para efectos de carta astral (no obligatorio) </span>
                )}
              </Form.Group>
            </Row>

            <Row className="justify-content-sm-center pBox">
              <Form.Group xs lg="2" className="pPasword">
                <Form.Label htmlFor="inputPassword5">Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  aria-describedby="passwordHelpBlock"
                  placeholder="contraseña"
                  autoComplete="section-red shipping password"
                  {...register("password")}
                />
                {userView || adminView ? null : (
                  <Form.Text id="passwordHelpBlock" muted>
                    Tu contraseña debe tener entre 6 a 255 caracteres, numeros y
                    letras, sin espacios, caracteres especiales, utf-8 y no
                    contener emojis.
                  </Form.Text>
                )}

                <Form.Label htmlFor="inputPassword6">
                  Repita su contraseña
                </Form.Label>
                <Form.Control
                  type="password"
                  id="password2"
                  aria-describedby="passwordHelpBlock"
                  placeholder="repite contraseña "
                  autoComplete="section-red shipping password2"
                />
              </Form.Group>
            </Row>

            {registerView ? (
              <Button variant="success" type="btn btn-success">
                ¡Registrame!
              </Button>
            ) : null}

            {adminView || userView ? (
              <Button variant="success" type="btn btn-success">
                actualizar datos
              </Button>
            ) : null}
          </Form>
        </div>
      </Container>
    </>
  );
};

export default RegisterForm;
