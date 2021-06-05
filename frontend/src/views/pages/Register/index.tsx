import { FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';

import BackToHome from '../../../components/BackToHome';
import { api } from '../../../services/api';

import { RegisterContainer } from './styles';

interface IUser {
  name: string;
  login: string;
  password: string;
}

const Register: React.FC = () => {
  const [formDataContent, setFormDataContent] = useState<IUser>({} as IUser);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const history = useHistory();

  const registrationSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (
        formDataContent.name &&
        formDataContent.login &&
        formDataContent.password
      ) {
        setIsLoading(true);

        api
          .post('users', formDataContent)
          .then(response => {
            Swal.fire({
              title: 'Sucesso!',
              text: 'Sua conta foi criada com sucesso.',
              icon: 'success',
              confirmButtonText: 'Ir para login',
              confirmButtonColor: "#004AAD"
            }).then(response => history.push('/login'));
          })
          .catch(err => {
            let errorMessage;

            if (err.response.data.message === 'User already booked')
              errorMessage = 'Nome de usuário não está disponível.';
            else
              errorMessage = 'Não foi possível criar usuário, tente novamente.';

            Swal.fire({
              title: 'Ops!',
              text: errorMessage,
              icon: 'error',
              confirmButtonText: 'Fechar',
              confirmButtonColor: '#ff312e'
            });
          })
          .finally(() => setIsLoading(false));
      } else {
        Swal.fire({
          title: 'Ops!',
          text: 'Preencha todos os campos.',
          icon: 'error',
          confirmButtonText: 'Fechar',
        });
      }
    },
    [formDataContent, history]
  );

  return (
    <RegisterContainer>
      <BackToHome />
      <div>
        <img src="/img/register_illustration.svg" alt="" />
      </div>
      <form onSubmit={registrationSubmit}>
        {isLoading ? (
          'Criando conta...'
        ) : (
          <>
            <h1>Cadastro</h1>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={e =>
                setFormDataContent({
                  ...formDataContent,
                  name: e.target.value,
                })
              }
            />

            <label htmlFor="login">Login:</label>
            <input
              type="login"
              name="login"
              id="login"
              maxLength={20}
              onChange={e =>
                setFormDataContent({
                  ...formDataContent,
                  login: e.target.value,
                })
              }
            />

            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={e =>
                setFormDataContent({
                  ...formDataContent,
                  password: e.target.value,
                })
              }
            />

            <button type="submit">Cadastrar</button>
          </>
        )}
      </form>
    </RegisterContainer>
  );
};

export default Register;
