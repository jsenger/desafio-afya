import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Calendar from '../../../components/Calendar';
import SearchAppointment from '../../../components/SearchAppointment';

import Sidebar from '../../../components/Sidebar';
import { api } from '../../../services/api';
import { logout } from '../../../services/logout';
import { Appointment, SelectOption } from '../../../types';

const Appointments: React.FC = () => {
  const [clients, setClients] = useState<SelectOption[]>([{} as SelectOption]);

  const [specialists, setSpecialists] = useState<SelectOption[]>([
    {} as SelectOption,
  ]);

  const [currentAppointment, setCurrentAppointment] = useState<Appointment>(
    {} as Appointment
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
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
    <>
      <Sidebar title="Atendimentos" />
      <SearchAppointment
        clients={clients}
        specialists={specialists}
        handleModalOpen={handleModalOpen}
        setCurrentAppointment={setCurrentAppointment}
      />
      <Calendar
        clients={clients}
        specialists={specialists}
        handleModalOpen={handleModalOpen}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        setCurrentAppointment={setCurrentAppointment}
        currentAppointment={currentAppointment}
      />
    </>
  );
};

export default Appointments;
