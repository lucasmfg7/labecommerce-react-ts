import styled from "styled-components";
import { Filter } from "./components/Filter";
import { List } from "./components/List";
import { Cart } from "./components/Cart";
import { useState } from "react";

export const Container = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

interface ProductList {
  id: number;
  name: string;
  value: number;
  imageUrl: string;
}

const data = [
  {
    id: 1,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200?a=1",
  },
  {
    id: 2,
    name: "Bonco do Ezio Auditore",
    value: 523.0,
    imageUrl: "https://picsum.photos/200/200?a=2",
  },
  {
    id: 3,
    name: "Computador Velho",
    value: 9000.0,
    imageUrl: "https://picsum.photos/200/200?a=3",
  },
  {
    id: 4,
    name: "Abajur do Pacificador",
    value: 9741.0,
    imageUrl: "https://picsum.photos/200/200?a=4",
  },
  {
    id: 5,
    name: "Garrafa Stanley Hudson",
    value: 1.0,
    imageUrl: "https://picsum.photos/200/200?a=5",
  },
];

const App = () => {
  const [productList, setProductList] = useState<ProductList[]>(data);

  return (
    <Container>
      <Filter />
      <List productList={productList} />
      <Cart />
    </Container>
  );
};

export default App;
