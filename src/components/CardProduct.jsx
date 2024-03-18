import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { SoapContext } from "../context/context";
import IconHeart from "../assets/icon/IconHeart";
import { forOrder, addUnit, lessUnit } from "./Helpers/Alerts.jsx";
import "./CardProduct.css";

const CardProduct = ({
  descripcion,
  id,
  stock,
  title,
  url_imagen,
  valor,
  add,
  fav,
  amount,
  login = false
}) => {
  const { dataLog, setProducts } = useContext(SoapContext);

  const addToCart = (id) => {
    setProducts((cart) => {
      const toBuy = cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            add: true,
            amount: 1
          };
        } else {
          return product;
        }
      });
      return toBuy;
    });
    forOrder();
  };

  const addToFav = (id) => {
    setProducts((likeThis) => {
      const toFav = likeThis.map((like) => {
        if (like.id === id) {
          return {
            ...like,
            fav: !like.fav
          };
        } else {
          return like;
        }
      });
      return toFav;
    });
  };

  const removeFromCart = (id) => {
    setProducts((products) => {
      const remove = products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            add: false,
            amount: 0
          };
        } else {
          return product;
        }
      });
      return remove;
    });
  };

  const moreProduct = (id) => {
    setProducts((plusProduct) => {
      const addProduct = plusProduct.map((add) => {
        // eslint-disable-next-line react/prop-types
        if (add.id == id) {
          // eslint-disable-next-line react/prop-types
          return { ...add, amount: Number(add.amount + 1) };
        } else {
          return add;
        }
      });
      return addProduct;
    });

    addUnit();
  };

  const lessProducts = (id) => {
    setProducts((minusProduct) => {
      const substractProduct = minusProduct.map((substract) => {
        if (substract.id == id && substract.amount > 0) {
          return { ...substract, amount: Number(substract.amount - 1) };
        } else {
          return substract;
        }
      });
      return substractProduct;
    });
    lessUnit();
  };

  const removeIfLessThanOne = (id) => {
    setProducts((products) => {
      const remove = products.map((product) => {
        if (product.id === id && product.amount == 0) {
          return {
            ...product,
            add: false,
            amount: 0
          };
        } else {
          return product;
        }
      });
      return remove;
    });
  };

  return (
    <>
      <Card className="cardCss" id={id} key={id}>
        <Card.Img className="imgCardCss" variant="top" src={url_imagen} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {/* si trae texto de descripcion, entonces escribelo */}
          {descripcion && dataLog.id && <Card.Text className="pDesc">{descripcion}</Card.Text>}

          {title && dataLog.id && (
            <div className="pCorazon">
              <IconHeart filled={fav} />
              {/* si hay stock ponlo junto con el precio (formateado a peso chileno) */}
              {stock ? (
                <div>
                  <span> Stock:{stock}&nbsp;</span>
                  <span>

                    &nbsp;&nbsp;&nbsp;&nbsp; Valor:
                    {Intl.NumberFormat("es-CL", {
                      style: "currency",
                      currency: "CLP"
                    }).format(Number(valor))}
                  </span>
                </div>
              ) : (
                <span> sin stock</span>
              )}
              <div className="pBtn">
                {/* añade al carro y si ya esta en el carro, entonces avisa y da la opcion de eliminar */}
                {!add ? (
                  <Button variant="success" onClick={() => addToCart(id)}>
                    🛒
                  </Button>
                ) : (

                    <Button
                      variant="success"
                      onClick={() => removeFromCart(id)}
                    >
                      🗑
                    </Button>
 
                )}

                {/* añadir unidades al carro, visible solo si se añadio algo previamente (se puede condicionar a otra cosa para que no aparezca a cada rato... o dejarlo bonito? ) */}

                {!add ? null : (
                  <div className="customAddMinus">
                    {/* <p>Cantidad:</p> */}
                    <div className="customContainerCard">
                      <button
                        className="success"
                        onClick={() => {
                          lessProducts(id);
                          removeIfLessThanOne(id);
                        }}
                      >
                        ➖
                      </button>

                      <p className="textAmount">{amount}</p>

                      <button
                        className="success"
                        onClick={() => moreProduct(id)}
                      >
                        ➕
                      </button>
                    </div>
                  </div>
                )}

                {/* añade a favoritos, marca el corazon de rojo, y si ya es favorito, quitalo  */}

                {fav ? (
                  <Button
                    variant="success"
                    className="button1"
                    onClick={() => addToFav(id)}
                  >
                    🖤🗑
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    className="button1"
                    onClick={() => addToFav(id)}
                  >
                    💖
                  </Button>
                )}
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default CardProduct;
