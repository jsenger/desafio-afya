import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Swal from "sweetalert2";
import { api } from "../../../services/api";
import { logout } from "../../../services/logout";
import { Client } from "../../../types";
import { TableContainer } from "./styles";

interface ClientsTableProps {
  clients: Client[];
  setClients: Dispatch<SetStateAction<Client[]>>;
  handleModalOpen: () => void;
  setCurrentClient: Dispatch<SetStateAction<Client>>;
}

const ClientsTable = ({
  clients,
  setClients,
  handleModalOpen,
  setCurrentClient,
}: ClientsTableProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    api
      .get("clients", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("@tokenVitality")}`,
        },
      })
      .then((response) => {
        setClients(response.data);
      })
      .catch((err) => {
        if (err.response.data.message === "Invalid JWT token") {
          logout();
        } else {
          Swal.fire({
            title: "Ops!",
            text: "Houve um erro ao carregar seus dados.",
            icon: "error",
            confirmButtonText: "Atualizar",
            confirmButtonColor: "#ff312e",
          }).then((response) => window.location.reload());
        }
      })
      .finally(() => setIsLoading(false));
  }, [setClients]);

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
            ? "Carregando..."
            : !Object.keys(clients[0]).length
            ? "Nenhum cliente cadastrado."
            : clients.map((client, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    handleModalOpen();
                    setCurrentClient({ ...client, new: false });
                  }}
                >
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
