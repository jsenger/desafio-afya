import Calendar from "../../../components/Calendar";
import { CalendarContainer } from "../../../components/Calendar/styles";
import Sidebar from "../../../components/Sidebar";

const Appointments: React.FC = () => {
  return (
    <CalendarContainer>
    <Sidebar title="Atendimentos" />
    <Calendar />
    </CalendarContainer>
  );
}

export default Appointments;