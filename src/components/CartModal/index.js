import { useContext } from "react";
import Modal from "../Modal";

import classes from "./CartModal.module.css";
import CartContext from "../../store/Cart/CartContext";

const CartModalItem = (props) => {
	return (
		<article className={classes.cartModalItem}>
			<div className={classes.cartModalItem__info}>
				<h1 className={classes.cartModalItem__title}>{props.name}</h1>
				<p className={classes.cartModalItem__price}>${props.price}</p>
				<div className={classes.cartModalItem__amount}>x{props.amount}</div>
			</div>

			<div className={classes.cartModalItem__actions}>
				<button className={classes.cartModalItem__button}>-</button>
				<button className={classes.cartModalItem__button}>+</button>
			</div>
		</article>
	);
};

const CartModal = (props) => {
	const cartContext = useContext(CartContext);

	const hideModalHandler = () => {
		props.onHide();
	};

	const totalAmount = cartContext.totalAmount.toFixed(2);

	return (
		<Modal onHide={hideModalHandler}>
			<div className={classes.cartModal__items}>
				{cartContext.items.map((item) => {
					return (
						<CartModalItem
							name={item.name}
							price={item.price}
							amount={item.amount}
						/>
					);
				})}
			</div>

			<div className={classes.cartModal__total}>
				<div className={classes.cartModal__label}>Total Amount</div>
				<div className={classes.cartModal__amount}>${totalAmount}</div>
			</div>

			<footer className={classes.cartModal__actions}>
				<button
					onClick={hideModalHandler}
					className={classes.cartModal__button}
				>
					Close
				</button>
				<button className={classes.cartModal__button}>Order</button>
			</footer>
		</Modal>
	);
};

export default CartModal;
