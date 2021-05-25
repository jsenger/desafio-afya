import { HomeContainer } from "./styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <img src="/img/afya-logo-pink.svg" alt="Logo Afya" />
      <button>Cadastro</button>
      <button>Login</button>
    </HomeContainer>
  );
}

export default Home;
