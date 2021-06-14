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
import { Appointment, SelectOption } from '../../types';

interface ScheduleModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  currentAppointment: Appointment;
  setCurrentAppointment: Dispatch<SetStateAction<Appointment>>;
  getAppointments: () => void;
  clients: SelectOption[];
  specialists: SelectOption[];
}

const ScheduleModal = ({
  state,
  setState,
  currentAppointment,
  setCurrentAppointment,
  getAppointments,
  clients,
  specialists,
}: ScheduleModalProps) => {
  const [isLoadingAppointment, setIsLoadingAppointment] =
    useState<boolean>(false);

  const [needDescription, setNeedDescription] = useState<boolean>(false);

  const handleModalClose = () => {
    setState(false);
  };

  const appointmentSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      const form = e.currentTarget;

      const appointment: Appointment = {
        date: currentAppointment.date,
        amount: currentAppointment.amount,
        status: currentAppointment.status,
        client_id: currentAppointment.client_id,
        specialist_id: currentAppointment.specialist_id,
        description: currentAppointment.description || '',
      };
      console.log(appointment);

      e.preventDefault();

      if (form.checkValidity()) {
        setIsLoadingAppointment(true);

        if (currentAppointment.new) {
          api
            .post('medical-cares', appointment, {
              headers: {
                authorization: `Bearer ${localStorage.getItem(
                  '@tokenVitality'
                )}`,
              },
            })
            .then(response => {
              getAppointments();

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
          appointment.id = currentAppointment.id;

          api
            .put('medical-cares', appointment, {
              headers: {
                authorization: `Bearer ${localStorage.getItem(
                  '@tokenVitality'
                )}`,
              },
            })
            .then(response => {
              getAppointments();

              Swal.fire({
                title: 'Sucesso!',
                text: 'Atendimento atualizado com sucesso.',
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
                case "You can't modify a medical care appointment status where already finished":
                  errorMessage =
                    'Não é possível alterar atendimentos já realizados.';
                  break;
                case 'Specialist not found':
                  errorMessage = 'Especialista não encontrado.';
                  break;
                case 'Client not found':
                  errorMessage = 'Cliente não encontrado.';
                  break;
                case 'This medical care already canceled':
                  errorMessage = 'Esse atendimento já foi cancelado.';
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
              isDisabled={
                isLoadingAppointment ||
                (currentAppointment.status !== 'AGENDADO' && !needDescription)
              }
              options={clients}
              required
              value={{
                value: currentAppointment.client_id || '',
                label: currentAppointment.client_id
                  ? `${currentAppointment.client?.name} - CPF: ${currentAppointment.client?.cpf}`
                  : '',
              }}
              onChange={e =>
                setCurrentAppointment({
                  ...currentAppointment,
                  client_id: e?.value || '',
                  client: {
                    name: e?.label.split(' - ')[0] || '',
                    cpf: e?.label.split(' CPF: ')[1] || '',
                  },
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
                disabled={
                  isLoadingAppointment ||
                  (currentAppointment.status !== 'AGENDADO' && !needDescription)
                }
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
                disabled={
                  isLoadingAppointment ||
                  (currentAppointment.status !== 'AGENDADO' && !needDescription)
                }
                required
                value={
                  currentAppointment.date
                    ? new Intl.DateTimeFormat('default', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                      }).format(new Date(currentAppointment.date))
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
                disabled={
                  isLoadingAppointment ||
                  (currentAppointment.status !== 'AGENDADO' && !needDescription)
                }
                required
                value={currentAppointment.amount || ''}
                thousandSeparator={'.'}
                decimalSeparator={','}
                fixedDecimalScale={true}
                decimalScale={2}
                onChange={e =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    amount: Number(
                      e.target.value.replace('.', '').replace(',', '.')
                    ),
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
                disabled={
                  isLoadingAppointment ||
                  (currentAppointment.status !== 'AGENDADO' && !needDescription)
                }
                required
                value={currentAppointment.status || ''}
                onChange={e => {
                  if (
                    currentAppointment.status === 'AGENDADO' &&
                    e.target.value === 'REALIZADO'
                  )
                    setNeedDescription(true);
                  else setNeedDescription(false);

                  setCurrentAppointment({
                    ...currentAppointment,
                    status: e.target.value,
                  });
                }}
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
                isDisabled={
                  isLoadingAppointment ||
                  (currentAppointment.status !== 'AGENDADO' && !needDescription)
                }
                options={specialists}
                required
                value={{
                  value: currentAppointment.specialist_id || '',
                  label: currentAppointment.specialist_id
                    ? `${currentAppointment.specialist?.name}`
                    : '',
                }}
                onChange={e =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    specialist_id: e?.value || '',
                    specialist: {
                      name: e?.label || '',
                    },
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
            disabled={isLoadingAppointment || !needDescription}
            required={currentAppointment.status === 'REALIZADO'}
            placeholder={
              currentAppointment.status === 'AGENDADO'
                ? 'Altere o status para realizado para editar a descrição'
                : ''
            }
            onChange={e =>
              setCurrentAppointment({
                ...currentAppointment,
                description: e.target.value,
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
