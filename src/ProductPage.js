import { useParams } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { add } from './actions';
import { Button, Container, Image } from 'react-bootstrap';

function ProductPage() {
  const { item } = useParams();
  const products = useSelector((st) => st.products, shallowEqual);
  const dispatch = useDispatch();

  const product = products[item];

  const addItem = (item) => dispatch(add(item));

  return (
    <Container>
      <h1>{product.name}</h1>
      <p>{`$${product.price}`}</p>
      <Image src={product.image_url} fluid />
      <p>{product.description}</p>

      <Button onClick={() => addItem(item)}>Add to cart</Button>
    </Container>
  );
}

export default ProductPage;
