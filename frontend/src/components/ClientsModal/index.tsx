import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Swal from 'sweetalert2';
import InputMask from 'react-input-mask';

import { api } from '../../services/api';

import { ModalContainer } from '../../assets/ModalStyles';
import AddressForm from '../AddressForm';
import { Address, Client } from '../../types';
import { logout } from '../../services/logout';

interface ClientsModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  clients: Client[];
  setClients: Dispatch<SetStateAction<Client[]>>;
  currentClient: Client;
  setCurrentClient: Dispatch<SetStateAction<Client>>;
}

const ClientsModal = ({
  state,
  setState,
  clients,
  setClients,
  currentClient,
  setCurrentClient,
}: ClientsModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleModalClose = () => {
    setState(false);
  };

  const setAddress = (address: Address) => {
    setCurrentClient({ ...currentClient, address });
  };

  const clientSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      const form = e.currentTarget;

      e.preventDefault();

      if (form.checkValidity()) {
        setIsLoading(true);

        if (currentClient.new) {
          api
            .post('clients', currentClient, {
              headers: {
                authorization: `Bearer ${localStorage.getItem(
                  '@tokenVitality'
                )}`,
              },
            })
            .then(response => {
              setClients([currentClient, ...clients]);
              Swal.fire({
                title: 'Sucesso!',
                text: 'Cliente cadastrado com sucesso.',
                icon: 'success',
                confirmButtonText: 'Fechar',
                confirmButtonColor: '#004AAD',
              }).then(() => handleModalClose);
            })
            .catch(err => {
              let errorMessage = '';

              if (err.response.data.message === 'Invalid JWT token') {
                logout();
              } else if (
                err.response.data.message ===
                'Client already booked with this cpf'
              ) {
                errorMessage = 'CPF já cadastrado.';
              } else {
                errorMessage = 'Dados incorretos.';
              }

              Swal.fire({
                title: 'Ops!',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'Fechar',
                confirmButtonColor: '#ff312e',
              });
            })
            .finally(() => setIsLoading(false));
        } else {
          api
            .put('clients', currentClient, {
              headers: {
                authorization: `Bearer ${localStorage.getItem(
                  '@tokenVitality'
                )}`,
              },
            })
            .then(response => {
              setClients(
                clients.map(client =>
                  client.id === currentClient.id ? currentClient : client
                )
              );

              Swal.fire({
                title: 'Sucesso!',
                text: 'Cliente atualizado com sucesso.',
                icon: 'success',
                confirmButtonText: 'Fechar',
                confirmButtonColor: '#004AAD',
              }).then(() => handleModalClose);
            })
            .catch(err => {
              let errorMessage = '';

              if (err.response.data.message === 'Invalid JWT token') {
                logout();
              } else if (
                err.response.data.message ===
                'Client already booked with this cpf'
              ) {
                errorMessage = 'CPF já cadastrado.';
              } else {
                errorMessage = 'Dados incorretos.';
              }

              Swal.fire({
                title: 'Ops!',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'Fechar',
                confirmButtonColor: '#ff312e',
              });
            })
            .finally(() => setIsLoading(false));
        }
      } else {
        Swal.fire({
          title: 'Ops!',
          text: 'Verifique se todos os campos estão preenchidos corretamente.',
          icon: 'error',
          confirmButtonText: 'Fechar',
          confirmButtonColor: '#ff312e',
        });
      }
    },
    [currentClient, clients, setClients]
  );

  return (
    <ModalContainer className={state ? 'show' : ''}>
      <form className="modal-content" onSubmit={clientSubmit} noValidate>
        <div className="modal-header">
          <h4>Cadastro de cliente</h4>
          <span className="close" onClick={handleModalClose}>
            &times;
          </span>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              disabled={isLoading}
              value={currentClient.name || ''}
              required
              onChange={e =>
                setCurrentClient({
                  ...currentClient,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="cpf">CPF:</label>
              <InputMask
                mask="999.999.999-99"
                className="form-control"
                type="text"
                name="cpf"
                id="cpf"
                value={currentClient.cpf || ''}
                pattern="^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$"
                disabled={isLoading}
                required
                onChange={e =>
                  setCurrentClient({
                    ...currentClient,
                    cpf: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="phone">Telefone:</label>
              <InputMask
                mask="(99) 9999-9999"
                className="form-control"
                type="text"
                name="phone"
                id="phone"
                value={currentClient.phone || ''}
                pattern="^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$"
                disabled={isLoading}
                required
                onChange={e =>
                  setCurrentClient({
                    ...currentClient,
                    phone: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="cellphone">Celular:</label>
              <InputMask
                mask="(99) 99999-9999"
                className="form-control"
                type="text"
                name="cellphone"
                id="cellphone"
                value={currentClient.cellphone || ''}
                pattern="^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$"
                disabled={isLoading}
                required
                onChange={e =>
                  setCurrentClient({
                    ...currentClient,
                    cellphone: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="email">E-mail:</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={currentClient.email || ''}
                disabled={isLoading}
                required
                onChange={e =>
                  setCurrentClient({
                    ...currentClient,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="bloodType">Tipo sanguíneo:</label>
              <select
                className="form-control"
                name="bloodType"
                id="bloodType"
                disabled={isLoading}
                defaultValue={''}
                value={currentClient.blood_type || ''}
                required
                onChange={e =>
                  setCurrentClient({
                    ...currentClient,
                    blood_type: e.target.value,
                  })
                }
              >
                <option value="" disabled></option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>

          <AddressForm
            address={currentClient.address}
            setAddress={setAddress}
            isLoading={isLoading}
          />
        </div>

        <div className="modal-footer">
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Salvando...' : 'Salvar cliente'}
          </button>
        </div>
      </form>
    </ModalContainer>
  );
};

export default ClientsModal;
