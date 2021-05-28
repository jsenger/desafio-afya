import { Link } from "react-router-dom";
import { HomeContainer } from "./styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <img src="/img/vit_logo.svg" alt="Logo Afya" />
      <Link to="/register">Cadastro</Link>
      <Link to="/login">Login</Link>
    </HomeContainer>
  );
}

export default Home;