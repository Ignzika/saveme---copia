// import { useContext } from "react";
import { useEffect } from "react";
import RegisterForm from "../../components/RegisterForm.jsx";

import "./ResgiterView.css"

export const RegisterView = () => {

 

  return (
    <>
      <div className="pContainerReg  p-1 mt-4 ">
        <RegisterForm registerView={true} />
      </div>
    </>
  );
};

export default RegisterView;
