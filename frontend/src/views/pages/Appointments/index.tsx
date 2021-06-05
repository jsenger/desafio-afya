import Calendar from "../../../components/Calendar";

import Sidebar from "../../../components/Sidebar";

const Appointments: React.FC = () => {
  return (
    <>
    <Sidebar title="Atendimentos" />
    <Calendar />
    </>
  );
}

export default Appointments;