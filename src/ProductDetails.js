import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from './actions';
import { useParams } from "react-router-dom";
import Item from "./Item";


function ProductDetails() {
  const products = useSelector(st => st.products)
  const cart = useSelector(st => st.cart);
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const addToCart = (product) => dispatch(add(product));
  const removeFromCart = (product) => dispatch(remove(product));
  const matchedProduct = products[id]

  return (
    <div>
      <span>Cart Items: {cart.length}</span>
      <Item
        id={matchedProduct.id}
        value={matchedProduct}
        add={addToCart}
        remove={removeFromCart} />
    </div>
  )
}

// products/47314fa1-ae56-4eae-80be-af6691145951
export default ProductDetails;