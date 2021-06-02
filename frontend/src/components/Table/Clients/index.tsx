import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { api } from '../../../services/api';
import { TableContainer } from './styles';

interface Client {
  name: string;
  email: string;
  cellphone: string;
  phone: string;
}

const ClientsTable: React.FC = () => {
  const [clients, setClients] = useState<Array<Client>>([{} as Client]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    api
      .get('clients', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@tokenVitality')}`,
        },
      })
      .then(response => {
        setClients(response.data);
      })
      .catch(err => {
        Swal.fire({
          title: 'Ops!',
          text: 'Houve um erro ao carregar seus dados.',
          icon: 'error',
          confirmButtonText: 'Atualizar',
        }).then(response => window.location.reload());
      })
      .finally(() => setIsLoading(false));
  },[]);

  return (
    <TableContainer>
      <Table striped bordered hover responsive="lg">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>E-mail</th>
            <th>Celular</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? 'Carregando...'
            : !Object.keys(clients[0]).length
            ? 'Nenhum cliente cadastrado.'
            : clients.map((client, index) => (
                <tr key={index}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.cellphone}</td>
                  <td>{client.phone}</td>
                </tr>
              ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default ClientsTable;
