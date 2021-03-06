import { useState } from 'react';
import { update, remove } from './actions';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Button, Row, Col, Image, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CartItem.scss';

function CartItem({ id, quantity }) {
  const [ qty, setQty ] = useState(quantity);
  const products = useSelector((st) => st.products, shallowEqual);
  const dispatch = useDispatch();
  const item = products[id];
  const subtotal = item.price * quantity;

  const handleChange = (evt) => setQty(+evt.target.value);
  const updateItem = () => dispatch(update(id, qty));
  const removeItem = () => dispatch(remove(id));

  return (
    <Row className="CartItem">
      <Col xs={3}>
        <Image src={item.image_url} fluid />
      </Col>
      <Col>
        <h5>
          <Link to={`/products/${id}`}>{item.name}</Link>
        </h5>
        <InputGroup>
          <FormControl
            size="sm"
            type="number"
            name="qty"
            id="qty"
            value={qty}
            min="1"
            aria-label="quantity"
            onChange={handleChange}
          />
          <Button variant="light" size="sm" onClick={updateItem}>
            Update
          </Button>
        </InputGroup>
      </Col>
      <Col className="text-right">
        <p>
          <b>${subtotal.toFixed(2)}</b>
        </p>
        <Button variant="light" size="sm" onClick={removeItem}>
          Remove
        </Button>
      </Col>
    </Row>
  );
}

export default CartItem;
