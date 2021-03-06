import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useSelector, shallowEqual } from 'react-redux';
// import './NavBar.css';

const NavBar = () => {
  const cart = useSelector((st) => st.cart, shallowEqual);

  let total = Object.values(cart).reduce((acc, item) => {
    return acc + item;
  }, 0);

  return (
    <Navbar collapseOnSelect variant="dark" bg="primary" expand="sm" className="NavBar">
      <Navbar.Brand as={NavLink} to="/">
        Shoply
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-collapse" />
      <Navbar.Collapse id="navbar-collapse" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} eventKey="1" to="/">
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} eventKey="2" to="/cart">
            Cart ({total} items)
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
