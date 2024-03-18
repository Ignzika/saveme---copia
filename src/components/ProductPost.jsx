import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ADMINENDPOINT } from "../context/config/constant";
import { useForm } from "react-hook-form";
import { errorHandler, responseAlert } from "./Helpers/Alerts";

const PostProduct = () => {
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
    try {
      const response = axios.post(ADMINENDPOINT.CProduct, data);

      responseAlert("Exito al postear");
    } catch (error) {
      console.error(error);
      errorHandler(error);
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit(send)}>
      <Form.Group className="mb-3" controlId="PostProduct">
        <Form.Label>nombre producto </Form.Label>
        <Form.Control
          type="text"
          placeholder="Producto"
          {...register("name")}
        />

        <Form.Label>descripcion</Form.Label>
        <Form.Control
          type="text"
          placeholder="desripcion"
          {...register("description")}
        />

        <Form.Label>precio</Form.Label>
        <Form.Control
          type="number"
          placeholder="$$$$$$"
          {...register("price")}
        />

        <Form.Label>stock</Form.Label>
        <Form.Control
          type="number"
          placeholder="Stock"
          {...register("stock")}
        />

        <Form.Label>URL image </Form.Label>
        <Form.Control
          type="text"
          placeholder="URL"
          {...register("product_image")}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Postear Producto
      </Button>
    </Form>
  );
};

export default PostProduct;
