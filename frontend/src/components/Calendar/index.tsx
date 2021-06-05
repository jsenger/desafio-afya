import Scheduler, { Resource } from "devextreme-react/scheduler";
import ptMessages from "devextreme/localization/messages/pt.json";
import { locale, loadMessages } from "devextreme/localization";

import { CalendarContainer } from "./styles";

const currentDate = new Date();

const Calendar: React.FC = () => {
  loadMessages(ptMessages);
  locale(navigator.language);

  return (
    <CalendarContainer>
      <Scheduler
        className="scheduler-table"
        defaultCurrentView="week"
        defaultCurrentDate={currentDate}
        startDayHour={8}
        endDayHour={19}
      />
    </CalendarContainer>
  );
};

export default Calendar;
