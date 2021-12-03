import React, { useContext, useReducer, useState } from 'react';
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
import reducer from '../reducer/appReducer';

const initialState = {
  isSidebarOpen: false,
  isCartModalOpen: false,
  modalLocation: {},
  amount: 0,
  cart: [],
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const openCartModal = (coordinates) => {
    dispatch({ type: CARTMODAL_OPEN, payload: coordinates });
  };

  const closeCartModal = () => {
    dispatch({ type: CARTMODAL_CLOSE });
  };

  const increase = () => {
    dispatch({ type: INCREASE });
  };

  const decrease = () => {
    dispatch({ type: DECREASE });
  };

  const addToCart = (amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { amount, product } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openCartModal,
        closeCartModal,
        increase,
        decrease,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
