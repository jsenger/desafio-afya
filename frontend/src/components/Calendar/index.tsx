import Scheduler, { Resource } from "devextreme-react/scheduler";
import ptMessages from "devextreme/localization/messages/pt.json";
import { locale, loadMessages } from "devextreme/localization";

import { CalendarContainer } from "./styles";
import { useState } from "react";

import ScheduleModal from "../ScheduleModal";

const currentDate = new Date();

const Calendar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
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
        onCellClick={handleModalOpen}
      />
      <ScheduleModal setState={setIsModalOpen} state={isModalOpen} />
    </CalendarContainer>
  );
};

export default Calendar;
