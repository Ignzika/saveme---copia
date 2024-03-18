import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ENDPOINT } from "./config/constant.js";
import { errorHandler } from "../components/Helpers/Alerts.jsx";
export const SoapContext = createContext();

// eslint-disable-next-line react/prop-types
const SoapProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState();
  const [dataLog, setDataLog] = useState({});

  const getAxios = async () => {
    try {
      await axios
        .get(ENDPOINT.products)
        .then((response) => {
          // console.log(response);
          setProducts(
            response.data.products.map((obj) => ({
              ...obj,
              add: false,
              detail: false,
              fav: false,
              amount: 0
            }))
          );
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          errorHandler(error)
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAxios();
  }, []);

  const totalCart = () => {
    const sum = products
      .filter((f) => f.add == true)
      .map((m) => {
        return { total: Number(m.amount * m.price) };
      })
      .reduce((a, total) => a + total.total, 0);
    setTotalProducts(sum);
  };
  useEffect(() => {
    totalCart();
  });

  return (
    <SoapContext.Provider
      value={{
        products,
        setProducts,
        totalProducts,
        setTotalProducts,
        dataLog,
        setDataLog
      }}
    >
      {children}
    </SoapContext.Provider>
  );
};

export default SoapProvider;
