import React from 'react';
import Scheduler from 'devextreme-react/scheduler';
import { CalendarContainer } from "./styles";

import ptMessages from "devextreme/localization/messages/pt.json";
import { locale, loadMessages } from "devextreme/localization";

const currentDate = new Date(2021, 2, 28);

class Calendar extends React.Component  {
  constructor(props: any) {
    super(props);
    loadMessages(ptMessages);
    locale(navigator.language);
}
  render() {
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
}


// const Calendar: React.FC = () => {
//   return (
//         <CalendarContainer loadMessages={ptMessages}
//         locale={navigator.language}>
//           <Scheduler
//           timeZone="South_America/Sao_Paulo"
//           defaultCurrentView="week"
//           defaultCurrentDate={currentDate}
//           startDayHour={8}

//           />
//         </CalendarContainer>
//         );
// }


export default Calendar;