import { useSelector, shallowEqual } from 'react-redux';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import './Cart.scss';

function Cart() {
  const products = useSelector((st) => st.products, shallowEqual);
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
    <Container className="Cart">
      <Row>
        <Col>
          <h1>
            Your Cart <small>({itemCount} items)</small>
          </h1>
        </Col>
      </Row>
      {itemCount > 0 ? (
        <Row className="order">
          <Col sm={8} className="px-1">
            <h2>Order Details</h2>
            <Container className="px-1">
              {items.map((item) => <CartItem id={item[0]} quantity={item[1]} key={item[0]} />)}
            </Container>
          </Col>
          <Col xs={8} sm={4} className="px-2">
            <h2>Order Summary</h2>
            <Container className="Cart-summary">
              <Row>
                <Col className="text-left">
                  <p>Subtotal</p>
                </Col>
                <Col className="text-right">
                  <p>${subtotal.toFixed(2)}</p>
                </Col>
              </Row>
              <Row>
                <Col className="text-left">
                  <p>Tax</p>
                </Col>
                <Col className="text-right">
                  <p>${tax.toFixed(2)}</p>
                </Col>
              </Row>
              <Row className="total">
                <Col className="text-left">
                  <p>Total</p>
                </Col>
                <Col className="text-right">
                  <p>${total.toFixed(2)}</p>
                </Col>
              </Row>
            </Container>
            <Button className="checkout">Check Out</Button>
          </Col>
        </Row>
      ) : (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/">Continue Shopping</Link>
        </div>
      )}
    </Container>
  );
}

export default Cart;
