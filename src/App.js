import { Fragment } from "react";
import Header from "./Header";
import Disclaimer from "./Disclaimer";
import Meals from "./Meals";

const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Disclaimer />
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
