import styled from "styled-components";
import { ItemsDespegable, v } from "../../index";
export function ListaMenuDespegabel({ data, top, funcion }) {
  return (
    <Container top={top}>
      {data.map((item, index) => {
        return (
          <ItemsDespegable
            key={index}
            item={item}
            funcion={() => funcion(item.tipo)}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${({ theme }) => theme.bg3};
  border-radius: 22px;
  top: ${({ top }) => top};
  box-shadow: ${() => v.boxshadowGray};
`;
