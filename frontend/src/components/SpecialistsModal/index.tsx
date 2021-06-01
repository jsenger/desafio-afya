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

interface SpecialistData {
  name: string;
  register: string;
  phone: string;
  cellphone: string;
  email: string;
  specialtie: string;
}

interface SpecialistModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

const SpecialistsModal = ({ state, setState }: SpecialistModalProps) => {
  const [formDataContent, setFormDataContent] = useState<SpecialistData>(
    {} as SpecialistData
  );

  const [address, setAddress] = useState<Address>({} as Address);

  const handleModalClose = () => {
    setState(false);
  };

  return (
    <ModalContainer className={state ? "show" : ""}>
      <div className="modal-content">
        <div className="modal-header">
          <h4>Cadastro de Especialista</h4>
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
                <label htmlFor="register">Registro:</label>
                <input
                  className="form-control"
                  type="text"
                  name="register"
                  id="register"
                  onChange={(e) =>
                    setFormDataContent({
                      ...formDataContent,
                      register: e.target.value,
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
                <label htmlFor="email">Especialidade</label>
                <input
                  className="form-control"
                  type="specialtie"
                  name="specialtie"
                  id="specialtie"
                  onChange={(e) =>
                    setFormDataContent({
                      ...formDataContent,
                      specialtie: e.target.value,
                    })
                  }
                />
              </div>
            </div>
              <AddressForm address={address} setAddress={setAddress} />
          </form>
        </div>

        <div className="modal-footer">
          <button type="button">Salvar novo Especialista</button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default SpecialistsModal;
