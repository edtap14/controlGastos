import styled from "styled-components";
import {
  BtnCircular,
  DesplegableUser,
  ListaMenuDespegabel,
  UserAuth,
  useAuthStore,
  v,
} from "../../index.js";

export function DataUser({ stateConfig }) {
  const { user } = UserAuth();
  const { signOut } = useAuthStore();
  const funcionXTipo = async (tipo) => {
    if (tipo === "cerrarsesion") {
      await signOut();
    }
  };
  return (
    <Container
      onClick={() => {
        stateConfig.setState(!stateConfig.state);
      }}
    >
      <div className="imgContainer">
        <img src={user?.picture} />
      </div>
      <div className="btncircularContainer">
        <BtnCircular
          icono={<v.iconocorona />}
          width="25px"
          height="25px"
          fontSize="11px"
          bgcolor="#FFFFFF"
          textcolor="#181616"
          translatex="-50px"
          translatey="-12px"
        />
        <span className="nombre">{user.name}</span>
        {stateConfig.state && (
          <ListaMenuDespegabel
            data={DesplegableUser}
            top="62px"
            funcion={(tipo) => funcionXTipo(tipo)}
          />
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  margin: 15px;
  cursor: pointer;
  .imgContainer {
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }
  .nombre {
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: break-word;
  }
`;
