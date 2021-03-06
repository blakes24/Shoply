import { Switch, Route } from 'react-router-dom';
import ProductPage from './ProductPage';
import ProductList from './ProductList';
import NavBar from './Navbar';
import Cart from './Cart';

function Shoply() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products/:item">
          <ProductPage />
        </Route>
        <Route>
          <p>Page not found.</p>
        </Route>
      </Switch>
    </div>
  );
}

export default Shoply;
