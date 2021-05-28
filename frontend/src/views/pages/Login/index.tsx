import React from 'react';
import { FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import BackToHome from '../../../components/BackToHome';
import { api } from '../../../services/api';

import { LoginContainer } from './styles';

interface IUserLogin {
  login: string;
  password: string;
}

const Login: React.FC = () => {
  const [formDataContent, setFormDataContent] = useState<IUserLogin>(
    {} as IUserLogin
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const history = useHistory();

  const loginSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true);

      api
        .post('sessions', formDataContent)
        .then(response => history.push('/dashboard'))
        .catch(err => {
          Swal.fire({
            title: 'Ops!',
            text: 'Dados incorretos.',
            icon: 'error',
            confirmButtonText: 'Fechar',
          });
        })
        .finally(() => setIsLoading(false));
    },
    [formDataContent, history]
  );

  return (
    <LoginContainer>
      <BackToHome />
      <div>
        <img src="/img/login_illustration.svg" alt="" />
      </div>
      <form onSubmit={loginSubmit}>
        {isLoading ? (
          'Entrando...'
        ) : (
          <>
            <h1>Login</h1>
            <label htmlFor="">Login:</label>
            <input
              type="text"
              name="login"
              id="login"
              required
              onChange={e =>
                setFormDataContent({
                  ...formDataContent,
                  login: e.target.value,
                })
              }
            />

            <label htmlFor="">Senha:</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={e =>
                setFormDataContent({
                  ...formDataContent,
                  password: e.target.value,
                })
              }
            />

            <button type="submit">Entrar</button>
            <p>
              Não tem uma conta? <Link to="/register">Cadastre-se</Link>{' '}
            </p>
          </>
        )}
      </form>
    </LoginContainer>
  );
};

export default Login;
