import { useState } from "react";

import Sidebar from "../../../components/Sidebar";
import { SpecialistsContainer } from './styles';
import SpecialistsModal from '../../../components/SpecialistsModal';
import ProfessionsModal from "../../../components/ProfessionsModal";
import SpecialistsTable from "../../../components/Table/Specialists";
import Search from "../../../components/Search";

const Specialists: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalTwoIsOpen, setModalTwoIsOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalTwoOpen = () => {
    setModalTwoIsOpen(true);
  };

  return (
    <>
    <SpecialistsContainer>
    <Sidebar title="Especialistas"/>
      <main>
        <button className="register-button" type="button" onClick={handleModalOpen}>
          Cadastrar Especialista
        </button>
        <button className="special-button" type="button" onClick={handleModalTwoOpen}>
          Cadastrar Especialidade
        </button>
      </main>
      <Search title="Pesquisar especialistas:"/>
      <SpecialistsTable />
    </SpecialistsContainer>
    <SpecialistsModal state={modalIsOpen} setState={setModalIsOpen} />
    <ProfessionsModal state={modalTwoIsOpen} setState={setModalTwoIsOpen} />
    </>
  );
}

export default Specialists;