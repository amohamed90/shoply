import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';
import { add, remove } from './actions';
import { NavLink } from 'react-router-dom';

function ProductList() {
  const products = useSelector(st => st.products);
  const cart = useSelector(st => st.cart);
  const dispatch = useDispatch();
  const addToCart = (product) => dispatch(add(product));
  const removeFromCart = (product) => dispatch(remove(product));
  console.log(cart);

  console.log(Object.keys(products));

  return (
    <div>
      <h2>Check our products</h2>
      <span>Cart Items: {cart.length}</span>
      <div>
        {Object.keys(products).map(key =>
        
          <NavLink key={key} exact to={`/products/${key}`}>
            <Item 
              id={key}
              value={products[key]}
              add={addToCart}
              remove={removeFromCart} />
          </NavLink>
        )}
      </div>
    </div>
  )
}

export default ProductList;