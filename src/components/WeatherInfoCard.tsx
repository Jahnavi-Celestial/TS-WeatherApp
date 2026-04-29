interface WeatherInfoCardProps {
  icon: string;
  label: string;
  value: string;
  id: string;
}

const WeatherInfoCard = ({ icon, label, value, id }: WeatherInfoCardProps) => {
  return (
    <div className="otherWeatherInfo light-div">
      <div className="temp-icons">
        <i className={icon} style={{ fontSize: "25px" }}></i>
      </div>
      <div className="data">
        <p style={{ padding: "10px 0" }}>{label}</p>
        <h3 id={id}>{value}</h3>
      </div>
    </div>
  );
};

export default WeatherInfoCard;