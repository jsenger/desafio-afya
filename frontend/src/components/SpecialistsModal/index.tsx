import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';
import { ModalContainer } from '../../assets/ModalStyles';
import { api } from '../../services/api';
import { logout } from '../../services/logout';
import { Address, Specialist, Profession } from '../../types';
import AddressForm from '../AddressForm';
import Creatable from 'react-select/creatable';

interface SpecialistModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  specialists: Specialist[];
  setSpecialists: Dispatch<SetStateAction<Specialist[]>>;
  currentSpecialist: Specialist;
  setCurrentSpecialist: Dispatch<SetStateAction<Specialist>>;
}

interface ProfessionOption {
  value: string;
  label: string;
}

const SpecialistsModal = ({
  state,
  setState,
  specialists,
  setSpecialists,
  currentSpecialist,
  setCurrentSpecialist,
}: SpecialistModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [professions, setProfessions] = useState<ProfessionOption[]>([
    {} as ProfessionOption,
  ]);

  const handleModalClose = () => {
    setState(false);
  };

  const setAddress = (address: Address) => {
    setCurrentSpecialist({...currentSpecialist, address})
  }

  const specialistSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      const form = e.currentTarget;

      e.preventDefault();

      if (form.checkValidity()) {
        setIsLoading(true);

        api
          .post('specialists', currentSpecialist, {
            headers: {
              authorization: `Bearer ${localStorage.getItem('@tokenVitality')}`,
            },
          })
          .then(response => {
            setSpecialists([currentSpecialist, ...specialists]);
            Swal.fire({
              title: 'Sucesso!',
              text: 'Especialista cadastrado com sucesso.',
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
              'Specialist already booked with this register'
            ) {
              errorMessage = 'Registro já cadastrado.';
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
        Swal.fire({
          title: 'Ops!',
          text: 'Verifique se todos os campos estão preenchidos corretamente.',
          icon: 'error',
          confirmButtonText: 'Fechar',
          confirmButtonColor: '#ff312e',
        });
      }
    },
    [currentSpecialist, specialists, setSpecialists]
  );

  useEffect(() => {
    api
      .get('professions', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@tokenVitality')}`,
        },
      })
      .then(response => {
        setProfessions(
          response.data.map((profession: Profession) => {
            return { value: profession.name, label: profession.name };
          })
        );
      });
  }, []);

  return (
    <ModalContainer className={state ? 'show' : ''}>
      <form className="modal-content" onSubmit={specialistSubmit} noValidate>
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
                value={currentSpecialist.name || ''}
                required
                onChange={e =>
                  setCurrentSpecialist({
                    ...currentSpecialist,
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
                  value={currentSpecialist.register || ''}
                  required
                  onChange={e =>
                    setCurrentSpecialist({
                      ...currentSpecialist,
                      register: e.target.value,
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
                  value={currentSpecialist.phone || ''}
                  pattern="^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$"
                  required
                  onChange={e =>
                    setCurrentSpecialist({
                      ...currentSpecialist,
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
                  value={currentSpecialist.cellphone || ''}
                  pattern="^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$"
                  required
                  onChange={e =>
                    setCurrentSpecialist({
                      ...currentSpecialist,
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
                  value={currentSpecialist.email || ''}
                  required
                  onChange={e =>
                    setCurrentSpecialist({
                      ...currentSpecialist,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="specialty">Especialidade</label>
                <Creatable
                  options={professions}
                  type="specialty"
                  name="specialty"
                  id="specialty"
                  disabled={isLoading}
                  value={
                    {
                      value: currentSpecialist.profession_name,
                      label: currentSpecialist.profession_name,
                    } || ''
                  }
                  required
                  onChange={(e: any) => {
                    setCurrentSpecialist({
                      ...currentSpecialist,
                      profession_name: e?.value || '',
                    });
                  }}
                  formatCreateLabel={(label: string) => `Criar ${label}`}styles={{
                    option: (styles, { isSelected }) => ({
                      ...styles,
                      color: isSelected ? '#fff' : '#495057',
                    }),
                  }}
                />
              </div>
            </div>
            <AddressForm
              address={currentSpecialist.address}
              setAddress={setAddress}
              isLoading={isLoading}
            />
          </form>
        </div>

        <div className="modal-footer">
          <button type="submit">
            {isLoading ? 'Salvando...' : 'Salvar novo Especialista'}
          </button>
        </div>
      </form>
    </ModalContainer>
  );
};

export default SpecialistsModal;
