import React from 'react';
import Scheduler from 'devextreme-react/scheduler';
import { CalendarContainer } from "./styles";

import ptMessages from "devextreme/localization/messages/pt.json";
import { locale, loadMessages } from "devextreme/localization";

const currentDate = new Date(2021, 2, 28);

const Calendar: React.FC = () => {
  loadMessages(ptMessages);
  locale(navigator.language);
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