import { Fragment } from "react";

import Header from "./components/Header";
import Disclaimer from "./components/Disclaimer";
import AvailableMeals from "./components/AvailableMeals";

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
