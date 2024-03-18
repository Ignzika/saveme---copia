import { useContext } from "react";
import { SoapContext } from "../../context/context.jsx";
import CardProduct from "../../components/CardProduct.jsx";

import "./Store.css"

export const StoreView = () => {
  const { products } = useContext(SoapContext);
  return (
    <div
      className="p-3 m-3 storeMain"
    >
      {products.map((product, key) => (
        <CardProduct
        key={key}
        id={product.id}
        stock={product.stock}
        title={product.name}
        url_imagen={product.product_image}
        valor={product.price}
        add={product.add}
        fav={product.fav}
        detail={product.detail}
        amount={product.amount}
        login={true}  
      />
      ))}
    </div>
  );
};

export default StoreView;
