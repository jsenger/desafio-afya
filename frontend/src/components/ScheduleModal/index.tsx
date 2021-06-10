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

import { ScheduleContainer } from './styles';
import { Appointment, Client } from '../../types';

interface ScheduleModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

interface SelectOption {
  value: string;
  label: string;
}

const ScheduleModal = ({ state, setState }: ScheduleModalProps) => {
  const [isLoadingAppointment, setIsLoadingAppointment] =
    useState<boolean>(false);

  const [clients, setClients] = useState<SelectOption[]>([{} as SelectOption]);

  const [specialists, setSpecialists] = useState<SelectOption[]>([
    {} as SelectOption,
  ]);

  const [currentAppointment, setCurrentAppointment] = useState<Appointment>(
    {} as Appointment
  );

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

  return (
    <ScheduleContainer className={state ? 'show' : ''}>
      <form className="modal-content" noValidate>
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
              name="name"
              id="name"
              disabled={isLoadingAppointment}
              options={clients}
              required
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
              />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="amount">Valor:</label>
              <input
                className="form-control"
                type="number"
                name="amount"
                id="amount"
                disabled={isLoadingAppointment}
                required
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
              >
                <option value="Agendado">Agendado</option>
                <option value="Realizado">Realizado</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </div>

            <div className="form-group col-sm-6">
              <label htmlFor="specialists">Especialista:</label>
              <Select
                name="specialists"
                id="specialists"
                disabled={isLoadingAppointment}
                options={specialists}
                required
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
            disabled={isLoadingAppointment}
            required
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
