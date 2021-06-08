import { useState } from 'react';

import Sidebar from '../../../components/Sidebar';
import { SpecialistsContainer } from './styles';
import SpecialistsModal from '../../../components/SpecialistsModal';
import ProfessionsModal from '../../../components/ProfessionsModal';
import SpecialistsTable from '../../../components/Table/Specialists';
import Search from '../../../components/Search';
import { Specialist } from '../../../types';

const Specialists: React.FC = () => {
  const [currentSpecialist, setCurrentSpecialist] = useState<Specialist>(
    {} as Specialist
  );
  const [specialists, setSpecialists] = useState<Specialist[]>([
    {} as Specialist,
  ]);
  const [specialistModalIsOpen, setSpecialistModalIsOpen] =
    useState<boolean>(false);

  const [professionModalIsOpen, setProfessionModalIsOpen] =
    useState<boolean>(false);

  const handleSpecialistModalOpen = () => {
    setSpecialistModalIsOpen(true);
  };

  const handleProfessionModalOpen = () => {
    setProfessionModalIsOpen(true);
  };

  return (
    <>
      <SpecialistsContainer>
        <Sidebar title="Especialistas" />
        <main>
          <button
            className="register-button"
            type="button"
            onClick={() => {
              handleSpecialistModalOpen();
              setCurrentSpecialist({} as Specialist);
            }}
          >
            Cadastrar Especialista
          </button>
          <button
            className="special-button"
            type="button"
            onClick={handleProfessionModalOpen}
          >
            Cadastrar Especialidade
          </button>
        </main>
        <Search
          title="Pesquisar especialistas:"
          endpoint="specialists"
          setResult={setSpecialists}
        />
        <SpecialistsTable
          specialists={specialists}
          setSpecialists={setSpecialists}
          handleModalOpen={handleSpecialistModalOpen}
          setCurrentSpecialist={setCurrentSpecialist}
        />
      </SpecialistsContainer>
      <SpecialistsModal
        state={specialistModalIsOpen}
        setState={setSpecialistModalIsOpen}
        specialists={specialists}
        setSpecialists={setSpecialists}
        currentSpecialist={currentSpecialist}
        setCurrentSpecialist={setCurrentSpecialist}
      />
      <ProfessionsModal
        state={professionModalIsOpen}
        setState={setProfessionModalIsOpen}
      />
    </>
  );
};

export default Specialists;
