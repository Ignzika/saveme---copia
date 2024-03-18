import Button from "react-bootstrap/esm/Button";
import { NavLink } from "react-router-dom";
import { User } from "../../components/User.jsx";
import LoginForm from "../../components/LoginForm.jsx";

import "./LogInView.css";
export const LogInView = () => {
  return (
    <>
      <section className="LogInView">
        <div>
          <NavLink to="/register">
            <Button variant="success" type="btn btn-success">
              {" "}
              ¡Registrate aqui!{" "}
            </Button>
          </NavLink>
        </div>

        <div className="p-2 mt-4 pLogin">
          <LoginForm />
        </div>

        <User />
      </section>
    </>
  );
};

export default LogInView;
