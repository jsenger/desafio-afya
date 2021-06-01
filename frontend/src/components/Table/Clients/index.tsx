import { Table } from 'react-bootstrap';
import {TableContainer} from './styles';


const ClientsTable: React.FC = () => {
  return (
    <TableContainer>
      <Table striped bordered hover responsive="lg" >
      <thead>
        <tr>
          <th>Cliente</th>
          <th>E-mail</th>
          <th>Celular</th>
          <th>Telefone</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Naruto Uzumaki</td>
          <td>naruto@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
          <td><button className="btn btn-sm btn-warning rounded">Editar</button></td>
          <td><button className="btn btn-sm btn-danger rounded">Excluir</button></td>
        </tr>
        <tr>
          <td>Sasuke Uchiha</td>
          <td>uchihasasuke@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
        <tr>
          <td>Honda Tohru</td>
          <td>tohru@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
        <tr>
          <td>Kyo Sohma</td>
          <td>kyonkyon@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
        <tr>
          <td>Momiji Sohma</td>
          <td>momiji@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
        <tr>
          <td>Morticia Addams</td>
          <td>mortaddams@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
        <tr>
          <td>Gomez Addams</td>
          <td>mortaddams@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
      </tbody>
    </Table>
    </TableContainer>
  );
}

export default ClientsTable;