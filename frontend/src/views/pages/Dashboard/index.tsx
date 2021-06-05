import { DashboardContainer } from './styles';
import Sidebar from '../../../components/Sidebar';


const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Sidebar title="Dashboard" />
      <h1>Welcome, Fulana!</h1>

      <div className="content">
        <img src="./img/medcare.svg" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis sed lorem eget elementum. Sed fringilla dui porttitor odio convallis semper. Donec non commodo nunc. Nam aliquam placerat orci in bibendum. Pellentesque pharetra volutpat rhoncus. Sed suscipit dolor turpis, ut convallis orci dapibus sed. Morbi ornare purus mauris, sit amet bibendum elit mattis et. Phasellus laoreet felis sit amet dapibus vulputate. Nam aliquet tincidunt ullamcorper.
        </p>
      </div>
    </DashboardContainer>
  );
}

export default Dashboard;