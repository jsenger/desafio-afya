import { AiOutlineCheckCircle } from 'react-icons/ai';
import { IoMdDoneAll } from 'react-icons/io';
import { ImCancelCircle } from 'react-icons/im';

import { DashboardChartContainer } from './styles';

interface DashboardChartProps {
  medicalCaresCanceled: number;
  medicalCaresCompleted: number;
  medicalCaresConfirmed: number;
  quantityClients: number;
}

const DashboardChart = ({
  medicalCaresCanceled,
  medicalCaresCompleted,
  medicalCaresConfirmed,
  quantityClients,
}: DashboardChartProps) => {
  return (
    <DashboardChartContainer>
      <section className="chart-container">
        <div className="pacients">
          <h1>{quantityClients}</h1>
          <p>Pacientes cadastrados</p>
        </div>
        <div className="confirmed">
          <h1>{medicalCaresConfirmed}</h1>
          <p>
            Atendimentos confirmados <AiOutlineCheckCircle />
          </p>
        </div>
        <div className="accomplished">
          <h1>{medicalCaresCompleted}</h1>
          <p>
            Atendimentos realizados <IoMdDoneAll />
          </p>
        </div>
        <div className="canceled">
          <h1>{medicalCaresCanceled}</h1>
          <p>
            Atendimentos cancelados <ImCancelCircle />
          </p>
        </div>
      </section>
    </DashboardChartContainer>
  );
};

export default DashboardChart;
