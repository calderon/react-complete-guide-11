import { Fragment } from "react";
import Header from "./Header";
import Disclaimer from "./Disclaimer";
import AvailableMeals from "./AvailableMeals";

const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Disclaimer />
        <AvailableMeals />
      </main>
    </Fragment>
  );
};

export default App;
