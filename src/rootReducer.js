import data from './data.json';

const INITIAL_STATE = { products: data.products, cart: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      // if item exists add one to qty else add item
      const item = state.cart[action.payload]
        ? { ...state.cart[action.payload] }
        : { qty: 0, price: state.products[action.payload].price };
      item.qty += 1;
      return { ...state, cart: { ...state.cart, [action.payload]: item } };

    case 'REMOVE_ITEM':
      const cart = { ...state.cart };
      // reduce qty by one or remove item
      cart[action.payload] && cart[action.payload].qty > 1
        ? (cart[action.payload].qty -= 1)
        : delete cart[action.payload];
      return { ...state, cart: cart };

    default:
      return state;
  }
}

export default rootReducer;
