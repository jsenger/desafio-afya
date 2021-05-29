import { DashboardContainer } from './styles';
import Sidebar from '../../../components/Sidebar'

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Sidebar title="Dashboard" />
      <div>
        <h1>Dashboard</h1>
      </div>
    </DashboardContainer>
  );
}

export default Dashboard;