import PieChart, {
  Legend,
  Series,
  Tooltip,
  Format,
  Label,
  Connector,
} from "devextreme-react/pie-chart";

import { specialtiesList } from "./data";

import { PieChartContainer } from "./styles";

const PieChartComponent: React.FC = () => {
  const customizeTooltip = (arg: any) => {
    return {
      text: `${arg.valueText} - ${(arg.percent * 100).toFixed(2)}%`,
    };
  };

  return (
    <PieChartContainer>
      <div className="pie-container">
        <PieChart
          id="pie"
          type="doughnut"
          title="Especialidades cadastradas"
          palette="Soft Pastel"
          dataSource={specialtiesList}
        >
          <Series argumentField="specialtie">
            <Label visible={true}>
              <Connector visible={true} />
            </Label>
          </Series>
          <Legend horizontalAlignment="right" verticalAlignment="top" />
          <Tooltip enabled={true} customizeTooltip={customizeTooltip}>
            <Format />
          </Tooltip>
        </PieChart>
      </div>
    </PieChartContainer>
  );
};

export default PieChartComponent;
