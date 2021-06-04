import Scheduler from 'devextreme-react/scheduler';
import { CalendarContainer } from "./styles";


const currentDate = new Date(2021, 2, 28);

const Calendar: React.FC = () => {

  return (
   <CalendarContainer>
      <Scheduler
    timeZone="South_America/Sao_Paulo"
    defaultCurrentView="week"
    defaultCurrentDate={currentDate}
    startDayHour={8}


    />
   </CalendarContainer>
  );
}

export default Calendar;