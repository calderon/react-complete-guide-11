import { useRef, useContext } from "react";
import classes from "./AvailableMeal.module.css";
import { useState } from "react";
import CartContext from "../../store/Cart/CartContext";

const AvailableMeal = (props) => {
	const [validAmount, setValidAmount] = useState(true);
	const inputRef = useRef();

	const cartContext = useContext(CartContext);

	const submitHandler = (evt) => {
		evt.preventDefault();

		let enteredAmount = inputRef.current.value;
		if (enteredAmount.trim().length === 0) {
			setValidAmount(false);
			return;
		}

		enteredAmount = parseInt(enteredAmount);

		if (enteredAmount < 1) {
			setValidAmount(false);
			return;
		}

		cartContext.addItem({
			id: props.id,
			name: props.name,
			price: props.price,
			amount: enteredAmount
		});
	};

	return (
		<article className={classes.availableMeal}>
			<div className={classes["availableMeal__information"]}>
				<h1 className={classes["availableMeal__name"]}>{props.name}</h1>
				<p className={classes["availableMeal__description"]}>
					{props.description}
				</p>
				<p className={classes["availableMeal__price"]}>${props.price}</p>
			</div>

			<footer className={classes["availableMeal__control"]}>
				<form
					className={classes.availableMeal__form}
					onSubmit={submitHandler}
				>
					<div className={classes.availableMeal__formControl}>
						<label
							htmlFor={`availableMeal-${props.id}`}
							className={classes["availableMeal__label"]}
						>
							Amount
						</label>
						<input
							id={`availableMeal-${props.id}`}
							className={classes.availableMeal__input}
							type="number"
							min="0"
							defaultValue={1}
							ref={inputRef}
						/>
					</div>
					<button className={classes["availableMeal__button"]} type="submit">
						+ Add
					</button>
				</form>
				{!validAmount && <p>Invalid amount!</p>}
			</footer>
		</article>
	);
};

export default AvailableMeal;
