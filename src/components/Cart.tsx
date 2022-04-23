import styled from "styled-components";

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

export const Cart = () => {
  return (
    <Container>
      <h3>Carrinho</h3>
      <Products>
        <div>
          <span>1x</span>
          <span>Produto Legal</span>
          <button>Remover</button>
        </div>
        <div>
          <span>3x</span>
          <span>Produto Normal</span>
          <button>Remover</button>
        </div>
        <div>
          <span>2x</span>
          <span>Produto Foda</span>
          <button>Remover</button>
        </div>
      </Products>
      <p>Valor total: R$100,00</p>
    </Container>
  );
};
