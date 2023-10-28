import styled from "styled-components";
import { UserAuth, useAuthStore } from "../index";

export function Home() {
  const { signOut } = useAuthStore();
  const { user } = UserAuth();
  return (
    <Container>
      <h1>Bienvenido Home {user.full_name}</h1>
      <img src={user.picture} />
      <button onClick={signOut}>Cerrar</button>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
