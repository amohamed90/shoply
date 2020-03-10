import products from './data.json';
import { ADD, REMOVE } from './actionTypes';

const DEFAULT_STATE = {
  cart: [],
  products: products.products
};

function handleRemove(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      if (arr[i][key] === id) {
        arr.splice(i, 1);
      }
    }
    break;
  }
  return arr;
}
function cartReducer(state = DEFAULT_STATE, action) {
  console.log(state.cart);

  switch (action.type) {
    case ADD:
      return { ...state, cart: [...state.cart, action.payload] }
    case REMOVE:
      return {
        ...state,
        cart: handleRemove([...state.cart], action.payload.id)
      }
    default:
      return state;
  }
}

export { DEFAULT_STATE };
export default cartReducer;