import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import CartItem from './CartItem';

function Cart() {
  const products = useSelector((st) => st.products, shallowEqual);
  const dispatch = useDispatch();
  const cart = useSelector((st) => st.cart, shallowEqual);
  const items = Object.entries(cart);

  let itemCount = Object.values(cart).reduce((acc, item) => {
    return acc + item;
  }, 0);
  let subtotal = items.reduce((acc, item) => {
    let price = item[1] * products[item[0]].price;
    return acc + price;
  }, 0);
  let tax = subtotal * 0.0725;
  let total = subtotal + tax;

  return (
    <Container>
      <Row>
        <Col>
          <h1>
            Your Cart <small>({itemCount} items)</small>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <h2>Order Details</h2>
          <Container>{items.map((item) => <CartItem id={item[0]} quantity={item[1]} key={item[0]} />)}</Container>
        </Col>
        <Col sm={4}>
          <h2>Order Summary</h2>
          <Container>
            <Row>
              <Col>
                <p>Subtotal</p>
              </Col>
              <Col>
                <p>${subtotal.toFixed(2)}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Tax</p>
              </Col>
              <Col>
                <p>${tax.toFixed(2)}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Total</p>
              </Col>
              <Col>
                <p>${total.toFixed(2)}</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
