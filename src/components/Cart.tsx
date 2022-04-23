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
  }
`;

interface CartProps {
  productCart: Product[];
  handleRemoveProductCart: (productId: number) => void;
}

export const Cart = ({ productCart, handleRemoveProductCart }: CartProps) => {
  return (
    <Container>
      <h3>Carrinho</h3>
      <Products>
        {productCart.length > 0 ? (
          productCart.map((product) => (
            <div key={product.id}>
              <span>{product.quantity}x</span>
              <span>{product.name}</span>
              <button onClick={() => handleRemoveProductCart(product.id)}>
                Remover
              </button>
            </div>
          ))
        ) : (
          <p>Carrinho Vazio</p>
        )}
      </Products>
      <p>Valor total: R$100,00</p>
    </Container>
  );
};
