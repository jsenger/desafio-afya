import PieChart, {
  Legend,
  Series,
  Tooltip,
  Format,
  Label,
  Connector,
} from 'devextreme-react/pie-chart';

import { PieChartContainer } from './styles';

interface PieChartComponentProps {
  quantityProfessions: object;
}

const PieChartComponent = ({ quantityProfessions }: PieChartComponentProps) => {
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
          dataSource={Object.keys(quantityProfessions).map(
            (profession, index) => {
              return {
                profession,
                val: Object.values(quantityProfessions)[index],
              };
            }
          )}
        >
          <Series argumentField="profession">
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
