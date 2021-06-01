import { useState } from "react";

import Sidebar from "../../../components/Sidebar";
import { SpecialistsContainer } from './styles';
import SpecialistsModal from '../../../components/SpecialistsModal';
import ProfessionsModal from "../../../components/ProfessionsModal";
import SpecialistsTable from "../../../components/Table/Specialists";

const Specialists: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  return (
    <>
    <SpecialistsContainer>
    <Sidebar title="Especialistas"/>
      <main>
        <button className="register-button" type="button" onClick={handleModalOpen}>
          Cadastrar Especialista
        </button>
        <button className="special-button" type="button" onClick={handleModalOpen}>
          Cadastrar Especialidade
        </button>
      </main>
      <SpecialistsTable />
    </SpecialistsContainer>
    <SpecialistsModal state={modalIsOpen} setState={setModalIsOpen} />
    <ProfessionsModal state={modalIsOpen} setState={setModalIsOpen} />
    </>
  );
}

export default Specialists;