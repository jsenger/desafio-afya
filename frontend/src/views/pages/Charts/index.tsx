import Sidebar from "../../../components/Sidebar";
import ClientChart from "../../../components/ClientChart";
import Search from "../../../components/Search";
import { ChartPageContainer } from "./styles";

import { Client } from "../../../types";
import { useState } from "react";

const Charts: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([{} as Client]);
  const [currentClient, setCurrentClient] = useState<Client>({} as Client);
  const [isChartOpen, setIsChartOpen] = useState<boolean>(false);
  const handleChartOpen = () => {
    setIsChartOpen(true);
  };

  return (
    <ChartPageContainer>
      <Sidebar title="Prontuários" />
      <Search
        title="Pesquisar pacientes"
        endpoint="clients"
        setResult={setClients}
      />
      <ClientChart
        clients={clients}
        setClients={setClients}
        handleChartOpen={handleChartOpen}
        setCurrentClient={setCurrentClient}
      />
    </ChartPageContainer>
  );
};

export default Charts;
