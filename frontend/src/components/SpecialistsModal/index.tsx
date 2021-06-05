import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import Swal from 'sweetalert2';
import { ModalContainer } from '../../assets/ModalStyles';
import { api } from '../../services/api';
import { Address, Specialist } from '../../types';
import AddressForm from '../AddressForm';

interface SpecialistModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

const SpecialistsModal = ({ state, setState }: SpecialistModalProps) => {
  const [formDataContent, setFormDataContent] = useState<Specialist>(
    {} as Specialist
  );
  const [address, setAddress] = useState<Address>({} as Address);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleModalClose = () => {
    setState(false);
  };

  return (
    <ModalContainer className={state ? 'show' : ''}>
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
                disabled={isLoading}
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
                <label htmlFor="register">Registro:</label>
                <input
                  className="form-control"
                  type="text"
                  name="register"
                  id="register"
                  disabled={isLoading}
                  onChange={e =>
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
                  disabled={isLoading}
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
                <input
                  className="form-control"
                  type="text"
                  name="cellphone"
                  id="cellphone"
                  disabled={isLoading}
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
                  onChange={e =>
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
                  type="specialty"
                  name="specialty"
                  id="specialty"
                  disabled={isLoading}
                  onChange={e =>
                    setFormDataContent({
                      ...formDataContent,
                      specialty: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <AddressForm
              address={address}
              setAddress={setAddress}
              isLoading={isLoading}
            />
          </form>
        </div>

        <div className="modal-footer">
          <button type="button">
            {isLoading ? 'Salvando...' : 'Salvar novo Especialista'}
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default SpecialistsModal;
