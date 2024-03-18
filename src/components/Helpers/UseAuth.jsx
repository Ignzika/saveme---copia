import { Navigate, Outlet } from "react-router-dom";
import { SoapContext } from "./../context/context.jsx";
import { useContext } from "react";

// forma 1 = https://github.com/KodieCode/react-private-routes-authentication/blob/main/src/components/structure/RenderNavigation.js
// forma 2 = https://youtu.be/iPNt12IdbCU?si=2rEO6Ovjjj4k2oE-&t=4941
// forma 3 = por revisar https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth-router-provider?file=src%2FApp.tsx
// https://remix.run/blog/remixing-react-router
// https://github.com/remix-run/react-router/tree/dev/examples/auth-router-provider
// para bloquear = https://reactrouter.com/en/6.22.2/hooks/use-blocker
// para reglasd e auth = https://www.youtube.com/watch?v=fh96kIBOM24
const useAuth = () => {
  const { dataLog} = useContext(SoapContext);
  console.log(dataLog);
  const logged = dataLog.token ? true : false 
  // forma 1
  const user = { loggedIn: logged, isBanned: dataLog.status }; 
  const bannHammer = <Navigate to="/yushalNotpas" />; 
  if (user.isBanned === true) {
    return bannHammer;
  } else {
    return user && user.loggedIn;
  };

  // //forma 2
  // const login = () => {
  //     setIsAuth(true);
  // }
  // const logout () => {
  //     setIsAuth(false)
  // };
  // return {
  //     isAuth,
  //     login,
  //     logout,
  // };

};

//forma 1
const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

// //forma 2
// export const AuthProvider = ({ children }) => {
//     const auth = useAuth() //forma 2
//     //como context .... pero se puede usar en rutas especificas o como context... (by midudev)
//     return (
//         <AuthContext.provider value=auth>
//             {children}
//         </AuthContext.provider>
//     )
// };

export default ProtectedRoutes;
