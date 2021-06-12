import { ChartContainer } from "./styles";
import ChartModal from "../ChartModal";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { api } from "../../services/api";
import { logout } from "../../services/logout";
import { Client } from "../../types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

interface PacientChartProps {
  clients: Client[];
  setClients: Dispatch<SetStateAction<Client[]>>;
  handleChartOpen: () => void;
  setCurrentClient: Dispatch<SetStateAction<Client>>;
}

const ClientChart = ({
  clients,
  setClients,
  handleChartOpen,
  setCurrentClient,
}: PacientChartProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

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

  // const handleChartOpen = () => {
  //   setModalIsOpen(true);
  // };

  return (
    <ChartContainer>
      {isLoading
        ? "Carregando..."
        : !Object.keys(clients[0]).length
        ? "Nenhum cliente cadastrado."
        : clients.map((client, index) => (
            <div className="chart-container" key={index}>
              <tbody className="chart-content">
                <div
                  onClick={() => {
                    handleChartOpen();
                    setCurrentClient({ ...client, new: false });
                  }}
                >
                  <h1>{client.name}</h1>
                  <p>
                    {client.created_at &&
                      new Intl.DateTimeFormat("pt-BR").format(
                        new Date(client.created_at)
                      )}
                  </p>
                  <p>{client.blood_type}</p>
                </div>
              </tbody>
              <div className="chart-buttons">
                <button type="button" onClick={handleChartOpen}>
                  Prontuário
                </button>
                <button>
                  <Link to="/appointments">Novo atendimento</Link>
                </button>
              </div>
            </div>
          ))}

      <ChartModal state={modalIsOpen} setState={setModalIsOpen} />
    </ChartContainer>
  );
};

export default ClientChart;
