import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ name, price, img, link }) {
  return (
    <div className="ProductCard">
      <div className="ProductCard-pic">
        <img src={img} alt={name} />
      </div>
      <Link to={`/products/${link}`}>
        <h4>{name}</h4>
      </Link>
      <div className="ProductCard-price">${price}</div>
    </div>
  );
}

export default ProductCard;
