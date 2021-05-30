import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import Swal from 'sweetalert2';
import { ModalContainer } from '../../assets/ModalStyles';
import { api } from '../../services/api';
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

interface ClientsModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

const ClientsModal = ({ state, setState }: ClientsModalProps) => {
  const [formDataContent, setFormDataContent] = useState<ClientData>(
    {} as ClientData
  );
  const [address, setAddress] = useState<Address>({} as Address);

  const handleModalClose = () => {
    setState(false);
  };

  return (
    <ModalContainer className={state ? 'show' : ''}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={handleModalClose}>
            &times;
          </span>
          <h4>Cadastro de cliente</h4>
        </div>

        <div className="modal-body">
          <form>
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

            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              name="cpf"
              id="cpf"
              onChange={e =>
                setFormDataContent({
                  ...formDataContent,
                  cpf: e.target.value,
                })
              }
            />

            <label htmlFor="phone">Telefone:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={e =>
                setFormDataContent({
                  ...formDataContent,
                  phone: e.target.value,
                })
              }
            />

            <label htmlFor="cellphone">Celular:</label>
            <input
              type="text"
              name="cellphone"
              id="cellphone"
              onChange={e =>
                setFormDataContent({
                  ...formDataContent,
                  cellphone: e.target.value,
                })
              }
            />

            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={e =>
                setFormDataContent({
                  ...formDataContent,
                  email: e.target.value,
                })
              }
            />

            <label htmlFor="bloodType">Tipo sanguíneo:</label>
            <select
              name="bloodType"
              id="bloodType"
              onChange={e =>
                setFormDataContent({
                  ...formDataContent,
                  blood_type: e.target.value,
                })
              }
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>

            <AddressForm address={address} setAddress={setAddress} />
          </form>
        </div>

        <div className="modal-footer">
          <button type="button">
            Salvar novo cliente
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ClientsModal;
