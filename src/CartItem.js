import { useState } from 'react';
import { update, remove } from './actions';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Button, Row, Col, Image, FormControl, InputGroup } from 'react-bootstrap';

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
    <Row>
      <Col>
        <Image src={item.image_url} fluid />
      </Col>
      <Col>
        <h5>{item.name}</h5>
        <label htmlFor="qty">Quantity</label>
        <FormControl type="number" name="qty" id="qty" value={qty} onChange={handleChange} />
        <Button variant="light" size="sm" onClick={updateItem}>
          Update
        </Button>
      </Col>
      <Col>
        <p>${subtotal.toFixed(2)}</p>
        <Button variant="light" size="sm" onClick={removeItem}>
          Remove
        </Button>
      </Col>
    </Row>
  );
}

export default CartItem;
