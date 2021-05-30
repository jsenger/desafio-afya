import { useState } from 'react';

import ClientsModal from '../../../components/ClientsModal';
import Sidebar from '../../../components/Sidebar';
import ClientTable from '../../../components/Table';
import Search from '../../../components/Search';

import { ClientsContainer } from './styles';

const Clients: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  return (
    <>
<<<<<<< HEAD
    <Sidebar title="Clientes" />
    <Search />
    <ClientTable />
    </>

=======
      <ClientsContainer>
        <Sidebar title="Clientes" />
        <main>
          <button type="button" onClick={handleModalOpen}>
            Cadastrar cliente
          </button>
        </main>
      </ClientsContainer>
      <ClientsModal state={modalIsOpen} setState={setModalIsOpen} />
    </>
>>>>>>> 11c2663b641d2238231f3049b7ce49f50ba957b4
  );
};

export default Clients;
