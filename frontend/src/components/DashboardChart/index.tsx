import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";

import { DashboardChartContainer } from "./styles";

const DashboardChart: React.FC = () => {
  return (
    <DashboardChartContainer>
      <section className="chart-container">
        <div className="pacients">
          <h1>0</h1>
          <p>Pacientes cadastrados</p>
        </div>
        <div className="confirmed">
          <h1>0</h1>
          <p>
            Atendimentos confirmados <AiOutlineCheckCircle />
          </p>
        </div>
        <div className="accomplished">
          <h1>0</h1>
          <p>
            Atendimentos realizados <IoMdDoneAll />
          </p>
        </div>
        <div className="canceled">
          <h1>0</h1>
          <p>
            Atendimentos cancelados <ImCancelCircle />
          </p>
        </div>
      </section>
    </DashboardChartContainer>
  );
};

export default DashboardChart;
