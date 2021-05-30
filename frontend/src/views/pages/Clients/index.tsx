import Sidebar from '../../../components/Sidebar';
import ClientTable from '../../../components/Table';
import Search from '../../../components/Search';

const Clients: React.FC = () => {
  return (
    <>
    <Sidebar title="Clientes" />
    <Search />
    <ClientTable />
    </>

  );
}

export default Clients;