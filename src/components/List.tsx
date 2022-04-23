import styled from "styled-components";

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

export const Product = styled.div`
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

export const List = ({ productList }) => {
  return (
    <Container>
      <header>
        <p>Quantidade de produtos: {productList.length}</p>
        <label>
          <span>Ordenação</span>
          <select>
            <option value="cresc">Crescente</option>
            <option value="descr">Decrescente</option>
          </select>
        </label>
      </header>

      <Grid>
        {productList &&
          productList.map((product) => (
            <Product key={product.id}>
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
                <button>Adicionar ao Carrinho</button>
              </ProductInfo>
            </Product>
          ))}
      </Grid>
    </Container>
  );
};
