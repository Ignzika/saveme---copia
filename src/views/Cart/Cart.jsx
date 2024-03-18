import "./Cart.css"
import { useContext } from "react";
import { SoapContext } from "../../context/context.jsx";
import CardProduct from "../../components/CardProduct.jsx";

const ShoppingCart = () => {
  const { products } = useContext(SoapContext);

  return (
    <div className="p-3 d-flex justify-content-center pCart">
      {products
        .filter((product) => product.add == true)
        .map((product, key) => (
          <CardProduct
            key={key}
            descripcion={product.description}
            id={product.id}
            stock={product.stock}
            title={product.name}
            url_imagen={product.product_image}
            valor={product.price}
            add={product.add}
            fav={product.fav}
            detail={product.detail}
            amount={product.amount}
          />
        ))}
    </div>
  );
};

export default ShoppingCart;
