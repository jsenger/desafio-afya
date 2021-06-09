import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { api } from '../../../services/api';
import { logout } from '../../../services/logout';
import { Specialist } from '../../../types';
import { TableContainer } from './styles';

interface SpecialistsTableProps {
  specialists: Specialist[];
  setSpecialists: Dispatch<SetStateAction<Specialist[]>>;
  handleModalOpen: () => void;
  setCurrentSpecialist: Dispatch<SetStateAction<Specialist>>;
}

const SpecialistsTable = ({
  specialists,
  setSpecialists,
  handleModalOpen,
  setCurrentSpecialist,
}: SpecialistsTableProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
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
              ...specialist,
              profession_name: specialist.profession.name,
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
      })
      .finally(() => setIsLoading(false));
  }, [setSpecialists]);

  return (
    <TableContainer>
      <Table striped bordered hover responsive="lg">
        <thead>
          <tr>
            <th>Especialista</th>
            <th>Especialidade</th>
            <th>Registro</th>
            <th>E-mail</th>
            <th>Celular</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? 'Carregando...'
            : !Object.keys(specialists[0]).length
            ? 'Nenhum especialista cadastrado.'
            : specialists.map((specialist, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    handleModalOpen();
                    setCurrentSpecialist(specialist);
                  }}
                >
                  <td>{specialist.name}</td>
                  <td>{specialist.profession_name}</td>
                  <td>{specialist.register}</td>
                  <td>{specialist.email}</td>
                  <td>{specialist.cellphone}</td>
                  <td>{specialist.phone}</td>
                </tr>
              ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default SpecialistsTable;
