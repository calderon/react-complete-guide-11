import { Fragment } from "react";

import CartIcon from "./CartIcon.js";

import classes from './Cart.module.css';

const Cart = () => {
  return (
    <Fragment>
      <button className={classes.cart}>
        <CartIcon className={classes["cart__icon"]} />
        <span>Your cart</span>
        <span className={classes["cart__badge"]}>0</span>
      </button>
    </Fragment>
  )
};

export default Cart;
