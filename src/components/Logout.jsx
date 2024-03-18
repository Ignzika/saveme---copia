import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { SoapContext } from "../context/context.jsx";
import { logout } from "./Helpers/Alerts.jsx";

export const LogoutButton = () => {
  const { setDataLog } = useContext(SoapContext);
    const navigate = useNavigate()
    // const{logout} = useAuth0()
    return (<button onClick={
        () => (navigate("/") , window.location.reload() , setDataLog({}), logout())
    
    }>Logout</button>
    )
}


export default LogoutButton;