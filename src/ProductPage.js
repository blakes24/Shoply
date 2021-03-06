import { useParams } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { add } from './actions';
import { Button, Container, Image, Col, Row } from 'react-bootstrap';
import './ProductPage.scss';

function ProductPage() {
  const { item } = useParams();
  const products = useSelector((st) => st.products, shallowEqual);
  const dispatch = useDispatch();

  const product = products[item];

  const addItem = () => dispatch(add(item));

  return (
    <Container className="ProductPage">
      <Row>
        <Col sm={8}>
          <Image src={product.image_url} fluid />
        </Col>
        <Col className="name">
          <h1>{product.name}</h1>
          <p>{`$${product.price}`}</p>
          <Button onClick={addItem}>Add to cart</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Description</h5>
          <p>{product.description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
