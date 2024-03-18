/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  return (
    <div className="card">
        <img src={product.url_imagen} className="card-img-top product-image" alt={product.title} />
    </div>
  );
}

export default ProductCard;