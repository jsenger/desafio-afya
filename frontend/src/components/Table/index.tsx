import { Table } from 'react-bootstrap';
import {TableContainer} from './styles';


const ClientTable: React.FC = () => {
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
        <tr>
          <td>Luciana Oliveira</td>
          <td>luoliveiradacunha@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
        <tr>
          <td>Jéssica Senger</td>
          <td>jess@gmail.com</td>
          <td>(21) 99954500</td>
          <td>(21)222123333</td>
        </tr>
        <tr>
          <td>Luciana Oliveira</td>
          <td>luoliveiradacunha@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
        <tr>
          <td>Luciana Oliveira</td>
          <td>luoliveiradacunha@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
      </tbody>
    </Table>
    </TableContainer>
  );
}

export default ClientTable;