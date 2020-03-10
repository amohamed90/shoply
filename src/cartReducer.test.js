import cartReducer from './cartReducer';
import products from '../src/data.json';
import { ADD, REMOVE } from './actionTypes';
import { DEFAULT_STATE } from "./cartReducer";

describe('cart reducer', () => {

  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(
      {
        cart: [],
        products: products.products
      }
    )
  });

  it("shoud add item to cart", function(){
    expect(
      cartReducer(DEFAULT_STATE, {
        type: ADD,
        payload: {name: 'tv'}
      })
    ).toEqual({
      cart: [{name: "tv"}],
      products: products.products
    })
  })

  it('should remove item from cart', function() {
    expect(
      cartReducer({
        cart: [{name: "tv", id: 1}],
        products: products.products
      }, {
        type: REMOVE,
        payload: {id: 1}
      })
    ).toEqual(DEFAULT_STATE)
  });

})