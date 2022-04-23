import styled from "styled-components";
import { Filter } from "./components/Filter";
import { List } from "./components/List";
import { Cart } from "./components/Cart";

export const Container = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const App = () => {
  return (
    <Container>
      <Filter />
      <List />
      <Cart />
    </Container>
  );
};

export default App;
