import Scheduler from 'devextreme-react/scheduler';

const currentDate = new Date(2021, 2, 28);

const Calendar: React.FC = () => {

  return (
    <Scheduler
    timeZone="South_America/Sao_Paulo"
    defaultCurrentView="week"
    defaultCurrentDate={currentDate}
    height={600}
    startDayHour={9}

    />
  );
}

export default Calendar;