import { Link } from 'react-router-dom';

import { LoginContainer } from './styles';

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <div>
        <img src="/img/login_icon.svg" alt="" />
      </div>
      <form>
        <h1>Login</h1>
        <label htmlFor="">E-mail:</label>
        <input type="text" />
        <label htmlFor="">Senha:</label>
        <input type="password" />
        <button type="submit">Entrar</button>
        <p>
          Não tem uma conta? <Link to="/">Cadastre-se</Link>{' '}
        </p>
      </form>
    </LoginContainer>
  );
};

export default Login;
