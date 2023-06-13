import classes from "./AvailableMeal.module.css";

const AvailableMeal = (props) => {
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
				<form className={classes["availableMeal__selectedAmount"]}>
					<label
						htmlFor={`availableMeal-${props.id}`}
						className={classes["availableMeal__label"]}
					>
						Amount
					</label>
					<input
						id={`availableMeal-${props.id}`}
						className={classes["availableMeal__input"]}
						type="number"
						min="0"
					/>
				</form>
				<button className={classes["availableMeal__button"]}>+ Add</button>
			</footer>
		</article>
	);
};

export default AvailableMeal;
