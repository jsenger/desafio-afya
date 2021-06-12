import Scheduler, { Resource } from 'devextreme-react/scheduler';
import ptMessages from 'devextreme/localization/messages/pt.json';
import { locale, loadMessages } from 'devextreme/localization';
import Swal from 'sweetalert2';

import { api } from '../../services/api';
import { logout } from '../../services/logout';
import { Appointment } from '../../types';

import { CalendarContainer } from './styles';
import { useEffect, useState } from 'react';

import ScheduleModal from '../ScheduleModal';

interface CalendarAppointment extends Appointment {
  text: string;
  startDate: Date;
}

const Calendar: React.FC = () => {
  const [appointments, setAppointments] = useState<CalendarAppointment[]>([
    {} as CalendarAppointment,
  ]);

  const [currentAppointment, setCurrentAppointment] = useState<Appointment>(
    {} as Appointment
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

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
            console.log(appointment);
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
            date: e.cellData.startDate.toISOString(),
          } as Appointment);
          handleModalOpen();
        }}
        onAppointmentClick={e => {
          e.cancel = true;
          setCurrentAppointment(e.appointmentData);
          handleModalOpen();
        }}
      />
      <ScheduleModal
        setState={setIsModalOpen}
        state={isModalOpen}
        currentAppointment={currentAppointment}
        setCurrentAppointment={setCurrentAppointment}
      />
    </CalendarContainer>
  );
};

export default Calendar;
