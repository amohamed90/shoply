import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';
import { add, remove } from './actions';
import { v4 as uuid } from 'uuid';

function CartList() {

  const cart = useSelector(st => st.cart);
  const dispatch = useDispatch();
  const addToCart = (cart) => dispatch(add(cart));
  const removeFromCart = (cart) => dispatch(remove(cart));

  return (
    <div>
      <h2>Check our cart</h2>
      <span>Cart Items: {cart.length}</span>
      <div>
        {cart.map(item =>
        <Item 
              key={uuid()}
              id={item.id}
              value={item}
              add={addToCart}
              remove={removeFromCart}/>)}
      </div>
    </div>
  )
}

export default CartList;