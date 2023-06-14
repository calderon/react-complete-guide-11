import CartProvider from "./store/Cart/CartProvider";
import Header from "./components/Header";
import Disclaimer from "./components/Disclaimer";
import AvailableMeals from "./components/AvailableMeals";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <main>
        <Disclaimer />
        <AvailableMeals />
      </main>
    </CartProvider>
  );
};

export default App;
