import Calendar from "../../../components/Calendar";
import SearchAppointment from "../../../components/SearchAppointment";

import Sidebar from "../../../components/Sidebar";

const Appointments: React.FC = () => {
  return (
    <>
      <Sidebar title="Atendimentos" />
      <SearchAppointment />

      <Calendar />
    </>
  );
};

export default Appointments;
