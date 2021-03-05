import './ProductCard.css';

function ProductCard({ name, price, img }) {
  return (
    <div className="ProductCard">
      <div className="ProductCard-pic">
        <img src={img} alt={name} />
      </div>
      <h4>{name}</h4>
      <div>${price}</div>
    </div>
  );
}

export default ProductCard;
