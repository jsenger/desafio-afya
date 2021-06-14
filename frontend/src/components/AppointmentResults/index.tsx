import { Dispatch, SetStateAction } from 'react';
import { Table } from 'react-bootstrap';
import { Appointment } from '../../types';
import { ResultsTable } from './styles';

interface AppointmentResultsProps {
  result: Appointment[];
  handleModalOpen: () => void;
  setCurrentAppointment: Dispatch<SetStateAction<Appointment>>;
  isLoading: boolean;
}

const AppointmentResults = ({
  result,
  handleModalOpen,
  setCurrentAppointment,
  isLoading,
}: AppointmentResultsProps) => {
  return (
    <ResultsTable>
      <Table striped bordered hover responsive="lg">
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Especialista</th>
            <th>Status</th>
            <th>Data de agendamento</th>
            <th>Data de atendimento</th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? 'Carregando...'
            : !Object.keys(result[0]).length
            ? 'Nenhum cliente cadastrado.'
            : result.map((appointment, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    handleModalOpen();
                    setCurrentAppointment({ ...appointment, new: false });
                  }}
                >
                  <td>{appointment.client?.name}</td>
                  <td>{appointment.specialist?.name}</td>
                  <td>
                    {appointment.status[0] +
                      appointment.status
                        .substr(1, appointment.status.length)
                        .toLowerCase()}
                  </td>
                  <td>
                    {appointment.appointment_date &&
                      new Intl.DateTimeFormat('pt-BR').format(
                        new Date(appointment.appointment_date)
                      )}
                  </td>
                  <td>
                    {appointment.date &&
                      new Intl.DateTimeFormat('pt-BR').format(
                        new Date(appointment.date)
                      )}
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </ResultsTable>
  );
};

export default AppointmentResults;
