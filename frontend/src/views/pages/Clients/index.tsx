import { useState } from 'react';

import ClientsModal from '../../../components/ClientsModal';
import Sidebar from '../../../components/Sidebar';
import ClientsTable from '../../../components/Table/Clients';
import Search from '../../../components/Search';

import { ClientsContainer } from './styles';

import { Client } from '../../../types';

const Clients: React.FC = () => {
  const [currentClient, setCurrentClient] = useState<Client>({} as Client);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [clients, setClients] = useState<Client[]>([{} as Client]);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <ClientsContainer>
        <Sidebar title="Clientes" />
        <main>
          <button
            className="register-button"
            type="button"
            onClick={() => {
              handleModalOpen();
              setCurrentClient({} as Client);
              setCurrentClient({ ...currentClient, new: true });
            }}
          >
            Cadastrar cliente
          </button>
        </main>
        <Search
          title="Pesquisar Clientes:"
          endpoint="clients"
          setResult={setClients}
        />
        <ClientsTable
          clients={clients}
          setClients={setClients}
          handleModalOpen={handleModalOpen}
          setCurrentClient={setCurrentClient}
        />
      </ClientsContainer>
      <ClientsModal
        state={modalIsOpen}
        setState={setModalIsOpen}
        clients={clients}
        setClients={setClients}
        currentClient={currentClient}
        setCurrentClient={setCurrentClient}
      />
    </>
  );
};

export default Clients;
