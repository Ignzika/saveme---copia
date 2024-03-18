import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { SoapContext } from "./../context/context.jsx";
import { ADMINENDPOINT } from "./../context/config/constant.js";
import axios from "axios";
import { errorHandler, responseAlert } from "./Helpers/Alerts.jsx";

const BanForm = () => {
  const { dataLog } = useContext(SoapContext);

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
    console.log(data);

    const putAxios = async (data) => {
      const payload = {
        user: {
          is_banned: data.is_banned
        }
      };
      console.log(payload);
      const config = {
        headers: { Authorization: `Bearer ${dataLog.token}` }
      };
      console.log(data);
      try {
        const response = await axios.put(
          ADMINENDPOINT.deleteUser + `/${data.rut}`,
          data,
          config
        );
        console.log(response.data.user);
        responseAlert("Ban Hammer has fall")
      } catch (error) {
        console.log(error);
        errorHandler(error)
      }
    };
    putAxios(data);
  };

  return (
    <>
      <Container fluid="xl">
        <div className="p-1 banForm">
          <Form noValidate onSubmit={handleSubmit(send)}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="rut">
                <Form.Label>rut</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="rut"
                  size="sm"
                  {...register("rut")}
                  autoComplete="section-red shipping email"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Select
                aria-label="¿Desea Bannear"
                {...register("is_banned")}
              >
                <option>Elije el destino del usuario</option>
                <option value={false}>no banear</option>
                <option value={true}>bannear</option>
              </Form.Select>
            </Row>
            <Button variant="success" type="btn btn-success">
              BANNEAR
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default BanForm;
