import { commerce } from './lib/commerce';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Navbar, Products} from './components'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quanitity) => {
    const item = await commerce.cart.add(productId, quanitity);

    setCart(item.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Navbar totalItems={cart.total_items}/>
          <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
      </Switch>
    </div>
  </Router>;
};

export default App;
