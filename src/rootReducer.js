import data from './data.json';

const INITIAL_STATE = { products: data.products, cart: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      // get value of item if present, then add 1
      let value = state.cart[action.payload] || 0;
      value += 1;
      return { ...state, cart: { ...state.cart, [action.payload]: value } };

    case 'REMOVE_ITEM':
      const cart = { ...state.cart };
      // delete item from cart
      delete cart[action.payload];
      return { ...state, cart: cart };

    case 'UPDATE_ITEM':
      // set quantity of given item
      let qty = action.payload.qty;
      return { ...state, cart: { ...state.cart, [action.payload.item]: qty } };

    default:
      return state;
  }
}

export default rootReducer;
