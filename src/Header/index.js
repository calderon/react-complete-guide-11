import Cart from "../Cart";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <Cart />
    </header>
  )
};

export default Header;
