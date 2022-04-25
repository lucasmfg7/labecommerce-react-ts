import styled from "styled-components";
import { Product } from "../App";

export const Container = styled.section`
  border: 1px solid black;
  border-radius: 4px;
  padding: 1rem;
`;

export const Products = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    align-items: center;

    .name {
      font-size: 0.75rem;
      padding: 0 0.25rem;
      align-self: center;
      text-align: center;
    }

    button {
      padding: 0.25rem;
    }
  }
`;

interface CartProps {
  productCart: Product[];
  handleRemoveProductCart: (productId: number) => void;
}

export const Cart = ({ productCart, handleRemoveProductCart }: CartProps) => {
  const result = productCart.reduce((acc, curr) => {
    acc += curr.value * (curr.quantity as number);
    return acc;
  }, 0);

  return (
    <Container>
      <h3>Carrinho</h3>
      <Products>
        {productCart.length > 0 ? (
          productCart.map((product) => (
            <div key={product.id}>
              <span>{product.quantity}x</span>
              <span className="name">{product.name}</span>
              <button onClick={() => handleRemoveProductCart(product.id)}>
                Remover
              </button>
            </div>
          ))
        ) : (
          <p>Carrinho Vazio</p>
        )}
      </Products>
      <p>
        Valor total:{" "}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(result)}
      </p>
    </Container>
  );
};
