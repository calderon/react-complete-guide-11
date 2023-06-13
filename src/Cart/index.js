import { Fragment, useState } from "react";

import CartIcon from "./CartIcon.js";

import classes from "./Cart.module.css";
import CartModal from "../CartModal/index.js";

const Cart = () => {
	const [cartModalVisible, setCartModalVisible] = useState(false);

	const onShow = () => {
		setCartModalVisible(true);
	};

	const onHide = () => {
		setCartModalVisible(false);
	};

	return (
		<Fragment>
			<button onClick={onShow} className={classes.cart}>
				<CartIcon className={classes.cart__icon} />
				<span>Your cart</span>
				<span className={classes.cart__badge}>0</span>
			</button>
			{cartModalVisible && <CartModal onHide={onHide} />}
		</Fragment>
	);
};

export default Cart;
