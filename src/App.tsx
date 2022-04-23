import { Filter } from "./components/Filter";
import "./App.css";
import { List } from "./components/List";
import { Cart } from "./components/Cart";

const App = () => {
  return (
    <>
      <div className="container">
        <Filter />

        <List />

        <Cart />
      </div>
    </>
  );
};

export default App;
