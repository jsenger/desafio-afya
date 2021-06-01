// import { Container } from './styles';

import { useState } from "react";

import SpecialistsModal from '../../../components/SpecialistsModal';
import { SpecialistsContainer } from './styles';
import Sidebar from "../../../components/Sidebar";

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
        </main>
    </SpecialistsContainer>
    <SpecialistsModal state={modalIsOpen} setState={setModalIsOpen} />
    </>
  );
}

export default Specialists;