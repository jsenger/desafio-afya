import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <img src="/img/afya-logo-pink.svg" alt="Logo Afya" />
      <button>Cadastro</button>
      <button>Login</button>
    </Container>
  );
}

export default Home;
