import { useState } from "react";
import styled from "styled-components";
import { Product } from "../App";

export const Container = styled.section`
  padding: 1rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    select {
      margin-left: 5px;
    }
  }
`;

export const Grid = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const ProductItem = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem;
`;

interface ListProps {
  productList: Product[];
  handleAddProductCart: (product: Product, productId: number) => void;
  minFilter: number;
  maxFilter: number;
  nameFilter: string;
}

export const List = ({
  productList,
  handleAddProductCart,
  minFilter,
  maxFilter,
  nameFilter,
}: ListProps) => {
  const [sort, setSort] = useState("descr");

  const getFilteredOrderedList = () => {
    return productList
      .filter((product) => (maxFilter ? product.value <= maxFilter : true))
      .filter((product) => (minFilter ? product.value >= minFilter : true))
      .filter((product) =>
        nameFilter ? product.name.toLowerCase().includes(nameFilter) : true
      )
      .sort((a, b) =>
        sort === "cresc" ? a.value - b.value : b.value - a.value
      );
  };

  const filteredOrderedList = getFilteredOrderedList();

  return (
    <Container>
      <header>
        <p>Quantidade de produtos: {filteredOrderedList.length}</p>
        <label>
          <span>Ordenação</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value={"cresc"}>Crescente</option>
            <option value={"descr"}>Decrescente</option>
          </select>
        </label>
      </header>

      <Grid>
        {productList &&
          filteredOrderedList.map((product) => (
            <ProductItem key={product.id}>
              <img
                src={`https://picsum.photos/200/200?a=${product.id}`}
                alt="product"
              />
              <ProductInfo>
                <p>{product.name}</p>
                <p>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.value)}
                </p>
                <button
                  onClick={() => handleAddProductCart(product, product.id)}
                >
                  Adicionar ao Carrinho
                </button>
              </ProductInfo>
            </ProductItem>
          ))}
      </Grid>
    </Container>
  );
};
