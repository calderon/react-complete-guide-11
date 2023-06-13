import Modal from "../Modal";

import classes from "./CartModal.module.css";

const CartModal = (props) => {
  const hideModalHandler = () => {
    props.onHide();
  };

  return (
		<Modal onHide={hideModalHandler}>
			<div className={classes.cartModal__items}>
				<article className={classes.cartModalItem}>
					<div className={classes.cartModalItem__info}>
						<h1 className={classes.cartModalItem__title}>Sushi</h1>
						<p className={classes.cartModalItem__price}>$22.99</p>
						<div className={classes.cartModalItem__amount}>x1</div>
					</div>

					<div className={classes.cartModalItem__actions}>
						<button className={classes.cartModalItem__button}>-</button>
						<button className={classes.cartModalItem__button}>+</button>
					</div>
				</article>
			</div>

			<div className={classes.cartModal__total}>
				<div className={classes.cartModal__label}>Total Amount</div>
				<div className={classes.cartModal__amount}>$88.99</div>
			</div>

			<footer className={classes.cartModal__actions}>
				<button onClick={hideModalHandler} className={classes.cartModal__button}>Close</button>
				<button className={classes.cartModal__button}>Order</button>
			</footer>
		</Modal>
	);
};

export default CartModal;
