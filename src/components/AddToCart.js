import React, { useState } from 'react';
import minus from '../assets/icon-minus.svg';
import plus from '../assets/icon-plus.svg';
import cart from '../assets/icon-cart.svg';
import { useAppContext } from '../context/appContext';
import styled from 'styled-components';
const AddToCart = ({ product }) => {
  const { amount, increase, decrease, addToCart } = useAppContext();

  return (
    <Wrapper>
      <div className="amount-btns">
        <button type="button" className="amount-btn" onClick={decrease}>
          <img src={minus} alt="" />
        </button>

        <p>{amount}</p>

        <button type="button" className="amount-btn" onClick={increase}>
          <img src={plus} alt="" />
        </button>
      </div>
      <button
        className="cart-btn"
        type="button"
        onClick={() => addToCart(amount, product)}
      >
        Add to cart
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .amount-btns {
    background-color: var(--clr-gray-accent);
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    border-radius: var(--radius);
  }

  .amount-btn {
    margin: 0;
  }

  .amount {
    background-color: var(--clr-gray-accent);
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 1rem;
    margin: 0;
    padding: 0.1px 1rem;
  }

  .cart-btn {
    width: 100%;
    background: var(--clr-primary);
    margin-top: 1rem;
    border-radius: var(--radius);
    font-size: 1rem;
    display: flex;
    align-content: center;
    justify-content: center;
    color: var(--clr-white);
    &:hover {
      box-shadow: 0 5px 15px var(--clr-primary);
    }
  }

  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AddToCart;
