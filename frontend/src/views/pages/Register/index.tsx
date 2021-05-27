import { RegisterContainer } from './styles';
import BackToHome from '../../../components/BackToHome';

const Register: React.FC = () => {
  return (
    <RegisterContainer>
      <BackToHome />
      <div>
        <img src="/img/register_illustration.svg" alt="" />
      </div>
      <form>
        <h1>Cadastro</h1>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Senha:</label>
        <input type="password" name="password" id="password" />

        <button type="submit">Cadastrar</button>
      </form>
    </RegisterContainer>
  );
}

export default Register;