import { Fragment, useState, useContext } from "react";

import CartIcon from "./CartIcon.js";
import CartContext from "../../store/Cart/CartContext.js";

import classes from "./Cart.module.css";
import CartModal from "../CartModal/index.js";

const Cart = () => {
	const [cartModalVisible, setCartModalVisible] = useState(false);
	const cartContext = useContext(CartContext);

	let itemsCounter = 0;
	for (let index = 0; index < cartContext.items.length; index++) {
		const item = cartContext.items[index];
		itemsCounter += item.amount || 0;
	}

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
				<span className={classes.cart__badge}>{itemsCounter}</span>
			</button>
			{cartModalVisible && <CartModal onHide={onHide} />}
		</Fragment>
	);
};

export default Cart;
