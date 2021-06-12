import Sidebar from "../../../components/Sidebar";
import ClientChart from "../../../components/ClientChart";
import Search from "../../../components/Search";
import { ChartPageContainer } from "./styles";

import { Client } from "../../../types";
import { useState } from "react";

const Charts: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([{} as Client]);

  return (
    <ChartPageContainer>
      <Sidebar title="Prontuários" />
      <Search
        title="Pesquisar pacientes"
        endpoint="clients"
        setResult={setClients}
      />
      <ClientChart clients={clients} setClients={setClients} />
    </ChartPageContainer>
  );
};

export default Charts;
