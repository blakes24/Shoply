import { useSelector, shallowEqual } from 'react-redux';
import ProductCard from './ProductCard';
import './ProductList.scss';

function ProductList() {
  const products = useSelector((st) => st.products, shallowEqual);

  return (
    <div className="ProductList">
      <h2>Products</h2>
      <div>
        {Object.keys(products).map((item) => (
          <ProductCard
            name={products[item].name}
            img={products[item].image_url}
            price={products[item].price}
            link={item}
            key={item}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
