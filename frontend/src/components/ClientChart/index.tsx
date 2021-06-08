import { ChartContainer } from "./styles";
import ChartModal from "../ChartModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const ClientChart: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleChartOpen = () => {
    setModalIsOpen(true);
  };

  return (
    <ChartContainer>
      <div className="chart-container">
        <div className="chart-content">
          <h1>Luciana Oliveira da Cunha</h1>
          <h2>Idade: 25 anos, 2 meses, 3 dias</h2>
          <small>Data de entrada: 12/05/2021</small>
        </div>
        <div className="chart-buttons">
          <button type="button" onClick={handleChartOpen}>
            Prontuário
          </button>
          <button>
            <Link to="/appointments">Novo atendimento</Link>
          </button>
        </div>
      </div>
      <div className="chart-container">
        <div className="chart-content">
          <h1> Fulano de tal</h1>
          <h2>Idade: 25 anos, 2 meses, 3 dias</h2>
          <small>Último atendimento: 12/05/2021</small>
        </div>
        <div className="chart-buttons">
          <button type="button" onClick={handleChartOpen}>
            Prontuário
          </button>
          <button>
            <Link to="/appointments">Novo atendimento</Link>
          </button>
        </div>
      </div>
      <div className="chart-container">
        <div className="chart-content">
          <h1>Fulano de tal</h1>
          <h2>Idade: 25 anos, 2 meses, 3 dias</h2>
          <small>Último atendimento: 12/05/2021</small>
        </div>
        <div className="chart-buttons">
          <button type="button" onClick={handleChartOpen}>
            Prontuário
          </button>
          <button>
            <Link to="/appointments">Novo atendimento</Link>
          </button>
        </div>
      </div>
      <ChartModal state={modalIsOpen} setState={setModalIsOpen} />
    </ChartContainer>
  );
};

export default ClientChart;
