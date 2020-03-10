import cartReducer from '../src/cartReducer';
import products from '../src/data.json';
import * as types from '../src/actions';

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(
      {
        cart: [],
        products: products.products
      }
    )
  })
})