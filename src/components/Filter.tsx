import styled from "styled-components";

export const Container = styled.section`
  border: 1px solid black;
  border-radius: 4px;
  padding: 1rem;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    span {
      margin-bottom: 5px;
    }
  }
`;

export const Filter = () => {
  return (
    <Container>
      <h3>Filtros</h3>
      <label>
        <span>Valor mínimo:</span>
        <input type="number" />
      </label>
      <label>
        <span>Valor máximo:</span>
        <input type="number" />
      </label>
      <label>
        <span>Busca por nome:</span>
        <input type="number" />
      </label>
    </Container>
  );
};
