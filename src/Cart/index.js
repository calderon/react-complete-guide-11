import CartIcon from "./CartIcon.js";
import classes from './Cart.module.css';

const Cart = () => {
  return (
    <button className={classes.cart}>
      <CartIcon className={classes["cart__icon"]} />
      <span>Your cart</span>
      <span className={classes["cart__badge"]}>0</span>
    </button>
  )
};

export default Cart;
