interface DayForecastCardProps {
  day: string;
  time: string;
  temp: string;
  index: number;
}

const DayForecastCard = ({ day, time, temp, index }: DayForecastCardProps) => {
  return (
    <div className="completeDayInfo">
      <div className="info">
        <div id={`day-${index}`}>{day}</div>
        <div id={`date-${index}`}>{time}</div>
      </div>
      <div id={`curTemp-${index}`}>{temp}</div>
    </div>
  );
};

export default DayForecastCard;