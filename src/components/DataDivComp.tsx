interface DataDivCompProps {
  date: Date;
  item: any;
}

const DataDivComp = ({ date, item }: DataDivCompProps) => {
  const day = date.toLocaleDateString("en-US", { weekday: "short" });

  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const temp = item ? `${Math.round(item.main.temp)}°C` : "32°C";

  const weather = item ? item.weather[0].main : "cloud";

  return (
    <div className="curDiv light-div">
      <div>
        <p>{formattedDate} {day}</p>
        <h4>{time}</h4>
      </div>

      <div className="right-data">
        <i className="fa-solid fa-cloud-moon" style={{ fontSize: "25px" }}></i>
        <div>
          <h4>{temp}</h4>
          <p>{weather}</p>
        </div>
      </div>
    </div>
  );
};

export default DataDivComp;
