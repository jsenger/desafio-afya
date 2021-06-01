import { Dispatch, SetStateAction, useCallback, useState } from "react";
import Swal from "sweetalert2";
import { ModalContainer } from "../../assets/ModalStyles";
import { api } from "../../services/api";
import AddressForm from "../AddressForm";

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
    <ModalContainer className={state ? "show" : ""}>
      <div className="modal-content">
        <div className="modal-header">
          <h4>Cadastro de cliente</h4>
          <span className="close" onClick={handleModalClose}>
            &times;
          </span>
        </div>

        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                onChange={(e) =>
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
                <input
                  className="form-control"
                  type="text"
                  name="cpf"
                  id="cpf"
                  onChange={(e) =>
                    setFormDataContent({
                      ...formDataContent,
                      cpf: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="phone">Telefone:</label>
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={(e) =>
                    setFormDataContent({
                      ...formDataContent,
                      phone: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="cellphone">Celular:</label>
                <input
                  className="form-control"
                  type="text"
                  name="cellphone"
                  id="cellphone"
                  onChange={(e) =>
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
                  onChange={(e) =>
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
                  onChange={(e) =>
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
              </div>
            </div>

            <AddressForm address={address} setAddress={setAddress} />
          </form>
        </div>

        <div className="modal-footer">
          <button type="button">Salvar novo cliente</button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ClientsModal;
