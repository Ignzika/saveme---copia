import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
//import firebaseApp from "./components/Firebase.jsx";

import Home from "./views/Home/home.jsx";
import RegisterView from "./views/Register/RegisterView.jsx";
import LogInView from "./views/LogIn/LogInView.jsx";
import Navbarapp from "./components/Navbarapp.jsx";
import Footer from "./components/Footer.jsx";

import StoreView from "./views/Store/Store.jsx";

import Favoritos from "./views/Favoritos/Favoritos.jsx";
import ShoppingCart from "./views/Cart/Cart.jsx";
import NotFound from "./views/NotFound/NotFound.jsx";
import UserProfile from "./views/Profiles/UserProfile.jsx";
import AdminProfile from "./views/Profiles/AdminProfile.jsx";
// import ProtectedRoutes from "./components/Helpers/UseAuth.jsx";

function App() {



  return (
    <>
      <Navbarapp />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<LogInView />} exact />
        <Route path="/register" element={<RegisterView />} exact />

        {/* <Route element={<ProtectedRoutes />}> */}
        <Route path="/user" element={<UserProfile />} />
        
        
          <Route path="/user/favorites" element={<Favoritos />} />
          <Route path="/cart" element={<ShoppingCart />} />
          {/* <Route path="/store/products/:product_code" element={<ProductDetail/>}  /> */}
        {/* </Route> */}

        {/* <Route element={<ProtectedRoutes />} pero pora ADMN > */}
        <Route path="/admn" element={<AdminProfile />} exact />
        {/* <Route path="/admn/postproduct" element={<PostProduct />} exact /> */}

        {/* </Route> */}

        <Route path="/store" element={<StoreView />} />

        <Route path="*" element={<NotFound />} exact />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
