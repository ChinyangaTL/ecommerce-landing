import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  CARTMODAL_OPEN,
  CARTMODAL_CLOSE,
  INCREASE,
  DECREASE,
  ADD_TO_CART,
  CLEAR_CART,
} from '../actions';
const appReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === CARTMODAL_OPEN) {
    console.log('cartmodal reducer called', state.modalLocation);

    console.log('cartmodal reducer', state.modalLocation);

    return { ...state, isCartModalOpen: true, modalLocation: action.payload };
  }

  if (action.type === CARTMODAL_CLOSE) {
    return { ...state, isCartModalOpen: false };
  }

  if (action.type === INCREASE) {
    const newAmount = state.amount + 1;
    return { ...state, amount: newAmount };
  }

  if (action.type === DECREASE) {
    let tempAmount = state.amount - 1;
    if (tempAmount < 0) {
      tempAmount = 0;
    }

    return { ...state, amount: tempAmount };
  }

  if (action.type === ADD_TO_CART) {
    return { ...state, cart: action.payload };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default appReducer;
