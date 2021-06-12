import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { api } from '../../services/api';
import { logout } from '../../services/logout';

import Select from 'react-select';
import Swal from 'sweetalert2';
import NumberFormat from 'react-number-format';

import { ScheduleContainer } from './styles';
import { Appointment } from '../../types';

interface ScheduleModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  currentAppointment: Appointment;
  setCurrentAppointment: Dispatch<SetStateAction<Appointment>>;
}

interface SelectOption {
  value: string;
  label: string;
}

const ScheduleModal = ({
  state,
  setState,
  currentAppointment,
  setCurrentAppointment,
}: ScheduleModalProps) => {
  const [isLoadingAppointment, setIsLoadingAppointment] =
    useState<boolean>(false);

  const [clients, setClients] = useState<SelectOption[]>([{} as SelectOption]);

  const [specialists, setSpecialists] = useState<SelectOption[]>([
    {} as SelectOption,
  ]);

  const handleModalClose = () => {
    setState(false);
  };

  const getClients = () => {
    api
      .get('clients', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@tokenVitality')}`,
        },
      })
      .then(response => {
        setClients(
          response.data.map((client: any) => {
            return {
              value: client.id,
              label: `${client.name} - CPF: ${client.cpf}`,
            };
          })
        );
      })
      .catch(err => {
        if (err.response.data.message === 'Invalid JWT token') {
          logout();
        } else {
          Swal.fire({
            title: 'Ops!',
            text: 'Houve um erro ao carregar seus dados.',
            icon: 'error',
            confirmButtonText: 'Atualizar',
            confirmButtonColor: '#ff312e',
          }).then(response => window.location.reload());
        }
      });
  };

  const getSpecialists = () => {
    api
      .get('specialists', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@tokenVitality')}`,
        },
      })
      .then(response => {
        setSpecialists(
          response.data.map((specialist: any) => {
            return {
              value: specialist.id,
              label: `${specialist.name} - ${specialist.profession.name}`,
            };
          })
        );
      })
      .catch(err => {
        if (err.response.data.message === 'Invalid JWT token') {
          logout();
        } else {
          Swal.fire({
            title: 'Ops!',
            text: 'Houve um erro ao carregar seus dados.',
            icon: 'error',
            confirmButtonText: 'Atualizar',
            confirmButtonColor: '#ff312e',
          }).then(response => window.location.reload());
        }
      });
  };

  useEffect(() => {
    getClients();
    getSpecialists();
  }, []);

  const appointmentSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      const form = e.currentTarget;

      e.preventDefault();

      if (form.checkValidity()) {
        setIsLoadingAppointment(true);

        api
          .post('medical-cares', currentAppointment, {
            headers: {
              authorization: `Bearer ${localStorage.getItem('@tokenVitality')}`,
            },
          })
          .then(response => {
            Swal.fire({
              title: 'Sucesso!',
              text: 'Atendimento criado com sucesso.',
              icon: 'success',
              confirmButtonText: 'Fechar',
              confirmButtonColor: '#004AAD',
            }).then(() => handleModalClose);
          })
          .catch(err => {
            let errorMessage = '';

            switch (err.response.data.message) {
              case 'Invalid JWT token':
                logout();
                break;
              case "You can't create an appointment on a past date":
                errorMessage =
                  'Não é possível criar atendimentos em datas anteriores.';
                break;
              case 'This appointment is already booked':
                errorMessage =
                  'Já existe um atendimento com o especialista escolhido neste horário.';
                break;
              case 'Specialist not found':
                errorMessage = 'Especialista não encontrado.';
                break;
              case 'Client not found':
                errorMessage = 'Cliente não encontrado.';
                break;
              default:
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
          .finally(() => setIsLoadingAppointment(false));
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
    [currentAppointment]
  );

  return (
    <ScheduleContainer className={state ? 'show' : ''}>
      <form className="modal-content" onSubmit={appointmentSubmit} noValidate>
        <div className="modal-header">
          <h4>Agendamento</h4>
          <span className="close" onClick={handleModalClose}>
            &times;
          </span>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="name">Paciente:</label>
            <Select
              className="select"
              name="name"
              id="name"
              disabled={isLoadingAppointment}
              options={clients}
              required
              value={
                {
                  value: currentAppointment.client_id || '',
                  label: currentAppointment.client_id ? `${currentAppointment.client?.name} - CPF: ${currentAppointment.client?.cpf}` : '',
                }
              }
              onChange={e =>
                setCurrentAppointment({
                  ...currentAppointment,
                  client_id: e?.value || '',
                })
              }
            ></Select>
          </div>
          <div className="form-row">
            <div className="form-group col-sm-4">
              <label htmlFor="date">Data de atendimento:</label>
              <input
                className="form-control"
                type="date"
                name="date"
                id="date"
                disabled={isLoadingAppointment}
                required
                value={
                  currentAppointment.date
                    ? currentAppointment.date.split('T')[0]
                    : ''
                }
                onChange={e => {
                  const [year, month, day] = e.target.value.split('-');

                  setCurrentAppointment({
                    ...currentAppointment,
                    date: new Date(
                      new Date(
                        new Date(
                          new Date(currentAppointment.date).setFullYear(
                            Number(year)
                          )
                        ).setMonth(Number(month) - 1)
                      ).setDate(Number(day))
                    ).toISOString(),
                  });
                }}
              />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="time">Hora de atendimento:</label>
              <input
                className="form-control"
                type="time"
                name="time"
                id="time"
                disabled={isLoadingAppointment}
                required
                value={
                  currentAppointment.date
                    ? currentAppointment.date
                        .split('T')[1]
                        .split(':')
                        .slice(0, 2)
                        .join(':')
                    : ''
                }
                onChange={e => {
                  const [hour, minute] = e.target.value.split(':');

                  setCurrentAppointment({
                    ...currentAppointment,
                    date: new Date(
                      new Date(
                        new Date(currentAppointment.date).setHours(Number(hour))
                      ).setMinutes(Number(minute))
                    ).toISOString(),
                  });
                }}
              />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="amount">Valor:</label>
              <NumberFormat
                className="form-control"
                name="amount"
                id="amount"
                disabled={isLoadingAppointment}
                required
                value={currentAppointment.amount || ''}
                thousandSeparator={'.'}
                decimalSeparator={','}
                fixedDecimalScale={true}
                decimalScale={2}
                onChange={e =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    amount: Number(e.target.value.replace('.', '').replace(',', '.')),
                  })
                }
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-sm-6">
              <label htmlFor="status">Status:</label>
              <select
                className="form-control"
                name="status"
                id="status"
                disabled={isLoadingAppointment}
                required
                value={currentAppointment.status || ''}
                onChange={e =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    status: e.target.value,
                  })
                }
              >
                <option value="AGENDADO">Agendado</option>
                <option value="REALIZADO">Realizado</option>
                <option value="CANCELADO">Cancelado</option>
              </select>
            </div>

            <div className="form-group col-sm-6">
              <label htmlFor="specialists">Especialista:</label>
              <Select
                className="select"
                name="specialists"
                id="specialists"
                disabled={isLoadingAppointment}
                options={specialists}
                required
                value={
                  {
                    value: currentAppointment.specialist_id || '',
                    label: currentAppointment.specialist_id ? `${currentAppointment.specialist?.name}` : '',
                  }
                }
                onChange={e =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    specialist_id: e?.value || '',
                  })
                }
              ></Select>
            </div>
          </div>
        </div>
        <div className="form-group col-sm-12">
          <label htmlFor="description">Descrição:</label>
          <textarea
            className="form-control"
            name="description"
            id="description"
            value={currentAppointment.description || ''}
            disabled={isLoadingAppointment}
            required={currentAppointment.status === 'REALIZADO'}
            onChange={e =>
              setCurrentAppointment({
                ...currentAppointment,
                specialist_id: e.target.value,
              })
            }
          />
        </div>
        <div className="modal-footer">
          <button type="submit" disabled={isLoadingAppointment}>
            {isLoadingAppointment ? 'Salvando...' : 'Salvar atendimento'}
          </button>
        </div>
      </form>
    </ScheduleContainer>
  );
};

export default ScheduleModal;
