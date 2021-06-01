import { Table } from 'react-bootstrap';
import {TableContainer} from './styles';


const SpecialistsTable: React.FC = () => {
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
        <tr>
          <td>Naruto Uzumaki</td>
          <td>Oftalmologista</td>
          <td>12343453</td>
          <td>naruto@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
        <tr>
          <td>Sasuke Uchiha</td>
          <td>Oftalmologista</td>
          <td>12343453</td>
          <td>uchihasasuke@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
        <tr>
          <td>Honda Tohru</td>
          <td>Psiquiatria</td>
          <td>12343453</td>
          <td>tohru@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
        <tr>
          <td>Kyo Sohma</td>
          <td>Cardiologista</td>
          <td>12343453</td>
          <td>kyonkyon@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
        <tr>
          <td>Momiji Sohma</td>
          <td>Dermatologista</td>
          <td>12343453</td>
          <td>momiji@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
        <tr>
          <td>Morticia Addams</td>
          <td>Neurologista</td>
          <td>12343453</td>
          <td>mortaddams@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
        <tr>
          <td>Gomez Addams</td>
          <td>Oftalmologista</td>
          <td>12343453</td>
          <td>mortaddams@gmail.com</td>
          <td>(21) 99990000</td>
          <td>(21)22223333</td>
        </tr>
      </tbody>
    </Table>
    </TableContainer>
  );
}

export default SpecialistsTable;