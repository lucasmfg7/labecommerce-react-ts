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

interface FilterProps {
  minFilter: number;
  maxFilter: number;
  nameFilter: string;
  onChangeMinFilter: (e: any) => void;
  onChangeMaxFilter: (e: any) => void;
  onChangeNameFilter: (e: any) => void;
}

export const Filter = ({
  minFilter,
  maxFilter,
  nameFilter,
  onChangeMaxFilter,
  onChangeMinFilter,
  onChangeNameFilter,
}: FilterProps) => {
  return (
    <Container>
      <h3>Filtros</h3>
      <label>
        <span>Valor mínimo:</span>
        <input type="number" value={minFilter} onChange={onChangeMinFilter} />
      </label>
      <label>
        <span>Valor máximo:</span>
        <input type="number" value={maxFilter} onChange={onChangeMaxFilter} />
      </label>
      <label>
        <span>Busca por nome:</span>
        <input type="number" value={nameFilter} onChange={onChangeNameFilter} />
      </label>
    </Container>
  );
};
