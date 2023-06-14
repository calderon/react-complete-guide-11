import AvailableMeal from "../AvailableMeal";
import classes from "./AvailableMeals.module.css";

const AVAILABLE_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.availableMeals}>
      {AVAILABLE_MEALS.map((availableMeal) => (
        <AvailableMeal
          key={availableMeal.id}
          id={availableMeal.id}
          name={availableMeal.name}
          description={availableMeal.description}
          price={availableMeal.price} />
      ))}
    </section>
  );
};

export default AvailableMeals;
