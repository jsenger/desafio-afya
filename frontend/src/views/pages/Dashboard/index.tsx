import { DashboardContainer } from "./styles";
import Sidebar from "../../../components/Sidebar";
import DashboardChart from "../../../components/DashboardChart";
import PieChartComponent from "../../../components/PieChart";

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Sidebar title="Dashboard" />
      <h1>Welcome, Fulana!</h1>
      <DashboardChart />
      <PieChartComponent />
    </DashboardContainer>
  );
};

export default Dashboard;
