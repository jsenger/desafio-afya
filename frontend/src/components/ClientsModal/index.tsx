import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import Swal from 'sweetalert2';
import InputMask from 'react-input-mask';

import { api } from '../../services/api';

import { ModalContainer } from '../../assets/ModalStyles';
import AddressForm from '../AddressForm';

interface Address {
  cep: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
}

interface ClientData {
  name: string;
  cpf: string;
  phone: string;
  cellphone: string;
  blood_type: string;
  email: string;
  address: Address;
}

interface Client {
  name: string;
  email: string;
  cellphone: string;
  phone: string;
}

interface ClientsModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  clients: Client[];
  setClients: Dispatch<SetStateAction<Client[]>>;
}

const ClientsModal = ({ state, setState, clients, setClients }: ClientsModalProps) => {
  const [formDataContent, setFormDataContent] = useState<ClientData>(
    {} as ClientData
  );
  const [address, setAddress] = useState<Address>({} as Address);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleModalClose = () => {
    setState(false);
  };

  formDataContent.address = { ...address };

  const clientSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      const form = e.currentTarget;

      e.preventDefault();

      if (form.checkValidity()) {
        setIsLoading(true);

        api
          .post('clients', formDataContent, {
            headers: {
              authorization: `Bearer ${localStorage.getItem('@tokenVitality')}`,
            },
          })
          .then(response => {
            setClients([formDataContent, ...clients])
            Swal.fire({
              title: 'Sucesso!',
              text: 'Cliente cadastrado com sucesso.',
              icon: 'success',
              confirmButtonText: 'Fechar',
            });
          })
          .catch(err => {
            Swal.fire({
              title: 'Ops!',
              text: 'Dados incorretos.',
              icon: 'error',
              confirmButtonText: 'Fechar',
            });
          })
          .finally(() => setIsLoading(false));
      } else {
        Swal.fire({
          title: 'Ops!',
          text: 'Verifique se todos os campos estão preenchidos corretamente.',
          icon: 'error',
          confirmButtonText: 'Fechar',
        });
      }
    },
    [formDataContent, clients, setClients]
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
              required
              onChange={e =>
                setFormDataContent({
                  ...formDataContent,
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
                disabled={isLoading}
                required
                onChange={e =>
                  setFormDataContent({
                    ...formDataContent,
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
                disabled={isLoading}
                required
                onChange={e =>
                  setFormDataContent({
                    ...formDataContent,
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
                disabled={isLoading}
                required
                onChange={e =>
                  setFormDataContent({
                    ...formDataContent,
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
                disabled={isLoading}
                required
                onChange={e =>
                  setFormDataContent({
                    ...formDataContent,
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
                required
                onChange={e =>
                  setFormDataContent({
                    ...formDataContent,
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
            address={address}
            setAddress={setAddress}
            isLoading={isLoading}
          />
        </div>

        <div className="modal-footer">
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Salvando...' : 'Salvar novo cliente'}
          </button>
        </div>
      </form>
    </ModalContainer>
  );
};

export default ClientsModal;
