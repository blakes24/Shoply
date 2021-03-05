import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { add, remove } from './actions';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList() {
  const products = useSelector((st) => st.products, shallowEqual);
  const cart = useSelector((st) => st.cart, shallowEqual);
  const dispatch = useDispatch();

  let total = Object.values(cart).reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  const addItem = (item) => dispatch(add(item));
  const removeItem = (item) => dispatch(remove(item));

  return (
    <div className="ProductList">
      <h2>Products</h2>
      <div>Cart: {total} items</div>
      <div>
        {Object.keys(products).map((item) => (
          <div>
            <ProductCard name={products[item].name} img={products[item].image_url} price={products[item].price} />
            <button onClick={() => addItem(item)}>Add to cart</button>{' '}
            <button onClick={() => removeItem(item)}>Remove item</button>{' '}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
