import React from "react";
import { Table } from "react-bootstrap";
import { ResultsTable } from "./styles";
const AppointmentResults: React.FC = () => {
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
          {/* {isLoading
            ? "Carregando..."
            : !Object.keys(clients[0]).length
            ? "Nenhum cliente cadastrado."
            : clients.map((client, index) => ( */}
          <tr
          // key={index}
          // onClick={() => {
          //   handleModalOpen();
          //   setCurrentClient({ ...client, new: false });
          // }}
          >
            <td>oi</td>
            <td>oi</td>
            <td>oi</td>
            <td>oi</td>
            <td>oi</td>
          </tr>
          {/* ))} */}
        </tbody>
      </Table>
    </ResultsTable>
  );
};

export default AppointmentResults;
