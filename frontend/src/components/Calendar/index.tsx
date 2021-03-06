import Scheduler, { Resource } from 'devextreme-react/scheduler';
import ptMessages from 'devextreme/localization/messages/pt.json';
import { locale, loadMessages } from 'devextreme/localization';
import Swal from 'sweetalert2';

import { api } from '../../services/api';
import { logout } from '../../services/logout';
import { Appointment, SelectOption } from '../../types';

import { CalendarContainer } from './styles';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import ScheduleModal from '../ScheduleModal';

interface CalendarAppointment extends Appointment {
  text: string;
  startDate: Date;
}

interface StatusColors {
  id: string;
  color: string;
}

interface CalendarProps {
  clients: SelectOption[];
  specialists: SelectOption[];
  handleModalOpen: () => void;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  setCurrentAppointment: Dispatch<SetStateAction<Appointment>>;
  currentAppointment: Appointment;
}

const Calendar = ({
  clients,
  specialists,
  handleModalOpen,
  setIsModalOpen,
  isModalOpen,
  setCurrentAppointment,
  currentAppointment,
}: CalendarProps) => {
  const [appointments, setAppointments] = useState<CalendarAppointment[]>([
    {} as CalendarAppointment,
  ]);

  const [statusColors] = useState<StatusColors[]>([
    { id: 'AGENDADO', color: 'var(--main-color)' },
    { id: 'REALIZADO', color: 'var(--secondary-color)' },
    { id: 'CANCELADO', color: 'var(--danger-color)' },
  ]);

  const getAppointments = () => {
    api
      .get('medical-cares', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@tokenVitality')}`,
        },
      })
      .then(response =>
        setAppointments(
          response.data.map((appointment: Appointment) => {
            return {
              ...appointment,
              startDate: new Date(appointment.date),
              text: `${appointment.client?.name} - CPF: ${appointment.client?.cpf}`,
            };
          })
        )
      )
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

  loadMessages(ptMessages);
  locale(navigator.language);

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <CalendarContainer>
      <Scheduler
        className="scheduler-table"
        defaultCurrentView="day"
        dataSource={appointments}
        defaultCurrentDate={new Date()}
        startDayHour={8}
        endDayHour={19}
        onCellClick={e => {
          setCurrentAppointment({
            new: true,
            status: 'AGENDADO',
            date: e.cellData.startDate.toISOString(),
          } as Appointment);
          handleModalOpen();
        }}
        onAppointmentClick={e => {
          e.cancel = true;
          setCurrentAppointment({ ...e.appointmentData, new: false });
          handleModalOpen();
        }}
      >
        <Resource fieldExpr="status" dataSource={statusColors} />
      </Scheduler>
      <ScheduleModal
        setState={setIsModalOpen}
        state={isModalOpen}
        currentAppointment={currentAppointment}
        setCurrentAppointment={setCurrentAppointment}
        getAppointments={getAppointments}
        clients={clients}
        specialists={specialists}
      />
    </CalendarContainer>
  );
};

export default Calendar;
