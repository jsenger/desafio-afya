import { DashboardContainer } from './styles';
import Sidebar from '../../../components/Sidebar';
import DashboardChart from '../../../components/DashboardChart';
import PieChartComponent from '../../../components/PieChart';
import { useEffect } from 'react';
import { api } from '../../../services/api';
import { logout } from '../../../services/logout';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

interface DashboardData {
  medicalCaresCanceled: number;
  medicalCaresCompleted: number;
  medicalCaresConfirmed: number;
  quantityClients: number;
  quantityProfessions: object;
}

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [dashboardData, setDashboardData] = useState<DashboardData>(
    {} as DashboardData
  );

  useEffect(() => {
    api
      .get('dashboard', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('@tokenVitality')}`,
        },
      })
      .then(response => setDashboardData(response.data))
      .catch(err => {
        if (err.response.data.message === 'Invalid JWT token') {
          logout();
        } else {
          Swal.fire({
            title: 'Ops!',
            text: 'Houve um erro ao carregar seus dados.',
            icon: 'error',
            confirmButtonText: 'Atualizar',
            confirmButtonColor: '#ff312e',
          }).then(response => window.location.reload());
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <DashboardContainer className={isLoading ? 'text-center' : ''}>
      <Sidebar title="Dashboard" />
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Carregando...</span>
        </Spinner>
      ) : (
        <>
          <h1>Olá, {localStorage.getItem('@userNameVitality')}!</h1>
          <DashboardChart
            medicalCaresCanceled={dashboardData.medicalCaresCanceled}
            medicalCaresCompleted={dashboardData.medicalCaresCompleted}
            medicalCaresConfirmed={dashboardData.medicalCaresConfirmed}
            quantityClients={dashboardData.quantityClients}
          />
          <PieChartComponent
            quantityProfessions={dashboardData.quantityProfessions}
          />
        </>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
