import styled from "styled-components";
import { Filter } from "./components/Filter";
import { List } from "./components/List";
import { Cart } from "./components/Cart";
import { useEffect, useState } from "react";

export const Container = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

export interface Product {
  id: number;
  name: string;
  value: number;
  imageUrl: string;
  quantity?: number;
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
    name: "Boneco do Ezio Auditore",
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
  const [productList, setProductList] = useState<Product[]>(data);
  const [productCart, setProductCart] = useState<Product[]>([
    {
      id: 1,
      name: "Foguete da Missão Apollo 11",
      value: 10000.0,
      imageUrl: "https://picsum.photos/200/200?a=1",
      quantity: 1,
    },
    {
      id: 2,
      name: "Boneco do Ezio Auditore",
      value: 523.0,
      imageUrl: "https://picsum.photos/200/200?a=2",
      quantity: 1,
    },
  ]);

  const handleAddProductCart = (product: Product, productId: number) => {
    const productInCart = productCart.find(
      (product) => product.id === productId
    );

    if (productInCart) {
      const newProductsInCart = productCart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: (product.quantity as number) + 1,
          };
        }
        return product;
      });
      setProductCart(newProductsInCart);
    } else {
      setProductCart((prevState) => [
        ...prevState,
        { ...product, quantity: 1 },
      ]);
    }
  };

  const handleRemoveProductCart = (productId: number) => {
    const productInCart = productCart
      .map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: (product.quantity as number) - 1,
          };
        }
        return product;
      })
      .filter((product) => (product.quantity as number) > 0);
    setProductCart(productInCart);
  };

  console.log(productCart);

  return (
    <Container>
      <Filter />
      <List
        productList={productList}
        handleAddProductCart={handleAddProductCart}
      />
      <Cart
        productCart={productCart}
        handleRemoveProductCart={handleRemoveProductCart}
      />
    </Container>
  );
};

export default App;
